"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative mt-36 overflow-hidden rounded-[42px] border border-cyan-400/20 bg-white/[0.05] p-14 backdrop-blur-3xl max-sm:mt-20 max-sm:rounded-[28px] max-sm:p-5"
    >
      {/* Background Glow */}

      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-blue-500/10" />

      <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-cyan-400/20 blur-[180px]" />

      <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-blue-500/20 blur-[200px]" />

      <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[1fr_auto]">

        <div>

          <span className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-6 py-2 text-sm font-bold uppercase tracking-[.30em] text-cyan-300 max-sm:inline-flex max-sm:px-4 max-sm:text-[11px] max-sm:tracking-[.20em]">

            SARL TECHNISOL

          </span>

          <h2 className="mt-8 text-5xl font-black leading-tight text-white max-sm:text-[36px] max-sm:leading-[1.15]">

            Construisons ensemble

            <br />

            <span className="text-cyan-300">

              l'isolation de demain.

            </span>

          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-9 text-slate-300 max-sm:text-[16px] max-sm:leading-8">

            Depuis plus de 28 ans, TECHNISOL accompagne les entreprises,
            les professionnels et les industriels avec des solutions
            innovantes en polystyrène expansé, isolation thermique
            et produits techniques de haute qualité.

          </p>

        </div>

        <div className="flex flex-col gap-5 max-sm:w-full">

          <Link
            href="#contact"
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-10 py-5 text-lg font-bold text-white shadow-[0_25px_60px_rgba(14,165,233,.35)] transition-all duration-300 hover:scale-105 max-sm:w-full max-sm:px-5 max-sm:py-4 max-sm:text-base"
          >

            Demander un devis

            <ArrowRight
              size={21}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />

          </Link>

          <Link
            href="#products"
            className="inline-flex items-center justify-center rounded-full border border-cyan-400/20 bg-white/5 px-10 py-5 text-lg font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-cyan-300 hover:bg-cyan-500/10 max-sm:w-full max-sm:px-5 max-sm:py-4 max-sm:text-base"
          >

            Découvrir nos produits

          </Link>

        </div>

      </div>

    </motion.section>
  );
}