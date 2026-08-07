"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ProductModal from "./ProductModal";
interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  badge: string;

  thickness: string;
  dimensions: string;
  density: string;
  application: string;

  fiche: string;
  gallery: string[];

epaisseurs: string[];

densites: string[];

dimensionsDisponibles: string[];
}

export default function ProductCard({
  title,
  description,
  image,
  badge,

thickness,
dimensions,
density,
application,

fiche,

gallery,

epaisseurs,

densites,

dimensionsDisponibles,
}: ProductCardProps) {
  const [open, setOpen] = useState(false);
  const cardImage = gallery?.[0] || image;
  console.log("ProductCard Render", open);
  return (
    <motion.article
      whileHover={{
        y: -12,
        scale: 1.02,
      }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 18,
      }}
      className="group relative rounded-[40px] border border-cyan-300/20 bg-[#0d3156]/60 backdrop-blur-[20px] shadow-[0_30px_90px_rgba(0,180,255,.18)] transition-all duration-500"
    >
      {/* Glow */}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />

      {/* Image */}

      <div className="relative overflow-hidden">

        <Image
          src={cardImage}
          alt={title}
          width={700}
          height={500}
          className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#04152d]/95 via-[#04152d]/20 to-transparent" />

        <span className="absolute left-6 top-6 rounded-full border border-cyan-300/20 bg-cyan-400/15 px-5 py-2 text-[13px] font-bold uppercase tracking-[0.18em] text-cyan-100 backdrop-blur-xl">

          {badge}

        </span>

      </div>

      {/* Content */}

      <div className="p-9">

        <h3 className="text-[36px] font-black text-white drop-shadow-lg">

          {title}

        </h3>

        <p className="mt-5 text-[17px] leading-8 text-white/80">

          {description}
          </p>
          <div className="mt-8 space-y-3 rounded-3xl border border-cyan-300/15 bg-white/5 p-5">

  <div className="flex justify-between text-white/80">
    <span>📏 Épaisseur</span>
    <span>{thickness}</span>
  </div>

  <div className="flex justify-between text-white/80">
    <span>📐 Dimensions</span>
    <span>{dimensions}</span>
  </div>

  <div className="flex justify-between text-white/80">
    <span>⚖ Densité</span>
    <span>{density}</span>
  </div>

  <div className="flex justify-between text-white/80">
    <span>🏗 Application</span>
    <span>{application}</span>
  </div>

</div>

        

        <div className="mt-10 flex items-center justify-between">

  <button
  type="button"
  onClick={() => {
    console.log("CLICK");
    setOpen(true);
  }}
  className="inline-flex cursor-pointer items-center gap-3 rounded-full border border-cyan-300/20 bg-cyan-400/10 px-6 py-3 font-bold text-cyan-200 transition-all duration-300 hover:gap-5 hover:bg-cyan-400/20"
>
  
    Voir détails

    <ArrowRight size={18} />
  </button>

  <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">
    Disponible
  </span>

</div>

      </div>
<ProductModal
  open={open}
  onClose={() => setOpen(false)}

  title={title}
  description={description}
  image={image}
  badge={badge}
  

  thickness={thickness}
  dimensions={dimensions}
  density={density}
  application={application}

  fiche={fiche}
  gallery={gallery}

epaisseurs={epaisseurs}

densites={densites}

dimensionsDisponibles={dimensionsDisponibles}
/>
    </motion.article>
  );
}