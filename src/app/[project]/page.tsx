import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { projectEntries } from "@/components/showcase/projectData";
import ProjectGallery from "@/components/showcase/ProjectGallery";

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
  mediaType: "Photography" | "Rendering";
  tagline: string;
  overviewText: string[];
  galleryImages: { src: string; alt: string; span?: "wide" | "tall" | "normal" }[];
}

const projectDetails: ProjectDetail[] = [
  {
    id: "modera-parkside",
    heroImage:
      "/images/Modera Parkside Photos/Modera-Parkside (5).avif",
    subtitle: "Multifamily",
    location: "Atlanta, Georgia",
    year: "2025",
    type: "Multifamily Residential",
    scope: "Interior Design",
    stats: [
      { label: "Role", value: "Drawing, FF&E, Finishes and Installation" },
      { label: "Scope", value: "Designer responsible for FF&E specifications, technical development, project documentation, phase execution, and on-site coordination of FF&E installation." },
    ],
    mediaType: "Photography",
    tagline: "Between Park and Skyline",
    overviewText: [
      "Located in Midtown Atlanta, this multifamily project is shaped by the contrast between city energy and parkside calm. With views toward both the urban skyline and nearby green space, the design creates a residential experience that feels connected to the pace of the city while offering moments of retreat.",
      "The interiors balance sophistication with approachability through warm woods, layered textures, soft neutrals, and refined accents. Shared amenity spaces are designed to feel flexible and social, supporting the way residents move between work, wellness, leisure, and gathering.",
      "Rather than treating the city and landscape as separate influences, the project brings them into one cohesive experience: polished, comfortable, and grounded in its Midtown setting."
    ],
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
        src: "/images/Modera Parkside Photos/Modera-Parkside (7).avif",
        alt: "Modera Parkside — Amenity Space",
        span: "tall",
      },
      {
        src: "/images/Modera Parkside Photos/Modera-Parkside (4).avif",
        alt: "Modera Parkside — Common Area",
        span: "normal",
      },
      {
        src: "/images/Modera Parkside Photos/0012-davidmadisonphotography-com-modera-parkside-atlanta-georgia.avif",
        alt: "Modera Parkside — Interior Detail",
        span: "tall",
      },
      {
        src: "/images/Modera Parkside Photos/Modera-Parkside.avif",
        alt: "Modera Parkside — Corridor Detail",
        span: "wide",
      },
    ],
  },
  {
    id: "modera-mcgavock",
    heroImage:
      "/images/Modera McGavock Nashville Photos/0030-davidmadisonphotography-com-modera-mcgavock-nashville-tenneessee-jpg.avif",
    subtitle: "Multifamily",
    location: "Nashville, Tennessee",
    year: "2025",
    type: "Multifamily Residential",
    scope: "Interior Design",
    stats: [
      { label: "Role", value: "Drawing, FF&E, Finishes and Installation" },
      { label: "Scope", value: "Designer responsible for FF&E specifications, technical development, project documentation, phase execution, and on-site coordination of FF&E installation." },
    ],
    mediaType: "Photography",
    tagline: "Refined Interiors for Music City's Creative Energy",
    overviewText: [
      "Located in Nashville’s South Gulch, this multifamily project brings together the energy of the city with the comfort of a refined residential setting. The design responds to its urban context through warm materials, tailored details, and amenity spaces that support daily life, gathering, work, and retreat.",
      "Rather than leaning into overt music references, the interiors take a more composed approach. Layered textures, clean lines, soft neutrals, rich wood tones, and polished accents create a sense of ease while still feeling connected to Nashville’s creative pace.",
      "Shared spaces are designed to feel flexible and welcoming, from lounge and coworking areas to fitness, rooftop, and social amenities. The result is a residential experience that feels modern, grounded, and distinctly tied to the rhythm of the city."],
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
        src: "/images/Modera McGavock Nashville Photos/Modera_McGavock_01.jpeg",
        alt: "Modera McGavock — Resident Lounge",
        span: "wide",
      },
    ],
  },
  {
    id: "woodlawn",
    heroImage:
      "/images/225 Woodlawn Renderings/N 04A_L1 Reception_3512_2022-10-19_1064.jpg",
    subtitle: "Multifamily",
    location: "Charlotte, North Carolina",
    year: "2025",
    type: "Multifamily Residential",
    scope: "Interior Design — Amenities",
    stats: [
      { label: "Role", value: "Drawing,FF&E and Finishes" },
      { label: "Scope", value: "Developed construction drawings, FF&E specifications, rendering coordination, project documentation, and phase execution support across the multifamily amenity spaces." },
    ],
    mediaType: "Rendering",
    tagline: "The Urban Reset",
    overviewText: [
      "This new multifamily development in Charlotte is designed as a layered retreat within the pace of the city. The amenity spaces balance urban energy with residential comfort, creating places where residents can gather, work, recharge and move through their daily routines with ease.",
      "The design pairs industrial materials with warmth and tactility. Concrete, dark ceilings, metal accents, and graphic lighting establish an urban edge, while wood, stone, saturated textiles, plush seating, and patterned rughs soften the experience. Bold moments of color and texture give each shared space a distinct identity without making the interiors feel overly themed.",
      "From the lobby and lounge to the game room and fitness areas, the project creates a sequence of amenities that feel active, social and grounded. The result is a multifamily environment that supports city living while offering a strong sense of comfort and retreat."
    ],
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
        span: "normal",
      },
    ],
  },
  {
    id: "four-seasons-spa",
    heroImage:
      "/images/Four Seasons Spa Renderings/N 13A_Spa  Reception_Opt 1_3506_2022-08-25_310.jpg",
    subtitle: "Spa/ Wellness",
    location: "Atlanta, Georgia",
    year: "2024",
    type: "Hospitality — Hotel Renovation",
    scope: "Spa Interior Design",
    stats: [
      { label: "Role", value: "FF&E and Finishes" },
      { label: "Scope", value: "Supported initial concept development, space planning, FF&E and finish selections, site visits, client coordination, and design documentation for the spa renovation." },
    ],
    mediaType: "Photography",
    tagline: "Sculpted by Light",
    overviewText: [
      "Located within a Midtown Atlanta hotel, this spa renovation reimagines the guest journey through softness, luminosity, and layered texture. Light becomes a central design element, moving across curved walls, reflective stone, translucent partitions, and tactile surfaces to create a calm progression from arrival to treatment",
      "A palette of cream, sand, warm wood, marble, and brushed metal gives the spa a quiet sense of refinement. Sculptural lighting, soft architectural curves, and delicate art moments add depth without making the space feel heavy.",
      "Treatment rooms, relaxation areas and amenity spaces are composed to support a slower, more restorative rhythm. The resultis an intimate, polished spa environment shaped by atmosphere rather than excess."
    ],
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
    subtitle: "Hotel/ Resort",
    location: "Punta Cana, Dominican Republic",
    year: "Expected 2028",
    type: "Hospitality — Resort",
    scope: "Guest Room & Suite Design",
    stats: [
      { label: "Role", value: "Drawings, FF&E, and Finishes" },
      { label: "Scope", value: "Led finish palette development, FF&E selections, custom furniture design, drawings, specifications, and visual direction for renderings, coordinating with the visualization team to communicate the guestroom and suite design intent." },
    ],
    mediaType: "Rendering",
    tagline: "Quietly Carribean",
    overviewText: [
      "Currently in development, this all-inclusive resort in Punta Cana is conceived as a calm coastal escape shaped by light, texture, and landscape. Warm wood, woven textiles, stone, softened neutrals, and green glazed tile create an atmosphere that feels layered, tactile, and quietly connected to its setting.",
      "Guest rooms and suites are planned with open transitions between sleeping, lounging, and bathing, allowing the interiors to feel fluid and unforced. Rathter than leaning on overt tropical motifs, the design communicates its Carribean character through craft, proportion, and atmosphere.",
    ],
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
      { label: "Role", value: "Multifamily" },
      { label: "Scope", value: "Interior Design" },
    ],
    mediaType: "Photography",
    tagline: "A Neighborly Spirit in Downtown Decatur",
    overviewText: [
      "Modera Decatur captures the walkable, community-driven spirit of downtown Decatur. Warm, layered amenity spaces — from the lobby to co-working lounges and gathering areas — are designed to foster connection while preserving individual comfort. Rich wood tones, tactile fabrics, and curated art give every corner a residential soul.",
    ],
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
    subtitle: "Aesthethic Clinic",
    location: "Paradise Valley, Arizona",
    year: "2025",
    type: "Aesthetic Clinic",
    scope: "Interior Design",
    stats: [
      { label: "Role", value: "FF&E and Finishes" },
      { label: "Scope", value: "Led finish palette development, FF&E selections, specification writing, material documentation, and vendor coordination to support the project's design direction and technical execution" },
    ],
    mediaType: "Rendering",
    tagline: "Precision with Warmth",
    overviewText: [
      "Designed for a Scottsdale plastic surgery and aesthetics practice, Howarth reframes the clinical environment through warmth, privacy, and hospitality-level detail. The interiors replace institutional cues with sculpted millwork, arched thresholds, ambient lighting, pale stone, soft blush tones, and brushed metal accents.",
      "The arrival sequence is calm and composed, creating a sense of ease before consultation or treatment. Curved forms soften circulation, while layered materials bring depth without visual noise. The result is a medical environment that feels precise but not sterile, elevated but not theatrical.",
      "Rather than masking the function of the practice, the design supports it through clarity, comfort, and discretion."
    ],
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
      { label: "Role", value: "Cultural & Community Hub" },
      { label: "Scope", value: "Architecture & Evidence-Based Design" },
    ],
    mediaType: "Rendering",
    tagline: "Interweaving Heritage and Community in East Nusa Tenggara",
    overviewText: [
      "Kaum Cultural Community Hub serves as a transformative anchor in East Nusa Tenggara, bridging the gap between local heritage and global curiosity. The design rejects the typical \"tourist-centric\" model, instead prioritizing a vernacular-inspired framework that empowers the Sikka community. Through a semi-open plan and a material palette drawn directly from the earth and handwoven textiles, the facility provides a dignified stage for cultural preservation and economic mobility.",
    ],
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
    id: "beach-resort",
    heroImage:
      "/images/SCAD undergrad work/Six Senses/Six Senses 1.jpg",
    subtitle: "Luxury Hospitality — Presidential Suites",
    location: "Alys Beach, FL",
    year: "2024",
    type: "Luxury Hospitality — Hotel & Presidential Suites",
    scope: "Interior Design — Guest Rooms & Public Spaces",
    stats: [
      { label: "Role", value: "Luxury Hospitality" },
      { label: "Scope", value: "Hotel & Presidential Suites" },
    ],
    mediaType: "Rendering",
    tagline: "A Potpourri of Growth on Alys Beach",
    overviewText: [
      "Beach Resort project is conceived around the concept 'Potpourri of Growth' — a fluid, calming environment grounded in natural beauty, sustainability, and community wellness. Curvilinear forms, textured natural materials, and a semi-open layout dissolve boundaries between interior and landscape, drawing from Attention Restoration and Place Identity design theory to forge a deep personal connection to space.",
    ],
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
          <a
            href="/#projects"
            className="inline-flex items-center gap-2 pointer-events-auto hover:opacity-70 transition-opacity duration-300 font-cormorant tracking-widest uppercase text-sm bg-white/60 backdrop-blur-md px-5 py-2.5 rounded-full shadow-sm text-[#1a1a1a] border border-white/40"
          >
            <ArrowLeft size={14} />
            Portfolio
          </a>
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
            <h1 className="font-cormorant text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light text-white leading-none tracking-wide mb-4 drop-shadow-sm">
              {projectItem.title}
            </h1>
            <p className="font-cormorant text-base md:text-lg tracking-[0.15em] uppercase text-white/60">
              {detail.location} &nbsp;·&nbsp; {detail.year}
            </p>
          </div>
        </section>

        {/* ── Project Overview ─────────────────────────────────────── */}
        <section className="py-24 md:py-32 px-8 md:px-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-24 items-start">

            {/* Left — editorial text */}
            <div>
              <p className="font-cormorant text-xs tracking-[0.3em] uppercase text-[#b8955a] mb-6">
                Overview
              </p>
              <h2 className="font-cormorant text-3xl md:text-4xl font-light text-[#1a1a1a] mb-8 leading-snug">
                {detail.tagline}
              </h2>
              <div className="w-10 h-[1px] bg-[#b8955a] opacity-50 mb-8" />
              <div className="space-y-5">
                {detail.overviewText.map((paragraph, index) => (
                  <p
                    key={index}
                    className="font-cormorant text-base md:text-lg text-[#4a4a4a] leading-relaxed font-light"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
              <p className="mt-6 font-cormorant text-sm tracking-[0.15em] text-[#9a9590] italic">
                {detail.id === "kaum-cultural-hub" || detail.id === "beach-resort"
                  ? "Undergrad Work"
                  : "Work completed while at HBA."}
              </p>
            </div>

            {/* Right — key stats grid */}
            <div className="md:pt-14">
              <div className="grid grid-cols-1 gap-px bg-[#e8e4de]">
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
        <ProjectGallery images={detail.galleryImages} mediaType={detail.mediaType} />

        {/* ── Back to Portfolio ────────────────────────────────────── */}
        <section className="py-20 md:py-28 flex flex-col items-center gap-6 bg-[#FAF9F6]">
          <div className="w-[1px] h-16 bg-[#b8955a] opacity-40" />
          <a
            href="/#projects"
            className="font-cormorant text-xs tracking-[0.35em] uppercase text-[#1a1a1a] hover:text-[#b8955a] transition-colors duration-300 inline-flex items-center gap-3"
          >
            <ArrowLeft size={14} />
            Back to Portfolio
          </a>
        </section>
      </main>
    );
  }

  // ─── Generic Fallback ──────────────────────────────────────────────────────
  return (
    <main className="min-h-screen bg-[#FAF9F6] text-[#1a1a1a]">

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-20 px-6 py-6 pointer-events-none">
        <a
          href="/#projects"
          className="inline-flex items-center gap-2 pointer-events-auto hover:opacity-70 transition-opacity duration-300 font-cormorant tracking-widest uppercase text-sm bg-white/60 backdrop-blur-md px-5 py-2.5 rounded-full shadow-sm text-[#1a1a1a] border border-white/40"
        >
          <ArrowLeft size={14} />
          Portfolio
        </a>
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
          <h1 className="font-cormorant text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light text-white leading-none tracking-wide mb-4">
            {projectItem.title}
          </h1>
          <p className="font-cormorant text-base md:text-lg tracking-[0.15em] uppercase text-white/60">
            {projectItem.description}
          </p>
        </div>
      </section>

      {/* Generic Content */}
      <section className="py-24 md:py-32 px-8 md:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-24 items-start">
          <div>
            <p className="font-cormorant text-xs tracking-[0.3em] uppercase text-[#b8955a] mb-6">
              Overview
            </p>
            <h2 className="font-cormorant text-3xl md:text-4xl font-light text-[#1a1a1a] mb-8 leading-snug">
              {projectItem.title}
            </h2>
            <div className="w-10 h-[1px] bg-[#b8955a] opacity-50 mb-8" />
            <p className="font-cormorant text-lg md:text-2xl text-[#4a4a4a] leading-relaxed font-light">
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
        <a
          href="/#projects"
          className="font-cormorant text-xs tracking-[0.35em] uppercase text-[#1a1a1a] hover:text-[#b8955a] transition-colors duration-300 inline-flex items-center gap-3"
        >
          <ArrowLeft size={14} />
          Back to Portfolio
        </a>
      </section>
    </main>
  );
}
