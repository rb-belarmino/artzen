export type EnvironmentCategory =
  | "todos"
  | "cozinhas"
  | "dormitorios"
  | "salas"
  | "banheiros"
  | "gourmet"
  | "corporativo";

export interface EnvironmentItem {
  readonly id: string;
  readonly title: string;
  readonly category: EnvironmentCategory;
  readonly categoryLabel: string;
  readonly shortDescription: string;
  readonly fullDescription: string;
  readonly image: string;
  readonly additionalImages: readonly string[];
  readonly highlights: readonly string[];
  readonly specs: {
    readonly material: string;
    readonly hardware: string;
    readonly lighting: string;
    readonly customFeature: string;
  };
  readonly featured: boolean;
}

export const ENVIRONMENTS_DATA: readonly EnvironmentItem[] = [
  {
    id: "cozinha-aurora-sand",
    title: "Cozinha Integrada Aurora Wood & Sand",
    category: "cozinhas",
    categoryLabel: "Cozinhas Planejadas",
    shortDescription: "Design contemporâneo com torre quente, ilha gourmet e iluminação linear em LED embutida.",
    fullDescription: "Projeto desenvolvido para máxima otimização do espaço, integrando área de cocção, torre quente com eletros embutidos e ilha com banquetas para convivência familiar. Puxadores em cava linear com acabamento acetinado.",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1000&q=80"
    ],
    highlights: ["100% MDF Naval / Hidrófugo", "Corrediças Ocultas com Amortecimento", "Ilha Gourmet Integrada"],
    specs: {
      material: "100% MDF com lâmina amadeirada nobre e acabamento grafite acetinado",
      hardware: "Ferragens com sistema soft-close e pistões a gás reforçados",
      lighting: "Perfis de LED 3000K (luz quente) embutidos sob os armários superiores",
      customFeature: "Torre quente sob medida e gavetões organizadores para panelas"
    },
    featured: true,
  },
  {
    id: "suite-master-zenith",
    title: "Dormitório Master & Closet Elegance",
    category: "dormitorios",
    categoryLabel: "Dormitórios & Closets",
    shortDescription: "Cabeceira ripada sob medida com mesas de apoio flutuantes e closet com portas reflecta.",
    fullDescription: "Ambiente íntimo projetado para acolhimento e sofisticação. Painel de cabeceira com ripado milimétrico e iluminação indireta. Closet inteligente com divisórias personalizadas para calçados, roupas longas e acessórios.",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1000&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1000&q=80"
    ],
    highlights: ["Portas em Vidro Reflecta", "Gavetas com Divisórias Aveludadas", "Painel Ripada com LED"],
    specs: {
      material: "100% MDF melamínico em tom linho e carvalho natural",
      hardware: "Dobradiças com amortecedor integrado e trilhos telescópicos ocultos",
      lighting: "Fitas de LED difusas nos nichos e cabideiros iluminados",
      customFeature: "Penteadeira integrada com espelho iluminado e gaveta joalheiro"
    },
    featured: true,
  },
  {
    id: "home-theater-grand-lounge",
    title: "Sala de Estar & Home Theater Grand Lounge",
    category: "salas",
    categoryLabel: "Salas & Home Theater",
    shortDescription: "Painel monumental para TV até 85 polegadas com rack suspenso e nichos decorativos.",
    fullDescription: "Solução completa para a área social, integrando passagem de cabos 100% invisível, nichos para equipamentos de áudio e automação residencial. Acabamento amadeirado contrastando com laca e iluminação cênica.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80"
    ],
    highlights: ["Rack Suspenso sem fiação aparente", "Nichos com Vidro Bronze", "Acústica Confortável"],
    specs: {
      material: "100% MDF de alta resistência com acabamento laca fosca e madeira nobre",
      hardware: "Fechos magnéticos push-open e portas de correr amortecidas",
      lighting: "Sanca de LED embutida no contorno do painel",
      customFeature: "Gavetas reforçadas para discos, consoles e adega integrada"
    },
    featured: true,
  },
  {
    id: "varanda-gourmet-serrana",
    title: "Espaço Gourmet & Churrasqueira Contemporânea",
    category: "gourmet",
    categoryLabel: "Área Gourmet",
    shortDescription: "Armários resistentes com bancada de chopeira, adega climatizada e cristaleira iluminada.",
    fullDescription: "Projetado especialmente para confraternizações, combinando resistência a áreas semi-abertas, espaço para frigobar/adega e cristaleira com perfis finos de alumínio preto e vidro canelado.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=1000&q=80"
    ],
    highlights: ["MDF Ultra Resistente a Umidade", "Cristaleira com Vidro Canelado", "Espaço Adega Embutido"],
    specs: {
      material: "MDF naval ultra com bordas seladas a laser para proteção contra umidade",
      hardware: "Ferragens em inox 304 anti-corrosão",
      lighting: "LED IP65 com temperatura neutra (4000K)",
      customFeature: "Porta-temperos retrátil e gaveta térmica para carnes"
    },
    featured: true,
  },
  {
    id: "banheiro-spa-minimal",
    title: "Banheiro Master Spa & Lavabo Nobre",
    category: "banheiros",
    categoryLabel: "Banheiros & Spas",
    shortDescription: "Gabinete suspenso com cuba esculpida, gavetão com recorte para sifão e armário espelheiro.",
    fullDescription: "Móveis planejados para banheiros com aproveitamento milimétrico abaixo da bancada, nichos embutidos para toalhas e armário espelheiro com abertura oculta e tomadas internas para barbeadores e secadores.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1000&q=80"
    ],
    highlights: ["100% Proteção Hidrófuga", "Espelheiro com Tomadas Ocultas", "Gavetas Organizadoras"],
    specs: {
      material: "MDF verde especial para áreas úmidas com vedação total de bordas",
      hardware: "Corrediças ocultas com amortecimento suave",
      lighting: "Iluminação frontal no espelho ideal para maquiagem/barbear",
      customFeature: "Divisores internos em acrílico para cosméticos e produtos de higiene"
    },
    featured: false,
  },
  {
    id: "office-executive-zen",
    title: "Home Office & Consultório Executivo",
    category: "corporativo",
    categoryLabel: "Ambientes Corporativos",
    shortDescription: "Estante modular para livros, mesa ergonômica com calha de tomadas e armários com chave.",
    fullDescription: "Espaço de trabalho que estimula o foco e a produtividade, com isolamento acústico, passagem embutida de rede e energia, armários para arquivos confidenciais e prateleiras decorativas.",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1000&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80"
    ],
    highlights: ["Mesa com Gestão de Cabos", "Prateleiras Reforçadas Anti-Empenamento", "Gaveteiro com Chave"],
    specs: {
      material: "100% MDF com tampos duplos engrossados (36mm) de alta resistência mecânica",
      hardware: "Fechaduras biométricas/chave e corrediças de 45kg",
      lighting: "Luz de tarefa focada na mesa de trabalho",
      customFeature: "Caixa de conectividade embutida com USB, USB-C e tomadas 20A"
    },
    featured: false,
  }
];

export const CATEGORIES_FILTER: readonly { id: EnvironmentCategory; label: string }[] = [
  { id: "todos", label: "Todos os Ambientes" },
  { id: "cozinhas", label: "Cozinhas" },
  { id: "dormitorios", label: "Dormitórios & Closets" },
  { id: "salas", label: "Salas & Home Theater" },
  { id: "gourmet", label: "Área Gourmet" },
  { id: "banheiros", label: "Banheiros" },
  { id: "corporativo", label: "Corporativo" },
];
