# vendas-app
 Trabalho de Código de alta performance mobile com React Native

App de vendas (estilo Mercado Livre / Shopee / Amazon) feito com Expo + Expo Router.

- Testes: [docs/testes.md](docs/testes.md)
- Relatório de performance: [docs/relatorio-performance.md](docs/relatorio-performance.md)

## Dados locais e banco

O catálogo de demonstração fica em `src/data/produtos-demo.ts` e é carregado localmente, sem chamadas a serviços externos. Os dados de carrinho, favoritos e pedidos são persistidos em SQLite com `expo-sqlite`.

```bash
npm install
npx expo start
```

Para rodar a versão web com SQLite, consulte a configuração WASM e os cabeçalhos COEP/COOP na documentação do [expo-sqlite para SDK 58](https://docs.expo.dev/versions/v58.0.0/sdk/sqlite/). O alvo principal deste projeto é Android/iOS via Expo Go.

## Rodar
```bash
npm install
npx expo start
```
