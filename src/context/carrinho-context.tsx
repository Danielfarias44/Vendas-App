// Estado global do carrinho, sincronizado com o banco (carrinho-repository).
// TODO:
// - Carregar itens do banco ao iniciar.
// - adicionar / remover / alterarQuantidade / limpar → atualizar estado E banco.
// - Calcular total e quantidade de itens (useMemo).
import { createContext, useContext, type ReactNode } from 'react';

import type { ItemCarrinho } from '@/types/carrinho';
import type { Produto } from '@/types/produto';

type CarrinhoContextType = {
  itens: ItemCarrinho[];
  total: number;
  quantidadeTotal: number;
  adicionar: (produto: Produto) => void;
  remover: (produtoId: number) => void;
  alterarQuantidade: (produtoId: number, quantidade: number) => void;
  limpar: () => void;
};

const CarrinhoContext = createContext<CarrinhoContextType | null>(null);

export function CarrinhoProvider({ children }: { children: ReactNode }) {
  const valor: CarrinhoContextType = {
    itens: [],
    total: 0,
    quantidadeTotal: 0,
    adicionar: () => {},
    remover: () => {},
    alterarQuantidade: () => {},
    limpar: () => {},
  };
  return <CarrinhoContext.Provider value={valor}>{children}</CarrinhoContext.Provider>;
}

export function useCarrinho() {
  const ctx = useContext(CarrinhoContext);
  if (!ctx) throw new Error('useCarrinho deve ser usado dentro de CarrinhoProvider');
  return ctx;
}
