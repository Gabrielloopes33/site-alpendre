import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://alpendre.com.br"),
  title: "Francisco Alpendre - PPPs, Concessões e Licitações para Empresas",
  description:
    "Especialista em PPPs e Concessões. Certificado pelo World Bank. +R$512MM em contratos estruturados.",
  openGraph: {
    title: "Francisco Alpendre - PPPs, Concessões e Licitações para Empresas",
    description:
      "Para empresários que querem contratos de longo prazo com o poder público.",
    images: ["/alpendre-og.jpg"]
  },
  alternates: {
    canonical: "https://alpendre.com.br/"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=DM+Sans:wght@300;400;500&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
