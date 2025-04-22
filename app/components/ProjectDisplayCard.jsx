"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

export const ProjectDisplayCard = ({ data }) => {
  return (
    <motion.div
      initial={{ opacity: 0, rotateY: 20, rotateX: 10 }}
      whileInView={{ opacity: 1, rotateY: 0, rotateX: 0 }}
      transition={{
        duration: 1.2,
        delay: 0.2,
      }}
      viewport={{ once: true }}
      className="w-full h-[50vh] sm:h-[55vh] 2xl:h-[50vh] bg-[#0C121C] flex flex-col justify-between p-4 rounded-xl hover:cursor-pointer"
    >
      <div className="w-full h-full gap-4 flex flex-col">
        <h2 className="text-white font-bold text-lg">{data.header}</h2>
        <Image
          src={data.imageUrl}
          width={720}
          height={720}
          alt=""
          className="w-full h-[42%] rounded-xl"
        />
        <p className=" text-sm font-semibold text-[#777]">{data.body}</p>
        <div className="flex flex-wrap items-center gap-2">
          {data.stack.map((item, index) => {
            return (
              <span
                key={index}
                className="w-fit bg-white text-[#0C121C] px-2 py-0.5 rounded-full text-xs font-bold"
              >
                {item}
              </span>
            );
          })}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <Link
          href={data.liveLink}
          className="font-semibold text-[#3F5B74] flex items-center hover:scale-105 w-fit"
        >
          Preview <ArrowUpRight />
        </Link>

        {data.githubUrl ? (
          <Link href={data.githubUrl}>
            <Github />
          </Link>
        ) : (
          <span></span>
        )}
      </div>
    </motion.div>
  );
};
