// Abertura do banco e criação das tabelas.
// Sugestão: SQLite local → `npx expo install expo-sqlite`
//   (alternativa: Firebase Firestore, se quiserem banco na nuvem).
// TODO:
// - Abrir o banco (openDatabaseAsync).
// - CREATE TABLE IF NOT EXISTS: carrinho, favoritos, pedidos, cache_produtos.
// - Chamar iniciarBanco() no src/app/_layout.tsx antes de mostrar as telas.
// - Tratar erro de abertura/migração (try/catch + log).

export async function iniciarBanco(): Promise<void> {
  // TODO: implementar
}
