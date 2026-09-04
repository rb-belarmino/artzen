"use client";

import React, { useState } from "react";
import Link from "next/link";
import { COMPANY_DATA } from "@/data/company";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";
import { MessageCircle, Menu, X, Phone, MapPin, Sparkles } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Ambientes", href: "#ambientes" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Como Funciona", href: "#metodo" },
    { label: "Materiais", href: "#materiais" },
    { label: "Dúvidas", href: "#faq" },
    { label: "Showroom", href: "#localizacao" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#E5DFD5] bg-white/90 backdrop-blur-xl transition-all">
      {/* Top micro announcement bar */}
      <div className="hidden md:flex w-full bg-[#F7F5F0] text-[#736B63] text-xs py-2 px-4 justify-between items-center tracking-wider border-b border-[#E5DFD5]">
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
          <div className="flex items-center gap-2 text-[#5A524C]">
            <MapPin className="w-3.5 h-3.5 text-[#B58F48]" />
            <span>Showroom: {COMPANY_DATA.address.fullAddressString}</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-[#5A524C] font-medium">
              <Phone className="w-3.5 h-3.5 text-[#B58F48]" />
              {COMPANY_DATA.contacts.whatsappDisplay}
            </span>
            <span className="text-[#8C6A2E] font-semibold flex items-center gap-1.5 bg-[#B58F48]/10 px-2.5 py-0.5 rounded-full border border-[#B58F48]/20">
              <Sparkles className="w-3 h-3 text-[#B58F48]" />
              Projetos 3D 100% Personalizados
            </span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link href="/" className="flex flex-col items-start group">
          <div className="flex items-center gap-2">
            <span className="font-serif text-2xl sm:text-3xl font-bold tracking-widest text-[#28231E]">
              ART<span className="text-[#B58F48]">ZEN</span>
            </span>
          </div>
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#8C6A2E] font-semibold -mt-1">
            Ambientes Planejados
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-semibold uppercase tracking-wider text-[#5A524C] hover:text-[#B58F48] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#B58F48] hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Button
            asChild
            variant="default"
            size="default"
            className="hidden sm:inline-flex shadow-md hover:scale-102 transition-transform"
          >
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Solicitar Orçamento</span>
            </a>
          </Button>

          {/* Mobile hamburger menu button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden inline-flex items-center justify-center p-2.5 rounded-xl text-[#28231E] bg-[#F4F1EA] border border-[#E5DFD5] hover:bg-[#ECE7DC] focus:outline-none cursor-pointer"
            aria-expanded={mobileMenuOpen}
            aria-label="Abrir menu principal"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-[#B58F48]" />
            ) : (
              <Menu className="h-6 w-6 text-[#B58F48]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#E5DFD5] bg-white px-4 pt-2 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200 shadow-xl">
          <nav className="flex flex-col space-y-1 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2.5 rounded-xl text-sm font-medium text-[#28231E] hover:bg-[#F4F1EA] hover:text-[#B58F48] transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-4 border-t border-[#E5DFD5] flex flex-col gap-3">
            <Button asChild variant="default" size="lg" className="w-full">
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Solicitar Orçamento no WhatsApp</span>
              </a>
            </Button>
            <p className="text-xs text-center text-[#736B63] flex items-center justify-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#B58F48]" />
              {COMPANY_DATA.address.city} - {COMPANY_DATA.address.state}
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
