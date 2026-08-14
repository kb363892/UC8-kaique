

// const btnGravador = document.getElementById("btn-gravador");

// const statusGravacao = document.getElementById("status-gravacao");



// const textoOriginal = btnGravador.innerHTML;



// btnGravador.addEventListener("mousedown", () => {

//     btnGravador.style.backgroundColor = "#e74c3c";

//     btnGravador.innerHTML = " 🔴 Gravando... Não solte!";

//     statusGravacao.textContent = "Status: Capturando áudio... "

// });

// btnGravador.addEventListener("mouseup", () => {

//     btnGravador.style.backgroundColor = "#3498db";

//     btnGravador.innerHTML = " Clique e Segure para grava  ";

//     statusGravacao.textContent = "Status: Gravacao concluida com sucesso  "

// });


// Seleção dos elementos HTML

const btn = document.getElementById('btn-gravador');

const status = document.getElementById('status-gravacao');



// Evento: Quando o usuário coloca o dedo no botão

btn.addEventListener('touchstart', (evento) => {

    // Impede zooms e seleções de texto indesejadas no celular

    evento.preventDefault();



    // Altera a cor e os textos para o modo de gravação

    btn.style.backgroundColor = '#e74c3c';

    btn.innerText = '🔴 Gravando... Não solte!';

    status.innerText = 'Status: Capturando áudio...';

});



// Evento: Quando o usuário remove o dedo do botão

btn.addEventListener('touchend', () => {

    // Restaura o botão e atualiza o status de envio

    btn.style.backgroundColor = '#3498db';

    btn.innerText = '🎤 Clique e Segure para Gravar';

    status.innerText = 'Status: Gravação concluída e enviada!';

});
