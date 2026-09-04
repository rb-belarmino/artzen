import React from "react";
import { DIFFERENTIALS_DATA } from "@/data/differentials";
import { Badge } from "@/components/ui/badge";
import {
  Layers,
  Box,
  Wrench,
  UserCheck,
  Clock,
  ShieldCheck,
  Sparkles,
  Check,
} from "lucide-react";

export function DifferentialsSection() {
  const iconMap: Record<string, React.ElementType> = {
    Layers,
    Box,
    Wrench,
    UserCheck,
    Clock,
    ShieldCheck,
  };

  return (
    <section className="py-24 bg-[#F7F5F0] border-t border-[#E5DFD5] relative overflow-hidden" id="diferenciais">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="gold" className="px-4 py-1.5 gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#B58F48]" />
            <span className="uppercase text-[11px] font-semibold tracking-wider text-[#8C6A2E]">Por Que Escolher a Artzen</span>
          </Badge>
          <h2 className="fluid-h2 font-serif font-bold text-[#28231E] tracking-tight">
            Padrão de excelência em cada detalhe da marcenaria
          </h2>
          <p className="fluid-lead text-[#5A524C] font-normal">
            Unimos tecnologia de precisão milimétrica a um atendimento consultivo para entregar móveis que duram gerações.
          </p>
        </div>

        {/* Grid of Differentials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DIFFERENTIALS_DATA.map((diff) => {
            const Icon = iconMap[diff.iconName] || Layers;

            return (
              <div
                key={diff.id}
                className="luxury-card-light rounded-3xl p-8 flex flex-col justify-between space-y-5 transition-all duration-300 hover:-translate-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-[#B58F48]/10 border border-[#B58F48]/25 flex items-center justify-center text-[#B58F48] shadow-xs">
                    <Icon className="w-7 h-7" />
                  </div>
                  {diff.badge && (
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-[#B58F48]/10 text-[#8C6A2E] px-3 py-1 rounded-full border border-[#B58F48]/20">
                      {diff.badge}
                    </span>
                  )}
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-xl font-bold text-[#28231E]">
                    {diff.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#736B63] leading-relaxed font-normal">
                    {diff.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E5DFD5] flex items-center gap-2 text-xs font-semibold text-[#8C6A2E]">
                  <Check className="w-4 h-4 stroke-[2.5] text-[#B58F48]" />
                  <span>Garantia de Qualidade Artzen</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
