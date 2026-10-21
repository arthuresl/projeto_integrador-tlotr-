(() => {
    "use strict";

    const catalogo = window.ARDA_CATALOG;
    const parametros = new URLSearchParams(window.location.search);
    const tipo = parametros.get("tipo");
    const id = parametros.get("id");
    const conteiner = document.querySelector("#conteudo-ficha");
    const retorno = document.querySelector("#voltar-categoria");
    const eObra = tipo === "obra";
    const registros = eObra ? catalogo?.books : tipo === "personagem" ? catalogo?.people : null;
    const registro = registros?.find((item) => item.id === id);

    function criar(tag, texto, classe) {
        const elemento = document.createElement(tag);
        if (texto !== undefined) {
            elemento.textContent = texto;
        }
        if (classe) {
            elemento.className = classe;
        }
        return elemento;
    }

    if (!registro) {
        document.title = "Ficha não encontrada | ARDA";
        conteiner.append(
            criar("h1", "Ficha não encontrada"),
            criar("p", "O registro solicitado não está disponível no catálogo.")
        );
        return;
    }

    const titulo = eObra ? registro.title : registro.name;
    document.title = `${titulo} | ARDA`;
    retorno.href = eObra ? "index.html#livros" : "index.html#personagens";
    retorno.textContent = eObra ? "← Voltar à biblioteca" : "← Voltar ao compêndio";

    const artigo = criar("article", undefined, "ficha-detalhe");
    const cabecalho = criar("div", undefined, "cabecalho-ficha");
    cabecalho.append(
        criar("p", eObra ? "Ficha de obra" : "Perfil de personagem", "tipo-ficha"),
        criar("h1", titulo)
    );

    if (registro.image) {
        const imagem = document.createElement("img");
        imagem.src = registro.image;
        imagem.alt = eObra ? `Imagem ilustrativa de ${titulo}` : `Imagem ilustrativa de ${titulo}`;
        imagem.className = "imagem-ficha";
        cabecalho.append(imagem);
    }

    artigo.append(cabecalho);

    const metadados = criar("dl", undefined, "metadados-ficha");
    const campos = eObra
        ? [["Período narrado", registro.era], ["Publicação", registro.publication]]
        : [["Povo ou natureza", registro.category], ["Período histórico", registro.era]];

    for (const [rotulo, valor] of campos) {
        if (!valor) {
            continue;
        }
        const grupo = criar("div");
        grupo.append(criar("dt", rotulo), criar("dd", valor));
        metadados.append(grupo);
    }

    artigo.append(metadados);
    artigo.append(criar("h2", eObra ? "Sinopse" : "Biografia"));
    artigo.append(criar("p", eObra ? registro.summary : registro.biography));

    if (eObra && registro.importance) {
        artigo.append(
            criar("h2", "Importância e contexto"),
            criar("p", registro.importance)
        );
    }

    conteiner.append(artigo);
})();
