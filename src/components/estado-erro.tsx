import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Cores, Fontes } from '@/constants/tema';

type Propriedades = { mensagem: string; onTentarNovamente?: () => void };

export function EstadoErro({ mensagem, onTentarNovamente }: Propriedades) {
  return (
    <View accessibilityLiveRegion="polite" style={estilos.wrap}>
      <Text accessibilityRole="alert" style={estilos.mensagem}>{mensagem}</Text>
      {onTentarNovamente && <Pressable accessibilityRole="button" onPress={onTentarNovamente} style={({ pressed }) => [estilos.botao, pressed && estilos.pressionado]}><Text style={estilos.textoBotao}>Tentar novamente</Text></Pressable>}
    </View>
  );
}

const estilos = StyleSheet.create({
  wrap: { gap: 16, padding: 20 },
  mensagem: { color: Cores.carvao, fontFamily: Fontes.texto, fontSize: 16, lineHeight: 24 },
  botao: { minHeight: 48, alignSelf: 'flex-start', justifyContent: 'center', paddingHorizontal: 18, backgroundColor: Cores.floresta },
  textoBotao: { color: Cores.offWhite, fontFamily: Fontes.textoSemibold, fontSize: 15 },
  pressionado: { opacity: 0.75 },
});
