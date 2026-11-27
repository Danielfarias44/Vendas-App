import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { imagemManifesto } from '@/data/produtos-demo';

type Propriedades = { paisagem: boolean };

export function ManifestoCircular({ paisagem }: Propriedades) {
  return (
    <View style={[estilos.wrap, paisagem && estilos.linha]}>
      <Image source={{ uri: imagemManifesto }} contentFit="cover" transition={200} style={[estilos.imagem, paisagem && estilos.imagemPaisagem]} accessibilityLabel="Mãos dobrando uma peça de roupa" />
      <View style={[estilos.copy, paisagem && estilos.copyPaisagem]}>
        <Text style={estilos.kicker}>VESTIR TAMBÉM É UMA ESCOLHA.</Text>
        <Text style={estilos.titulo}>O que é bom{ '\n' }não acaba em você.</Text>
        <Text style={estilos.descricao}>Acreditamos na beleza do que já existe. Somos um encontro entre quem desapega e quem descobre — para manter boas peças e boas histórias em circulação.</Text>
        <Link href="/(tabs)" style={estilos.link}>Conheça o movimento Reveste  ↗</Link>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  wrap: { backgroundColor: '#B5BEA6' },
  linha: { flexDirection: 'row' },
  imagem: { width: '100%', height: 230, backgroundColor: '#D7D3C6' },
  imagemPaisagem: { width: '44%', height: 310 },
  copy: { minHeight: 300, justifyContent: 'center', paddingHorizontal: 24, paddingVertical: 34 },
  copyPaisagem: { width: '56%' },
  kicker: { color: '#5D6D58', fontSize: 8, letterSpacing: 1.1 },
  titulo: { marginTop: 21, color: '#244035', fontSize: 30, lineHeight: 35, fontFamily: 'serif' },
  descricao: { maxWidth: 440, marginTop: 14, color: '#435547', fontSize: 11, lineHeight: 18 },
  link: { alignSelf: 'flex-start', marginTop: 18, color: '#294438', fontSize: 10 },
});
