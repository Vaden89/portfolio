import { faGitAlt, faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export const SkillSection = () => {
  const data = [
    {
      name: "reactjs",
      logo: "/icons/react-js.svg",
    },
    {
      name: "nextjs",
      logo: "/icons/nextjs.svg",
    },
    {
      name: "TypeScript",
      logo: "/icons/ts.svg",
    },
    {
      name: "tailwind",
      logo: "/icons/tailwind.png",
    },
    {
      name: "expressjs",
      logo: "/icons/expressjs.svg",
    },
    {
      name: "mongodb",
      logo: "/icons/mongo-db.svg",
    },
    {
      name: "javascript",
      logo: "/icons/js.svg",
    },
    {
      name: "Vitejs",
      logo: "/icons/Vite.js.svg",
    },
    {
      name: "git",
      logo: "/icons/git.svg",
    },
    {
      name: "aws",
      logo: "/icons/aws.svg",
    },
  ];

  return (
    <div
      id="skills"
      className="w-full flex flex-col items-center justify-center px-6 gap-4"
    >
      <h2 className="w-full lg:text-lg lg:font-semibold">SKILLS</h2>
      <div className="w-full flex items-center lg:justify-center  gap-2 overflow-auto noscroll">
        {data.map((item, index) => {
          return (
            <div
              className="flex items-center min-w-14 p-3 bg-[#0D1826] rounded-xl"
              key={index}
            >
              <Image
                src={item.logo}
                width={35}
                height={35}
                className="w-10"
                alt=""
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
