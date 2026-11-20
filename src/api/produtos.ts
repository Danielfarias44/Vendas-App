// Endpoints de produtos. Converte o formato da API para o tipo Produto.
// TODO:
// - listarProdutos com paginação (limit/skip) → usado no lazy loading da tela inicial.
// - buscarProduto por id → tela de detalhe.
// - buscarProdutos por termo → barra de busca.
// - listarCategorias → filtro da tela inicial.
import type { PaginaProdutos, Produto } from '@/types/produto';

export async function listarProdutos(pagina: number, porPagina = 20): Promise<PaginaProdutos> {
  throw new Error('Não implementado');
}

export async function buscarProduto(id: number): Promise<Produto> {
  throw new Error('Não implementado');
}

export async function buscarProdutos(termo: string): Promise<Produto[]> {
  throw new Error('Não implementado');
}

export async function listarCategorias(): Promise<string[]> {
  throw new Error('Não implementado');
}
