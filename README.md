# Eight — Home Page | Pacote para Codex

Este pacote contém a versão consolidada atual da home construída na conversa, já preparada para usar imagens locais.

## Arquivos

- `src/EightIAHomeVisualLayout.jsx`: componente React completo da home.
- `public/assets/marca-eight.webp`: logo da Eight.
- `public/assets/cliente-feliz.webp`: imagem do hero.
- `public/assets/connect-home.webp`: imagem do bloco Connect+.
- `PROMPT-CODEX.md`: contexto recomendado para continuar o trabalho no Codex.

## Dependências

O componente espera um projeto React com Tailwind CSS configurado e usa:

```bash
npm install framer-motion lucide-react
```

A fonte `Bricolage Grotesque` é importada dentro do próprio componente via Google Fonts.

## Integração rápida

1. Copie `EightIAHomeVisualLayout.jsx` para a pasta de componentes do projeto.
2. Copie `public/assets/*` para a pasta `public/assets/` do projeto.
3. Importe e renderize o componente na rota da home.
4. Configure as rotas internas atualmente apontadas nos cards:
   - `/connect-plus`
   - `/agentes-ia`
5. Substitua o envio visual da newsletter por integração real quando a plataforma for definida.

## Observações

- Os botões “Fale conosco” e “Faça um diagnóstico” direcionam para WhatsApp.
- A newsletter hoje confirma visualmente o cadastro, mas ainda não envia dados a uma base externa.
- A versão empacotada usa assets locais para não depender dos links temporários de imagens.
