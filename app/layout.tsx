import type { Metadata } from "next";
import "./globals.css";

const structuredData = {
  "@context": "https://schema.org",
  "@type": ["AccountingService", "ProfessionalService", "LocalBusiness"],
  name: "Expert Conta Sibiu",
  description: "Servicii de contabilitate, consultanță fiscală și salarizare în Sibiu.",
  telephone: "+40726271212",
  email: "expertcontasibiu@gmail.com",
  address: { "@type": "PostalAddress", streetAddress: "Str. Cornel Medrea, nr. 14", addressLocality: "Șelimbăr", addressRegion: "Sibiu", addressCountry: "RO" },
  openingHours: "Mo-Fr 09:00-16:00",
  areaServed: ["Sibiu", "Șelimbăr"],
  url: "https://expert-conta-sibiu.fairy-pear-0325.chatgpt.site",
};

export const metadata: Metadata = {
  title: "Expert Contabil Sibiu | Contabilitate, Fiscalitate & Salarizare",
  description: "Expert contabil CECCAR în Sibiu. Servicii complete de contabilitate, consultanță fiscală și salarizare pentru SRL, PFA și companii. Peste 11 ani de experiență.",
  keywords: ["expert contabil Sibiu", "contabil Sibiu", "contabilitate Sibiu", "servicii contabilitate Sibiu", "consultant fiscal Sibiu", "salarizare Sibiu"],
  alternates: { canonical: "https://expert-conta-sibiu.fairy-pear-0325.chatgpt.site" },
  openGraph: { title: "Expert Contabil Sibiu | Expert Conta Sibiu", description: "Contabilitate, fiscalitate și salarizare pentru antreprenori și companii din Sibiu.", locale: "ro_RO", type: "website" },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body className="antialiased"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />{children}</body>
    </html>
  );
}
