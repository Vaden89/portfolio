import { projects } from "../resources/data";
import { ProjectDisplayCard } from "./ProjectDisplayCard";

export const ProjectSection = () => {
  return (
    <section id="projects" className="w-full h-full px-6">
      <h1 className="text-lg font-semibold">PROJECTS</h1>
      <div className="w-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-3">
        {projects.map((item, index) => {
          return <ProjectDisplayCard data={item} key={index} />;
        })}
      </div>
    </section>
  );
};
