import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { imagemEditorial } from '@/data/produtos-demo';

type Propriedades = { paisagem: boolean };

export function HeroEditorial({ paisagem }: Propriedades) {
  return (
    <View style={[estilos.wrap, paisagem && estilos.linha]}>
      <View style={[estilos.copy, paisagem && estilos.copyPaisagem]}>
        <Text style={estilos.kicker}>CURADORIA COM PROPÓSITO  /  REVESTE</Text>
        <Text style={estilos.titulo}>O novo é dar{ '\n' }outra chance.</Text>
        <Text style={estilos.descricao}>Peças únicas. Histórias que continuam.{ '\n' }Encontre seu próximo favorito no que já existe.</Text>
        <Link href="/(tabs)" style={estilos.botao}>Explore a curadoria  ↗</Link>
        <Text style={estilos.assinatura}>SECOND HAND, FIRST CHOICE.</Text>
      </View>
      <Image source={{ uri: imagemEditorial }} contentFit="cover" transition={200} style={[estilos.imagem, paisagem && estilos.imagemPaisagem]} accessibilityLabel="Editorial de moda sustentável" />
    </View>
  );
}

const estilos = StyleSheet.create({
  wrap: { backgroundColor: '#EAE7DC' },
  linha: { flexDirection: 'row' },
  copy: { minHeight: 340, justifyContent: 'center', paddingHorizontal: 24, paddingVertical: 32, backgroundColor: '#EAE7DC' },
  kicker: { color: '#606D5E', fontSize: 8, letterSpacing: 1.1 },
  titulo: { marginTop: 22, color: '#244035', fontSize: 40, lineHeight: 45, fontFamily: 'serif' },
  descricao: { marginTop: 14, color: '#4D5B50', fontSize: 11, lineHeight: 18 },
  botao: { alignSelf: 'flex-start', marginTop: 21, paddingHorizontal: 16, paddingVertical: 14, backgroundColor: '#203B30', color: '#F7F5EF', fontSize: 10 },
  assinatura: { marginTop: 22, color: '#506152', fontSize: 8, letterSpacing: 0.7 },
  imagem: { width: '100%', height: 330, backgroundColor: '#D7D3C6' },
  copyPaisagem: { width: '44%' },
  imagemPaisagem: { width: '56%', height: 430, minHeight: 430 },
});
