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

        <span className="text-[42px] font-black tracking-[0.42em] text-white drop-shadow-lg max-sm:text-[30px] max-sm:tracking-[0.30em]">
          SARL
        </span>

      </div>

      {/* TECHNISOL */}

      <h1 className="text-center text-7xl font-black leading-none tracking-tight text-white lg:text-8xl max-sm:text-[46px] max-sm:leading-[1]">
        TECHNISOL
      </h1>

      {/* Sous titre */}

      <h2 className="mt-4 max-w-xl text-[38px] font-bold leading-[1.15] text-white max-sm:text-[28px] max-sm:leading-[1.2]">
        Isolation industrielle
        <br />
        et solutions PSE
        <br />
        haute performance
      </h2>

      {/* Description */}

      <p className="mt-7 max-w-xl text-[20px] leading-10 text-white/90 max-sm:text-[16px] max-sm:leading-8">
        Nous concevons des solutions d'isolation thermique
        et industrielle à haut rendement destinées
        aux professionnels, aux entreprises
        et aux grands projets en Algérie.
      </p>

      {/* Line */}

      <div className="mt-9 flex items-center gap-5">

        <span className="text-sm font-bold uppercase tracking-[0.35em] text-cyan-300">
          Depuis 1997
        </span>

        <div className="h-[2px] w-28 rounded-full bg-cyan-400" />

      </div>

      {/* Bottom text */}

      <p className="mt-5 max-w-xl text-[17px] leading-8 text-white/70 max-sm:text-[15px] max-sm:leading-7">
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