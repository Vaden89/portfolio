"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export const LandingSection = () => {
  const headingText = "Hi, I'm Isaac 👋🏽";
  const subText = "A Software Developer & Friend.";
  const words = headingText.split(" ");

  return (
    <section className="w-full h-[50vh] lg:h-[80vh] 2xl:h-[90vh] px-6 py-4 flex justify-center sm:mt-10 sm:flex-row flex-col items-center gap-6 sm:pb-16 2xl:pb-28 ">
      <div className="lg:w-3/5 flex flex-col gap-6">
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
            <span className="text-[#F29559]">Building interfaces</span>.
            Transforming designs and ideas into interactive products.{" "}
            <span className="italic font-light">Meticulously</span> building
            systems that are scalable, user-friendly, and performance-driven.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="w-full flex items-center text-center gap-4 text-white"
        >
          <span className="h-2 w-2 rounded-full bg-[#6200ea] glow-button"></span>
          <span className="text-sm">
            Probably listening to{" "}
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
      <div className="w-full h-full sm:w-2/5 relative hidden lg:flex justify-center items-center sm:mt-10">
        <motion.div
          initial={{ x: -100, y: 80, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full h-[400px]  landing-image absolute z-10 "
        />

        <motion.div
          initial={{ x: 100, y: -80, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="w-full h-[400px] border-4 border-primary absolute mb-20 ml-20"
        />
      </div>
    </section>
  );
};
