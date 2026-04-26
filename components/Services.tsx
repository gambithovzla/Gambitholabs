"use client";

import { useState } from "react";
import { Layout, Smartphone, Code2, Zap } from "lucide-react";

const SERVICES = [
  {
    icon: Layout,
    title: "Desarrollo web",
    body: "Webs corporativas, landings y PWAs construidas para vender y escalar.",
    n: "01",
  },
  {
    icon: Smartphone,
    title: "Apps web y móviles",
    body: "Aplicaciones que funcionan en cualquier dispositivo, sin fricción.",
    n: "02",
  },
  {
    icon: Code2,
    title: "Sistemas y dashboards",
    body: "Paneles internos y herramientas a medida. Datos al alcance de tu equipo.",
    n: "03",
  },
  {
    icon: Zap,
    title: "Automatización",
    body: "Conectamos lo que ya usas y eliminamos el trabajo manual repetido.",
    n: "04",
  },
];

function ServiceCard({
  icon: Icon,
  title,
  body,
  n,
}: (typeof SERVICES)[number]) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="rounded-[14px] p-7 transition-all duration-200 cursor-default"
      style={{
        background: hovered ? "#19202b" : "#11161f",
        border: `1px solid ${hovered ? "rgba(255,255,255,0.10)" : "rgba(255,255,255,0.06)"}`,
        transform: hovered ? "translateY(-2px)" : "none",
        boxShadow: hovered ? "0 8px 24px -8px rgba(0,0,0,0.6)" : "none",
      }}
    >
      <div className="flex items-center justify-between">
        <div
          className="w-11 h-11 rounded-[10px] grid place-items-center transition-all duration-200"
          style={{
            background: hovered ? "rgba(58,123,255,0.10)" : "#19202b",
            color: hovered ? "#3a7bff" : "#b6c0cf",
          }}
        >
          <Icon size={22} />
        </div>
        <span className="font-mono text-[11px] text-fg3">{n}</span>
      </div>
      <h3
        className="font-sans font-semibold text-[22px] text-fg mt-5 mb-2"
        style={{ letterSpacing: "-0.02em" }}
      >
        {title}
      </h3>
      <p className="text-[15px] text-fg2 leading-[1.55] m-0">{body}</p>
    </div>
  );
}

export default function Services() {
  return (
    <section
      id="servicios"
      className="border-b px-6"
      style={{ padding: "120px 24px", borderColor: "rgba(255,255,255,0.06)" }}
    >
      <div className="max-w-container mx-auto">
        <p className="font-mono text-[12px] text-brand uppercase tracking-[0.12em]">
          01 — QUÉ HACEMOS
        </p>
        <h2
          className="font-sans font-semibold text-fg mt-4 mb-3"
          style={{ fontSize: 48, lineHeight: 1.1, letterSpacing: "-0.02em", maxWidth: 720 }}
        >
          Construimos lo que tu negocio necesita.
        </h2>
        <p className="text-[17px] text-fg2" style={{ maxWidth: 600 }}>
          Sin tecnicismos. Cuatro frentes, un mismo enfoque: que funcione.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-14">
          {SERVICES.map((s) => (
            <ServiceCard key={s.n} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
