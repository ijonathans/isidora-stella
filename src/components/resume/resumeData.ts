export const resumeContact = {
  name: "Isidora Stella Yubelia",
  email: "istellay@gmail.com",
  linkedin: "isidorastellayubelia",
  linkedinUrl: "https://www.linkedin.com/in/isidorastellayubelia/",
  phone: "+1 (626) 764 2632",
  whatsapp: "+62 822 1067 2622",
};

export const aboutMeText = [
  "My name is Isidora Stella Yubelia, born and raised in Jakarta, Indonesia. Being an active and creative person from a diverse country allows me to socialize and learn new insights from different opportunities. Hardworking, digital-oriented, and good communication skills are some of the qualifications that allow me to work independently and as a team player. I am currently a junior designer at Hirsch Bedner Associates (HBA International) in Atlanta, a venerable giant ranked number 1 in hospitality sector. Throughout my studies and career, I learned how to design for the user experience, as I believe hospitality is not solely about designing unique spaces, but about evoking an intimate connection between the visitors and the surrounding ambience. My BFA studies have allowed me to develop fundamental theoretical knowledge and practical skillsets for a professional work setting.",
  "I am extremely grateful for being a part of an amazing creative community with opportunities to learn new things every day, as I believe the best medium for growth is learning from failure and constructive criticism. My vision for design is to deliver meaningful stories that relate back to cultural values, connecting visitors, the built environment, and nature through sustainability and wellness. Design should provide authentic, fun and unforgettable experiences that improve the economic growth, community wellbeing, and future prosperity of all societies.",
];

export const education = {
  school: "Savannah College of Art and Design (SCAD)",
  degree: "B.F.A in Interior Design",
  years: "2018 - 2022",
  minor: "Minor in Business Management & Entrepreneurship",
  honors: "GPA 4.0 | Academic & Achievement Scholarship",
};

export const recognition = [
  {
    award: "Young Designers Collective (YDC)",
    detail: "Ambassador for Atlanta's emerging design community, supporting curated events and industry engagement.",
    date: "2026",
  },
  {
    award: "30 Under 30 Interior Design",
    detail: "Named among emerging designers under 30 for design excellence, leadership, and industry impact.",
    date: "2025",
  },
  {
    award: "MUSE Design Award",
    detail: "Silver recognition for Cultural Interior Design.",
    date: "2023",
  },
  {
    award: "IDA Design Award",
    detail: "Bronze recognition for Conceptual Interior Design.",
    date: "2023",
  },
  {
    award: "ASID Design Excellence Award",
    detail: "Gold recognition for Unique Space Design Concept, gold recognition for Hospitality Design Concept, and silver recognition for Residential Design Concept.",
    date: "2022",
  },
];

export const experience = [
  {
    company: "Hirsch Bedner Associates (HBA)",
    role: "Designer",
    location: "Atlanta, GA",
    dates: "2024 - Present",
    bullets: [
      "Lead design presentations and shape experience-led hospitality interiors from concept through installation, including design narratives, consultant coordination, and FF&E development.",
      "Collaborate with clients, international consultants, and vendors to translate design intent into built form through procurement support, installation coordination, and design execution.",
      "Review documentation, shop drawings, samples, and specifications to support technical accuracy, design quality, and alignment with project standards.",
    ],
  },
  {
    company: "Hirsch Bedner Associates (HBA)",
    role: "Junior Designer",
    location: "Atlanta, GA",
    dates: "2022 - 2024",
    bullets: [
      "Contributed to schematic design, design development, and construction documentation across hospitality projects.",
      "Supported material palettes, FF&E specifications, presentation materials, design standards, and site coordination to maintain design accuracy from concept through completion.",
    ],
  },
  {
    company: "Century 21 Real Estate Office",
    role: "Internship",
    location: "Jakarta, ID",
    dates: "2020 - 2021",
    bullets: [
      "Assisted with interior design development, furniture design, FF&E sourcing, and project coordination with the architect, engineering, and contractor.",
    ],
  },
];

export const involvements = [
  { org: "ASID Member", location: "Atlanta, GA", dates: "2021 - Present" },
  { org: "NEWH Member", location: "Atlanta, GA", dates: "2021 - Present" },
  { org: "Tau Sigma Delta Member", location: "Atlanta, GA", dates: "2021 - Present" },
  { org: "SCAD Interior Design Organization Treasurer", location: "Atlanta, GA", dates: "2021 - 2022" },
  { org: "SCAD Student Ambassador", location: "Hong Kong", dates: "2018 - 2020" },
  { org: "Design & Media Division, Indonesian Student Association", location: "Hong Kong", dates: "2018 - 2020" },
  { org: "Indonesian Overseas Presidential Election Coordinator", location: "Hong Kong", dates: "Mar - Apr 2019" },
];

export const skills = [
  { category: "Technical Visualization", items: "AutoCAD | Revit | Bluebeam | SketchUp | 3ds Max | Enscape | V-Ray" },
  { category: "Adobe", items: "InDesign | Photoshop | Illustrator" },
];

export interface ResumeProject {
  id: string;
  title: string;
  location: string;
  year: string;
  type: string;
  tagline: string;
  overview: string;
  heroImage: string;
  role: string;
}

export const resumeProjects: ResumeProject[] = [
  {
    id: "turks-resort",
    title: "Turks Resort",
    location: "Grace Bay, Turks and Caicos",
    year: "Expected 2027",
    type: "Hospitality — Resort",
    tagline: "Living by the Sea",
    overview:
      "An upscale residential resort under construction featuring four luxury villas and 68 condominium residences, balancing contemporary architecture with a relaxed coastal sensibility.",
    heroImage: "/images/Turks & Caicos/BEACH BAR DUSK VIEW.jpg",
    role: "FF&E, Technical Development, and Project Documentation",
  },
  {
    id: "modera-parkside",
    title: "Modera Parkside",
    location: "Atlanta, Georgia",
    year: "2025",
    type: "Multifamily Residential",
    tagline: "Between Park and Skyline",
    overview:
      "A Midtown Atlanta multifamily project shaped by the contrast between city energy and parkside calm, balancing sophistication with approachable, socially flexible amenity spaces.",
    heroImage: "/images/Modera Parkside Photos/Modera_Parkside_01.jpeg",
    role: "Drawings, FF&E, Finishes, and Installation",
  },
  {
    id: "modera-mcgavock",
    title: "Modera McGavock",
    location: "Nashville, Tennessee",
    year: "2025",
    type: "Multifamily Residential",
    tagline: "Refined Interiors for Music City's Creative Energy",
    overview:
      "A Nashville South Gulch multifamily project pairing urban energy with residential comfort through warm materials, tailored details, and flexible, welcoming amenity spaces.",
    heroImage: "/images/Modera McGavock Nashville Photos/0030-mcgavock-hero.jpg",
    role: "Drawings, FF&E, Finishes, and Installation",
  },
  {
    id: "woodlawn",
    title: "225 Woodlawn Rd",
    location: "Charlotte, North Carolina",
    year: "2025",
    type: "Multifamily Residential",
    tagline: "The Urban Reset",
    overview:
      "A layered multifamily amenity retreat pairing industrial materials with warmth and tactility, creating a sequence of spaces that feel active, social, and grounded.",
    heroImage: "/images/225 Woodlawn Renderings/N 04A_L1 Reception_3512_2022-10-19_1064.jpg",
    role: "Drawing, FF&E and Finishes",
  },
  {
    id: "four-seasons-spa",
    title: "Four Seasons Spa",
    location: "Atlanta, Georgia",
    year: "2024",
    type: "Hospitality — Hotel Renovation",
    tagline: "Sculpted by Light",
    overview:
      "A Midtown Atlanta spa renovation reimagining the guest journey through softness, luminosity, and layered texture, creating a calm and restorative progression.",
    heroImage: "/images/Four Seasons Spa Renderings/N 13D_Spa Treatment_Cam 01_2022-08-24_1064.jpg",
    role: "FF&E and Finishes",
  },
  {
    id: "punta-cana",
    title: "All-Inclusive Resort",
    location: "Punta Cana, Dominican Republic",
    year: "Expected 2028",
    type: "Hospitality — Resort",
    tagline: "Quietly Caribbean",
    overview:
      "A coastal resort in development conceived as a calm escape shaped by light, texture, and landscape, communicating its Caribbean character through craft and atmosphere.",
    heroImage: "/images/Punta Cana Renderings/N 01A_3Bay Bedroom_3514.01_2024-08-02_743.jpg",
    role: "Drawings, FF&E, and Finishes",
  },
  {
    id: "modera-decatur",
    title: "Modera Decatur",
    location: "Atlanta, Georgia",
    year: "2023",
    type: "Multifamily Residential",
    tagline: "A Neighborly Spirit in Downtown Decatur",
    overview:
      "Warm, layered amenity spaces capturing the walkable, community-driven spirit of downtown Decatur, fostering connection while preserving individual comfort.",
    heroImage: "/images/Modera Decatur Photos/PHOTO 1.jpg",
    role: "Interior Design",
  },
  {
    id: "howarth-aesthetic",
    title: "Howarth",
    location: "Paradise Valley, Arizona",
    year: "2025",
    type: "Aesthetic Clinic",
    tagline: "Precision with Warmth",
    overview:
      "A Scottsdale aesthetics practice reframing the clinical environment through warmth, privacy, and hospitality-level detail — precise but not sterile, elevated but not theatrical.",
    heroImage: "/images/Howarth Aesthetic Renderings/N 04A_Reception_3524_2024-09-23_197.jpg",
    role: "FF&E and Finishes",
  },
  {
    id: "doubletree-fandb",
    title: "DoubleTree by Hilton F&B",
    location: "Pakistan",
    year: "2025",
    type: "Hospitality — Restaurant & Dining",
    tagline: "Layered Dining, One Continuous Experience",
    overview:
      "Three distinct dining concepts — specialty, Lebanese, and all-day three-meal — unified by a shared material language while each retains its own identity.",
    heroImage: "/images/DoubleTree by Hilton F&B Renderings/N 07A_Three Meal_3523_2025-06-19_197.jpg",
    role: "FF&E and Finishes",
  },
  {
    id: "aqualina",
    title: "Aqualina",
    location: "Nassau, Bahamas",
    year: "Expected 2027",
    type: "Luxury Residences",
    tagline: "Refined by Water",
    overview:
      "A luxury residential retreat inspired by the calming qualities of water, blending modern elegance with coastal ease across lobby, spa, and wellness amenities.",
    heroImage: "/images/Aqualina Renderings/N 04A_Lobby_30176_Option02_2024-01-24_1064.jpg",
    role: "FF&E and Finishes",
  },
  {
    id: "kaum-cultural-hub",
    title: "Kaum Cultural Community Hub",
    location: "East Nusa Tenggara, Indonesia",
    year: "Capstone",
    type: "Mixed-Use / Cultural & Community Hub",
    tagline: "Woven by Place and People",
    overview:
      "An award-winning capstone project rooted in the concept Interweave, bringing exhibition, workshop, performance, retail, and dining spaces together for local community life and cultural tourism.",
    heroImage:
      "/images/SCAD undergrad work/KAUM Cultural Community Hub/KAUM Cultural Community Hub - Jendela Maumere Gallery.jpg",
    role: "Research, Concept, Space Planning, Drawings, FF&E, Finishes, and Visualization",
  },
  {
    id: "beach-resort",
    title: "Six Senses Beach Resort",
    location: "Alys Beach, Florida",
    year: "2024",
    type: "Luxury Hospitality — Hotel & Presidential Suites",
    tagline: "A Potpourri of Growth on Alys Beach",
    overview:
      "Conceived around the concept 'Potpourri of Growth' — a fluid, calming environment grounded in natural beauty, sustainability, and community wellness.",
    heroImage: "/images/SCAD undergrad work/Six Senses/Six Senses 1.png",
    role: "Luxury Hospitality",
  },
];
