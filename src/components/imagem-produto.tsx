// Imagem de produto com lazy loading e cache.
// TODO:
// - Usar <Image> do expo-image (já instalado): cachePolicy, placeholder, transition.
// - Mostrar imagem de fallback se der erro ao carregar (onError).
import { View } from 'react-native';

type Props = { uri: string; tamanho?: number };

export function ImagemProduto({ uri, tamanho = 150 }: Props) {
  return <View style={{ width: tamanho, height: tamanho }} />;
}
