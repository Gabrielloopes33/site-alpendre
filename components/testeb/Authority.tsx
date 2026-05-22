"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

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

function CountUp({ target, suffix = "", duration = 2000 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target, duration]);

  return (
    <span ref={ref} style={{ fontFamily: "var(--font-jetbrains), 'JetBrains Mono', monospace", color: "#C9A84C" }}>
      {count}{suffix}
    </span>
  );
}

const credentials = ["World Bank / APMG CP3P", "FUNPAR / UFPR", "FGV", "Harvard Law School", "OAB/PR"];

const testimonials = [
  {
    quote: "Assinamos contrato de R$ 8MM para iluminação pública em 4 meses de consultoria.",
    name: "Diretor, Operadora Regional",
  },
  {
    quote: "Saí de tentativas frustradas para uma proposta tecnicamente competitiva com segurança jurídica.",
    name: "Sócia, Empresa de Infraestrutura",
  },
];

export function Authority() {
  return (
    <section
      data-testid="section-authority"
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
              Quem vai abrir essa porta para você
            </span>
          </div>
          <h2
            className="leading-tight mb-16"
            style={{
              fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(32px, 4.5vw, 52px)",
              fontWeight: 400,
              color: "#F5F0E8",
            }}
            data-testid="text-authority-headline"
          >
            Autoridade internacional, execução local.
          </h2>
        </AnimatedSection>

        {/* Bio + Photo */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start mb-16">
          <AnimatedSection delay={0.1}>
            <div className="relative">
              <div
                className="absolute"
                style={{
                  inset: 0,
                  border: "1px solid rgba(201,168,76,0.2)",
                  transform: "translate(10px, 10px)",
                  zIndex: 0,
                }}
              />
              <img
                src="/alpendre-photo-testeb.jpg"
                alt="Francisco Alpendre"
                className="relative z-10 w-full object-cover"
                style={{
                  maxHeight: "480px",
                  objectPosition: "center top",
                  filter: "brightness(0.85) contrast(1.08) sepia(0.1)",
                }}
                data-testid="img-authority-photo"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="flex flex-col gap-7">
              <p
                style={{
                  fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                  fontSize: "16px",
                  fontWeight: 300,
                  color: "#A09880",
                  lineHeight: 1.8,
                }}
              >
                Francisco Alpendre passou os últimos 15 anos estruturando PPPs e concessões municipais, do zero até o contrato assinado. É um dos poucos brasileiros certificados no programa CP3P do World Bank — a certificação internacional mais rigorosa em Parcerias Público-Privadas.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                  fontSize: "15px",
                  fontWeight: 300,
                  color: "#5A5448",
                  lineHeight: 1.8,
                }}
              >
                Graduado em Direito pela UFSC, Mestrado em Organizações e Desenvolvimento pela UNIFAE, MBA pela FGV, Program on Negotiation pela Harvard Law School e módulo executivo internacional pela Universidade de Chicago.
              </p>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-4 py-6" style={{ borderTop: "1px solid #2A2520", borderBottom: "1px solid #2A2520" }}>
                {[
                  { value: 15, suffix: "+", unit: "anos", label: "de experiência" },
                  { value: 600, suffix: "MM+", unit: "R$", label: "em contratos" },
                  { value: 100, suffix: "+", unit: "", label: "empresas impactadas" },
                ].map((stat, i) => (
                  <div key={i} className="text-center" data-testid={`stat-authority-${i}`}>
                    <div
                      style={{
                        fontFamily: "var(--font-jetbrains), 'JetBrains Mono', monospace",
                        fontSize: "clamp(18px, 2.5vw, 28px)",
                        fontWeight: 500,
                        color: "#C9A84C",
                        lineHeight: 1.1,
                      }}
                    >
                      {stat.unit && <span style={{ fontSize: "0.65em", color: "#A09880" }}>{stat.unit}</span>}
                      <CountUp target={stat.value} suffix={stat.suffix} />
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                        fontSize: "11px",
                        color: "#5A5448",
                        marginTop: "4px",
                        letterSpacing: "0.05em",
                        textTransform: "uppercase",
                      }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Credentials */}
              <div className="flex flex-wrap gap-2">
                {credentials.map((c, i) => (
                  <span
                    key={i}
                    data-testid={`badge-credential-${i}`}
                    style={{
                      fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                      fontSize: "11px",
                      fontWeight: 400,
                      color: "#A09880",
                      padding: "4px 10px",
                      border: "1px solid #2A2520",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <AnimatedSection key={i} delay={0.2 + i * 0.1}>
              <div
                data-testid={`card-testimonial-${i}`}
                className="p-8"
                style={{
                  background: "#1A1A1A",
                  border: "1px solid rgba(201,168,76,0.15)",
                  boxShadow: "0 4px 24px rgba(201,168,76,0.04)",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
                    fontSize: "22px",
                    color: "#C9A84C",
                    lineHeight: 1,
                    marginBottom: "12px",
                  }}
                >
                  &ldquo;
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                    fontSize: "15px",
                    fontWeight: 300,
                    color: "#F5F0E8",
                    lineHeight: 1.75,
                    marginBottom: "16px",
                  }}
                >
                  {t.quote}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                    fontSize: "12px",
                    fontWeight: 400,
                    color: "#5A5448",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  — {t.name}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
