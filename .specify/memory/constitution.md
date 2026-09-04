<!--
SYNC IMPACT REPORT
==================
Version change: Uninitialized Template -> 1.0.0
Modified principles:
  - Added Principle I: Clean Code & Clean Architecture
  - Added Principle II: Modern, Interactive & Professional UI/UX
  - Added Principle III: Mobile-First & Multi-Screen Responsive Architecture
  - Added Principle IV: Complete Technical SEO & Discoverability
  - Added Principle V: Zero Sensitive Data & Client-Side Security
  - Added Principle VI: Pragmatic Quality Assurance (No Automated Tests Required)
Added sections:
  - Core Principles
  - Security, SEO & Performance Standards
  - Development Workflow & Quality Gates
  - Governance
Removed sections:
  - None (scaffold initialized from constitution-template)
Follow-up TODOs:
  - None
-->

# Artzen Constitution

## Core Principles

### I. Clean Code & Clean Architecture
Every component, utility, and module in Artzen MUST adhere strictly to Clean Code practices and separation of concerns.
- Code MUST follow SOLID principles, high cohesion, low coupling, and explicit single-responsibility boundaries.
- Business logic, layout presentation, data models, and static assets MUST be cleanly decoupled and placed in modular layers.
- Functions and components MUST remain focused, self-documenting, and avoid deep nesting, dead code, or magic strings/values.

### II. Modern, Interactive & Professional UI/UX
The landing page MUST deliver a cutting-edge, fluid, and engaging visual experience that reflects a modern aesthetic.
- UI elements MUST incorporate smooth micro-interactions, refined transitions, accessible hover/focus states, and harmonious typography.
- Performance MUST not be sacrificed for aesthetics: animations MUST be GPU-accelerated (`transform`, `opacity`) and respect `prefers-reduced-motion`.
- Design tokens (colors, spacing, typography scale) MUST be centralized to maintain visual consistency across all viewports.

### III. Mobile-First & Multi-Screen Responsive Architecture
All layouts MUST be engineered using a strict Mobile-First paradigm, scaling seamlessly to ultra-large viewports.
- Base styles MUST cater to small screens and progressively enhance for tablets, standard desktops, and high-resolution large displays (`> 1440px` and ultra-wide).
- Content MUST adapt fluidly using modern responsive techniques (CSS Grid, Flexbox, responsive units like `rem`, `ch`, `clamp()`) without horizontal overflow or broken aspect ratios.
- Touch targets and mobile gestures MUST be ergonomically sized and accessible (minimum 44x44px clickable areas).

### IV. Complete Technical SEO & Discoverability
Artzen MUST be fully optimized for search engine indexing, social sharing, and search console compliance.
- Semantic HTML5 elements (`<main>`, `<header>`, `<nav>`, `<article>`, `<section>`, `<footer>`, proper heading hierarchy `<h1>`-`<h6>`) MUST be used across all templates.
- Metadata MUST be exhaustively defined: Open Graph tags, Twitter Cards, canonical URLs, meta descriptions, and structured schema markup (JSON-LD).
- Technical SEO artifacts MUST be maintained: an automated/updated `sitemap.xml`, `robots.txt`, and verification tags/files for Google Search Console.

### V. Zero Sensitive Data & Client-Side Security
The codebase and build artifacts MUST NOT contain sensitive information, secrets, credentials, or private configurations.
- API keys, secrets, private tokens, passwords, and environment credentials MUST NEVER be hardcoded, tracked in version control, or exposed in client bundles.
- External integrations or contact/lead generation endpoints MUST communicate only with public-safe handlers or environment-driven configurations adhering to the principle of least privilege.
- Content Security Policy (CSP) and secure header best practices MUST guide asset delivery and external resource loading.

### VI. Pragmatic Quality Assurance (No Automated Tests Required)
Given the focused nature of the landing page, automated test suites (unit, integration, or end-to-end testing frameworks) are explicitly not required.
- Quality verification MUST be achieved through visual inspection, cross-device/viewport validation, SEO audits (e.g., Lighthouse), and linting/type-checking gates.
- Eliminating automated testing boilerplate keeps the project lightweight and agile, focusing engineering resources purely on UI fidelity, performance, and SEO compliance.

## Security, SEO & Performance Standards

- **Core Web Vitals**: Pages MUST achieve high performance ratings on Google Lighthouse (targeting 90+ across Performance, Accessibility, Best Practices, and SEO).
- **Asset Optimization**: Images MUST be served in modern formats (AVIF/WebP) with explicit responsive sizes (`srcset`/`sizes`) and lazy loading enabled for below-the-fold content.
- **Privacy & Security**: Codebases must remain clean of secrets, tracking scripts without user awareness, and unvetted third-party runtime dependencies.

## Development Workflow & Quality Gates

- **Static Validation**: Code MUST pass strict linting, type-checking, and formatting gates before being merged.
- **Multi-Device Review**: Every UI change MUST be visually validated across breakpoints (Mobile: 375px–428px, Tablet: 768px–1024px, Desktop: 1280px–1440px, Large Screen: 1920px+).
- **SEO & Search Console Check**: New routes or structural changes MUST include corresponding metadata, Open Graph updates, and sitemap entries.

## Governance

- The Artzen Constitution is the supreme design and architectural authority for this repository.
- Any architectural deviations or principle changes require formal amendments to this document with justification and semantic version updates.
- Versioning policy:
  - **MAJOR**: Changes removing or redefining core architectural invariants.
  - **MINOR**: Addition of new principles, standards, or structural sections.
  - **PATCH**: Non-semantic clarifications, typo corrections, or minor wording refinements.

**Version**: 1.0.0 | **Ratified**: 2026-09-04 | **Last Amended**: 2026-09-04
