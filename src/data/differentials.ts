export interface DifferentialItem {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly iconName: string;
  readonly badge?: string;
}

export const DIFFERENTIALS_DATA: readonly DifferentialItem[] = [
  {
    id: "mdf-puro",
    title: "100% MDF de Alta Densidade",
    description: "Utilizamos exclusivamente chapas de MDF nobre e versões ultra-hidrófugas (resistentes à umidade) para cozinhas e banheiros, garantindo rigidez e vida útil prolongada.",
    iconName: "Layers",
    badge: "Matéria-Prima Nobre",
  },
  {
    id: "projeto-3d",
    title: "Projetos 3D com Render Realista",
    description: "Você visualiza cada detalhe, iluminação, cores e texturas do seu ambiente antes de iniciar a fabricação, com suporte técnico de designers especializados.",
    iconName: "Box",
    badge: "Visualização Total",
  },
  {
    id: "ferragens-premium",
    title: "Ferragens com Amortecimento",
    description: "Sistemas soft-close, dobradiças reforçadas e corrediças telescópicas/ocultas que garantem fechamento suave e silencioso sem impacto nas portas e gavetas.",
    iconName: "Wrench",
    badge: "Tecnologia & Conforto",
  },
  {
    id: "montagem-propria",
    title: "Montagem Especializada Própria",
    description: "Equipe interna treinada nos padrões Artzen. Respeitamos seu imóvel, mantendo organização, proteção de pisos e alinhamento milimétrico.",
    iconName: "UserCheck",
    badge: "Cuidado com sua Obra",
  },
  {
    id: "pontualidade",
    title: "Pontualidade Rigorosa na Entrega",
    description: "Cronograma transparente com prazos acordados em contrato. Acompanhamento passo a passo do status do seu projeto.",
    iconName: "Clock",
    badge: "Compromisso",
  },
  {
    id: "garantia-suporte",
    title: "Garantia & Assistência Pós-Venda",
    description: "Tranquilidade e segurança de fábrica para todos os móveis e ferragens, com canal direto de atendimento em Teresópolis.",
    iconName: "ShieldCheck",
    badge: "Segurança 5 Anos",
  },
];
