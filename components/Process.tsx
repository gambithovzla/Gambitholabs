const STEPS = [
  { n: "01", title: "Entendemos tu idea",     body: "Nos sentamos contigo. Sin tecnicismos, sin propuestas infladas." },
  { n: "02", title: "Diseñamos la solución",  body: "Decisiones claras: qué construir, qué no, en qué orden." },
  { n: "03", title: "La construimos",         body: "Iteramos rápido. Tú ves avances reales, no slides." },
  { n: "04", title: "La ponemos a funcionar", body: "Deploy, métricas, y un sistema que tu equipo puede usar." },
];

export default function Process() {
  return (
    <section
      id="proceso"
      className="border-b px-6"
      style={{ padding: "120px 24px", borderColor: "rgba(255,255,255,0.06)", background: "#07090d" }}
    >
      <div className="max-w-container mx-auto">
        <p className="font-mono text-[12px] text-brand uppercase tracking-[0.12em]">
          02 — CÓMO TRABAJAMOS
        </p>
        <h2
          className="font-sans font-semibold text-fg mt-4 mb-14"
          style={{ fontSize: 48, lineHeight: 1.1, letterSpacing: "-0.02em", maxWidth: 720 }}
        >
          Un proceso sin humo.
        </h2>

        {/* Desktop: horizontal, Mobile: vertical */}
        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0">
          {/* Connector line (desktop only) */}
          <div
            className="hidden md:block absolute left-0 right-0 top-7 h-px"
            style={{ background: "rgba(255,255,255,0.06)" }}
            aria-hidden="true"
          />

          {STEPS.map((step) => (
            <div key={step.n} className="md:pr-6 relative">
              {/* Number badge */}
              <div
                className="w-14 h-14 rounded-[12px] grid place-items-center font-mono font-semibold text-[15px] text-brand relative z-10 border"
                style={{
                  background: "#11161f",
                  borderColor: "rgba(255,255,255,0.10)",
                }}
              >
                {step.n}
              </div>
              <h3
                className="font-sans font-semibold text-[20px] text-fg mt-5 mb-2"
                style={{ letterSpacing: "-0.02em" }}
              >
                {step.title}
              </h3>
              <p className="text-[14px] text-fg2 leading-[1.55]">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
