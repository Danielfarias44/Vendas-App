import { Tabs } from 'expo-router/js-tabs';
import { Platform, Text } from 'react-native';

import { Cores, Fontes } from '@/constants/tema';

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarStyle: Platform.OS === 'web' ? { display: 'none' } : { minHeight: 72, paddingTop: 8, paddingBottom: 8, backgroundColor: Cores.offWhite, borderTopColor: Cores.areia },
      tabBarLabelStyle: { fontFamily: Fontes.textoMedio, fontSize: 12 },
      tabBarActiveTintColor: Cores.floresta,
      tabBarInactiveTintColor: Cores.textoSecundario,
    }}>
      <Tabs.Screen name="index" options={{ title: 'Início', tabBarAccessibilityLabel: 'Início', tabBarIcon: ({ color }) => <Text accessible={false} style={{ color, fontSize: 22 }}>⌂</Text> }} />
      <Tabs.Screen name="carrinho" options={{ title: 'Sacola', tabBarAccessibilityLabel: 'Sacola de compras', tabBarIcon: ({ color }) => <Text accessible={false} style={{ color, fontSize: 22 }}>♧</Text> }} />
      <Tabs.Screen name="perfil" options={{ title: 'Conta', tabBarAccessibilityLabel: 'Minha conta', tabBarIcon: ({ color }) => <Text accessible={false} style={{ color, fontSize: 22 }}>♙</Text> }} />
    </Tabs>
  );
}
