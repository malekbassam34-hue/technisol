"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Factory,
  Layers3,
  Sparkles,
} from "lucide-react";

export default function HeroFloatingCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.9,
        delay: 0.45,
      }}
      className="relative flex justify-end -translate-y-16 max-sm:translate-y-0 max-sm:justify-center"
    >
      <div className="relative w-full min-w-0 max-w-[470px] max-sm:max-w-full">

        {/* Glow */}
        <div className="absolute inset-0 rounded-[44px] bg-cyan-400/22 blur-[70px] scale-110" />

        {/* Card */}
        <div className="relative overflow-hidden rounded-[42px] border border-cyan-300/20 bg-[#0d3156]/72 backdrop-blur-[22px] shadow-[0_35px_90px_rgba(0,180,255,.22)]">

          {/* Top Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-sky-500/10" />

          {/* Animated Light */}
          <motion.div
            animate={{
              x: ["-120%", "120%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-transparent via-white/15 to-transparent blur-xl"
          />

          <div className="relative z-10 px-5 py-8 sm:px-7 sm:py-10 lg:px-10 lg:py-6 max-sm:px-5 max-sm:py-7">

            <span className="text-[11px] font-bold uppercase tracking-[0.38em] text-cyan-200 max-sm:text-[9px] max-sm:tracking-[0.22em]">
              SOLUTIONS INDUSTRIELLES
            </span>

            <h3 className="mt-4 text-[38px] font-bold leading-tight text-white max-sm:text-[30px]">
              Performance,
              <br />
              qualité et innovation.
            </h3>

            <p className="mt-4 text-[15px] leading-8 text-white/82 max-sm:text-[14px] max-sm:leading-7">
              Une fabrication moderne,
              un contrôle qualité rigoureux
              et des matériaux performants
              destinés aux secteurs
              résidentiel, industriel
              et commercial.
            </p>

            {/* Stats */}

            <div className="mt-8 grid grid-cols-2 gap-5 max-sm:gap-3">

              {[
                ["28+", "Années"],
                ["1000+", "Clients"],
                ["5000+", "Projets"],
                ["100%", "Qualité"],
              ].map(([value, label]) => (
                <motion.div
                  key={label}
                  whileHover={{
                    scale: 1.05,
                  }}
                  className="rounded-[22px] border border-white/10 bg-white/8 p-6 backdrop-blur-md max-sm:p-4"
                >
                  <div className="text-[44px] font-black text-white max-sm:text-[28px] max-sm:tracking-tight">
                    {value}
                  </div>

                  <div className="mt-2 text-sm text-slate-300">
                    {label}
                  </div>
                </motion.div>
              ))}

            </div>

            {/* Bottom */}

            <div className="mt-10 rounded-[24px] border border-cyan-300/15 bg-gradient-to-br from-cyan-400/10 to-sky-500/10 p-7 max-sm:mt-7 max-sm:p-5">

              <div className="flex items-center gap-3">

                <ShieldCheck className="text-cyan-300" />

                <span className="font-semibold text-white">
                  Excellence industrielle
                </span>

              </div>

              <div className="mt-5 grid grid-cols-3 gap-4">

                <div className="flex flex-col items-center gap-2">

                  <Factory
                    size={26}
                    className="text-cyan-300"
                  />

                  <span className="text-xs text-slate-300 text-center">
                    Fabrication
                  </span>

                </div>

                <div className="flex flex-col items-center gap-2">

                  <Layers3
                    size={26}
                    className="text-cyan-300"
                  />

                  <span className="text-xs text-slate-300 text-center">
                    Isolation
                  </span>

                </div>

                <div className="flex flex-col items-center gap-2">

                  <Sparkles
                    size={26}
                    className="text-cyan-300"
                  />

                  <span className="text-xs text-slate-300 text-center">
                    Performance
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </motion.div>
  );
}