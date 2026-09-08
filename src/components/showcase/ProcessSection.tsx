"use client";

import { motion } from "framer-motion";
import styles from "@/app/isidora-stella.module.css";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-72px" } as const,
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
});

interface ProcessStep {
  num: string;
  title: string;
  body: string;
}

const steps: ProcessStep[] = [
  {
    num: "01",
    title: "Getting to Know the Project",
    body: "Every project begins with a conversation about goals, budget, timeline, site, and brand, and the people who will use the space. From there I begin shaping a direction through space planning, mood boards, and early material and furniture concepts, creating a point of view that feels right for the client, the location, and the experience of the space.",
  },
  {
    num: "02",
    title: "Developing the Design",
    body: "As the direction becomes clearer, the design moves into detail. Finishes, furniture, lighting, fabrics, and custom pieces are selected with both the look and the function of the space in mind, balancing how it feels against how it will hold up over time.",
  },
  {
    num: "03",
    title: "Drawing It Out",
    body: "The design is translated into drawings, schedules, specifications, and presentation materials. These documents communicate the design clearly to the contractors, consultants, and vendors who bring it to life.",
  },
  {
    num: "04",
    title: "Working Through the Details",
    body: "As the project moves forward, I review drawings, samples, and finish options, resolve questions as they come up on site, and help guide installation and styling. These final decisions bring everything together so the space feels complete, comfortable, and memorable.",
  },
];

export default function ProcessSection() {
  return (
    <section className={styles.process} id="process">
      <div className={styles.processInner}>
        <motion.div {...fadeUp(0)} className={styles.processHeader}>
          <p className={styles.sectionLabel}>My Process</p>
          <h2 className={styles.aboutHeading}>Design Process</h2>
          <p className={styles.processIntro}>
            A well-designed space should feel natural, but getting there takes a clear process. I start by
            understanding the project, then build the design layer by layer, from the overall direction to
            the finishes, furniture, drawings, and final details.
          </p>
          <p className={styles.processIntro}>
            The process can shift depending on the scope, but the goal stays the same: to create a space
            that feels thoughtful, functional, and connected to its setting.
          </p>
        </motion.div>

        <div className={styles.processSteps}>
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              {...fadeUp(0.1)}
              className={styles.processStep}
            >
              <span className={styles.processNum}>{step.num}</span>
              <div className={styles.processTextCol}>
                <h3 className={styles.processStepTitle}>{step.title}</h3>
                <p className={styles.processStepBody}>{step.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
