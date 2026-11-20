// Checkout: endereço, escolha Pix/Cartão/Boleto, resumo e botão "Pagar".
// TODO:
// - Chamar processarPagamento() mostrando loading; tratar falha com mensagem.
// - Em sucesso: salvarPedido(), limpar carrinho, ir para /pedido-confirmado.
import { Text, View } from 'react-native';

export default function TelaCheckout() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Checkout</Text>
    </View>
  );
}
