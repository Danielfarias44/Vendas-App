import { Link, type Href } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Cores, Fontes } from '@/constants/tema';

function LinkRodape({ href, children }: { href: Href; children: string }) {
  return (
    <Link href={href} asChild>
      <Pressable accessibilityRole="link" style={({ pressed }) => [estilos.linkToque, pressed && estilos.pressionado]}>
        <Text style={estilos.link}>{children}</Text>
      </Pressable>
    </Link>
  );
}

export function RodapeHome() {
  return (
    <View style={estilos.fundo}>
      <View style={estilos.wrap}>
        <View style={estilos.essencia}>
          <Text accessibilityRole="header" style={estilos.logo}>reveste</Text>
          <Text style={estilos.slogan}>Boas peças merecem novas histórias.</Text>
        </View>
        <View style={estilos.links}>
          <View style={estilos.coluna}>
            <Text accessibilityRole="header" style={estilos.titulo}>Explore</Text>
            <LinkRodape href="/explorar">Todas as peças</LinkRodape>
            <LinkRodape href={{ pathname: '/categoria/[categoria]', params: { categoria: 'vintage' } }}>Vintage selecionado</LinkRodape>
          </View>
          <View style={estilos.coluna}>
            <Text accessibilityRole="header" style={estilos.titulo}>Sua conta</Text>
            <LinkRodape href="/meus-pedidos">Meus pedidos</LinkRodape>
            <LinkRodape href="/favoritos">Favoritos</LinkRodape>
          </View>
          <View style={estilos.coluna}>
            <Text accessibilityRole="header" style={estilos.titulo}>Vamos conversar</Text>
            <LinkRodape href="/sobre">Sobre a Reveste</LinkRodape>
            <LinkRodape href="/ajuda">Dúvidas frequentes</LinkRodape>
            <LinkRodape href="/trocas-e-devolucoes">Trocas e devoluções</LinkRodape>
          </View>
        </View>
        <Text style={estilos.legal}>© 2026 Reveste. Feito para circular.</Text>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  fundo: { width: '100%', backgroundColor: Cores.floresta },
  wrap: { width: '100%', maxWidth: 1440, alignSelf: 'center', paddingHorizontal: 24, paddingTop: 40, paddingBottom: 28 },
  essencia: { marginBottom: 28 },
  logo: { color: Cores.offWhite, fontFamily: Fontes.titulo, fontSize: 36, lineHeight: 44 },
  slogan: { marginTop: 6, color: Cores.offWhite, fontFamily: Fontes.texto, fontSize: 15, lineHeight: 22 },
  links: { flexDirection: 'row', flexWrap: 'wrap', columnGap: 40, rowGap: 28 },
  coluna: { flexGrow: 1, flexBasis: 180, alignItems: 'flex-start' },
  titulo: { marginBottom: 8, color: Cores.salvia, fontFamily: Fontes.textoSemibold, fontSize: 15, lineHeight: 22 },
  linkToque: { minHeight: 44, justifyContent: 'center', paddingRight: 12 },
  link: { color: Cores.offWhite, fontFamily: Fontes.texto, fontSize: 14, lineHeight: 20, textDecorationLine: 'underline' },
  pressionado: { opacity: 0.7 },
  legal: { marginTop: 24, paddingTop: 18, borderTopWidth: 1, borderTopColor: Cores.salvia, color: Cores.offWhite, fontFamily: Fontes.texto, fontSize: 13, lineHeight: 20 },
});
