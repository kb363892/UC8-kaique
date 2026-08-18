// FASE 1

// Muda o texto da página.
function alterarConteudo() {
    const texto = document.getElementById("conteudo");

    texto.textContent = "Olá, JavaScript! O texto foi trocado!";
}

// Volta o texto original.
function resetarConteudo() {
    const texto = document.getElementById("conteudo");

    texto.textContent =
        "O JavaScript pode alterar o conteúdo de um elemento HTML";
}


// FASE 2

// Liga a lâmpada.
function ligarLampada() {
    const lampada = document.getElementById("lampada");

    lampada.classList.remove("desligada");
    lampada.classList.add("ligada");
}

// Desliga a lâmpada.
function desligarLampada() {
    const lampada = document.getElementById("lampada");

    lampada.classList.remove("ligada");
    lampada.classList.add("desligada");
}


// FASE 3
  
// Aumenta o tamanho do texto.
function aumentarFonte() {
    const texto = document.getElementById("demonstracao");

    texto.style.fontSize = "25px";
}

// Muda a cor para verde.
function mudarCor() {
    const texto = document.getElementById("demonstracao");

    texto.style.color = "green";
}

// Deixa o texto em negrito.
function aplicarNegrito() {
    const texto = document.getElementById("demonstracao");

    texto.style.fontWeight = "bold";
}

// Coloca um fundo no texto.
function aplicarFundo() {
    const texto = document.getElementById("demonstracao");

    texto.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
}

// Volta o texto para o normal.
function resetarDemonstracao() {
    const texto = document.getElementById("demonstracao");

    texto.style.fontSize = "";
    texto.style.color = "";
    texto.style.fontWeight = "";
    texto.style.backgroundColor = "";
}


// FASE 4

// Esconde o texto.
function ocultarElemento() {
    const texto = document.getElementById("textoOcultar");

    texto.style.display = "none";
}

// Mostra o texto novamente.
function mostrarElemento() {
    const texto = document.getElementById("textoOcultar");

    texto.style.display = "block";
}


// FASE 5

// Mostra o texto escondido.
function exibirTexto() {
    const texto = document.getElementById("textoEscondido");

    texto.style.display = "block";
}

// Esconde o texto novamente.
function esconderTexto() {
    const texto = document.getElementById("textoEscondido");

    texto.style.display = "none";
}


// FASE 6

// Faz os botões funcionarem.
function iniciarAplicacao() {

    // Fase 1
    document.getElementById("btnAlterar")
        .addEventListener("click", alterarConteudo);

    document.getElementById("btnResetarConteudo")
        .addEventListener("click", resetarConteudo);


    // Fase 2
    document.getElementById("btnLigar")
        .addEventListener("click", ligarLampada);

    document.getElementById("btnDesligar")
        .addEventListener("click", desligarLampada);


    // Fase 3
    document.getElementById("btnAumentar")
        .addEventListener("click", aumentarFonte);

    document.getElementById("btnCor")
        .addEventListener("click", mudarCor);

    document.getElementById("btnNegrito")
        .addEventListener("click", aplicarNegrito);

    document.getElementById("btnFundo")
        .addEventListener("click", aplicarFundo);

    document.getElementById("btnResetarDemonstracao")
        .addEventListener("click", resetarDemonstracao);


    // Fase 4
    document.getElementById("btnOcultar")
        .addEventListener("click", ocultarElemento);

    document.getElementById("btnMostrar")
        .addEventListener("click", mostrarElemento);


    // Fase 5
    document.getElementById("btnRevelar")
        .addEventListener("click", exibirTexto);

    document.getElementById("btnEsconder")
        .addEventListener("click", esconderTexto);
}


// Inicia o código quando a página carregar.
document.addEventListener("DOMContentLoaded", iniciarAplicacao);