import { useCallback, useMemo, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import { CabecalhoHome } from '@/components/home/cabecalho-home';
import { CategoriasHome } from '@/components/home/categorias-home';
import { ClubeFolha } from '@/components/home/clube-folha';
import { CuradoriaSemanal } from '@/components/home/curadoria-semanal';
import { FaixaProposito } from '@/components/home/faixa-proposito';
import { HeroEditorial } from '@/components/home/hero-editorial';
import { ManifestoCircular } from '@/components/home/manifesto-circular';
import { RodapeHome } from '@/components/home/rodape-home';
import { produtosDemo } from '@/data/produtos-demo';
import { useOrientacao } from '@/hooks/use-orientacao';

export default function TelaInicial() {
  const { paisagem, colunas, largura } = useOrientacao();
  const [termo, setTermo] = useState('');
  const buscar = useCallback((valor: string) => setTermo(valor.trim().toLocaleLowerCase('pt-BR')), []);
  const produtos = useMemo(() => produtosDemo.filter((produto) =>
    !termo || `${produto.titulo} ${produto.categoria} ${produto.marca ?? ''}`.toLocaleLowerCase('pt-BR').includes(termo),
  ), [termo]);

  return (
    <View style={estilos.tela}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <FaixaProposito />
        <CabecalhoHome onBuscar={buscar} />
        <HeroEditorial paisagem={paisagem} />
        <CuradoriaSemanal produtos={produtos} largura={largura} colunas={colunas} />
        <CategoriasHome />
        <ManifestoCircular paisagem={paisagem} />
        <ClubeFolha />
        <RodapeHome />
      </ScrollView>
    </View>
  );
}

const estilos = StyleSheet.create({ tela: { flex: 1, backgroundColor: '#F7F5EF' } });
