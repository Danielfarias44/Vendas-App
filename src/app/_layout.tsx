import { useEffect } from 'react';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { DMSans_400Regular } from '@expo-google-fonts/dm-sans/400Regular';
import { DMSans_500Medium } from '@expo-google-fonts/dm-sans/500Medium';
import { DMSans_600SemiBold } from '@expo-google-fonts/dm-sans/600SemiBold';
import { DMSans_700Bold } from '@expo-google-fonts/dm-sans/700Bold';
import { PlayfairDisplay_400Regular } from '@expo-google-fonts/playfair-display/400Regular';
import { PlayfairDisplay_600SemiBold } from '@expo-google-fonts/playfair-display/600SemiBold';
import { StatusBar } from 'expo-status-bar';

import { LimiteDeErro } from '@/components/limite-de-erro';
import { Cores } from '@/constants/tema';
import { CarrinhoProvider } from '@/context/carrinho-context';
import { UsuarioProvider } from '@/context/usuario-context';

void SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontesCarregadas, erroFontes] = useFonts({
    DMSans_400Regular,
    DMSans_500Medium,
    DMSans_600SemiBold,
    DMSans_700Bold,
    PlayfairDisplay_400Regular,
    PlayfairDisplay_600SemiBold,
  });

  useEffect(() => {
    if (fontesCarregadas || erroFontes) void SplashScreen.hideAsync();
  }, [erroFontes, fontesCarregadas]);

  if (!fontesCarregadas && !erroFontes) return null;

  return (
    <LimiteDeErro>
      <UsuarioProvider>
        <CarrinhoProvider>
          <StatusBar style="dark" />
          <Stack screenOptions={{ contentStyle: { backgroundColor: Cores.offWhite } }}>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="explorar" options={{ headerShown: false, animation: 'fade_from_bottom' }} />
            <Stack.Screen name="busca" options={{ headerShown: false, animation: 'fade_from_bottom' }} />
            <Stack.Screen name="categoria/[categoria]" options={{ headerShown: false, animation: 'fade_from_bottom' }} />
            <Stack.Screen name="produto/[id]" options={{ headerShown: false, animation: 'fade_from_bottom' }} />
            <Stack.Screen name="favoritos" options={{ headerShown: false, animation: 'fade_from_bottom' }} />
            <Stack.Screen name="clube-folha" options={{ headerShown: false, animation: 'fade_from_bottom' }} />
            <Stack.Screen name="vender" options={{ headerShown: false, animation: 'fade_from_bottom' }} />
            <Stack.Screen name="sobre" options={{ headerShown: false, animation: 'fade_from_bottom' }} />
            <Stack.Screen name="ajuda" options={{ headerShown: false, animation: 'fade_from_bottom' }} />
            <Stack.Screen name="trocas-e-devolucoes" options={{ headerShown: false, animation: 'fade_from_bottom' }} />
            <Stack.Screen name="checkout" options={{ headerShown: false, animation: 'fade_from_bottom' }} />
            <Stack.Screen name="pedido-confirmado" options={{ headerShown: false, animation: 'fade_from_bottom' }} />
            <Stack.Screen name="meus-pedidos" options={{ headerShown: false, animation: 'fade_from_bottom' }} />
          </Stack>
        </CarrinhoProvider>
      </UsuarioProvider>
    </LimiteDeErro>
  );
}
