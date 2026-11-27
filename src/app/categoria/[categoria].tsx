import { useLocalSearchParams } from 'expo-router';

import { TelaPlanejada } from '@/components/tela-planejada';

export default function Categoria() {
  const { categoria } = useLocalSearchParams<{ categoria: string }>();
  const nome = categoria ? decodeURIComponent(categoria).replace(/-/g, ' ') : 'Peças';

  return <TelaPlanejada titulo={`Garimpo: ${nome}.`} descricao="Esta rota já está pronta para receber as peças e os filtros da categoria." etiqueta="REVESTE  /  CATEGORIA" />;
}
