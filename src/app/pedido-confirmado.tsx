// Confirmação do pedido: número, total, código Pix/boleto e botão "Voltar ao início".
import { Text, View } from 'react-native';

export default function PedidoConfirmado() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Pedido confirmado</Text>
    </View>
  );
}
