import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";

const TECH_BADGES = [
  "Node.js", "React", "PostgreSQL", "Statcast API", "Real-time data", "Statistical models",
];

const HEXA_SCREENS = [
  { src: "/hexa-semana.png",    label: "SEMANA ACTUAL" },
  { src: "/hexa-resumen.png",   label: "RESUMEN" },
  { src: "/hexa-historial.png", label: "HISTORIAL" },
  { src: "/hexa-parlay.png",    label: "PARLAY ARCHITECT" },
];

const COMING_SOON = ["02", "03", "04"];

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
              {TECH_BADGES.map((t) => (
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

        {/* Coming soon cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {COMING_SOON.map((n) => (
            <div
              key={n}
              className="rounded-[14px] p-6 border flex flex-col justify-between"
              style={{
                background: "#11161f",
                borderColor: "rgba(255,255,255,0.06)",
                minHeight: 200,
              }}
            >
              <div className="font-mono text-[11px] text-fg3 uppercase tracking-[0.12em]">{n}</div>
              <div>
                <div className="font-sans font-semibold text-[18px] text-fg2 mb-1.5">
                  Próximamente
                </div>
                <div className="font-mono text-[12px] text-fg4">case_study_pending.md</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
