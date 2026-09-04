export interface CompanyInfo {
  readonly name: string;
  readonly legalName: string;
  readonly tagline: string;
  readonly shortDescription: string;
  readonly fullDescription: string;
  readonly city: string;
  readonly state: string;
  readonly address: {
    readonly street: string;
    readonly number: string;
    readonly complement: string;
    readonly neighborhood: string;
    readonly city: string;
    readonly state: string;
    readonly postalCode: string;
    readonly fullAddressString: string;
    readonly googleMapsUrl: string;
    readonly googleMapsEmbedQuery: string;
  };
  readonly contacts: {
    readonly phone: string;
    readonly whatsappNumber: string;
    readonly whatsappDisplay: string;
    readonly defaultWhatsAppMessage: string;
  };
  readonly social: {
    readonly instagramUrl: string;
    readonly instagramHandle: string;
    readonly facebookUrl: string;
  };
  readonly businessHours: readonly {
    readonly days: string;
    readonly hours: string;
  }[];
  readonly stats: readonly {
    readonly value: string;
    readonly label: string;
    readonly description: string;
  }[];
}

export const COMPANY_DATA: CompanyInfo = {
  name: "Artzen Ambientes Planejados",
  legalName: "Artzen Móveis e Ambientes Planejados",
  tagline: "Móveis planejados sob medida com estética, funcionalidade e sofisticação.",
  shortDescription: "Transformamos lares e ambientes comerciais em Teresópolis e Região Serrana com móveis planejados 100% MDF de alto padrão e projetos 3D personalizados.",
  fullDescription: "A Artzen Ambientes Planejados desenvolve projetos exclusivos sob medida que unem design contemporâneo, materiais de primeira linha e soluções inteligentes de espaço para cozinhas, dormitórios, closets, salas, banheiros e áreas gourmet.",
  city: "Teresópolis",
  state: "RJ",
  address: {
    street: "Av. Feliciano Sodré",
    number: "396",
    complement: "Loja 7",
    neighborhood: "Várzea",
    city: "Teresópolis",
    state: "RJ",
    postalCode: "25963-081",
    fullAddressString: "Av. Feliciano Sodré, 396 - Loja 7, Várzea, Teresópolis - RJ",
    googleMapsUrl: "https://maps.google.com/?q=Av.+Feliciano+Sodr%C3%A9,+396+-+Loja+7,+Teres%C3%B3polis+-+RJ",
    googleMapsEmbedQuery: "Av. Feliciano Sodré, 396, Teresópolis, RJ"
  },
  contacts: {
    phone: "+55 (21) 99832-4466",
    whatsappNumber: "5521998324466",
    whatsappDisplay: "+55 (21) 99832-4466",
    defaultWhatsAppMessage: "Olá! Gostaria de agendar um atendimento e solicitar um orçamento para o meu projeto planejado com a Artzen."
  },
  social: {
    instagramUrl: "https://www.instagram.com/artzen_teresopolis",
    instagramHandle: "@artzen_teresopolis",
    facebookUrl: "https://www.facebook.com/artzenplanejados"
  },
  businessHours: [
    { days: "Segunda a Sexta", hours: "09:00 às 18:00" },
    { days: "Sábado", hours: "09:00 às 13:00" }
  ],
  stats: [
    { value: "100% MDF", label: "Matéria-Prima", description: "Alta densidade e resistência" },
    { value: "10+", label: "Anos de Experiência", description: "Marcenaria e projetos de precisão" },
    { value: "100%", label: "Sob Medida", description: "Projetos 3D milimetricamente ajustados" },
    { value: "5 Anos", label: "Garantia", description: "Segurança e suporte pós-instalação" }
  ]
};
