"use client";

import { motion } from "framer-motion";
import {
  Factory,
  Settings2,
  Layers3,
  Scissors,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Factory,
    title: "Pré-expansion",
    desc: "La matière première EPS est préparée et pré-expansée afin d’obtenir la densité adaptée aux besoins du produit.",
  },
  {
    number: "02",
    icon: Settings2,
    title: "Moulage des blocs",
    desc: "Les billes expansées sont moulées sous contrôle afin de former des blocs homogènes et réguliers.",
  },
  {
    number: "03",
    icon: Layers3,
    title: "Stabilisation",
    desc: "Les blocs sont stabilisés avant découpe pour garantir leur qualité, leur précision et leurs performances.",
  },
  {
    number: "04",
    icon: Scissors,
    title: "Découpe & contrôle",
    desc: "Chaque bloc est découpé selon les dimensions demandées puis vérifié avant sa mise à disposition.",
  },
];

export default function Manufacturing() {
  return (
    <section
      id="manufacturing"
      className="relative overflow-hidden bg-[#061b31] px-6 py-28"
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-[10%] h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-[130px]" />
        <div className="absolute bottom-[-15%] right-[-5%] h-[480px] w-[480px] rounded-full bg-blue-500/10 blur-[150px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,.035)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-400/10 px-5 py-2 text-xs font-black uppercase tracking-[0.22em] text-cyan-300">
            Processus industriel
          </span>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-white md:text-6xl">
            De la matière première
            <span className="block text-cyan-300">
              au produit fini
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-8 text-white/65">
            Un processus maîtrisé à chaque étape pour garantir précision,
            régularité et qualité dans la fabrication de nos produits EPS.
          </p>
        </motion.div>

        {/* STEPS */}
        <div className="relative mt-20 grid gap-6 lg:grid-cols-4">
          {/* CONNECTING LINE */}
          <div className="absolute left-[12%] right-[12%] top-[56px] hidden h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent lg:block" />

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.25 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="relative h-full overflow-hidden rounded-[32px] border border-cyan-300/15 bg-white/[0.055] p-7 backdrop-blur-xl transition-all duration-500 hover:border-cyan-300/35 hover:bg-white/[0.08]">
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-blue-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />

                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-400/10 text-cyan-300">
                        <Icon size={27} />
                      </div>

                      <span className="text-4xl font-black text-white/10">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="mt-8 text-2xl font-black text-white">
                      {step.title}
                    </h3>

                    <p className="mt-4 text-[15px] leading-7 text-white/65">
                      {step.desc}
                    </p>

                    {index < steps.length - 1 && (
                      <div className="mt-7 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-cyan-300/70 lg:hidden">
                        Étape suivante
                        <ArrowRight size={15} />
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM NOTE */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-12 max-w-3xl text-center"
        >
          <p className="text-sm leading-7 text-white/45">
            Chaque étape est contrôlée afin d’assurer une production fiable,
            régulière et adaptée aux exigences de nos clients.
          </p>
        </motion.div>
      </div>
    </section>
  );
}