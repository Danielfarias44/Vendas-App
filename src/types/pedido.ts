// Pedido finalizado.
import type { ItemCarrinho } from './carrinho';

export type FormaPagamento = 'pix' | 'cartao' | 'boleto';
export type StatusPedido = 'pendente' | 'pago' | 'falhou';

export type Pedido = {
  id: string;
  itens: ItemCarrinho[];
  total: number;
  formaPagamento: FormaPagamento;
  status: StatusPedido;
  criadoEm: string; // ISO date
};
