"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "@/app/isidora-stella.module.css";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-72px" } as const,
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
});

export default function AboutSection() {
  const bioColRef = useRef<HTMLDivElement>(null);
  const [bioHeight, setBioHeight] = useState<number>();

  useLayoutEffect(() => {
    const bioCol = bioColRef.current;
    if (!bioCol) return;

    const mediaQuery = window.matchMedia("(min-width: 901px)");
    const updateHeight = () => {
      setBioHeight(mediaQuery.matches ? bioCol.offsetHeight : undefined);
    };
    updateHeight();

    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(bioCol);
    mediaQuery.addEventListener("change", updateHeight);
    return () => {
      resizeObserver.disconnect();
      mediaQuery.removeEventListener("change", updateHeight);
    };
  }, []);

  return (
    <section className={styles.about} id="about">
      <div className={styles.aboutInner}>
        <motion.div {...fadeUp(0)} className={styles.aboutPortraitCol}>
          <div
            className={styles.aboutPortraitFrame}
            style={bioHeight ? { height: bioHeight } : undefined}
          >
            <Image
              src="/images/potrait.png"
              alt="Isidora Stella"
              fill
              className={styles.aboutPortraitImage}
              priority
            />
          </div>
        </motion.div>

        <motion.div {...fadeUp(0.18)} className={styles.aboutBioCol} ref={bioColRef}>
          <div className={styles.aboutIntro}>
            <p className={styles.sectionLabel}>About Me</p>
            <h2 className={styles.aboutHeading}>
              Designing spaces with story<br />atmosphere, and a sense of place.
            </h2>

            <p className={styles.aboutBody}>
              Hi! I’m Stella, a hospitality interior designer shaped by Jakarta roots, Atlanta experience,
              and a curiosity for how people connect with spaces.From luxury hospitality to multifamily and
              branded environments, I create interiors that feel thoughtful, inviting, and memorable.
              My work blends culture, materiality, and guest experience with the technical precision needed to bring a concept to life.
            </p>
          </div>

          <div className={styles.aboutCredentials}>
            <div className={styles.aboutCredential}>
              <span className={styles.aboutCredentialLabel}>Education</span>
              <span className={styles.aboutCredentialValue}>
                B.F.A. Interior Design — Savannah College of Art and Design (SCAD)
              </span>
            </div>
            <div className={styles.aboutCredential}>
              <span className={styles.aboutCredentialLabel}>Approach</span>
              <span className={styles.aboutCredentialValue}>
                Culture | Materiality | Guest Experience | Technical Precision
              </span>
            </div>
            <div className={styles.aboutCredential}>
              <span className={styles.aboutCredentialLabel}>Focus</span>
              <span className={styles.aboutCredentialValue}>
                Hospitality Interiors | FF&E | Concept Development | Design Documentation | Construction Administration
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
