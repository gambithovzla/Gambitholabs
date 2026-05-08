"use client";

export default function PrintButton() {
  return (
    <button
      type="button"
      className="btn-print"
      onClick={() => window.print()}
    >
      Imprimir / Guardar PDF
    </button>
  );
}
