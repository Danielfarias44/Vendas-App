import { useLocalSearchParams } from 'expo-router';

import { TelaPlanejada } from '@/components/tela-planejada';

export default function Busca() {
  const { q } = useLocalSearchParams<{ q: string }>();
  const termo = q?.trim();

  return <TelaPlanejada titulo={termo ? `Resultados para “${termo}”.` : 'Encontre sua próxima peça.'} descricao="A tela de resultados e os filtros de busca serão conectados ao catálogo." etiqueta="REVESTE  /  BUSCA" />;
}
