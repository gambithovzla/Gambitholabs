"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";

const BASE_WA = "https://wa.me/51970752104?text=";

export default function FinalCTA() {
  const [text, setText] = useState("");

  const waUrl =
    BASE_WA + encodeURIComponent(text.trim() || "Hola Gambitho, tengo una idea…");

  return (
    <section
      id="contacto"
      className="relative overflow-hidden px-6"
      style={{ padding: "140px 24px" }}
    >
      {/* Dot grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.10) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage: "radial-gradient(ellipse at 50% 50%, black 20%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at 50% 50%, black 20%, transparent 70%)",
        }}
      />
      {/* Accent glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute"
        style={{
          left: "50%",
          top: "50%",
          width: 800,
          height: 600,
          transform: "translate(-50%,-50%)",
          background: "radial-gradient(ellipse, rgba(58,123,255,0.30), transparent 60%)",
          filter: "blur(20px)",
        }}
      />

      <div className="relative max-w-narrow mx-auto text-center">
        <p className="font-mono text-[12px] text-brand uppercase tracking-[0.12em]">
          05 — CONTACTO
        </p>
        <h2
          className="font-sans font-semibold text-fg mt-5 mb-5"
          style={{ fontSize: "clamp(48px, 7vw, 72px)", lineHeight: 1.05, letterSpacing: "-0.02em" }}
        >
          ¿Tienes una idea?
        </h2>
        <p className="text-[20px] text-fg2 leading-relaxed mb-10">
          Escríbenos y la convertimos en algo real.
        </p>

        {/* Input + CTA */}
        <div className="flex gap-2 justify-center mb-4 flex-wrap sm:flex-nowrap" style={{ maxWidth: 540, margin: "0 auto 16px" }}>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Cuéntanos en una línea…"
            className="flex-1 min-w-0 rounded-[12px] px-[18px] py-4 text-[15px] text-fg placeholder:text-fg3 outline-none transition-all duration-200 border"
            style={{
              background: "#11161f",
              borderColor: "rgba(255,255,255,0.10)",
              fontFamily: "inherit",
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = "#3a7bff";
              e.currentTarget.style.boxShadow = "0 0 0 1px #3a7bff, 0 0 12px rgba(58,123,255,0.2)";
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)";
              e.currentTarget.style.boxShadow = "none";
            }}
          />
          <a
            href={waUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 font-semibold text-[15px] text-white rounded-[12px] shrink-0 transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: "#25d366",
              padding: "16px 22px",
              boxShadow: "0 1px 0 rgba(255,255,255,0.06) inset, 0 8px 24px -8px rgba(37,211,102,0.5)",
            }}
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>
        </div>

        <p className="font-mono text-[11px] text-fg3 uppercase tracking-[0.12em]">
          respondemos hoy mismo · zona horaria GMT-5
        </p>
      </div>
    </section>
  );
}
