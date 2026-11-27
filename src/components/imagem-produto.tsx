import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';

import { Cores, Fontes } from '@/constants/tema';

type Propriedades = { uri: string; tamanho?: number; altura?: number; raio?: number; accessibilityLabel?: string };

export function ImagemProduto({ uri, tamanho = 150, altura = tamanho, raio = 0, accessibilityLabel = 'Imagem do produto' }: Propriedades) {
  if (!uri) {
    return <View accessible accessibilityRole="image" accessibilityLabel={`${accessibilityLabel}: imagem indisponível`} style={[estilos.fallback, { width: tamanho, height: altura, borderRadius: raio }]}><Text style={estilos.textoAlternativo}>Imagem indisponível</Text></View>;
  }

  return (
    <Image
      source={{ uri }}
      style={{ width: tamanho, height: altura, borderRadius: raio, backgroundColor: Cores.areia }}
      contentFit="cover"
      cachePolicy="disk"
      transition={180}
      accessibilityLabel={accessibilityLabel}
    />
  );
}

const estilos = StyleSheet.create({
  fallback: { alignItems: 'center', justifyContent: 'center', padding: 12, backgroundColor: Cores.areia },
  textoAlternativo: { color: Cores.textoSecundario, fontFamily: Fontes.texto, fontSize: 14, lineHeight: 20, textAlign: 'center' },
});
