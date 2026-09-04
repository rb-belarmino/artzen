"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Sparkles, MessageCircle, Sun, Moon, Lightbulb, Check } from "lucide-react";

export function CustomFurnitureVisualizer() {
  const [activeMood, setActiveMood] = useState<"day" | "warm" | "night">("warm");
  const [selectedWood, setSelectedWood] = useState<string>("carvalho");

  const woods = [
    {
      id: "carvalho",
      name: "Carvalho Natural",
      tone: "Aconchegante & Nobre",
      color: "#8C6239",
      imageDay: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "nogal",
      name: "Nogal Escuro Imperial",
      tone: "Sofisticação & Luxo",
      color: "#4A3222",
      imageDay: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "freijo",
      name: "Freijó Brasileiro",
      tone: "Contemporâneo & Leve",
      color: "#A88358",
      imageDay: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const currentWood = woods.find((w) => w.id === selectedWood) || woods[0];

  return (
    <section className="py-20 bg-white" id="simulador-iluminacao">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <Badge variant="gold" className="px-3.5 py-1.5 gap-1.5 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Simulador Cênico</span>
          </Badge>
          <h2 className="fluid-h2 font-serif font-bold text-[#3D2B1F] tracking-tight">
            Veja como a iluminação em LED transforma o mesmo móvel
          </h2>
          <p className="fluid-lead text-[#736B63]">
            Alterne o padrão amadeirado e a temperatura de luz para vivenciar a atmosfera do seu novo ambiente.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          
          {/* Visual Interactive Viewport */}
          <div className="lg:col-span-8 relative">
            <div className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl border-4 border-[#F9F8F6] bg-black">
              
              {/* Base Image */}
              <img
                src={currentWood.imageDay}
                alt={currentWood.name}
                className={`w-full h-full object-cover object-center transition-all duration-700 ${
                  activeMood === "night"
                    ? "brightness-75 contrast-125"
                    : activeMood === "warm"
                    ? "brightness-95 sepia-[0.15]"
                    : "brightness-105"
                }`}
              />

              {/* Lighting Glow Filter Layer */}
              <div
                className={`absolute inset-0 transition-opacity duration-700 pointer-events-none ${
                  activeMood === "warm"
                    ? "bg-gradient-to-t from-[#C5A059]/35 via-[#8C6239]/15 to-transparent opacity-90"
                    : activeMood === "night"
                    ? "bg-gradient-to-t from-[#0F172A]/70 via-[#3D2B1F]/30 to-transparent opacity-85"
                    : "opacity-0"
                }`}
              />

              {/* Status Badge in Viewport */}
              <div className="absolute top-4 left-4 z-20 flex gap-2">
                <span className="bg-[#3D2B1F]/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full border border-white/20">
                  {currentWood.name}
                </span>
                <span className="bg-[#C5A059] text-[#3D2B1F] text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                  {activeMood === "warm"
                    ? "💡 LED Quente 3000K Ativado"
                    : activeMood === "night"
                    ? "🌙 Modo Noturno / Conforto"
                    : "☀️ Luz Natural do Dia"}
                </span>
              </div>
            </div>
          </div>

          {/* Interactive Controls Panel */}
          <div className="lg:col-span-4 space-y-6 bg-[#F9F8F6] p-7 rounded-3xl border border-[#EFECE6] shadow-sm">
            
            {/* Wood Swatches Control */}
            <div className="space-y-3">
              <label className="block text-xs font-bold text-[#3D2B1F] uppercase tracking-wider">
                1. Escolha a Lâmina Amadeirada:
              </label>
              <div className="space-y-2">
                {woods.map((wood) => {
                  const isSelected = selectedWood === wood.id;
                  return (
                    <button
                      key={wood.id}
                      type="button"
                      onClick={() => setSelectedWood(wood.id)}
                      className={`w-full flex items-center justify-between p-3 rounded-xl border transition-all cursor-pointer ${
                        isSelected
                          ? "bg-white border-[#8C6239] shadow-sm ring-1 ring-[#8C6239]"
                          : "bg-white/60 border-[#EFECE6] hover:bg-white"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className="w-5 h-5 rounded-full border border-black/15 shadow-xs"
                          style={{ backgroundColor: wood.color }}
                        />
                        <div className="text-left">
                          <p className="text-xs font-bold text-[#3D2B1F]">{wood.name}</p>
                          <p className="text-[10px] text-[#736B63]">{wood.tone}</p>
                        </div>
                      </div>
                      {isSelected && <Check className="w-4 h-4 text-[#8C6239]" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Lighting Mood Toggle */}
            <div className="space-y-3 pt-2 border-t border-[#EFECE6]">
              <label className="block text-xs font-bold text-[#3D2B1F] uppercase tracking-wider">
                2. Simular Cenário de Luz:
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setActiveMood("day")}
                  className={`flex flex-col items-center justify-center p-2.5 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                    activeMood === "day"
                      ? "bg-[#3D2B1F] text-white border-[#3D2B1F] shadow-sm"
                      : "bg-white border-[#EFECE6] text-[#736B63] hover:bg-[#EFECE6]"
                  }`}
                >
                  <Sun className="w-4 h-4 mb-1 text-[#C5A059]" />
                  <span>Dia</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveMood("warm")}
                  className={`flex flex-col items-center justify-center p-2.5 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                    activeMood === "warm"
                      ? "bg-[#3D2B1F] text-white border-[#3D2B1F] shadow-sm"
                      : "bg-white border-[#EFECE6] text-[#736B63] hover:bg-[#EFECE6]"
                  }`}
                >
                  <Lightbulb className="w-4 h-4 mb-1 text-[#C5A059]" />
                  <span>LED 3000K</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveMood("night")}
                  className={`flex flex-col items-center justify-center p-2.5 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                    activeMood === "night"
                      ? "bg-[#3D2B1F] text-white border-[#3D2B1F] shadow-sm"
                      : "bg-white border-[#EFECE6] text-[#736B63] hover:bg-[#EFECE6]"
                  }`}
                >
                  <Moon className="w-4 h-4 mb-1 text-[#C5A059]" />
                  <span>Noite</span>
                </button>
              </div>
            </div>

            {/* Direct CTA */}
            <div className="pt-3 border-t border-[#EFECE6]">
              <Button asChild variant="whatsapp" size="default" className="w-full shadow-md">
                <a
                  href={buildWhatsAppUrl({
                    customMessage: `Olá! Adorei a combinação da lâmina ${currentWood.name} com iluminação cênica e gostaria de simular no meu projeto.`
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Quero Essa Combinação</span>
                </a>
              </Button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
