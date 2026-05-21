"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { QualificationForm } from "@/components/forms/QualificationForm";

const problems = [
  {
    title: "Vendas que dependem de você",
    text: "Todo mês começa do zero. A empresa cresce, mas a pressão também."
  },
  {
    title: "Concorrência de preço sem fim",
    text: "Sempre tem alguém cobrando menos e sua margem continua espremida."
  },
  {
    title: "Receita sem previsibilidade",
    text: "Bom mês, mau mês. A instabilidade virou regra, não exceção."
  }
];

const comparisons = [
  ["Contrato de 6-12 meses", "Contrato de 20-35 anos"],
  ["Renova todo ciclo", "Receita garantida em contrato"],
  ["Concorrência predatória", "Barreiras reguladas de entrada"],
  ["Margem comprimida", "Reequilíbrio econômico-financeiro"],
  ["Depende da venda constante", "Proteção contratual legal"]
];

const methodSteps = [
  {
    title: "Diagnóstico estratégico",
    text: "Levantamos estágio, capacidade operacional e oportunidades aderentes ao seu perfil para evitar passos errados."
  },
  {
    title: "Estruturação técnico-jurídica",
    text: "Preparamos sua empresa para disputar com consistência, segurança jurídica e posicionamento competitivo."
  },
  {
    title: "Execução comercial para contrato",
    text: "Do edital à assinatura e ao recebimento, com acompanhamento para transformar previsibilidade em resultado."
  }
];

const faqItems = [
  {
    question: "Preciso já ter experiência em licitação para começar?",
    answer:
      "Não. O primeiro passo é um diagnóstico para definir a rota certa: entrada, correção de estratégia ou aceleração."
  },
  {
    question: "Esse trabalho é só para empresas privadas?",
    answer:
      "O foco principal desta página é empresários. Projetos com prefeituras são avaliados sob escopo específico."
  },
  {
    question: "Como funciona o primeiro contato?",
    answer:
      "Você preenche a qualificação e recebe retorno em até 24h úteis para uma conversa inicial de diagnóstico, sem pressão comercial."
  }
];

export default function HomePage() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const orbOneY = useTransform(scrollYProgress, [0, 1], [0, -220]);
  const orbTwoY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const gridY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <main className="site-shell">
      <motion.div className="bg-orb orb-a" style={{ y: orbOneY }} />
      <motion.div className="bg-orb orb-b" style={{ y: orbTwoY }} />
      <motion.div className="bg-grid" style={{ y: gridY }} />

      <section className="section hero hero-tech">
        <div className="container hero-grid">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="kicker">Francisco Alpendre</p>
            <h1 className="hero-title">
              <span className="hero-title-line">Você já provou que sabe vender.</span>
              <motion.span
                className="hero-title-line hero-title-emphasis"
                data-text="Agora é hora de assinar contratos que pagam por anos."
                initial={{ backgroundSize: shouldReduceMotion ? "100% 2px" : "0% 2px" }}
                animate={{ backgroundSize: "100% 2px" }}
                transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
              >
                Agora é hora de assinar contratos que pagam por anos.
              </motion.span>
            </h1>
            <p className="subtitle">
              Empresários que faturam entre 50 e 100 mil por mês estão
              descobrindo um mercado com receita protegida por contrato. Alpendre
              abre esse caminho com método.
            </p>
            <p className="hero-note">
              Atendimento principal para empresários com operação validada e
              ambição de escalar via PPPs e concessões.
            </p>
            <p className="badge-line">
              CP3P · World Bank · APMG International · +512MM em contratos
              estruturados
            </p>
            <a href="#qualificacao" className="cta-primary">
              Quero entender se isso faz sentido para mim
            </a>
          </motion.div>

          <motion.aside
            className="portrait-frame"
            aria-label="Foto profissional de Francisco Alpendre"
            initial={{ opacity: 0, y: 48, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <motion.div
              className="portrait-placeholder"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/alpendre-hero.jpg"
                alt="Francisco Alpendre"
                fill
                priority
                sizes="(max-width: 980px) 100vw, 38vw"
                className="portrait-image"
              />
              <div className="portrait-overlay" />
              <div className="portrait-chip" aria-hidden="true">
                <span>Francisco</span>
                <strong>Alpendre</strong>
              </div>
            </motion.div>
          </motion.aside>
        </div>
      </section>

      <section className="section reveal">
        <div className="container">
          <h2>Método Alpendre: clareza de rota para contratos de longo prazo.</h2>
          <div className="bento-grid">
            {methodSteps.map((step, index) => (
              <article key={step.title} className={`bento-card bento-card-${index + 1}`}>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
                {index === 0 && <span className="bento-chip">Entrada inteligente</span>}
                {index === 1 && <span className="bento-chip">Blindagem estratégica</span>}
                {index === 2 && <span className="bento-chip">Execução orientada a contrato</span>}
              </article>
            ))}
            <article className="bento-card bento-card-4">
              <h3>Entrega ponta a ponta</h3>
              <p>
                Da leitura de oportunidade à execução do contrato e recebimento,
                com acompanhamento técnico-jurídico para decisões de alto impacto.
              </p>
            </article>
            <article className="bento-card bento-card-5">
              <h3>Perfil de atendimento</h3>
              <p>
                Foco em empresários com operação validada, ambição de escala e
                compromisso com governança, eficiência e resultado sustentável.
              </p>
            </article>
          </div>
          <p className="focus-note">
            Missão: tornar o mercado de contratos públicos acessível para
            empresas privadas preparadas, com segurança jurídica e visão de
            longo prazo.
          </p>
          <div className="value-pills" aria-label="Valores principais">
            <span>Transparência</span>
            <span>Excelência</span>
            <span>Ética</span>
            <span>Resultado real</span>
          </div>
        </div>
      </section>

      <section className="section reveal section-soft">
        <div className="container segment-grid">
          <article className="segment-card segment-card-primary">
            <p className="kicker">Atuação principal</p>
            <h3>Empresários</h3>
            <p>
              Investir em PPPs e concessões é uma forma lucrativa e inteligente
              de expandir o negócio com previsibilidade e proteção contratual.
            </p>
          </article>
          <article className="segment-card">
            <p className="kicker">Atuação complementar</p>
            <h3>Prefeituras</h3>
            <p>
              Projetos para municípios são conduzidos em escopo próprio, focando
              crescimento da infraestrutura e evolução da prestação de serviços.
            </p>
          </article>
        </div>
      </section>

      <section className="section reveal section-soft">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6 }}
          >
            O mercado que você conhece tem teto. E você já está perto dele.
          </motion.h2>
          <div className="problem-grid">
            {problems.map((item) => (
              <motion.article
                key={item.title}
                className="problem-card"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.5 }}
              >
                <p className="dot">•</p>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.article>
            ))}
          </div>
          <p className="transition-copy">
            Existe um mercado em que esses três problemas deixam de comandar sua
            empresa: contratos públicos de 20 a 30 anos, receita contratada,
            regras claras e mecanismos de reequilíbrio.
          </p>
        </div>
      </section>

      <section className="section reveal">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6 }}
          >
            PPPs e Concessões: o mercado onde empresas médias viram gigantes.
          </motion.h2>
          <div className="comparison-table">
            <div className="head">Mercado Privado</div>
            <div className="head">Mercado Público (PPP/Concessão)</div>
            {comparisons.map(([left, right]) => (
              <div key={left} className="comparison-row-fragment">
                <div className="cell left">{left}</div>
                <div className="cell right">{right}</div>
              </div>
            ))}
          </div>
          <blockquote>
            Mais de <strong>5.000 municípios</strong> brasileiros têm demanda por
            PPPs e concessões. A maioria sem operador privado qualificado.
          </blockquote>
        </div>
      </section>

      <section className="section reveal authority section-soft">
        <div className="container authority-grid">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <p className="kicker">Quem vai abrir essa porta para você</p>
            <h2>Autoridade internacional, execução local.</h2>
            <p>
              Francisco Alpendre passou os últimos 10 anos estruturando PPPs e
              concessões municipais, do zero até o contrato assinado. É um dos
              poucos brasileiros certificados no programa CP3P do World Bank.
            </p>
            <p>
              Formação em Direito pela UFSC, mestrado em Organizações e
              Desenvolvimento, MBA pela FGV e módulo executivo internacional pela
              Universidade de Chicago.
            </p>
            <p className="stat-line">R$ 512MM+ em contratos estruturados.</p>
          </motion.div>
          <div className="authority-side">
            <div className="logo-list">
              <span>World Bank / APMG</span>
              <span>FUNPAR / UFPR</span>
              <span>FGV</span>
              <span>Universidade de Chicago</span>
              <span>OAB/PR</span>
            </div>
            <div className="testimonials">
              <article>
                <p>
                  &ldquo;Assinamos contrato de R$ 8MM para iluminação pública em 4
                  meses de consultoria.&rdquo;
                </p>
                <strong>Diretor, Operadora Regional</strong>
              </article>
              <article>
                <p>
                  &ldquo;Sai de tentativas frustradas para uma proposta tecnicamente
                  competitiva com segurança jurídica.&rdquo;
                </p>
                <strong>Sócia, Empresa de Infraestrutura</strong>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section reveal video-section">
        <div className="container narrow">
          <h2>Assista em 3 minutos como esse mercado funciona na prática</h2>
          <motion.div
            className="video-shell"
            role="img"
            aria-label="Área para vídeo institucional"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6 }}
          >
            <p>Vídeo institucional (Vimeo/YouTube unlisted)</p>
          </motion.div>
        </div>
      </section>

      <section className="section reveal section-soft">
        <div className="container narrow">
          <h2>Dúvidas comuns antes de entrar nesse mercado</h2>
          <div className="faq-grid">
            {faqItems.map((item) => (
              <article key={item.question} className="faq-item">
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <QualificationForm />

      <section className="section reveal">
        <div className="container narrow contact-executive">
          <p className="kicker">Contato executivo</p>
          <h2>Fale com a equipe no canal que for melhor para você</h2>
          <div className="contact-grid">
            <a
              className="contact-card"
              href="https://api.whatsapp.com/send?phone=556299818100&text=Ol%C3%A1!%20Gostaria%20de%20conversar%20sobre%20a%20constru%C3%A7%C3%A3o%20do%20meu%20legado"
              target="_blank"
              rel="noreferrer"
            >
              <strong>WhatsApp</strong>
              <span>(62) 99981-8100</span>
            </a>
            <a className="contact-card" href="mailto:alpendre@funpar.ufpr.br">
              <strong>E-mail</strong>
              <span>alpendre@funpar.ufpr.br</span>
            </a>
            <a
              className="contact-card"
              href="https://www.linkedin.com/in/alpendre/"
              target="_blank"
              rel="noreferrer"
            >
              <strong>LinkedIn</strong>
              <span>/in/alpendre</span>
            </a>
            <a
              className="contact-card"
              href="https://www.facebook.com/falpendre/"
              target="_blank"
              rel="noreferrer"
            >
              <strong>Facebook</strong>
              <span>/falpendre</span>
            </a>
          </div>
        </div>
      </section>

      <section className="section reveal footer-cta section-soft">
        <div className="container narrow">
          <h2>Você não precisa competir por preço para crescer.</h2>
          <p>
            Se sua empresa já atingiu um novo patamar, o próximo passo é entrar
            no jogo certo com método e estrutura.
          </p>
          <a href="#qualificacao" className="cta-primary">
            Quero avaliar meu perfil agora
          </a>
        </div>
      </section>

      <footer className="minimal-footer">
        <div className="container footer-content">
          <span>Francisco Alpendre 2026</span>
          <a href="https://wa.me/556299818100" target="_blank" rel="noreferrer">WhatsApp</a>
          <a href="https://instagram.com/falpendre" target="_blank" rel="noreferrer">@falpendre</a>
          <a href="https://franciscoalpendre.com.br/politica-de-privacidade/" target="_blank" rel="noreferrer">
            Política de privacidade
          </a>
        </div>
      </footer>
    </main>
  );
}
