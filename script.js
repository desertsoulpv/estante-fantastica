// Lista de livros exibidos na página inicial.
const livros = [
    { nome: "Caminho dos Reis - Livro 1", imagem: "imagens/caminho_reis.jpg", categoria: "Fantasia", preco: "──── ⟡ R$ 78,90 ⟡ ────" },
    { nome: "Palavras de Radiância - Livro 2", imagem: "imagens/palavras_radiancia.jpg", categoria: "Fantasia", preco: "──── ⟡ R$ 78,90 ⟡ ────" },
    { nome: "Sacramentadora - Livro 3", imagem: "imagens/sacramentadora.webp", categoria: "Fantasia", preco: "──── ⟡ R$ 78,90 ⟡ ────" },
    { nome: "Ritmo da Guerra - Livro 4", imagem: "imagens/ritmo_guerra.webp", categoria: "Fantasia", preco: "──── ⟡ R$ 78,90 ⟡ ────" },
    { nome: "Vento e Verdade - Livro 5", imagem: "imagens/vento_verdade.webp", categoria: "Fantasia", preco: "──── ⟡ R$ 78,90 ⟡ ────" },
    { nome: "O Senhor dos Anéis - Volume Único", imagem: "imagens/senhor_dos_aneis.jpg", categoria: "Fantasia", preco: "──── ⟡ R$ 78,90 ⟡ ────" },
    { nome: "O Nome do Vento - Livro 1", imagem: "imagens/o_nome_vento.jpg", categoria: "Fantasia", preco: "──── ⟡ R$ 78,90 ⟡ ────" },
    { nome: "Aprendiz de Assassino - Livro 1", imagem: "imagens/aprendiz_assassino.jpg", categoria: "Fantasia", preco: "──── ⟡ R$ 78,90 ⟡ ────" },
    { nome: "A Espada de Kaigen - Livro Único", imagem: "imagens/a_espada_kaigen.jpg", categoria: "Fantasia", preco: "──── ⟡ R$ 78,90 ⟡ ────" },
    { nome: "Fúria Vermelha - Livro 1", imagem: "imagens/red_rising.jpg", categoria: "Ficção Científica", preco: "──── ⟡ R$ 78,90 ⟡ ────" },
    { nome: "Hyperion - Livro 1", imagem: "imagens/hyperion.jpg", categoria: "Ficção Científica", preco: "──── ⟡ R$ 78,90 ⟡ ────" },
    { nome: "A Vontade de Muitos - Livro 1", imagem: "imagens/vontade_de_muitos.webp", categoria: "Fantasia", preco: "──── ⟡ R$ 78,90 ⟡ ────" },
    { nome: "O Guia Definitivo do Mochileiro das Galáxias", imagem: "imagens/guia.jpg", categoria: "Ficção Científica", preco: "──── ⟡ R$ 78,90 ⟡ ────" },
    { nome: "Colapso", imagem: "imagens/colapso.jpg", categoria: "Ficção Científica", preco: "──── ⟡ R$ 78,90 ⟡ ────" },
    { nome: "Kindred Laços de Sangue", imagem: "imagens/kindred.jpg", categoria: "Ficção Científica", preco: "──── ⟡ R$ 78,90 ⟡ ────" },
    { nome: "Feiticeiro de Terramar - Livro 1", imagem: "imagens/feiticeiro_terramar.jpg", categoria: "Fantasia", preco: "──── ⟡ R$ 78,90 ⟡ ────" },
    { nome: "A Guerra dos Tronos: As Crônicas de Gelo e Fogo - Livro 1", imagem: "imagens/cronicas_gelo_fogo.jpg", categoria: "Fantasia", preco: "──── ⟡ R$ 78,90 ⟡ ────" },
    { nome: "Elantris", imagem: "imagens/elantris.jpg", categoria: "Fantasia", preco: "──── ⟡ R$ 78,90 ⟡ ────" },
    { nome: "Warbreaker: O sopro dos Deuses", imagem: "imagens/warbreaker_sopro_dos_deuses.jpg", categoria: "Fantasia", preco: "──── ⟡ R$ 78,90 ⟡ ────" },
    { nome: "Tress A Garota do Mar Esmeralda", imagem: "imagens/tress.jpg", categoria: "Fantasia", preco: "──── ⟡ R$ 78,90 ⟡ ────" },
    { nome: "Yumi e o Pintor de Pesadelos", imagem: "imagens/yumi_pintor.jpg", categoria: "Fantasia", preco: "──── ⟡ R$ 78,90 ⟡ ────" },
    { nome: "O Homem Iluminado", imagem: "imagens/homem_iluminado.jpg", categoria: "Ficção Científica", preco: "──── ⟡ R$ 78,90 ⟡ ────" },
    { nome: "O Priorado da Laranjeira - Livro 1", imagem: "imagens/priorado.jpg", categoria: "Fantasia", preco: "──── ⟡ R$ 78,90 ⟡ ────" },
    { nome: "Phantastes", imagem: "imagens/phantastes.jpg", categoria: "Fantasia", preco: "──── ⟡ R$ 78,90 ⟡ ────" },
];

// Função para mostrar os livros na página.
function mostrarLivros(lista) {
    const area = document.getElementById("livros");

    if (!area) return;
    area.innerHTML = "";

    lista.forEach(function (livro) {
        
        area.innerHTML += `<div class="col-12 col-sm-6 col-lg-4 col-xl-3 g-4"><div class="card-livro">
        <img src="${livro.imagem}" alt="Capa de ${livro.nome}">
        <h5>${livro.nome}</h5><p>${livro.categoria}</p><p class="preco">${livro.preco}</p>
        <div class = "row justify-content-around">
            <div class="col-12 col-sm-6 col-lg-6"><a href="realizar-compra.html" class="btn botao-livro" 
            onclick="selecionarLivro(${livros.indexOf(livro)})">Comprar <i class="bi bi-cart3"></a></i></div>
            <div class="col-12 col-sm-6 col-lg-6" onclick="selecionarLivroFavorito(${livros.indexOf(livro)})">
                <a class="botao-favorito btn"> Favoritar <i class="bi bi-heart"></i></a>
            </div>
        </div>
        </div></div>`;
    });
    document.getElementById("aviso").hidden = lista.length > 0;
}
mostrarLivros(livros);

// Seleciona o livro que o usuário deseja comprar.
function selecionarLivro(indice) {
    localStorage.setItem("livroSelecionado", JSON.stringify(livros[indice]));
}

// Seleciona o livro que o usuário deseja favoritar.
function selecionarLivroFavorito(indice) {
    let favoritos = JSON.parse(localStorage.getItem("livrosFavoritos")) || [];

    const existe = favoritos.some(function(livro) {
        alert("Livro já adicionado aos favoritos!");
        return livro.nome === livros[indice].nome;
    });

    if (!existe) {
        favoritos.push(livros[indice]);
        localStorage.setItem("livrosFavoritos", JSON.stringify(favoritos));
        alert("Livro adicionado aos favoritos!");
    }
}

// Mostra o livro selecionado na página de compra
function mostrarLivroCompra() {
    const area = document.getElementById("card-compra");

    if (!area) return;

    const livro = JSON.parse(localStorage.getItem("livroSelecionado"));

    if (!livro) {
        area.innerHTML = "<p>Nenhum livro selecionado.</p>";
        return;
    }

    area.innerHTML = `
        <div class="col-12 col-sm-6 col-lg-4 col-xl-3 g-4">
            <div class="card-livro">
                <img src="${livro.imagem}" alt="Capa de ${livro.nome}">
                <h5>${livro.nome}</h5>
                <p>${livro.categoria}</p>
                <p class="preco">${livro.preco}</p>
            </div>
        </div>
    `;
}
mostrarLivroCompra();

function mostrarLivroFavorito() {
    const area = document.getElementById("card-favorito");

    if (!area) return;

    const favoritos = JSON.parse(localStorage.getItem("livrosFavoritos")) || [];

    area.innerHTML = "";

    favoritos.forEach(function(livro) {
        area.innerHTML += `
            <div class="col-12 col-sm-6 col-lg-4 col-xl-3 g-4">
                <div class="card-favorito">
                    <img src="${livro.imagem}" alt="Capa de ${livro.nome}">
                    <h5>${livro.nome}</h5>
                    <p>${livro.categoria}</p>
                    <p class="preco">${livro.preco}</p>
                </div>
            </div>
        `;
    });

    document.getElementById("aviso").hidden = lista.length > 0;
}
mostrarLivroFavorito();

// Pesquisa pelo nome do livro.
const pesquisa = document.getElementById("pesquisa");
if (pesquisa) {
    pesquisa.addEventListener("input", function () {
        const texto = pesquisa.value.toLowerCase();
        const resultado = livros.filter(function (livro) {
            return livro.nome.toLowerCase().includes(texto);
        });
        mostrarLivros(resultado);
    });
}

// Filtro por categoria.
document.querySelectorAll(".categoria").forEach(function (botao) {
    botao.addEventListener("click", function () {
        const categoria = botao.dataset.categoria;
        if (categoria === "Todas") {
            mostrarLivros(livros);
        } else {
            const resultado = livros.filter(function (livro) {
                return livro.categoria === categoria;
            });
            mostrarLivros(resultado);
        }
    });
});

// Cadastro de usuário usando localStorage.
const cadastro = document.getElementById("form-cadastro");
if (cadastro) {
    cadastro.addEventListener("submit", function (evento) {
        evento.preventDefault();
        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email-cadastro").value.toLowerCase();
        const senha = document.getElementById("senha-cadastro").value;
        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
        const existe = usuarios.find(function (usuario) { return usuario.email === email; });

        if (existe) {
            document.getElementById("mensagem-cadastro").textContent = "Este e-mail já está cadastrado.";
        } else {
            usuarios.push({ nome: nome, email: email, senha: senha });
            localStorage.setItem("usuarios", JSON.stringify(usuarios));
            document.getElementById("mensagem-cadastro").textContent = "Cadastro realizado!";
            cadastro.reset();
        }
    });
}

// Login: compara os dados digitados com os dados cadastrados.
const login = document.getElementById("form-login");
if (login) {
    login.addEventListener("submit", function (evento) {
        evento.preventDefault();
        const email = document.getElementById("email-login").value.toLowerCase();
        const senha = document.getElementById("senha-login").value;
        const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
        const usuario = usuarios.find(function (item) {
            return item.email === email && item.senha === senha;
        });
        if (usuario) {
            localStorage.setItem("usuarioLogado", usuario.nome);
            window.location.href = "index.html";
        } else {
            document.getElementById("mensagem-login").textContent = "E-mail ou senha incorretos.";
        }
    });
}

// Mostra quem entrou e permite sair da conta.
const nome = localStorage.getItem("usuarioLogado");
const usuario = document.getElementById("usuario");
const linkLogin = document.getElementById("link-login");
const sair = document.getElementById("sair");
if (nome && usuario) {
    usuario.textContent = "Olá, " + nome;
    linkLogin.hidden = true;
    sair.hidden = false;
}
if (sair) {
    sair.addEventListener("click", function () {
        localStorage.removeItem("usuarioLogado");
        window.location.reload();
    });
}
