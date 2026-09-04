export interface ProcessStepItem {
  readonly stepNumber: number;
  readonly stepLabel: string;
  readonly title: string;
  readonly description: string;
  readonly deliverable: string;
}

export const PROCESS_DATA: readonly ProcessStepItem[] = [
  {
    stepNumber: 1,
    stepLabel: "Etapa 01",
    title: "Atendimento & Briefing Personalizado",
    description: "Conversamos para entender suas necessidades, estilo de vida, preferências de cores e medidas da sua planta.",
    deliverable: "Checklist completo de necessidades e alinhamento de expectativas",
  },
  {
    stepNumber: 2,
    stepLabel: "Etapa 02",
    title: "Apresentação do Projeto em 3D",
    description: "Nossa equipe cria a simulação visual realista em 3D do seu ambiente sob medida, ajustando cada detalhe até sua aprovação.",
    deliverable: "Renderização 3D detalhada, orçamento transparente e contrato",
  },
  {
    stepNumber: 3,
    stepLabel: "Etapa 03",
    title: "Fabricação com Corte de Precisão",
    description: "Seu mobiliário é usinado em maquinários modernos com precisão milimétrica e fitamento de bordas de alta aderência.",
    deliverable: "Módulos 100% inspecionados no controle de qualidade de fábrica",
  },
  {
    stepNumber: 4,
    stepLabel: "Etapa 04",
    title: "Entrega e Montagem Impecável",
    description: "Montadores próprios realizam a instalação com limpeza, proteção do ambiente e regulagem fina de portas e gavetas.",
    deliverable: "Termo de entrega técnica e ativação da garantia Artzen",
  },
];
