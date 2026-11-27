import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export function ClubeFolha() {
  return (
    <View style={estilos.outer}><View style={estilos.card}>
      <View style={estilos.copy}><Text style={estilos.kicker}>CLUBE FOLHA</Text><Text style={estilos.titulo}>Pequenos gestos. Novas recompensas.</Text><Text style={estilos.descricao}>Complete missões, junte folhas e troque por cupons para o próximo achado.</Text></View>
      <Link href="/(tabs)/perfil" style={estilos.botao}>Conheça o Clube Folha ↗</Link>
    </View></View>
  );
}

const estilos = StyleSheet.create({
  outer: { paddingHorizontal: 18, paddingVertical: 34, backgroundColor: '#F7F5EF' },
  card: { padding: 20, backgroundColor: '#EAE7DC' },
  copy: { gap: 9 },
  kicker: { color: '#63705F', fontSize: 8, letterSpacing: 1.1 },
  titulo: { color: '#30483A', fontSize: 22, lineHeight: 29, fontFamily: 'serif' },
  descricao: { color: '#647063', fontSize: 10, lineHeight: 16 },
  botao: { alignSelf: 'flex-start', marginTop: 17, paddingHorizontal: 15, paddingVertical: 13, backgroundColor: '#203B30', color: '#F7F5EF', fontSize: 9 },
});
