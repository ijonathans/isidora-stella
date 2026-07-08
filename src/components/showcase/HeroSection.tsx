"use client";

import { motion } from "framer-motion";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
});

export default function HeroSection() {
  return (
    <section id="hero" className="relative w-full h-[100dvh] overflow-hidden flex items-center justify-center">
      <video
        src="/HeroVideo_IsidoraStella.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover object-center"
        controls={false}
        disablePictureInPicture
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className={`relative z-10 flex flex-col items-center text-center px-6 ${cormorant.className}`}>
        <motion.h1
          {...fadeUp(0.1)}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white tracking-wide"
        >
          Isidora Stella Yubelia
        </motion.h1>
        <motion.p
          {...fadeUp(0.35)}
          className="mt-6 text-base sm:text-lg md:text-xl font-light tracking-[0.2em] uppercase text-white/80"
        >
          Award-Winning Interior Designer
        </motion.p>
      </div>
    </section>
  );
}
