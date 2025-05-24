import Image from "next/image";
import { technologies } from "../resources/data";

export const AboutMe = () => {
  return (
    <div className="w-full flex flex-col px-6 gap-5 sm:px-16 sm:mb-24 relative">
      <span id="about" className="absolute sm:-top-20"></span>
      <div className="flex flex-col gap-4 lg:flex-row justify-between">
        <h2 className="font-bold text-2xl">ABOUT ME</h2>
        <div className="lg:w-4/5 flex flex-col gap-4 text-sm sm:text-base text-gray-400">
          <p>
            I am a frontend&apos;s engineer who has been in love with computers
            from a young age. I started taking software development seriously in
            my first year of college and I haven&apos;t looked back since,
            actively commiting to crafting quality and maintainable solutions.
          </p>
          <p>
            My expertise lies in building quality web and mobile products,
            I&apos;ve had the privilege of working for various companies and
            clients. Currently, I am building products for the NCC and their
            e-services platform.
          </p>
          <p>
            I believe in the power of quality and refined work. Refined work
            goes beyond just the surface. Everyday, I strive to create
            impactful, long-lasting results through thoughtful attention to
            details and continuous improvement.
          </p>
        </div>
      </div>
      <h3 className="text-xl font-semibold">Technologies</h3>
      <div className="w-full grid md:grid-cols-5 sm:grid-cols-8 grid-cols-3 gap-4">
        {technologies.map((item, index) => {
          return (
            <div className="flex gap-2 items-center" key={index}>
              <Image
                src={item.icon}
                width={24}
                height={24}
                alt={item.name}
                className="text-white"
              />
              <span className="text-gray-400 font-medium sm:text-base text-sm">
                {item.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
