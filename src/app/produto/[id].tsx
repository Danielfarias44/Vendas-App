import { Link, useLocalSearchParams } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { ImagemProduto } from '@/components/imagem-produto';
import { Cores, Fontes } from '@/constants/tema';
import { produtosDemo } from '@/data/produtos-demo';
import { useOrientacao } from '@/hooks/use-orientacao';

export default function DetalheProduto() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const produto = produtosDemo.find((produto) => produto.id === Number(id));
  const { telaLarga, largura } = useOrientacao();

  if (!produto) return <View style={estilos.naoEncontrado}><Text accessibilityRole="header" style={estilos.titulo}>Peça não encontrada</Text><Link href="/(tabs)" style={estilos.voltar}>Voltar ao acervo</Link></View>;

  const imagem = Math.max(0, Math.min(telaLarga ? (largura - 72) * 0.44 : largura - 40, 520));
  return (
    <ScrollView style={estilos.tela} contentContainerStyle={estilos.conteudoOuter}>
      <View style={[estilos.conteudo, telaLarga && estilos.conteudoAmplo]}>
      <ImagemProduto uri={produto.imagens[0] ?? produto.thumbnail} tamanho={imagem} altura={Math.round(imagem * 1.25)} accessibilityLabel={`Foto de ${produto.titulo}`} />
      <View style={[estilos.detalhes, telaLarga && estilos.detalhesAmplo]}>
        <Text style={estilos.categoria}>{produto.categoria} · GARIMPO REVER</Text>
        <Text accessibilityRole="header" style={estilos.titulo}>{produto.titulo}</Text>
        <Text style={estilos.preco}>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(produto.preco)}</Text>
        <View style={estilos.divisor} />
        <Text style={estilos.selo}>PEÇA ÚNICA · SEGUNDA VIDA</Text>
        <Text style={estilos.descricao}>{produto.descricao}</Text>
        <Pressable accessibilityRole="button" accessibilityLabel="Adicionar à sacola, indisponível temporariamente" accessibilityState={{ disabled: true }} accessibilityHint="A integração com a sacola ainda está em implementação" disabled style={[estilos.botao, estilos.botaoDesativado]}><Text style={estilos.botaoTexto}>Adicionar à sacola</Text></Pressable>
        <Text style={estilos.avisoBotao}>A sacola será ativada quando a integração estiver pronta.</Text>
        <Link href="/(tabs)" style={estilos.voltar}>← Continuar explorando</Link>
      </View>
      </View>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  tela: { flex: 1, backgroundColor: Cores.offWhite },
  conteudoOuter: { paddingHorizontal: 20, paddingVertical: 24 },
  conteudo: { width: '100%', maxWidth: 1200, alignSelf: 'center', alignItems: 'center' },
  conteudoAmplo: { flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'center', gap: 32 },
  detalhes: { width: '100%', maxWidth: 560, paddingTop: 24 },
  detalhesAmplo: { width: '46%', paddingTop: 8 },
  categoria: { color: Cores.textoSecundario, fontFamily: Fontes.textoSemibold, fontSize: 13, lineHeight: 20, letterSpacing: 0.8 },
  titulo: { marginTop: 12, color: Cores.floresta, fontFamily: Fontes.titulo, fontSize: 34, lineHeight: 42 },
  preco: { marginTop: 14, color: Cores.floresta, fontFamily: Fontes.textoSemibold, fontSize: 22, lineHeight: 30 },
  divisor: { height: 1, marginVertical: 22, backgroundColor: Cores.borda },
  selo: { color: Cores.floresta, fontFamily: Fontes.textoSemibold, fontSize: 13, lineHeight: 20, letterSpacing: 0.8 },
  descricao: { marginTop: 12, color: Cores.carvao, fontFamily: Fontes.texto, fontSize: 16, lineHeight: 25 },
  botao: { minHeight: 52, marginTop: 26, alignItems: 'center', justifyContent: 'center', backgroundColor: Cores.floresta },
  botaoDesativado: { backgroundColor: Cores.salvia },
  botaoTexto: { color: Cores.floresta, fontFamily: Fontes.textoSemibold, fontSize: 15 },
  avisoBotao: { marginTop: 8, color: Cores.textoSecundario, fontFamily: Fontes.texto, fontSize: 13, lineHeight: 20 },
  voltar: { minHeight: 48, marginTop: 12, textAlignVertical: 'center', color: Cores.floresta, fontFamily: Fontes.textoSemibold, fontSize: 15, textDecorationLine: 'underline' },
  naoEncontrado: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24, backgroundColor: Cores.offWhite },
});
