// Itens do carrinho.
import type { Produto } from './produto';

export type ItemCarrinho = {
  produto: Produto;
  quantidade: number;
};
