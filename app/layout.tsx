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
      <body>{children}</body>
    </html>
  );
}
