import { FooterSection } from "./components/FooterSection";
import { LandingSection } from "./components/LandingSection";
import { MyServices } from "./components/MyServices";
import { ProjectSection } from "./components/ProjectSection";
import { SkillSection } from "./components/SkillSection";

export default function Home() {
  return (
    <main className="w-full flex flex-col justify-between text-white gap-12 pb-10 sm:px-20">
      <LandingSection />
      <MyServices />
      <ProjectSection />
      <SkillSection />
      <FooterSection />
    </main>
  );
}
