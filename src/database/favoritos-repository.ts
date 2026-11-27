import type { Produto } from '@/types/produto';

export async function listarFavoritos(): Promise<Produto[]> {
  return [];
}

export async function alternarFavorito(produto: Produto): Promise<boolean> {
  return false;
}

export async function ehFavorito(produtoId: number): Promise<boolean> {
  return false;
}
