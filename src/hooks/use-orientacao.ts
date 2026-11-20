// Responsividade de rotação de tela.
// TODO:
// - Usar useWindowDimensions() para saber se está em retrato ou paisagem.
// - Retornar número de colunas da grade (ex.: 2 em retrato, 4 em paisagem).
// - IMPORTANTE: trocar "orientation": "portrait" para "default" no app.json,
//   senão a tela não gira.

export function useOrientacao() {
  return { paisagem: false, colunas: 2, largura: 0 };
}
