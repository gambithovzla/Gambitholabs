"use client";

import { ArrowRight, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden border-b"
      style={{ borderColor: "rgba(255,255,255,0.06)" }}
    >
      {/* Dot grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.10) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage: "radial-gradient(ellipse at 30% 40%, black 30%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at 30% 40%, black 30%, transparent 75%)",
        }}
      />
      {/* Accent halo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute"
        style={{
          left: "5%",
          top: "20%",
          width: 700,
          height: 700,
          background: "radial-gradient(circle, rgba(58,123,255,0.30), transparent 60%)",
          filter: "blur(20px)",
        }}
      />

      <div
        className="relative mx-auto grid items-center gap-16 px-6"
        style={{
          maxWidth: 1200,
          padding: "120px 24px 96px",
          gridTemplateColumns: "1.05fr 1fr",
          display: "grid",
          gap: 64,
        }}
      >
        {/* Left: copy */}
        <div>
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 font-mono text-[12px] text-brand uppercase tracking-[0.12em]">
            <span
              className="inline-block w-1.5 h-1.5 rounded-full bg-signal animate-pulse2"
              aria-hidden="true"
              style={{ boxShadow: "0 0 8px #4ade80" }}
            />
            $ ideas → sistemas → resultados
          </div>

          {/* H1 */}
          <h1
            className="font-sans font-semibold text-fg mt-5"
            style={{
              fontSize: "clamp(48px, 6vw, 80px)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            Tienes una idea.
            <br />
            <span className="text-fg2">Nosotros la convertimos en un </span>
            <span className="relative inline-block text-fg">
              sistema real
              <span
                className="absolute left-0 right-0 rounded-sm bg-brand"
                aria-hidden="true"
                style={{ bottom: 6, height: 4 }}
              />
            </span>
            .
          </h1>

          {/* Subhead */}
          <p className="mt-7 text-[18px] text-fg2 leading-relaxed" style={{ maxWidth: 540 }}>
            Webs, apps y soluciones digitales diseñadas para funcionar y generar resultados.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mt-9">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-[10px] font-semibold text-[15px] text-white rounded-[12px] transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: "#25d366",
                padding: "14px 22px",
                boxShadow: "0 1px 0 rgba(255,255,255,0.06) inset, 0 8px 24px -8px rgba(37,211,102,0.5)",
              }}
            >
              <MessageCircle size={18} />
              Hablar por WhatsApp
            </a>
            <a
              href="#portafolio"
              className="inline-flex items-center gap-2 font-semibold text-[15px] text-fg rounded-[12px] border transition-all duration-200 hover:-translate-y-0.5 hover:border-brand"
              style={{
                background: "#19202b",
                padding: "14px 22px",
                borderColor: "rgba(255,255,255,0.10)",
              }}
            >
              Ver portafolio
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Tags */}
          <div className="flex gap-5 mt-11 font-mono text-[11px] text-fg3 uppercase tracking-[0.12em] flex-wrap">
            {["PWA", "WEB", "APPS", "DASHBOARDS"].map((tag, i, arr) => (
              <span key={tag} className="flex items-center gap-5">
                {tag}
                {i < arr.length - 1 && <span>·</span>}
              </span>
            ))}
          </div>
        </div>

        {/* Right: browser frame mockup */}
        <div
          className="hidden md:block"
          style={{ transform: "rotate(2deg)", transformOrigin: "center" }}
        >
          <BrowserFrame />
        </div>
      </div>
    </section>
  );
}

function BrowserFrame() {
  return (
    <div
      className="rounded-[14px] overflow-hidden border"
      style={{
        background: "#11161f",
        borderColor: "rgba(255,255,255,0.10)",
        boxShadow: "0 24px 48px -16px rgba(0,0,0,0.7), 0 4px 12px rgba(0,0,0,0.4)",
      }}
    >
      {/* Browser chrome */}
      <div
        className="flex items-center gap-2 px-[14px] py-3 border-b"
        style={{ background: "#19202b", borderColor: "rgba(255,255,255,0.06)" }}
      >
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#ff5c6c" }} />
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#f5a524" }} />
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#4ade80" }} />
        <div
          className="flex-1 ml-2.5 font-mono text-[11px] text-fg3 rounded-[6px] px-2.5 py-1"
          style={{ background: "#11161f" }}
        >
          hexa.app/dashboard
        </div>
      </div>

      {/* Dashboard content */}
      <div className="p-[18px] grid grid-cols-2 gap-3">
        {/* Header row */}
        <div className="col-span-2 flex items-center justify-between">
          <div>
            <div className="font-mono text-[10px] text-brand uppercase tracking-[0.12em]">
              HEXA · OVERVIEW
            </div>
            <div className="font-sans font-semibold text-[18px] text-fg mt-1">
              Buen día, Andrés
            </div>
          </div>
          <span
            className="inline-flex items-center gap-1.5 font-mono text-[10px] text-signal rounded-full px-2.5 py-1"
            style={{ background: "rgba(74,222,128,0.10)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-signal animate-pulse2" />
            running
          </span>
        </div>

        {/* Metric cards */}
        <div
          className="rounded-[10px] p-[14px] border"
          style={{ background: "#19202b", borderColor: "rgba(255,255,255,0.06)" }}
        >
          <div className="font-mono text-[10px] text-fg3 uppercase tracking-[0.12em]">VENTAS · 7d</div>
          <div
            className="font-sans font-semibold text-[22px] text-fg mt-1"
            style={{ letterSpacing: "-0.02em" }}
          >
            $ 12,840
          </div>
          <div className="text-[11px] text-signal mt-1">↑ 18.4 %</div>
        </div>

        <div
          className="rounded-[10px] p-[14px] border"
          style={{ background: "#19202b", borderColor: "rgba(255,255,255,0.06)" }}
        >
          <div className="font-mono text-[10px] text-fg3 uppercase tracking-[0.12em]">PEDIDOS</div>
          <div
            className="font-sans font-semibold text-[22px] text-fg mt-1"
            style={{ letterSpacing: "-0.02em" }}
          >
            342
          </div>
          <div className="text-[11px] text-fg3 mt-1">+24 hoy</div>
        </div>

        {/* Activity chart */}
        <div
          className="col-span-2 rounded-[10px] p-[14px] border relative overflow-hidden"
          style={{ background: "#19202b", borderColor: "rgba(255,255,255,0.06)", height: 90 }}
        >
          <div className="font-mono text-[10px] text-fg3 uppercase tracking-[0.12em]">ACTIVIDAD</div>
          <svg
            viewBox="0 0 280 50"
            className="absolute"
            style={{ left: 14, right: 14, bottom: 12, width: "calc(100% - 28px)" }}
            aria-hidden="true"
          >
            <path
              d="M0,40 L30,32 L60,36 L90,20 L120,28 L150,12 L180,18 L210,8 L240,14 L280,4"
              fill="none"
              stroke="#3a7bff"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M0,40 L30,32 L60,36 L90,20 L120,28 L150,12 L180,18 L210,8 L240,14 L280,4 L280,50 L0,50 Z"
              fill="rgba(58,123,255,0.15)"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
