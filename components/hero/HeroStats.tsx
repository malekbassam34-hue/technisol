"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "28+",
    label: "Années",
  },
  {
    value: "1000+",
    label: "Clients",
  },
  {
    value: "5000+",
    label: "Projets",
  },
  {
    value: "100%",
    label: "Qualité",
  },
];

export default function HeroStats() {
  return (
    <div className="mt-8 grid grid-cols-2 gap-4">
      {stats.map((item) => (
        <motion.div
          key={item.label}
          whileHover={{
            scale: 1.05,
          }}
          transition={{
            type: "spring",
            stiffness: 240,
          }}
          className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
        >
          <h3 className="text-5xl font-black text-white">
            {item.value}
          </h3>

          <p className="mt-3 text-slate-300">
            {item.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}