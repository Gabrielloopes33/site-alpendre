"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

function AnimatedSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export function Footer() {
  return (
    <footer
      data-testid="section-footer"
      className="w-full py-16 md:py-20"
      style={{
        background: "#0A0A0A",
        borderTop: "1px solid rgba(201,168,76,0.2)",
      }}
    >
      <div className="max-w-[1100px] mx-auto px-6 md:px-20 flex flex-col items-center text-center gap-6">
        <AnimatedSection>
          <div
            style={{
              fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(26px, 4vw, 40px)",
              fontWeight: 600,
              color: "#C9A84C",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
            data-testid="text-footer-name"
          >
            Francisco Alpendre
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.05}>
          <p
            style={{
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
              fontSize: "13px",
              fontWeight: 300,
              color: "#5A5448",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Especialista em PPPs, Concessões e Licitações
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div
            style={{
              width: "40px",
              height: "1px",
              background: "rgba(201,168,76,0.4)",
            }}
          />
        </AnimatedSection>

        {/* Contact links */}
        <AnimatedSection delay={0.15}>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center">
            <a
              href="https://api.whatsapp.com/send?phone=556299818100&text=Ol%C3%A1!%20Gostaria%20de%20conversar%20sobre%20PPPs%20e%20Concess%C3%B5es"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-footer-whatsapp"
              className="flex items-center gap-2"
              style={{
                fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                fontSize: "13px",
                fontWeight: 400,
                color: "#A09880",
                textDecoration: "none",
                letterSpacing: "0.04em",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "#C9A84C")}
              onMouseLeave={e => (e.currentTarget.style.color = "#A09880")}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              (62) 99981-8100
            </a>

            <span style={{ color: "#2A2520", display: "none" }} className="sm:block">·</span>

            <a
              href="https://instagram.com/falpendre"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-footer-instagram"
              style={{
                fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                fontSize: "13px",
                fontWeight: 400,
                color: "#A09880",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "#C9A84C")}
              onMouseLeave={e => (e.currentTarget.style.color = "#A09880")}
            >
              Instagram @falpendre
            </a>

            <a
              href="https://linkedin.com/in/alpendre"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-footer-linkedin"
              style={{
                fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                fontSize: "13px",
                fontWeight: 400,
                color: "#A09880",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "#C9A84C")}
              onMouseLeave={e => (e.currentTarget.style.color = "#A09880")}
            >
              LinkedIn /in/alpendre
            </a>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p
            style={{
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
              fontSize: "11px",
              fontWeight: 300,
              color: "#3A3430",
              letterSpacing: "0.06em",
            }}
          >
            &copy; Francisco Alpendre 2026 &nbsp;&middot;&nbsp;
            <a
              href="#"
              style={{ color: "#3A3430", textDecoration: "none" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#5A5448")}
              onMouseLeave={e => (e.currentTarget.style.color = "#3A3430")}
            >
              Política de Privacidade
            </a>
          </p>
        </AnimatedSection>
      </div>
    </footer>
  );
}
