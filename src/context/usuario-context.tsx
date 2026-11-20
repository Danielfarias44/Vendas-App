// Usuário logado (login simples/simulado) + editar dados do perfil.
// TODO: persistir o usuário (banco ou expo-secure-store).
import { createContext, useContext, type ReactNode } from 'react';

import type { Usuario } from '@/types/usuario';

type UsuarioContextType = {
  usuario: Usuario | null;
  entrar: (email: string, senha: string) => Promise<void>;
  sair: () => void;
  atualizar: (dados: Partial<Usuario>) => Promise<void>;
};

const UsuarioContext = createContext<UsuarioContextType | null>(null);

export function UsuarioProvider({ children }: { children: ReactNode }) {
  const valor: UsuarioContextType = {
    usuario: null,
    entrar: async () => {},
    sair: () => {},
    atualizar: async () => {},
  };
  return <UsuarioContext.Provider value={valor}>{children}</UsuarioContext.Provider>;
}

export function useUsuario() {
  const ctx = useContext(UsuarioContext);
  if (!ctx) throw new Error('useUsuario deve ser usado dentro de UsuarioProvider');
  return ctx;
}
