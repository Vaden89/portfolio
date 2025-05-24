"use client";
import { motion } from "framer-motion";
import { ServicesCard } from "./ServicesCard";

export const MyServices = () => {
  const services = [
    {
      header: "Frontend Development",
      desc: "Building user interfaces using HTML, CSS, and JavaScript frameworks like React, NextJs.",
    },
    {
      header: "Backend Development",
      desc: "Creating server-side logic, APIs, and database interactions using Node.js, Express, NestJS",
    },
    {
      header: "DevOps & Deployment",
      desc: "Setting up CI/CD pipelines, managing servers, and deploying applications using platforms like Vercel, AWS, or Docker.",
    },
    {
      header: "API Development",
      desc: "Building and consuming RESTful and GraphQL APIs for seamless communication between frontend and backend.",
    },
    {
      header: "Testing & Debugging",
      desc: "Ensuring application reliability through unit, integration, and end-to-end testing with Jest, Cypress, or Vitetest.",
    },
    {
      header: "Performance Optimization",
      desc: "Improving application performance through lazy loading, caching, and efficient database queries.",
    },
    {
      header: "Version Control & Collaboration",
      desc: "Using Git and GitHub for version control, code reviews, and team collaboration.",
    },
  ];

  return (
    <section className="flex flex-col gap-4 px-6">
      <h2 className="font-semibold text-lg">WHAT I OFFER</h2>
      <span className="text-sm text-gray-400">
        Here is what I can do for you as a developer
      </span>
      <motion.div
        className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-4 grid-rows-1"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: {
              delayChildren: 0.5,
              staggerChildren: 0.3,
            },
          },
        }}
      >
        {services.map((item, index) => (
          <ServicesCard key={index} desc={item.desc} header={item.header} />
        ))}
      </motion.div>
    </section>
  );
};
