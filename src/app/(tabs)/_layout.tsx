import { Tabs } from 'expo-router/js-tabs';
import { Platform, Text } from 'react-native';

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarStyle: Platform.OS === 'web' ? { display: 'none' } : { backgroundColor: '#F7F5EF', borderTopColor: '#E4E1D7' },
      tabBarActiveTintColor: '#244035',
      tabBarInactiveTintColor: '#83867B',
    }}>
      <Tabs.Screen name="index" options={{ title: 'Início', tabBarIcon: ({ color }) => <Text style={{ color, fontSize: 18 }}>⌂</Text> }} />
      <Tabs.Screen name="carrinho" options={{ title: 'Carrinho', tabBarIcon: ({ color }) => <Text style={{ color, fontSize: 18 }}>♧</Text> }} />
      <Tabs.Screen name="perfil" options={{ title: 'Perfil', tabBarIcon: ({ color }) => <Text style={{ color, fontSize: 18 }}>♙</Text> }} />
    </Tabs>
  );
}
