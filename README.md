# ARDA — Portal do Universo de Tolkien

## Abrir e testar no VS Code

1. Abra a pasta `index-v2` no VS Code.
2. Se o Live Server não estiver instalado, instale a extensão **Live Server** (Ritwick Dey) pela aba Extensions. A instalação é manual; o projeto não exige Node.js, compilação nem `launch.json`.
3. Abra `index.html` e selecione **Go Live** na barra de status para abrir o site no navegador.
4. Edite os arquivos e salve para ver as alterações atualizadas pelo Live Server.

O HTML carrega `reset.css` antes de `style.css` e `script.js` com `defer`. A navegação, o dropdown e o desafio funcionam sem ferramentas de build. As 16 obras e 80 personagens mantêm seus cartões no portal e compartilham as fichas em `detalhes.html`, com os registros em `catalogo.js`.

O vídeo usa o caminho `videos/aragorn.mp4` e os controles nativos do navegador. O arquivo de vídeo não está presente nesta cópia do repositório; restaure-o nesse caminho para habilitar a reprodução.

`index-v2/` é a versão principal do portal. A pasta `index.html/` foi preservada como uma versão anterior.
