import React from "react";
import { PROCESS_DATA } from "@/data/process";
import { Badge } from "@/components/ui/badge";
import { Sparkles, CheckCircle2, Box, Layers, Cpu, Hammer } from "lucide-react";

export function ProcessTimelineSection() {
  const stepIcons = [Box, Layers, Cpu, Hammer];

  return (
    <section className="py-24 bg-[#FAF9F6] border-t border-[#E5DFD5] relative overflow-hidden scroll-mt-24" id="metodo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="gold" className="px-4 py-1.5 gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#B58F48]" />
            <span className="uppercase text-[11px] font-semibold tracking-wider text-[#8C6A2E]">Nosso Método em 4 Etapas</span>
          </Badge>
          <h2 className="fluid-h2 font-serif font-bold text-[#28231E] tracking-tight">
            Como transformamos sua ideia em realidade
          </h2>
          <p className="fluid-lead text-[#5A524C] font-normal">
            Um processo claro, transparente e sem surpresas do primeiro rascunho até a entrega das chaves dos seus armários.
          </p>
        </div>

        {/* 4-Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PROCESS_DATA.map((step) => {
            return (
              <div
                key={step.stepNumber}
                className="luxury-card-light rounded-3xl p-7 flex flex-col justify-between space-y-6 transition-all duration-300 hover:-translate-y-1.5"
              >
                {/* Step indicator top */}
                <div className="flex items-center justify-between">
                  <span className="font-serif text-3xl font-black text-[#B58F48]">
                    0{step.stepNumber}
                  </span>
                  <span className="text-[11px] font-bold tracking-wider uppercase bg-[#B58F48]/10 text-[#8C6A2E] px-3 py-1 rounded-full border border-[#B58F48]/20">
                    {step.stepLabel}
                  </span>
                </div>

                {/* Title & Description */}
                <div className="space-y-2.5">
                  <h3 className="font-serif text-lg font-bold text-[#28231E]">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#736B63] leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                {/* Deliverable Check */}
                <div className="pt-4 border-t border-[#E5DFD5] text-xs text-[#8C6A2E] font-medium flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B58F48] shrink-0 mt-0.5" />
                  <span>{step.deliverable}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
