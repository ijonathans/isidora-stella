import ProjectPasswordGate from "@/components/ProjectPasswordGate";

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ProjectPasswordGate>{children}</ProjectPasswordGate>;
}
