import { Link, useLocalSearchParams } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { ImagemProduto } from '@/components/imagem-produto';
import { produtosDemo } from '@/data/produtos-demo';
import { useOrientacao } from '@/hooks/use-orientacao';

export default function DetalheProduto() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const produto = produtosDemo.find((produto) => produto.id === Number(id));
  const { paisagem, largura } = useOrientacao();

  if (!produto) return <View style={estilos.naoEncontrado}><Text style={estilos.titulo}>Peça não encontrada</Text><Link href="/(tabs)" style={estilos.voltar}>Voltar ao acervo</Link></View>;

  const imagem = Math.min(paisagem ? 420 : largura - 32, 560);
  return (
    <ScrollView style={estilos.tela} contentContainerStyle={[estilos.conteudo, paisagem && estilos.conteudoPaisagem]}>
      <ImagemProduto uri={produto.imagens[0] ?? produto.thumbnail} tamanho={imagem} />
      <View style={estilos.detalhes}>
        <Text style={estilos.categoria}>{produto.categoria} · GARIMPO REVER</Text>
        <Text style={estilos.titulo}>{produto.titulo}</Text>
        <Text style={estilos.preco}>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(produto.preco)}</Text>
        <View style={estilos.divisor} />
        <Text style={estilos.selo}>PEÇA ÚNICA · SEGUNDA VIDA</Text>
        <Text style={estilos.descricao}>{produto.descricao}</Text>
        <Pressable accessibilityRole="button" style={estilos.botao}><Text style={estilos.botaoTexto}>Adicionar à sacola</Text></Pressable>
        <Link href="/(tabs)" style={estilos.voltar}>← Continuar explorando</Link>
      </View>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  tela: { flex: 1, backgroundColor: '#F4F2EA' },
  conteudo: { alignItems: 'center', padding: 16, paddingBottom: 36 },
  conteudoPaisagem: { flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'center', gap: 28 },
  detalhes: { width: '100%', maxWidth: 420, paddingTop: 20 },
  categoria: { color: '#858879', fontSize: 9, letterSpacing: 1.3 },
  titulo: { marginTop: 9, color: '#283A30', fontSize: 26, lineHeight: 32 },
  preco: { marginTop: 12, color: '#344438', fontSize: 17, fontWeight: '700' },
  divisor: { height: 1, marginVertical: 20, backgroundColor: '#D9D7CC' },
  selo: { color: '#68775F', fontSize: 9, letterSpacing: 1.2, fontWeight: '700' },
  descricao: { marginTop: 10, color: '#60675C', fontSize: 13, lineHeight: 21 },
  botao: { minHeight: 50, marginTop: 24, alignItems: 'center', justifyContent: 'center', backgroundColor: '#344438' },
  botaoTexto: { color: '#F4F2EA', fontSize: 12, letterSpacing: 0.6, fontWeight: '600' },
  voltar: { marginTop: 18, color: '#66705F', fontSize: 11 },
  naoEncontrado: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#F4F2EA' },
});
