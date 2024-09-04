import { faGitAlt, faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export const SkillSection = () => {
  const data = [
    {
      name: "nextjs",
      logo: "/nextjs.svg",
    },
    {
      name: "javascript",
      logo: "/js.svg",
    },
    {
      name: "TypeScript",
      logo: "/ts.svg",
    },
    {
      name: "tailwind",
      logo: "/tailwind.png",
    },
    {
      name: "Vitejs",
      logo: "/Vite.js.svg",
    },
  ];
  return (
    <div className="w-full flex flex-col items-center justify-center px-6 gap-4">
      <h2 className="w-full lg:text-lg lg:font-semibold">SKILLS</h2>
      <div className="w-full flex items-center lg:justify-center  gap-2 overflow-auto noscroll">
        {data.map((item, index) => {
          return (
            <div
              className="flex items-center min-w-14 p-3 bg-[#121212] rounded-xl"
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
        <div className="p-3 bg-[#121212] rounded-xl mr-2">
          <FontAwesomeIcon icon={faReact} className="w-8 lg:w-10" />
        </div>
        <div className="p-3 bg-[#121212] rounded-xl mr-2">
          <FontAwesomeIcon icon={faGitAlt} className="w-8 lg:w-10" />
        </div>
      </div>
    </div>
  );
};
