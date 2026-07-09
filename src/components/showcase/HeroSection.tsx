"use client";

import { motion } from "framer-motion";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

const NAME = "Isidora Stella Yubelia";

const nameContainer = {
  initial: {},
  animate: {
    transition: { staggerChildren: 0.04, delayChildren: 0.2 },
  },
};

const nameChar = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_OUT_EXPO },
  },
};

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
          initial="initial"
          animate="animate"
          variants={nameContainer}
          aria-label={NAME}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white tracking-wide"
        >
          {NAME.split("").map((char, i) => (
            <motion.span
              key={i}
              variants={nameChar}
              aria-hidden="true"
              className="inline-block"
            >
              {char === " " ? " " : char}
            </motion.span>
          ))}
        </motion.h1>
      </div>
    </section>
  );
}
