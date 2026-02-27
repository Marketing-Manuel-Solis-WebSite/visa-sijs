import type { Metadata } from "next";
import { Lora, Source_Sans_3 } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "../globals.css";
import Script from "next/script";

const lora = Lora({ variable: "--font-serif", subsets: ["latin"], display: "swap", weight: ["400", "600", "700"] });
const sourceSans = Source_Sans_3({ variable: "--font-sans", subsets: ["latin"], display: "swap", weight: ["300", "400", "500", "600", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://visa-sijs.com"),
  title: {
    template: "%s | SIJS 2026 — Special Immigrant Juvenile Status Guide",
    default: "SIJS 2026: Complete Guide — Eligibility, I-360, EB-4, Work Permit & Deferred Action",
  },
  description: "Complete Special Immigrant Juvenile Status (SIJS) guide for 2026. Eligibility requirements, state court orders, I-360 petition, EB-4 Visa Bulletin, deferred action, work permits, and the 2025–2026 policy changes.",
  keywords: [
    "SIJS", "Special Immigrant Juvenile Status", "SIJS 2026", "I-360", "EB-4 visa",
    "SIJS eligibility", "SIJS process", "deferred action SIJS", "SIJS work permit",
    "SIJS green card", "juvenile court immigration", "SIJS visa bulletin",
    "estatus especial inmigrante juvenil", "SIJS requisitos", "SIJS proceso",
    "acción diferida SIJS", "permiso de trabajo SIJS", "SIJS abuso negligencia abandono",
    "A.C.R. v. Noem", "SIJS parents petition",
  ],
  icons: {
    icon: "/visa-sijs.png",
    shortcut: "/visa-sijs.png",
    apple: "/visa-sijs.png",
  },
  openGraph: {
    type: "website",
    siteName: "VISA-SIJS",
    title: "SIJS 2026: Complete Special Immigrant Juvenile Status Guide",
    description: "Everything about SIJS: eligibility, state court orders, I-360, EB-4 wait times, deferred action, work permits, and 2025–2026 policy changes.",
    locale: "en_US",
    alternateLocale: ["es_US"],
    images: [{ url: "/visa-sijs.png", width: 512, height: 512, alt: "VISA-SIJS Logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SIJS 2026: Special Immigrant Juvenile Status Guide",
    description: "Complete SIJS guide: eligibility, process, EB-4 wait times, deferred action, work permits.",
    images: ["/visa-sijs.png"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } },
  category: "Immigration Services",
};

export async function generateStaticParams() {
  return [{ lang: "es" }, { lang: "en" }];
}

export default async function RootLayout({ children, params }: { children: React.ReactNode; params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const validLang = lang === "en" || lang === "es" ? lang : "es";
  const isEnglish = validLang === "en";

  const organizationSchema = {
    "@context": "https://schema.org", "@type": "Organization",
    name: "VISA-SIJS", url: "https://visa-sijs.com",
    logo: "https://visa-sijs.com/visa-sijs.png",
    image: "https://visa-sijs.com/visa-sijs.png",
    description: isEnglish
      ? "Comprehensive SIJS information resource. Eligibility, process, EB-4 wait times, deferred action, and work permits."
      : "Recurso completo de información sobre SIJS. Elegibilidad, proceso, tiempos de espera EB-4, acción diferida y permisos de trabajo.",
    sameAs: ["https://manuelsolis.com"],
  };

  const legalServiceSchema = {
    "@context": "https://schema.org", "@type": "LegalService",
    name: isEnglish ? "SIJS Guide 2026 — Complete Process & Requirements" : "Guía SIJS 2026 — Proceso Completo y Requisitos",
    url: `https://visa-sijs.com/${validLang}`,
    serviceType: "Immigration Legal Information",
    areaServed: { "@type": "Country", name: "United States" },
    availableLanguage: [
      { "@type": "Language", name: "English", alternateName: "en" },
      { "@type": "Language", name: "Spanish", alternateName: "es" },
    ],
  };

  const webSiteSchema = { "@context": "https://schema.org", "@type": "WebSite", name: "VISA-SIJS", url: "https://visa-sijs.com", inLanguage: [validLang] };

  return (
    <html lang={validLang} className={`${lora.variable} ${sourceSans.variable}`} style={{ colorScheme: "light" }}>
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="alternate" hrefLang="es" href="https://visa-sijs.com/es" />
        <link rel="alternate" hrefLang="en" href="https://visa-sijs.com/en" />
        <link rel="alternate" hrefLang="x-default" href="https://visa-sijs.com/es" />
        <Script id="structured-data" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify([organizationSchema, legalServiceSchema, webSiteSchema]) }} />
      </head>
      <body className="antialiased font-sans bg-white text-slate-900">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
