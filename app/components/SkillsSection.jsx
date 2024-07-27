import {
  faCss3Alt,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export const SkillsSection = () => {
  return (
    <section className="w-full h-full flex flex-col gap-4">
      <div>
        <h1 className="flex w-full justify-center text-lg font-semibold ">
          SKILLS
        </h1>
        <hr />
      </div>
      <div className="w-full flex items-center gap-4 overflow-x-auto h-24">
        <div className="bg-[#ffb345] flex items-center justify-center h-full rounded-xl p-4 px-6 min-w-28">
          <FontAwesomeIcon width={48} className="text-white" icon={faReact} />
        </div>
        <div className="bg-[#ffb345] h-full flex items-center justify-center rounded-xl p-4 px-6 min-w-28">
          <Image
            src={"/nextjs-icon.png"}
            width={48}
            height={48}
            alt="Next.js Icon"
          />
        </div>
        <div className="bg-[#ffb345] h-full flex items-center justify-center rounded-xl p-4 px-6 min-w-28">
          <FontAwesomeIcon width={50} className="text-white" icon={faNodeJs} />
        </div>
        <div className="bg-[#ffb345] h-full flex items-center justify-center rounded-xl p-4 px-6 min-w-28">
          <FontAwesomeIcon width={40} className="text-white" icon={faCss3Alt} />
        </div>
        <div className="bg-[#ffb345] h-full flex items-center justify-center rounded-xl p-4 px-6 min-w-28">
          <Image
            src={"/tailwind-icon.png"}
            width={60}
            height={60}
            alt="Next.js Icon"
          />
        </div>
      </div>
      <hr />
    </section>
  );
};
