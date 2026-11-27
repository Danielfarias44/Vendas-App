import type { ItemCarrinho } from '@/types/carrinho';
import type { Produto } from '@/types/produto';

export async function listarItens(): Promise<ItemCarrinho[]> {
  return [];
}

export async function adicionarItem(produto: Produto, quantidade = 1): Promise<void> {}

export async function alterarQuantidade(produtoId: number, quantidade: number): Promise<void> {}

export async function removerItem(produtoId: number): Promise<void> {}

export async function limparCarrinho(): Promise<void> {}
