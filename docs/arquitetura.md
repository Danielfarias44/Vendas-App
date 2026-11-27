# Arquitetura do app

O projeto é o app mobile Reveste: um brechó online de peças usadas e vintage, com foco em descoberta e consumo sustentável. A interface segue a direção do Figma. A mecânica de missões, pontos e cupons ainda será detalhada pelo responsável.


## Organização do código

```text
src/
  app/                       Rotas e layouts do Expo Router
    (tabs)/                  Rotas principais com abas
  features/
    home/                    Tela inicial e composição da home
      components/            Seções exclusivas da home
  components/                Componentes compartilhados entre telas
  constants/                 Constantes visuais e de configuração
  context/                   Estado compartilhado entre rotas
  data/                      Dados de demonstração atuais
  database/                  Persistência local atual
  hooks/                     Hooks reutilizáveis
  services/                  Integrações e serviços atuais
  types/                     Tipos compartilhados
  utils/                     Funções utilitárias
```

As rotas devem permanecer pequenas: encaminham para a tela da feature, enquanto a composição e o comportamento da tela ficam em `features/`. Componentes usados só pela home ficam em `features/home/components`; os que servem várias features ficam em `components/`.

## Responsividade e identidade visual

O hook `useOrientacao` calcula largura e colunas a partir das dimensões atuais da janela; a home e os detalhes passam para composição ampla a partir de 768 px e limitam o conteúdo em telas desktop.

Os tokens compartilhados estão em `src/constants/tema.ts`. A identidade usa Playfair Display nos títulos, DM Sans nos textos e preços e a paleta Reveste: verde floresta `#263D32`, areia `#E9E4D8`, sálvia `#B6BDA5`, off-white `#F8F6F0`, terracota `#B9785D` e carvão `#292B27`. Os pares de texto usam carvão ou verde floresta sobre fundos claros; a terracota fica como acento decorativo para preservar contraste.

Os controles mantêm áreas de toque de pelo menos 44 px, nomes e dicas para leitor de tela, e os textos continuam escaláveis. As animações da home respeitam a preferência do sistema por movimento reduzido.

## Navegação

`app/_layout.tsx` configura os providers globais e a pilha raiz. `app/(tabs)/_layout.tsx` configura as abas. Cada rota de feature entra pela pasta `app/` e encaminha para sua tela correspondente.

### Rotas preparadas

| Rota | Destino | Estado / frente |
| --- | --- | --- |
| `/(tabs)` | Home e abas principais | Home navegável nesta frente |
| `/explorar` | Catálogo completo | Rota pronta para catálogo e filtros |
| `/busca?q=...` | Resultados da busca | Rota pronta para catálogo |
| `/categoria/[categoria]` | Peças de uma categoria | Rota dinâmica pronta para catálogo |
| `/produto/[id]` | Detalhe da peça | Rota existente |
| `/favoritos` | Lista de favoritos | Rota existente |
| `/vender` | Anunciar uma peça | Rota pronta para marketplace |
| `/clube-folha` | Missões e recompensas | Rota pronta para vendas e gamificação |
| `/sobre` | Propósito da Reveste | Rota preparada |
| `/ajuda` | Dúvidas frequentes | Rota preparada |
| `/trocas-e-devolucoes` | Políticas de pós-venda | Rota preparada para definição do marketplace |
| `/checkout` | Finalizar compra | Rota existente |
| `/pedido-confirmado` | Confirmação do pedido | Rota existente |
| `/meus-pedidos` | Histórico de pedidos | Rota existente |

As rotas de catálogo, venda e Clube Folha exibem telas de espera pra facilitar pra todo munod
