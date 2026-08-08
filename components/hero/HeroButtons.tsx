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
        className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-5 lg:mt-12"
      >
        <Link
          href="#contact"
          className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-cyan-400 to-sky-500 px-5 py-4 font-semibold text-white shadow-[0_10px_35px_rgba(0,190,255,.35)] transition hover:scale-105 sm:w-auto sm:px-8"
        >
          Demander un devis

          <ArrowRight
            size={20}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>

        <Link
          href="#products"
          className="group inline-flex w-full items-center justify-center gap-3 rounded-full border border-cyan-400/20 bg-white/5 px-5 py-4 font-semibold text-white backdrop-blur-xl transition hover:bg-white/10 sm:w-auto sm:px-8"
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
        className="mt-8 flex max-w-full flex-wrap gap-2 sm:mt-12 sm:gap-4"
      >
        {[
          "Depuis 1997",
          "Fabrication Algérienne",
          "Isolation Haute Performance",
        ].map((item) => (
          <div
            key={item}
            className="max-w-full rounded-full border border-white/10 bg-white/5 px-4 py-3 text-xs text-slate-200 backdrop-blur-xl sm:px-6 sm:text-sm"
          >
            {item}
          </div>
        ))}
      </motion.div>
    </>
  );
}