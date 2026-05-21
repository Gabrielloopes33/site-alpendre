import Link from "next/link";

export default function ObrigadoPage() {
  return (
    <main className="thanks-wrap">
      <section className="thanks-card">
        <p className="kicker">Confirmação recebida</p>
        <h1>Ótimo. Você deu o primeiro passo.</h1>
        <p>
          Nossa equipe vai entrar em contato em até 24h úteis. Enquanto isso,
          acompanhe os conteúdos no Instagram.
        </p>
        <p>
          Se preferir, fale agora mesmo no WhatsApp para acelerar sua triagem.
        </p>
        <div className="thanks-actions">
          <Link
            href="https://api.whatsapp.com/send?phone=556299818100&text=Ol%C3%A1!%20Gostaria%20de%20conversar%20sobre%20a%20constru%C3%A7%C3%A3o%20do%20meu%20legado"
            target="_blank"
            rel="noreferrer"
            className="cta-primary"
          >
            Falar no WhatsApp
          </Link>
          <Link
            href="https://instagram.com/falpendre"
            target="_blank"
            rel="noreferrer"
            className="cta-primary"
          >
            Acessar @falpendre
          </Link>
        </div>
      </section>
    </main>
  );
}
