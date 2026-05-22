"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export function Hero() {
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const pulse = () => {
      if (ctaRef.current) {
        ctaRef.current.classList.add("cta-pulse");
        setTimeout(() => ctaRef.current?.classList.remove("cta-pulse"), 1000);
      }
      timeout = setTimeout(pulse, 4000);
    };
    timeout = setTimeout(pulse, 4000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      data-testid="section-hero"
      className="relative w-full min-h-screen flex items-center overflow-hidden"
      style={{ background: "#0A0A0A" }}
    >
      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "256px 256px",
          opacity: 0.6,
          zIndex: 0,
        }}
      />

      <div className="relative z-10 w-full max-w-[1100px] mx-auto px-6 md:px-20 py-24 md:py-0">
        <div className="grid md:grid-cols-2 gap-12 md:gap-8 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            {/* Eyebrow */}
            <div className="flex flex-col gap-3">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-xs tracking-[0.2em] uppercase font-medium"
                style={{ color: "#C9A84C", fontFamily: "var(--font-dm-sans), var(--font-dm-sans), 'DM Sans', sans-serif" }}
                data-testid="text-eyebrow"
              >
                Parcerias Público-Privadas · Concessões · Licitações
              </motion.p>

              {/* Animated gold line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                style={{
                  height: "1px",
                  background: "#C9A84C",
                  opacity: 0.6,
                  transformOrigin: "left",
                  width: "100%",
                  maxWidth: "200px",
                }}
              />
            </div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="leading-[1.1] tracking-tight"
              style={{
                fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(42px, 6vw, 80px)",
                fontWeight: 600,
                color: "#F5F0E8",
              }}
              data-testid="text-hero-headline"
            >
              Você já provou que sabe vender.{" "}
              <span style={{ color: "#C9A84C" }}>Agora é hora</span> de assinar contratos que pagam por anos.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="text-base md:text-lg leading-relaxed"
              style={{ color: "#A09880", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontWeight: 300 }}
              data-testid="text-hero-subheadline"
            >
              Empresários que faturam entre 50 e 100 mil por mês estão descobrindo um mercado com receita protegida por contrato. Alpendre abre esse caminho com método.
            </motion.p>

            {/* Badge row */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65, duration: 0.6 }}
              className="text-xs tracking-[0.12em]"
              style={{ color: "#5A5448", fontFamily: "var(--font-jetbrains), 'JetBrains Mono', monospace" }}
              data-testid="text-hero-badge"
            >
              CP3P · World Bank · APMG International · +R$600MM em contratos estruturados
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <a
                ref={ctaRef}
                href="#qualificacao"
                data-testid="button-hero-cta"
                className="inline-block cta-button"
                style={{
                  background: "#C9A84C",
                  color: "#0A0A0A",
                  fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                  fontWeight: 500,
                  fontSize: "14px",
                  padding: "16px 40px",
                  letterSpacing: "0.07em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  transition: "background 0.2s ease, box-shadow 0.4s ease",
                  display: "inline-block",
                }}
                onMouseEnter={e => (e.currentTarget.style.background = "#E8C97A")}
                onMouseLeave={e => (e.currentTarget.style.background = "#C9A84C")}
              >
                Quero entender se isso faz sentido para mim &rarr;
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Photo */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
            className="relative flex justify-center md:justify-end"
            data-testid="img-hero-photo"
          >
            <div className="relative">
              {/* Gold frame accent */}
              <div
                className="absolute"
                style={{
                  inset: 0,
                  border: "1px solid rgba(201,168,76,0.25)",
                  transform: "translate(12px, 12px)",
                  zIndex: 0,
                }}
              />
              <img
                src="/alpendre-photo-testeb.jpg"
                alt="Francisco Alpendre"
                className="relative z-10 object-cover"
                style={{
                  width: "100%",
                  maxWidth: "420px",
                  maxHeight: "560px",
                  objectPosition: "center top",
                  filter: "brightness(0.88) contrast(1.1) sepia(0.12)",
                }}
              />
              {/* Bottom gradient fade */}
              <div
                className="absolute bottom-0 left-0 right-0 z-20"
                style={{
                  height: "120px",
                  background: "linear-gradient(to bottom, transparent, #0A0A0A)",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          style={{
            width: "1px",
            height: "40px",
            background: "linear-gradient(to bottom, #C9A84C, transparent)",
            margin: "0 auto",
          }}
        />
      </motion.div>

      <style>{`
        .cta-pulse {
          box-shadow: 0 0 0 0 rgba(201,168,76,0.6);
          animation: ctaPulse 1s ease-out;
        }
        @keyframes ctaPulse {
          0% { box-shadow: 0 0 0 0 rgba(201,168,76,0.6); }
          100% { box-shadow: 0 0 0 20px rgba(201,168,76,0); }
        }
      `}</style>
    </section>
  );
}
