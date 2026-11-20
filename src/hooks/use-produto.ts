// Hook que busca UM produto pelo id (tela de detalhe), com carregando/erro.
import type { Produto } from '@/types/produto';

export function useProduto(id: number) {
  return {
    produto: null as Produto | null,
    carregando: false,
    erro: null as string | null,
    tentarNovamente: () => {},
  };
}
