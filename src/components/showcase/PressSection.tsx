"use client";

import { motion } from "framer-motion";
import styles from "@/app/isidora-stella.module.css";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-72px" } as const,
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
});

const accolades = [
  {
    award: "MUSE Design Awards",
    category: "Interior Design — Gold",
    year: "2024",
  },
  {
    award: "IDA Design Awards",
    category: "International Design Excellence",
    year: "2024",
  },
  {
    award: "ASID Gold Award",
    category: "Interior Design Achievement",
    year: "2023",
  },
  {
    award: "ASID Portfolio Award",
    category: "Emerging Designer Portfolio",
    year: "2023",
  },
  {
    award: "Metropolis Future100",
    category: "Next Generation of Design Leaders",
    year: "2024",
  },
];

export default function PressSection() {
  return (
    <section id="press" className="relative w-full py-24 md:py-32 bg-[#FAF9F6]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div {...fadeUp(0)} className="text-center mb-16 md:mb-24">
          <p
            className="font-cormorant text-xs tracking-[0.3em] uppercase text-[#999] mb-6"
          >
            Recognition
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-light text-[#1a1a1a] mb-6">
            Press & Accolades
          </h2>
          <div className="w-16 md:w-24 h-[1px] bg-[#d4af37] mx-auto opacity-60" />
        </motion.div>

        <div className="space-y-0">
          {accolades.map((item, i) => (
            <motion.div
              key={item.award}
              {...fadeUp(0.08 * (i + 1))}
              className="group border-t border-[#e0dcd6] py-8 md:py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-8 transition-colors duration-300 hover:bg-[#f0ece6]/50 px-4 md:px-8 -mx-4 md:-mx-8"
            >
              <div className="flex-1">
                <h3 className="font-cormorant text-2xl md:text-3xl font-light text-[#1a1a1a] group-hover:text-[#d4af37] transition-colors duration-300">
                  {item.award}
                </h3>
                <p className="font-cormorant text-sm text-[#888] mt-1 tracking-wide">
                  {item.category}
                </p>
              </div>
              <span className="font-cormorant text-sm tracking-[0.2em] text-[#aaa] uppercase">
                {item.year}
              </span>
            </motion.div>
          ))}
          <div className="border-t border-[#e0dcd6]" />
        </div>
      </div>
    </section>
  );
}
