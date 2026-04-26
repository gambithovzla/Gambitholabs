import { Check } from "lucide-react";

const POINTS = [
  { strike: "Entregamos archivos",  yes: "Entregamos sistemas funcionando" },
  { strike: "Diseñamos páginas",    yes: "Construimos productos reales" },
  { strike: "Vendemos plantillas",  yes: "Resolvemos tu problema" },
];

export default function Differentiator() {
  return (
    <section
      id="diferencial"
      className="border-b px-6"
      style={{ padding: "120px 24px", borderColor: "rgba(255,255,255,0.06)" }}
    >
      <div
        className="max-w-container mx-auto grid grid-cols-1 md:grid-cols-2 items-center"
        style={{ gap: 72 }}
      >
        {/* Left: statement */}
        <div>
          <p className="font-mono text-[12px] text-brand uppercase tracking-[0.12em]">
            03 — DIFERENCIAL
          </p>
          <h2
            className="font-sans font-semibold text-fg mt-4 mb-5"
            style={{ fontSize: "clamp(36px, 4vw, 56px)", lineHeight: 1.05, letterSpacing: "-0.02em" }}
          >
            No entregamos archivos.
            <br />
            <span className="text-brand">Entregamos sistemas funcionando.</span>
          </h2>
          <p className="text-[17px] text-fg2 leading-[1.6]" style={{ maxWidth: 480 }}>
            Cuando termina el proyecto, tu equipo tiene algo que{" "}
            <em
              className="not-italic text-fg"
              style={{ borderBottom: "1px solid #3a7bff" }}
            >
              usa todos los días
            </em>
            . No un PDF en una carpeta.
          </p>
        </div>

        {/* Right: contrast cards */}
        <div className="flex flex-col gap-[14px]">
          {POINTS.map((p) => (
            <div
              key={p.yes}
              className="rounded-[12px] px-6 py-5 border"
              style={{ background: "#11161f", borderColor: "rgba(255,255,255,0.06)" }}
            >
              <div
                className="font-mono text-[12px] text-fg4 mb-1.5"
                style={{ textDecoration: "line-through", textDecorationColor: "#ff5c6c" }}
              >
                {p.strike}
              </div>
              <div
                className="font-sans font-semibold text-[19px] text-fg flex items-center gap-2.5"
                style={{ letterSpacing: "-0.01em" }}
              >
                <Check size={18} color="#4ade80" />
                {p.yes}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
