import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import { Cores, Fontes } from '@/constants/tema';

type Propriedades = { onBuscar: (termo: string) => void; valorInicial?: string };

export function BarraBusca({ onBuscar, valorInicial = '' }: Propriedades) {
  const [valor, setValor] = useState(valorInicial);

  useEffect(() => {
    const temporizador = setTimeout(() => onBuscar(valor), 350);
    return () => clearTimeout(temporizador);
  }, [onBuscar, valor]);

  return (
    <View style={estilos.container}>
      <Text accessible={false} style={estilos.lupa}>⌕</Text>
      <TextInput
        accessibilityLabel="Buscar peças"
        accessibilityHint="Digite o nome, marca ou categoria da peça"
        value={valor}
        onChangeText={setValor}
        placeholder="O que você procura?"
        placeholderTextColor={Cores.textoSecundario}
        returnKeyType="search"
        style={estilos.input}
      />
      {valor.length > 0 && <Pressable accessibilityRole="button" accessibilityLabel="Limpar busca" hitSlop={8} onPress={() => setValor('')} style={estilos.botaoLimpar}><Text style={estilos.limpar}>×</Text></Pressable>}
    </View>
  );
}

const estilos = StyleSheet.create({
  container: { minHeight: 48, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12, borderWidth: 1, borderColor: Cores.borda, backgroundColor: Cores.offWhite },
  lupa: { marginRight: 10, color: Cores.floresta, fontSize: 24 },
  input: { minHeight: 46, flex: 1, paddingVertical: 6, color: Cores.carvao, fontFamily: Fontes.texto, fontSize: 15 },
  botaoLimpar: { minWidth: 44, minHeight: 44, alignItems: 'center', justifyContent: 'center' },
  limpar: { color: Cores.floresta, fontFamily: Fontes.texto, fontSize: 24 },
});
