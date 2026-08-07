"use client";

import { motion, MotionValue } from "framer-motion";

interface HeroBackgroundProps {
  backgroundY: MotionValue<number>;
}

export default function HeroBackground({
  backgroundY,
}: HeroBackgroundProps) {
  return (
    <>
      {/* صورة الخلفية */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage: "url('/couvert-hero.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-[#04152d]/18" />

        <div className="absolute inset-0 bg-gradient-to-b from-[#031120]/0 via-[#04152d]/12 to-[#04152d]/55" />
      </motion.div>

      {/* إضاءة يسار */}
      <div className="absolute left-[-180px] top-20 h-[520px] w-[520px] rounded-full bg-cyan-400/30 blur-[130px]" />

      {/* إضاءة يمين */}
      <div className="absolute right-[-120px] top-10 h-[460px] w-[460px] rounded-full bg-sky-400/25 blur-[140px]" />

      {/* خطوط دائرية */}
      <div className="absolute left-[-220px] top-10 h-[620px] w-[620px] rounded-full border border-white/10" />

      <div className="absolute left-[-120px] top-40 h-[420px] w-[420px] rounded-full border border-cyan-400/10" />

      {/* ضباب أسفل */}
      <div className="absolute bottom-0 left-0 right-0 h-[180px] bg-gradient-to-t from-[#04152d] to-transparent" />
    </>
  );
}