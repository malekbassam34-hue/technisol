"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock3,
  Send,
  MessageCircle,
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Téléphones",
    links: [
      {
        label: "026 93 46 90",
        href: "tel:+21326934690",
      },
      {
        label: "026 94 82 12",
        href: "tel:+21326948212",
      },
    ],
  },
  {
  icon: Mail,
  title: "E-mail",
  links: [
    {
      label: "technisol1998@gmail.com",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=technisol1998@gmail.com",
      external: true,
    },
  ],
},
  {
    icon: MapPin,
    title: "Adresse",
    links: [
      {
        label: "Zone d'activité, Lot n°02, Bouira 10000",
        href: "https://www.google.com/maps/search/?api=1&query=Zone+d%27activite+Lot+n02+Bouira+10000+Algeria",
        external: true,
      },
    ],
  },
  {
    icon: Clock3,
    title: "Horaires",
    links: [
      {
        label: "Dimanche – Jeudi • 08h00 – 16h00",
      },
    ],
  },
];
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);

  const name = formData.get("name");
  const phone = formData.get("phone");
  const email = formData.get("email");
  const besoin = formData.get("besoin");

  const message = encodeURIComponent(
`Bonjour SARL TECHNISOL,

Je souhaite demander un devis.

Nom : ${name}
Téléphone : ${phone}
E-mail : ${email}

Demande :
${besoin}`
  );

  window.open(
    `https://wa.me/213560977316?text=${message}`,
    "_blank"
  );
};
export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#061b31] px-6 py-28"
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-20 h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-[140px]" />
        <div className="absolute -right-32 bottom-0 h-[480px] w-[480px] rounded-full bg-blue-500/10 blur-[150px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
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
            Contact
          </span>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-white md:text-6xl">
            Parlons de votre
            <span className="block text-cyan-300">
              prochain projet
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-8 text-white/65">
            Une question technique, une demande de prix ou un besoin
            spécifique ? Notre équipe est à votre disposition.
          </p>
        </motion.div>

        {/* CONTENT */}
        <div className="mt-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="rounded-[36px] border border-cyan-300/15 bg-white/[0.055] p-8 backdrop-blur-xl"
          >
            <h3 className="text-3xl font-black text-white">
              SARL TECHNISOL
            </h3>

            <p className="mt-4 max-w-lg text-[15px] leading-7 text-white/60">
              Fabrication de solutions en polystyrène expansé adaptées
              aux besoins de l’isolation, de l’industrie et des projets
              professionnels.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {contactInfo.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group rounded-[24px] border border-white/10 bg-white/[0.045] p-5 transition duration-300 hover:border-cyan-300/30 hover:bg-white/[0.075]"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                      <Icon size={21} />
                    </div>

                    <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-cyan-300/70">
                      {item.title}
                    </p>

                    <div className="mt-2 space-y-1">
  {item.links.map((link) =>
    "href" in link && link.href ? (
      <a
        key={link.label}
        href={link.href}
        target={"external" in link && link.external ? "_blank" : undefined}
        rel={"external" in link && link.external ? "noopener noreferrer" : undefined}
        className="block text-[14px] font-semibold text-white transition hover:text-cyan-300"
      >
        {link.label}
      </a>
    ) : (
      <p
        key={link.label}
        className="text-[14px] font-semibold text-white"
      >
        {link.label}
      </p>
    )
  )}
</div>
                  </div>
                );
              })}
            </div>
                    {/* MAP */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-10 overflow-hidden rounded-[36px] border border-cyan-300/15 bg-white/[0.05] p-2 shadow-[0_30px_90px_rgba(0,0,0,.20)]"
        >
          <iframe
            src="https://www.google.com/maps?q=Zone+d%27activite+Bouira+Algeria&output=embed"
            width="100%"
            height="420"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-[30px] border-0"
            title="Localisation SARL TECHNISOL"
          />
        </motion.div>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/213560977316"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex w-full items-center justify-center gap-3 rounded-full border border-emerald-300/20 bg-emerald-400/10 px-6 py-4 font-bold text-emerald-300 transition duration-300 hover:bg-emerald-400/20"
            >
              <MessageCircle size={20} />
              Nous contacter sur WhatsApp
            </a>
          </motion.div>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="rounded-[36px] border border-cyan-300/15 bg-gradient-to-br from-[#0b3156]/90 to-[#0d426d]/80 p-8 shadow-[0_30px_90px_rgba(0,0,0,.20)] backdrop-blur-xl md:p-10"
          >
            <div className="mb-8">
              <h3 className="text-3xl font-black text-white">
                Demander un devis
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/55">
                Décrivez-nous votre besoin et notre équipe vous
                contactera dans les meilleurs délais.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="grid gap-5"
            >
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-bold text-white/75">
                    Nom complet
                  </label>

                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Votre nom"
                    className="w-full rounded-[18px] border border-white/10 bg-white/[0.06] px-5 py-4 text-white outline-none transition placeholder:text-white/30 focus:border-cyan-300/50 focus:bg-white/[0.09]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-white/75">
                    Téléphone
                  </label>

                  <input
                    type="tel"
                    name="phone"
required
                    placeholder="+213"
                    className="w-full rounded-[18px] border border-white/10 bg-white/[0.06] px-5 py-4 text-white outline-none transition placeholder:text-white/30 focus:border-cyan-300/50 focus:bg-white/[0.09]"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-white/75">
                  E-mail
                </label>

                <input
                  type="email"
                  name="email"
required
                  placeholder="nom@entreprise.com"
                  className="w-full rounded-[18px] border border-white/10 bg-white/[0.06] px-5 py-4 text-white outline-none transition placeholder:text-white/30 focus:border-cyan-300/50 focus:bg-white/[0.09]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-white/75">
                  Votre besoin
                </label>

                <textarea
                name="besoin"
required
                  placeholder="Produit, dimensions, densité, quantité..."
                  rows={5}
                  className="w-full resize-none rounded-[18px] border border-white/10 bg-white/[0.06] px-5 py-4 text-white outline-none transition placeholder:text-white/30 focus:border-cyan-300/50 focus:bg-white/[0.09]"
                />
              </div>

              <button
                type="submit"
                className="mt-2 inline-flex w-full items-center justify-center gap-3 rounded-full bg-cyan-400 px-7 py-4 font-black text-[#04152d] transition duration-300 hover:scale-[1.015] hover:bg-cyan-300"
              >
                Envoyer la demande
                <Send size={19} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
