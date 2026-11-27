import { useCallback, useMemo, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import { EntradaAnimada } from '@/components/entrada-animada';
import { Cores } from '@/constants/tema';
import { CabecalhoHome } from '@/features/home/components/cabecalho-home';
import { CategoriasHome } from '@/features/home/components/categorias-home';
import { ClubeFolha } from '@/features/home/components/clube-folha';
import { CuradoriaSemanal } from '@/features/home/components/curadoria-semanal';
import { FaixaProposito } from '@/features/home/components/faixa-proposito';
import { HeroEditorial } from '@/features/home/components/hero-editorial';
import { ManifestoCircular } from '@/features/home/components/manifesto-circular';
import { RodapeHome } from '@/features/home/components/rodape-home';
import { produtosDemo } from '@/data/produtos-demo';
import { useOrientacao } from '@/hooks/use-orientacao';

export default function TelaInicial() {
  const { telaLarga, colunas, larguraConteudo } = useOrientacao();
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
        <EntradaAnimada><HeroEditorial telaLarga={telaLarga} /></EntradaAnimada>
        <EntradaAnimada atraso={70}><CuradoriaSemanal produtos={produtos} largura={larguraConteudo} colunas={colunas} /></EntradaAnimada>
        <EntradaAnimada atraso={120}><CategoriasHome /></EntradaAnimada>
        <EntradaAnimada atraso={170}><ManifestoCircular telaLarga={telaLarga} /></EntradaAnimada>
        <EntradaAnimada atraso={220}><ClubeFolha /></EntradaAnimada>
        <EntradaAnimada atraso={270}><RodapeHome /></EntradaAnimada>
      </ScrollView>
    </View>
  );
}

const estilos = StyleSheet.create({ tela: { flex: 1, backgroundColor: Cores.offWhite } });
