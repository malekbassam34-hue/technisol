"use client";

import {
  Factory,
  Phone,
  Mail,
  MapPin,
  ArrowUp,
} from "lucide-react";

const footerLinks = [
  { label: "Accueil", href: "#home" },
  { label: "À propos", href: "#about" },
  { label: "Produits", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "Fabrication", href: "#manufacturing" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden border-t border-cyan-300/10 bg-[#041526]">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-[150px]" />

        <div className="absolute -right-40 top-0 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[150px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,.025)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pb-8 pt-16">
        {/* MAIN FOOTER */}
        <div className="grid gap-12 border-b border-white/10 pb-12 lg:grid-cols-[1.4fr_0.8fr_1fr]">

          {/* BRAND */}
          <div>
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-400/10 text-cyan-300">
                <Factory size={27} />
              </div>

              <div>
                <h3 className="text-2xl font-black tracking-tight text-white">
                  SARL
                </h3>

                <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-300/70">
                  TECHNISOL
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-md text-[15px] leading-7 text-white/55">
              Fabricant de solutions en polystyrène expansé (EPS),
              destinées à l’isolation, à l’industrie et aux applications
              professionnelles.
            </p>

            <div className="mt-6 inline-flex items-center rounded-full border border-cyan-300/15 bg-cyan-400/[0.07] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-cyan-200">
              Algérie • Depuis 1997
            </div>
          </div>

          {/* NAVIGATION */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.18em] text-white">
              Navigation
            </h4>

            <div className="mt-6 grid gap-3">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="w-fit text-[14px] font-medium text-white/55 transition duration-300 hover:translate-x-1 hover:text-cyan-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.18em] text-white">
              Nous contacter
            </h4>

            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <Phone
                  size={18}
                  className="mt-0.5 shrink-0 text-cyan-300"
                />

                <div>
                  <p className="text-xs text-white/40">
                    Téléphone
                  </p>

                  <p className="mt-1 text-sm font-semibold text-white/75">
                    026 93 46 90 • 026 94 82 12 • +213560977316
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail
                  size={18}
                  className="mt-0.5 shrink-0 text-cyan-300"
                />

                <div>
                  <p className="text-xs text-white/40">
                    E-mail
                  </p>

                  <p className="mt-1 text-sm font-semibold text-white/75">
                    technisol1998@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-cyan-300"
                />

                <div>
                  <p className="text-xs text-white/40">
                    Adresse
                  </p>

                  <p className="mt-1 text-sm font-semibold text-white/75">
                    Zone d'activité, Lot n°02, Bouira 10000
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col gap-5 pt-7 text-sm text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} SARL TECHNISOL — Tous droits réservés.
          </p>

          <div className="flex items-center gap-6">
            <span>
              Fabricant de PSE en Algérie
            </span>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Retour en haut"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-cyan-300/15 bg-cyan-400/[0.07] text-cyan-300 transition duration-300 hover:-translate-y-1 hover:bg-cyan-400/15"
            >
              <ArrowUp size={19} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}