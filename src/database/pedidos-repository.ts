import type { Pedido } from '@/types/pedido';

export async function salvarPedido(pedido: Pedido): Promise<void> {}

export async function listarPedidos(): Promise<Pedido[]> {
  return [];
}

export async function buscarPedido(id: string): Promise<Pedido | null> {
  return null;
}
