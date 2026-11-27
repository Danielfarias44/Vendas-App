import { useState } from 'react';
import { Link, useRouter } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

import { Cores, Fontes } from '@/constants/tema';

type Propriedades = { onBuscar: (texto: string) => void };

export function CabecalhoHome({ onBuscar }: Propriedades) {
  const [busca, setBusca] = useState('');
  const router = useRouter();

  const enviarBusca = () => {
    const termo = busca.trim();
    if (termo) router.push({ pathname: '/busca', params: { q: termo } });
  };

  return (
    <View style={estilos.limite}>
      <View style={estilos.wrap}>
        <View accessibilityRole="header" style={estilos.nav}>
          <Link accessibilityRole="link" accessibilityLabel="Reveste, início" href="/(tabs)" style={estilos.logo}>reveste</Link>
          <View style={estilos.acoes}>
            <Link href="/(tabs)/perfil" asChild><Pressable accessibilityRole="link" accessibilityLabel="Minha conta" style={estilos.acao}><Text style={estilos.icone} aria-hidden>♙</Text></Pressable></Link>
            <Link href="/favoritos" asChild><Pressable accessibilityRole="link" accessibilityLabel="Favoritos" style={estilos.acao}><Text style={estilos.icone} aria-hidden>♡</Text></Pressable></Link>
            <Link href="/(tabs)/carrinho" asChild><Pressable accessibilityRole="link" accessibilityLabel="Sacola" style={estilos.acao}><Text style={estilos.icone} aria-hidden>♧</Text></Pressable></Link>
          </View>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={estilos.links} accessibilityLabel="Navegação principal">
          <Link href="/explorar" style={estilos.linkAtivo}>Novidades</Link>
          <Link href={{ pathname: '/categoria/[categoria]', params: { categoria: 'roupas' } }} style={estilos.link}>Roupas</Link>
          <Link href={{ pathname: '/categoria/[categoria]', params: { categoria: 'vintage' } }} style={estilos.link}>Vintage</Link>
          <Link href="/clube-folha" style={estilos.link}>Clube Folha</Link>
        </ScrollView>

        <View style={estilos.buscaLinha}>
          <View style={estilos.busca}>
            <Text style={estilos.lupa} aria-hidden>⌕</Text>
            <TextInput
              accessibilityLabel="Buscar peças por nome, marca ou história"
              accessibilityHint="Digite um termo. Envie para abrir a busca completa."
              returnKeyType="search"
              placeholder="Busque uma peça, marca ou história"
              placeholderTextColor={Cores.textoSecundario}
              value={busca}
              onChangeText={(valor) => { setBusca(valor); onBuscar(valor); }}
              onSubmitEditing={enviarBusca}
              style={estilos.input}
            />
          </View>
          <Link href="/vender" asChild>
            <Pressable accessibilityRole="link" style={({ pressed }) => [estilos.vender, pressed && estilos.pressionado]}>
              <Text style={estilos.venderTexto}>Vender</Text>
            </Pressable>
          </Link>
        </View>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  limite: { width: '100%', alignSelf: 'center', maxWidth: 1440, backgroundColor: Cores.offWhite },
  wrap: { paddingHorizontal: 20, paddingBottom: 12 },
  nav: { minHeight: 64, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  logo: { color: Cores.floresta, fontFamily: Fontes.titulo, fontSize: 34, lineHeight: 42 },
  acoes: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  acao: { width: 44, height: 44, alignItems: 'center', justifyContent: 'center', borderRadius: 22 },
  icone: { color: Cores.floresta, fontFamily: Fontes.texto, fontSize: 23 },
  links: { minHeight: 48, flexDirection: 'row', alignItems: 'center', gap: 28, paddingHorizontal: 4, borderBottomWidth: 1, borderBottomColor: Cores.areia },
  linkAtivo: { minHeight: 44, textAlignVertical: 'center', color: Cores.floresta, fontFamily: Fontes.textoSemibold, fontSize: 14 },
  link: { minHeight: 44, textAlignVertical: 'center', color: Cores.textoSecundario, fontFamily: Fontes.texto, fontSize: 14 },
  buscaLinha: { flexDirection: 'row', gap: 10, marginTop: 12 },
  busca: { minHeight: 52, flex: 1, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12, borderWidth: 1, borderColor: Cores.borda, backgroundColor: Cores.areia },
  lupa: { marginRight: 9, color: Cores.floresta, fontSize: 24 },
  input: { minHeight: 48, flex: 1, paddingVertical: 8, color: Cores.carvao, fontFamily: Fontes.texto, fontSize: 15 },
  vender: { minWidth: 88, minHeight: 52, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 14, borderWidth: 1, borderColor: Cores.floresta },
  venderTexto: { color: Cores.floresta, fontFamily: Fontes.textoSemibold, fontSize: 14 },
  pressionado: { opacity: 0.7 },
});
