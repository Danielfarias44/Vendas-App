import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export function RodapeHome() {
  return (
    <View style={estilos.wrap}>
      <Text style={estilos.logo}>reveste</Text><Text style={estilos.slogan}>Boas peças merecem novas histórias.</Text>
      <View style={estilos.links}>
        <View><Text style={estilos.titulo}>Explore</Text><Link style={estilos.link} href="/(tabs)">Todas as peças</Link><Link style={estilos.link} href="/(tabs)">Vintage selecionado</Link></View>
        <View><Text style={estilos.titulo}>Sua conta</Text><Link style={estilos.link} href="/(tabs)/perfil">Meus pedidos</Link><Link style={estilos.link} href="/favoritos">Favoritos</Link></View>
        <View><Text style={estilos.titulo}>Vamos conversar</Text><Text style={estilos.link}>Sobre a Reveste</Text><Text style={estilos.link}>Dúvidas frequentes</Text></View>
      </View>
      <Text style={estilos.legal}>© 2026 Reveste. Feito para circular.</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  wrap: { paddingHorizontal: 18, paddingTop: 30, paddingBottom: 26, backgroundColor: '#203B30' },
  logo: { color: '#F7F5EF', fontSize: 31, fontFamily: 'serif' },
  slogan: { marginTop: 5, color: '#D4D8CE', fontSize: 10 },
  links: { flexDirection: 'row', flexWrap: 'wrap', gap: 22, marginTop: 30 },
  titulo: { marginBottom: 12, color: '#F5F2EA', fontSize: 10, fontWeight: '700' },
  link: { marginBottom: 10, color: '#D4D8CE', fontSize: 9 },
  legal: { marginTop: 21, color: '#BDC6B8', fontSize: 8 },
});
