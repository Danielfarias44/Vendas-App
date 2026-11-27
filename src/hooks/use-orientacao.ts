import { useWindowDimensions } from 'react-native';

export function useOrientacao() {
  const { width: largura, height: altura } = useWindowDimensions();
  const paisagem = largura > altura;
  const colunas = largura > 1100 ? 4 : paisagem ? 3 : 2;
  return { paisagem, colunas, largura };
}
