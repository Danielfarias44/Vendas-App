import { Text, View } from 'react-native';

import type { ItemCarrinho as Item } from '@/types/carrinho';

type Propriedades = { item: Item };

export function ItemCarrinho({ item }: Propriedades) {
  return (
    <View>
      <Text>
        {item.quantidade}x {item.produto.titulo}
      </Text>
    </View>
  );
}
