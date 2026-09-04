"use client";

import React, { useState, useEffect } from "react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { MessageCircle, X } from "lucide-react";

export function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    // Show polite tooltip after 4 seconds if not closed
    const timer = setTimeout(() => {
      if (!hasInteracted) {
        setShowTooltip(true);
      }
    }, 4000);
    return () => clearTimeout(timer);
  }, [hasInteracted]);

  return (
    <aside aria-label="Atendimento direto no WhatsApp" className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {showTooltip && (
        <div className="bg-white border border-[#EFECE6] p-3 rounded-2xl shadow-xl max-w-xs animate-in fade-in slide-in-from-bottom-2 duration-300 relative flex items-start gap-2.5">
          <button
            type="button"
            onClick={() => {
              setShowTooltip(false);
              setHasInteracted(true);
            }}
            className="absolute -top-2 -right-2 bg-[#F9F8F6] border border-[#EFECE6] text-[#736B63] hover:text-[#3D2B1F] rounded-full p-1 cursor-pointer shadow-xs"
            aria-label="Fechar mensagem"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="w-2.5 h-2.5 rounded-full bg-[#25D366] shrink-0 mt-1.5 animate-pulse" />
          <div>
            <p className="text-xs font-semibold text-[#3D2B1F]">
              Planejando seus móveis sob medida?
            </p>
            <p className="text-[11px] text-[#736B63] mt-0.5">
              Fale agora com nosso time no WhatsApp e tire suas dúvidas!
            </p>
          </div>
        </div>
      )}

      <a
        href={buildWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => setHasInteracted(true)}
        className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-lg hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300"
        aria-label="Conversar pelo WhatsApp da Artzen"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-[#C5A059] border-2 border-white"></span>
        </span>
        <MessageCircle className="w-7 h-7 fill-current" />
      </a>
    </aside>
  );
}
