import { memo } from 'react';
import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { ImagemProduto } from '@/components/imagem-produto';
import { Cores, Fontes } from '@/constants/tema';
import type { Produto } from '@/types/produto';

type Propriedades = { produto: Produto; largura: number; destaque?: boolean };

function ProdutoCardBase({ produto, largura, destaque = false }: Propriedades) {
  const rotulo = `${produto.titulo}, ${formatarPreco(produto.preco)}, tamanho ${produto.tamanho}, ${produto.estado}, peça única`;

  return (
    <Link href={{ pathname: '/produto/[id]', params: { id: String(produto.id) } }} asChild>
      <Pressable
        accessibilityRole="link"
        accessibilityLabel={rotulo}
        accessibilityHint="Abre os detalhes desta peça única"
        style={({ pressed }) => [estilos.card, { width: largura }, pressed && estilos.pressionado]}
      >
        <View style={estilos.fotoWrap}>
          <ImagemProduto uri={produto.thumbnail} tamanho={largura} altura={Math.round(largura * 1.22)} accessibilityLabel={`Foto de ${produto.titulo}`} />
          <View accessible={false} style={estilos.selo}><Text style={estilos.seloTexto}>PEÇA ÚNICA</Text></View>
        </View>
        <View style={estilos.categoriaLinha}>
          <Text style={estilos.categoria}>{produto.etiqueta ?? produto.categoria}</Text>
        </View>
        <Text style={[estilos.titulo, destaque && estilos.tituloDestaque]}>{produto.titulo}</Text>
        <Text style={estilos.detalhe}>{[produto.marca, produto.tamanho, produto.estado].filter(Boolean).join(' · ')}</Text>
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
  card: { minWidth: 112, marginBottom: 28 },
  fotoWrap: { position: 'relative', alignSelf: 'stretch', overflow: 'hidden', backgroundColor: Cores.areia },
  selo: { position: 'absolute', left: 10, bottom: 10, minHeight: 30, justifyContent: 'center', paddingHorizontal: 9, backgroundColor: Cores.offWhite },
  seloTexto: { color: Cores.floresta, fontFamily: Fontes.textoSemibold, fontSize: 12, letterSpacing: 0.6 },
  categoriaLinha: { minHeight: 42, flexDirection: 'row', alignItems: 'center', gap: 6 },
  categoria: { flex: 1, color: Cores.textoSecundario, fontFamily: Fontes.textoSemibold, fontSize: 12, lineHeight: 17, letterSpacing: 0.5, textTransform: 'uppercase' },
  titulo: { minHeight: 44, color: Cores.carvao, fontFamily: Fontes.texto, fontSize: 15, lineHeight: 21 },
  tituloDestaque: { fontFamily: Fontes.textoSemibold },
  detalhe: { minHeight: 38, marginTop: 3, color: Cores.textoSecundario, fontFamily: Fontes.texto, fontSize: 13, lineHeight: 18 },
  preco: { marginTop: 5, color: Cores.floresta, fontFamily: Fontes.textoSemibold, fontSize: 17, lineHeight: 24 },
  pressionado: { opacity: 0.78 },
});
