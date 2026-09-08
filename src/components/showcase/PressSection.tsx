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
    award: "Young Designers Collective (YDC)",
    category: "Ambassador for Atlanta's emerging design community, supporting curated events and industry engagement.",
    year: "2026",
    url: "#",
  },
  {
    award: "30 Under 30 Interior Design",
    category: "Named among emerging designers under 30 for design excellence, leadership, and industry impact.",
    year: "2025",
    url: "https://info.interiordesign.net/interior-design-30/30",
  },
  {
    award: "IDA Design Awards",
    category: "Bronze recognition for Conceptual Interior Design.",
    year: "2024",
    url: "https://www.idesignawards.com",
  },
  {
    award: "MUSE Design Awards",
    category: "Silver recognition for Cultural Interior Design.",
    year: "2023",
    url: "https://design.museaward.com",
  },
  {
    award: "ASID Design Excellence Award",
    category: "Gold recognition for Unique Space Design and Hospitality Design Concepts; Silver reconginition for Residential Design Concept.",
    year: "2023",
    url: "https://www.asid.org/resources/awards",
  },
  {
    award: "Metropolis Future100",
    category: "Named among North America's rising design talents reimagining the future of Interior Design.",
    year: "2022",
    url: "https://metropolismag.com/programs/future100/",
  },
  {
    award: "ASID Portfolio Competition",
    category: "Portfolio winner, recognized for concept, content, and contextual storytelling.",
    year: "2022",
    url: "https://www.asid.org/resources/awards/student-portfolio-competition",
  },
];

export default function PressSection() {
  return (
    <section id="press" className="relative w-full py-24 md:py-32 bg-[#FAF9F6]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div {...fadeUp(0)} className="text-center mb-16 md:mb-24">
          <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-light text-[#1a1a1a] mb-6">
            Awards & Recognition
          </h2>
          <div className="w-16 md:w-24 h-[1px] bg-[#d4af37] mx-auto opacity-60" />
        </motion.div>

        <div className="space-y-0">
          {accolades.map((item, i) => (
            <motion.div
              key={item.award}
              {...fadeUp(0.08 * (i + 1))}
              className="group border-t border-[#e0dcd6]"
            >
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${item.award} award details`}
                className="py-4 md:py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-8 transition-colors duration-300 hover:bg-[#f0ece6]/50 px-4 md:px-8 -mx-4 md:-mx-8 no-underline"
              >
                <div className="flex-1">
                  <h3 className="font-cormorant text-2xl md:text-3xl font-light text-[#1a1a1a] group-hover:text-[#d4af37] transition-colors duration-300 inline-flex items-center gap-2">
                    {item.award}
                    <span className="text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[#d4af37]">
                      ↗
                    </span>
                  </h3>
                  <p className="font-cormorant text-sm text-[#888] mt-1 tracking-wide">
                    {item.category}
                  </p>
                </div>
                <span className="font-cormorant text-sm tracking-[0.2em] text-[#aaa] uppercase">
                  {item.year}
                </span>
              </a>
            </motion.div>
          ))}
          <div className="border-t border-[#e0dcd6]" />
        </div>
      </div>
    </section>
  );
}
