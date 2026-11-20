// Hook de processamento assíncrono + lazy loading (scroll infinito).
// TODO:
// - Carregar a 1ª página ao montar; carregarMais() busca a próxima página.
// - Estados: carregando, carregandoMais, erro, atualizando (pull-to-refresh).
// - Se a API falhar, usar o cache do banco (cache-produtos.ts).
import type { Produto } from '@/types/produto';

export function useProdutos() {
  return {
    produtos: [] as Produto[],
    carregando: false,
    carregandoMais: false,
    erro: null as string | null,
    carregarMais: () => {},
    atualizar: () => {},
  };
}
