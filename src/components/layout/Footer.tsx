import React from "react";
import Link from "next/link";
import { COMPANY_DATA } from "@/data/company";
import { MapPin, Phone, Instagram, Facebook } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#211D19] text-[#FAF9F6] border-t border-[#E5DFD5] pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-white/10">
          
          {/* Brand Summary */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-widest text-[#FAF9F6]">
                ART<span className="text-[#DFCA9B]">ZEN</span>
              </span>
              <span className="block text-[10px] uppercase tracking-[0.25em] text-[#DFCA9B]/90 font-medium">
                Ambientes Planejados
              </span>
            </Link>
            <p className="text-xs text-[#FAF9F6]/70 leading-relaxed max-w-sm font-normal">
              Móveis planejados sob medida de alto padrão em Teresópolis - RJ. Projetos 3D personalizados, 100% MDF de alta densidade e montagem própria especializada.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={COMPANY_DATA.social.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-[#DFCA9B] hover:bg-[#B58F48] hover:text-white transition-colors"
                aria-label="Instagram da Artzen"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_DATA.social.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-[#DFCA9B] hover:bg-[#B58F48] hover:text-white transition-colors"
                aria-label="Facebook da Artzen"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#DFCA9B]">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-xs text-[#FAF9F6]/75 font-normal">
              <li>
                <a href="#ambientes" className="hover:text-[#DFCA9B] transition-colors">
                  Ambientes
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-[#DFCA9B] transition-colors">
                  Diferenciais 100% MDF
                </a>
              </li>
              <li>
                <a href="#metodo" className="hover:text-[#DFCA9B] transition-colors">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#materiais" className="hover:text-[#DFCA9B] transition-colors">
                  Materiais & Ferragens
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#DFCA9B] transition-colors">
                  Dúvidas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#DFCA9B]">
              Categorias de Projetos
            </h4>
            <ul className="space-y-2 text-xs text-[#FAF9F6]/70 font-normal">
              <li>Cozinhas Planejadas Sob Medida</li>
              <li>Dormitórios & Closets Inteligentes</li>
              <li>Salas de Estar & Home Theaters</li>
              <li>Banheiros & Lavabos Nobres</li>
              <li>Áreas Gourmet & Churrasqueiras</li>
              <li>Mobiliário Corporativo & Escritórios</li>
            </ul>
          </div>

          {/* Location & Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#DFCA9B]">
              Showroom Teresópolis
            </h4>
            <div className="space-y-2 text-xs text-[#FAF9F6]/75 font-normal">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#DFCA9B] shrink-0 mt-0.5" />
                <span>{COMPANY_DATA.address.fullAddressString}</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#DFCA9B] shrink-0" />
                <span>{COMPANY_DATA.contacts.whatsappDisplay}</span>
              </p>
              <p className="text-[11px] text-[#FAF9F6]/55 pt-1">
                Atendimento em toda a Região Serrana (Teresópolis, Nova Friburgo, Petrópolis) e Grande Rio.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FAF9F6]/55 gap-4 font-normal">
          <p>© {currentYear} {COMPANY_DATA.legalName}. Todos os direitos reservados.</p>
          <p>
            Artzen Ambientes Planejados • Teresópolis - RJ
          </p>
        </div>
      </div>
    </footer>
  );
}
