import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { projectEntries } from "@/components/showcase/projectData";

// ─── Project Detail Data ─────────────────────────────────────────────────────

interface ProjectStat {
  label: string;
  value: string;
}

interface ProjectDetail {
  id: string;
  heroImage: string;
  subtitle: string;
  location: string;
  year: string;
  type: string;
  scope: string;
  stats: ProjectStat[];
  overviewText: string;
  narrativeText: string;
  galleryImages: { src: string; alt: string; span?: "wide" | "tall" | "normal" }[];
}

const projectDetails: ProjectDetail[] = [
  {
    id: "modera-parkside",
    heroImage:
      "/images/Modera Parkside Photos/0012-davidmadisonphotography-com-modera-parkside-atlanta-georgia.avif",
    subtitle: "Luxury Multifamily Interiors",
    location: "Atlanta, GA",
    year: "2025",
    type: "Multifamily Residential",
    scope: "Interior Design",
    stats: [
      { label: "Location", value: "Atlanta, GA" },
      { label: "Type", value: "Multifamily" },
      { label: "Year", value: "2025" },
      { label: "Scope", value: "Interior Design" },
    ],
    overviewText:
      "Modera Parkside redefines urban living in Atlanta's vibrant Westside neighborhood. The design embraces warm contemporary finishes — natural oak, brushed bronze, and textured stone — to craft communal spaces that feel unmistakably residential. Lobby and amenity areas balance openness with intimacy, anchoring residents in a sense of place.",
    narrativeText:
      "The design language draws from Atlanta's evolving urban identity: grounded, warm, and quietly sophisticated. Material choices prioritize tactility and longevity — surfaces that age gracefully and spaces that remain inviting through decades of use. Each amenity zone was conceived as a distinct atmosphere within a coherent whole, rewarding daily discovery.",
    galleryImages: [
      {
        src: "/images/Modera Parkside Photos/Modera-Parkside (1).avif",
        alt: "Modera Parkside — Lobby",
        span: "wide",
      },
      {
        src: "/images/Modera Parkside Photos/Modera-Parkside (2).avif",
        alt: "Modera Parkside — Lounge",
        span: "normal",
      },
      {
        src: "/images/Modera Parkside Photos/Modera-Parkside (3).avif",
        alt: "Modera Parkside — Amenity Space",
        span: "tall",
      },
      {
        src: "/images/Modera Parkside Photos/Modera-Parkside (4).avif",
        alt: "Modera Parkside — Common Area",
        span: "normal",
      },
      {
        src: "/images/Modera Parkside Photos/Modera-Parkside (5).avif",
        alt: "Modera Parkside — Corridor Detail",
        span: "normal",
      },
      {
        src: "/images/Modera Parkside Photos/DSC09662.avif",
        alt: "Modera Parkside — Interior Detail",
        span: "wide",
      },
    ],
  },
  {
    id: "modera-mcgavock",
    heroImage:
      "/images/Modera McGavock Nashville Photos/0004-davidmadisonphotography-com-modera-mcgavock-nashville-tennessee.avif",
    subtitle: "Luxury Multifamily Interiors",
    location: "Nashville, TN",
    year: "2025",
    type: "Multifamily Residential",
    scope: "Interior Design",
    stats: [
      { label: "Location", value: "Nashville, TN" },
      { label: "Type", value: "Multifamily" },
      { label: "Year", value: "2025" },
      { label: "Scope", value: "Interior Design" },
    ],
    overviewText:
      "Modera McGavock channels Nashville's creative energy into a refined residential experience. Sophisticated lounge areas, curated art moments, and a material palette rooted in dark walnut, aged brass, and honed marble establish an atmosphere that honors Music City's cultural depth without literal reference. Every space reads as composed, considered, and enduring.",
    narrativeText:
      "Nashville demanded a design that could hold its own against the city's growing architectural ambition. The approach was disciplined restraint — rich materials in restrained configurations, lighting that shifts the mood from morning coffee to evening cocktail. Communal spaces were programmed for genuine gathering, not performative amenity, resulting in interiors that residents claim as their own.",
    galleryImages: [
      {
        src: "/images/Modera McGavock Nashville Photos/0016-davidmadisonphotography-com-modera-mcgavock-nashville-tenneessee-jpg.avif",
        alt: "Modera McGavock — Lobby",
        span: "wide",
      },
      {
        src: "/images/Modera McGavock Nashville Photos/0021-davidmadisonphotography-com-modera-mcgavock-nashville-tenneessee-jpg.avif",
        alt: "Modera McGavock — Lounge",
        span: "normal",
      },
      {
        src: "/images/Modera McGavock Nashville Photos/0022-davidmadisonphotography-com-modera-mcgavock-nashville-tenneessee-jpg.avif",
        alt: "Modera McGavock — Common Area",
        span: "tall",
      },
      {
        src: "/images/Modera McGavock Nashville Photos/0025-davidmadisonphotography-com-modera-mcgavock-nashville-tenneessee-jpg.avif",
        alt: "Modera McGavock — Amenity Detail",
        span: "normal",
      },
      {
        src: "/images/Modera McGavock Nashville Photos/0027-davidmadisonphotography-com-modera-mcgavock-nashville-tenneessee-jpg.avif",
        alt: "Modera McGavock — Corridor",
        span: "normal",
      },
      {
        src: "/images/Modera McGavock Nashville Photos/0030-davidmadisonphotography-com-modera-mcgavock-nashville-tenneessee-jpg.avif",
        alt: "Modera McGavock — Resident Lounge",
        span: "wide",
      },
    ],
  },
  {
    id: "woodlawn",
    heroImage:
      "/images/225 Woodlawn Renderings/N 04A_L1 Reception_3512_2022-10-19_1064.jpg",
    subtitle: "Multifamily Residential",
    location: "Charlotte, NC",
    year: "2025",
    type: "Multifamily Residential",
    scope: "Interior Design — Amenities",
    stats: [
      { label: "Location", value: "Charlotte, NC" },
      { label: "Type", value: "Multifamily" },
      { label: "Year", value: "2025" },
      { label: "Scope", value: "Interior Design" },
    ],
    overviewText:
      "225 Woodlawn Road brings a considered hospitality sensibility to Charlotte's multifamily market. Reception, co-working lounges, and fitness areas are designed as a continuous experience — each space flowing into the next through consistent materiality and restrained elegance.",
    narrativeText:
      "Charlotte's energy demanded interiors that could serve both focused work and relaxed gathering. Warm wood tones, layered lighting, and furniture-grade millwork create environments that feel curated rather than corporate. The design rewards lingering — every seat has purpose, every surface invites touch.",
    galleryImages: [
      {
        src: "/images/225 Woodlawn Renderings/N 05A_L1 Leasing_3512_2022-09-23_310-edited.jpg",
        alt: "225 Woodlawn — Leasing Office",
        span: "wide",
      },
      {
        src: "/images/225 Woodlawn Renderings/N 05B_L1 CO Working_3512_2022-10-19_877.jpg",
        alt: "225 Woodlawn — Co-Working Lounge",
        span: "normal",
      },
      {
        src: "/images/225 Woodlawn Renderings/N 05C_L4 CO working_3512_Cam-01 Opt-02_2022-09-23_1064-edited.jpg",
        alt: "225 Woodlawn — Upper Co-Working",
        span: "tall",
      },
      {
        src: "/images/225 Woodlawn Renderings/N 05D_L4 CO working_3512_Cam-02_2022-09-26_1064-edited.jpg",
        alt: "225 Woodlawn — Co-Working Detail",
        span: "normal",
      },
      {
        src: "/images/225 Woodlawn Renderings/N 11A_L3 Gym_3510_2022-10-20_877.jpg",
        alt: "225 Woodlawn — Fitness Center",
        span: "wide",
      },
    ],
  },
  {
    id: "four-seasons-spa",
    heroImage:
      "/images/Four Seasons Spa Renderings/N 13A_Spa  Reception_Opt 1_3506_2022-08-25_310.jpg",
    subtitle: "Hotel Spa Renovation",
    location: "Atlanta, GA",
    year: "2024",
    type: "Hospitality — Hotel Renovation",
    scope: "Spa Interior Design",
    stats: [
      { label: "Location", value: "Atlanta, GA" },
      { label: "Type", value: "Hotel Renovation" },
      { label: "Year", value: "2024" },
      { label: "Scope", value: "Spa Design" },
    ],
    overviewText:
      "A full renovation of Four Seasons Atlanta's spa level, reimagining reception, retail, treatment rooms, and relaxation areas. Natural stone, diffused lighting, and a restrained palette of sage, sand, and warm white transform the space into an urban sanctuary.",
    narrativeText:
      "Luxury hospitality demands that every moment — from arrival to departure — feels choreographed yet effortless. The design strips away visual noise, letting material texture and soft light carry the experience. Treatment rooms balance clinical precision with residential warmth, ensuring guests feel cared for, not processed.",
    galleryImages: [
      {
        src: "/images/Four Seasons Spa Renderings/N 13C_Spa Entry_Opt 1_3506_2022-08-25_772.jpg",
        alt: "Four Seasons Spa — Entry",
        span: "wide",
      },
      {
        src: "/images/Four Seasons Spa Renderings/N 13B_Spa  Retail_3506_2022-08-24_310.jpg",
        alt: "Four Seasons Spa — Retail",
        span: "normal",
      },
      {
        src: "/images/Four Seasons Spa Renderings/N 13D_Spa Treatment_Cam 01_2022-08-24_1064.jpg",
        alt: "Four Seasons Spa — Treatment Room",
        span: "tall",
      },
      {
        src: "/images/Four Seasons Spa Renderings/N 13D_Spa Treatment_Cam 02_2022-08-24_1064.jpg",
        alt: "Four Seasons Spa — Treatment Detail",
        span: "normal",
      },
      {
        src: "/images/Four Seasons Spa Renderings/N 13E_Spa Relaxation_3506_Option-04_2022-08-24_743.jpg",
        alt: "Four Seasons Spa — Relaxation Lounge",
        span: "wide",
      },
    ],
  },
  {
    id: "punta-cana",
    heroImage:
      "/images/Punta Cana Renderings/N 01A_3Bay Bedroom_3514.01_2024-08-02_743.jpg",
    subtitle: "Caribbean Resort",
    location: "Punta Cana, DR",
    year: "2026",
    type: "Hospitality — Resort",
    scope: "Guest Room & Suite Design",
    stats: [
      { label: "Location", value: "Punta Cana, DR" },
      { label: "Type", value: "Resort" },
      { label: "Year", value: "2026" },
      { label: "Scope", value: "Guest Rooms & Suites" },
    ],
    overviewText:
      "A Caribbean resort grounded in understated luxury. Bedrooms and suites are conceived as private retreats — open, airy volumes where natural materials, layered textiles, and panoramic views dissolve the boundary between interior and landscape.",
    narrativeText:
      "Tropical design too often defaults to pastiche. Here, restraint is the luxury. A muted palette of bleached wood, linen, and local stone lets the ocean and sky become the primary decoration. Living and sleeping zones flow without hard division, encouraging the slow, unstructured rhythm that defines true resort life.",
    galleryImages: [
      {
        src: "/images/Punta Cana Renderings/N 01B Typical King Bedroom_3514.01_2024-08-01_310.jpg",
        alt: "Punta Cana — King Bedroom",
        span: "wide",
      },
      {
        src: "/images/Punta Cana Renderings/N 02A_ Typical Bathroom_3514_Version-2_2024-08-01_310.jpg",
        alt: "Punta Cana — Bathroom",
        span: "normal",
      },
      {
        src: "/images/Punta Cana Renderings/N 08A_4Bay  Living-Dining_3514.01_2024-08-02_310.jpg",
        alt: "Punta Cana — Suite Living-Dining",
        span: "tall",
      },
      {
        src: "/images/Punta Cana Renderings/N 08B_3Bay  Living-Dining_3514.01_2024-08-02_960.jpg",
        alt: "Punta Cana — Bay Living Area",
        span: "wide",
      },
    ],
  },
  {
    id: "modera-decatur",
    heroImage:
      "/images/Modera Decatur Photos/PHOTO 1.jpg",
    subtitle: "Multifamily Residential",
    location: "Atlanta, GA",
    year: "2023",
    type: "Multifamily Residential",
    scope: "Interior Design — Amenities",
    stats: [
      { label: "Location", value: "Atlanta, GA" },
      { label: "Type", value: "Multifamily" },
      { label: "Year", value: "2023" },
      { label: "Scope", value: "Interior Design" },
    ],
    overviewText:
      "Modera Decatur captures the walkable, community-driven spirit of downtown Decatur. Warm, layered amenity spaces — from the lobby to co-working lounges and gathering areas — are designed to foster connection while preserving individual comfort. Rich wood tones, tactile fabrics, and curated art give every corner a residential soul.",
    narrativeText:
      "Decatur's character is neighborly, literate, and unpretentious. The interiors reflect that identity through honest materials and an approachable scale. Rather than grand gestures, the design accumulates small pleasures — a reading nook with perfect light, a lobby corner that feels like a living room, communal tables that invite conversation.",
    galleryImages: [
      {
        src: "/images/Modera Decatur Photos/PHOTO 2.jpg",
        alt: "Modera Decatur — Lobby",
        span: "wide",
      },
      {
        src: "/images/Modera Decatur Photos/PHOTO 3.jpg",
        alt: "Modera Decatur — Lounge",
        span: "normal",
      },
      {
        src: "/images/Modera Decatur Photos/PHOTO 4.jpg",
        alt: "Modera Decatur — Amenity Space",
        span: "tall",
      },
      {
        src: "/images/Modera Decatur Photos/PHOTO 5.jpg",
        alt: "Modera Decatur — Common Area",
        span: "normal",
      },
      {
        src: "/images/Modera Decatur Photos/PHOTO 6.jpg",
        alt: "Modera Decatur — Detail",
        span: "normal",
      },
      {
        src: "/images/Modera Decatur Photos/PHOTO 7.jpg",
        alt: "Modera Decatur — Corridor",
        span: "wide",
      },
    ],
  },
  {
    id: "howarth-aesthetic",
    heroImage:
      "/images/Howarth Aesthetic Renderings/N 04A_Reception_3524_2024-09-23_197.jpg",
    subtitle: "Medical Spa",
    location: "Atlanta, GA",
    year: "2024",
    type: "Medical Spa",
    scope: "Interior Design",
    stats: [
      { label: "Location", value: "Atlanta, GA" },
      { label: "Type", value: "Medical Spa" },
      { label: "Year", value: "2024" },
      { label: "Scope", value: "Interior Design" },
    ],
    overviewText:
      "Howarth Aesthetic reimagines medical spa design as a hospitality experience. Reception and corridor spaces trade clinical sterility for warm sophistication — sculpted millwork, ambient lighting, and a restrained palette of blush, stone, and brushed metal that puts clients at ease from the moment of arrival.",
    narrativeText:
      "Medical environments carry inherent anxiety. The design counters this through every sensory channel: soft curves instead of hard edges, warm light instead of fluorescent glare, materials that read as boutique hotel rather than clinic. The result is a space where clinical precision is felt but never seen.",
    galleryImages: [
      {
        src: "/images/Howarth Aesthetic Renderings/N 03A_Corridor_3524_2024-09-13_1064.jpg",
        alt: "Howarth Aesthetic — Corridor",
        span: "wide",
      },
      {
        src: "/images/Howarth Aesthetic Renderings/N 04A_Reception_3524_2024-09-23_197.jpg",
        alt: "Howarth Aesthetic — Reception",
        span: "wide",
      },
    ],
  },
  {
    id: "kaum-cultural-hub",
    heroImage:
      "/images/SCAD undergrad work/KAUM Cultural Community Hub/KAUM Cultural Community Hub - Jendela Maumere Gallery.jpg",
    subtitle: "Cultural & Community Hub",
    location: "Sikka Regency, East Nusa Tenggara",
    year: "2024",
    type: "Mixed-Use / Cultural & Community Hub",
    scope: "Architecture & Evidence-Based Design",
    stats: [
      { label: "Location", value: "Sikka Regency, East Nusa Tenggara, INA" },
      { label: "Type", value: "Cultural & Community Hub" },
      { label: "Year", value: "2024 (Capstone)" },
      { label: "Scope", value: "Architecture & Evidence-Based Design" },
    ],
    overviewText:
      "Kaum Cultural Community Hub serves as a transformative anchor in East Nusa Tenggara, bridging the gap between local heritage and global curiosity. The design rejects the typical \"tourist-centric\" model, instead prioritizing a vernacular-inspired framework that empowers the Sikka community. Through a semi-open plan and a material palette drawn directly from the earth and handwoven textiles, the facility provides a dignified stage for cultural preservation and economic mobility.",
    narrativeText:
      "The architecture functions as a physical manifestation of the \"Interweave\" concept—where the built environment acts as the knots and the people act as the strands. By utilizing a semi-open plan, the design dissolves the barriers between the local community and visitors, fostering organic interactions rather than curated performances. The aesthetic is a study in cultural resonance. Neutral tones and textures are derived from traditional handwoven fabrics, ensuring the structure feels like an extension of the landscape rather than an imposition upon it. Spatial flow is guided by the Dala Mawarni pattern; triangular geometries are strategically integrated into the wayfinding and functional zones. This ensures the dynamic, large-scale spaces remain intuitive and intimate. The result is a facility that doesn't just showcase culture—it provides the infrastructure for that culture to evolve, breathe, and sustain the people who created it.",
    galleryImages: [
      {
        src: "/images/SCAD undergrad work/KAUM Cultural Community Hub/KAUM Cultural Community Hub - Handweaving Elevation.jpg",
        alt: "Kaum Cultural Hub — Handweaving Elevation",
        span: "wide",
      },
      {
        src: "/images/SCAD undergrad work/KAUM Cultural Community Hub/KAUM Cultural Community Hub - Jendela Maumere Gallery.jpg",
        alt: "Kaum Cultural Hub — Jendela Maumere Gallery",
        span: "normal",
      },
      {
        src: "/images/SCAD undergrad work/KAUM Cultural Community Hub/KAUM Cultural Community Hub - Makan Dulu Restaurant.jpg",
        alt: "Kaum Cultural Hub — Makan Dulu Restaurant",
        span: "tall",
      },
      {
        src: "/images/SCAD undergrad work/KAUM Cultural Community Hub/KAUM Cultural Community Hub - Retail.jpg",
        alt: "Kaum Cultural Hub — Retail",
        span: "normal",
      },
      {
        src: "/images/SCAD undergrad work/KAUM Cultural Community Hub/KAUM Cultural Community Hub - Workshop.jpg",
        alt: "Kaum Cultural Hub — Workshop",
        span: "normal",
      },
      {
        src: "/images/SCAD undergrad work/KAUM Cultural Community Hub/longitudinal section copy.png",
        alt: "Kaum Cultural Hub — Longitudinal Section",
        span: "wide",
      },
    ],
  },
  {
    id: "six-senses",
    heroImage:
      "/images/SCAD undergrad work/Six Senses/Six Senses 1.jpg",
    subtitle: "Luxury Hospitality — Presidential Suites",
    location: "Alys Beach, FL",
    year: "2024",
    type: "Luxury Hospitality — Hotel & Presidential Suites",
    scope: "Interior Design — Guest Rooms & Public Spaces",
    stats: [
      { label: "Location", value: "Alys Beach, FL" },
      { label: "Type", value: "Luxury Hospitality" },
      { label: "Year", value: "2024 (SCAD Capstone)" },
      { label: "Scope", value: "Hotel & Presidential Suites" },
    ],
    overviewText:
      "Beach Resort project is conceived around the concept 'Potpourri of Growth' — a fluid, calming environment grounded in natural beauty, sustainability, and community wellness. Curvilinear forms, textured natural materials, and a semi-open layout dissolve boundaries between interior and landscape, drawing from Attention Restoration and Place Identity design theory to forge a deep personal connection to space.",
    narrativeText:
      "Continuous circulation, derived from a curvilinear parti diagram, flows through every public zone and into the Presidential Suites — harmonious, balanced spaces where woven palm textures, shell-inspired finishes, and neutral tones create an atmosphere of unhurried luxury. The design resists decoration for its own sake; instead, each material and spatial gesture serves the guest's physical and psychological restoration. Techniques: AutoCAD, SketchUp, Corona Renderer. Role: Project Manager (Collaborative).",
    galleryImages: [
      {
        src: "/images/SCAD undergrad work/Six Senses/Six Senses 2.jpg",
        alt: "Beach Resort — Common Area",
        span: "wide",
      },
      {
        src: "/images/SCAD undergrad work/Six Senses/king 1.jpg",
        alt: "Beach Resort — King Suite",
        span: "normal",
      },
      {
        src: "/images/SCAD undergrad work/Six Senses/king bedroom isometric.png",
        alt: "Beach Resort — King Bedroom Isometric",
        span: "tall",
      },
      {
        src: "/images/SCAD undergrad work/Six Senses/king 2.jpg",
        alt: "Beach Resort — King Suite Detail",
        span: "normal",
      },
      {
        src: "/images/SCAD undergrad work/Six Senses/common 1.jpg",
        alt: "Beach Resort — Common Space",
        span: "normal",
      },
      {
        src: "/images/SCAD undergrad work/Six Senses/Six Senses 3.jpg",
        alt: "Beach Resort — Resort View",
        span: "wide",
      },
    ],
  },
];

// ─── Static Params ────────────────────────────────────────────────────────────

export const dynamicParams = false;

export function generateStaticParams() {
  return projectEntries.map((project) => ({
    project: project.id,
  }));
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ project: string }>;
}) {
  const { project: projectSlug } = await params;
  const projectItem = projectEntries.find((p) => p.id === projectSlug);

  if (!projectItem) {
    notFound();
  }

  const detail = projectDetails.find((d) => d.id === projectSlug);

  // ─── Render ───────────────────────────────────────────────────────────────

  if (detail) {
    return (
      <main className="min-h-screen bg-[#FAF9F6] text-[#1a1a1a]">

        {/* ── Back Navigation ─────────────────────────────────────── */}
        <nav className="fixed top-0 left-0 w-full z-20 px-6 py-6 pointer-events-none">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 pointer-events-auto hover:opacity-70 transition-opacity duration-300 font-cormorant tracking-widest uppercase text-sm bg-white/60 backdrop-blur-md px-5 py-2.5 rounded-full shadow-sm text-[#1a1a1a] border border-white/40"
          >
            <ArrowLeft size={14} />
            Portfolio
          </Link>
        </nav>

        {/* ── Hero ────────────────────────────────────────────────── */}
        <section className="relative w-full h-[85vh] md:h-screen overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={detail.heroImage}
            alt={detail.id}
            className="absolute inset-0 w-full h-full object-cover scale-105"
            style={{ transformOrigin: "center center" }}
          />
          {/* Gradient overlay — heavier at bottom for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/70" />

          {/* Hero text — bottom-left editorial layout */}
          <div className="absolute bottom-0 left-0 right-0 px-8 md:px-16 pb-14 md:pb-20">
            {/* Thin gold rule */}
            <div className="w-12 h-[1px] bg-[#b8955a] opacity-80 mb-6" />
            <p className="font-cormorant text-xs md:text-sm tracking-[0.3em] uppercase text-white/70 mb-3">
              {detail.subtitle}
            </p>
            <h1 className="font-cormorant text-5xl md:text-7xl lg:text-8xl font-light text-white leading-none tracking-wide mb-4 drop-shadow-sm">
              {projectItem.title}
            </h1>
            <p className="font-cormorant text-base md:text-lg tracking-[0.15em] uppercase text-white/60">
              {detail.location} &nbsp;·&nbsp; {detail.year}
            </p>
          </div>
        </section>

        {/* ── Project Overview ─────────────────────────────────────── */}
        <section className="py-24 md:py-32 px-8 md:px-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">

            {/* Left — editorial text */}
            <div>
              <p className="font-cormorant text-xs tracking-[0.3em] uppercase text-[#b8955a] mb-6">
                Overview
              </p>
              <h2 className="font-cormorant text-3xl md:text-4xl font-light text-[#1a1a1a] mb-8 leading-snug">
                {projectItem.title}
              </h2>
              <div className="w-10 h-[1px] bg-[#b8955a] opacity-50 mb-8" />
              <p className="font-cormorant text-xl md:text-2xl text-[#4a4a4a] leading-relaxed font-light">
                {detail.overviewText}
              </p>
              <p className="mt-6 font-cormorant text-sm tracking-[0.15em] text-[#9a9590] italic">
                {detail.id === "kaum-cultural-hub" || detail.id === "six-senses"
                  ? "Undergrad Work"
                  : "Work completed while at HBA."}
              </p>
            </div>

            {/* Right — key stats grid */}
            <div className="md:pt-14">
              <div className="grid grid-cols-2 gap-px bg-[#e8e4de]">
                {detail.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-[#FAF9F6] px-6 py-7 flex flex-col gap-2"
                  >
                    <span className="font-cormorant text-[10px] tracking-[0.3em] uppercase text-[#b8955a]">
                      {stat.label}
                    </span>
                    <span className="font-cormorant text-lg md:text-xl text-[#1a1a1a] font-light">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
              {detail.id === "kaum-cultural-hub" && (
                <div className="mt-10 md:mt-12 flex justify-end">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/muse_design_award.png"
                    alt="MUSE Design Award"
                    className="h-20 md:h-30 w-auto object-contain"
                  />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ── Gallery ──────────────────────────────────────────────── */}
        <section className="px-4 md:px-8 pb-24 md:pb-32 max-w-7xl mx-auto">
          <p className="font-cormorant text-xs tracking-[0.3em] uppercase text-[#b8955a] mb-8 px-4">
            Photography
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
            {detail.galleryImages.map((image, index) => {
              const isWide = image.span === "wide";
              const isTall = image.span === "tall";

              return (
                <div
                  key={index}
                  className={[
                    "relative overflow-hidden bg-[#f0ece6]",
                    isWide ? "md:col-span-2" : "",
                    isTall ? "md:row-span-2" : "",
                    isWide ? "aspect-[16/9] md:aspect-[16/7]" : "",
                    isTall ? "aspect-[3/4] md:aspect-auto md:min-h-[540px]" : "",
                    !isWide && !isTall ? "aspect-[4/3]" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Design Narrative ─────────────────────────────────────── */}
        <section className="py-24 md:py-32 px-8 md:px-16 bg-[#f5f2ee]">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-cormorant text-xs tracking-[0.3em] uppercase text-[#b8955a] mb-8">
              Design Narrative
            </p>
            <div className="w-8 h-[1px] bg-[#b8955a] opacity-50 mx-auto mb-10" />
            <p className="font-cormorant text-2xl md:text-3xl font-light text-[#1a1a1a] leading-relaxed">
              {detail.narrativeText}
            </p>
          </div>
        </section>

        {/* ── Back to Portfolio ────────────────────────────────────── */}
        <section className="py-20 md:py-28 flex flex-col items-center gap-6 bg-[#FAF9F6]">
          <div className="w-[1px] h-16 bg-[#b8955a] opacity-40" />
          <Link
            href="/#projects"
            className="font-cormorant text-xs tracking-[0.35em] uppercase text-[#1a1a1a] hover:text-[#b8955a] transition-colors duration-300 inline-flex items-center gap-3"
          >
            <ArrowLeft size={14} />
            Back to Portfolio
          </Link>
        </section>
      </main>
    );
  }

  // ─── Generic Fallback ──────────────────────────────────────────────────────
  return (
    <main className="min-h-screen bg-[#FAF9F6] text-[#1a1a1a]">

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-20 px-6 py-6 pointer-events-none">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 pointer-events-auto hover:opacity-70 transition-opacity duration-300 font-cormorant tracking-widest uppercase text-sm bg-white/60 backdrop-blur-md px-5 py-2.5 rounded-full shadow-sm text-[#1a1a1a] border border-white/40"
        >
          <ArrowLeft size={14} />
          Portfolio
        </Link>
      </nav>

      {/* Hero */}
      <section className="relative w-full h-[85vh] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={projectItem.imgSrc}
          alt={projectItem.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/70" />
        <div className="absolute bottom-0 left-0 right-0 px-8 md:px-16 pb-14 md:pb-20">
          <div className="w-12 h-[1px] bg-[#b8955a] opacity-80 mb-6" />
          <h1 className="font-cormorant text-5xl md:text-7xl lg:text-8xl font-light text-white leading-none tracking-wide mb-4">
            {projectItem.title}
          </h1>
          <p className="font-cormorant text-base md:text-lg tracking-[0.15em] uppercase text-white/60">
            {projectItem.description}
          </p>
        </div>
      </section>

      {/* Generic Content */}
      <section className="py-24 md:py-32 px-8 md:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
          <div>
            <p className="font-cormorant text-xs tracking-[0.3em] uppercase text-[#b8955a] mb-6">
              Overview
            </p>
            <h2 className="font-cormorant text-3xl md:text-4xl font-light text-[#1a1a1a] mb-8 leading-snug">
              {projectItem.title}
            </h2>
            <div className="w-10 h-[1px] bg-[#b8955a] opacity-50 mb-8" />
            <p className="font-cormorant text-xl md:text-2xl text-[#4a4a4a] leading-relaxed font-light">
              A visionary approach to {projectItem.title}, blending timeless elegance with modern
              sophistication. This project emphasizes meticulous attention to detail, premium
              materials, and a deep understanding of spatial harmony.
            </p>
            <p className="mt-6 font-cormorant text-sm tracking-[0.15em] text-[#9a9590] italic">
              Work completed while at HBA.
            </p>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden bg-[#f0ece6]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={projectItem.imgSrc}
              alt={`${projectItem.title} detail`}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Back to Portfolio */}
      <section className="py-20 md:py-28 flex flex-col items-center gap-6 bg-[#FAF9F6]">
        <div className="w-[1px] h-16 bg-[#b8955a] opacity-40" />
        <Link
          href="/#projects"
          className="font-cormorant text-xs tracking-[0.35em] uppercase text-[#1a1a1a] hover:text-[#b8955a] transition-colors duration-300 inline-flex items-center gap-3"
        >
          <ArrowLeft size={14} />
          Back to Portfolio
        </Link>
      </section>
    </main>
  );
}
