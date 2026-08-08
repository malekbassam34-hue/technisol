"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Fabrication moderne",
    description:
      "Des lignes de production performantes répondant aux normes industrielles.",
  },
  {
    title: "Solutions sur mesure",
    description:
      "Des produits adaptés aux exigences de chaque projet.",
  },
  {
    title: "Contrôle qualité",
    description:
      "Chaque produit est vérifié avant sa mise sur le marché.",
  },
  {
    title: "Service professionnel",
    description:
      "Une équipe technique disponible pour accompagner nos partenaires.",
  },
];

export default function Features() {
  return (
    <div className="mt-12 grid gap-6 sm:grid-cols-2 max-sm:w-full max-sm:min-w-0">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          whileHover={{
            y: -6,
            scale: 1.02,
          }}
          transition={{
            type: "spring",
            stiffness: 220,
          }}
          className="group rounded-[28px] border border-cyan-300/20 bg-[#0d3156]/55 p-7 backdrop-blur-[18px] shadow-[0_20px_60px_rgba(0,180,255,.15)] transition-all duration-300 max-sm:w-full max-sm:min-w-0 max-sm:p-5"
        >
          <div className="mb-5 h-[3px] w-16 rounded-full bg-gradient-to-r from-cyan-300 to-blue-400" />

          <h3 className="text-2xl font-bold text-white max-sm:text-xl">
            {feature.title}
          </h3>

          <p className="mt-4 text-[16px] leading-8 text-white/80 max-sm:text-[15px] max-sm:leading-7 max-sm:break-words">
            {feature.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}