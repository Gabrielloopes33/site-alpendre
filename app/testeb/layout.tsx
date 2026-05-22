import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, JetBrains_Mono } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Francisco Alpendre - PPPs, Concessoes e Licitacoes (Versao B)",
  description:
    "Especialista em PPPs e Concessoes. Certificado pelo World Bank. +R$600MM em contratos estruturados.",
};

export default function TestebLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${cormorant.variable} ${dmSans.variable} ${jetbrains.variable}`}
      style={{
        background: "#0A0A0A",
        color: "#F5F0E8",
        fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
      }}
    >
      {children}
    </div>
  );
}
