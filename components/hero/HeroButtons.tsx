"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroButtons() {
  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.65,
        }}
        className="mt-12 flex flex-wrap gap-5"
      >
        <Link
          href="#contact"
          className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-400 to-sky-500 px-8 py-4 text-white font-semibold shadow-[0_10px_35px_rgba(0,190,255,.35)] transition hover:scale-105"
        >
          Demander un devis

          <ArrowRight
            size={20}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>

        <Link
          href="#products"
          className="group inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-white/5 px-8 py-4 text-white font-semibold backdrop-blur-xl transition hover:bg-white/10"
        >
          Nos produits

          <ArrowRight
            size={20}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </motion.div>

      {/* Badges */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 0.85,
        }}
        className="mt-12 flex flex-wrap gap-4"
      >
        {[
          "Depuis 1997",
          "Fabrication Algérienne",
          "Isolation Haute Performance",
        ].map((item) => (
          <div
            key={item}
            className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-slate-200 backdrop-blur-xl"
          >
            {item}
          </div>
        ))}
      </motion.div>
    </>
  );
}