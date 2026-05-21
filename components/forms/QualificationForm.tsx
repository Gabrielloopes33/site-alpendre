"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import type { LeadPayload, RevenueRange } from "@/lib/types";

type FormValues = LeadPayload["qualification"] & LeadPayload["contact"];

const revenueOptions: Array<{ value: RevenueRange; label: string }> = [
  { value: "lt_20", label: "Menos de R$ 20.000" },
  { value: "20_50", label: "R$ 20.000 - R$ 50.000" },
  { value: "50_150", label: "R$ 50.000 - R$ 150.000" },
  { value: "gt_150", label: "Acima de R$ 150.000" }
];

const maturityOptions = [
  { value: "never", label: "Nunca" },
  { value: "no_success", label: "Sim, sem sucesso" },
  { value: "some_contract", label: "Sim, com algum contrato" },
  { value: "experienced", label: "Tenho experiencia relevante na area" }
] as const;

const intentOptions = [
  { value: "learn", label: "Entender como funciona esse mercado" },
  {
    value: "assess_fit",
    label: "Avaliar se minha empresa tem perfil para entrar"
  },
  { value: "ready_now", label: "Ja decidi e quero dar o proximo passo" },
  { value: "specific_project", label: "Tenho um projeto especifico em vista" }
] as const;

function sanitizePhone(value: string): string {
  return value.replace(/\D/g, "");
}

export function QualificationForm() {
  const router = useRouter();
  const [isSending, setIsSending] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const {
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>({
    defaultValues: {
      revenue: undefined,
      maturity: undefined,
      intent: undefined,
      fullName: "",
      whatsapp: "",
      email: ""
    }
  });

  const selectedRevenue = watch("revenue");
  const blocked = useMemo(() => selectedRevenue === "lt_20", [selectedRevenue]);

  const onSubmit = handleSubmit(async (values) => {
    setSubmitError("");

    if (values.revenue === "lt_20") {
      return;
    }

    setIsSending(true);

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          qualification: {
            revenue: values.revenue,
            maturity: values.maturity,
            intent: values.intent
          },
          contact: {
            fullName: values.fullName,
            whatsapp: sanitizePhone(values.whatsapp),
            email: values.email || undefined
          }
        } satisfies LeadPayload)
      });

      if (!response.ok) {
        const payload = (await response.json().catch(() => ({}))) as {
          message?: string;
        };
        throw new Error(payload.message || "Falha ao enviar");
      }

      router.push("/obrigado");
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Não foi possível enviar agora. Tente novamente."
      );
    } finally {
      setIsSending(false);
    }
  });

  return (
    <motion.section
      id="qualificacao"
      className="section section-qualify reveal"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container narrow">
        <p className="kicker">Etapa de qualificação</p>
        <h2>Antes de continuar: isso é para você?</h2>
        <p className="subtitle">
          Alpendre trabalha com um número limitado de clientes por ciclo.
          Responda 3 perguntas para seguir.
        </p>

        <form className="qualify-form" onSubmit={onSubmit}>
          <fieldset>
            <legend>1) Qual é o faturamento médio mensal da sua empresa?</legend>
            <div className="choice-grid">
              {revenueOptions.map((option) => (
                <label key={option.value} className="choice-card">
                  <input
                    type="radio"
                    value={option.value}
                    {...register("revenue", {
                      required: "Selecione seu faturamento médio"
                    })}
                  />
                  <span>{option.label}</span>
                </label>
              ))}
            </div>
            {errors.revenue && <small>{errors.revenue.message}</small>}
          </fieldset>

          <fieldset>
            <legend>
              2) Sua empresa já participou de processo licitatório ou contrato
              público?
            </legend>
            <div className="choice-grid">
              {maturityOptions.map((option) => (
                <label key={option.value} className="choice-card">
                  <input
                    type="radio"
                    value={option.value}
                    {...register("maturity", {
                      required: "Selecione uma opção"
                    })}
                  />
                  <span>{option.label}</span>
                </label>
              ))}
            </div>
            {errors.maturity && <small>{errors.maturity.message}</small>}
          </fieldset>

          <fieldset>
            <legend>3) O que você busca neste momento?</legend>
            <div className="choice-grid">
              {intentOptions.map((option) => (
                <label key={option.value} className="choice-card">
                  <input
                    type="radio"
                    value={option.value}
                    {...register("intent", {
                      required: "Selecione uma opção"
                    })}
                  />
                  <span>{option.label}</span>
                </label>
              ))}
            </div>
            {errors.intent && <small>{errors.intent.message}</small>}
          </fieldset>

          {blocked && (
            <motion.div
              className="gate-message"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <p>
                Nosso programa é mais indicado para empresas acima de R$ 50.000
                por mês. Continue acompanhando nosso conteúdo e volte a falar com
                a gente no momento certo.
              </p>
              <a
                href="https://instagram.com/falpendre"
                target="_blank"
                rel="noreferrer"
              >
                Acompanhar conteúdos no Instagram
              </a>
            </motion.div>
          )}

          {!blocked && selectedRevenue && (
            <motion.div
              className="capture-zone"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <h3>Agora, onde falamos com você?</h3>
              <div className="field-row">
                <label>
                  Nome completo
                  <input
                    type="text"
                    placeholder="Seu nome"
                    {...register("fullName", {
                      required: "Informe seu nome",
                      minLength: { value: 3, message: "Nome muito curto" }
                    })}
                  />
                  {errors.fullName && <small>{errors.fullName.message}</small>}
                </label>
                <label>
                  WhatsApp
                  <input
                    type="tel"
                    placeholder="(11) 99999-9999"
                    {...register("whatsapp", {
                      required: "Informe seu WhatsApp",
                      validate: (value) =>
                        sanitizePhone(value).length >= 10 ||
                        "Digite um número válido"
                    })}
                    onBlur={(event) => {
                      setValue("whatsapp", event.target.value.trim());
                    }}
                  />
                  {errors.whatsapp && <small>{errors.whatsapp.message}</small>}
                </label>
                <label>
                  E-mail (opcional)
                  <input
                    type="email"
                    placeholder="voce@empresa.com"
                    {...register("email", {
                      validate: (value) => {
                        if (!value) {
                          return true;
                        }
                        return /\S+@\S+\.\S+/.test(value) || "E-mail inválido";
                      }
                    })}
                  />
                  {errors.email && <small>{errors.email.message}</small>}
                </label>
              </div>

              <button className="cta-primary" type="submit" disabled={isSending}>
                {isSending
                  ? "Enviando..."
                  : "Quero falar com a equipe do Alpendre"}
              </button>
              <p className="microcopy">
                Você receberá contato em até 24 horas úteis. Sem spam, sem
                pressão.
              </p>
              {submitError && <p className="error-text">{submitError}</p>}
            </motion.div>
          )}
        </form>
      </div>
    </motion.section>
  );
}
