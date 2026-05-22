"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Accordion } from "./Accordion";

interface Answers {
  faturamento: string | null;
  maturidade: string | null;
  intencao: string | null;
}

const faturamentoOptions = [
  "Menos de R$ 20.000",
  "R$ 20.000 – R$ 50.000",
  "R$ 50.000 – R$ 150.000",
  "Acima de R$ 150.000",
];

const maturidadeOptions = [
  "Nunca",
  "Sim, sem sucesso",
  "Sim, com algum contrato",
  "Tenho experiência relevante na área",
];

const intencaoOptions = [
  "Entender como funciona esse mercado",
  "Avaliar se minha empresa tem perfil para entrar",
  "Já decidi e quero dar o próximo passo",
  "Tenho um projeto específico em vista",
];

const faqItems = [
  {
    question: "Preciso já ter experiência em licitação para começar?",
    answer: "Não. O primeiro passo é um diagnóstico para definir a rota certa: entrada, correção de estratégia ou aceleração.",
  },
  {
    question: "Esse trabalho é só para empresas privadas?",
    answer: "O foco principal desta página é empresários. Projetos com prefeituras são avaliados sob escopo específico.",
  },
  {
    question: "Como funciona o primeiro contato?",
    answer: "Você preenche a qualificação e recebe retorno em até 24h úteis para uma conversa inicial de diagnóstico, sem pressão comercial.",
  },
];

function OptionButton({
  label,
  selected,
  onClick,
  testId,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
  testId: string;
}) {
  return (
    <button
      data-testid={testId}
      onClick={onClick}
      style={{
        background: selected ? "rgba(201,168,76,0.08)" : "#1A1A1A",
        border: selected ? "1px solid #C9A84C" : "1px solid #2A2520",
        color: selected ? "#F5F0E8" : "#A09880",
        fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
        fontSize: "14px",
        fontWeight: selected ? 400 : 300,
        padding: "12px 20px",
        cursor: "pointer",
        textAlign: "left",
        width: "100%",
        transition: "all 200ms ease",
      }}
      onMouseEnter={e => {
        if (!selected) {
          (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(201,168,76,0.5)";
        }
      }}
      onMouseLeave={e => {
        if (!selected) {
          (e.currentTarget as HTMLButtonElement).style.borderColor = "#2A2520";
        }
      }}
    >
      {label}
    </button>
  );
}

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

function LeadForm({ answers }: { answers: Answers }) {
  const [nome, setNome] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome,
          whatsapp,
          email,
          faturamento: answers.faturamento,
          maturidade: answers.maturidade,
          intencao: answers.intencao,
        }),
      });
    } catch {
      // silent fail
    }
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center py-12 px-8"
        style={{
          background: "#1A1A1A",
          border: "1px solid rgba(201,168,76,0.2)",
        }}
        data-testid="text-form-success"
      >
        <div
          style={{
            fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(28px, 4vw, 40px)",
            fontWeight: 400,
            color: "#C9A84C",
            marginBottom: "16px",
          }}
        >
          Ótimo. Você deu o primeiro passo.
        </div>
        <p
          style={{
            fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
            fontSize: "16px",
            fontWeight: 300,
            color: "#A09880",
            marginBottom: "24px",
            lineHeight: 1.75,
          }}
        >
          Nossa equipe vai entrar em contato em até 24h. Enquanto isso, acompanhe o @falpendre no Instagram.
        </p>
        <a
          href="https://instagram.com/falpendre"
          target="_blank"
          rel="noopener noreferrer"
          data-testid="link-instagram-thankyou"
          style={{
            fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
            fontSize: "13px",
            fontWeight: 500,
            color: "#C9A84C",
            textDecoration: "none",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          @falpendre no Instagram &rarr;
        </a>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="flex flex-col gap-4"
      data-testid="form-lead-capture"
    >
      <div className="mb-2">
        <span
          className="text-xs tracking-[0.18em] uppercase"
          style={{ color: "#C9A84C", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}
        >
          Contato executivo
        </span>
        <h3
          className="mt-2"
          style={{
            fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(24px, 3vw, 36px)",
            fontWeight: 400,
            color: "#F5F0E8",
          }}
        >
          Fale com a equipe do Alpendre
        </h3>
      </div>

      {[
        { id: "nome", label: "Nome completo", value: nome, setter: setNome, placeholder: "Seu nome completo", required: true },
        { id: "whatsapp", label: "WhatsApp", value: whatsapp, setter: setWhatsapp, placeholder: "+55 (XX) XXXXX-XXXX", required: true },
        { id: "email", label: "E-mail (opcional)", value: email, setter: setEmail, placeholder: "seu@email.com.br", required: false },
      ].map(field => (
        <div key={field.id} className="flex flex-col gap-1">
          <label
            htmlFor={field.id}
            style={{
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
              fontSize: "12px",
              fontWeight: 400,
              color: "#5A5448",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            {field.label}
          </label>
          <input
            id={field.id}
            data-testid={`input-${field.id}`}
            type="text"
            value={field.value}
            onChange={e => field.setter(e.target.value)}
            placeholder={field.placeholder}
            required={field.required}
            style={{
              background: "#1A1A1A",
              border: "1px solid #2A2520",
              color: "#F5F0E8",
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
              fontSize: "15px",
              fontWeight: 300,
              padding: "14px 16px",
              outline: "none",
              transition: "border-color 0.2s ease",
              width: "100%",
            }}
            onFocus={e => (e.target.style.borderColor = "#C9A84C")}
            onBlur={e => (e.target.style.borderColor = "#2A2520")}
          />
        </div>
      ))}

      <button
        type="submit"
        disabled={loading}
        data-testid="button-form-submit"
        style={{
          marginTop: "8px",
          background: "#C9A84C",
          color: "#0A0A0A",
          fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
          fontWeight: 500,
          fontSize: "14px",
          padding: "18px 40px",
          border: "none",
          letterSpacing: "0.07em",
          textTransform: "uppercase",
          cursor: loading ? "wait" : "pointer",
          transition: "background 0.2s ease",
          opacity: loading ? 0.7 : 1,
          width: "100%",
        }}
        onMouseEnter={e => { if (!loading) (e.currentTarget as HTMLButtonElement).style.background = "#E8C97A"; }}
        onMouseLeave={e => { if (!loading) (e.currentTarget as HTMLButtonElement).style.background = "#C9A84C"; }}
      >
        {loading ? "Enviando..." : "Quero falar com a equipe do Alpendre →"}
      </button>

      <p
        style={{
          fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
          fontSize: "12px",
          fontWeight: 300,
          color: "#5A5448",
          textAlign: "center",
          marginTop: "4px",
        }}
      >
        Você receberá um contato em até 24 horas úteis. Sem spam, sem pressão.
      </p>
    </motion.form>
  );
}

export function Qualification() {
  const [answers, setAnswers] = useState<Answers>({
    faturamento: null,
    maturidade: null,
    intencao: null,
  });

  const isDisqualified = answers.faturamento === "Menos de R$ 20.000";
  const showQ2 = answers.faturamento !== null && !isDisqualified;
  const showQ3 = showQ2 && answers.maturidade !== null;
  const showForm = showQ3 && answers.intencao !== null;

  return (
    <section
      data-testid="section-qualification"
      id="qualificacao"
      className="w-full py-24 md:py-32"
      style={{ background: "#111111" }}
    >
      <div className="max-w-[1100px] mx-auto px-6 md:px-20">
        {/* Qualification block */}
        <div className="max-w-[760px] mx-auto mb-20">
          <AnimatedSection>
            <div className="mb-4">
              <span
                className="text-xs tracking-[0.18em] uppercase"
                style={{ color: "#C9A84C", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}
              >
                Etapa de qualificação
              </span>
            </div>
            <h2
              className="leading-tight mb-3"
              style={{
                fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(30px, 4vw, 48px)",
                fontWeight: 400,
                color: "#F5F0E8",
              }}
              data-testid="text-qualification-headline"
            >
              Antes de continuar: isso é para você?
            </h2>
            <p
              className="mb-10"
              style={{
                fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                fontSize: "15px",
                fontWeight: 300,
                color: "#A09880",
                lineHeight: 1.75,
              }}
            >
              Alpendre trabalha com um número limitado de clientes por ciclo. Responda 3 perguntas para seguir.
            </p>
          </AnimatedSection>

          {/* Q1 */}
          <AnimatedSection delay={0.1}>
            <div className="mb-8">
              <p
                className="mb-4"
                style={{
                  fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                  fontSize: "16px",
                  fontWeight: 400,
                  color: "#F5F0E8",
                }}
                data-testid="text-q1-label"
              >
                1. Qual é o faturamento médio mensal da sua empresa?
              </p>
              <div className="flex flex-col gap-2">
                {faturamentoOptions.map((opt, i) => (
                  <OptionButton
                    key={i}
                    label={opt}
                    selected={answers.faturamento === opt}
                    onClick={() => setAnswers({ faturamento: opt, maturidade: null, intencao: null })}
                    testId={`button-q1-${i}`}
                  />
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Disqualified message */}
          <AnimatePresence>
            {isDisqualified && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="p-8 mb-8"
                style={{
                  background: "#1A1A1A",
                  border: "1px solid #2A2520",
                }}
                data-testid="text-disqualified-message"
              >
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                    fontSize: "15px",
                    fontWeight: 300,
                    color: "#A09880",
                    lineHeight: 1.75,
                    marginBottom: "16px",
                  }}
                >
                  Nosso programa é mais indicado para empresas acima de R$ 50.000/mês. Continue acompanhando o @falpendre no Instagram — quando chegar lá, fale com a gente.
                </p>
                <a
                  href="https://instagram.com/falpendre"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="link-instagram-disqualified"
                  style={{
                    fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "#C9A84C",
                    textDecoration: "none",
                    letterSpacing: "0.07em",
                    textTransform: "uppercase",
                  }}
                >
                  Seguir @falpendre &rarr;
                </a>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Q2 */}
          <AnimatePresence>
            {showQ2 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="mb-8"
              >
                <p
                  className="mb-4"
                  style={{
                    fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                    fontSize: "16px",
                    fontWeight: 400,
                    color: "#F5F0E8",
                  }}
                  data-testid="text-q2-label"
                >
                  2. Sua empresa já participou de algum processo licitatório ou contrato público?
                </p>
                <div className="flex flex-col gap-2">
                  {maturidadeOptions.map((opt, i) => (
                    <OptionButton
                      key={i}
                      label={opt}
                      selected={answers.maturidade === opt}
                      onClick={() => setAnswers(prev => ({ ...prev, maturidade: opt, intencao: null }))}
                      testId={`button-q2-${i}`}
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Q3 */}
          <AnimatePresence>
            {showQ3 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="mb-8"
              >
                <p
                  className="mb-4"
                  style={{
                    fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                    fontSize: "16px",
                    fontWeight: 400,
                    color: "#F5F0E8",
                  }}
                  data-testid="text-q3-label"
                >
                  3. O que você busca neste momento?
                </p>
                <div className="flex flex-col gap-2">
                  {intencaoOptions.map((opt, i) => (
                    <OptionButton
                      key={i}
                      label={opt}
                      selected={answers.intencao === opt}
                      onClick={() => setAnswers(prev => ({ ...prev, intencao: opt }))}
                      testId={`button-q3-${i}`}
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Form */}
          <AnimatePresence>
            {showForm && (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div
                  className="p-8 mt-4"
                  style={{
                    background: "#1A1A1A",
                    border: "1px solid rgba(201,168,76,0.2)",
                  }}
                >
                  <LeadForm answers={answers} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* FAQ */}
        <div
          className="pt-16"
          style={{ borderTop: "1px solid #2A2520" }}
        >
          <AnimatedSection>
            <div className="mb-4">
              <span
                className="text-xs tracking-[0.18em] uppercase"
                style={{ color: "#C9A84C", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}
              >
                Dúvidas frequentes
              </span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <Accordion items={faqItems} testId="accordion-faq" />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
