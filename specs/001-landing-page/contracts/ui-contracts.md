# UI Contracts & Component Architecture

## 1. Section Component Hierarchy

```text
src/app/page.tsx (Landing Page Container)
├── Header / Navbar (Sticky, Logo, Nav Links, CTA button, Mobile Hamburger)
├── HeroSection (Headline, Sub-headline, Badges, Direct WhatsApp CTA, Background Visuals)
├── TrustBadgesSection (Stats bar: Projetos entregues, 100% MDF, Garantia, Atendimento Teresópolis)
├── QuickLeadForm (Fast briefing form: Nome, Telefone, Ambiente -> WhatsApp pre-filled redirect)
├── DifferentialsSection (Card Grid: Matéria-Prima Premium, Design 3D, Pontualidade, Montagem Própria)
├── EnvironmentsGallerySection (Category Tabs, Responsive Grid, Project Cards)
│   └── ProjectDetailModal (Interactive modal with expanded photos, specs & direct WhatsApp CTA)
├── ProcessTimelineSection (4-step visual flow: Briefing -> Projeto 3D -> Fabricação -> Montagem)
├── MaterialsQualitySection (Showcasing MDF finishings, Blum/Hafele hardware, lighting details)
├── FaqSection (shadcn/ui Accordion with smooth transitions)
├── LocationContactSection (Address, Showroom info, Interactive Google Maps, Opening Hours)
├── CtaBannerSection (Final conversion push to WhatsApp)
├── Footer (Brand summary, Navigation, Social Links, Legal/Copyright, Regional SEO text)
└── FloatingWhatsApp (Fixed corner widget with notification pulse)
```

## 2. URL & Action Contracts

- **WhatsApp Direct Action**:
  - URL schema: `https://wa.me/5521998324466?text={encoded_message}`
  - Standard message: `Olá! Conheci a Artzen pelo site e gostaria de solicitar um orçamento para meu projeto planejado.`
- **Google Maps Navigation**:
  - Target URL: Direct search pin for Av. Feliciano Sodré, 396 - Loja 7, Teresópolis - RJ
- **Instagram Profile**:
  - Target URL: `https://www.instagram.com/artzen_teresopolis`

## 3. SEO Metadata Contract

- **Title Template**: `%s | Artzen Ambientes Planejados`
- **Default Title**: `Artzen Ambientes Planejados | Móveis Sob Medida em Teresópolis - RJ`
- **Meta Description**: `Móveis planejados de alto padrão em Teresópolis - RJ. Projetos 3D personalizados, 100% MDF, ferragens premium e montagem especializada para cozinhas, dormitórios, salas e áreas gourmet.`
- **Schema.org Type**: `LocalBusiness` / `HomeGoodsStore`
