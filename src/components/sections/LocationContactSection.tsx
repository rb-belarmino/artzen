import React from "react";
import { COMPANY_DATA } from "@/data/company";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Phone,
  Clock,
  Instagram,
  Navigation,
  MessageCircle,
  Sparkles,
} from "lucide-react";

export function LocationContactSection() {
  return (
    <section className="py-24 bg-[#FAF9F6] border-t border-[#E5DFD5] relative overflow-hidden scroll-mt-24" id="showroom">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="gold" className="px-4 py-1.5 gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#B58F48]" />
            <span className="uppercase text-[11px] font-semibold tracking-wider text-[#8C6A2E]">Showroom Teresópolis</span>
          </Badge>
          <h2 className="fluid-h2 font-serif font-bold text-[#28231E] tracking-tight">
            Venha tomar um café em nosso Showroom
          </h2>
          <p className="fluid-lead text-[#5A524C] font-normal">
            Conheça de perto as opções de MDF, puxadores, dobradiças amortecidas e a qualidade da nossa montagem.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Contact Details Card */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 luxury-card-light p-8 sm:p-10 rounded-3xl">
            <div className="space-y-6">
              <h3 className="font-serif text-2xl font-bold text-[#28231E]">
                Artzen Ambientes Planejados
              </h3>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#B58F48]/10 border border-[#B58F48]/25 flex items-center justify-center text-[#B58F48] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <strong className="block text-sm text-[#28231E]">Endereço</strong>
                  <p className="text-xs text-[#736B63] mt-1 leading-relaxed font-normal">
                    {COMPANY_DATA.address.street}, {COMPANY_DATA.address.number} - {COMPANY_DATA.address.complement}
                  </p>
                  <p className="text-xs text-[#736B63] font-normal">
                    {COMPANY_DATA.address.neighborhood}, {COMPANY_DATA.address.city} - {COMPANY_DATA.address.state}
                  </p>
                  <a
                    href={COMPANY_DATA.address.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#B58F48] hover:underline mt-2"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    Como chegar pelo Google Maps
                  </a>
                </div>
              </div>

              {/* Contacts */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#B58F48]/10 border border-[#B58F48]/25 flex items-center justify-center text-[#B58F48] shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <strong className="block text-sm text-[#28231E]">Telefone & WhatsApp</strong>
                  <p className="text-xs text-[#28231E] font-medium mt-1">
                    {COMPANY_DATA.contacts.whatsappDisplay}
                  </p>
                  <span className="text-[11px] text-[#25D366] font-semibold block mt-1">
                    ● Atendimento técnico online disponível
                  </span>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#B58F48]/10 border border-[#B58F48]/25 flex items-center justify-center text-[#B58F48] shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <strong className="block text-sm text-[#28231E]">Horário de Atendimento</strong>
                  {COMPANY_DATA.businessHours.map((bh) => (
                    <p key={bh.days} className="text-xs text-[#736B63] mt-1 font-normal">
                      <span className="font-semibold text-[#28231E]">{bh.days}:</span> {bh.hours}
                    </p>
                  ))}
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#B58F48]/10 border border-[#B58F48]/25 flex items-center justify-center text-[#B58F48] shrink-0 mt-0.5">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <strong className="block text-sm text-[#28231E]">Instagram Oficial</strong>
                  <a
                    href={COMPANY_DATA.social.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#B58F48] font-semibold hover:underline block mt-1"
                  >
                    {COMPANY_DATA.social.instagramHandle}
                  </a>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-6 border-t border-[#E5DFD5]">
              <Button asChild variant="default" size="lg" className="w-full shadow-lg hover:scale-102 transition-transform">
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Agendar Visita ao Showroom</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Right Column: Google Maps Embed */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-[#E5DFD5] bg-white shadow-2xl min-h-[400px] relative flex flex-col">
            <iframe
              title="Localização Artzen Ambientes Planejados Teresópolis"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.080512803867!2d-42.97341852378906!3d-22.426027121287903!2m3!1f0!2f0!3f0!32m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99b4aaeb571e0b%3A0x6bcfd30a473105f!2sAv.%20Feliciano%20Sodr%C3%A9%2C%20396%20-%20V%C3%A1rzea%2C%20Teres%C3%B3polis%20-%20RJ%2C%2025963-081!5e0!3m2!1spt-BR!2sbr!4v1709560000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px", flexGrow: 1 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
