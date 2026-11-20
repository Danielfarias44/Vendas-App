# Relatório de performance

Critério: "Análise de Performance (via Google Developer) – Enviar relatório".

## Como gerar
1. `npx expo start --web` e abrir no Google Chrome.
2. DevTools (F12) → aba **Lighthouse** → modo Mobile → "Analyze page load".
3. Exportar o relatório (HTML/PDF) e salvar nesta pasta `docs/`.
4. DevTools → aba **Performance**: gravar o scroll da lista de produtos e tirar print.
5. Opcional: React DevTools Profiler para ver re-renderizações.

## Resultados (preencher)
| Métrica | Antes | Depois |
|---------|-------|--------|
| Performance (Lighthouse) | | |
| First Contentful Paint | | |
| Largest Contentful Paint | | |
| Total Blocking Time | | |

## Otimizações aplicadas (preencher)
- Lazy loading / paginação da lista
- Imagens comprimidas e com cache (expo-image)
- React.memo no ProdutoCard
- ...
