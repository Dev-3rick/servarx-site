import { NextResponse } from 'next/server';
import { headers } from 'next/headers';

/**
 * SERVARCLIN - WEBHOOK RECEIVER (ASAAS)
 * Este arquivo é o ponto de entrada para notificações de pagamento.
 * 
 * TO-DO (Próximo Agente):
 * 1. Conectar com o Banco de Dados Central.
 * 2. Implementar a função 'createClientAccount(paymentData)'.
 * 3. Integrar disparos de WhatsApp/Email de boas-vindas.
 */

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const headersList = await headers();
    
    // Verificação de Segurança via Token customizado no Header
    // Configure 'ASAAS_WEBHOOK_TOKEN' no seu .env
    const asaasToken = headersList.get('asaas-access-token');
    
    if (asaasToken !== process.env.ASAAS_WEBHOOK_TOKEN) {
      console.warn('[ASAAS WEBHOOK] Tentativa de acesso não autorizada.');
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { event, payment } = body;

    // Processamos apenas quando o pagamento é confirmado ou recebido em conta
    if (event === 'PAYMENT_CONFIRMED' || event === 'PAYMENT_RECEIVED') {
      
      const paymentData = {
        customerAsaasId: payment.customer,
        paymentId: payment.id,
        value: payment.value,
        externalReference: payment.externalReference, // Identificador do Plano
        billingType: payment.billingType,
        customerEmail: payment.customerEmail || 'Não informado',
      };

      console.log('✅ PAGAMENTO IDENTIFICADO:', paymentData);

      // AQUI: O próximo agente deve inserir a lógica de:
      // 1. Criar registro no Banco de Dados
      // 2. Criar Login no Sistema
      // 3. Disparar Onboarding (WPP/Email)
      
      return NextResponse.json({ 
        success: true, 
        message: 'Pagamento processado. Iniciando provisionamento.' 
      });
    }

    // Retornamos 200 para outros eventos para não gerar erro no Asaas
    return NextResponse.json({ success: true, eventReceived: event });
  } catch (error) {
    console.error('[ASAAS WEBHOOK ERROR]:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
