import { FooterSection } from "./components/FooterSection";
import { LandingSection } from "./components/LandingSection";
import { NavBar } from "./components/NavBar";
import { ProjectSection } from "./components/ProjectSection";
import { SkillSection } from "./components/SkillSection";

export default function Home() {
  return (
    <main className="w-full flex flex-col justify-between text-white gap-10 pb-10">
      <div>
        <NavBar />
        <hr />
      </div>
      <LandingSection />
      <ProjectSection />
      <SkillSection />
      <FooterSection />
    </main>
  );
}
