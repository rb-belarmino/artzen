"use client";

import React, { useState } from "react";
import {
  ENVIRONMENTS_DATA,
  CATEGORIES_FILTER,
  EnvironmentCategory,
  EnvironmentItem,
} from "@/data/environments";
import { ProjectDetailModal } from "./ProjectDetailModal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Sparkles, ArrowRight, Layers } from "lucide-react";

export function EnvironmentsGallerySection() {
  const [activeCategory, setActiveCategory] = useState<EnvironmentCategory>("todos");
  const [selectedProject, setSelectedProject] = useState<EnvironmentItem | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const filteredProjects =
    activeCategory === "todos"
      ? ENVIRONMENTS_DATA
      : ENVIRONMENTS_DATA.filter((item) => item.category === activeCategory);

  const handleOpenModal = (project: EnvironmentItem) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  return (
    <section className="py-24 bg-[#FAF9F6] relative overflow-hidden scroll-mt-24" id="ambientes">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-radial from-[#B58F48]/10 via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <Badge variant="gold" className="px-4 py-1.5 gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#B58F48]" />
            <span className="uppercase text-[11px] font-semibold tracking-wider text-[#8C6A2E]">Portfólio de Ambientes</span>
          </Badge>
          <h2 className="fluid-h2 font-serif font-bold text-[#28231E] tracking-tight">
            Inspirações de alto padrão para transformar seu imóvel
          </h2>
          <p className="fluid-lead text-[#5A524C] font-normal">
            Navegue por nossas criações sob medida. Clique em qualquer projeto para abrir os detalhes, materiais e opções de personalização.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2.5 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {CATEGORIES_FILTER.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`whitespace-nowrap px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#B58F48] text-white shadow-md shadow-[#B58F48]/25 scale-105 font-bold"
                    : "bg-white text-[#5A524C] border border-[#E5DFD5] hover:bg-[#F4F1EA] hover:text-[#28231E]"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              onClick={() => handleOpenModal(project)}
              className="group relative flex flex-col rounded-3xl overflow-hidden luxury-card-light transition-all duration-500 cursor-pointer hover:-translate-y-2 hover:border-[#B58F48]/60"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#F4F1EA]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700"
                  loading="lazy"
                />
                
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />

                {/* Quick Info Overlay */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <span className="inline-flex items-center gap-2 text-xs font-bold text-white bg-[#B58F48] px-4 py-2 rounded-xl shadow-lg">
                    <Eye className="w-4 h-4" />
                    Ver Projeto & Fotos
                  </span>
                </div>

                {/* Category Badge Top Left */}
                <div className="absolute top-4 left-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-md text-[#8C6A2E] px-3 py-1 rounded-lg border border-[#B58F48]/30 shadow-xs">
                    {project.categoryLabel}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between space-y-4 bg-white">
                <div className="space-y-2">
                  <h3 className="font-serif text-xl font-bold text-[#28231E] group-hover:text-[#B58F48] transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#736B63] line-clamp-2 leading-relaxed">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Highlights preview */}
                <div className="space-y-3 pt-3 border-t border-[#E5DFD5]">
                  <div className="flex flex-wrap gap-1.5">
                    {project.highlights.slice(0, 2).map((hl) => (
                      <span
                        key={hl}
                        className="text-[10px] font-medium text-[#8C6A2E] bg-[#B58F48]/10 px-2.5 py-1 rounded-md border border-[#B58F48]/20"
                      >
                        {hl}
                      </span>
                    ))}
                  </div>

                  <div className="pt-1 flex items-center justify-between text-xs">
                    <span className="font-bold text-[#B58F48] flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                      Ver detalhes <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-[11px] text-[#736B63] uppercase tracking-wider font-semibold">100% MDF</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Modal Controller */}
        <ProjectDetailModal
          project={selectedProject}
          open={modalOpen}
          onOpenChange={setModalOpen}
        />
      </div>
    </section>
  );
}
