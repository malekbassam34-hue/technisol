"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Building2,
  Factory,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import Counter from "./Counter";

const statistics = [
  {
    value: 1997,
    suffix: "",
    title: "Année de création",
    icon: Building2,
  },
  {
    value: 28,
    suffix: "+",
    title: "Années d'expérience",
    icon: Factory,
  },
  {
    text: "PSE",
    title: "Isolation thermique",
    icon: Sparkles,
  },
  {
    value: 100,
    suffix: "%",
    title: "Qualité certifiée",
    icon: ShieldCheck,
  },
];

export default function Statistics() {

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.55,
  });

  return (

    <div
      ref={ref}
      className="grid gap-8 md:grid-cols-2 xl:grid-cols-4"
    >

      {statistics.map((item, index) => {

        const Icon = item.icon;

        return (

          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: false,
            }}
            transition={{
              duration: .6,
              delay: index * .12,
            }}
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            className="group relative overflow-hidden rounded-[38px] border border-cyan-300/20 bg-[#0d3156]/60 p-10 backdrop-blur-[20px] shadow-[0_25px_70px_rgba(0,180,255,.16)] transition-all duration-300"
          >

            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-blue-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />

            <div className="relative">

              <div className="mb-8 flex h-18 w-18 items-center justify-center rounded-[20px] bg-cyan-400/15 border border-cyan-300/20">

                <Icon
                  size={30}
                  className="text-cyan-300"
                />

              </div>

              <h3 className="text-7xl font-black text-white drop-shadow-lg">

                {item.text ? (

                  item.text

                ) : (

                  <Counter
                    end={item.value!}
                    suffix={item.suffix}
                    active={inView}
                  />

                )}

              </h3>

              <p className="mt-5 text-[17px] leading-7 text-white/80">

                {item.title}

              </p>

            </div>

          </motion.div>

        );

      })}

    </div>

  );

}