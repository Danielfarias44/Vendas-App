import { StyleSheet, Text, View } from 'react-native';

import { Cores, Fontes } from '@/constants/tema';

export function FaixaProposito() {
  return (
    <View style={estilos.faixa}>
      <Text style={estilos.texto}>MENOS NOVO. MAIS HISTÓRIA.  •  MODA EM CIRCULAÇÃO, FUTUROS EM TRANSFORMAÇÃO.</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  faixa: { minHeight: 36, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 12, paddingVertical: 6, backgroundColor: Cores.floresta },
  texto: { color: Cores.offWhite, fontFamily: Fontes.textoSemibold, fontSize: 12, lineHeight: 16, letterSpacing: 0.5, textAlign: 'center' },
});
