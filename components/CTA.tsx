"use client";
import React from "react";

export default function CTA() {
  return (
    <section style={{ padding: 48 }}>
      <div className="container glass-card" style={{ padding: 24, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
        <div>
          <h3 style={{ margin: 0 }}>Prêt à démarrer votre projet ?</h3>
          <p style={{ color: "var(--muted)", marginTop: 6 }}>Contactez-nous pour un devis personnalisé.</p>
        </div>

        <div>
          <a href="#contact" className="gradient-accent" style={{ padding: "10px 16px", borderRadius: 999, color: "white", fontWeight: 800, textDecoration: "none" }}>Demander un devis</a>
        </div>
      </div>
    </section>
  );
}
