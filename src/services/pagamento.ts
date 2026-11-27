import type { FormaPagamento } from '@/types/pedido';

export type ResultadoPagamento = { sucesso: boolean; mensagem: string; codigo?: string };

export async function processarPagamento(
  forma: FormaPagamento,
  valor: number,
): Promise<ResultadoPagamento> {
  throw new Error('Não implementado');
}
