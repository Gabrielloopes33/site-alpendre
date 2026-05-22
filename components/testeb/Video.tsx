"use client";

import { useRef, useState } from "react";
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

export function Video() {
  const [hovered, setHovered] = useState(false);

  return (
    <section
      data-testid="section-video"
      className="w-full py-24 md:py-32"
      style={{ background: "#0A0A0A" }}
    >
      <div className="max-w-[800px] mx-auto px-6 md:px-20 flex flex-col items-center text-center">
        <AnimatedSection>
          <span
            className="text-xs tracking-[0.18em] uppercase block mb-3"
            style={{ color: "#C9A84C", fontFamily: "'DM Sans', sans-serif" }}
          >
            Assista em 3 minutos
          </span>
          <h2
            className="leading-tight mb-10"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(28px, 4vw, 46px)",
              fontWeight: 400,
              color: "#F5F0E8",
            }}
            data-testid="text-video-headline"
          >
            Antes de preencher, entenda o método.
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div
            data-testid="placeholder-video"
            className="w-full relative cursor-pointer overflow-hidden"
            style={{
              aspectRatio: "16/9",
              border: "1px solid rgba(201,168,76,0.2)",
              position: "relative",
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {/* Background: blurred photo */}
            <img
              src="/alpendre-photo-testeb.jpg"
              alt=""
              aria-hidden
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                filter: "brightness(0.3) blur(4px)",
                transform: "scale(1.05)",
              }}
            />

            {/* Dark overlay */}
            <div
              className="absolute inset-0"
              style={{ background: "rgba(10,10,10,0.6)" }}
            />

            {/* Play button + text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 z-10">
              <motion.div
                animate={{ scale: hovered ? 1.1 : 1 }}
                transition={{ duration: 0.2 }}
                style={{
                  width: "68px",
                  height: "68px",
                  borderRadius: "50%",
                  background: "#C9A84C",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <polygon points="6,4 20,12 6,20" fill="#0A0A0A" />
                </svg>
              </motion.div>

              <div className="text-center">
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "15px",
                    fontWeight: 500,
                    color: "#F5F0E8",
                    marginBottom: "4px",
                  }}
                >
                  Vídeo institucional — Francisco Alpendre
                </p>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "13px",
                    fontWeight: 300,
                    color: "#A09880",
                  }}
                >
                  Como estruturar sua entrada no mercado de contratos públicos
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.25}>
          <p
            className="mt-6"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "13px",
              fontWeight: 300,
              color: "#5A5448",
            }}
          >
            Duração: aproximadamente 3 minutos
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
