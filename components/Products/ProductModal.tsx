"use client";
console.log("NEW PRODUCT MODAL");
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";
import {
  X,
  Download,
  FileText,
  Mail,
  Maximize2,
  ZoomIn,
  ZoomOut,
  RotateCcw,
} from "lucide-react";

interface ProductModalProps {
  open: boolean;
  onClose: () => void;

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

export default function ProductModal({
  open,
  onClose,

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
}: ProductModalProps) {

  const modalImages = (gallery || []).filter(Boolean);
const [activeImage, setActiveImage] = useState(modalImages[0] || image);
const [lightboxOpen, setLightboxOpen] = useState(false);
const [zoom, setZoom] = useState(1);

const closeLightbox = () => {
  setLightboxOpen(false);
  setZoom(1);
};

  const [tab, setTab] = useState<
    "description" |
    "specs" |
    "dimensions" |
    "docs"
  >("description");

  useEffect(() => {
  const images = (gallery || []).filter(Boolean);
  setActiveImage(images[0] || image);
}, [gallery, image]);

  useEffect(() => {

    if (!open) return;

    const original = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = original;
    };

  }, [open]);

  if (!open) return null;
  if (typeof window === "undefined") return null;

  return createPortal(

    <AnimatePresence>

      <motion.div

        initial={{ opacity: 0 }}

        animate={{ opacity: 1 }}

        exit={{ opacity: 0 }}

        onClick={onClose}

       className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden bg-gradient-to-br from-sky-900/35 via-cyan-800/25 to-slate-900/40 p-2 backdrop-blur-md sm:p-4"

      >

        <motion.div

          onClick={(e) => e.stopPropagation()}

          initial={{
            opacity: 0,
            scale: .95,
            y: 40,
          }}

          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}

          exit={{
            opacity: 0,
            scale: .95,
          }}

          transition={{
            duration: .35,
          }}

className="w-full max-w-[calc(100vw-1rem)] max-h-[96vh] overflow-y-auto overflow-x-hidden rounded-[24px] border border-cyan-200/30 bg-gradient-to-br from-[#0d3b66] via-[#12618e] to-[#1d8fbd] shadow-[0_40px_120px_rgba(0,0,0,.35)] sm:max-w-[calc(100vw-2rem)] sm:max-h-[94vh] sm:rounded-[28px] lg:w-[84vw] lg:max-w-[1450px] lg:max-h-[90vh] lg:overflow-hidden lg:rounded-[32px]">
                   {/* HERO */}
          <div className="grid min-w-0 grid-cols-1 gap-4 px-3 pt-3 sm:px-6 sm:pt-4 lg:grid-cols-[40%_60%] lg:gap-6 lg:px-8 lg:pt-7">

            {/* LEFT SIDE */}
            <div className="relative min-w-0 flex flex-col justify-center rounded-[22px] bg-white/5 px-4 py-4 sm:px-6 sm:py-5 lg:rounded-[26px] lg:px-8 lg:py-6">

              <span className="w-fit rounded-full bg-cyan-400 px-5 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-[#04152d]">
                {badge}
              </span>

              <h1 className="mt-4 max-w-full break-words text-2xl font-black leading-tight text-white sm:text-4xl lg:mt-5 lg:text-5xl">
                {title}
              </h1>

              <p className="mt-5 max-w-md text-[14px] leading-6 text-white/75">
                {description}
              </p>

            </div>

            {/* RIGHT SIDE */}
            <div className="relative min-w-0">

              <button
                onClick={onClose}
                className="absolute right-4 top-4 z-30 rounded-full bg-[#082d50]/80 p-3 backdrop-blur-xl transition hover:bg-[#082d50]"
              >
                <X size={24} className="text-white" />
              </button>

                            {/* BIG IMAGE */}
              <button
                type="button"
                onClick={() => {
                  setZoom(1);
                  setLightboxOpen(true);
                }}
                className="group relative flex h-[240px] w-full cursor-zoom-in items-center justify-center overflow-hidden rounded-[22px] border border-cyan-200/20 bg-[#0b355c] sm:h-[290px] lg:h-[330px] lg:rounded-[26px]"
              >

                <div className="pointer-events-none absolute bottom-4 right-4 z-20 flex items-center gap-2 rounded-full bg-[#061d33]/75 px-4 py-2 text-xs font-bold text-white backdrop-blur-md transition group-hover:bg-[#061d33]/95">
                  <Maximize2 size={16} />
                  Agrandir
                </div>

                <motion.div
                  key={activeImage}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35 }}
                  className="relative h-full w-full"
                >

                  <Image
                    src={activeImage}
                    alt={title}
                    fill
                    priority
                    className="object-contain p-3"
                  />

                </motion.div>

              </button>

              {/* GALLERY */}
              {modalImages.length > 1 && (
                <div className="mt-3 flex justify-start gap-3 overflow-x-auto pb-2 lg:justify-center lg:overflow-visible">

                  {modalImages.map((img) => (

                    <button
                      key={img}
                      onClick={() => setActiveImage(img)}
                      className={`shrink-0 overflow-hidden rounded-[14px] border-2 transition-all duration-300 ${
                        activeImage === img
                          ? "scale-105 border-cyan-300"
                          : "border-transparent opacity-70 hover:opacity-100"
                      }`}
                    >

                      <Image
                        src={img}
                        alt={title}
                        width={120}
                        height={70}
                        className="h-[55px] w-[95px] object-cover"
                      />

                    </button>

                  ))}

                </div>
              )}

            </div>

          </div>

          {/* TABS */}

          <div className="mt-4 px-4 sm:px-6 lg:px-8">

            <div className="flex flex-nowrap gap-2 overflow-x-auto border-b border-white/10 pb-3 lg:flex-wrap lg:gap-3 lg:overflow-visible">

              <button
                onClick={() => setTab("description")}
                className={`shrink-0 whitespace-nowrap rounded-full px-5 py-2 text-sm font-bold transition ${
                  tab === "description"
                    ? "bg-cyan-400 text-[#04152d]"
                    : "bg-white/5 text-white hover:bg-white/10"
                }`}
              >
                Description
              </button>

              <button
                onClick={() => setTab("specs")}
                className={`shrink-0 whitespace-nowrap rounded-full px-5 py-2 text-sm font-bold transition ${
                  tab === "specs"
                    ? "bg-cyan-400 text-[#04152d]"
                    : "bg-white/5 text-white hover:bg-white/10"
                }`}
              >
                Caractéristiques
              </button>

              <button
                onClick={() => setTab("dimensions")}
                className={`shrink-0 whitespace-nowrap rounded-full px-5 py-2 text-sm font-bold transition ${
                  tab === "dimensions"
                    ? "bg-cyan-400 text-[#04152d]"
                    : "bg-white/5 text-white hover:bg-white/10"
                }`}
              >
                Dimensions
              </button>

              <button
                onClick={() => setTab("docs")}
                className={`shrink-0 whitespace-nowrap rounded-full px-5 py-2 text-sm font-bold transition ${
                  tab === "docs"
                    ? "bg-cyan-400 text-[#04152d]"
                    : "bg-white/5 text-white hover:bg-white/10"
                }`}
              >
                Documentation
              </button>

            </div>

          </div>

          {/* CONTENT */}

          <div className="px-4 pb-6 pt-3 text-sm sm:px-6 lg:px-7 lg:pb-2 lg:pt-2">
                        {tab === "description" && (

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: .35 }}
              >

                <h2 className="text-2xl font-black text-white">

                  Description

                </h2>

                <p className="mt-3 max-w-6xl text-[14px] leading-6 text-white/80">

                  {description}

                </p>

                <div className="mt-4 rounded-[22px] border border-cyan-400/20 bg-cyan-400/5 p-4">

                  <h3 className="text-lg font-black text-cyan-300">

                    Notre savoir-faire

                  </h3>

                  <p className="mt-2 text-[13px] leading-6 text-white/80">

                    TECHNISOL fabrique des blocs et plaques en
                    polystyrène expansé (EPS) selon les besoins
                    spécifiques de chaque client.

                    Notre usine assure la fabrication, la découpe
                    sur mesure ainsi que le contrôle de qualité afin
                    de garantir des produits performants pour
                    l'isolation, l'industrie et les applications
                    techniques.

                  </p>

                </div>

              </motion.div>

            )}

            {tab === "specs" && (

              <motion.div

                initial={{ opacity: 0 }}

                animate={{ opacity: 1 }}

                transition={{ duration: .35 }}

              >

                <div className="grid min-w-0 gap-4 sm:gap-7 lg:grid-cols-2">

                  <div className="min-w-0 rounded-[22px] bg-white/5 p-5 sm:rounded-[28px] sm:p-8">

                    <p className="font-bold text-cyan-300">

                      📏 Épaisseur

                    </p>

                    <p className="mt-4 max-w-full break-words text-base text-white sm:text-xl">

                      {thickness}

                    </p>

                  </div>

                  <div className="min-w-0 rounded-[22px] bg-white/5 p-5 sm:rounded-[28px] sm:p-8">

                    <p className="font-bold text-cyan-300">

                      📐 Dimensions

                    </p>

                    <p className="mt-4 max-w-full break-words text-base text-white sm:text-xl">

                      {dimensions}

                    </p>

                  </div>

                  <div className="min-w-0 rounded-[22px] bg-white/5 p-5 sm:rounded-[28px] sm:p-8">

                    <p className="font-bold text-cyan-300">

                      ⚖ Densité

                    </p>

                    <p className="mt-4 max-w-full break-words text-base text-white sm:text-xl">

                      {density}

                    </p>

                  </div>

                  <div className="min-w-0 rounded-[22px] bg-white/5 p-5 sm:rounded-[28px] sm:p-8">

                    <p className="font-bold text-cyan-300">

                      🏭 Application

                    </p>

                    <p className="mt-4 max-w-full break-words text-base text-white sm:text-xl">

                      {application}

                    </p>

                  </div>

                </div>

              </motion.div>

            )}
                        {tab === "dimensions" && (

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: .35 }}
              >

                <h2 className="text-2xl font-black text-white sm:text-3xl lg:text-4xl">

                  Dimensions disponibles

                </h2>

                <div className="mt-6 lg:mt-10">

                  <h3 className="mb-5 text-cyan-300 text-xl font-bold">

                    📐 Dimensions

                  </h3>

                  <div className="flex flex-wrap gap-4">

                    {dimensionsDisponibles.map((item, index) => (

                      <span
                        key={index}
                        className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-6 py-3 text-white"
                      >
                        {item}
                      </span>

                    ))}

                  </div>

                </div>

                <div className="mt-7 lg:mt-12">

                  <h3 className="mb-5 text-cyan-300 text-xl font-bold">

                    📏 Épaisseurs

                  </h3>

                  <div className="flex flex-wrap gap-4">

                    {epaisseurs.map((item, index) => (

                      <span
                        key={index}
                        className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-white"
                      >
                        {item}
                      </span>

                    ))}

                  </div>

                </div>

                <div className="mt-7 lg:mt-12">

                  <h3 className="mb-5 text-cyan-300 text-xl font-bold">

                    ⚖ Densités

                  </h3>

                  <div className="flex flex-wrap gap-4">

                    {densites.map((item, index) => (

                      <span
                        key={index}
                        className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-6 py-3 text-white"
                      >
                        {item}
                      </span>

                    ))}

                  </div>

                </div>

              </motion.div>

            )}

            {tab === "docs" && (

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: .35 }}
              >

               <div className="grid gap-4 sm:gap-6 lg:grid-cols-2 lg:gap-8">

                  <div className="rounded-[24px] border border-cyan-400/20 bg-white/5 p-6 sm:p-8 lg:rounded-[30px] lg:p-10">
                    <FileText
                      size={60}
                      className="text-cyan-300"
                    />

                    <h3 className="mt-6 text-3xl font-black text-white">

                      Fiche Technique

                    </h3>

                    <p className="mt-5 leading-8 text-white/70">

                      Téléchargez la fiche technique officielle
                      contenant les dimensions, densités,
                      caractéristiques techniques et applications.

                    </p>

                    <a
                      href={fiche}
                      target="_blank"
                      className="mt-8 inline-flex items-center gap-3 rounded-full bg-cyan-400 px-8 py-4 font-bold text-[#04152d] transition hover:scale-105"
                    >

                      <Download size={20} />

                      Télécharger

                    </a>

                  </div>

                  <div className="rounded-[24px] border border-emerald-400/20 bg-white/5 p-6 sm:p-8 lg:rounded-[30px] lg:p-10">

                    <Mail
                      size={60}
                      className="text-emerald-300"
                    />

                    <h3 className="mt-6 text-3xl font-black text-white">

                      Demander un devis

                    </h3>

                    <p className="mt-5 leading-8 text-white/70">

                      Notre équipe commerciale vous répondra
                      rapidement avec une offre adaptée à vos
                      besoins.

                    </p>

                    <button
                      className="mt-8 rounded-full bg-emerald-400 px-8 py-4 font-bold text-[#04152d] transition hover:scale-105"
                    >

                      Demander un devis

                    </button>

                  </div>

                </div>

              </motion.div>

            )}

          </div>
                  </motion.div>
                          <AnimatePresence>

          {lightboxOpen && (

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
              className="fixed inset-0 z-[100000] flex items-center justify-center bg-[#020b14]/90 p-6 backdrop-blur-xl"
            >

              {/* CONTROLS */}
              <div className="absolute right-7 top-7 z-[100002] flex items-center gap-3">

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setZoom((value) => Math.max(1, value - 0.25));
                  }}
                  className="rounded-full bg-white/10 p-3 text-white backdrop-blur-xl transition hover:bg-white/20 disabled:opacity-30"
                  disabled={zoom <= 1}
                >
                  <ZoomOut size={22} />
                </button>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setZoom(1);
                  }}
                  className="rounded-full bg-white/10 p-3 text-white backdrop-blur-xl transition hover:bg-white/20"
                >
                  <RotateCcw size={22} />
                </button>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setZoom((value) => Math.min(3, value + 0.25));
                  }}
                  className="rounded-full bg-white/10 p-3 text-white backdrop-blur-xl transition hover:bg-white/20 disabled:opacity-30"
                  disabled={zoom >= 3}
                >
                  <ZoomIn size={22} />
                </button>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    closeLightbox();
                  }}
                  className="ml-2 rounded-full bg-white/15 p-3 text-white backdrop-blur-xl transition hover:bg-white/25"
                >
                  <X size={24} />
                </button>

              </div>

              {/* IMAGE VIEWER */}
              <motion.div
                initial={{ scale: 0.94, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.94, opacity: 0 }}
                transition={{ duration: 0.25 }}
                onClick={(e) => e.stopPropagation()}
                className="relative h-[86vh] w-[92vw] overflow-hidden rounded-[28px] border border-cyan-200/20 bg-[#071b30] shadow-[0_40px_120px_rgba(0,0,0,.6)]"
              >

                <motion.div
                  animate={{ scale: zoom }}
                  transition={{
                    type: "spring",
                    stiffness: 220,
                    damping: 28,
                  }}
                  drag={zoom > 1}
                  dragMomentum={false}
                  dragConstraints={{
                    left: -400,
                    right: 400,
                    top: -300,
                    bottom: 300,
                  }}
                  className="relative h-full w-full cursor-grab active:cursor-grabbing"
                >

                  <Image
                    src={activeImage}
                    alt={title}
                    fill
                    priority
                    draggable={false}
                    className="select-none object-contain p-4"
                  />

                </motion.div>

              </motion.div>

            </motion.div>

          )}

        </AnimatePresence>

      </motion.div>

    </AnimatePresence>,

document.body

);
}