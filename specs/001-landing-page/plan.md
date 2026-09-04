# Implementation Plan: Artzen Ambientes Planejados Landing Page

**Branch**: `001-landing-page` | **Date**: 2026-09-04 | **Spec**: [specs/001-landing-page/spec.md](specs/001-landing-page/spec.md)

**Input**: Feature specification from `/specs/001-landing-page/spec.md`

## Summary

Build a high-conversion, modern, responsive landing page for Artzen Ambientes Planejados (Teresópolis - RJ). The solution will be engineered using Next.js (App Router), Tailwind CSS v4, and shadcn/ui component primitives. The architecture enforces Clean Architecture principles with separated domain models, centralized data constants, modular UI section components, complete technical SEO (Open Graph, sitemap, Schema.org LocalBusiness JSON-LD), and zero sensitive data.

## Technical Context

**Language/Version**: TypeScript 5.x / Node.js 20+

**Primary Dependencies**: Next.js (latest App Router), React 19, Tailwind CSS v4, Lucide React, Radix UI primitives / shadcn/ui components (`class-variance-authority`, `clsx`, `tailwind-merge`)

**Storage**: N/A (Static SSG with immutable client data models in `src/data/`)

**Testing**: Visual verification, TypeScript type-checking, ESLint gates, and Lighthouse SEO audits (Automated tests omitted per Constitution Principle VI)

**Target Platform**: Web (Modern browsers, Mobile-First responsive through 4K/ultra-wide displays)

**Project Type**: Next.js Web Application / High-Performance Landing Page

**Performance Goals**: Core Web Vitals (LCP < 2.0s, CLS < 0.05, INP < 100ms, Lighthouse score 90+)

**Constraints**: Zero sensitive data in code/bundle; 100% Mobile-First responsive; strict SEO compliance; direct conversion to WhatsApp (+55 21 99832-4466)

**Scale/Scope**: Single high-impact landing page with modular sections, category gallery filter, FAQ accordion, location map, and floating actions

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- [x] **Principle I (Clean Code & Clean Architecture)**: Decoupled layers (`src/data/` for data constants, `src/components/ui/` for primitives, `src/components/sections/` for layout modules, `src/app/` for routing/SEO).
- [x] **Principle II (Modern, Interactive & Professional UI/UX)**: Clean modern palette, smooth hover/focus states, accessible Radix UI primitives, GPU-accelerated micro-interactions.
- [x] **Principle III (Mobile-First & Multi-Screen Responsive)**: Tailored for 375px base viewports with fluid container scaling for large/ultra-wide screens (`clamp()`, max-w-7xl/8xl).
- [x] **Principle IV (Technical SEO & Discoverability)**: Metadata API, Open Graph, Twitter Cards, Schema.org JSON-LD LocalBusiness, robots.ts, and sitemap.ts.
- [x] **Principle V (Zero Sensitive Data)**: Static frontend with environment-free public contact URLs; no credentials in bundle.
- [x] **Principle VI (Pragmatic Quality Assurance)**: Automated test frameworks omitted; verified via `npm run build`, linting, and responsive inspection.

## Project Structure

### Documentation (this feature)

```text
specs/001-landing-page/
├── plan.md              # This implementation plan
├── research.md          # Technical research and decisions
├── data-model.md        # Domain models and TypeScript contracts
├── quickstart.md        # Verification and build guide
├── contracts/
│   └── ui-contracts.md  # UI hierarchy and integration contracts
├── checklists/
│   └── requirements.md  # Spec quality checklist
└── tasks.md             # Generated implementation tasks
```

### Source Code (repository root)

```text
src/
├── app/
│   ├── layout.tsx         # Root layout with fonts, SEO metadata & Schema JSON-LD
│   ├── page.tsx           # Landing page composition assembling section components
│   ├── robots.ts          # Search engine crawler instructions
│   ├── sitemap.ts         # Automated XML sitemap
│   └── globals.css        # Tailwind CSS v4 directives & theme tokens
├── components/
│   ├── layout/
│   │   ├── Header.tsx     # Sticky navigation with mobile hamburger drawer
│   │   ├── Footer.tsx     # Footer with brand info, sitemap links & local SEO text
│   │   └── FloatingWhatsApp.tsx # Persistent floating WhatsApp contact button
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── TrustBadgesSection.tsx
│   │   ├── QuickLeadForm.tsx
│   │   ├── DifferentialsSection.tsx
│   │   ├── EnvironmentsGallerySection.tsx
│   │   ├── ProjectDetailModal.tsx
│   │   ├── ProcessTimelineSection.tsx
│   │   ├── MaterialsQualitySection.tsx
│   │   ├── FaqSection.tsx
│   │   ├── LocationContactSection.tsx
│   │   └── CtaBannerSection.tsx
│   └── ui/
│       ├── button.tsx
│       ├── accordion.tsx
│       ├── card.tsx
│       ├── badge.tsx
│       └── dialog.tsx
├── data/
│   ├── company.ts         # Immutable business information, location & contacts
│   ├── environments.ts    # Portfolio project catalog by room category
│   ├── differentials.ts   # Core value propositions & guarantees (100% MDF)
│   ├── process.ts         # 4-step client workflow
│   └── faq.ts             # FAQ questions and answers
└── lib/
    ├── utils.ts           # Styling helper (cn / clsx / tailwind-merge)
    └── whatsapp.ts        # WhatsApp message URL builder
```

**Structure Decision**: Single Next.js web application following Clean Architecture with strict separation between data definitions, reusable UI primitives, section containers, and page composition.

## Complexity Tracking

> No constitution violations detected. Complexity remains minimal and aligned with static high-performance landing page requirements.
