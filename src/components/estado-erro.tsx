import { Button, Text, View } from 'react-native';

type Propriedades = { mensagem: string; onTentarNovamente?: () => void };

export function EstadoErro({ mensagem, onTentarNovamente }: Propriedades) {
  return (
    <View>
      <Text>{mensagem}</Text>
      {onTentarNovamente && <Button title="Tentar novamente" onPress={onTentarNovamente} />}
    </View>
  );
}
