import { useWindowDimensions } from 'react-native';

export function useOrientacao() {
  const { width: largura, height: altura } = useWindowDimensions();
  const paisagem = largura > altura;
  const telaLarga = largura >= 768;
  const larguraConteudo = Math.min(largura, 1440);
  const colunas = largura >= 1200 ? 4 : largura >= 768 ? 3 : largura >= 360 ? 2 : 1;
  return { paisagem, telaLarga, colunas, largura, larguraConteudo };
}
