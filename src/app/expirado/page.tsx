import { Lock, MessageCircle } from 'lucide-react'
import { COMPANY_DATA } from '@/data/company'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Demonstração Finalizada | Artzen',
  robots: { index: false, follow: false }
}

function getFormattedExpirationDate(dateString?: string): string {
  if (!dateString) return 'data programada'
  const date = new Date(dateString)
  if (isNaN(date.getTime())) return 'data programada'

  return new Intl.DateTimeFormat('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'America/Sao_Paulo'
  }).format(date)
}

export default function PaginaExpirada() {
  const formattedDate = getFormattedExpirationDate(process.env.EXPIRATION_DATE)
  const whatsappUrl = `https://wa.me/${COMPANY_DATA.contacts.whatsappNumber}?text=${encodeURIComponent(
    'Olá! Gostaria de falar sobre a contratação do serviço e reativação do site da Artzen.'
  )}`

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
          <strong className="text-stone-200">{formattedDate}</strong>. Para
          reativar o site em definitivo e formalizar o serviço, entre em
          contato.
        </p>
      </div>
    </main>
  )
}
