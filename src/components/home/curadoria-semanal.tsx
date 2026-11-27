import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { ProdutoCard } from '@/components/produto-card';
import type { Produto } from '@/types/produto';

type Propriedades = { produtos: Produto[]; largura: number; colunas: number };

export function CuradoriaSemanal({ produtos, largura, colunas }: Propriedades) {
  const larguraCartao = Math.max(130, Math.floor((largura - 36 - 12 * (colunas - 1)) / colunas));
  return (
    <View style={estilos.wrap}>
      <View style={estilos.cabecalho}><Text style={estilos.titulo}>Achados para ficar.</Text><Link href="/(tabs)" style={estilos.verTudo}>Ver todas as peças ↗</Link></View>
      <View style={estilos.grade}>{produtos.map((produto) => <ProdutoCard key={produto.id} produto={produto} largura={larguraCartao} />)}</View>
    </View>
  );
}

const estilos = StyleSheet.create({
  wrap: { paddingHorizontal: 18, paddingTop: 36, paddingBottom: 22, backgroundColor: '#F7F5EF' },
  cabecalho: { flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between', gap: 8, marginBottom: 20 },
  titulo: { flex: 1, color: '#244035', fontSize: 27, lineHeight: 33, fontFamily: 'serif' },
  verTudo: { marginBottom: 4, color: '#405448', fontSize: 9 },
  grade: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', columnGap: 12 },
});
