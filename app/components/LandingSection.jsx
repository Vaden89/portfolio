"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export const LandingSection = () => {
  const headingText = "Hi, I'm Isaac 👋🏽";
  const subText = "A Front-end Dev & Friend.";
  const words = headingText.split(" ");

  return (
    <section className="w-full px-6 py-4 flex flex-col gap-6">
      <motion.div
        className="text-3xl lg:text-5xl font-bold text-white"
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
        className="flex flex-col gap-3 text-sm text-gray-400 leading-6 opacity-70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1.5 }}
      >
        <p>
          I love bringing designs to life on the web. With a strong foundation
          in HTML, CSS, and JavaScript, I use modern frameworks like React, or
          Nextjs to create websites that are not only visually stunning but also
          user-friendly and responsive and convey complex ideas.
        </p>
      </motion.div>

      <div className="flex items-center text-center gap-4 text-white">
        <span className="h-3 w-3 rounded-full bg-[#6200ea] glow-button"></span>
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
      </div>
    </section>
  );
};
