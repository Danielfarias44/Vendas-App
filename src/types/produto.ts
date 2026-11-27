export type Produto = {
  id: number;
  titulo: string;
  descricao: string;
  preco: number;
  categoria: string;
  marca?: string;
  tamanho?: string;
  estado?: string;
  etiqueta?: string;
  thumbnail: string; // imagem pequena para a lista
  imagens: string[]; // imagens grandes para a tela de detalhe
  avaliacao?: number;
};

