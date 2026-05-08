import Image from "next/image";
import { ArrowRight, ExternalLink, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

const HEXA_BADGES = [
  "Node.js", "React", "PostgreSQL", "Statcast API", "Real-time data", "Statistical models",
];

const HEXA_SCREENS = [
  { src: "/hexa-semana.png",    label: "SEMANA ACTUAL" },
  { src: "/hexa-resumen.png",   label: "RESUMEN" },
  { src: "/hexa-historial.png", label: "HISTORIAL" },
  { src: "/hexa-parlay.png",    label: "PARLAY ARCHITECT" },
];

const JF_BADGES = [
  "Next.js", "Prisma", "PostgreSQL", "Tailwind CSS", "WhatsApp API", "PWA",
];

const JF_SCREENS = [
  { src: "/jf-screen-hero.png",      label: "LANDING" },
  { src: "/jf-screen-reservar.png",  label: "RESERVAS" },
  { src: "/jf-screen-servicios.png", label: "SERVICIOS" },
  { src: "/jf-screen-admin.png",     label: "PANEL ADMIN" },
];

export default function Portfolio() {
  return (
    <section
      id="portafolio"
      className="border-b px-6"
      style={{ padding: "120px 24px", borderColor: "rgba(255,255,255,0.06)", background: "#07090d" }}
    >
      <div className="max-w-container mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between gap-6 mb-14 flex-wrap">
          <div>
            <p className="font-mono text-[12px] text-brand uppercase tracking-[0.12em]">
              04 — PORTAFOLIO
            </p>
            <h2
              className="font-sans font-semibold text-fg mt-4"
              style={{ fontSize: 48, lineHeight: 1.1, letterSpacing: "-0.02em" }}
            >
              Cosas que hemos puesto a funcionar.
            </h2>
          </div>
          <a
            href="https://hexaoracle.lat"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-[14px] font-medium text-brand hover:text-brand2 transition-colors"
          >
            Ver todos <ArrowRight size={14} />
          </a>
        </div>

        {/* Featured: HEXA */}
        <div
          className="rounded-[18px] p-8 border mb-6 grid grid-cols-1 md:grid-cols-2 items-center gap-10"
          style={{ background: "#11161f", borderColor: "rgba(255,255,255,0.10)" }}
        >
          {/* Info */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="font-mono font-bold text-[28px] text-brand">HEXA</span>
              <span
                className="font-mono text-[11px] text-signal rounded-full px-2.5 py-1"
                style={{ background: "rgba(74,222,128,0.10)" }}
              >
                en producción
              </span>
            </div>
            <h3
              className="font-sans font-semibold text-[32px] text-fg leading-[1.15] mb-4"
              style={{ letterSpacing: "-0.02em" }}
            >
              Plataforma de análisis estadístico para MLB.
            </h3>
            <p className="text-[16px] text-fg2 leading-[1.6] mb-6">
              Sistema de scoring avanzado que integra Statcast, cuotas en vivo, clima y alineaciones para generar picks, parlays y análisis de valor esperado. Construido de cero por Gambitho Labs.
            </p>

            {/* Stats */}
            <div className="flex gap-8 flex-wrap mb-6">
              {[
                { n: "6",     label: "módulos en producción" },
                { n: "99.9%", label: "uptime" },
                { n: "MLB",   label: "datos en tiempo real" },
              ].map(({ n, label }) => (
                <div key={label}>
                  <div
                    className="font-sans font-semibold text-[24px] text-fg"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    {n}
                  </div>
                  <div className="font-mono text-[11px] text-fg3 uppercase tracking-[0.12em] mt-0.5">
                    {label}
                  </div>
                </div>
              ))}
            </div>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              {HEXA_BADGES.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[11px] text-fg3 rounded-full px-3 py-1 border"
                  style={{ borderColor: "rgba(255,255,255,0.10)" }}
                >
                  {t}
                </span>
              ))}
            </div>

            <a
              href="https://hexaoracle.lat"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-semibold text-[14px] text-brand hover:text-brand2 transition-colors"
            >
              <ExternalLink size={14} />
              hexaoracle.lat
            </a>
          </div>

          {/* Screenshots grid */}
          <div
            className="grid grid-cols-2 gap-3"
            style={{ transform: "rotate(-1.5deg)" }}
          >
            {HEXA_SCREENS.map(({ src, label }) => (
              <div
                key={label}
                className="rounded-[10px] overflow-hidden border"
                style={{ borderColor: "rgba(255,255,255,0.10)" }}
              >
                <Image
                  src={src}
                  alt={`HEXA — ${label}`}
                  width={400}
                  height={280}
                  className="w-full object-cover object-top"
                />
                <div
                  className="px-3 py-1.5 font-mono text-[10px] text-fg3 uppercase tracking-[0.12em] border-t"
                  style={{ borderColor: "rgba(255,255,255,0.06)", background: "#0b0f15" }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured: JF Studio */}
        <div
          className="rounded-[18px] p-8 border mb-6 grid grid-cols-1 md:grid-cols-2 items-center gap-10"
          style={{ background: "#11161f", borderColor: "rgba(255,255,255,0.10)" }}
        >
          {/* Info */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="font-mono font-bold text-[28px] text-brand">JF STUDIO</span>
              <span
                className="font-mono text-[11px] text-signal rounded-full px-2.5 py-1"
                style={{ background: "rgba(74,222,128,0.10)" }}
              >
                en producción
              </span>
            </div>
            <h3
              className="font-sans font-semibold text-[32px] text-fg leading-[1.15] mb-4"
              style={{ letterSpacing: "-0.02em" }}
            >
              Plataforma de reservas para salón de belleza.
            </h3>
            <p className="text-[16px] text-fg2 leading-[1.6] mb-6">
              Sitio web + sistema de gestión completo para estudio de estilismo en Lima. Reservas en línea, panel de administración con agenda, control de caja, notificaciones automáticas por WhatsApp e instalable como PWA.
            </p>

            {/* Stats */}
            <div className="flex gap-8 flex-wrap mb-6">
              {[
                { n: "PWA",  label: "instalable como app" },
                { n: "Auto", label: "recordatorios WhatsApp" },
                { n: "Lima", label: "en producción, Perú" },
              ].map(({ n, label }) => (
                <div key={label}>
                  <div
                    className="font-sans font-semibold text-[24px] text-fg"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    {n}
                  </div>
                  <div className="font-mono text-[11px] text-fg3 uppercase tracking-[0.12em] mt-0.5">
                    {label}
                  </div>
                </div>
              ))}
            </div>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              {JF_BADGES.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[11px] text-fg3 rounded-full px-3 py-1 border"
                  style={{ borderColor: "rgba(255,255,255,0.10)" }}
                >
                  {t}
                </span>
              ))}
            </div>

            <a
              href="https://johannafigueredo.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-semibold text-[14px] text-brand hover:text-brand2 transition-colors"
            >
              <ExternalLink size={14} />
              johannafigueredo.com
            </a>
          </div>

          {/* Screenshots grid */}
          <div
            className="grid grid-cols-2 gap-3"
            style={{ transform: "rotate(1.5deg)" }}
          >
            {JF_SCREENS.map(({ src, label }) => (
              <div
                key={label}
                className="rounded-[10px] overflow-hidden border"
                style={{ borderColor: "rgba(255,255,255,0.10)" }}
              >
                <Image
                  src={src}
                  alt={`JF Studio — ${label}`}
                  width={400}
                  height={280}
                  className="w-full object-cover object-top"
                />
                <div
                  className="px-3 py-1.5 font-mono text-[10px] text-fg3 uppercase tracking-[0.12em] border-t"
                  style={{ borderColor: "rgba(255,255,255,0.06)", background: "#0b0f15" }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next case study CTA */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="group rounded-[18px] border overflow-hidden grid grid-cols-1 md:grid-cols-[1.1fr_1fr] items-stretch transition-all duration-200 hover:-translate-y-0.5"
          style={{ background: "#11161f", borderColor: "rgba(255,255,255,0.10)" }}
        >
          {/* Visual */}
          <div className="relative" style={{ minHeight: 280 }}>
            <Image
              src="/gambitholabs-portafolio.png"
              alt="Gambitho Labs — Ideas, Systems, Results"
              width={800}
              height={800}
              className="w-full h-full object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none"
              style={{ background: "linear-gradient(90deg, transparent 40%, #11161f 100%)" }}
            />
          </div>

          {/* Copy */}
          <div className="p-8 md:p-10 flex flex-col justify-center gap-4">
            <div className="font-mono text-[11px] text-brand uppercase tracking-[0.12em]">
              03 — PRÓXIMO CASO
            </div>
            <h3
              className="font-sans font-semibold text-[28px] text-fg leading-[1.15]"
              style={{ letterSpacing: "-0.02em" }}
            >
              ¿El próximo sistema en producción es el tuyo?
            </h3>
            <p className="text-[15px] text-fg2 leading-[1.6]">
              Construimos sistemas a medida — no plantillas. Si tienes una idea operativa que aún corre en Excel, WhatsApp o papel, conversemos.
            </p>
            <span
              className="inline-flex items-center gap-2 font-semibold text-[14px] text-brand mt-2 group-hover:text-brand2 transition-colors"
            >
              <MessageCircle size={14} />
              Hablemos por WhatsApp
              <ArrowRight size={14} />
            </span>
          </div>
        </a>
      </div>
    </section>
  );
}
