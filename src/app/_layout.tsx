import { Stack } from 'expo-router';

import { LimiteDeErro } from '@/components/limite-de-erro';
import { CarrinhoProvider } from '@/context/carrinho-context';
import { UsuarioProvider } from '@/context/usuario-context';

export default function RootLayout() {
  return (
    <LimiteDeErro>
      <UsuarioProvider>
        <CarrinhoProvider>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          </Stack>
        </CarrinhoProvider>
      </UsuarioProvider>
    </LimiteDeErro>
  );
}
