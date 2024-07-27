import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const LandingSection = () => {
  return (
    <section className="w-full h-full flex flex-col gap-14 items-start">
      <div className="w-full h-full flex flex-col gap-6 items-center">
        <div className="flex flex-col gap-3 items-center justify-center">
          <h1 className="text-4xl font-semibold ">Hello, I am Isaac 🔥</h1>
          <span className="font-light text-sm mt-2 text-gray-500">
            Software Engineer | Gamer | Friend{" "}
          </span>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <span>My Resume</span>
          <button className=" font-semibold text-white bg-[#ffb345] p-4 rounded-lg">
            Download
          </button>
        </div>
      </div>
      <div className="h-[55vh] w-full flex flex-col justify-center gap-4 bg-[#ffb345] rounded-xl font-medium text-white p-4 relative mt-6">
        <div className="absolute w-full flex items-center justify-center left-0 -top-12">
          <div className="w-24 h-24 bg-white rounded-full"></div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-semibold">Isaac Shosanya 👋🏽.</h1>
          <p>
            I love to bring user interfaces to life! I&apos;m passionate about
            crafting beautiful and intuitive web experiences.
          </p>
        </div>
        <p>
          For years, I&apos;ve tackled front-end challenges across diverse
          projects, Building with the latest technologies gets me excited. I
          especially love Nextjs and React the most.
        </p>
        <p>
          Fast-paced environments fuel my creativity, and I thrive collaborating
          with designers, back-end engineers, and product managers to bring a
          cohesive vision to life.
        </p>
      </div>
    </section>
  );
};
