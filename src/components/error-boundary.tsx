// Captura erros de renderização para o app não fechar (tratamento de erro global).
// TODO: tela amigável com botão "Tentar novamente" (resetar o estado).
import { Component, type ReactNode } from 'react';
import { Text, View } from 'react-native';

type Props = { children: ReactNode };
type State = { erro: Error | null };

export class ErrorBoundary extends Component<Props, State> {
  state: State = { erro: null };

  static getDerivedStateFromError(erro: Error): State {
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
