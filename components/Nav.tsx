"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { WHATSAPP_URL } from "@/lib/constants";
import { ArrowRight, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { id: "inicio",     label: "Inicio" },
  { id: "servicios",  label: "Servicios" },
  { id: "proceso",    label: "Proceso" },
  { id: "portafolio", label: "Portafolio" },
  { id: "contacto",   label: "Contacto" },
];

export default function Nav() {
  const [active, setActive] = useState("inicio");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    NAV_LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{
        background: "rgba(11,15,21,0.72)",
        backdropFilter: "blur(12px) saturate(140%)",
        WebkitBackdropFilter: "blur(12px) saturate(140%)",
        borderColor: "rgba(255,255,255,0.06)",
      }}
    >
      <div className="max-w-container mx-auto px-6 flex items-center justify-between gap-6 h-[72px]">
        {/* Logo */}
        <button
          onClick={() => scrollTo("inicio")}
          className="flex items-center gap-3 shrink-0"
          aria-label="Ir al inicio"
        >
          <Image
            src="/logomark.png"
            alt="Gambitho Labs"
            width={40}
            height={40}
            className="h-10 w-auto"
            priority
          />
          <div className="flex flex-col leading-none gap-[3px]">
            <span className="font-sans font-bold text-[18px] text-fg tracking-[0.06em]">
              GAMBITHO
            </span>
            <span className="font-sans font-semibold text-[13px] text-brand tracking-[0.32em]">
              LABS
            </span>
          </div>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-7" aria-label="Navegación principal">
          {NAV_LINKS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="relative text-sm font-medium transition-colors duration-200"
              style={{ color: active === id ? "#3a7bff" : "#b6c0cf" }}
            >
              {label}
              {active === id && (
                <span
                  className="absolute left-0 right-0 -bottom-[6px] h-0.5 rounded-full bg-brand"
                  aria-hidden="true"
                />
              )}
            </button>
          ))}
        </nav>

        {/* CTA + Mobile hamburger */}
        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-brand text-white font-semibold text-[13px] px-[14px] py-[9px] rounded-[10px] transition-colors duration-200 hover:bg-brand2"
            style={{ boxShadow: "0 1px 0 rgba(255,255,255,0.06) inset, 0 1px 2px rgba(0,0,0,0.4)" }}
          >
            Hablar por WhatsApp
            <ArrowRight size={14} />
          </a>
          <button
            className="md:hidden p-2 text-fg2"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Abrir menú"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t px-6 py-4 flex flex-col gap-4"
          style={{ borderColor: "rgba(255,255,255,0.06)", background: "rgba(11,15,21,0.95)" }}
        >
          {NAV_LINKS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-left text-[15px] font-medium text-fg2 hover:text-fg transition-colors"
            >
              {label}
            </button>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-brand text-white font-semibold text-[14px] px-4 py-3 rounded-[10px] mt-2"
          >
            Hablar por WhatsApp
            <ArrowRight size={14} />
          </a>
        </div>
      )}
    </header>
  );
}
