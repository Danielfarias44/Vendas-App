import { Link, useRouter } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';

import { Cores, Fontes } from '@/constants/tema';

type Propriedades = {
  titulo: string;
  descricao: string;
  etiqueta?: string;
};

export function TelaPlanejada({ titulo, descricao, etiqueta = 'REVESTE  /  EM CONSTRUÇÃO' }: Propriedades) {
  const router = useRouter();
  const { width } = useWindowDimensions();

  return (
    <ScrollView style={estilos.tela} contentContainerStyle={estilos.conteudo}>
      <View style={estilos.limite}>
        <Text style={estilos.etiqueta}>{etiqueta}</Text>
        <Text accessibilityRole="header" style={[estilos.titulo, { fontSize: width < 380 ? 34 : 44, lineHeight: width < 380 ? 42 : 52 }]}>{titulo}</Text>
        <Text style={estilos.descricao}>{descricao}</Text>
        <View style={estilos.acoes}>
          <Link href="/(tabs)" asChild>
            <Pressable accessibilityRole="link" style={({ pressed }) => [estilos.primario, pressed && estilos.pressionado]}>
              <Text style={estilos.textoPrimario}>Voltar para a home</Text>
            </Pressable>
          </Link>
          <Pressable accessibilityRole="button" onPress={() => router.back()} style={({ pressed }) => [estilos.secundario, pressed && estilos.pressionado]}>
            <Text style={estilos.textoSecundario}>Voltar à tela anterior</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  tela: { flex: 1, backgroundColor: Cores.offWhite },
  conteudo: { flexGrow: 1, justifyContent: 'center', paddingHorizontal: 24, paddingVertical: 40 },
  limite: { width: '100%', maxWidth: 760, alignSelf: 'center' },
  etiqueta: { color: Cores.floresta, fontFamily: Fontes.textoSemibold, fontSize: 13, letterSpacing: 1.2 },
  titulo: { marginTop: 18, color: Cores.floresta, fontFamily: Fontes.titulo, fontSize: 44, lineHeight: 52 },
  descricao: { maxWidth: 640, marginTop: 16, color: Cores.carvao, fontFamily: Fontes.texto, fontSize: 17, lineHeight: 27 },
  acoes: { alignItems: 'flex-start', gap: 12, marginTop: 30 },
  primario: { minHeight: 50, justifyContent: 'center', paddingHorizontal: 18, backgroundColor: Cores.floresta },
  textoPrimario: { color: Cores.offWhite, fontFamily: Fontes.textoSemibold, fontSize: 15 },
  secundario: { minHeight: 44, justifyContent: 'center', paddingHorizontal: 4 },
  textoSecundario: { color: Cores.floresta, fontFamily: Fontes.textoSemibold, fontSize: 15, textDecorationLine: 'underline' },
  pressionado: { opacity: 0.72 },
});
