"use client";

import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero";

export default function HeroSection() {
  return (
    <div id="hero">
      <ScrollExpandMedia
        mediaType="image"
        mediaSrc="/images/Punta Cana Renderings/N 01A_3Bay Bedroom_3514.01_2024-08-02_743.jpg"
        bgImageSrc="/HeroVideo_IsidoraStella.mp4"
        bgMediaType="video"
        title="Isidora Stella Yubelia"
        date="Award-Winning Interior Designer"
        scrollToExpand="Scroll to Discover"
        textBlend
      />
    </div>
  );
}
