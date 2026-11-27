import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { ProdutoCard } from '@/components/produto-card';
import { Cores, Fontes } from '@/constants/tema';
import type { Produto } from '@/types/produto';

type Propriedades = { produtos: Produto[]; largura: number; colunas: number };

export function CuradoriaSemanal({ produtos, largura, colunas }: Propriedades) {
  const larguraCartao = Math.max(112, Math.floor((largura - 40 - 16 * (colunas - 1)) / colunas));
  return (
    <View style={estilos.limite}>
      <View style={estilos.wrap}>
        <View style={estilos.cabecalho}>
          <Text accessibilityRole="header" style={estilos.titulo}>Achados para ficar.</Text>
          <Link accessibilityRole="link" href="/explorar" style={estilos.verTudo}>Ver todas as peças ↗</Link>
        </View>
        {produtos.length > 0 ? (
          <View style={estilos.grade}>
            {produtos.map((produto) => <ProdutoCard key={produto.id} produto={produto} largura={larguraCartao} />)}
          </View>
        ) : (
          <Text accessibilityRole="text" accessibilityLiveRegion="polite" style={estilos.vazio}>Nenhuma peça encontrada. Tente buscar por outro termo.</Text>
        )}
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  limite: { width: '100%', alignSelf: 'center', maxWidth: 1440, backgroundColor: Cores.offWhite },
  wrap: { paddingHorizontal: 20, paddingTop: 40, paddingBottom: 28 },
  cabecalho: { flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 12, marginBottom: 22 },
  titulo: { flexShrink: 1, color: Cores.floresta, fontFamily: Fontes.titulo, fontSize: 32, lineHeight: 40 },
  verTudo: { minHeight: 44, textAlignVertical: 'center', color: Cores.floresta, fontFamily: Fontes.textoSemibold, fontSize: 14, textDecorationLine: 'underline' },
  grade: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', columnGap: 16 },
  vazio: { paddingVertical: 28, color: Cores.textoSecundario, fontFamily: Fontes.texto, fontSize: 16, lineHeight: 24 },
});
