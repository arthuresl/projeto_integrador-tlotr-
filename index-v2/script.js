/*
Tema: desafio interativo sobre o universo de Tolkien.
Entradas: pontuação de 0 a 100 e escolha de um personagem de 1 a 5.
Processamento: validar as entradas, classificar a pontuação e localizar o personagem.
Saídas: resultado na página, alertas de validação e dados no console.
Pseudocódigo:
1. Preparar os personagens e configurar a navegação acessível.
2. Solicitar e validar a pontuação e a escolha do personagem.
3. Classificar a pontuação e apresentar o resultado.

Tabela de testes (pontuação, personagem -> resultado esperado):
0, 1 -> Viajante, Gandalf.
65, 3 -> Guardião, Legolas.
95, 5 -> Lenda da Terra-média, Frodo.
*/

const personagensDesafio = [
    {
        nome: "Gandalf",
        povo: "Maia",
        descricao: "Guia os povos livres diante da ameaça de Sauron."
    },
    {
        nome: "Aragorn",
        povo: "Homem, Dúnadan",
        descricao: "Herdeiro de Isildur e rei do Reino Reunido."
    },
    {
        nome: "Legolas",
        povo: "Elfo Sindarin",
        descricao: "Arqueiro de Valfenda e membro da Sociedade do Anel."
    },
    {
        nome: "Gimli",
        povo: "Anão",
        descricao: "Guerreiro da Sociedade e amigo de Legolas."
    },
    {
        nome: "Frodo Bolseiro",
        povo: "Hobbit",
        descricao: "Portador do Um Anel durante a jornada a Mordor."
    }
];

const menuToggle = document.querySelector("#menu-toggle");
const menuPrincipal = document.querySelector("#menu-principal");
const dropdown = document.querySelector(".dropdown");
const dropdownToggle = document.querySelector(".dropdown-toggle");
const iniciarDesafio = document.querySelector("#iniciar-desafio");
const resultadoDesafio = document.querySelector("#resultado-desafio");
const formularioLogin = document.querySelector("#form-login");
const statusLogin = document.querySelector("#login-status");
const linksNavegacao = document.querySelectorAll(".navegacao-principal a.nav-link[href^='#']");
const secoes = document.querySelectorAll("#conteudo-principal > section[id]");

function atualizarMenu(aberto) {
    menuToggle.setAttribute("aria-expanded", String(aberto));
    menuToggle.setAttribute(
        "aria-label",
        aberto ? "Fechar menu de navegação" : "Abrir menu de navegação"
    );
    menuPrincipal.classList.toggle("is-open", aberto);
}

function atualizarDropdown(aberto) {
    dropdownToggle.setAttribute("aria-expanded", String(aberto));
    dropdown.classList.toggle("is-open", aberto);
}

function fecharNavegacao() {
    atualizarMenu(false);
    atualizarDropdown(false);
}

function marcarLinkAtivo(idAtivo) {
    let linkDropdownAtivo = false;

    for (const link of linksNavegacao) {
        const ativo = link.hash === `#${idAtivo}`;
        link.classList.toggle("ativo", ativo);

        if (ativo) {
            link.setAttribute("aria-current", "location");
        } else {
            link.removeAttribute("aria-current");
        }

        if (link.closest(".dropdown")) {
            linkDropdownAtivo = linkDropdownAtivo || ativo;
        }
    }

    dropdownToggle.classList.toggle("ativo", linkDropdownAtivo);
}

function atualizarLinkDuranteRolagem() {
    if (secoes.length === 0) {
        return;
    }

    const cabecalho = document.querySelector(".cabecalho");
    const limite = window.scrollY + cabecalho.offsetHeight + 48;
    let secaoAtual = "inicio";

    for (const secao of secoes) {
        if (secao.offsetTop <= limite) {
            secaoAtual = secao.id;
        }
    }

    marcarLinkAtivo(secaoAtual);
}

function solicitarNumero(mensagem, minimo, maximo, inteiro = false) {
    let entrada = window.prompt(mensagem);

    while (entrada !== null) {
        const texto = entrada.trim();

        if (texto === "") {
            window.alert("O campo não pode ficar vazio. Tente novamente.");
        } else {
            const numero = Number(texto);

            if (!Number.isFinite(numero)) {
                window.alert("Digite um número válido.");
            } else if (
                numero < minimo ||
                numero > maximo ||
                (inteiro && !Number.isInteger(numero))
            ) {
                const formato = inteiro ? "número inteiro" : "número";
                window.alert(`Informe um ${formato} entre ${minimo} e ${maximo}.`);
            } else {
                return numero;
            }
        }

        entrada = window.prompt(mensagem);
    }

    return null;
}

function classificarPontuacao(pontuacao) {
    let classificacao;
    let mensagem;

    if (pontuacao < 40) {
        classificacao = "Viajante";
        mensagem = "Toda grande jornada começa com o primeiro passo.";
    } else if (pontuacao < 70) {
        classificacao = "Guardião";
        mensagem = "Sua coragem já protege os caminhos da Terra-média.";
    } else if (pontuacao < 90) {
        classificacao = "Herói";
        mensagem = "Seus feitos serão lembrados por muitos povos.";
    } else {
        classificacao = "Lenda da Terra-média";
        mensagem = "Seu nome será contado entre as grandes lendas.";
    }

    switch (classificacao) {
        case "Viajante":
            console.log("Classificação: Viajante");
            break;
        case "Guardião":
            console.log("Classificação: Guardião");
            break;
        case "Herói":
            console.log("Classificação: Herói");
            break;
        case "Lenda da Terra-média":
            console.log("Classificação: Lenda da Terra-média");
            break;
        default:
            console.log("Classificação não identificada.");
            break;
    }

    return { classificacao, mensagem };
}

function executarDesafio() {
    let opcoesPersonagens = "";

    for (let indice = 0; indice < personagensDesafio.length; indice += 1) {
        opcoesPersonagens += `${indice + 1} - ${personagensDesafio[indice].nome}\n`;
    }

    const pontuacao = solicitarNumero(
        "Quantos pontos você conquistou? Digite um valor de 0 a 100:",
        0,
        100
    );

    if (pontuacao === null) {
        resultadoDesafio.textContent = "Desafio cancelado. Você pode tentar novamente quando quiser.";
        return;
    }

    const opcaoPersonagem = solicitarNumero(
        `Escolha seu personagem digitando o número correspondente:\n${opcoesPersonagens}`,
        1,
        personagensDesafio.length,
        true
    );

    if (opcaoPersonagem === null) {
        resultadoDesafio.textContent = "Escolha cancelada. Você pode tentar o desafio novamente.";
        return;
    }

    const { classificacao, mensagem } = classificarPontuacao(pontuacao);
    const personagem = personagensDesafio[opcaoPersonagem - 1];

    console.table(personagensDesafio);
    for (const item of personagensDesafio) {
        console.log(`${item.nome} (${item.povo}): ${item.descricao}`);
    }

    resultadoDesafio.textContent =
        `Pontuação: ${pontuacao}/100\n` +
        `Classificação: ${classificacao}\n` +
        `${mensagem}\n` +
        `Personagem escolhido: ${personagem.nome} (${personagem.povo}) — ${personagem.descricao}`;
}

menuToggle.addEventListener("click", () => {
    const aberto = menuToggle.getAttribute("aria-expanded") === "true";
    atualizarMenu(!aberto);
});

dropdownToggle.addEventListener("click", () => {
    if (
        window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
        dropdown.matches(":hover")
    ) {
        atualizarDropdown(true);
        return;
    }

    const aberto = dropdownToggle.getAttribute("aria-expanded") === "true";
    atualizarDropdown(!aberto);
});

dropdown.addEventListener("pointerenter", () => {
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
        atualizarDropdown(true);
    }
});

dropdown.addEventListener("pointerleave", () => {
    if (!dropdown.contains(document.activeElement)) {
        atualizarDropdown(false);
    }
});

dropdown.addEventListener("focusin", () => {
    atualizarDropdown(true);
});

dropdown.addEventListener("focusout", (evento) => {
    if (!dropdown.contains(evento.relatedTarget)) {
        atualizarDropdown(false);
    }
});

document.addEventListener("click", (evento) => {
    if (!dropdown.contains(evento.target)) {
        atualizarDropdown(false);
    }

    if (!menuPrincipal.contains(evento.target) && !menuToggle.contains(evento.target)) {
        atualizarMenu(false);
    }
});

document.addEventListener("keydown", (evento) => {
    if (evento.key !== "Escape") {
        return;
    }

    const menuEstavaAberto = menuToggle.getAttribute("aria-expanded") === "true";
    const dropdownEstavaAberto = dropdownToggle.getAttribute("aria-expanded") === "true";

    if (!menuEstavaAberto && !dropdownEstavaAberto) {
        return;
    }

    fecharNavegacao();
    (menuEstavaAberto ? menuToggle : dropdownToggle).focus();
});

for (const link of linksNavegacao) {
    link.addEventListener("click", () => {
        marcarLinkAtivo(link.hash.slice(1));
        fecharNavegacao();
    });
}

iniciarDesafio.addEventListener("click", executarDesafio);
formularioLogin.addEventListener("submit", (evento) => {
    evento.preventDefault();
    statusLogin.textContent = "A autenticação ainda não está disponível neste projeto.";
});
window.addEventListener("scroll", atualizarLinkDuranteRolagem, { passive: true });
window.addEventListener("resize", atualizarLinkDuranteRolagem);
atualizarLinkDuranteRolagem();
