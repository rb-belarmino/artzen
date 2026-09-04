"use client";

import React, { useState } from "react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";
import { MessageCircle, Send, Sparkles, Check, Home, User } from "lucide-react";

export function QuickLeadForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [environmentType, setEnvironmentType] = useState("Cozinha Planejada");
  const [customNotes, setCustomNotes] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = buildWhatsAppUrl({
      name,
      phone,
      environmentType,
      customMessage: customNotes || undefined,
    });
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const environmentPills = [
    "Cozinha Planejada",
    "Dormitório & Closet",
    "Sala & Home Theater",
    "Área Gourmet",
    "Banheiro / Lavabo",
    "Corporativo / Office",
    "Casa / Apê Completo",
  ];

  return (
    <section className="py-20 bg-[#171412] border-y border-[#C9A96E]/20" id="orcamento-rapido">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="luxury-card rounded-3xl overflow-hidden shadow-2xl relative">
          
          {/* Header */}
          <div className="p-8 sm:p-10 border-b border-[#C9A96E]/20 relative overflow-hidden bg-gradient-to-r from-[#1C1916] to-[#24201C]">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#C9A96E]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 space-y-2">
              <span className="inline-flex items-center gap-2 text-xs font-bold text-[#C9A96E] uppercase tracking-widest">
                <Sparkles className="w-4 h-4" />
                Briefing Direto no WhatsApp
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#F5F2EB]">
                Solicite seu Projeto 3D Personalizado
              </h2>
              <p className="text-sm text-[#F5F2EB]/70 max-w-xl font-light">
                Escolha o ambiente do seu imóvel e fale diretamente com nossos arquitetos e designers de móveis planejados.
              </p>
            </div>
          </div>

          <div className="p-8 sm:p-10">
            <form onSubmit={handleSubmit} className="space-y-7">
              
              {/* Environment Pills */}
              <div>
                <label className="block text-xs font-bold text-[#DFCA9B] uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Home className="w-4 h-4 text-[#C9A96E]" />
                  1. Qual ambiente você deseja planejar?
                </label>
                <div className="flex flex-wrap gap-2.5">
                  {environmentPills.map((pill) => {
                    const isSelected = environmentType === pill;
                    return (
                      <button
                        key={pill}
                        type="button"
                        onClick={() => setEnvironmentType(pill)}
                        className={`text-xs px-4 py-2.5 rounded-xl font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                          isSelected
                            ? "bg-[#C9A96E] text-[#12100E] shadow-md shadow-[#C9A96E]/20 scale-102"
                            : "bg-[#1C1916] border border-[#C9A96E]/20 text-[#F5F2EB]/70 hover:bg-[#24201C] hover:text-[#F5F2EB]"
                        }`}
                      >
                        {isSelected && <Check className="w-3.5 h-3.5 text-[#12100E] stroke-[3]" />}
                        {pill}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Inputs */}
              <div>
                <label className="block text-xs font-bold text-[#DFCA9B] uppercase tracking-wider mb-3 flex items-center gap-2">
                  <User className="w-4 h-4 text-[#C9A96E]" />
                  2. Seus dados de contato
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      id="lead-name"
                      type="text"
                      required
                      placeholder="Seu nome completo"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full h-12 px-4 rounded-xl border border-[#C9A96E]/20 bg-[#1C1916] text-sm text-[#F5F2EB] placeholder:text-[#F5F2EB]/40 focus:outline-none focus:border-[#C9A96E] focus:ring-1 focus:ring-[#C9A96E] transition-all"
                    />
                  </div>

                  <div>
                    <input
                      id="lead-phone"
                      type="tel"
                      required
                      placeholder="Seu WhatsApp: (21) 9..."
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full h-12 px-4 rounded-xl border border-[#C9A96E]/20 bg-[#1C1916] text-sm text-[#F5F2EB] placeholder:text-[#F5F2EB]/40 focus:outline-none focus:border-[#C9A96E] focus:ring-1 focus:ring-[#C9A96E] transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label htmlFor="lead-notes" className="block text-xs font-semibold text-[#F5F2EB]/60 mb-2">
                  Observações ou medidas aproximadas (Opcional)
                </label>
                <textarea
                  id="lead-notes"
                  rows={2}
                  placeholder="Ex: Apartamento na Várzea em Teresópolis, preciso de torre quente e armários até o teto..."
                  value={customNotes}
                  onChange={(e) => setCustomNotes(e.target.value)}
                  className="w-full p-4 rounded-xl border border-[#C9A96E]/20 bg-[#1C1916] text-sm text-[#F5F2EB] placeholder:text-[#F5F2EB]/40 focus:outline-none focus:border-[#C9A96E] focus:ring-1 focus:ring-[#C9A96E] transition-all resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
                <p className="text-xs text-[#F5F2EB]/50 text-center sm:text-left">
                  🔒 Seus dados serão usados exclusivamente para a conversa do seu projeto.
                </p>
                <Button type="submit" variant="default" size="lg" className="w-full sm:w-auto shadow-xl hover:scale-102 transition-transform">
                  <Send className="w-4 h-4" />
                  <span>Enviar Briefing no WhatsApp</span>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
