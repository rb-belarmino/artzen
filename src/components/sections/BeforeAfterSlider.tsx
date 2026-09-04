"use client";

import React, { useState, useRef, useCallback } from "react";
import { Badge } from "@/components/ui/badge";
import { Sparkles, MoveHorizontal } from "lucide-react";

export function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      let pos = (x / rect.width) * 100;
      if (pos < 5) pos = 5;
      if (pos > 95) pos = 95;
      setSliderPosition(pos);
    },
    []
  );

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging && e.buttons !== 1) return;
    handleMove(e.clientX);
  };

  return (
    <section className="py-20 bg-[#F9F8F6] border-y border-[#EFECE6] overflow-hidden" id="antes-depois">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <Badge variant="gold" className="px-3.5 py-1.5 gap-1.5 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transformação Real</span>
          </Badge>
          <h2 className="fluid-h2 font-serif font-bold text-[#3D2B1F] tracking-tight">
            Arraste para comparar: Planta Vazia vs. Ambiente Entregue
          </h2>
          <p className="fluid-lead text-[#736B63]">
            Veja a evolução de um espaço sem vida para uma cozinha integrada de alto padrão milimetricamente planejada.
          </p>
        </div>

        {/* Interactive Comparison Slider Frame */}
        <div className="max-w-4xl mx-auto">
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl border-4 border-white select-none cursor-ew-resize"
          >
            {/* "After" Image (Full Width Background) */}
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80"
              alt="Ambiente planejado Artzen entregue"
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
              draggable={false}
            />
            <div className="absolute top-5 right-5 z-20">
              <span className="bg-[#3D2B1F]/90 backdrop-blur-md text-[#C5A059] text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow-lg border border-[#C5A059]/30">
                Depois • Projeto Artzen
              </span>
            </div>

            {/* "Before" Image (Clipped with polygon) */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
            >
              <img
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=80"
                alt="Espaço antes do projeto planejado"
                className="absolute inset-0 w-full h-full object-cover object-center filter grayscale brightness-90 contrast-125"
                draggable={false}
              />
              <div className="absolute top-5 left-5 z-20">
                <span className="bg-black/70 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow-lg border border-white/20">
                  Antes • Planta Vazia
                </span>
              </div>
            </div>

            {/* Draggable Divider Line & Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(0,0,0,0.5)] z-30 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#3D2B1F] text-[#C5A059] border-3 border-white shadow-2xl flex items-center justify-center">
                <MoveHorizontal className="w-6 h-6 animate-pulse" />
              </div>
            </div>
          </div>

          {/* Micro Helper Text below slider */}
          <div className="flex items-center justify-between text-xs text-[#736B63] mt-4 px-2">
            <span>← Deslize para a esquerda</span>
            <span className="font-semibold text-[#3D2B1F]">Interaja com o controle central</span>
            <span>Deslize para a direita →</span>
          </div>
        </div>

      </div>
    </section>
  );
}
