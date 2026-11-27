import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

import { Cores, Fontes } from '@/constants/tema';

export function EstadoCarregando() {
  return (
    <View accessibilityLiveRegion="polite" style={estilos.wrap}>
      <ActivityIndicator accessibilityLabel="Carregando conteúdo" color={Cores.floresta} size="large" />
      <Text style={estilos.texto}>Carregando…</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  wrap: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 12, backgroundColor: Cores.offWhite },
  texto: { color: Cores.textoSecundario, fontFamily: Fontes.texto, fontSize: 15 },
});
