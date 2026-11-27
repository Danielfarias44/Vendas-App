import { memo } from 'react';
import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { ImagemProduto } from '@/components/imagem-produto';
import type { Produto } from '@/types/produto';

type Propriedades = { produto: Produto; largura: number; destaque?: boolean };

function ProdutoCardBase({ produto, largura, destaque = false }: Propriedades) {
  return (
    <Link href={{ pathname: '/produto/[id]', params: { id: String(produto.id) } }} asChild>
      <Pressable accessibilityRole="button" accessibilityLabel={`${produto.titulo}, ${formatarPreco(produto.preco)}`} style={StyleSheet.flatten([estilos.card, { width: largura }])}>
        <View style={estilos.fotoWrap}>
          <ImagemProduto uri={produto.thumbnail} tamanho={largura} altura={Math.round(largura * 1.19)} />
          <View style={estilos.selo}><Text style={estilos.seloTexto}>PEÇA ÚNICA</Text></View>
        </View>
        <View style={estilos.categoriaLinha}><Text numberOfLines={1} style={estilos.categoria}>{produto.etiqueta ?? produto.categoria}</Text><Text style={estilos.salvarTexto}>♡</Text></View>
        <Text numberOfLines={2} style={[estilos.titulo, destaque && estilos.tituloDestaque]}>{produto.titulo}</Text>
        <Text numberOfLines={1} style={estilos.detalhe}>{produto.marca} · {produto.tamanho} · {produto.estado}</Text>
        <Text style={estilos.preco}>{formatarPreco(produto.preco)}</Text>
      </Pressable>
    </Link>
  );
}

function formatarPreco(valor: number) {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);
}

export const ProdutoCard = memo(ProdutoCardBase);

const estilos = StyleSheet.create({
  card: { marginBottom: 24 },
  fotoWrap: { position: 'relative', alignSelf: 'stretch', backgroundColor: '#E8E5DB' },
  selo: { position: 'absolute', left: 9, bottom: 9, paddingHorizontal: 8, paddingVertical: 5, backgroundColor: '#F4F0E6' },
  seloTexto: { color: '#344438', fontSize: 8, letterSpacing: 1.1, fontWeight: '700' },
  salvarTexto: { color: '#283A30', fontSize: 19, lineHeight: 22 },
  categoriaLinha: { height: 28, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  categoria: { flex: 1, marginTop: 1, color: '#7D806F', fontSize: 8, letterSpacing: 1, textTransform: 'uppercase' },
  titulo: { marginTop: 1, minHeight: 22, color: '#283A30', fontSize: 12, lineHeight: 17 },
  tituloDestaque: { fontWeight: '600' },
  detalhe: { minHeight: 17, marginTop: 2, color: '#777A6D', fontSize: 8 },
  preco: { marginTop: 4, color: '#283A30', fontSize: 12, fontWeight: '700' },
});
