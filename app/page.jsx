import { ContactSection } from "./components/ContactSection";
import { LandingSection } from "./components/LandingSection";
import { ProjectSection } from "./components/ProjectsSection";
import { SkillsSection } from "./components/SkillsSection";

export default function Home() {
  return (
    <main className="w-full flex flex-col justify-between gap-20 px-6">
      <LandingSection />
      <SkillsSection />
      <ProjectSection />
      <ContactSection />
    </main>
  );
}
