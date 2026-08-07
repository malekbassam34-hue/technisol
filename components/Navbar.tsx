"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  {
    title: "Accueil",
    href: "#",
  },
  {
    title: "À propos",
    href: "#about",
  },
  {
    title: "Produits",
    href: "#products",
  },
  {
    title: "Services",
    href: "#services",
  },
  {
    title: "Fabrication",
    href: "#manufacturing",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (

    <motion.header

      initial={{
        y: -80,
        opacity: 0,
      }}

      animate={{
        y: 0,
        opacity: 1,
      }}

      transition={{
        duration: .8,
      }}

      className="fixed left-1/2 top-6 z-[100] w-[96%] max-w-[1650px] -translate-x-1/2"

    >

      <motion.div

        animate={{

          backgroundColor: scrolled
            ? "rgba(4,21,45,.78)"
            : "rgba(4,21,45,.45)",

          borderColor: scrolled
            ? "rgba(56,189,248,.18)"
            : "rgba(255,255,255,.08)",

          scale: scrolled ? .98 : 1,

        }}

        transition={{
          duration: .35,
        }}

        className="relative overflow-hidden rounded-full border backdrop-blur-[18px] shadow-[0_20px_70px_rgba(0,0,0,.38)] transition-all duration-300"

      >

                <div className="relative flex h-[80px] items-center justify-between px-6 sm:px-10 xl:px-16">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-4"
          >
            <div className="flex h-[72px] w-[92px] shrink-0 items-center justify-center overflow-visible">
  <Image
    src="/technisol-logo.png"
    alt="SARL TECHNISOL"
    width={110}
    height={85}
    className="h-[68px] w-[88px] scale-[1.65] object-contain"
    priority
  />
</div>

            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-[23px] font-black tracking-wide text-white">
                  SARL
                </span>

                <h2 className="text-[14px] font-black uppercase tracking-[0.18em] text-cyan-300">
                  TECHNISOL
                </h2>
              </div>

              <p className="mt-0.5 text-[10px] font-semibold tracking-[0.25em] text-cyan-300/80">
                FABRICATION • ISOLATION • PERFORMANCE
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden items-center gap-7 lg:flex">
            {links.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="group relative text-[15px] font-semibold text-white/90 transition-all duration-300 hover:text-cyan-200"
              >
                {link.title}

                <span className="absolute -bottom-2 left-0 h-[2px] w-0 rounded-full bg-cyan-400 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Mobile Button */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white backdrop-blur-xl lg:hidden"
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>

      </motion.div>

      <AnimatePresence>

        {open && (

          <motion.div

            initial={{
              opacity: 0,
              y: -20,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            exit={{
              opacity: 0,
              y: -20,
            }}

            transition={{
              duration: .25,
            }}

            className="mt-4 overflow-hidden rounded-3xl border border-cyan-400/15 bg-[#071a33]/95 backdrop-blur-3xl lg:hidden"

          >

            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10" />

            <div className="relative flex flex-col p-4">

              {links.map((link) => (

                <Link

                  key={link.title}

                  href={link.href}

                  onClick={() => setOpen(false)}

                  className="group rounded-2xl px-5 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-cyan-500/10 hover:text-cyan-300"

                >

                  <div className="flex items-center justify-between">

                    <span>
                      {link.title}
                    </span>

                    <motion.span

                      initial={{
                        x: -8,
                        opacity: 0,
                      }}

                      whileHover={{
                        x: 0,
                        opacity: 1,
                      }}

                      transition={{
                        duration: .2,
                      }}

                      className="text-cyan-300"

                    >

                      →

                    </motion.span>

                  </div>

                </Link>

              ))}

              <div className="mt-4 h-px w-full bg-white/10" />

              <Link

                href="#contact"

                onClick={() => setOpen(false)}

                className="mt-4 flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-4 text-base font-bold text-white shadow-[0_15px_40px_rgba(14,165,233,.35)] transition-transform duration-300 hover:scale-[1.03]"

              >

                Demander un devis

              </Link>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </motion.header>

  );

}