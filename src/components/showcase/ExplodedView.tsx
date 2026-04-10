"use client";

import { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useScrollVideoScrub } from "./useScrollVideoScrub";
import styles from "@/app/isidora-stella.module.css";

export default function ExplodedView() {
  const sectionRef = useRef<HTMLElement>(null);
  const {
    videoRef,
    canvasRef,
    loaderRef,
    loaderFillRef,
    barFillRef,
    isReady,
    isMobile,
  } = useScrollVideoScrub(sectionRef);

  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    if (isMobile) {
      setTextVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => setTextVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    const el = sectionRef.current?.querySelector("[data-exploded-text]");
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, [isMobile]);

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <section className={styles.exploded} id="explodedView" ref={sectionRef}>
      <div className={styles.explodedPin}>
        {/* Hidden video source for frame extraction (desktop) or autoplay (mobile) */}
        <video
          ref={videoRef}
          src="/Interior_Camera_Pan_Video.mp4"
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          className={styles.explodedVideo}
          {...(isMobile || prefersReducedMotion
            ? { autoPlay: true, loop: true, style: { display: "block", width: "100%", height: "100%", objectFit: "cover" } as React.CSSProperties }
            : {})}
        />

        {/* Canvas for desktop frame scrub */}
        {!isMobile && !prefersReducedMotion && (
          <canvas
            ref={canvasRef}
            className={cn(styles.explodedCanvas, isReady && styles.isReady)}
            aria-hidden="true"
          />
        )}

        {/* Loading overlay */}
        {!isMobile && !prefersReducedMotion && (
          <div ref={loaderRef} className={styles.explodedLoader} aria-hidden="true">
            <p className={styles.explodedLoaderWordmark}>Isidora Stella</p>
            <div className={styles.explodedLoaderTrack}>
              <div ref={loaderFillRef} className={styles.explodedLoaderFill} />
            </div>
            <p className={styles.explodedLoaderLabel}>Preparing sequence</p>
          </div>
        )}

        {/* Bottom-left text overlay */}
        <div
          className={cn(styles.explodedText, textVisible && styles.isVisible)}
          data-exploded-text
        >
          <p className={cn(styles.sectionLabel, styles.explodedLabel)}>Spatial Intelligence</p>
          <h2 className={styles.explodedHeading}>
            Every detail,<br />considered.
          </h2>
          <p className={styles.explodedSub}>
            From structural shell to final flourish — a living room decomposed to its essence.
          </p>
        </div>

        {/* Scroll progress bar */}
        {!isMobile && !prefersReducedMotion && (
          <div className={styles.explodedBar} aria-hidden="true">
            <div ref={barFillRef} className={styles.explodedBarFill} />
          </div>
        )}
      </div>
    </section>
  );
}
