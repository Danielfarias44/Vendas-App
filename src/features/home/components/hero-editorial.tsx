import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Cores, Fontes } from '@/constants/tema';
import { imagemEditorial } from '@/data/produtos-demo';

type Propriedades = { telaLarga: boolean };

export function HeroEditorial({ telaLarga }: Propriedades) {
  return (
    <View style={[estilos.limite, telaLarga && estilos.linha]}>
      <View style={[estilos.copy, telaLarga && estilos.copyAmplo]}>
        <Text style={estilos.kicker}>CURADORIA COM PROPÓSITO  /  REVESTE</Text>
        <Text accessibilityRole="header" style={[estilos.titulo, telaLarga && estilos.tituloAmplo]}>O novo é dar{ '\n' }outra chance.</Text>
        <Text style={estilos.descricao}>Peças únicas. Histórias que continuam. Encontre seu próximo favorito no que já existe.</Text>
        <Link href="/explorar" asChild>
          <Pressable accessibilityRole="link" style={({ pressed }) => [estilos.botao, pressed && estilos.pressionado]}>
            <Text style={estilos.botaoTexto}>Explore a curadoria  ↗</Text>
          </Pressable>
        </Link>
        <Text style={estilos.assinatura}>SECOND HAND, FIRST CHOICE.</Text>
      </View>
      <Image source={{ uri: imagemEditorial }} contentFit="cover" transition={200} style={[estilos.imagem, telaLarga && estilos.imagemAmpla]} accessibilityLabel="Editorial de moda sustentável e circular" />
    </View>
  );
}

const estilos = StyleSheet.create({
  limite: { width: '100%', alignSelf: 'center', maxWidth: 1440, backgroundColor: Cores.areia },
  linha: { flexDirection: 'row' },
  copy: { minHeight: 320, justifyContent: 'center', paddingHorizontal: 24, paddingVertical: 36, backgroundColor: Cores.areia },
  copyAmplo: { width: '50%', minHeight: 500, paddingHorizontal: 56 },
  kicker: { color: Cores.floresta, fontFamily: Fontes.textoSemibold, fontSize: 12, letterSpacing: 1.2 },
  titulo: { marginTop: 22, color: Cores.floresta, fontFamily: Fontes.titulo, fontSize: 38, lineHeight: 46 },
  tituloAmplo: { fontSize: 56, lineHeight: 64 },
  descricao: { maxWidth: 500, marginTop: 18, color: Cores.carvao, fontFamily: Fontes.texto, fontSize: 16, lineHeight: 25 },
  botao: { minHeight: 50, alignSelf: 'flex-start', justifyContent: 'center', marginTop: 24, paddingHorizontal: 18, backgroundColor: Cores.floresta },
  botaoTexto: { color: Cores.offWhite, fontFamily: Fontes.textoSemibold, fontSize: 15 },
  assinatura: { marginTop: 24, color: Cores.textoSecundario, fontFamily: Fontes.textoMedio, fontSize: 12, letterSpacing: 0.8 },
  imagem: { width: '100%', height: 320, backgroundColor: Cores.salvia },
  imagemAmpla: { width: '50%', height: 500 },
  pressionado: { opacity: 0.78 },
});
