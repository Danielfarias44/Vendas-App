// Linha do carrinho: imagem, nome, preço, botões + / − e remover.
import { Text, View } from 'react-native';

import type { ItemCarrinho as Item } from '@/types/carrinho';

type Props = { item: Item };

export function ItemCarrinho({ item }: Props) {
  return (
    <View>
      <Text>
        {item.quantidade}x {item.produto.titulo}
      </Text>
    </View>
  );
}
