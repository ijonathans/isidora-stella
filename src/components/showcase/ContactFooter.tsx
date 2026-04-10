"use client";

import { useState, useRef, FormEvent } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import styles from "@/app/isidora-stella.module.css";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-75px" } as const,
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
});

export default function ContactFooter() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [msgType, setMsgType] = useState<"success" | "error" | "">("");
  const [msgVisible, setMsgVisible] = useState(false);
  const [sending, setSending] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setMsg("Please enter a valid email address.");
      setMsgType("error");
      setMsgVisible(true);
      return;
    }

    setSending(true);
    setTimeout(() => {
      setSending(false);
      setMsg("Thank you — we'll be in touch shortly.");
      setMsgType("success");
      setMsgVisible(true);
      setEmail("");
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setMsgVisible(false), 6000);
    }, 1400);
  };

  return (
    <footer className={styles.contact} id="contact">
      <div className={styles.contactInner}>
        <div>
          <motion.p {...fadeUp(0)} className={cn(styles.sectionLabel, styles.contactLabel)}>
            Let&apos;s Create Together
          </motion.p>
          <motion.h2 {...fadeUp(0.1)} className={styles.contactHeading}>
            Begin a<br />Conversation.
          </motion.h2>

          <motion.form {...fadeUp(0.2)} className={styles.contactForm} onSubmit={handleSubmit} noValidate>
            <div className={styles.contactField}>
              <label htmlFor="contactEmail" className={styles.contactFieldLabel}>
                Your email address
              </label>
              <div className={styles.contactFieldRow}>
                <input
                  type="email"
                  id="contactEmail"
                  name="email"
                  className={styles.contactInput}
                  placeholder="name@domain.com"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={sending}
                />
                <button type="submit" className={styles.contactBtn} aria-label="Send enquiry" disabled={sending}>
                  <span>{sending ? "Sending..." : "Send"}</span>
                  <span className={styles.contactBtnArrow} aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M5 12h14M13 6l6 6-6 6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
              </div>
              <p
                className={cn(
                  styles.contactFormMessage,
                  msgVisible && styles.isVisible,
                  msgType === "error" && styles.isError
                )}
                aria-live="polite"
              >
                {msg}
              </p>
            </div>
          </motion.form>
        </div>

        <motion.div {...fadeUp(0.35)} className={styles.contactRight}>
          <div className={styles.contactAddress}>
            <p className={styles.contactAddressLabel}>Email</p>
            <address className={styles.contactAddressBody}>
              <a href="mailto:istellay@gmail.com" style={{ textDecoration: "none", color: "inherit" }}>istellay@gmail.com</a>
            </address>
          </div>

          <div className={styles.contactLinks}>
            <a href="#" className={styles.contactSocialLink} aria-label="Instagram">
              Instagram
            </a>
            <a href="#" className={styles.contactSocialLink} aria-label="Pinterest">
              Pinterest
            </a>
            <a href="#" className={styles.contactSocialLink} aria-label="Architectural Digest feature">
              AD Feature
            </a>
          </div>
        </motion.div>
      </div>

      <div className={styles.contactFooterBar}>
        <p className={styles.contactWordmark}>Isidora Stella</p>
        <p className={styles.contactCopyright}>&copy; 2026 Isidora Stella. All rights reserved.</p>
      </div>
    </footer>
  );
}
