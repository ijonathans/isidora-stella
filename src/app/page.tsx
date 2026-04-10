import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import HeroSection from "@/components/showcase/HeroSection";
import ScrollProjectsSection from "@/components/showcase/ScrollProjectsSection";
import AboutSection from "@/components/showcase/AboutSection";
import PressSection from "@/components/showcase/PressSection";
import ContactFooter from "@/components/showcase/ContactFooter";
import SideNav from "@/components/showcase/SideNav";
import styles from "./isidora-stella.module.css";

export const metadata: Metadata = {
  title: "Isidora Stella — Interior Designer",
  description: "Award-winning interior designer at Hirsch Bedner Associates. Luxury hospitality and high-end residential design.",
};

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export default function IsidoraStellaPage() {
  return (
    <main className={`${cormorant.variable} ${inter.variable} ${styles.pageWrapper}`}>
      <SideNav />
      <HeroSection />
      <AboutSection />
      <ScrollProjectsSection />
      <PressSection />
      <ContactFooter />
    </main>
  );
}
