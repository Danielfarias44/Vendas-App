import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

type Propriedades = { onBuscar: (texto: string) => void };

export function CabecalhoHome({ onBuscar }: Propriedades) {
  return (
    <View style={estilos.wrap}>
      <View style={estilos.nav}>
        <Link href="/(tabs)" style={estilos.logo}>reveste</Link>
        <View style={estilos.acoes}>
          <Link href="/(tabs)/perfil" style={estilos.icone}>♙</Link>
          <Link href="/favoritos" style={estilos.icone}>♡</Link>
          <Link href="/(tabs)/carrinho" style={estilos.icone}>♧</Link>
        </View>
      </View>
      <View style={estilos.links}>
        <Link href="/(tabs)" style={estilos.linkAtivo}>Novidades</Link>
        <Link href="/(tabs)" style={estilos.link}>Roupas</Link>
        <Link href="/(tabs)" style={estilos.link}>Vintage</Link>
        <Link href="/(tabs)/perfil" style={estilos.link}>Clube Folha</Link>
      </View>
      <View style={estilos.buscaLinha}>
        <View style={estilos.busca}><Text style={estilos.lupa}>⌕</Text><TextInput placeholder="Busque uma peça, marca ou história" placeholderTextColor="#77796F" onChangeText={onBuscar} style={estilos.input} /></View>
        <Pressable accessibilityRole="button" style={estilos.vender} onPress={() => {}}><Text style={estilos.venderTexto}>Vender</Text></Pressable>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  wrap: { paddingHorizontal: 18, paddingBottom: 13, backgroundColor: '#F7F5EF' },
  nav: { minHeight: 56, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  logo: { color: '#244035', fontSize: 31, lineHeight: 38, fontFamily: 'serif' },
  acoes: { flexDirection: 'row', alignItems: 'center', gap: 16 },
  icone: { color: '#294439', fontSize: 21 },
  links: { minHeight: 35, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: '#E4E1D7' },
  linkAtivo: { color: '#294439', fontSize: 10, fontWeight: '700' },
  link: { color: '#5F675C', fontSize: 10 },
  buscaLinha: { flexDirection: 'row', gap: 8, marginTop: 11 },
  busca: { height: 42, flex: 1, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, backgroundColor: '#E9E6DC' },
  lupa: { marginRight: 8, color: '#405448', fontSize: 21 },
  input: { flex: 1, paddingVertical: 0, color: '#314438', fontSize: 10 },
  vender: { minWidth: 66, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 12, borderWidth: 1, borderColor: '#5C6E61' },
  venderTexto: { color: '#314438', fontSize: 10 },
});
