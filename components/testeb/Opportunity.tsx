"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const rows = [
  { left: "Contrato de 6–12 meses", right: "Contrato de 20–35 anos" },
  { left: "Renova todo ciclo", right: "Receita garantida em contrato" },
  { left: "Concorrência predatória", right: "Barreiras reguladas de entrada" },
  { left: "Margem comprimida", right: "Reequilíbrio econômico-financeiro" },
  { left: "Depende da venda constante", right: "Proteção contratual legal" },
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

export function Opportunity() {
  return (
    <section
      data-testid="section-opportunity"
      className="w-full py-24 md:py-32"
      style={{ background: "#0A0A0A" }}
    >
      <div className="max-w-[1100px] mx-auto px-6 md:px-20">
        <AnimatedSection>
          <div className="mb-4">
            <span
              className="text-xs tracking-[0.18em] uppercase"
              style={{ color: "#C9A84C", fontFamily: "'DM Sans', sans-serif" }}
            >
              A oportunidade
            </span>
          </div>
          <h2
            className="leading-tight mb-14"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(32px, 4.5vw, 52px)",
              fontWeight: 400,
              color: "#F5F0E8",
              maxWidth: "760px",
            }}
            data-testid="text-opportunity-headline"
          >
            PPPs e Concessões: o mercado onde empresas médias viram gigantes.
          </h2>
        </AnimatedSection>

        {/* Comparison table */}
        <AnimatedSection delay={0.1}>
          <div className="overflow-x-auto mb-14">
            <table className="w-full" style={{ borderCollapse: "separate", borderSpacing: 0 }}>
              <thead>
                <tr>
                  <th
                    className="text-left pb-4 pr-6"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "13px",
                      fontWeight: 400,
                      color: "#5A5448",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      width: "50%",
                      borderBottom: "1px solid #2A2520",
                    }}
                    data-testid="text-table-header-left"
                  >
                    Mercado Privado
                  </th>
                  <th
                    className="text-left pb-4 pl-6"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "13px",
                      fontWeight: 400,
                      color: "#C9A84C",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      width: "50%",
                      borderBottom: "1px solid rgba(201,168,76,0.3)",
                    }}
                    data-testid="text-table-header-right"
                  >
                    Mercado Público (PPP/Concessão)
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={i} data-testid={`row-comparison-${i}`}>
                    <td
                      className="py-4 pr-6"
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "15px",
                        fontWeight: 300,
                        color: "#5A5448",
                        borderBottom: "1px solid #2A2520",
                        textDecoration: "line-through",
                        textDecorationColor: "#3A3430",
                      }}
                    >
                      {row.left}
                    </td>
                    <td
                      className="py-4 pl-6"
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "15px",
                        fontWeight: 400,
                        color: "#E8C97A",
                        borderBottom: "1px solid rgba(201,168,76,0.15)",
                        background: "rgba(201,168,76,0.04)",
                      }}
                    >
                      {row.right}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimatedSection>

        {/* Stat */}
        <AnimatedSection delay={0.2}>
          <div
            className="py-10 px-8 md:px-12 text-center"
            style={{
              border: "1px solid rgba(201,168,76,0.2)",
              background: "rgba(201,168,76,0.03)",
            }}
          >
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "clamp(15px, 2vw, 17px)",
                fontWeight: 300,
                color: "#A09880",
                lineHeight: 1.8,
              }}
              data-testid="text-opportunity-stat"
            >
              Mais de{" "}
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "clamp(22px, 3vw, 36px)",
                  fontWeight: 500,
                  color: "#C9A84C",
                }}
              >
                5.000
              </span>{" "}
              municípios brasileiros têm demanda por PPPs e concessões.{" "}
              <br className="hidden md:block" />
              A maioria sem operador privado qualificado.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
