"use client";

import { motion } from "framer-motion";

const history = [
  {
    year: "1997",
    title: "Création de TECHNISOL",
    description:
      "Fondation de l'entreprise avec pour ambition de produire des solutions innovantes en polystyrène expansé destinées aux secteurs du bâtiment, de l'industrie et de la construction.",
    left: true,
  },
  {
    year: "2008",
    title: "Développement industriel",
    description:
      "Modernisation des équipements, amélioration des procédés de fabrication et augmentation de la capacité de production afin de répondre à une demande toujours plus importante.",
    left: false,
  },
  {
    year: "Aujourd'hui",
    title: "Leader des solutions PSE",
    description:
      "TECHNISOL poursuit son développement avec des produits performants, des solutions sur mesure et un accompagnement professionnel pour les projets résidentiels, industriels et commerciaux.",
    left: true,
  },
];

export default function History() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mt-44"
    >
      <div className="mx-auto max-w-4xl text-center">

        <span className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-6 py-2 text-sm font-bold uppercase tracking-[.30em] text-cyan-300">
          NOTRE HISTOIRE
        </span>

        <h2 className="mt-8 text-6xl font-black leading-[1.05] text-white drop-shadow-[0_6px_25px_rgba(0,0,0,.45)]">
          Une évolution portée
          <span className="text-cyan-300"> par l'innovation</span>
        </h2>

        <p className="mt-8 text-[20px] leading-10 text-white/85">
          Depuis notre création, nous investissons continuellement dans
          les technologies de production, la qualité et l'innovation.
        </p>

      </div>

      <div className="relative mx-auto mt-24 max-w-6xl">

        <div className="absolute left-1/2 hidden h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-cyan-400 via-cyan-400/40 to-transparent lg:block" />

        <div className="space-y-16">

          {history.map((item, index) => (

            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="grid items-center gap-12 lg:grid-cols-2"
            >

              {item.left ? (
                <>
                  <div className="rounded-[38px] border border-cyan-300/20 bg-[#0d3156]/60 p-10 backdrop-blur-[20px] shadow-[0_25px_70px_rgba(0,180,255,.16)]">

                    <span className="text-5xl font-black text-cyan-300">
                      {item.year}
                    </span>

                    <h3 className="mt-6 text-3xl font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-5 leading-8 text-slate-300">
                      {item.description}
                    </p>

                  </div>

                  <div />
                </>
              ) : (
                <>
                  <div />

                  <div className="rounded-[38px] border border-cyan-300/20 bg-[#0d3156]/60 p-10 backdrop-blur-[20px] shadow-[0_25px_70px_rgba(0,180,255,.16)]">

                    <span className="text-5xl font-black text-cyan-300">
                      {item.year}
                    </span>

                    <h3 className="mt-6 text-3xl font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-5 leading-8 text-slate-300">
                      {item.description}
                    </p>

                  </div>
                </>
              )}

            </motion.div>

          ))}

        </div>

      </div>

    </motion.section>
  );
}