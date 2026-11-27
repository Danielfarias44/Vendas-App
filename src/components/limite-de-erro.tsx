import { Component, type ReactNode } from 'react';
import { Text, View } from 'react-native';

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
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Algo deu errado.</Text>
        </View>
      );
    }
    return this.props.children;
  }
}
