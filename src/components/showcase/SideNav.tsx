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
  { href: "#about", label: "About" },
  { href: "#process", label: "Process" },
  { href: "#projects", label: "Projects" },
  { href: "#press", label: "Press" },
  { href: "#contact", label: "Contact" },
];

export default function SideNav() {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
        }
      },
      { threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] }
    );

    Object.values(sectionEls).forEach((el) => {
      if (el) observer.observe(el);
    });

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
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
    setMenuOpen(false);
    const el = document.getElementById(href.replace("#", ""));
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={cn(styles.topNav, (scrolled || menuOpen) && styles.isScrolled)}
      aria-label="Page navigation"
    >
      <div className={styles.topNavInner}>
        <ul className={styles.topNavList}>
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={cn(
                  styles.topNavLink,
                  activeSection === item.href.replace("#", "") && styles.isActive
                )}
                onClick={(e) => handleClick(e, item.href)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className={cn(styles.topNavToggle, menuOpen && styles.isOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={cn(styles.topNavDropdown, menuOpen && styles.isOpen)}>
        <ul className={styles.topNavDropdownList}>
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={cn(
                  styles.topNavDropdownLink,
                  activeSection === item.href.replace("#", "") && styles.isActive
                )}
                onClick={(e) => handleClick(e, item.href)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
