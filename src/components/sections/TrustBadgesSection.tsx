import React from "react";
import { COMPANY_DATA } from "@/data/company";
import { ShieldCheck, Award, Ruler, Users } from "lucide-react";

export function TrustBadgesSection() {
  const icons = [Award, Users, Ruler, ShieldCheck];

  return (
    <section className="border-y border-[#E5DFD5] bg-[#F7F5F0] py-14 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {COMPANY_DATA.stats.map((stat, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={stat.label}
                className="group flex flex-col items-center text-center p-6 rounded-3xl luxury-card-light transition-all duration-300 hover:-translate-y-1.5"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#B58F48]/10 border border-[#B58F48]/25 flex items-center justify-center text-[#B58F48] group-hover:bg-[#B58F48] group-hover:text-white transition-all duration-300 mb-4 shadow-xs">
                  <Icon className="w-7 h-7" />
                </div>
                <span className="font-serif text-3xl sm:text-4xl font-bold text-[#28231E] tracking-tight group-hover:text-[#B58F48] transition-colors">
                  {stat.value}
                </span>
                <span className="text-sm font-bold text-[#8C6A2E] mt-1.5">
                  {stat.label}
                </span>
                <span className="text-xs text-[#736B63] mt-1 max-w-[190px] leading-relaxed">
                  {stat.description}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
