"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Statistics from "./Statistics";
import Features from "./Features";
import History from "./History";
import CTA from "./CTA";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#04152d] py-32"
    >
      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute left-[-220px] top-0 h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-[180px]" />

        <div className="absolute right-[-220px] bottom-0 h-[520px] w-[520px] rounded-full bg-blue-500/10 blur-[180px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] bg-[size:60px_60px]" />

      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-8 max-sm:px-4">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="mx-auto mb-28 max-w-5xl text-center"
        >

          <span className="rounded-full border border-cyan-300/20 bg-cyan-400/10 px-8 py-3 text-[15px] font-black uppercase tracking-[0.38em] text-cyan-200 backdrop-blur-xl">

            À PROPOS

          </span>

          <h2 className="mt-10 text-7xl font-black leading-[1.05] text-white drop-shadow-[0_6px_25px_rgba(0,0,0,.45)] max-sm:text-[40px] max-sm:leading-[1.1]">

            Plus de

            <span className="text-cyan-300">

              {" "}28 ans{" "}

            </span>

            d'excellence industrielle

          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-[21px] leading-10 text-white/85 max-sm:text-[16px] max-sm:leading-7">

            Depuis 1997, TECHNISOL accompagne les professionnels
            avec des solutions innovantes en polystyrène expansé,
            isolation thermique et produits industriels
            répondant aux exigences les plus élevées.

          </p>

        </motion.div>

        <Statistics />

        <div className="mt-28 grid items-center gap-20 lg:grid-cols-2">

                  {/* Left Image */}

          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >

            <div className="absolute -left-10 -top-10 h-60 w-60 rounded-full bg-cyan-500/15 blur-[130px]" />

            <div className="absolute -bottom-10 right-0 h-60 w-60 rounded-full bg-blue-500/15 blur-[150px]" />

            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.35 }}
              className="relative overflow-hidden rounded-[42px] border border-cyan-300/20 bg-[#0d3156]/60 p-4 backdrop-blur-[20px] shadow-[0_35px_90px_rgba(0,180,255,.18)]"
            >

              <Image
                src="/about.jpg"
                alt="TECHNISOL"
                width={900}
                height={900}
                priority
                className="h-[760px] w-full rounded-[34px] object-cover transition duration-700 hover:scale-105"
              />

            </motion.div>

          </motion.div>

          {/* Right Content */}

          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <span className="rounded-full border border-cyan-300/20 bg-cyan-400/10 px-6 py-3 text-[13px] font-bold uppercase tracking-[0.35em] text-cyan-200 backdrop-blur-xl">

              SARL TECHNISOL

            </span>

            <h2 className="mt-8 text-6xl font-black leading-[1.05] text-white drop-shadow-[0_5px_20px_rgba(0,0,0,.4)] max-sm:text-[40px] max-sm:leading-[1.08] max-sm:break-words">

              Depuis 1997,

              <br />

              nous construisons

              <span className="text-cyan-300">

                {" "}l'avenir de l'isolation.

              </span>

            </h2>

            <p className="mt-8 text-lg leading-9 text-slate-300 max-sm:text-[16px] max-sm:leading-8 max-sm:break-words">

              SARL TECHNISOL est une entreprise algérienne spécialisée
              dans la fabrication de polystyrène expansé (PSE),
              des matériaux d'isolation thermique et des solutions
              destinées aux secteurs du bâtiment,
              de l'industrie et du commerce.

            </p>

            <p className="mt-6 text-lg leading-9 text-slate-300 max-sm:text-[16px] max-sm:leading-8 max-sm:break-words">

              Grâce à des équipements modernes,
              une équipe expérimentée
              et un contrôle qualité permanent,
              nous proposons des solutions performantes,
              fiables et durables répondant
              aux exigences des projets les plus ambitieux.

            </p>

            <Features />

            <div className="mt-10">

              <Link
                href="#contact"
                className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-5 text-lg font-bold text-white shadow-[0_20px_60px_rgba(14,165,233,.35)] transition-all duration-300 hover:scale-105"
              >

                Demander un devis

                <ArrowRight size={20} />

              </Link>

            </div>

          </motion.div>
                  {/* Timeline */}
</div>
        <History />

        {/* Final CTA */}

        <CTA />

      </div>

    </section>
  );
}
