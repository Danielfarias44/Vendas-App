// Detalhe do produto: galeria de imagens, título, preço, descrição.
// TODO:
// - Pegar o id com useLocalSearchParams() e buscar com useProduto().
// - Botão "Adicionar ao carrinho" → useCarrinho().
// - Botão de favoritar → favoritos-repository.
// - Layout lado a lado (imagem | texto) em paisagem.
import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

export default function DetalheProduto() {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Produto {id}</Text>
    </View>
  );
}
