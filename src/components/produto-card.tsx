// Card de produto na grade: imagem, título, preço. Ao tocar → /produto/[id].
// TODO: envolver com React.memo para não re-renderizar à toa (performance).
import { Text, View } from 'react-native';

import type { Produto } from '@/types/produto';

type Props = { produto: Produto };

export function ProdutoCard({ produto }: Props) {
  return (
    <View>
      <Text>{produto.titulo}</Text>
    </View>
  );
}
