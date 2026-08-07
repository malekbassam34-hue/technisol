"use client";

import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroButtons from "./HeroButtons";
import HeroBadges from "./HeroBadges";
import HeroFloatingCard from "./HeroFloatingCard";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 200]),
    {
      stiffness: 70,
      damping: 22,
    }
  );

  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.85],
    [1, 0]
  );

  const [rotate, setRotate] = useState({
    x: 0,
    y: 0,
  });

  const [mouse, setMouse] = useState({
    x: 50,
    y: 50,
  });

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-[#04152d]"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();

        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;

        setMouse({
          x: x * 100,
          y: y * 100,
        });

        setRotate({
          x: (0.5 - y) * 8,
          y: (x - 0.5) * 10,
        });
      }}
      onMouseLeave={() => {
        setRotate({
          x: 0,
          y: 0,
        });

        setMouse({
          x: 50,
          y: 50,
        });
      }}
    >
      <HeroBackground backgroundY={backgroundY} />

      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: `radial-gradient(circle at ${mouse.x}% ${mouse.y}%,
          rgba(0,240,255,.22),
          transparent 35%)`,
        }}
        transition={{
          type: "tween",
          duration: 0.15,
        }}
      />

      <motion.div
        animate={{
          rotateX: rotate.x,
          rotateY: rotate.y,
        }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 18,
        }}
        style={{
          transformStyle: "preserve-3d",
        }}
        className="relative z-20 pt-6"
      >
        <div className="relative z-20 mx-auto flex min-h-screen max-w-7xl items-center px-8 pt-6">
          <div className="grid w-full items-center gap-20 lg:grid-cols-[1.18fr_.82fr]">
            <div>
              <HeroContent contentOpacity={contentOpacity} />

              <HeroButtons />

              <HeroBadges />
            </div>

            <HeroFloatingCard />
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center"
      >
        <p className="text-[11px] tracking-[0.45em] text-cyan-300">
          SCROLL
        </p>

        <div className="mx-auto mt-4 h-12 w-px bg-gradient-to-b from-cyan-300 to-transparent" />
      </motion.div>
    </section>
  );
}