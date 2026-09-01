# Páginas Individuais de Personagens

Esta pasta conterá as páginas individuais para cada personagem do compêndio da Terra-média.

## Estrutura de Arquivos

As páginas individuais serão organizadas por categoria:

### VALAR (9 personagens)
- manwe.html
- varda.html
- ulmo.html
- aule.html
- yavanna.html
- orome.html
- mandos.html
- tulkas.html
- morgoth.html

### MAIAR (5 personagens)
- sauron.html
- gandalf.html
- saruman.html
- radagast.html
- gothmog.html

### ELFOS (18 personagens)
- feanor.html
- fingolfin.html
- finarfin.html
- fingon.html
- maedhros.html
- celebrimbor.html
- gilgalad.html
- luthien.html
- thingol.html
- galadriel.html
- celeborn.html
- elrond.html
- elros.html
- glorfindel.html
- cirdan.html
- thranduil.html
- legolas.html
- eol.html

### HOMENS (16 personagens)
- beren.html
- turin.html
- hurin.html
- tuor.html
- elendil.html
- isildur.html
- anarion.html
- aragorn.html
- boromir.html
- faramir.html
- denethor.html
- theoden.html
- eomer.html
- eowyn.html
- bard.html
- beorn.html

### HOBBITS (9 personagens)
- bilbo.html
- frodo.html
- samwise.html
- merry.html
- pippin.html
- gollum.html
- deagol.html
- rosie.html
- lobelia.html

### ANÕES (12 personagens)
- durin.html
- thror.html
- thrain.html
- thorin.html
- balin.html
- dwalin.html
- gloin.html
- gimli.html
- fili.html
- kili.html
- dain.html
- azog.html

### CRIATURAS E OUTROS SERES (11 personagens/grupos)
- ungoliant.html
- shelob.html
- smaug.html
- glaurung.html
- treebeard.html
- balrogs.html
- sereias.html
- earendil.html
- marinhos.html
- ents.html
- balrog-moria.html

## Estrutura de Página Individual

Cada página individual deve conter:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[Nome do Personagem] - Crônicas da Terra-média</title>
    <link rel="stylesheet" href="../style.css">
</head>
<body>
    <header class="cabecalho">
        <!-- Mesmo header do index.html -->
    </header>

    <main>
        <section class="secao personagem-detalhes">
            <h1>[Nome do Personagem]</h1>
            <p class="nomes-alternativos">[Se houver nomes alternativos]</p>
            <p class="categoria">[Raça/Categoria]</p>
            
            <img src="../imagens/[personagem].jpg" alt="[Nome do Personagem]">
            
            <section class="info-personagem">
                <h2>Informações Básicas</h2>
                <dl>
                    <dt>Raça:</dt>
                    <dd>[Raça/Categoria]</dd>
                    
                    <dt>Origem:</dt>
                    <dd>[Local de origem]</dd>
                    
                    <dt>Era de Importância:</dt>
                    <dd>[Primeira/Segunda/Terceira/etc Era]</dd>
                    
                    <dt>Parentes:</dt>
                    <dd>[Listar parentes com links]</dd>
                </dl>
            </section>
            
            <section class="historia">
                <h2>História</h2>
                <p>[Descrição detalhada da vida e deeds]</p>
            </section>
            
            <section class="feitos">
                <h2>Feitos e Ações Notáveis</h2>
                <ul>
                    <li>[Feito 1]</li>
                    <li>[Feito 2]</li>
                </ul>
            </section>
            
            <section class="relacoes">
                <h2>Relações com Outros Personagens</h2>
                <ul>
                    <li><a href="[personagem].html">[Nome]</a> - [Relação]</li>
                </ul>
            </section>
            
            <section class="curiosidades">
                <h2>Curiosidades</h2>
                <ul>
                    <li>[Curiosidade 1]</li>
                </ul>
            </section>
            
            <section class="obras">
                <h2>Aparições em Obras</h2>
                <ul>
                    <li>O Silmarillion</li>
                    <li>O Hobbit</li>
                    <li>O Senhor dos Anéis</li>
                </ul>
            </section>
            
            <a href="../index.html#personagens" class="botao">Voltar ao Compêndio</a>
        </section>
    </main>

    <footer>
        <!-- Mesmo footer do index.html -->
    </footer>
</body>
</html>
```

## Total de Personagens

**Total: 89 personagens únicos**

Divididos em:
- 9 Valar
- 5 Maiar
- 18 Elfos
- 16 Homens
- 9 Hobbits
- 12 Anões
- 11 Criaturas e Outros Seres

## Regra de Não-Duplicação

✓ Cada personagem aparece apenas uma vez no compêndio
✓ Personagens com múltiplos nomes (Melkor/Morgoth, Sméagol/Gollum, etc.) foram contados como um único personagem
✓ Nenhuma duplicação foi identificada na lista final

## Próximos Passos

1. Criar as páginas HTML individuais conforme modelo acima
2. Adicionar imagens para cada personagem
3. Implementar links entre personagens relacionados
4. Adicionar navegação de "Anterior/Próximo" personagem
5. Implementar busca e filtros com JavaScript (futuro)
