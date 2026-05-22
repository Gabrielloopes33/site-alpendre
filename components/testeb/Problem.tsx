"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const problems = [
  {
    title: "Vendas que dependem de você",
    body: "Todo mês começa do zero. A empresa cresce, mas a pressão também.",
  },
  {
    title: "Concorrência de preço sem fim",
    body: "Sempre tem alguém cobrando menos e sua margem continua espremida.",
  },
  {
    title: "Receita sem previsibilidade",
    body: "Bom mês, mau mês. A instabilidade virou regra, não exceção.",
  },
];

function AnimatedSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export function Problem() {
  return (
    <section
      data-testid="section-problem"
      className="w-full py-24 md:py-32"
      style={{ background: "#111111" }}
    >
      <div className="max-w-[1100px] mx-auto px-6 md:px-20">
        <AnimatedSection>
          <div className="mb-4">
            <span
              className="text-xs tracking-[0.18em] uppercase"
              style={{ color: "#C9A84C", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}
            >
              O diagnóstico
            </span>
          </div>
          <h2
            className="leading-tight mb-16"
            style={{
              fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(32px, 4.5vw, 52px)",
              fontWeight: 400,
              color: "#F5F0E8",
              maxWidth: "720px",
            }}
            data-testid="text-problem-headline"
          >
            O mercado que você conhece tem teto.{" "}
            <em>E você já está perto dele.</em>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {problems.map((p, i) => (
            <AnimatedSection key={i} delay={0.1 * (i + 1)}>
              <div
                data-testid={`card-problem-${i}`}
                className="p-8 h-full"
                style={{
                  background: "#1A1A1A",
                  border: "1px solid #2A2520",
                }}
              >
                {/* Red dot */}
                <div
                  className="mb-5"
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "#C0392B",
                  }}
                />
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                    fontSize: "18px",
                    fontWeight: 500,
                    color: "#F5F0E8",
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                    fontSize: "15px",
                    fontWeight: 300,
                    color: "#A09880",
                    lineHeight: 1.7,
                  }}
                >
                  {p.body}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <div
            className="py-10 px-8 md:px-12"
            style={{
              borderLeft: "2px solid #C9A84C",
              background: "rgba(201,168,76,0.04)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(20px, 2.5vw, 26px)",
                fontWeight: 400,
                fontStyle: "italic",
                color: "#E8C97A",
                lineHeight: 1.6,
              }}
              data-testid="text-problem-transition"
            >
              Existe um mercado em que esses três problemas deixam de comandar sua empresa: contratos públicos de 20 a 30 anos, receita contratada, regras claras e mecanismos de reequilíbrio.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
