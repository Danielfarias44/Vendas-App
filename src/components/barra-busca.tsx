import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

type Propriedades = { onBuscar: (termo: string) => void; valorInicial?: string };

export function BarraBusca({ onBuscar, valorInicial = '' }: Propriedades) {
  const [valor, setValor] = useState(valorInicial);

  useEffect(() => {
    const temporizador = setTimeout(() => onBuscar(valor), 350);
    return () => clearTimeout(temporizador);
  }, [onBuscar, valor]);

  return (
    <View style={estilos.container}>
      <Text style={estilos.lupa}>⌕</Text>
      <TextInput
        accessibilityLabel="Buscar peças"
        value={valor}
        onChangeText={setValor}
        placeholder="O que você procura?"
        placeholderTextColor="#8B8B7E"
        returnKeyType="search"
        style={estilos.input}
      />
      {valor.length > 0 && <Pressable accessibilityLabel="Limpar busca" onPress={() => setValor('')}><Text style={estilos.limpar}>×</Text></Pressable>}
    </View>
  );
}

const estilos = StyleSheet.create({
  container: { height: 48, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 14, borderWidth: 1, borderColor: '#D6D4C8', backgroundColor: '#F8F7F2' },
  lupa: { marginRight: 10, color: '#3D5143', fontSize: 24 },
  input: { flex: 1, paddingVertical: 0, color: '#283A30', fontSize: 13 },
  limpar: { paddingHorizontal: 5, color: '#5E675C', fontSize: 22 },
});
