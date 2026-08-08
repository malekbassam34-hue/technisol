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
      className="mt-8 grid w-full grid-cols-1 gap-3 sm:mt-10 sm:flex sm:flex-wrap sm:gap-5 lg:mt-14"
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
            className="flex w-full min-w-0 items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-3xl sm:w-auto sm:gap-4 sm:px-7 sm:py-4"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-500/15">
              <Icon
                size={20}
                className="text-cyan-300"
              />
            </div>

            <span className="min-w-0 break-words text-sm font-medium text-white sm:text-base">
              {badge.text}
            </span>
          </motion.div>
        );
      })}
    </motion.div>
  );
}