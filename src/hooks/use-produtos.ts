import { useCallback, useState } from 'react';

import { produtosDemo } from '@/data/produtos-demo';
import type { Produto } from '@/types/produto';

export function useProdutos() {
  const [produtos, setProdutos] = useState<Produto[]>(produtosDemo);
  const carregarMais = useCallback(async () => {}, []);
  const carregarPrimeiraPagina = useCallback(() => {
    setProdutos(produtosDemo);
  }, []);
  return {
    produtos,
    carregando: false,
    carregandoMais: false,
    erro: null,
    carregarMais,
    atualizar: carregarPrimeiraPagina,
  };
}
