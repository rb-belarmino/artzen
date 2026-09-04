# Quickstart & Verification Guide: Artzen Landing Page

## Prerequisites
- Node.js >= 20.x
- npm / yarn / pnpm

## Setup Commands
```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

## Production Build & Static Export Verification
```bash
# Verify TypeScript types and build output
npm run build

# Run production preview
npm run start
```

## Verification Checklist
1. **Responsive Viewports**:
   - Mobile: 375px & 414px (Verify hamburger menu, touch targets, WhatsApp sticky CTA)
   - Tablet: 768px & 1024px (Verify multi-column grids and spacing)
   - Desktop: 1440px & 1920px (Verify max-width containers and visual balance)
2. **Interactive Elements**:
   - All WhatsApp buttons trigger WhatsApp chat with correct phone number (+55 21 99832-4466)
   - Portfolio category filtering switches projects without layout shift
   - FAQ accordion expands and collapses smoothly
3. **SEO & Metadata**:
   - `<head>` contains valid title, description, Open Graph tags, and canonical link
   - `/robots.txt` and `/sitemap.xml` resolve properly
   - Schema.org JSON-LD validates without errors on Google Rich Results tool
4. **Security & Secrets**:
   - No `.env` files with secret keys committed, bundle contains zero sensitive credentials
