"use client";
import React from "react";
import { FaIndustry, FaShieldAlt, FaLeaf, FaTruck, FaTools, FaAward } from "react-icons/fa";

const advantages = [
  { icon: <FaIndustry />, title: "Production moderne", text: "Équipements industriels de dernière génération." },
  { icon: <FaShieldAlt />, title: "Qualité garantie", text: "Contrôle qualité rigoureux à chaque étape." },
  { icon: <FaLeaf />, title: "Respect environnement", text: "Solutions durables et matériaux responsables." },
  { icon: <FaTruck />, title: "Livraison rapide", text: "Distribution efficace." },
  { icon: <FaTools />, title: "Assistance technique", text: "Conseils et support technique." },
  { icon: <FaAward />, title: "Expérience", text: "Expertise depuis 1997." },
];

export default function Advantages() {
  return (
    <section style={{ padding: 64 }}>
      <div className="container">
        <h3>Nos atouts</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 12, marginTop: 12 }}>
          {advantages.map((a) => (
            <div key={a.title} className="glass-card" style={{ padding: 14 }}>
              <div style={{ fontSize: 22, color: "var(--accent)" }}>{a.icon}</div>
              <h4 style={{ marginTop: 8 }}>{a.title}</h4>
              <p style={{ color: "var(--muted)", marginTop: 6 }}>{a.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
