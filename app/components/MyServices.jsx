import { ServicesCard } from "./ServicesCard";

export const MyServices = () => {
  const services = [
    {
      header: "WEB DEVELOPMENT",
      desc: "I build beautiful websites with React, NextJS, TailwindCSS, Typescript, and JavaScript. I also develop backend API's with Node/ExpressJS.",
    },
    {
      header: "API INTEGRATIONS",
      desc: "Integrating backend services and APIs to the frontend securely to fetch and display data in real time.",
    },
    {
      header: "CONTINUOUS LEARNING",
      desc: "Staying updated with the latest frontend technologies, trends, and best practices to deliver modern and innovative solutions.",
    },
    {
      header: "RESPONSIVE DESIGN",
      desc: "Building websites and applications that work seamlessly on various devices and screen sizes, from desktop to smartphones.",
    },
    {
      header: "Testing & Quality Assurance",
      desc: "I conduct thorough testing (unit tests, integration tests, etc.) to ensure the quality and reliability of my work.",
    },
  ];

  return (
    <section className="flex flex-col gap-4 px-6">
      <h2 className="font-semibold text-lg">WHAT I OFFER</h2>
      <span className="text-sm text-gray-400">
        Here is what I can do for you as a developer
      </span>
      <div className="w-full grid sm:grid-cols-3 gap-4 grid-rows-2">
        {services.map((item, index) => {
          return (
            <ServicesCard key={index} desc={item.desc} header={item.header} />
          );
        })}
      </div>
    </section>
  );
};
