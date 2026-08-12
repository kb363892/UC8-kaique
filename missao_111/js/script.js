

const btnGravador = document.getElementById("btn-gravador");

const statusGravacao = document.getElementById("status-gravacao");



const textoOriginal = btnGravador.innerHTML;



btnGravador.addEventListener("mousedown", () => {

    btnGravador.style.backgroundColor = "#e74c3c";

    btnGravador.innerHTML = " 🔴 Gravando... Não solte!";

    statusGravacao.textContent = "Status: Capturando áudio... "

});

btnGravador.addEventListener("mouseup", () => {

    btnGravador.style.backgroundColor = "#3498db";

    btnGravador.innerHTML = " Clique e Segure para grava  ";

    statusGravacao.textContent = "Status: Gravacao concluida com sucesso  "

});

