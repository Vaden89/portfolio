import { AboutMe } from "./components/AboutMe";
import { FooterSection } from "./components/FooterSection";
import { LandingSection } from "./components/LandingSection";
import { MyServices } from "./components/MyServices";
import { ProjectSection } from "./components/ProjectSection";

export default function Home() {
  return (
    <main className="w-full flex flex-col justify-between text-white gap-10 pb-10 sm:px-10">
      <LandingSection />
      <AboutMe />
      <MyServices />
      <ProjectSection />
      <FooterSection />
    </main>
  );
}
