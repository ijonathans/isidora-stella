"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import styles from "@/app/isidora-stella.module.css";

interface NavItem {
  href: string;
  label: string;
}

const navItems: NavItem[] = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About Me" },
  { href: "#projects", label: "Projects" },
  { href: "#press", label: "Press" },
  { href: "#contact", label: "Contact" },
];

const darkSections = new Set(["hero", "contact"]);

export default function SideNav() {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [isDark, setIsDark] = useState(true);
  const [showNav, setShowNav] = useState(false);

  // Handle cross-page deep links by checking the hash on mount
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const id = window.location.hash.replace("#", "");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, []);

  useEffect(() => {
    const sectionEls: Record<string, Element | null> = {};
    const ratios: Record<string, number> = {};

    navItems.forEach(({ href }) => {
      const id = href.replace("#", "");
      sectionEls[id] = document.getElementById(id);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratios[entry.target.id] = entry.intersectionRatio;
        });

        let maxRatio = 0;
        let maxId = activeSection;
        for (const [id, ratio] of Object.entries(ratios)) {
          if (ratio > maxRatio) {
            maxRatio = ratio;
            maxId = id;
          }
        }
        if (maxRatio > 0) {
          setActiveSection(maxId);
          setIsDark(darkSections.has(maxId));
        }
      },
      { threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] }
    );

    Object.values(sectionEls).forEach((el) => {
      if (el) observer.observe(el);
    });

    const handleScroll = () => {
      setShowNav(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.getElementById(href.replace("#", ""));
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={cn(
        styles.sideNav,
        isDark && styles.isDark,
        !showNav && "opacity-0 pointer-events-none"
      )}
      style={{ transition: "opacity 0.5s ease-in-out" }}
      aria-label="Page navigation"
    >
      <ul className={styles.sideNavList}>
        {navItems.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className={cn(styles.sideNavLink, activeSection === item.href.replace("#", "") && styles.isActive)}
              onClick={(e) => handleClick(e, item.href)}
              aria-label={item.label}
            >
              <span className={styles.sideNavDot} />
              <span className={styles.sideNavLabel}>{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
