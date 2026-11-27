import * as SQLite from 'expo-sqlite';

let promessaBanco: Promise<SQLite.SQLiteDatabase> | null = null;

export function abrirBanco(): Promise<SQLite.SQLiteDatabase> {
  if (!promessaBanco) {
    promessaBanco = SQLite.openDatabaseAsync('vendas-app.db').then(async (banco) => {
      await banco.execAsync(`
        PRAGMA journal_mode = WAL;
        CREATE TABLE IF NOT EXISTS cache_produtos (
          id INTEGER PRIMARY KEY NOT NULL,
          titulo TEXT NOT NULL,
          descricao TEXT NOT NULL,
          preco REAL NOT NULL,
          categoria TEXT NOT NULL,
          thumbnail TEXT NOT NULL,
          imagens TEXT NOT NULL,
          avaliacao REAL
        );
      `);
      return banco;
    }).catch((erro: unknown) => {
      promessaBanco = null;
      throw erro;
    });
  }
  return promessaBanco;
}

export async function iniciarBanco(): Promise<void> {
  await abrirBanco();
}
