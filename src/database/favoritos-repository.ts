// Favoritos do usuário. Usado na tela de detalhe e no perfil.
import type { Produto } from '@/types/produto';

export async function listarFavoritos(): Promise<Produto[]> {
  return [];
}

export async function alternarFavorito(produto: Produto): Promise<boolean> {
  // retorna true se ficou favoritado
  return false;
}

export async function ehFavorito(produtoId: number): Promise<boolean> {
  return false;
}
