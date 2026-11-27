import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';

type Propriedades = { uri: string; tamanho?: number; altura?: number; raio?: number };

export function ImagemProduto({ uri, tamanho = 150, altura = tamanho, raio = 0 }: Propriedades) {
  if (!uri) {
    return <View style={[estilos.fallback, { width: tamanho, height: altura, borderRadius: raio }]}><Text style={estilos.textoAlternativo}>imagem indisponível</Text></View>;
  }

  return (
    <Image
      source={{ uri }}
      style={{ width: tamanho, height: altura, borderRadius: raio, backgroundColor: '#E7E4DA' }}
      contentFit="cover"
      cachePolicy="disk"
      transition={180}
      accessibilityLabel="Foto do produto"
    />
  );
}

const estilos = StyleSheet.create({
  fallback: { alignItems: 'center', justifyContent: 'center', padding: 12, backgroundColor: '#E7E4DA' },
  textoAlternativo: { color: '#72766B', fontSize: 11, textAlign: 'center' },
});
