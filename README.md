# Reveste
App mobile de ecommerce brechó online para o trabalho de alta performance mobile.

O foco do produto é descobrir peças usadas e vintage únicas, com uma identidade editorial e uma proposta de consumo mais sustentável. A ideia também prevê missões que dão pontos para trocar por cupons; os detalhes da gamificação ainda serão definidos pelos responsáveis pelo desenvolvimento dessa parte (Bruno)

- Arquitetura e divisão de responsabilidades: [docs/arquitetura.md](docs/arquitetura.md)
- Roteiro de verificação: [docs/testes.md](docs/testes.md)
- Relatório de performance: [docs/relatorio-performance.md](docs/relatorio-performance.md)

## Dados locais e banco

O catálogo de demonstração fica em `src/data/produtos-demo.ts` e é carregado localmente, sem chamadas a serviços externos. Os dados de carrinho, favoritos e pedidos são persistidos em SQLite com `expo-sqlite`.

```bash
npm install
npx expo start ou npm run web
```

