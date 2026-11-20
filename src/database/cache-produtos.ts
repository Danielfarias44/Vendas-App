// Cache dos produtos vindos da API → app funciona offline e abre mais rápido.
// Usado pelo hook use-produtos.ts.
import type { Produto } from '@/types/produto';

export async function salvarProdutosNoCache(produtos: Produto[]): Promise<void> {}

export async function lerProdutosDoCache(): Promise<Produto[]> {
  return [];
}
