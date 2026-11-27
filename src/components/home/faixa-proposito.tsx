import { StyleSheet, Text, View } from 'react-native';

export function FaixaProposito() {
  return <View style={estilos.faixa}><Text style={estilos.texto}>MENOS NOVO. MAIS HISTÓRIA.  •  MODA EM CIRCULAÇÃO, FUTUROS EM TRANSFORMAÇÃO.</Text></View>;
}

const estilos = StyleSheet.create({ faixa: { minHeight: 26, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 8, backgroundColor: '#203B30' }, texto: { color: '#F6F3EB', fontSize: 7, letterSpacing: 0.7, textAlign: 'center' } });
