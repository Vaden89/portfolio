import { ProjectDisplayCard } from "./ProjectDisplayCard";

export const ProjectSection = () => {
  const data = [];
  return (
    <section className="w-full px-6">
      <h1 className="text-lg font-semibold">PROJECTS</h1>
      <div className="flex justify-start gap-4 items-center overflow-x-scroll mt-5 noscroll">
        <ProjectDisplayCard />
        <ProjectDisplayCard />
        <ProjectDisplayCard />
      </div>
    </section>
  );
};
