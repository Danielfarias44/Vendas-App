// Tela inicial: busca, categorias e grade de produtos.
// TODO:
// - FlatList com numColumns vindo de useOrientacao() (muda ao girar; usar key={colunas}).
// - Dados de useProdutos(): onEndReached → carregarMais (lazy loading).
// - Props de performance da FlatList: initialNumToRender, windowSize, removeClippedSubviews.
// - Mostrar EstadoCarregando / EstadoErro conforme o estado.
import { Text, View } from 'react-native';

export default function TelaInicial() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tela inicial</Text>
    </View>
  );
}
