import { Pressable, StyleSheet, Text, View } from 'react-native';

const categorias = [
  ['Alfaiataria', 'Para todos os seus dias  ↗'],
  ['Vintage', 'O tempo só melhora  ↗'],
  ['Básicos naturais', 'Essenciais, de verdade  ↗'],
  ['Bolsas & acessórios', 'Detalhes com história  ↗'],
];

export function CategoriasHome() {
  return (
    <View style={estilos.wrap}>
      <Text style={estilos.titulo}>Seu estilo, em novos ciclos.</Text>
      <View style={estilos.lista}>{categorias.map(([titulo, descricao]) => <Pressable key={titulo} style={estilos.card}><Text style={estilos.nome}>{titulo}</Text><Text style={estilos.descricao}>{descricao}</Text></Pressable>)}</View>
    </View>
  );
}

const estilos = StyleSheet.create({
  wrap: { paddingHorizontal: 18, paddingTop: 15, paddingBottom: 38, backgroundColor: '#F7F5EF' },
  titulo: { marginBottom: 17, color: '#244035', fontSize: 25, lineHeight: 32, fontFamily: 'serif' },
  lista: { gap: 8 },
  card: { minHeight: 94, justifyContent: 'center', paddingHorizontal: 18, backgroundColor: '#EAE7DC' },
  nome: { color: '#30483A', fontSize: 20, fontFamily: 'serif' },
  descricao: { marginTop: 8, color: '#657063', fontSize: 9 },
});
