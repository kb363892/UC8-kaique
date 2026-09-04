
const apiUrl = 'https://api.disneyapi.dev/character';

const characters = document.getElementById('characters');
const botaoCarregar = document.getElementById('botaoCarregar');
const mensagem = document.getElementById('mensagem');

let paginaAtual = 1;
const limite = 6;


/* FUNÇÃO PARA CARREGAR OS PERSONAGENS */
function carregarPersonagens() {

    botaoCarregar.disabled = true;
    mensagem.textContent = 'Carregando personagens...';

    let url = `${apiUrl}?page=${paginaAtual}&pageSize=${limite}`;

    fetch(url)

        .then(function (resposta) {
            return resposta.json();
        })

        .then(function (resultado) {

            resultado.data.forEach(function (personagem) {
                criarCard(personagem);
            });

            mensagem.textContent = '';

            paginaAtual++;

            botaoCarregar.disabled = false;

            // Se não houver próxima página, esconde o botão
            if (!resultado.info.nextPage) {
                botaoCarregar.style.display = 'none';
            }

        })

        .catch(function (erro) {

            console.error('Erro ao carregar personagens:', erro);

            mensagem.textContent =
                'Não foi possível carregar os personagens.';

            botaoCarregar.disabled = false;
        });
}


/* FUNÇÃO PARA CRIAR O CARD DE CADA PERSONAGEM */
function criarCard(personagem) {

    const card = document.createElement('div');

    card.classList.add('card');

    card.innerHTML = `
        <img 
            src="${personagem.imageUrl}" 
            alt="${personagem.name}"
        >

        <h2>${personagem.name}</h2>
    `;

    characters.appendChild(card);
}


/* BOTÃO PARA CARREGAR MAIS PERSONAGENS */

botaoCarregar.addEventListener('click', function () {
    carregarPersonagens();
});


/* CARREGA OS PRIMEIROS PERSONAGENS AO ABRIR A PÁGINA */

carregarPersonagens();
