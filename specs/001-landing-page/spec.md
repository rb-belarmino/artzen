# Feature Specification: Artzen Ambientes Planejados Landing Page

**Feature Branch**: `001-landing-page`

**Created**: 2026-09-04

**Status**: Draft

**Input**: User description: "Criar uma landing page para divulgar o trabalho de uma empresa de Ambientes Planejados inspirado no design conforme esse link https://www.behance.net/gallery/226502807/Pagina-de-vendas-Moveis-planejados?tracking_source=search_projects|moveis+planejados&l=1 Seguem as informacoes da empresa em uma busca no google, onde tem fotos, video, cores, logo, arte, localizacao, descricoes e tudo mais informativos para serem imputadas na landing Page. https://share.google/xXZqe7SvHmcBWimbU"

## Clarifications

### Session 2026-09-04
- Q: Qual paleta de estilo visual principal deve guiar o design da landing page da Artzen? → A: Opção B (Clean Minimal Light: Fundo branco/off-white elegante com tipografia preta nítida e detalhes amadeirados naturais).
- Q: Além do contato direto via WhatsApp, deve haver um formulário complementar de solicitação de projeto na página? → A: Opção A (WhatsApp Direto + Mini Formulário de Briefing rápido opcional que monta a mensagem e redireciona ao WhatsApp).
- Q: Na galeria interativa de portfólio, como os detalhes de cada ambiente devem ser visualizados pelo usuário ao clicar em um projeto? → A: Opção A (Modal/Dialog interativo detalhado com especificações, materiais e CTA direto "Quero um projeto como este").

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Discover Services & Request Consultation via WhatsApp (Priority: P1)

A potential residential or commercial client in Teresópolis/RJ visits the Artzen landing page on their smartphone or computer, understands Artzen's craftsmanship in custom bespoke furniture (móveis planejados), browses signature projects, and easily contacts the Artzen design team via a high-visibility direct WhatsApp call-to-action (CTA).

**Why this priority**: Core business conversion goal. The landing page must turn interested visitors into direct qualified sales leads immediately.

**Independent Test**: Can be fully tested by loading the landing page on any device (mobile or desktop), viewing the value proposition, clicking the primary WhatsApp CTA button with pre-filled message, and confirming that the direct chat opens with Artzen's sales channel (+55 21 99832-4466).

**Acceptance Scenarios**:

1. **Given** a visitor lands on the hero section on a mobile device, **When** they read the headline and click "Solicitar Orçamento no WhatsApp", **Then** WhatsApp opens targeting +55 21 99832-4466 with a contextual Brazilian Portuguese greeting.
2. **Given** a visitor browses the page on a desktop or ultra-wide screen, **When** they scroll through the sections, **Then** a floating quick-contact WhatsApp button remains accessible with smooth hover and click interactions.

---

### User Story 2 - Explore Interactive Portfolio & Room Categories (Priority: P2)

A homeowner seeking inspiration wants to see high-resolution galleries and specific categories of custom environments (Cozinhas Planejadas, Dormitórios/Suítes, Salas de Estar & Home Theaters, Banheiros, Ambientes Corporativos/Escritórios, e Área Gourmet).

**Why this priority**: Builds trust and demonstrates quality craftsmanship and modern design aesthetics inspired by contemporary architectural sales pages.

**Independent Test**: Can be fully tested by navigating through category filters, viewing showcase images with responsive optimization, and reading key differentiators (100% MDF, ferragens de alta durabilidade, personalização sob medida).

**Acceptance Scenarios**:

1. **Given** a visitor is in the "Ambientes / Portfólio" section, **When** they select an environment category (e.g., "Cozinhas"), **Then** the gallery filters smoothly to showcase relevant high-end kitchen installations and custom details.
2. **Given** a visitor taps or clicks on an environment showcase item, **When** interacted with, **Then** an interactive accessible modal/dialog opens displaying high-res photos, material specs (MDF finishings, hardware details, custom lighting), and a direct WhatsApp CTA button pre-configured with that specific room type.

---

### User Story 3 - Learn the 4-Step Process & Quality Differentials (Priority: P3)

A prospective client wants reassurance regarding project timelines, manufacturing quality, custom 3D design simulation, delivery guarantees, and post-installation support.

**Why this priority**: Overcomes objections and builds social proof for high-ticket bespoke furniture investments.

**Independent Test**: Can be tested by reviewing the step-by-step methodology section (1. Atendimento & Briefing -> 2. Projeto 3D Personalizado -> 3. Fabricação de Precisão -> 4. Entrega & Montagem Especializada) and quality guarantee badges.

**Acceptance Scenarios**:

1. **Given** a prospective customer scrolls to the "Como Funciona o Processo" section, **When** reviewing the timeline, **Then** each step clearly highlights customer benefits, transparency, and precision.
2. **Given** a customer reaches the FAQ / Dúvidas Frequentes section, **When** they click an accordion item, **Then** it expands smoothly revealing concise answers regarding warranties, materials, payment terms, and delivery schedules.

---

### User Story 4 - Check Store Location & Direct Contact Info (Priority: P4)

A local client in Teresópolis or neighboring regions wants to check physical showroom opening hours, physical address, Google Maps location, and social links (Instagram/Facebook).

**Why this priority**: Validates physical legitimacy, regional relevance in Teresópolis - RJ, and enables in-person showroom visits.

**Independent Test**: Can be tested by checking the Location/Footer section, verifying address details (Av. Feliciano Sodré, 396 - Loja 7, Teresópolis - RJ), and clicking on Google Maps / Instagram links.

**Acceptance Scenarios**:

1. **Given** a visitor looks for Artzen's physical location, **When** navigating to the contact/location section, **Then** the complete address, opening hours, interactive map link, and official Instagram handle (@artzen_teresopolis) are displayed accurately.

---

### Edge Cases

- What happens when a visitor opens the page with JavaScript disabled or on a slow 3G mobile connection? The core HTML structure, semantic text, contact buttons, phone numbers, and address must remain fully readable and operable without broken layout.
- How does the layout behave on ultra-wide monitors (> 2560px)? Layout containers must maintain max-width bounds and balanced typography rather than stretching awkwardly across the screen.
- What happens if an image fails to load or is slow? Modern skeleton placeholders, accessible alt text, and explicit aspect ratios must prevent cumulative layout shift (CLS).
- What happens if a visitor has reduced motion enabled in their operating system? CSS animations and transitions must automatically degrade to instant changes without jarring motion.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: Landing page MUST feature a high-impact Hero Section displaying Artzen's brand identity, compelling value proposition for bespoke furniture, trust highlights, and primary CTA to WhatsApp.
- **FR-002**: Landing page MUST showcase an interactive Environment Showcase / Portfolio covering core categories: Cozinhas, Dormitórios, Closets, Banheiros, Salas/Home Theater, Área Gourmet, and Ambientes Comerciais.
- **FR-003**: Landing page MUST present a structured "Nosso Método / Como Funciona" section detailing the journey from initial briefing and 3D architectural project to precision fabrication and expert installation.
- **FR-004**: Landing page MUST display key competitive differentials: 100% MDF de alta densidade, ferragens premium com amortecimento, garantia de fábrica, pontualidade de entrega e acabamento milimétrico.
- **FR-005**: Landing page MUST include an interactive FAQ (Frequently Asked Questions) accordion answering top customer inquiries about budgets, payment conditions, project lead times, and materials.
- **FR-006**: Landing page MUST include a verified Business Information & Location section with address (Av. Feliciano Sodré, 396 - Loja 7, Teresópolis - RJ), phone/WhatsApp (+55 21 99832-4466), and official Instagram link (`@artzen_teresopolis`).
- **FR-007**: Landing page MUST implement persistent and floating WhatsApp direct action buttons optimized with encoded Brazilian Portuguese conversion messages.
- **FR-008**: Landing page MUST adhere to strict Technical SEO requirements: semantic HTML5 tags (`<header>`, `<main>`, `<section>`, `<footer>`, proper heading hierarchy), Open Graph meta tags, Twitter Card tags, canonical link, `robots.txt`, XML sitemap, and Schema.org JSON-LD structured data (`LocalBusiness` / `HomeGoodsStore`).
- **FR-009**: Landing page MUST NOT contain any sensitive credentials, private API keys, or private backend tokens in the codebase or client bundle.
- **FR-010**: Landing page MUST streamline contact exclusively via direct WhatsApp actions (+55 21 99832-4466) across all sections, intentionally avoiding external forms or telephone calls to eliminate customer friction.

### Key Entities *(include if feature involves data)*

- **Ambiente / Project Category**: Represents a specialized room category (e.g., Cozinha, Dormitório, Gourmet) with title, description, highlight features, and visual gallery assets.
- **Diferencial / Value Proposition**: Key quality badge (e.g., Matéria-Prima 100% MDF, Ferragens Premium, Garantia) with title, icon representation, and description.
- **Process Step**: A sequential step in the customer journey (Etapa 1 a 4) with phase name, milestone details, and customer deliverable.
- **Business Profile (Artzen)**: Company master record containing brand name, official contact numbers, address coordinates, opening hours, social profiles, and SEO schema markup.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Visitors can reach the primary WhatsApp consultation CTA in less than 3 seconds after landing on the page across any device.
- **SC-002**: Landing page loads with instant visual stability, achieving Core Web Vitals metrics (LCP < 2.0s, CLS < 0.05, INP < 100ms) on standard 4G mobile connections.
- **SC-003**: 100% of interactive elements (navigation, category filters, FAQ accordion, contact CTAs) are fully usable via touch on mobile and mouse/keyboard on desktop.
- **SC-004**: Technical SEO validation achieves 100% compliance on Open Graph, Schema.org LocalBusiness validation, and automated sitemap generation without broken links.
- **SC-005**: Zero sensitive data, secrets, or administrative credentials present in client-delivered assets.

## Assumptions

- **Target Audience**: Residential homeowners, interior designers, architects, and commercial businesses in Teresópolis and the Serrana region of Rio de Janeiro looking for high-standard custom furniture.
- **Lead Capture Model**: Conversion directs exclusively to the verified WhatsApp sales channel (+55 21 99832-4466), providing immediate human connection and instant 3D consultation scheduling.
- **Branding & Assets**: Brand visual identity is based on **Light Luxury / Clean Minimal Light** (elegant off-white `#FAF9F6`, warm sand `#F4F1EA`, pure white cards `#FFFFFF`, crisp charcoal typography `#28231E`, and subtle gold highlights `#B58F48`), with architectural furniture background textures inspired by modern Behance sales pages.
- **Testing Approach**: In accordance with the Project Constitution (Principle VI), automated test suites (unit/e2e frameworks) are omitted, with quality guaranteed through visual review, linting/type verification, and SEO audit compliance.
