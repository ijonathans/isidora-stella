import { Download } from "lucide-react";
import styles from "@/app/isidora-stella.module.css";

export default function DownloadResumeButton() {
  return (
    <a
      href="/resume.pdf"
      download="Isidora Stella Yubelia - Portfolio.pdf"
      className={styles.contactBtn}
      aria-label="Download resume as PDF"
    >
      <span>Download Resume</span>
      <span className={styles.contactBtnArrow} aria-hidden="true">
        <Download size={16} />
      </span>
    </a>
  );
}
