import React from "react";
import { Badge } from "@/components/ui/badge";
import { Sparkles, ShieldCheck, Layers, Sliders, SunMedium } from "lucide-react";

export function MaterialsQualitySection() {
  const materialsList = [
    {
      title: "Chapas 100% MDF Premium",
      description: "Densidade superior para cortes firmes sem esfarelamento, com lâminas melamínicas resistentes a riscos e de fácil limpeza.",
      icon: Layers,
    },
    {
      title: "MDF Ultra Hidrófugo (Verde)",
      description: "Proteção contra vapor e umidade constante em áreas críticas como cozinhas sob pia, lavanderias e banheiros.",
      icon: ShieldCheck,
    },
    {
      title: "Ferragens com Amortecimento",
      description: "Dobradiças clip-top e corrediças telescópicas/ocultas com pistões soft-close para abertura e fechamento suave sem impacto.",
      icon: Sliders,
    },
    {
      title: "Iluminação Cênica em LED",
      description: "Perfis de alumínio com difusor leitoso e fitas de LED de alta fidelidade de cor (CRI > 90) em tons acolhedores (3000K).",
      icon: SunMedium,
    },
  ];

  return (
    <section className="py-24 bg-[#FAF9F6] border-t border-[#E5DFD5] relative overflow-hidden scroll-mt-24" id="materiais">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Frame */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden border border-[#E5DFD5] bg-white shadow-2xl aspect-[4/3] sm:aspect-square">
              <img
                src="https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=1000&q=80"
                alt="Detalhe de marcenaria de alta qualidade Artzen"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[10px] font-bold uppercase tracking-widest bg-[#B58F48] text-white px-3 py-1 rounded-sm inline-block mb-2 shadow-xs">
                  Qualidade Construtiva
                </span>
                <p className="font-serif text-xl font-bold text-white">Acabamento Milimétrico & Borda Selada</p>
                <p className="text-xs text-[#F2EFE9] mt-1 font-light leading-relaxed">
                  Selamento de bordas com tecnologia de ponta para impedir infiltrações e garantir máxima durabilidade no clima serrano.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Description & Specs */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2 text-left">
            <Badge variant="gold" className="px-4 py-1.5 gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#B58F48]" />
              <span className="uppercase text-[11px] font-semibold tracking-wider text-[#8C6A2E]">Matéria-Prima & Engenharia</span>
            </Badge>

            <h2 className="fluid-h2 font-serif font-bold text-[#28231E] tracking-tight">
              O segredo da durabilidade dos nossos móveis sob medida
            </h2>

            <p className="fluid-lead text-[#5A524C] font-normal">
              Não abrimos mão de especificações nobres. Cada chapa, dobradiça, perfil de alumínio e fita de borda é escolhida para suportar o uso diário com elegância intacta por décadas.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {materialsList.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-6 rounded-2xl luxury-card-light space-y-2.5 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-3 text-[#B58F48]">
                      <Icon className="w-5 h-5 shrink-0" />
                      <h3 className="font-serif font-bold text-[#28231E] text-sm sm:text-base">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xs text-[#736B63] leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
