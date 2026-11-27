import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Cores, Fontes } from '@/constants/tema';
import { imagemManifesto } from '@/data/produtos-demo';

type Propriedades = { telaLarga: boolean };

export function ManifestoCircular({ telaLarga }: Propriedades) {
  return (
    <View style={[estilos.wrap, telaLarga && estilos.linha]}>
      <Image source={{ uri: imagemManifesto }} contentFit="cover" transition={200} style={[estilos.imagem, telaLarga && estilos.imagemAmpla]} accessibilityLabel="Mãos dobrando uma peça de roupa para reutilização" />
      <View style={[estilos.copy, telaLarga && estilos.copyAmplo]}>
        <Text style={estilos.kicker}>VESTIR TAMBÉM É UMA ESCOLHA.</Text>
        <Text accessibilityRole="header" style={estilos.titulo}>O que é bom{ '\n' }não acaba em você.</Text>
        <Text style={estilos.descricao}>Acreditamos na beleza do que já existe. Somos um encontro entre quem desapega e quem descobre — para manter boas peças e boas histórias em circulação.</Text>
        <Link href="/clube-folha" asChild><Pressable accessibilityRole="link" style={({ pressed }) => [estilos.link, pressed && estilos.pressionado]}><Text style={estilos.linkTexto}>Conheça o movimento Reveste  ↗</Text></Pressable></Link>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  wrap: { width: '100%', alignSelf: 'center', maxWidth: 1440, backgroundColor: Cores.salvia },
  linha: { flexDirection: 'row' },
  imagem: { width: '100%', height: 240, backgroundColor: Cores.areia },
  imagemAmpla: { width: '44%', height: 400 },
  copy: { minHeight: 300, justifyContent: 'center', paddingHorizontal: 24, paddingVertical: 36 },
  copyAmplo: { width: '56%', paddingHorizontal: 56 },
  kicker: { color: Cores.floresta, fontFamily: Fontes.textoSemibold, fontSize: 12, letterSpacing: 1.1 },
  titulo: { marginTop: 20, color: Cores.floresta, fontFamily: Fontes.titulo, fontSize: 34, lineHeight: 42 },
  descricao: { maxWidth: 520, marginTop: 16, color: Cores.carvao, fontFamily: Fontes.texto, fontSize: 16, lineHeight: 25 },
  link: { minHeight: 48, alignSelf: 'flex-start', justifyContent: 'center', marginTop: 14 },
  linkTexto: { color: Cores.floresta, fontFamily: Fontes.textoSemibold, fontSize: 15, textDecorationLine: 'underline' },
  pressionado: { opacity: 0.7 },
});
