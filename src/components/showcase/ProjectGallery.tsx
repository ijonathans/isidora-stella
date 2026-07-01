"use client";

import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;
  span?: "wide" | "tall" | "normal";
}

interface ProjectGalleryProps {
  images: GalleryImage[];
  mediaType: string;
}

export default function ProjectGallery({ images, mediaType }: ProjectGalleryProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const close = useCallback(() => setOpenIndex(null), []);
  const showPrev = useCallback(() => {
    setOpenIndex((current) =>
      current === null ? null : (current - 1 + images.length) % images.length
    );
  }, [images.length]);
  const showNext = useCallback(() => {
    setOpenIndex((current) => (current === null ? null : (current + 1) % images.length));
  }, [images.length]);

  useEffect(() => {
    if (openIndex === null) return;

    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [openIndex, close, showPrev, showNext]);

  return (
    <section className="px-4 md:px-8 pb-24 md:pb-32 max-w-7xl mx-auto">
      <p className="font-cormorant text-xs tracking-[0.3em] uppercase text-[#b8955a] mb-8 px-4">
        {mediaType}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 md:auto-rows-[360px]">
        {images.map((image, index) => {
          const isWide = image.span === "wide";

          return (
            <div
              key={index}
              role="button"
              tabIndex={0}
              onClick={() => setOpenIndex(index)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setOpenIndex(index);
                }
              }}
              className={[
                "relative overflow-hidden bg-[#f0ece6] aspect-[4/3] md:aspect-auto cursor-pointer",
                isWide ? "md:col-span-2" : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image.src}
                alt={image.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
          );
        })}
      </div>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {openIndex !== null && (
              <motion.div
                key="lightbox"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center"
                onClick={close}
              >
                {/* Close button */}
                <button
                  type="button"
                  onClick={close}
                  aria-label="Close"
                  className="absolute top-6 right-6 text-white/80 hover:text-[#b8955a] transition-colors duration-300 z-10"
                >
                  <X size={28} />
                </button>

                {/* Prev button */}
                {images.length > 1 && (
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      showPrev();
                    }}
                    aria-label="Previous image"
                    className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-[#b8955a] transition-colors duration-300 z-10"
                  >
                    <ChevronLeft size={36} />
                  </button>
                )}

                {/* Next button */}
                {images.length > 1 && (
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      showNext();
                    }}
                    aria-label="Next image"
                    className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-[#b8955a] transition-colors duration-300 z-10"
                  >
                    <ChevronRight size={36} />
                  </button>
                )}

                {openIndex !== null && (
                  <motion.div
                    key={openIndex}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    onClick={(event) => event.stopPropagation()}
                    className="flex flex-col items-center gap-4 px-4"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={images[openIndex].src}
                      alt={images[openIndex].alt}
                      className="max-h-[85vh] max-w-[90vw] object-contain"
                    />
                    <p className="font-cormorant text-sm tracking-[0.15em] uppercase text-white/60">
                      {images[openIndex].alt}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </section>
  );
}
