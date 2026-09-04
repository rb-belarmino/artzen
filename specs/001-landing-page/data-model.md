# Data Model & Domain Entities: Artzen Ambientes Planejados

This document specifies the TypeScript domain models and immutable data contracts for the Artzen Landing Page.

## 1. Company Profile (`CompanyInfo`)

```typescript
export interface CompanyInfo {
  readonly name: string;
  readonly legalName: string;
  readonly tagline: string;
  readonly description: string;
  readonly city: string;
  readonly state: string;
  readonly address: {
    readonly street: string;
    readonly number: string;
    readonly complement: string;
    readonly neighborhood: string;
    readonly city: string;
    readonly state: string;
    readonly postalCode?: string;
    readonly googleMapsUrl: string;
    readonly googleMapsEmbedUrl?: string;
  };
  readonly contacts: {
    readonly phone: string;
    readonly whatsappNumber: string; // "5521998324466"
    readonly whatsappDisplay: string; // "+55 (21) 99832-4466"
    readonly defaultWhatsAppMessage: string;
  };
  readonly social: {
    readonly instagramUrl: string; // "https://www.instagram.com/artzen_teresopolis"
    readonly instagramHandle: string; // "@artzen_teresopolis"
    readonly facebookUrl?: string;
  };
  readonly businessHours: readonly {
    readonly days: string; // e.g., "Segunda a Sexta"
    readonly hours: string; // e.g., "09:00 - 18:00"
  }[];
}
```

---

## 2. Environment / Portfolio Project (`EnvironmentItem`)

```typescript
export type EnvironmentCategory = 
  | 'todos'
  | 'cozinhas'
  | 'dormitorios'
  | 'salas'
  | 'banheiros'
  | 'gourmet'
  | 'corporativo';

export interface EnvironmentItem {
  readonly id: string;
  readonly title: string;
  readonly category: EnvironmentCategory;
  readonly categoryLabel: string;
  readonly shortDescription: string;
  readonly fullDescription: string;
  readonly image: string;
  readonly thumbnail?: string;
  readonly highlights: readonly string[];
  readonly featured: boolean;
}
```

---

## 3. Differentials (`DifferentialItem`)

```typescript
export interface DifferentialItem {
  readonly id: string;
  readonly iconName: string; // Lucide icon identifier (e.g., "Layers", "ShieldCheck", "Clock", "Sparkles", "Ruler")
  readonly title: string;
  readonly description: string;
  readonly highlightBadge?: string;
}
```

---

## 4. Process Step (`ProcessStepItem`)

```typescript
export interface ProcessStepItem {
  readonly stepNumber: number; // 1, 2, 3, 4
  readonly stepLabel: string; // "Etapa 01"
  readonly title: string;
  readonly description: string;
  readonly iconName: string;
  readonly deliverables: readonly string[];
}
```

---

## 5. FAQ Item (`FaqItem`)

```typescript
export interface FaqItem {
  readonly id: string;
  readonly question: string;
  readonly answer: string;
  readonly category?: string;
}
```
