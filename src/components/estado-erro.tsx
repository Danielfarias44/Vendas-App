// Mensagem de erro padrão com botão "Tentar novamente".
import { Button, Text, View } from 'react-native';

type Props = { mensagem: string; onTentarNovamente?: () => void };

export function EstadoErro({ mensagem, onTentarNovamente }: Props) {
  return (
    <View>
      <Text>{mensagem}</Text>
      {onTentarNovamente && <Button title="Tentar novamente" onPress={onTentarNovamente} />}
    </View>
  );
}
