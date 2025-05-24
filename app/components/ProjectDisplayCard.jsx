"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

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
      className="w-full min-h-[450px] h-full sm:h-[450px] border-primary border-[0.5px] flex flex-col justify-between p-4 rounded-md hover:cursor-pointer "
    >
      <div className="w-full h-full gap-4 flex flex-col">
        <div className="w-full flex justify-between items-center">
          <div className="flex flex-col gap-1 sm:gap-0">
            <h2 className="text-white font-bold text-lg m-0 p-0">
              {data.header}
            </h2>
            {data.inDevelopment && (
              <span className="text-xs font-semibold text-yellow-300">
                Under development
              </span>
            )}
          </div>
          <div className="flex items-center gap-4">
            {data.liveLink && (
              <Link
                href={data.liveLink}
                className="font-semibold text-primary flex items-center w-fit hover:text-secondary transition-colors ease-in duration-200"
              >
                <ExternalLink />
              </Link>
            )}
            {data.githubUrl && (
              <Link
                href={data.liveLink}
                className="font-semibold text-primary flex items-center w-fit hover:text-secondary transition-colors ease-in duration-200"
              >
                <Github />
              </Link>
            )}
          </div>
        </div>
        <Image
          src={data.imageUrl}
          width={720}
          height={720}
          alt=""
          className="w-full h-[50%] rounded"
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
    </motion.div>
  );
};
