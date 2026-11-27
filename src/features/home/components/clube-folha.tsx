import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Cores, Fontes } from '@/constants/tema';

export function ClubeFolha() {
  return (
    <View style={estilos.limite}>
      <View style={estilos.outer}>
        <View style={estilos.card}>
          <View style={estilos.copy}>
            <Text style={estilos.kicker}>CLUBE FOLHA</Text>
            <Text accessibilityRole="header" style={estilos.titulo}>Pequenos gestos. Novas recompensas.</Text>
            <Text style={estilos.descricao}>Complete missões, junte folhas e troque por cupons para o próximo achado.</Text>
          </View>
          <Link href="/clube-folha" asChild>
            <Pressable accessibilityRole="link" style={({ pressed }) => [estilos.botao, pressed && estilos.pressionado]}>
              <Text style={estilos.botaoTexto}>Conheça o Clube Folha ↗</Text>
            </Pressable>
          </Link>
        </View>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  limite: { width: '100%', alignSelf: 'center', maxWidth: 1440, backgroundColor: Cores.offWhite },
  outer: { paddingHorizontal: 20, paddingVertical: 36 },
  card: { flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 24, padding: 26, borderLeftWidth: 4, borderLeftColor: Cores.terracota, backgroundColor: Cores.areia },
  copy: { flex: 1, flexBasis: 280, gap: 10 },
  kicker: { color: Cores.floresta, fontFamily: Fontes.textoBold, fontSize: 12, letterSpacing: 1.4 },
  titulo: { color: Cores.floresta, fontFamily: Fontes.titulo, fontSize: 28, lineHeight: 36 },
  descricao: { maxWidth: 640, color: Cores.carvao, fontFamily: Fontes.texto, fontSize: 16, lineHeight: 24 },
  botao: { minHeight: 50, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 18, backgroundColor: Cores.floresta },
  botaoTexto: { color: Cores.offWhite, fontFamily: Fontes.textoSemibold, fontSize: 14 },
  pressionado: { opacity: 0.75 },
});
