"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

export default function WhatsAppFloat() {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Hablar por WhatsApp"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed right-7 bottom-7 z-50 flex items-center gap-[10px] font-semibold text-white rounded-full transition-all duration-200 overflow-hidden"
      style={{
        background: hovered ? "#2ee072" : "#25d366",
        padding: hovered ? "14px 18px 14px 14px" : "14px",
        boxShadow: "0 10px 30px -8px rgba(37,211,102,0.55), 0 1px 0 rgba(255,255,255,0.10) inset",
        whiteSpace: "nowrap",
        fontSize: 14,
      }}
    >
      <MessageCircle size={22} />
      <span
        style={{
          maxWidth: hovered ? 200 : 0,
          opacity: hovered ? 1 : 0,
          transition: "all 200ms ease-out",
          overflow: "hidden",
        }}
      >
        Hablar ahora
      </span>
    </a>
  );
}
