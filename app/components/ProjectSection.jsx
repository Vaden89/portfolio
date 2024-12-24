import { ProjectDisplayCard } from "./ProjectDisplayCard";

export const ProjectSection = () => {
  const data = [];
  return (
    <section className="w-full h-full px-6">
      <h1 className="text-lg font-semibold">PROJECTS</h1>
      <div className="w-full  grid grid-cols-1 sm:grid-cols-3 gap-8 mt-3">
        <ProjectDisplayCard />
        <ProjectDisplayCard />
        <ProjectDisplayCard />
      </div>
    </section>
  );
};
