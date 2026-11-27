import { Component, type ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Cores, Fontes } from '@/constants/tema';

type Propriedades = { children: ReactNode };
type Estado = { erro: Error | null };

export class LimiteDeErro extends Component<Propriedades, Estado> {
  state: Estado = { erro: null };

  static getDerivedStateFromError(erro: Error): Estado {
    return { erro };
  }

  render() {
    if (this.state.erro) {
      return (
        <View style={estilos.wrap}>
          <Text accessibilityRole="alert" style={estilos.titulo}>Algo deu errado.</Text>
          <Text style={estilos.descricao}>Feche e abra a tela novamente. Se o problema continuar, tente mais tarde.</Text>
        </View>
      );
    }
    return this.props.children;
  }
}

const estilos = StyleSheet.create({
  wrap: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24, backgroundColor: Cores.offWhite },
  titulo: { color: Cores.floresta, fontFamily: Fontes.titulo, fontSize: 30, lineHeight: 38, textAlign: 'center' },
  descricao: { maxWidth: 480, marginTop: 12, color: Cores.carvao, fontFamily: Fontes.texto, fontSize: 16, lineHeight: 24, textAlign: 'center' },
});
