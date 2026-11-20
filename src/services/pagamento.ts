// Pagamento SIMULADO (não usar gateway real).
// TODO:
// - Simular processamento assíncrono (await com delay de 1–2s).
// - Validar dados do cartão (número, validade, CVV) antes de "pagar".
// - Gerar código Pix / linha do boleto falsos.
// - Simular falha às vezes para demonstrar tratamento de erro.
import type { FormaPagamento } from '@/types/pedido';

export type ResultadoPagamento = { sucesso: boolean; mensagem: string; codigo?: string };

export async function processarPagamento(
  forma: FormaPagamento,
  valor: number,
): Promise<ResultadoPagamento> {
  throw new Error('Não implementado');
}
