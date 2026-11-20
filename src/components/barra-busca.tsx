// Campo de busca de produtos. TODO: debounce (~400ms) antes de chamar a API.
import { TextInput } from 'react-native';

type Props = { onBuscar: (termo: string) => void };

export function BarraBusca({ onBuscar }: Props) {
  return <TextInput placeholder="Buscar produtos" onChangeText={onBuscar} />;
}
