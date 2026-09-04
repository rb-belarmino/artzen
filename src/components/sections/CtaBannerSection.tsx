import React from "react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";
import { MessageCircle, Sparkles, ArrowRight } from "lucide-react";
import { COMPANY_DATA } from "@/data/company";

export function CtaBannerSection() {
  return (
    <section className="py-24 bg-[#FAF9F6] text-[#28231E] relative overflow-hidden border-t border-[#E5DFD5]">
      {/* Background Architectural Project Texture with Soft Light Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-multiply pointer-events-none"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=80')`,
        }}
      />

      {/* Warm Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-radial from-[#B58F48]/15 via-[#DFCA9B]/10 to-transparent blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <span className="inline-flex items-center gap-2 text-xs font-bold text-[#8C6A2E] uppercase tracking-widest bg-[#B58F48]/10 border border-[#B58F48]/25 px-4 py-1.5 rounded-full backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-[#B58F48]" />
          Seu Imóvel com a Assinatura Artzen
        </span>

        <h2 className="fluid-h2 font-serif font-bold text-[#28231E] tracking-tight max-w-3xl mx-auto">
          Pronto para transformar sua casa com móveis planejados sob medida?
        </h2>

        <p className="fluid-lead text-[#5A524C] max-w-2xl mx-auto font-normal">
          Apresente sua planta, tire dúvidas de valores e receba uma consultoria exclusiva com renderização 3D detalhada.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button asChild variant="default" size="lg" className="w-full sm:w-auto shadow-2xl hover:scale-102 transition-transform text-base px-10">
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Solicitar Meu Projeto no WhatsApp</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </Button>
        </div>

        <p className="text-xs text-[#736B63] pt-2 font-normal">
          Showroom na {COMPANY_DATA.address.fullAddressString}. Atendimento residencial e corporativo de alto padrão.
        </p>
      </div>
    </section>
  );
}
