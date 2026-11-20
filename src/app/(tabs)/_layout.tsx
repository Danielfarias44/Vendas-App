// Layout das abas: Início, Carrinho, Perfil.
// TODO: ícones nas abas e badge com a quantidade de itens do carrinho.
import { Tabs } from 'expo-router/js-tabs';

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: 'Início' }} />
      <Tabs.Screen name="carrinho" options={{ title: 'Carrinho' }} />
      <Tabs.Screen name="perfil" options={{ title: 'Perfil' }} />
    </Tabs>
  );
}
