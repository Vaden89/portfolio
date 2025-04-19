"use client";
import { motion } from "framer-motion";

export const ServicesCard = ({ header, desc }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="w-full h-[250px] bg-[#0D1826] px-6"
    >
      <div className="h-1/3 text-xl font-semibold flex flex-col justify-end mb-4">
        {header}
      </div>
      <div className="font-light text-gray-400">{desc}</div>
    </motion.div>
  );
};
