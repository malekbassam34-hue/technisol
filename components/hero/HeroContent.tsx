"use client";

import { motion, MotionValue } from "framer-motion";

interface HeroContentProps {
  contentOpacity: MotionValue<number>;
}

export default function HeroContent({
  contentOpacity,
}: HeroContentProps) {
  return (
    <motion.div
      style={{ opacity: contentOpacity }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.9,
      }}
    >
      {/* Top Badges */}

      <div className="mb-2 mt-20 flex flex-wrap justify-center gap-3">

        <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.28em] text-cyan-300">
          FABRICATION
        </span>

        <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.28em] text-cyan-300">
          ISOLATION
        </span>

        <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.28em] text-cyan-300">
          PERFORMANCE
        </span>

      </div>

      {/* SARL */}

      <div className="mt-4 mb-1 text-center">

        <span className="text-[28px] font-black tracking-[0.28em] text-white drop-shadow-lg sm:text-[36px] sm:tracking-[0.36em] lg:text-[42px] lg:tracking-[0.42em]">
          SARL
        </span>

      </div>

      {/* TECHNISOL */}

      <h1 className="w-full break-words text-center text-[44px] font-black leading-none tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
        TECHNISOL
      </h1>

      {/* Sous titre */}

      <h2 className="mt-4 max-w-xl text-[25px] font-bold leading-[1.2] text-white sm:text-[32px] lg:text-[38px] lg:leading-[1.15]">
        Isolation industrielle
        <br />
        et solutions PSE
        <br />
        haute performance
      </h2>

      {/* Description */}

      <p className="mt-6 max-w-xl text-[16px] leading-7 text-white/90 sm:text-[18px] sm:leading-8 lg:mt-7 lg:text-[20px] lg:leading-10">
        Nous concevons des solutions d'isolation thermique
        et industrielle à haut rendement destinées
        aux professionnels, aux entreprises
        et aux grands projets en Algérie.
      </p>

      {/* Line */}

      <div className="mt-7 flex min-w-0 items-center gap-3 sm:mt-9 sm:gap-5">

        <span className="shrink-0 text-xs font-bold uppercase tracking-[0.24em] text-cyan-300 sm:text-sm sm:tracking-[0.35em]">
          Depuis 1997
        </span>

        <div className="h-[2px] w-16 rounded-full bg-cyan-400 sm:w-28" />

      </div>

      {/* Bottom text */}

      <p className="mt-5 max-w-xl text-[15px] leading-7 text-white/70 sm:text-[16px] sm:leading-8 lg:text-[17px]">
        TECHNISOL accompagne les professionnels
        avec des solutions innovantes
        en polystyrène expansé (PSE),
        alliant qualité,
        performance énergétique
        et durabilité.
      </p>

    </motion.div>
  );
}