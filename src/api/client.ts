// Cliente HTTP base usado por todos os endpoints.
// TODO:
// - Definir BASE_URL da API escolhida (ex.: DummyJSON, FakeStore API, ou API própria).
// - fetch com timeout (AbortController).
// - Lançar ApiError quando response.ok for false.
// - Opcional: retry automático em falha de rede.

export const BASE_URL = 'https://TODO-definir-api';

export async function get<T>(caminho: string): Promise<T> {
  // TODO: implementar
  throw new Error(`Não implementado: GET ${caminho}`);
}
