import React from "react";
import { COMPANY_DATA } from "@/data/company";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Sparkles, CheckCircle2, ShieldCheck, ArrowDown } from "lucide-react";

export function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden bg-[#FAF9F6] pt-12 pb-20 sm:pt-20 sm:pb-28 lg:pt-24 lg:pb-32">
      {/* Light Architectural Background with Subtle Furniture/Interior Overlay Texture */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-12 mix-blend-multiply pointer-events-none"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80')`,
        }}
      />

      {/* Elegant Architectural Grid & Warm Sun Glows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(181,143,72,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(181,143,72,0.06)_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_20%,#000_70%,transparent_100%)] pointer-events-none" />
      
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-radial from-[#B58F48]/10 via-transparent to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-radial from-[#DFCA9B]/20 via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          {/* Left Column: Value Proposition & Copy */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 sm:space-y-8 text-left z-10">
            
            <Badge variant="gold" className="px-4 py-1.5 gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#B58F48]" />
              <span className="font-semibold tracking-wider uppercase text-[11px] text-[#8C6A2E]">
                Móveis Planejados de Alto Padrão em Teresópolis - RJ
              </span>
            </Badge>

            <h1 className="fluid-h1 font-serif font-bold text-[#28231E] tracking-tight">
              A elegância de viver em um ambiente{" "}
              <span className="gold-gradient-text italic font-normal">
                planejado exclusivamente
              </span>{" "}
              para você.
            </h1>

            <p className="fluid-lead text-[#5A524C] max-w-2xl font-normal">
              Projetos sob medida em <strong>100% MDF de alta densidade</strong>, ferragens de precisão com amortecimento e soluções arquitetônicas que valorizam seu imóvel.
            </p>

            {/* Micro Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full max-w-lg pt-1">
              <div className="flex items-center gap-3 text-xs sm:text-sm text-[#28231E] font-semibold luxury-glass-light p-3.5 rounded-2xl">
                <CheckCircle2 className="w-4 h-4 text-[#B58F48] shrink-0" />
                <span>Simulação 3D fotorrealista inclusa</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-[#28231E] font-semibold luxury-glass-light p-3.5 rounded-2xl">
                <ShieldCheck className="w-4 h-4 text-[#B58F48] shrink-0" />
                <span>5 Anos de Garantia & Montagem Própria</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-3">
              <Button asChild variant="default" size="lg" className="w-full sm:w-auto hover:scale-102 transition-transform shadow-xl">
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Solicitar Orçamento no WhatsApp</span>
                </a>
              </Button>

              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <a href="#ambientes" className="flex items-center justify-center gap-2">
                  <span>Conhecer Ambientes</span>
                  <ArrowDown className="w-4 h-4 text-[#B58F48]" />
                </a>
              </Button>
            </div>

            {/* Social Proof */}
            <div className="pt-4 border-t border-[#E5DFD5] w-full max-w-lg flex items-center gap-4">
              <div className="flex -space-x-2 overflow-hidden">
                <img className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80" alt="Cliente Artzen" />
                <img className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80" alt="Cliente Artzen" />
                <img className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80" alt="Cliente Artzen" />
              </div>
              <div className="text-xs text-[#736B63]">
                <p className="font-bold text-[#28231E]">Excelência reconhecida em Teresópolis</p>
                <p className="text-[#8C6A2E] font-medium">Mais de 500+ lares e escritórios transformados</p>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Golden Aura */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#B58F48]/20 via-[#DFCA9B]/30 to-transparent blur-2xl" />
              
              <div className="relative rounded-3xl overflow-hidden border border-[#E5DFD5] bg-white shadow-2xl">
                <div className="relative aspect-[4/3] sm:aspect-[16/12] overflow-hidden group">
                  <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                    alt="Cozinha de alto padrão planejada pela Artzen"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <span className="inline-block bg-[#B58F48] text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm mb-2 shadow-xs">
                      Conceito Exclusivo
                    </span>
                    <p className="font-serif text-xl font-bold text-white leading-tight">
                      Cozinha Integrada Aurora & Ilha Gourmet
                    </p>
                    <p className="text-xs text-[#F2EFE9] mt-1 font-light">
                      Lâmina Carvalho Nobre, ferragens com amortecimento e iluminação embutida
                    </p>
                  </div>
                </div>

                {/* Bottom Showroom Tag */}
                <div className="p-4 bg-white border-t border-[#E5DFD5] flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-[#28231E]">Showroom Artzen</p>
                    <p className="text-[11px] text-[#736B63]">{COMPANY_DATA.address.city} - {COMPANY_DATA.address.state}</p>
                  </div>
                  <a
                    href="#localizacao"
                    className="text-xs font-semibold text-[#B58F48] hover:underline"
                  >
                    Ver Localização →
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
