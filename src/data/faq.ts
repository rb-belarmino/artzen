export interface FaqItem {
  readonly id: string
  readonly question: string
  readonly answer: string
}

export const FAQ_DATA: readonly FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Como funciona a solicitação de orçamento e visita técnica?',
    answer:
      'É muito simples! Basta entrar em contato pelo nosso WhatsApp. Agendamos uma conversa no nosso showroom em Teresópolis ou uma visita ao seu imóvel para medições preliminares.'
  },
  {
    id: 'faq-2',
    question: 'A Artzen cobra para fazer o projeto 3D?',
    answer:
      'Apresentamos o estudo inicial e o orçamento 3D sem custos adicionais de consultoria inicial, permitindo que você visualize a solução ideal para o seu espaço antes de fechar o contrato.'
  },
  {
    id: 'faq-3',
    question: 'Qual é a matéria-prima utilizada nos móveis planejados?',
    answer:
      'Trabalhamos exclusivamente com 100% MDF de alta densidade das principais marcas do mercado nacional, incluindo versões ultra-resistentes à umidade (MDF verde/naval) para cozinhas, lavanderias e banheiros.'
  },
  {
    id: 'faq-4',
    question: 'Qual o prazo médio de entrega e instalação?',
    answer:
      'O prazo varia de acordo com a complexidade e quantidade de ambientes, sendo rigorosamente estabelecido em contrato (geralmente entre 30 a 45 dias úteis após a aprovação final do projeto executivo).'
  },
  {
    id: 'faq-5',
    question: 'Quais são as opções e condições de pagamento?',
    answer:
      'Oferecemos condições flexíveis, incluindo parcelamento facilitado no cartão de crédito, boleto bancário mediante aprovação, e descontos especiais para pagamentos à vista.'
  },
  {
    id: 'faq-6',
    question: 'A Artzen atende outras cidades além de Teresópolis?',
    answer:
      'Sim! Nossa base e Showroom ficam em Teresópolis - RJ (Av. Feliciano Sodré, 396 - Loja 7), mas atendemos com frequência cidades de toda a Região Serrana e Grande Rio sob consulta.'
  }
]
