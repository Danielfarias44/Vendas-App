// tipos de produto usados por API, banco e telas.
// Ajustar os campos conforme a API escolhida.
export type Produto = {
  id: number;
  titulo: string;
  descricao: string;
  preco: number;
  categoria: string;
  thumbnail: string; // imagem pequena para a lista
  imagens: string[]; // imagens grandes para a tela de detalhe
  avaliacao?: number;
};

export type PaginaProdutos = {
  produtos: Produto[];
  total: number;
  temMais: boolean;
};
