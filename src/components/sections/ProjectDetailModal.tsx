"use client";

import React, { useState } from "react";
import { EnvironmentItem } from "@/data/environments";
import { buildEnvironmentQuoteUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  MessageCircle,
  Check,
  Layers,
  Wrench,
  Lightbulb,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";

interface ProjectDetailModalProps {
  project: EnvironmentItem | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProjectDetailModal({
  project,
  open,
  onOpenChange,
}: ProjectDetailModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!project) return null;

  const allImages = [project.image, ...project.additionalImages];

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl p-0 overflow-hidden bg-white border border-[#E5DFD5] rounded-3xl shadow-2xl text-[#28231E]">
        
        {/* Modal Gallery Visual Frame with Carousel Navigation */}
        <div className="relative aspect-[16/10] bg-[#FAF9F6] overflow-hidden group">
          <img
            src={allImages[activeImageIndex] || project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center transition-all duration-500"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70 pointer-events-none" />

          {/* Navigation Arrows */}
          {allImages.length > 1 && (
            <>
              <button
                type="button"
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-[#B58F48] hover:text-white text-white flex items-center justify-center shadow-lg transition-all cursor-pointer backdrop-blur-md border border-white/20"
                aria-label="Imagem anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-[#B58F48] hover:text-white text-white flex items-center justify-center shadow-lg transition-all cursor-pointer backdrop-blur-md border border-white/20"
                aria-label="Próxima imagem"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {/* Top Badge */}
          <div className="absolute top-4 left-4 flex gap-2">
            <Badge variant="gold" className="shadow-md">
              {project.categoryLabel}
            </Badge>
            <span className="text-[11px] font-bold text-white bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
              {activeImageIndex + 1} / {allImages.length}
            </span>
          </div>
        </div>

        {/* Thumbnail Selector */}
        {allImages.length > 1 && (
          <div className="flex gap-2.5 px-6 pt-3 overflow-x-auto no-scrollbar">
            {allImages.map((img, idx) => (
              <button
                key={img}
                type="button"
                onClick={() => setActiveImageIndex(idx)}
                className={`relative w-20 h-14 rounded-xl overflow-hidden border-2 transition-all cursor-pointer shrink-0 ${
                  activeImageIndex === idx
                    ? "border-[#B58F48] ring-2 ring-[#B58F48]/40 scale-102"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <img src={img} alt="Miniatura" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}

        {/* Modal Content Details */}
        <div className="p-6 sm:p-8 space-y-6">
          <DialogHeader>
            <DialogTitle className="text-2xl font-serif font-bold text-[#28231E] tracking-tight">
              {project.title}
            </DialogTitle>
            <DialogDescription className="text-xs sm:text-sm text-[#736B63] mt-1 leading-relaxed font-normal">
              {project.fullDescription}
            </DialogDescription>
          </DialogHeader>

          {/* Highlights */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#8C6A2E] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#B58F48]" />
              Destaques do Projeto
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#28231E] bg-[#B58F48]/10 border border-[#B58F48]/20 px-3.5 py-1 rounded-full"
                >
                  <Check className="w-3.5 h-3.5 text-[#B58F48]" />
                  {highlight}
                </span>
              ))}
            </div>
          </div>

          {/* Technical Specifications Grid (Ficha Técnica) */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#8C6A2E] flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#B58F48]" />
              Ficha Técnica do Mobiliário
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 p-5 rounded-2xl bg-[#F7F5F0] border border-[#E5DFD5] text-xs">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#B58F48]/10 border border-[#B58F48]/20 flex items-center justify-center text-[#B58F48] shrink-0">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <strong className="block text-[#28231E]">Material & Lâmina:</strong>
                  <span className="text-[#736B63] leading-relaxed font-normal">{project.specs.material}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#B58F48]/10 border border-[#B58F48]/20 flex items-center justify-center text-[#B58F48] shrink-0">
                  <Wrench className="w-4 h-4" />
                </div>
                <div>
                  <strong className="block text-[#28231E]">Ferragens & Trilhos:</strong>
                  <span className="text-[#736B63] leading-relaxed font-normal">{project.specs.hardware}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#B58F48]/10 border border-[#B58F48]/20 flex items-center justify-center text-[#B58F48] shrink-0">
                  <Lightbulb className="w-4 h-4" />
                </div>
                <div>
                  <strong className="block text-[#28231E]">Iluminação Embutida:</strong>
                  <span className="text-[#736B63] leading-relaxed font-normal">{project.specs.lighting}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#B58F48]/10 border border-[#B58F48]/20 flex items-center justify-center text-[#B58F48] shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <strong className="block text-[#28231E]">Solução Sob Medida:</strong>
                  <span className="text-[#736B63] leading-relaxed font-normal">{project.specs.customFeature}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#E5DFD5]">
            <p className="text-xs text-[#736B63] text-center sm:text-left font-normal">
              Deseja um projeto adaptado para o tamanho exato da sua casa?
            </p>
            <Button asChild variant="default" size="lg" className="w-full sm:w-auto shadow-xl hover:scale-102 transition-transform">
              <a
                href={buildEnvironmentQuoteUrl(project.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Quero um projeto como este</span>
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
