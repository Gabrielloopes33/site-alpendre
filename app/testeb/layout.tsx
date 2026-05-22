import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Francisco Alpendre - PPPs, Concessões e Licitações (Versao B)",
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
      style={{
        background: "#0A0A0A",
        color: "#F5F0E8",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {children}
    </div>
  );
}
