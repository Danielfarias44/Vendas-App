// Layout raiz.
// TODO:
// - Chamar iniciarBanco() e manter a splash até terminar.
// - Títulos das telas no <Stack.Screen>.
import { Stack } from 'expo-router';

import { ErrorBoundary } from '@/components/error-boundary';
import { CarrinhoProvider } from '@/context/carrinho-context';
import { UsuarioProvider } from '@/context/usuario-context';

export default function RootLayout() {
  return (
    <ErrorBoundary>
      <UsuarioProvider>
        <CarrinhoProvider>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          </Stack>
        </CarrinhoProvider>
      </UsuarioProvider>
    </ErrorBoundary>
  );
}
