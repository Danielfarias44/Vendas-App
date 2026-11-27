import { useCallback } from 'react';

import { produtosDemo } from '@/data/produtos-demo';

export function useProduto(id: number) {
  const carregar = useCallback(async () => {
    return produtosDemo.find((produto) => produto.id === id) ?? null;
  }, [id]);

  return {
    produto: produtosDemo.find((produto) => produto.id === id) ?? null,
    carregando: false,
    erro: null,
    tentarNovamente: carregar,
  };
}
