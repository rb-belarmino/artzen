import React from "react";
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBadgesSection } from "@/components/sections/TrustBadgesSection";
import { EnvironmentsGallerySection } from "@/components/sections/EnvironmentsGallerySection";
import { DifferentialsSection } from "@/components/sections/DifferentialsSection";
import { ProcessTimelineSection } from "@/components/sections/ProcessTimelineSection";
import { MaterialsQualitySection } from "@/components/sections/MaterialsQualitySection";
import { FaqSection } from "@/components/sections/FaqSection";
import { LocationContactSection } from "@/components/sections/LocationContactSection";
import { CtaBannerSection } from "@/components/sections/CtaBannerSection";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#28231E] antialiased selection:bg-[#B58F48]/20 selection:text-[#28231E]">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <TrustBadgesSection />
        <EnvironmentsGallerySection />
        <DifferentialsSection />
        <ProcessTimelineSection />
        <MaterialsQualitySection />
        <FaqSection />
        <LocationContactSection />
        <CtaBannerSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
