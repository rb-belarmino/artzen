"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Sparkles, MessageCircle, Calculator, Check, ArrowRight, ShieldCheck } from "lucide-react";

export function BudgetEstimator() {
  const [selectedRooms, setSelectedRooms] = useState<string[]>(["Cozinha"]);
  const [propertyType, setPropertyType] = useState<"apartamento" | "casa" | "comercial">("apartamento");
  const [finishLevel, setFinishLevel] = useState<"standard" | "premium" | "ultra">("premium");

  const roomsList = [
    { id: "Cozinha", label: "Cozinha Integrada / Tradicional" },
    { id: "Dormitório Master", label: "Suíte Master & Painel de Cama" },
    { id: "Closet", label: "Closet com Portas Reflecta / Aberto" },
    { id: "Sala de Estar / Home", label: "Home Theater & Painel TV" },
    { id: "Área Gourmet", label: "Área Gourmet & Churrasqueira" },
    { id: "Banheiro / Lavabo", label: "Gabinetes & Espelheiros" },
    { id: "Home Office", label: "Escritório / Estante de Livros" },
  ];

  const toggleRoom = (roomId: string) => {
    setSelectedRooms((prev) =>
      prev.includes(roomId)
        ? prev.length > 1
          ? prev.filter((r) => r !== roomId)
          : prev
        : [...prev, roomId]
    );
  };

  const getEstimatedDays = () => {
    const count = selectedRooms.length;
    if (count <= 1) return "25 a 30 dias úteis";
    if (count <= 3) return "35 a 45 dias úteis";
    return "45 a 60 dias úteis";
  };

  const handleConsultWhatsApp = () => {
    const summary = `Olá! Realizei uma simulação no site para: ${selectedRooms.join(", ")}, tipo de imóvel: ${propertyType}, padrão de acabamento: ${finishLevel}. Gostaria de receber um orçamento oficial com projeto 3D.`;
    window.open(buildWhatsAppUrl({ customMessage: summary }), "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-20 bg-[#F9F8F6] border-t border-[#EFECE6]" id="simulador-planejado">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <Badge variant="gold" className="px-3.5 py-1.5 gap-1.5 shadow-2xs">
            <Calculator className="w-3.5 h-3.5" />
            <span>Simulador de Ambientes</span>
          </Badge>
          <h2 className="fluid-h2 font-serif font-bold text-[#3D2B1F] tracking-tight">
            Personalize seu pacote de móveis sob medida
          </h2>
          <p className="fluid-lead text-[#736B63]">
            Selecione os cômodos do seu imóvel para gerar uma estimativa de prazo e receber um projeto 3D dedicado.
          </p>
        </div>

        {/* Card Simulator Container */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl border border-[#EFECE6] shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column: Choices */}
            <div className="lg:col-span-7 p-6 sm:p-10 space-y-8">
              
              {/* 1. Imóvel */}
              <div className="space-y-3">
                <label className="block text-xs font-bold text-[#3D2B1F] uppercase tracking-wider">
                  1. Tipo de Imóvel:
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {(["apartamento", "casa", "comercial"] as const).map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setPropertyType(type)}
                      className={`py-2.5 px-3 rounded-xl border text-xs font-semibold capitalize transition-all cursor-pointer ${
                        propertyType === type
                          ? "bg-[#3D2B1F] text-white border-[#3D2B1F] shadow-sm"
                          : "bg-[#F9F8F6] border-[#EFECE6] text-[#736B63] hover:bg-[#EFECE6]"
                      }`}
                    >
                      {type === "comercial" ? "Comercial" : type}
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Seleção de Ambientes */}
              <div className="space-y-3">
                <label className="block text-xs font-bold text-[#3D2B1F] uppercase tracking-wider flex items-center justify-between">
                  <span>2. Selecione os Ambientes:</span>
                  <span className="text-[11px] font-normal text-[#8C6239]">
                    ({selectedRooms.length} selecionado{selectedRooms.length > 1 ? "s" : ""})
                  </span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {roomsList.map((room) => {
                    const isSelected = selectedRooms.includes(room.id);
                    return (
                      <button
                        key={room.id}
                        type="button"
                        onClick={() => toggleRoom(room.id)}
                        className={`flex items-center justify-between p-3 rounded-xl border text-left text-xs transition-all cursor-pointer ${
                          isSelected
                            ? "bg-[#3D2B1F] text-white border-[#3D2B1F] shadow-xs font-medium"
                            : "bg-[#F9F8F6] border-[#EFECE6] text-[#3D2B1F] hover:bg-white"
                        }`}
                      >
                        <span className="truncate pr-2">{room.label}</span>
                        <span
                          className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                            isSelected ? "bg-[#C5A059] text-[#3D2B1F]" : "border border-[#8C6239]/40"
                          }`}
                        >
                          {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 3. Padrão de Acabamento */}
              <div className="space-y-3">
                <label className="block text-xs font-bold text-[#3D2B1F] uppercase tracking-wider">
                  3. Padrão de Ferragens & Acabamentos:
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {[
                    { id: "standard", label: "Classic", desc: "100% MDF" },
                    { id: "premium", label: "Elegance", desc: "+ Soft Close" },
                    { id: "ultra", label: "Imperial", desc: "+ Vidros e LED" },
                  ].map((level) => (
                    <button
                      key={level.id}
                      type="button"
                      onClick={() => setFinishLevel(level.id as any)}
                      className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                        finishLevel === level.id
                          ? "bg-[#8C6239] text-white border-[#8C6239] shadow-sm ring-2 ring-[#8C6239]/20"
                          : "bg-[#F9F8F6] border-[#EFECE6] text-[#3D2B1F] hover:bg-white"
                      }`}
                    >
                      <p className="text-xs font-bold">{level.label}</p>
                      <p className={`text-[10px] ${finishLevel === level.id ? "text-white/80" : "text-[#736B63]"}`}>
                        {level.desc}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Live Summary & Direct Proposal */}
            <div className="lg:col-span-5 bg-[#3D2B1F] text-white p-6 sm:p-10 flex flex-col justify-between space-y-6 relative">
              <div className="space-y-5">
                <div className="flex items-center gap-2 text-[#C5A059] text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-4 h-4" />
                  <span>Resumo do Pacote Artzen</span>
                </div>

                <div className="space-y-3 border-b border-white/10 pb-5">
                  <p className="text-xs text-[#EFECE6]/70">Ambientes incluídos no projeto:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedRooms.map((room) => (
                      <span
                        key={room}
                        className="text-[11px] font-medium bg-white/10 px-2.5 py-1 rounded-md text-[#EFECE6] border border-white/10"
                      >
                        {room}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-[#EFECE6]/70">Prazos de Entrega:</span>
                    <span className="font-bold text-white">{getEstimatedDays()}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-[#EFECE6]/70">Garantia Técnica:</span>
                    <span className="font-bold text-[#C5A059]">5 Anos de Fábrica</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-[#EFECE6]/70">Projeto 3D Executivo:</span>
                    <span className="font-bold text-[#25D366]">Incluso sem Custo</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-[#EFECE6]/80 flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <span>
                    Condições especiais de pagamento com parcelamento facilitado em Teresópolis - RJ.
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <div>
                <Button
                  onClick={handleConsultWhatsApp}
                  variant="whatsapp"
                  size="lg"
                  className="w-full shadow-xl hover:scale-102 transition-transform text-sm font-bold"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Receber Proposta Completa</span>
                </Button>
                <p className="text-[10px] text-center text-[#EFECE6]/60 mt-2">
                  Nossa equipe entrará em contato para agendar a apresentação 3D.
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
