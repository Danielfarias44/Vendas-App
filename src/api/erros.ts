// Tratamento de erro da API.
// TODO:
// - Classe ApiError com status HTTP e mensagem.
// - Converter qualquer erro (sem internet, timeout, 404, 500) em mensagem amigável em português.

export class ApiError extends Error {
  constructor(
    message: string,
    public status?: number,
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

export function mensagemAmigavel(erro: unknown): string {
  // TODO: tratar cada tipo de erro (rede, timeout, status HTTP)
  return 'Ocorreu um erro. Tente novamente.';
}
