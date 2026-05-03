import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="border-t py-12 px-6"
      style={{
        background: "#07090d",
        borderColor: "rgba(255,255,255,0.06)",
      }}
    >
      <div className="max-w-container mx-auto flex flex-wrap items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image src="/logomark.png" alt="Gambitho Labs" width={32} height={32} className="h-8 w-auto" />
          <div className="flex flex-col leading-none gap-[3px]">
            <span className="font-sans font-bold text-[16px] text-fg tracking-[0.06em]">GAMBITHO</span>
            <span className="font-sans font-semibold text-[11px] text-brand tracking-[0.32em]">LABS</span>
          </div>
        </div>

        {/* Links */}
        <nav className="flex gap-7" aria-label="Footer">
          {[
            { href: "#servicios", label: "Servicios" },
            { href: "#proceso",   label: "Proceso" },
            { href: "#portafolio",label: "Portafolio" },
            { href: "#",          label: "Privacidad" },
          ].map(({ href, label }) => (
            <a
              key={label}
              href={href}
              className="text-[13px] text-fg3 hover:text-fg2 transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <p className="font-mono text-[11px] text-fg3 uppercase tracking-[0.12em]">
          © 2026 — Gambitho Labs
        </p>
      </div>
    </footer>
  );
}
