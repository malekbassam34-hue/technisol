"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Factory,
  CheckCircle2,
} from "lucide-react";

const badges = [
  {
    icon: ShieldCheck,
    text: "Depuis 1997",
  },
  {
    icon: Factory,
    text: "Fabrication Algérienne",
  },
  {
    icon: CheckCircle2,
    text: "Isolation Haute Performance",
  },
];

export default function HeroBadges() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.8,
      }}
      className="mt-14 flex flex-wrap gap-5"
    >
      {badges.map((badge) => {
        const Icon = badge.icon;

        return (
          <motion.div
            key={badge.text}
            whileHover={{
              y: -6,
              scale: 1.03,
            }}
            transition={{
              type: "spring",
              stiffness: 220,
            }}
            className="flex items-center gap-4 rounded-full border border-white/10 bg-white/5 px-7 py-4 backdrop-blur-3xl"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-500/15">
              <Icon
                size={20}
                className="text-cyan-300"
              />
            </div>

            <span className="font-medium text-white">
              {badge.text}
            </span>
          </motion.div>
        );
      })}
    </motion.div>
  );
}