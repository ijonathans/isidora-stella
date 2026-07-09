"use client";

import { useState, useRef, FormEvent } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import styles from "@/app/isidora-stella.module.css";
import DownloadResumeButton from "@/components/resume/DownloadResumeButton";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-75px" } as const,
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
});

export default function ContactFooter() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [msg, setMsg] = useState("");
  const [msgType, setMsgType] = useState<"success" | "error" | "">("");
  const [msgVisible, setMsgVisible] = useState(false);
  const [sending, setSending] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name.trim() || !emailRegex.test(email) || !message.trim()) {
      setMsg("Please fill in all fields with a valid email address.");
      setMsgType("error");
      setMsgVisible(true);
      return;
    }

    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) throw new Error();

      setMsg("Thank you — we'll be in touch shortly.");
      setMsgType("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setMsg("Something went wrong. Please try again.");
      setMsgType("error");
    } finally {
      setSending(false);
      setMsgVisible(true);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setMsgVisible(false), 6000);
    }
  };

  return (
    <footer className={styles.contact} id="contact">
      <div className={styles.contactInner}>
        <div>
          <motion.p {...fadeUp(0)} className={cn(styles.sectionLabel, styles.contactLabel)}>
            Let&apos;s Begin a Conversation
          </motion.p>
          <motion.h2 {...fadeUp(0.1)} className={styles.contactHeading}>
            For a colaborations, project inquireies <br /> or creative conversations, feel free to reach out.
          </motion.h2>

          <motion.div {...fadeUp(0.18)} style={{ marginBottom: "2rem" }}>
            <DownloadResumeButton />
          </motion.div>

          <motion.div {...fadeUp(0.2)} className={styles.contactInfo}>
            <div className={styles.contactAddress}>
              <p className={styles.contactAddressLabel}>Email</p>
              <address className={styles.contactAddressBody}>
                <a href="mailto:istellay@gmail.com" style={{ textDecoration: "none", color: "inherit" }}>istellay@gmail.com</a>
              </address>
            </div>

            <div className={styles.contactAddress}>
              <p className={styles.contactAddressLabel}>Phone</p>
              <address className={styles.contactAddressBody}>
                <a href="tel:+16267642632" style={{ textDecoration: "none", color: "inherit" }}>+1 (626) 764 2632</a>
              </address>
            </div>

            <div className={styles.contactAddress}>
              <p className={styles.contactAddressLabel}>WhatsApp</p>
              <address className={styles.contactAddressBody}>
                <a href="https://wa.me/6281290624450" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>+62 812 9062 4450</a>
              </address>
            </div>

            <div className={styles.contactAddress}>
              <p className={styles.contactAddressLabel}>LinkedIn</p>
              <address className={styles.contactAddressBody}>
                <a
                  href="https://www.linkedin.com/in/isidorastellayubelia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  isidorastellayubelia
                </a>
              </address>
            </div>
          </motion.div>
        </div>

        <motion.div {...fadeUp(0.35)} className={styles.contactRight}>
          <motion.form className={styles.contactForm} onSubmit={handleSubmit} noValidate>
            <div className={styles.contactField}>
              <label htmlFor="contactName" className={styles.contactFieldLabel}>
                Your name
              </label>
              <div className={styles.contactFieldRow}>
                <input
                  type="text"
                  id="contactName"
                  name="name"
                  className={styles.contactInput}
                  placeholder="Jane Doe"
                  autoComplete="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={sending}
                />
              </div>
            </div>

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
              </div>
            </div>

            <div className={styles.contactField}>
              <label htmlFor="contactMessage" className={styles.contactFieldLabel}>
                Your message
              </label>
              <div className={styles.contactFieldRow}>
                <textarea
                  id="contactMessage"
                  name="message"
                  className={styles.contactTextarea}
                  placeholder="Tell us about your project..."
                  required
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  disabled={sending}
                />
              </div>
            </div>

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
          </motion.form>
        </motion.div>
      </div>

      <div className={styles.contactFooterBar}>
        <p className={styles.contactWordmark}>Isidora Stella</p>
        <p className={styles.contactCopyright}>&copy; 2026 Isidora Stella. All rights reserved.</p>
      </div>
    </footer>
  );
}
