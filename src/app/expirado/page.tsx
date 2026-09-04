import { Lock, MessageCircle } from 'lucide-react';
import { COMPANY_DATA } from '@/data/company';

export const metadata = {
  title: 'Demonstração Finalizada | Artzen',
  robots: { index: false, follow: false },
};

export default function PaginaExpirada() {
  const whatsappUrl = `https://wa.me/${COMPANY_DATA.contacts.whatsappNumber}?text=${encodeURIComponent(
    'Olá! Gostaria de falar sobre a contratação do serviço e reativação do site da Artzen.'
  )}`;

  return (
    <main className="min-h-screen bg-stone-950 text-stone-100 flex items-center justify-center p-6 selection:bg-amber-500 selection:text-stone-950">
      <div className="max-w-lg w-full bg-stone-900 border border-stone-800 rounded-2xl p-8 sm:p-10 shadow-2xl text-center space-y-6">
        <div className="w-16 h-16 bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded-2xl flex items-center justify-center mx-auto shadow-inner">
          <Lock className="w-8 h-8 stroke-[1.5]" />
        </div>

        <div className="space-y-2">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
            Período de Demonstração
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Acesso Temporariamente Encerrado
          </h1>
        </div>

        <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
          O período de visualização e teste desta proposta encerrou em{' '}
          <strong className="text-stone-200">11 de setembro de 2026</strong>. Para reativar o site em definitivo e formalizar o serviço, entre em contato.
        </p>

        <div className="pt-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl font-semibold text-stone-950 bg-amber-500 hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20 cursor-pointer"
          >
            <MessageCircle className="w-5 h-5" />
            Falar no WhatsApp para Reativação
          </a>
        </div>
      </div>
    </main>
  );
}
