// ==========================================
// FUNCIONALIDADES DO FORMULÁRIO - UC7
// ==========================================

const form = document.getElementById("formContato");
const btnLimpar = document.getElementById("btnLimpar");
const btnEnviar = document.getElementById("btnEnviar");
const feedback = document.getElementById("msgFeedback");

// Verifica se o formulário existe antes de executar o código.
if (form && btnEnviar && btnLimpar && feedback) {

    // Envia o formulário
    btnEnviar.addEventListener("click", function () {

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const telefone = document.getElementById("telefone").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        // Verifica se todos os campos foram preenchidos
        if (nome === "" || email === "" || telefone === "" || mensagem === "") {
            feedback.textContent = "Preencha todos os campos!";
            feedback.style.color = "red";
            return;
        }

        // Validação simples do e-mail
        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailValido.test(email)) {
            feedback.textContent = "Digite um e-mail válido!";
            feedback.style.color = "red";
            return;
        }

        // Mensagem de sucesso
        feedback.textContent = `Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`;
        feedback.style.color = "green";

        // Limpa o formulário após 2 segundos
        setTimeout(() => {
            form.reset();
        }, 2000);
    });


    // Botão limpar
    btnLimpar.addEventListener("click", function () {

        const confirmar = confirm("Deseja realmente limpar o formulário?");

        if (confirmar) {
            form.reset();
            feedback.textContent = "";
        }
    });
}


// ==========================================
// MENU MOBILE - UC8
// ==========================================

const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

// Verifica se o menu existe na página.
if (menuBtn && menu) {

    // Abre e fecha o menu com o clique.
    menuBtn.addEventListener("click", function () {
        menu.classList.toggle("aberto");
    });


    // Evento de toque: inicia o toque no botão.
    menuBtn.addEventListener("touchstart", function () {
        menuBtn.classList.add("pressionado");
    });


    // Evento de toque: termina o toque no botão.
    menuBtn.addEventListener("touchend", function () {
        menuBtn.classList.remove("pressionado");
    });
}
