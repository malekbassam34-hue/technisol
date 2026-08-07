"use client";

import { motion } from "framer-motion";
import ServiceCard from "@/components/services/ServiceCard";
export default function Services() {
  return (
    <section
  id="services"
  className="relative overflow-hidden bg-[#04152d] py-32"
>
  {/* Background */}

  <div className="absolute inset-0">

    <div className="absolute left-[-220px] top-20 h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-[180px]" />

    <div className="absolute right-[-220px] bottom-0 h-[520px] w-[520px] rounded-full bg-blue-500/10 blur-[180px]" />

    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] bg-[size:60px_60px]" />

  </div>

  <div className="relative z-10 mx-auto max-w-7xl px-8">
    <motion.div
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="mx-auto mb-28 max-w-5xl text-center"
>
  <span className="rounded-full border border-cyan-300/20 bg-cyan-400/10 px-8 py-3 text-[15px] font-black uppercase tracking-[0.38em] text-cyan-200 backdrop-blur-xl">
    NOS SERVICES
  </span>

  <h2 className="mt-10 text-7xl font-black leading-[1.05] text-white drop-shadow-[0_6px_25px_rgba(0,0,0,.45)]">
    Des solutions
    <span className="text-cyan-300"> adaptées à chaque projet</span>
  </h2>

  <p className="mx-auto mt-8 max-w-4xl text-[21px] leading-10 text-white/85">
    TECHNISOL accompagne les professionnels avec des solutions
    complètes en fabrication de polystyrène expansé, isolation
    thermique et assistance technique pour tous types de projets.
  </p>
</motion.div>
<div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">

  <ServiceCard
    title="Fabrication PSE"
    description="Production de polystyrène expansé de haute qualité pour le bâtiment et l'industrie."
    image="/services/service-1.jpg"
  />

  <ServiceCard
    title="Isolation Thermique"
    description="Solutions performantes pour améliorer l'efficacité énergétique des bâtiments."
    image="/services/service-2.jpg"
  />

  <ServiceCard
    title="Découpe Sur Mesure"
    description="Découpe précise selon les dimensions et exigences de chaque projet."
    image="/services/service-3.jpg"
  />

  <ServiceCard
    title="Étude Technique"
    description="Accompagnement technique et conseils adaptés à vos besoins."
    image="/services/service-4.jpg"
  />

  <ServiceCard
    title="Solutions Industrielles"
    description="Produits PSE destinés aux applications industrielles et techniques."
    image="/services/service-5.jpg"
  />

  <ServiceCard
    title="Support Professionnel"
    description="Une équipe expérimentée pour assurer le suivi de vos projets."
    image="/services/service-6.jpg"
  />

</div>
  </div>
    </section>
  );
}
