"use client";

import { useState } from "react";
import { Download, Loader2 } from "lucide-react";
import styles from "@/app/isidora-stella.module.css";

export default function DownloadResumeButton() {
  const [generating, setGenerating] = useState(false);

  const handleDownload = async () => {
    if (generating) return;
    setGenerating(true);
    try {
      const [{ pdf }, { default: ResumeDocument }] = await Promise.all([
        import("@react-pdf/renderer"),
        import("./ResumeDocument"),
      ]);

      const blob = await pdf(<ResumeDocument />).toBlob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "Isidora Stella Yubelia - Portfolio.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } finally {
      setGenerating(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleDownload}
      disabled={generating}
      className={styles.contactBtn}
      aria-label="Download resume as PDF"
    >
      <span>{generating ? "Preparing PDF..." : "Download Resume"}</span>
      <span className={styles.contactBtnArrow} aria-hidden="true">
        {generating ? <Loader2 size={16} className="animate-spin" /> : <Download size={16} />}
      </span>
    </button>
  );
}
