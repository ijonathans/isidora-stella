"use client";

import { motion } from "framer-motion";
import styles from "@/app/isidora-stella.module.css";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-72px" } as const,
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
});

export default function AboutSection() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.aboutInner}>
        <motion.div {...fadeUp(0)} className={styles.aboutPortraitCol}>
          <div className={styles.aboutPortraitFrame}>
            <div className={styles.aboutPortraitPlaceholder} aria-hidden="true" />
            <div className={styles.aboutPortraitCaption}>Isidora Stella — Atlanta & Jakarta</div>
          </div>
        </motion.div>

        <motion.div {...fadeUp(0.18)} className={styles.aboutBioCol}>
          <p className={styles.sectionLabel}>About Me</p>
          <h2 className={styles.aboutHeading}>
            Designing spaces<br />that elevate<br />how people live.
          </h2>

          <p className={styles.aboutBody}>
            I am Isidora Stella Yubelia — an award-winning interior designer currently
            at Hirsch Bedner Associates (HBA), one of the world&apos;s leading hospitality
            design firms. Based between Atlanta, GA and Jakarta, Indonesia, I specialize
            in luxury hospitality and high-end multifamily developments.
          </p>
          <p className={styles.aboutBody}>
            My work bridges cultural contexts — drawing from my upbringing in Jakarta and
            my formal training at the Savannah College of Art and Design. Every project
            begins with deep research into site, culture, and the human experience of space.
            I craft environments where materiality, light, and proportion serve a singular vision.
          </p>

          <div className={styles.aboutCredentials}>
            <div className={styles.aboutCredential}>
              <span className={styles.aboutCredentialLabel}>Education</span>
              <span className={styles.aboutCredentialValue}>
                B.F.A. Interior Design — Savannah College of Art and Design (SCAD)
              </span>
            </div>
            <div className={styles.aboutCredential}>
              <span className={styles.aboutCredentialLabel}>Current Role</span>
              <span className={styles.aboutCredentialValue}>
                Interior Designer — Hirsch Bedner Associates (HBA), Atlanta
              </span>
            </div>
            <div className={styles.aboutCredential}>
              <span className={styles.aboutCredentialLabel}>Practice</span>
              <span className={styles.aboutCredentialValue}>
                Luxury Hospitality · High-End Multifamily · Residential
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
