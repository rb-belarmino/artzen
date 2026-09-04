import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { COMPANY_DATA } from "@/data/company";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Artzen Ambientes Planejados | Móveis Sob Medida em Teresópolis - RJ",
  description:
    "Móveis planejados de alto padrão em Teresópolis - RJ. Projetos 3D personalizados, 100% MDF de alta densidade, ferragens premium com amortecimento e montagem especializada.",
  keywords: [
    "móveis planejados teresópolis",
    "ambientes planejados teresópolis",
    "cozinhas planejadas teresópolis",
    "marcenaria teresópolis rj",
    "móveis sob medida teresópolis",
    "closet planejado teresópolis",
    "artzen móveis planejados",
    "artzen ambientes",
  ],
  authors: [{ name: COMPANY_DATA.name }],
  creator: COMPANY_DATA.name,
  metadataBase: new URL("https://artzenplanejados.com.br"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Artzen Ambientes Planejados | Móveis Sob Medida em Teresópolis - RJ",
    description:
      "Transforme seu lar com móveis planejados 100% MDF, ferragens premium e projetos 3D sob medida em Teresópolis e Região Serrana.",
    url: "https://artzenplanejados.com.br",
    siteName: COMPANY_DATA.name,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: "Artzen Ambientes Planejados Teresópolis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Artzen Ambientes Planejados | Móveis Sob Medida em Teresópolis",
    description:
      "Projetos 3D exclusivos, 100% MDF e montagem própria especializada em Teresópolis - RJ.",
    images: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&h=630&q=80"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org LocalBusiness JSON-LD for Technical SEO
  const schemaJsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeGoodsStore",
    name: COMPANY_DATA.name,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    description: COMPANY_DATA.shortDescription,
    telephone: COMPANY_DATA.contacts.whatsappDisplay,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${COMPANY_DATA.address.street}, ${COMPANY_DATA.address.number} - ${COMPANY_DATA.address.complement}`,
      addressLocality: COMPANY_DATA.address.city,
      addressRegion: COMPANY_DATA.address.state,
      postalCode: COMPANY_DATA.address.postalCode,
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -22.426027,
      longitude: -42.973419,
    },
    url: "https://artzenplanejados.com.br",
    priceRange: "$$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "13:00",
      },
    ],
    sameAs: [
      COMPANY_DATA.social.instagramUrl,
      COMPANY_DATA.social.facebookUrl,
    ],
  };

  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-white text-[#3D2B1F]">
        {children}
      </body>
    </html>
  );
}
