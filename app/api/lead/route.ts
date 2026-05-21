import { NextResponse } from "next/server";
import type { LeadPayload } from "@/lib/types";

function isValidPayload(payload: Partial<LeadPayload>): payload is LeadPayload {
  return Boolean(
    payload.qualification?.revenue &&
      payload.qualification?.maturity &&
      payload.qualification?.intent &&
      payload.contact?.fullName &&
      payload.contact?.whatsapp
  );
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<LeadPayload>;

    if (!isValidPayload(body)) {
      return NextResponse.json(
        { message: "Dados de qualificação incompletos." },
        { status: 400 }
      );
    }

    const webhookUrl = process.env.N8N_WEBHOOK_URL;

    if (!webhookUrl) {
      return NextResponse.json(
        {
          message:
            "Webhook indisponível no momento. Configure N8N_WEBHOOK_URL no ambiente."
        },
        { status: 500 }
      );
    }

    const payload = {
      event: "lead_qualified_submitted",
      submittedAtServer: new Date().toISOString(),
      qualification: body.qualification,
      contact: body.contact,
      tracking: {
        source: request.headers.get("x-utm-source") || "unknown"
      }
    };

    const upstream = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    if (!upstream.ok) {
      return NextResponse.json(
        { message: "Falha ao integrar com automação." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json(
      { message: "Erro inesperado ao processar envio." },
      { status: 500 }
    );
  }
}
