import { StyleSheet, Text, View } from 'react-native';

import { Cores, Fontes } from '@/constants/tema';
import type { ItemCarrinho as Item } from '@/types/carrinho';

type Propriedades = { item: Item };

export function ItemCarrinho({ item }: Propriedades) {
  return (
    <View style={estilos.item}>
      <Text style={estilos.texto}>
        {item.quantidade}x {item.produto.titulo}
      </Text>
      <Text style={estilos.preco}>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.produto.preco * item.quantidade)}</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  item: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', gap: 8, paddingVertical: 16, borderBottomWidth: 1, borderBottomColor: Cores.borda },
  texto: { flexShrink: 1, color: Cores.carvao, fontFamily: Fontes.texto, fontSize: 16, lineHeight: 24 },
  preco: { color: Cores.floresta, fontFamily: Fontes.textoSemibold, fontSize: 16, lineHeight: 24 },
});
