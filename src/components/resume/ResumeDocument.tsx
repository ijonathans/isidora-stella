import { Document, Page, View, Text, Image, Font, StyleSheet } from "@react-pdf/renderer";
import {
  resumeContact,
  aboutMeText,
  education,
  recognition,
  experience,
  involvements,
  skills,
  resumeProjects,
} from "./resumeData";

Font.register({
  family: "Cormorant Garamond",
  fonts: [
    { src: "/fonts/CormorantGaramond-Regular.ttf", fontWeight: 400 },
    { src: "/fonts/CormorantGaramond-Medium.ttf", fontWeight: 500 },
    { src: "/fonts/CormorantGaramond-SemiBold.ttf", fontWeight: 600 },
    { src: "/fonts/CormorantGaramond-Bold.ttf", fontWeight: 700 },
    { src: "/fonts/CormorantGaramond-Italic.ttf", fontWeight: 400, fontStyle: "italic" },
  ],
});

Font.register({
  family: "Inter",
  fonts: [
    { src: "/fonts/Inter-Regular.ttf", fontWeight: 400 },
    { src: "/fonts/Inter-Medium.ttf", fontWeight: 500 },
    { src: "/fonts/Inter-SemiBold.ttf", fontWeight: 600 },
    { src: "/fonts/Inter-Bold.ttf", fontWeight: 700 },
  ],
});

const ink = "#1a1a1a";
const gold = "#d4af37";
const muted = "#888888";
const cream = "#FAF9F6";
const line = "#e0dcd6";

const styles = StyleSheet.create({
  page: {
    fontFamily: "Inter",
    fontSize: 9.5,
    color: ink,
    backgroundColor: "#ffffff",
    padding: 0,
  },
  section: {
    paddingHorizontal: 48,
    paddingVertical: 40,
  },
  displayLabel: {
    fontFamily: "Inter",
    fontSize: 9,
    letterSpacing: 3,
    color: gold,
    textTransform: "uppercase",
    marginBottom: 10,
  },
  heading: {
    fontFamily: "Cormorant Garamond",
    fontWeight: 500,
    fontSize: 30,
    color: ink,
  },
  hr: {
    height: 1,
    backgroundColor: gold,
    width: 60,
    marginTop: 14,
    marginBottom: 4,
    opacity: 0.7,
  },
  colTitle: {
    fontFamily: "Cormorant Garamond",
    fontWeight: 600,
    fontSize: 15,
    letterSpacing: 1,
    textTransform: "uppercase",
    color: ink,
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: ink,
    paddingBottom: 4,
  },
});

// ─── Page 1: Title Page ───────────────────────────────────────────────────────

function TitlePage() {
  return (
    <Page size="A4" orientation="landscape" style={{ ...styles.page, backgroundColor: ink }}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          padding: 60,
        }}
      >
        <Text
          style={{
            fontFamily: "Inter",
            fontSize: 10,
            letterSpacing: 5,
            color: gold,
            textTransform: "uppercase",
            marginBottom: 22,
          }}
        >
          Interior Design Portfolio
        </Text>
        <Text
          style={{
            fontFamily: "Cormorant Garamond",
            fontWeight: 500,
            fontSize: 52,
            color: "#ffffff",
            textAlign: "center",
            letterSpacing: 1,
          }}
        >
          Isidora Stella Yubelia
        </Text>
        <View style={{ height: 1, width: 90, backgroundColor: gold, marginTop: 28, marginBottom: 28, opacity: 0.8 }} />
        <Text
          style={{
            fontFamily: "Cormorant Garamond",
            fontStyle: "italic",
            fontSize: 15,
            color: "#c9c9c9",
            textAlign: "center",
          }}
        >
          Designing spaces with story, atmosphere, and a sense of place.
        </Text>
      </View>
      <View
        style={{
          paddingHorizontal: 60,
          paddingVertical: 24,
          flexDirection: "row",
          justifyContent: "space-between",
          borderTopWidth: 1,
          borderTopColor: "#333333",
        }}
      >
        <Text style={{ fontSize: 9, color: "#999999" }}>{resumeContact.email}</Text>
        <Text style={{ fontSize: 9, color: "#999999" }}>{resumeContact.linkedin}</Text>
      </View>
    </Page>
  );
}

// ─── Page 2: About Me ─────────────────────────────────────────────────────────

function AboutPage() {
  return (
    <Page size="A4" orientation="landscape" style={styles.page}>
      <View style={{ flexDirection: "row", flex: 1 }}>
        <View style={{ width: "38%", position: "relative" }}>
          <Image src="/images/potrait.png" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </View>
        <View style={{ width: "62%", padding: 48, justifyContent: "center" }}>
          <Text style={styles.displayLabel}>About Me</Text>
          <Text style={{ ...styles.heading, marginBottom: 18, lineHeight: 1.15 }}>
            Hello, I&apos;m Stella
          </Text>
          {aboutMeText.map((para, i) => (
            <Text
              key={i}
              style={{
                fontFamily: "Cormorant Garamond",
                fontSize: 12.5,
                lineHeight: 1.6,
                color: "#333333",
                marginBottom: 12,
              }}
            >
              {para}
            </Text>
          ))}
        </View>
      </View>
    </Page>
  );
}

// ─── Page 3: Resume ────────────────────────────────────────────────────────────

function ResumePage() {
  return (
    <Page size="A4" orientation="landscape" style={{ ...styles.page, paddingHorizontal: 40, paddingVertical: 36 }}>
      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontFamily: "Cormorant Garamond", fontWeight: 600, fontSize: 26, letterSpacing: 1 }}>
          ISIDORA STELLA YUBELIA
        </Text>
        <View style={{ flexDirection: "row", gap: 18, marginTop: 6 }}>
          <Text style={{ fontSize: 9, color: "#555" }}>{resumeContact.email}</Text>
          <Text style={{ fontSize: 9, color: "#555" }}>{resumeContact.linkedin}</Text>
          <Text style={{ fontSize: 9, color: "#555" }}>{resumeContact.phone}</Text>
        </View>
      </View>

      <View style={{ flexDirection: "row", gap: 28, flex: 1 }}>
        {/* Column 1: Education + Recognition */}
        <View style={{ width: "32%" }}>
          <Text style={styles.colTitle}>Education</Text>
          <View style={{ marginBottom: 16 }}>
            <Text style={{ fontFamily: "Inter", fontWeight: 600, fontSize: 10 }}>{education.school}</Text>
            <Text style={{ fontSize: 9, marginTop: 2 }}>
              {education.degree} {education.years}
            </Text>
            <Text style={{ fontSize: 9, color: "#555" }}>{education.minor}</Text>
            <Text style={{ fontSize: 9, color: "#555" }}>{education.honors}</Text>
          </View>

          <Text style={styles.colTitle}>Recognition</Text>
          {recognition.map((r) => (
            <View key={r.award} style={{ marginBottom: 8 }}>
              <Text style={{ fontFamily: "Inter", fontWeight: 600, fontSize: 9.5 }}>
                {r.award} <Text style={{ fontWeight: 400, color: "#777" }}>| {r.date}</Text>
              </Text>
              <Text style={{ fontSize: 8.5, color: "#555", marginTop: 1, lineHeight: 1.4 }}>{r.detail}</Text>
            </View>
          ))}
        </View>

        {/* Column 2: Experience */}
        <View style={{ width: "36%" }}>
          <Text style={styles.colTitle}>Relevant Experiences</Text>
          {experience.map((e) => (
            <View key={e.company} style={{ marginBottom: 10 }}>
              <Text style={{ fontFamily: "Inter", fontWeight: 600, fontSize: 10 }}>{e.company}</Text>
              <Text style={{ fontFamily: "Cormorant Garamond", fontStyle: "italic", fontSize: 9.5 }}>
                {e.role} | {e.location} | {e.dates}
              </Text>
              {e.bullets.map((b, i) => (
                <Text key={i} style={{ fontSize: 8.5, color: "#555", lineHeight: 1.45, marginTop: 2 }}>
                  {b}
                </Text>
              ))}
            </View>
          ))}
        </View>

        {/* Column 3: Involvements + Skills */}
        <View style={{ width: "32%" }}>
          <Text style={styles.colTitle}>Involvements</Text>
          {involvements.map((inv) => (
            <View key={inv.org} style={{ marginBottom: 7 }}>
              <Text style={{ fontSize: 8.5, color: "#777" }}>
                {inv.location} | {inv.dates}
              </Text>
              <Text style={{ fontFamily: "Inter", fontWeight: 600, fontSize: 9.5 }}>{inv.org}</Text>
            </View>
          ))}

          <Text style={{ ...styles.colTitle, marginTop: 8 }}>Skills</Text>
          {skills.map((s) => (
            <View key={s.category} style={{ flexDirection: "row", marginBottom: 5 }}>
              <Text style={{ fontFamily: "Inter", fontWeight: 600, fontSize: 8.5, width: 70 }}>{s.category}</Text>
              <Text style={{ fontSize: 8.5, color: "#444", flex: 1, lineHeight: 1.4 }}>{s.items}</Text>
            </View>
          ))}
        </View>
      </View>
    </Page>
  );
}

// ─── Page 4: Content / TOC ─────────────────────────────────────────────────────

function ContentsPage() {
  return (
    <Page size="A4" orientation="landscape" style={{ ...styles.page, ...styles.section }}>
      <Text style={styles.displayLabel}>Contents</Text>
      <Text style={{ ...styles.heading, marginBottom: 24 }}>Selected Works</Text>

      <View style={{ flexDirection: "row", flexWrap: "wrap", rowGap: 10 }}>
        {resumeProjects.map((p, i) => (
          <View
            key={p.id}
            style={{
              width: "50%",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingRight: 24,
              marginBottom: 8,
            }}
          >
            <Text style={{ fontFamily: "Cormorant Garamond", fontSize: 14 }}>
              {String(i + 1).padStart(2, "0")}. {p.title}
            </Text>
            <Text style={{ fontSize: 9, color: muted, marginTop: 3 }}>
              {p.location} | {p.year}
            </Text>
          </View>
        ))}
      </View>
    </Page>
  );
}

// ─── Project Pages ─────────────────────────────────────────────────────────────

function ProjectPage({ project, index }: { project: (typeof resumeProjects)[number]; index: number }) {
  return (
    <Page size="A4" orientation="landscape" style={styles.page}>
      <View style={{ flexDirection: "row", flex: 1 }}>
        <View style={{ width: "55%" }}>
          <Image src={project.heroImage} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </View>
        <View style={{ width: "45%", padding: 44, justifyContent: "center", backgroundColor: cream }}>
          <Text style={{ fontSize: 9, color: gold, letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>
            {String(index + 1).padStart(2, "0")} — {project.type}
          </Text>
          <Text style={{ fontFamily: "Cormorant Garamond", fontWeight: 500, fontSize: 28, marginBottom: 6 }}>
            {project.title}
          </Text>
          <Text
            style={{
              fontFamily: "Cormorant Garamond",
              fontStyle: "italic",
              fontSize: 13,
              color: "#666",
              marginBottom: 14,
            }}
          >
            {project.tagline}
          </Text>
          <View style={{ ...styles.hr, marginTop: 0, marginBottom: 14 }} />
          <Text style={{ fontSize: 9.5, color: "#555", marginBottom: 4 }}>{project.location}</Text>
          <Text style={{ fontSize: 9.5, color: "#555", marginBottom: 14 }}>{project.year}</Text>
          <Text style={{ fontFamily: "Cormorant Garamond", fontSize: 12.5, lineHeight: 1.6, color: "#333" }}>
            {project.overview}
          </Text>
        </View>
      </View>
    </Page>
  );
}

export default function ResumeDocument() {
  return (
    <Document
      title="Isidora Stella Yubelia — Portfolio"
      author="Isidora Stella Yubelia"
      subject="Interior Design Portfolio & Resume"
    >
      <TitlePage />
      <AboutPage />
      <ResumePage />
      <ContentsPage />
      {resumeProjects.map((project, i) => (
        <ProjectPage key={project.id} project={project} index={i} />
      ))}
    </Document>
  );
}
