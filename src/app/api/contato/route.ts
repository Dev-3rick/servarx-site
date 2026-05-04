import { NextResponse } from 'next/server';
import { z } from 'zod';

const ContactSchema = z.object({
  nome: z.string().min(2),
  email: z.string().email(),
  telefone: z.string().min(10),
  cidade: z.string().min(2),
  medicos: z.string().min(1),
  mensagem: z.string().optional(),
  ref: z.string().optional(),
  cidadeSlug: z.string().optional(),
});

function formatWhatsAppMessage(data: z.infer<typeof ContactSchema>): string {
  const linhas = [
    `🔔 *NOVO LEAD — ServarX.com.br*`,
    ``,
    `👤 *Nome:* ${data.nome}`,
    `📧 *E-mail:* ${data.email}`,
    `📱 *WhatsApp:* ${data.telefone}`,
    `📍 *Cidade:* ${data.cidade}`,
    `🏥 *Médicos:* ${data.medicos}`,
  ];

  if (data.mensagem?.trim()) linhas.push(`📋 *Mensagem:* "${data.mensagem.trim()}"`);
  if (data.ref || data.cidadeSlug) {
    linhas.push(``);
    if (data.ref) linhas.push(`🔗 *Origem:* ${data.ref}`);
    if (data.cidadeSlug) linhas.push(`🗺️ *Página:* /cidades/${data.cidadeSlug}`);
  }

  return linhas.join('\n');
}

async function sendZApiMessage(phone: string, message: string): Promise<void> {
  const instanceId = process.env.ZAPI_INSTANCE_ID;
  const token = process.env.ZAPI_TOKEN;
  const clientToken = process.env.ZAPI_CLIENT_TOKEN;

  if (!instanceId || !token || !clientToken) {
    console.warn('[CONTATO] Z-API não configurado — lead não notificado via WhatsApp.');
    return;
  }

  const url = `https://api.z-api.io/instances/${instanceId}/token/${token}/send-text`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Client-Token': clientToken },
    body: JSON.stringify({ phone: phone.replace(/\D/g, ''), message }),
  });

  if (!res.ok) {
    const body = await res.text().catch(() => '');
    console.error('[CONTATO] Z-API erro:', res.status, body);
    throw new Error('zapi_fail');
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const result = ContactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json({ error: 'Dados inválidos' }, { status: 400 });
    }

    const notifPhone = process.env.CONTATO_NOTIF_PHONE ?? '5531996950720';
    await sendZApiMessage(notifPhone, formatWhatsAppMessage(result.data));

    return NextResponse.json({ ok: true });
  } catch {
    // Lead nunca pode ser perdido por falha de notificação
    return NextResponse.json({ ok: true, warn: 'notif_failed' });
  }
}
