import { promises as fs } from "fs";
import path from "path";
import { marked } from "marked";
import type { Metadata } from "next";
import Image from "next/image";
import PrintButton from "./PrintButton";

export const metadata: Metadata = {
  title: "Playbook · Gambitho Labs · Manual del equipo comercial",
  description: "Documento interno · uso exclusivo del equipo comercial.",
  robots: { index: false, follow: false, nocache: true },
};

export default async function PlaybookPage() {
  const filePath = path.join(process.cwd(), "docs", "playbook-vendedora.md");
  const source = await fs.readFile(filePath, "utf-8");

  // Strip the leading H1 since we render the cover separately
  const body = source.replace(/^#\s+Playbook[^\n]*\n+/, "").replace(/^\*\*Manual operativo[^\n]*\n+/m, "");

  const html = await marked.parse(body, { gfm: true, breaks: false });

  return (
    <div className="playbook-root">
      {/* Cover */}
      <section className="cover">
        <div className="cover-grid">
          <div className="cover-meta">
            <p className="eyebrow">Documento interno · v1.0</p>
            <h1 className="cover-title">
              Playbook<br />
              <span className="cover-title-sub">Gambitho Labs</span>
            </h1>
            <p className="cover-tagline">
              Manual operativo para el equipo comercial.<br />
              Cómo vendemos lo que construimos.
            </p>
            <dl className="cover-table">
              <div><dt>Audiencia</dt><dd>Equipo comercial</dd></div>
              <div><dt>Versión</dt><dd>1.0 · Mayo 2026</dd></div>
              <div><dt>Confidencialidad</dt><dd>Uso interno exclusivo</dd></div>
              <div><dt>Contacto</dt><dd>contacto@gambitholabs.com</dd></div>
            </dl>
          </div>
          <div className="cover-visual">
            <Image
              src="/logo.png"
              alt="Gambitho Labs"
              width={600}
              height={600}
              priority
              className="cover-image"
            />
          </div>
        </div>
        <p className="cover-foot">
          Documento confidencial · Gambitho Labs · contacto@gambitholabs.com
        </p>
      </section>

      {/* Print toolbar (hidden when printing) */}
      <div className="toolbar">
        <PrintButton />
        <a href="/playbook-vendedora.pdf" target="_blank" rel="noreferrer">
          Abrir PDF descargable
        </a>
      </div>

      {/* Body */}
      <article
        className="prose"
        dangerouslySetInnerHTML={{ __html: html }}
      />

      <footer className="page-foot">
        <p>Gambitho Labs · Lima, Perú · GMT-5</p>
        <p>contacto@gambitholabs.com · WhatsApp +51 970 752 104</p>
      </footer>

      {/* Scoped styles */}
      <style dangerouslySetInnerHTML={{ __html: PLAYBOOK_CSS }} />
    </div>
  );
}

const PLAYBOOK_CSS = `
  .playbook-root {
    background: #0b0f15;
    color: #f3f6fb;
    font-family: var(--font-sans), ui-sans-serif, system-ui, sans-serif;
    min-height: 100vh;
    padding: 0;
  }

  /* Cover */
  .cover {
    background: linear-gradient(180deg, #07090d 0%, #11161f 100%);
    border-bottom: 1px solid rgba(58, 123, 255, 0.25);
    padding: 80px 48px 64px;
    position: relative;
  }
  .cover::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: radial-gradient(rgba(58,123,255,0.18) 1px, transparent 1px);
    background-size: 28px 28px;
    mask-image: radial-gradient(ellipse at 70% 50%, black 30%, transparent 70%);
    -webkit-mask-image: radial-gradient(ellipse at 70% 50%, black 30%, transparent 70%);
    pointer-events: none;
  }
  .cover-grid {
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 64px;
    align-items: center;
    position: relative;
  }
  .cover-meta { position: relative; z-index: 1; }
  .eyebrow {
    font-family: var(--font-mono), monospace;
    font-size: 12px;
    color: #3a7bff;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    margin: 0 0 18px;
  }
  .cover-title {
    font-size: clamp(48px, 6vw, 80px);
    font-weight: 700;
    line-height: 1.02;
    letter-spacing: -0.02em;
    margin: 0 0 18px;
    color: #f3f6fb;
  }
  .cover-title-sub {
    color: #b6c0cf;
    font-weight: 400;
  }
  .cover-tagline {
    font-size: 18px;
    line-height: 1.55;
    color: #b6c0cf;
    margin: 0 0 36px;
    max-width: 460px;
  }
  .cover-table {
    margin: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px 28px;
    font-size: 13px;
  }
  .cover-table > div { display: contents; }
  .cover-table dt {
    font-family: var(--font-mono), monospace;
    text-transform: uppercase;
    color: #7d8898;
    letter-spacing: 0.12em;
    font-size: 10px;
    padding-top: 4px;
  }
  .cover-table dd {
    margin: 0;
    color: #f3f6fb;
    font-weight: 500;
    padding-bottom: 8px;
    border-bottom: 1px solid rgba(255,255,255,0.06);
  }
  .cover-visual {
    position: relative;
    aspect-ratio: 1 / 1;
    display: grid;
    place-items: center;
  }
  .cover-visual::before {
    content: "";
    position: absolute;
    inset: 8%;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(58,123,255,0.25), transparent 65%);
    filter: blur(20px);
    pointer-events: none;
  }
  .cover-image {
    position: relative;
    width: 88%;
    height: auto;
    max-width: 460px;
    filter: drop-shadow(0 16px 40px rgba(0,0,0,0.5));
  }
  .cover-foot {
    max-width: 1100px;
    margin: 56px auto 0;
    font-family: var(--font-mono), monospace;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    color: #4d5664;
    text-align: center;
    position: relative;
  }

  /* Toolbar */
  .toolbar {
    max-width: 880px;
    margin: 0 auto;
    padding: 32px 48px 0;
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }
  .toolbar a, .toolbar button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 18px;
    border-radius: 10px;
    font-size: 13px;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    border: 1px solid rgba(255,255,255,0.10);
    background: #19202b;
    color: #f3f6fb;
    transition: all 0.18s;
    font-family: inherit;
  }
  .toolbar a:hover, .toolbar button:hover {
    border-color: #3a7bff;
    transform: translateY(-1px);
  }
  .toolbar .btn-print {
    background: #3a7bff;
    border-color: #3a7bff;
    color: white;
  }

  /* Prose */
  .prose {
    max-width: 880px;
    margin: 0 auto;
    padding: 56px 48px 80px;
    font-size: 16px;
    line-height: 1.7;
    color: #cdd5e0;
  }
  .prose > *:first-child { margin-top: 0; }

  .prose h1 {
    font-size: 38px;
    font-weight: 700;
    line-height: 1.1;
    letter-spacing: -0.02em;
    color: #f3f6fb;
    margin: 64px 0 24px;
    padding-top: 32px;
    border-top: 2px solid rgba(58, 123, 255, 0.4);
  }
  .prose h1:first-child { border-top: none; padding-top: 0; margin-top: 0; }

  .prose h2 {
    font-size: 28px;
    font-weight: 600;
    line-height: 1.2;
    letter-spacing: -0.02em;
    color: #f3f6fb;
    margin: 48px 0 18px;
  }
  .prose h3 {
    font-size: 21px;
    font-weight: 600;
    line-height: 1.3;
    letter-spacing: -0.01em;
    color: #f3f6fb;
    margin: 36px 0 14px;
  }
  .prose h4 {
    font-size: 17px;
    font-weight: 600;
    color: #b6c0cf;
    margin: 28px 0 10px;
  }
  .prose p {
    margin: 0 0 18px;
  }
  .prose strong { color: #f3f6fb; font-weight: 600; }
  .prose em { color: #b6c0cf; }
  .prose a {
    color: #3a7bff;
    text-decoration: none;
    border-bottom: 1px solid rgba(58, 123, 255, 0.4);
    transition: border-color 0.18s;
  }
  .prose a:hover { border-bottom-color: #3a7bff; }
  .prose ul, .prose ol {
    margin: 0 0 22px;
    padding-left: 24px;
  }
  .prose li { margin: 6px 0; }
  .prose ul li::marker { color: #3a7bff; }
  .prose ol li::marker { color: #7d8898; font-family: var(--font-mono), monospace; }

  .prose code {
    font-family: var(--font-mono), monospace;
    font-size: 13px;
    background: #19202b;
    color: #5a92ff;
    padding: 2px 6px;
    border-radius: 4px;
    border: 1px solid rgba(255,255,255,0.06);
  }
  .prose pre {
    background: #07090d;
    border: 1px solid rgba(255,255,255,0.10);
    border-radius: 10px;
    padding: 18px 20px;
    overflow-x: auto;
    margin: 22px 0;
  }
  .prose pre code {
    background: transparent;
    border: none;
    padding: 0;
    color: #cdd5e0;
  }

  .prose blockquote {
    border-left: 3px solid #3a7bff;
    background: rgba(58,123,255,0.06);
    margin: 24px 0;
    padding: 18px 22px;
    border-radius: 0 8px 8px 0;
    color: #cdd5e0;
  }
  .prose blockquote p { margin: 0 0 12px; }
  .prose blockquote p:last-child { margin-bottom: 0; }
  .prose blockquote strong { color: #5a92ff; }

  .prose hr {
    border: 0;
    border-top: 1px solid rgba(255,255,255,0.08);
    margin: 56px 0;
  }

  .prose table {
    width: 100%;
    border-collapse: collapse;
    margin: 24px 0;
    font-size: 14px;
    background: #11161f;
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid rgba(255,255,255,0.08);
  }
  .prose table thead { background: #07090d; }
  .prose table th {
    text-align: left;
    padding: 12px 16px;
    color: #f3f6fb;
    font-weight: 600;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    border-bottom: 1px solid rgba(58, 123, 255, 0.3);
  }
  .prose table td {
    padding: 14px 16px;
    color: #cdd5e0;
    border-bottom: 1px solid rgba(255,255,255,0.05);
    vertical-align: top;
  }
  .prose table tbody tr:last-child td { border-bottom: none; }
  .prose table tbody tr:hover { background: rgba(58, 123, 255, 0.04); }

  /* Footer */
  .page-foot {
    max-width: 880px;
    margin: 0 auto;
    padding: 32px 48px 64px;
    border-top: 1px solid rgba(255,255,255,0.06);
    text-align: center;
    font-family: var(--font-mono), monospace;
    font-size: 11px;
    color: #4d5664;
    text-transform: uppercase;
    letter-spacing: 0.16em;
  }
  .page-foot p { margin: 4px 0; }

  /* Responsive */
  @media (max-width: 768px) {
    .cover { padding: 56px 24px 48px; }
    .cover-grid { grid-template-columns: 1fr; gap: 40px; }
    .cover-visual { max-width: 320px; }
    .toolbar, .prose, .page-foot { padding-left: 24px; padding-right: 24px; }
    .prose { font-size: 15px; }
    .prose h1 { font-size: 30px; }
    .prose h2 { font-size: 24px; }
    .prose h3 { font-size: 19px; }
    .prose table { font-size: 13px; }
    .prose table th, .prose table td { padding: 10px 12px; }
  }

  /* Print styles → para generar PDF */
  @media print {
    .playbook-root { background: white; color: #0b0f15; }
    .toolbar { display: none; }
    .cover {
      background: white;
      border-bottom: 2px solid #0b0f15;
      padding: 40px;
      page-break-after: always;
    }
    .cover::before { display: none; }
    .cover-title, .cover-title-sub { color: #0b0f15; }
    .cover-tagline, .cover-table dd { color: #0b0f15; }
    .cover-table dt { color: #4d5664; }
    .cover-table dd { border-bottom-color: #d0d5dc; }
    .cover-visual::before { display: none; }
    .cover-image { filter: none; }
    .cover-foot { color: #7d8898; }
    .prose { color: #0b0f15; padding: 24px 40px; max-width: none; }
    .prose h1 { color: #0b0f15; border-top-color: #3a7bff; page-break-before: always; }
    .prose h1:first-child { page-break-before: avoid; }
    .prose h2, .prose h3, .prose h4, .prose strong { color: #0b0f15; }
    .prose em, .prose td { color: #2d3441; }
    .prose blockquote {
      background: #f3f6fb;
      color: #2d3441;
      page-break-inside: avoid;
    }
    .prose table {
      background: white;
      border-color: #d0d5dc;
      page-break-inside: avoid;
    }
    .prose table thead { background: #0b0f15; }
    .prose table th { color: white; border-bottom-color: #3a7bff; }
    .prose table td { color: #0b0f15; border-bottom-color: #e3e7ec; }
    .prose table tbody tr:hover { background: transparent; }
    .prose hr { border-top-color: #d0d5dc; margin: 32px 0; }
    .prose code { background: #f3f6fb; color: #3a7bff; border-color: #d0d5dc; }
    .page-foot { color: #4d5664; border-top-color: #d0d5dc; }
    @page { margin: 18mm 14mm; size: A4; }
  }
`;
