import { ProjectDisplayCard } from "./ProjectDisplayCard";

export const ProjectSection = () => {
  const arr = [
    {
      header: "Pomo Timer",
      body: "A pomodoro study timer as chrome extension for myself to use as a studying mechanism.",
      stack: ["html", "css", "javascript", "chrome-api"],
      imageUrl: "/project/pomo-timer.png",
      githubUrl: "https://github.com/Vaden89/PomodoroTimer",
      liveLink: "https://github.com/Vaden89/PomodoroTimer",
    },
    {
      header: "Telex",
      body: "A webapp that helps with real-time notifications for application monitoring to help developers stay ontop of events occuring on their app",
      stack: ["nextjs", "typescript", "shadcn", "stripe", "tailwind"],
      imageUrl: "/project/telex.png",
      githubUrl: "",
      liveLink: "https://telex.im",
    },
  ];
  return (
    <section className="w-full h-full px-6">
      <h1 className="text-lg font-semibold">PROJECTS</h1>
      <div className="w-full  grid grid-cols-1 sm:grid-cols-3 gap-8 mt-3">
        {arr.map((item, index) => {
          return <ProjectDisplayCard data={item} key={index} />;
        })}
      </div>
    </section>
  );
};
