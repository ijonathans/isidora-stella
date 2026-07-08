"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
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
  image: string;
}

const steps: ProcessStep[] = [
  {
    num: "01",
    title: "Getting to Know the Project",
    body: "Every project begins with a conversation about goals, budget, timeline, scope, site, brand, and the people who will use the space. This gives the design a clear foundation before any decisions are made.",
    image: "/images/potrait.png",
  },
  {
    num: "02",
    title: "Setting the Direction",
    body: "Once the project is understood, I begin shaping the overall direction through mood boards, reference imagery, space planning, finish ideas, and early furniture concepts. The goal is to create a point of view that feels right for the client, the location, and the experience of the space.",
    image: "/images/N 04A_Lobby_30176_Option02_2024-01-24_1064.jpg",
  },
  {
    num: "03",
    title: "Developing the Design",
    body: "As the direction becomes clearer, the design moves into more detail. Finishes, furniture, lighting, fabrics, fixtures, and custom pieces are selected with both the look and function of the space in mind.",
    image: "/images/seatFullBody_1.png",
  },
  {
    num: "04",
    title: "Drawing It Out",
    body: "The design is then translated into drawings, schedules, specifications, and presentation materials. These documents help communicate the design clearly to contractors, consultants, vendors, and the larger project team.",
    image: "/images/potrait.png",
  },
  {
    num: "05",
    title: "Working Through the Details",
    body: "As the project moves forward, I help review drawings, samples, finish options, furniture details, and vendor information. This keeps the design organized while allowing room for adjustments along the way.",
    image: "/images/N 04A_Lobby_30176_Option02_2024-01-24_1064.jpg",
  },
  {
    num: "06",
    title: "Finishing Touches",
    body: "The final stage brings everything together through furniture placement, lighting adjustments, styling, and small details. These last decisions help the space feel complete, comfortable, and memorable.",
    image: "/images/seatFullBody_1.png",
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
              className={cn(styles.processRow, i % 2 === 1 && styles.processRowReverse)}
            >
              <div className={styles.processImageFrame}>
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className={styles.processImage}
                />
              </div>
              <div className={styles.processTextCol}>
                <span className={styles.processNum}>{step.num}</span>
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
