<div align="center">

# 🏛️ Artzen — Ambientes Planejados
### High-End Bespoke Furniture & Architectural Joinery Landing Page

[![Next.js](https://img.shields.io/badge/Next.js-16.3.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Radix UI](https://img.shields.io/badge/Radix_UI-Primitives-blueviolet?style=for-the-badge&logo=radix-ui)](https://www.radix-ui.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

<br />

<p align="center">
  <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85" alt="Artzen Ambientes Planejados Preview" width="850" style="border-radius: 16px; box-shadow: 0 20px 40px -10px rgba(0,0,0,0.15); border: 1px solid #E5DFD5;" />
</p>

<p align="center">
  <strong>Landing page de alta conversão para marcenaria sob medida de alto padrão em Teresópolis - RJ.</strong><br>
  Desenvolvida com arquitetura moderna <em>Mobile-First</em>, design refinado <em>Light Luxury</em> e foco em conversão direta via WhatsApp.
</p>

---

[🚀 Demonstração](#-visão-geral) • [✨ Principais Recursos](#-principais-recursos) • [🏗️ Arquitetura & Stack](#️-arquitetura--stack-tecnológica) • [⚡ Como Rodar](#-como-rodar-o-projeto) • [📐 SEO & Performance](#-seo-técnico--schema-markup) • [📄 Licença](#-licença)

---

</div>

<br>

## 🖼️ Galeria de Experiência Visual

<table align="center">
  <tr>
    <td width="50%" align="center">
      <img src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80" alt="Cozinhas Planejadas" style="border-radius: 12px;" />
      <br><sub><strong>Cozinhas Integradas & Ilhas Gourmet</strong></sub>
    </td>
    <td width="50%" align="center">
      <img src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80" alt="Dormitórios & Closets" style="border-radius: 12px;" />
      <br><sub><strong>Suítes Master & Closets Inteligentes</strong></sub>
    </td>
  </tr>
  <tr>
    <td width="50%" align="center">
      <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80" alt="Home Theaters & Salas" style="border-radius: 12px;" />
      <br><sub><strong>Home Theaters & Salas Integradas</strong></sub>
    </td>
    <td width="50%" align="center">
      <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80" alt="Áreas Gourmet" style="border-radius: 12px;" />
      <br><sub><strong>Varandas & Áreas Gourmet</strong></sub>
    </td>
  </tr>
</table>

<br>

## ✨ Principais Recursos

- 🏛️ **Estética Light Luxury**: Paleta arquitetônica clara com tons off-white (`#FAF9F6`), areia (`#F4F1EA`), acentos em ouro nobre (`#B58F48`) e texturas sutis de projetos em segundo plano.
- 📱 **Mobile-First & Ultra-Wide Responsive**: Experiência visual impecável desde telas compactas (375px) até monitores ultra-wide (> 2560px).
- 🖼️ **Portfólio Interativo com Modal / Ficha Técnica**:
  - Filtro dinâmico de categorias (Cozinhas, Dormitórios, Closets, Banheiros, Salas, Gourmet, Corporativo).
  - Modal com carrossel de fotos, especificações de ferragens, lâminas melamínicas e soluções sob medida.
  - CTAs contextualizados com mensagem pré-formatada para o WhatsApp de cada ambiente específico.
- 💬 **Funil de Conversão Direta via WhatsApp**:
  - Zero fricção (sem formulários extensos ou telas de espera).
  - Widget flutuante com notificação inteligente (`FloatingWhatsApp`) e gatilhos de micro-interação.
- 💎 **Seções Informativas e Quebra de Objeções**:
  - **4 Etapas do Método**: Do briefing e simulação 3D à fabricação CNC e montagem com equipe própria.
  - **Diferenciais Construtivos**: 100% MDF de alta densidade, MDF ultra-hidrófugo, selamento de borda e ferragens soft-close.
  - **FAQ Inteligente**: Accordion expansível com dúvidas sobre orçamentos, prazos e garantia de 5 anos.
  - **Showroom Teresópolis**: Endereço completo, horários de atendimento, rotas no Google Maps e link do Instagram oficial.

<br>

## 🏗️ Arquitetura & Stack Tecnológica

O projeto foi arquitetado seguindo princípios de **Clean Architecture**, **SOLID** e separação rigorosa de responsabilidades:

```text
artzen/
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root Layout, Font Optimization & Schema.org JSON-LD
│   │   ├── page.tsx           # Composição modular das seções da Landing Page
│   │   ├── globals.css        # Tailwind CSS v4 layers, Design Tokens & Fluid Typography
│   │   ├── robots.ts          # Geração dinâmica e otimizada de robots.txt
│   │   └── sitemap.ts         # Sitemap XML para indexação do Google
│   │
│   ├── components/
│   │   ├── layout/            # Header sticky, Footer institucional, Floating WhatsApp
│   │   ├── sections/          # Seções atômicas e isoladas (Hero, Gallery, Timeline, etc.)
│   │   └── ui/                # Componentes base acessíveis (Radix UI + Class Variance Authority)
│   │
│   ├── data/                  # Single Source of Truth para conteúdos, contatos e projetos
│   │   ├── company.ts         # Dados cadastrais, endereço, horários e redes sociais
│   │   ├── environments.ts    # Modelagem completa do portfólio de ambientes e especificações
│   │   ├── differentials.ts   # Diferenciais construtivos de marcenaria
│   │   ├── process.ts         # Etapas do processo de atendimento
│   │   └── faq.ts             # Perguntas e respostas frequentes
│   │
│   └── lib/                   # Utilitários puros (WhatsApp URL builder, cn helper)
```

### Tecnologias Utilizadas

| Camada | Tecnologia | Justificativa Técnica |
| :--- | :--- | :--- |
| **Framework** | Next.js 16.3.4 (App Router) | Renderização estática ultrarrápida (SSG) com Turbopack e zero overhead de servidor |
| **Biblioteca** | React 19 | Hooks modernos, concorrência e tipagem nativa estrita |
| **Linguagem** | TypeScript 5.7 | Type-safety ponta a ponta em todos os dados e componentes |
| **Estilização** | Tailwind CSS v4 + PostCSS | Novo engine de performance baseado no Lightning CSS |
| **Acessibilidade** | Radix UI Primitives | Modais e Accordions acessíveis (WAI-ARIA compliant) |
| **Ícones** | Lucide React | Pacote leve de ícones vetoriais modernos |

<br>

## 📐 SEO Técnico & Schema Markup

A página conta com infraestrutura de SEO técnico de nível enterprise:

- ✅ **Schema.org JSON-LD**: Estruturação semântica rica `LocalBusiness` / `HomeGoodsStore` incluindo endereço, geolocalização (`geo`), horários de funcionamento (`openingHoursSpecification`) e telefones.
- ✅ **Open Graph & Twitter Cards**: Cards configurados para pré-visualização enriquecida no WhatsApp, Facebook, LinkedIn e Telegram.
- ✅ **Metadados Canônicos**: Prevenção de conteúdo duplicado via `canonical` URL.
- ✅ **Sitemap & Robots**: Geração nativa via App Router (`/sitemap.xml` e `/robots.txt`).
- ✅ **Core Web Vitals**: Layouts com `aspect-ratio` explícito e imagens responsivas para garantir **CLS zero**, **LCP < 2.0s** e **INP < 100ms**.

<br>

## ⚡ Como Rodar o Projeto

### Pré-requisitos
- **Node.js**: `v18.18.0` ou superior (Recomendado: Node 20 LTS ou 22)
- **npm**, **pnpm** ou **yarn**

### Instalação e Execução

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/artzen.git

# 2. Acesse a pasta do projeto
cd artzen

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver a aplicação em tempo real.

### Build de Produção

```bash
# Validação de TypeScript e geração de build estático
npm run build

# Executar o preview de produção
npm run start
```

<br>

## 🛡️ Segurança & Boas Práticas

- 🔒 **Zero Sensitive Data**: Não há chaves privadas, senhas ou credenciais expostas no código client-side.
- ♿ **Acessibilidade (a11y)**: Navegação por teclado funcional, estados de foco contrastantes e respeito à diretiva `prefers-reduced-motion`.
- 🧼 **Clean Code**: Código modularizado, sem valores mágicos soltos e centralizado na camada `src/data/`.

<br>

## 📍 Informações Institucionais

- **Empresa**: Artzen Ambientes Planejados
- **Localização**: Av. Feliciano Sodré, 396 - Loja 7 - Várzea, Teresópolis - RJ, 25963-081
- **WhatsApp Comercial**: [+55 21 99832-4466](https://wa.me/5521998324466)
- **Instagram**: [@artzen_teresopolis](https://instagram.com/artzen_teresopolis)

---

<div align="center">
  <p>Desenvolvido com excelência técnica para <strong>Artzen Ambientes Planejados</strong>.</p>
</div>
