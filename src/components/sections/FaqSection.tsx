"use client";

import React from "react";
import { FAQ_DATA } from "@/data/faq";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { HelpCircle, MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function FaqSection() {
  return (
    <section className="py-24 bg-[#F7F5F0] border-t border-[#E5DFD5] relative overflow-hidden" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-14">
          <Badge variant="gold" className="px-4 py-1.5 gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#B58F48]" />
            <span className="uppercase text-[11px] font-semibold tracking-wider text-[#8C6A2E]">Perguntas Frequentes</span>
          </Badge>
          <h2 className="fluid-h2 font-serif font-bold text-[#28231E] tracking-tight">
            Tire Suas Dúvidas
          </h2>
          <p className="fluid-lead text-[#5A524C] font-normal">
            Tudo o que você precisa saber sobre o processo de orçamento, fabricação, montagem e garantias de fábrica.
          </p>
        </div>

        {/* Accordion Component */}
        <Accordion type="single" collapsible className="w-full space-y-4">
          {FAQ_DATA.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent className="text-[#5A524C]">{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Direct WhatsApp Callout */}
        <div className="mt-12 p-8 rounded-3xl luxury-card-light flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#B58F48]/10 border border-[#B58F48]/25 flex items-center justify-center text-[#B58F48] shrink-0">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <p className="font-serif font-bold text-[#28231E] text-base sm:text-lg">
                Tem alguma dúvida sobre sua planta ou ambiente?
              </p>
              <p className="text-xs text-[#736B63] font-normal mt-0.5">
                Nossa equipe de atendimento responde em poucos minutos no WhatsApp.
              </p>
            </div>
          </div>

          <Button asChild variant="default" size="default" className="w-full sm:w-auto shrink-0 shadow-lg hover:scale-102 transition-transform">
            <a
              href={buildWhatsAppUrl({
                customMessage: "Olá! Tenho uma dúvida sobre projeto de móveis planejados que não encontrei no site."
              })}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Falar com Designer</span>
            </a>
          </Button>
        </div>

      </div>
    </section>
  );
}
