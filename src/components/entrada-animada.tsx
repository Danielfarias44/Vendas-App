import { useEffect, useState, type ReactNode } from 'react';
import { AccessibilityInfo, Animated, StyleSheet, type ViewStyle } from 'react-native';

type Propriedades = {
  children: ReactNode;
  atraso?: number;
  style?: ViewStyle;
};

export function EntradaAnimada({ children, atraso = 0, style }: Propriedades) {
  const [opacidade] = useState(() => new Animated.Value(0));
  const [deslocamento] = useState(() => new Animated.Value(14));

  useEffect(() => {
    let cancelada = false;
    const animarEntrada = () => {
      Animated.parallel([
        Animated.timing(opacidade, {
          toValue: 1,
          duration: 420,
          delay: atraso,
          useNativeDriver: true,
        }),
        Animated.timing(deslocamento, {
          toValue: 0,
          duration: 420,
          delay: atraso,
          useNativeDriver: true,
        }),
      ]).start();
    };

    AccessibilityInfo.isReduceMotionEnabled().then((reduzirMovimento) => {
      if (cancelada) return;

      if (reduzirMovimento) {
        opacidade.setValue(1);
        deslocamento.setValue(0);
        return;
      }
      animarEntrada();
    }).catch(() => {
      if (!cancelada) animarEntrada();
    });

    return () => {
      cancelada = true;
      opacidade.stopAnimation();
      deslocamento.stopAnimation();
    };
  }, [atraso, deslocamento, opacidade]);

  return (
    <Animated.View style={[estilos.conteudo, style, { opacity: opacidade, transform: [{ translateY: deslocamento }] }]}>
      {children}
    </Animated.View>
  );
}

const estilos = StyleSheet.create({ conteudo: { width: '100%' } });
