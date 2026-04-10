"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

interface ScrollVideoScrubResult {
  videoRef: React.RefObject<HTMLVideoElement | null>;
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
  loaderRef: React.RefObject<HTMLDivElement | null>;
  loaderFillRef: React.RefObject<HTMLDivElement | null>;
  barFillRef: React.RefObject<HTMLDivElement | null>;
  sectionRef: React.RefObject<HTMLElement | null>;
  progress: number; // scroll progress 0–1
  isReady: boolean;
  isMobile: boolean;
}

export function useScrollVideoScrub(
  sectionRefArg?: React.RefObject<HTMLElement | null>
): ScrollVideoScrubResult {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const loaderRef = useRef<HTMLDivElement>(null);
  const loaderFillRef = useRef<HTMLDivElement>(null);
  const barFillRef = useRef<HTMLDivElement>(null);
  const sectionRef = sectionRefArg ?? useRef<HTMLElement>(null);

  const [isReady, setIsReady] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [progress, setProgress] = useState(0);

  const framesRef = useRef<ImageBitmap[]>([]);
  const currentFrameRef = useRef(0);
  const rafRef = useRef<number>(0);

  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    prefersReducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setIsMobile(window.innerWidth <= 768);
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Canvas drawing
  const drawBitmap = useCallback((source: ImageBitmap | HTMLCanvasElement) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const cw = canvas.width;
    const ch = canvas.height;
    const sw = source.width;
    const sh = source.height;

    // Letterbox contain
    const scale = Math.min(cw / sw, ch / sh);
    const dw = sw * scale;
    const dh = sh * scale;
    const dx = (cw - dw) / 2;
    const dy = (ch - dh) / 2;

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(source as CanvasImageSource, dx, dy, dw, dh);
  }, []);

  const sizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
  }, []);

  // Frame extraction
  useEffect(() => {
    if (isMobile || prefersReducedMotion.current) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    const FPS = 24;
    const MAX_FRAMES = 180;
    const EXTRACT_WIDTH = 960;

    let cancelled = false;

    const seekAndWait = (time: number): Promise<void> =>
      new Promise((resolve) => {
        video.currentTime = time;
        const onSeeked = () => {
          video.removeEventListener("seeked", onSeeked);
          resolve();
        };
        video.addEventListener("seeked", onSeeked);
      });

    const extractFrames = async () => {
      sizeCanvas();

      const duration = video.duration;
      if (!duration || !isFinite(duration)) return;

      const totalFrames = Math.min(Math.ceil(duration * FPS), MAX_FRAMES);
      const timeStep = duration / totalFrames;
      const frames: ImageBitmap[] = [];

      for (let i = 0; i < totalFrames; i++) {
        if (cancelled) return;
        await seekAndWait(i * timeStep);

        // Create source canvas at extraction size
        const tempCanvas = document.createElement("canvas");
        tempCanvas.width = EXTRACT_WIDTH;
        tempCanvas.height = Math.round((video.videoHeight / video.videoWidth) * EXTRACT_WIDTH);
        const tempCtx = tempCanvas.getContext("2d")!;
        tempCtx.drawImage(video, 0, 0, tempCanvas.width, tempCanvas.height);

        try {
          const bitmap = await createImageBitmap(tempCanvas);
          frames.push(bitmap);
        } catch {
          // Fallback: store canvas clone
          frames.push(tempCanvas as unknown as ImageBitmap);
        }

        // Update progress bar
        const fillPct = (i + 1) / totalFrames;
        if (loaderFillRef.current) {
          loaderFillRef.current.style.transform = `scaleX(${fillPct})`;
        }
      }

      if (cancelled) return;
      framesRef.current = frames;

      // Draw first frame
      drawBitmap(frames[0]);
      setIsReady(true);

      // Hide loader
      if (loaderRef.current) {
        loaderRef.current.classList.add("isHidden");
      }
    };

    const onLoaded = () => {
      extractFrames();
      video.removeEventListener("loadedmetadata", onLoaded);
    };

    if (video.readyState >= 1) {
      extractFrames();
    } else {
      video.addEventListener("loadedmetadata", onLoaded);
    }

    return () => {
      cancelled = true;
      // Revoke bitmaps
      framesRef.current.forEach((f) => {
        if ("close" in f) (f as ImageBitmap).close();
      });
      framesRef.current = [];
    };
  }, [isMobile, drawBitmap, sizeCanvas]);

  // Scroll-driven playback
  const { scrollYProgress } = useScroll({
    target: sectionRef as React.RefObject<HTMLElement>,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v: number) => {
    setProgress(v);

    if (isMobile || prefersReducedMotion.current) return;
    if (!framesRef.current.length) return;

    const idx = Math.min(
      Math.floor(v * (framesRef.current.length - 1)),
      framesRef.current.length - 1
    );
    if (idx !== currentFrameRef.current) {
      currentFrameRef.current = idx;
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        drawBitmap(framesRef.current[idx]);
      });
    }

    // Update progress bar
    if (barFillRef.current) {
      barFillRef.current.style.transform = `scaleX(${v})`;
    }
  });

  // Handle resize
  useEffect(() => {
    if (isMobile) return;
    const onResize = () => {
      sizeCanvas();
      const idx = currentFrameRef.current;
      if (framesRef.current[idx]) {
        drawBitmap(framesRef.current[idx]);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [isMobile, sizeCanvas, drawBitmap]);

  return {
    videoRef,
    canvasRef,
    loaderRef,
    loaderFillRef,
    barFillRef,
    sectionRef,
    progress,
    isReady,
    isMobile,
  };
}
