"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
}

export default function ServiceCard({
  title,
  description,
  image,
}: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -12, scale: 1.02 }}
      transition={{ duration: 0.35 }}
      className="group relative overflow-hidden rounded-[40px] border border-cyan-300/20 bg-[#0d3156]/60 backdrop-blur-[20px] shadow-[0_30px_90px_rgba(0,180,255,.18)]"
    >
      <div className="relative h-[320px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#04152d]/95 via-[#04152d]/20 to-transparent" />
      </div>

      <div className="p-9">
        <h3 className="text-[34px] font-black text-white">
          {title}
        </h3>

        <p className="mt-5 text-[17px] leading-8 text-white/80">
          {description}
        </p>

        <button className="mt-8 inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-cyan-400/10 px-6 py-3 font-bold text-cyan-200 transition-all duration-300 hover:gap-5 hover:bg-cyan-400/20">
          En savoir plus
          <ArrowRight size={18} />
        </button>
      </div>
    </motion.div>
  );
}