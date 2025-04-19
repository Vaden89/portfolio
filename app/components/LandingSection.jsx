"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export const LandingSection = () => {
  const headingText = "Hi, I'm Isaac 👋🏽";
  const subText = "A Software Developer & Friend.";
  const words = headingText.split(" ");

  return (
    <section className="w-full h-full sm:h-[90vh] px-6 py-4 flex sm:justify-center sm:mt-10 sm:flex-row flex-col gap-6">
      <div className="sm:w-3/5 flex flex-col gap-6">
        <motion.div
          className="text-3xl lg:text-5xl xl:text-6xl font-bold text-white"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.5,
              },
            },
          }}
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
              }}
              className="inline-block"
            >
              {word}&nbsp;
            </motion.span>
          ))}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: 0.2 * words.length,
            }}
          >
            <span>{subText}</span>
          </motion.div>
        </motion.div>
        <motion.div
          className="flex flex-col gap-3  text-gray-300 leading-6 opacity-70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <p>
            I&apos;m a passionate web developer who loves bringing designs to
            life with a solid foundation in HTML, CSS, and JavaScript. I utilize
            modern frameworks like React and Next.js to craft visually stunning,
            user-friendly, and responsive websites that effectively convey
            complex ideas.{" "}
            <span className="hidden sm:flex">
              {" "}
              I&apos;m also exploring the potential of Rust for high-performance
              web development and am intrigued by the possibilities of
              blockchain technology in shaping the future of the web.
            </span>
          </p>
          {/* <p className="hidden sm:flex">
            I create user-centered products that address real-world challenges.
            I prioritize seamless experiences, accessibility for all users, and
            high-performance solutions.
          </p> */}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="flex items-center text-center gap-4 text-white"
        >
          <span className="h-2 w-2 rounded-full bg-[#6200ea] glow-button"></span>
          <span>
            Listening to{" "}
            <Link
              href={"https://open.spotify.com/artist/3a1tBryiczPAZpgoZN9Rzg"}
              target="_blank"
              className="underline underline-offset-4"
            >
              Asake
            </Link>
          </span>
        </motion.div>
      </div>
      <div className="w-full h-[40vh]  sm:w-2/5 sm:h-full relative sm:mt-10">
        <motion.div
          initial={{ x: -100, y: 80, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full h-full sm:h-2/3 landing-image absolute z-10"
        />

        <motion.div
          initial={{ x: 100, y: -80, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="w-full h-full sm:h-2/3 border-4 border-blue-400 absolute sm:-right-12 -right-5 -bottom-5 sm:-top-12"
        />
      </div>
    </section>
  );
};
