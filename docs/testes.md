# Testes

## Testes automatizados (opcional, mas conta como organização)
- Instalar: `npx expo install jest-expo jest @testing-library/react-native`
- Configurar o `jest` no package.json (preset `jest-expo`).
- Criar os testes em `__tests__/`. Sugestões:
  - `mensagemAmigavel()` retorna o texto certo para cada erro.
  - Cálculo do total do carrinho.
  - Validação de cartão em `pagamento.ts`.

## Roteiro de teste manual
- [ ] Lista de produtos carrega e o scroll infinito busca mais itens
- [ ] Sem internet: aparece mensagem de erro / produtos do cache
- [ ] Girar a tela na lista e no detalhe (layout se adapta)
- [ ] Adicionar ao carrinho, fechar o app, abrir de novo: o carrinho continua lá
- [ ] Pagamento com sucesso e com falha
- [ ] Pedido aparece em "Meus pedidos"
- [ ] Favoritar / desfavoritar
