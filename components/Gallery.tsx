"use client";
import React from "react";
import { motion } from "framer-motion";

type Item = { image: string; title: string; description?: string };

const items: Item[] = [
  { image: "/gallery-1.jpg", title: "Blocs PSE" },
  { image: "/gallery-2.jpg", title: "Plaques" },
  { image: "/gallery-3.jpg", title: "Découpe" },
];

export default function Gallery() {
  return (
    <section id="gallery" style={{ padding: 64 }}>
      <div className="container">
        <h3>Galerie</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 12, marginTop: 12 }}>
          {items.map((it) => (
            <motion.div key={it.title} whileHover={{ scale: 1.03 }} className="glass-card" style={{ overflow: "hidden" }}>
              <img src={it.image} alt={it.title} style={{ width: "100%", height: 180, objectFit: "cover" }} />
              <div style={{ padding: 10 }}>
                <h4 style={{ margin: 0 }}>{it.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
