"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { COMPANY_DATA } from "@/data/company";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";
import { MessageCircle, Menu, X, Phone, MapPin, Sparkles } from "lucide-react";

interface HeaderProps {
  initialCity?: string;
}

export function Header({ initialCity = "Teresópolis - RJ" }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Início", href: "#hero" },
    { label: "Projetos 3D", href: "#projects" },
    { label: "Ambientes", href: "#environments" },
    { label: "Diferenciais", href: "#differentials" },
    { label: "Processo", href: "#process" },
    { label: "Depoimentos", href: "#testimonials" },
    { label: "Dúvidas", href: "#faq" },
    { label: "Showroom", href: "#showroom" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAF9F6]/90 backdrop-blur-md border-b border-[#E5DFD5] transition-all">
      {/* Top micro-bar for trust & contact */}
      <div className="hidden sm:block border-b border-[#E5DFD5]/60 bg-[#F4F1EA]/80 py-1.5 px-4 sm:px-6 lg:px-8 text-xs text-[#5A524C]">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#B58F48]" />
              Showroom: {COMPANY_DATA.address.street}, {COMPANY_DATA.address.number} - {initialCity}
            </span>
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#B58F48]" />
              {COMPANY_DATA.contacts.phoneDisplay}
            </span>
            <span className="text-[#8C6A2E] font-semibold flex items-center gap-1.5 bg-[#B58F48]/10 px-2.5 py-0.5 rounded-full border border-[#B58F48]/20">
              <Sparkles className="w-3.5 h-3.5 text-[#B58F48]" />
              Projetos 3D 100% Personalizados
            </span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center group transition-opacity hover:opacity-90">
          <Image
            src="/images/logo-dark.png"
            alt="Artzen Ambientes Planejados"
            width={180}
            height={66}
            priority
            className="h-10 sm:h-12 w-auto object-contain"
          />
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
