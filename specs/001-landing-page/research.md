# Technical Research: Artzen Landing Page Architecture & Stack

## 1. Core Technology Choices

### Decision: Next.js (App Router) + React 19 + TypeScript
- **Rationale**: Next.js App Router provides Server-Side Rendering (SSR) and Static Site Generation (SSG), which are essential for achieving optimal Core Web Vitals (LCP < 2.0s, CLS 0) and technical SEO indexing (metadata, Open Graph, dynamic sitemaps, JSON-LD Schema.org markup).
- **Alternatives Considered**: 
  - Pure React SPA (Vite): Lacks built-in SSR/metadata generation for SEO search engine crawlers without headless rendering proxies.
  - Astro: High performance for content sites, but Next.js + React ecosystem offers richer integration with shadcn/ui and complex interactive UI states.

### Decision: Tailwind CSS v4 & PostCSS
- **Rationale**: Tailwind CSS v4 delivers ultra-fast build times, modern CSS features (`@theme`, CSS variables, color gamut), zero runtime overhead, and responsive utilities (`sm`, `md`, `lg`, `xl`, `2xl`, custom ultra-wide breakpoints) perfectly suited for Mobile-First styling.
- **Alternatives Considered**: 
  - Vanilla CSS / CSS Modules: Harder to maintain design token consistency and micro-utility spacing.
  - CSS-in-JS (Styled Components / Emotion): Runtime performance overhead and server component serialization hurdles.

### Decision: Component Architecture with shadcn/ui & Radix UI Primitives + Lucide Icons
- **Rationale**: shadcn/ui provides accessible (WAI-ARIA compliant), unstyled/headless Radix UI primitives with copy-into-codebase modularity. Perfect for Clean Architecture because components live directly in `src/components/ui`, giving full control over styling without external heavy npm black-box libraries.
- **Components Used**: Accordion (FAQ), Button (CTAs), Card (Differentials/Portfolio), Dialog/Modal (Detailed project modal), Badge, Carousel/Tabs.
- **Icons**: Lucide React for consistent, lightweight SVGs.

### Decision: Framer Motion / Tailwind Motion for Micro-Interactions
- **Rationale**: Delivers smooth GPU-accelerated reveals, parallax subtle shifts, hover elevations, and entrance transitions, with built-in support for `prefers-reduced-motion` compliance.

---

## 2. Technical SEO & Schema.org Implementation

### Metadata & Open Graph Strategy
- **App Router Metadata API**: Centralized in `src/app/layout.tsx` and `src/app/page.tsx` using `metadata` object (title template, description, keywords, canonical URL, robots instructions, Open Graph image, Twitter card).
- **Structured Data (JSON-LD)**: Schema.org `LocalBusiness` and `HomeGoodsStore` with:
  - Name: "Artzen Ambientes Planejados"
  - Address: "Av. Feliciano Sodré, 396 - Loja 7, Teresópolis - RJ, Brasil"
  - Telephone: "+55 21 99832-4466"
  - Geographic coordinates / Region: Teresópolis, Região Serrana - RJ
  - Opening hours and service catalog.
- **Sitemap & Robots**: `src/app/sitemap.ts` and `src/app/robots.ts` auto-generating standard search engine routes.

---

## 3. Clean Architecture & Code Structure

### Layered Separation of Concerns
1. **Domain / Constants / Data Layer** (`src/data/`):
   - `company.ts`: Immutable business information (contacts, addresses, opening hours, social links).
   - `environments.ts`: Portfolio projects, room categories, tags, image assets, descriptions.
   - `differentials.ts`: Core value propositions, guarantee terms, material specs (100% MDF).
   - `process.ts`: 4-step workflow details.
   - `faq.ts`: FAQ data items.
2. **Components Layer** (`src/components/`):
   - `ui/`: shadcn/ui design primitives (Button, Accordion, Card, Badge, Dialog, etc.).
   - `sections/`: Distinct landing page sections (Hero, Differentials, EnvironmentsGallery, ProcessTimeline, Testimonials, FAQ, LocationContact, Footer).
   - `layout/`: Header/Navbar, MobileMenu, FloatingWhatsApp, Container.
3. **Application / App Router** (`src/app/`):
   - `layout.tsx`: Root layout, font definitions (e.g., Montserrat/Inter + Playfair Display for luxury accent), SEO metadata, Google Search Console tag hook.
   - `page.tsx`: Landing page composition assembling section components.
   - `sitemap.ts`, `robots.ts`, `manifest.ts`.

---

## 4. Security & Sensitive Data Guard
- Zero secrets or private keys in the repository.
- Lead capture directly redirects to WhatsApp URL with encoded message strings (`https://wa.me/5521998324466?text=...`).
- Zero tracking pixels or third-party cookies executed without user consent.
