"use client";

import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import { products } from "./ProductData";

export default function Products() {
  return (
    <section
      id="products"
      className="relative overflow-hidden bg-[#04152d] py-32"
    >
      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute left-[-220px] top-20 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[180px]" />

        <div className="absolute right-[-220px] bottom-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[180px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] bg-[size:60px_60px]" />

      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="mx-auto mb-28 max-w-5xl text-center"
        >

          <span className="rounded-full border border-cyan-300/20 bg-cyan-400/10 px-8 py-3 text-[15px] font-black uppercase tracking-[0.38em] text-cyan-200 backdrop-blur-xl">

            NOS PRODUITS

          </span>

          <h2 className="mt-10 text-7xl font-black leading-[1.05] text-white drop-shadow-[0_6px_25px_rgba(0,0,0,.45)]">

            Des solutions en

            <span className="text-cyan-300">

              {" "}Polystyrène Expansé

            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-[21px] leading-10 text-white/85">

            Découvrez notre gamme de produits conçus pour répondre
            aux exigences de la construction, de l'industrie
            et des applications techniques.

          </p>

        </motion.div>

        {/* Products Grid */}

        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">

          {products.map((product) => (
  <ProductCard
  key={product.id}
  title={product.title}
  description={product.description}
  image={product.image}
  badge={product.badge}

  thickness={product.thickness}
  dimensions={product.dimensions}
  density={product.density}
  application={product.application}

  fiche={product.fiche}

  gallery={product.gallery}
  epaisseurs={product.epaisseurs}
  densites={product.densites}
  dimensionsDisponibles={product.dimensionsDisponibles}
/>
))}

        </div>

      </div>

    </section>
  );
}