export const resumeContact = {
  name: "Isidora Stella Yubelia",
  email: "istellay@gmail.com",
  linkedin: "isidorastellayubelia",
  linkedinUrl: "https://www.linkedin.com/in/isidorastellayubelia/",
  phone: "+1 (626) 764 2632",
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
    award: "IDA Design Awards",
    detail: "Capstone project awarded bronze for conceptual interior design category.",
    date: "Jan 2024",
  },
  {
    award: "MUSE Design Awards",
    detail: "Capstone project awarded silver for cultural interior design category.",
    date: "Mar 2023",
  },
  {
    award: "ASID Design Excellence Awards",
    detail: "Awarded gold for unique space design concept, gold for design concept in hospitality, and silver for residential design concept.",
    date: "Sep 2022",
  },
  {
    award: "Metropolis “Future100”",
    detail: "Named one of the “Top 100 students in North America that are reimagining interior design”.",
    date: "Apr 2022",
  },
  {
    award: "ASID Student Portfolio Competition",
    detail: "Winner of the 2022 Portfolio Competition evaluated on concept, content, and context.",
    date: "Aug 2022",
  },
  {
    award: "SCAD Out To Launch",
    detail: "Chosen to represent the interior design major with high standard of professionalism.",
    date: "May 2022",
  },
];

export const experience = [
  {
    company: "Hirsch Bedner Associates (HBA)",
    role: "Junior Designer",
    location: "Atlanta, GA",
    dates: "Jul 2022 - Present",
    bullets: [
      "Worked with project managers and other designers on luxury hotels and multi-family projects.",
      "Presented concept and FF&E selections to clients.",
      "Assisted in creating documentation and rendering packages.",
    ],
  },
  {
    company: "Compass Real Estate Campaign",
    role: "SCADpro Collaboration",
    location: "Atlanta, GA",
    dates: "Mar - May 2022",
    bullets: [
      "Generated a creative, interactive and hyper-local campaign that connects with the community.",
    ],
  },
  {
    company: "Century 21 Real Estate Headquarter",
    role: "Internship",
    location: "Jakarta, ID",
    dates: "Sep 2020 - Mar 2021",
    bullets: [
      "Main interior designer, collaborated with the architect, engineering team, and contractor.",
      "Designed custom-built furniture and allowed projects to finish on time by assisting with FF&E sourcing until the design is completed.",
    ],
  },
  {
    company: "Ciputra Group Apartment",
    role: "Internship",
    location: "Jakarta, ID",
    dates: "Jul - Sep 2020",
    bullets: [
      "Initiated creative solutions for micro-apartment and brought a new lens of who millennials are to select suitable materials and FF&E.",
    ],
  },
  {
    company: "Colgate Palmolive Headquarter Renovation",
    role: "SCADpro Collaboration",
    location: "Hong Kong",
    dates: "Apr - Jun 2019",
    bullets: [
      "Assisted Colgate's design team to renovate the main entrance, break room, and supermarket prototype.",
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
  { category: "Autodesk", items: "AutoCAD | Revit | 3Ds Max" },
  { category: "Adobe Suite", items: "Photoshop | Illustrator | InDesign | Premier Pro | Dreamweaver" },
  { category: "3D Software", items: "SketchUp | V-Ray | Enscape | Lumion | Corona Renderer" },
  { category: "Microsoft Suite", items: "Word | Excel | PowerPoint" },
  { category: "Industry", items: "Research | Space Planning | Programming | Sketching" },
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
    heroImage: "/images/Modera McGavock Nashville Photos/Modera_McGavock_02.jpeg",
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
    heroImage: "/images/Four Seasons Spa Renderings/N 13A_Spa  Reception_Opt 1_3506_2022-08-25_310.jpg",
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
  },
];
