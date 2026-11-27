import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native';

import { Cores, Fontes } from '@/constants/tema';

const categorias = [
  ['Alfaiataria', 'alfaiataria', 'Para todos os seus dias  ↗'],
  ['Vintage', 'vintage', 'O tempo só melhora  ↗'],
  ['Básicos naturais', 'basicos-naturais', 'Essenciais, de verdade  ↗'],
  ['Bolsas & acessórios', 'bolsas-acessorios', 'Detalhes com história  ↗'],
];

export function CategoriasHome() {
  const { width } = useWindowDimensions();
  const duasColunas = width >= 768;

  return (
    <View style={estilos.limite}>
      <View style={estilos.wrap}>
        <Text accessibilityRole="header" style={estilos.titulo}>Seu estilo, em novos ciclos.</Text>
        <View style={[estilos.lista, duasColunas && estilos.listaAmpla]}>
          {categorias.map(([titulo, slug, descricao]) => (
            <Link key={slug} href={{ pathname: '/categoria/[categoria]', params: { categoria: slug } }} asChild>
              <Pressable accessibilityRole="link" accessibilityLabel={`${titulo}. ${descricao}`} style={({ pressed }) => [estilos.card, duasColunas && estilos.cardAmplo, pressed && estilos.cardPressionado]}>
                <Text style={estilos.nome}>{titulo}</Text>
                <Text style={estilos.descricao}>{descricao}</Text>
              </Pressable>
            </Link>
          ))}
        </View>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  limite: { width: '100%', alignSelf: 'center', maxWidth: 1440, backgroundColor: Cores.offWhite },
  wrap: { paddingHorizontal: 20, paddingTop: 32, paddingBottom: 40 },
  titulo: { marginBottom: 20, color: Cores.floresta, fontFamily: Fontes.titulo, fontSize: 30, lineHeight: 38 },
  lista: { gap: 10 },
  listaAmpla: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  card: { minHeight: 96, justifyContent: 'center', paddingHorizontal: 20, paddingVertical: 16, borderLeftWidth: 3, borderLeftColor: Cores.terracota, backgroundColor: Cores.areia },
  cardAmplo: { width: '48.5%', minHeight: 120 },
  cardPressionado: { opacity: 0.75 },
  nome: { color: Cores.floresta, fontFamily: Fontes.titulo, fontSize: 22, lineHeight: 28 },
  descricao: { marginTop: 7, color: Cores.carvao, fontFamily: Fontes.texto, fontSize: 14, lineHeight: 20 },
});
