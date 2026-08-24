// ==========================================

// SELEÇÃO DOS ELEMENTOS HTML

// ==========================================



const btn = document.getElementById('btn-gravador');

const status = document.getElementById('status-gravacao');

const player = document.getElementById('player-audio');



// ==========================================

// VARIÁVEIS DA GRAVAÇÃO

// ==========================================



let mediaRecorder = null;

let audioChunks = [];

let gravando = false;





// ==========================================

// COMEÇAR GRAVAÇÃO

// ==========================================



async function comecarGravacao() {



    // Evita iniciar duas gravações ao mesmo tempo

    if (gravando) return;



    // Verifica suporte do navegador

    if (

        !navigator.mediaDevices ||

        !navigator.mediaDevices.getUserMedia ||

        !window.MediaRecorder

    ) {

        status.innerText =

            'Status: ⚠️ Seu navegador não suporta gravação de áudio.';

        return;

    }



    try {



        // Solicita acesso ao microfone

        const stream = await navigator.mediaDevices.getUserMedia({

            audio: true

        });



        audioChunks = [];



        // Verifica formato compatível

        let opcoes = {};



        if (MediaRecorder.isTypeSupported('audio/webm')) {

            opcoes = {

                mimeType: 'audio/webm'

            };

        }



        // Cria o gravador

        mediaRecorder = new MediaRecorder(stream, opcoes);



        // Quando houver dados de áudio

        mediaRecorder.ondataavailable = function (evento) {



            if (evento.data.size > 0) {

                audioChunks.push(evento.data);

            }



        };



        // Quando a gravação parar

        mediaRecorder.onstop = function () {



            const audioBlob = new Blob(audioChunks, {

                type: mediaRecorder.mimeType

            });



            // Cria endereço temporário para o áudio

            const audioURL = URL.createObjectURL(audioBlob);



            player.src = audioURL;

            player.style.display = 'block';



            status.innerText =

                'Status: ✅ Gravação concluída!';



            // Desliga o microfone

            stream.getTracks().forEach(function (track) {

                track.stop();

            });



            gravando = false;

        };



        // Começa a gravação

        mediaRecorder.start();



        gravando = true;



        // Alterações visuais

        btn.style.backgroundColor = '#e74c3c';

        btn.innerText = '🔴 Gravando... Não solte!';



        status.innerText =

            'Status: 🎙️ Capturando áudio...';



    } catch (erro) {



        console.error('Erro ao acessar o microfone:', erro);



        gravando = false;



        if (erro.name === 'NotAllowedError') {



            status.innerText =

                'Status: ⚠️ Permissão do microfone negada.';



        } else if (erro.name === 'NotFoundError') {



            status.innerText =

                'Status: ⚠️ Nenhum microfone encontrado.';



        } else {



            status.innerText =

                'Status: ⚠️ Não foi possível acessar o microfone.';

        }

    }

}





// ==========================================

// PARAR GRAVAÇÃO

// ==========================================



function pararGravacao() {



    if (

        mediaRecorder &&

        mediaRecorder.state === 'recording'

    ) {



        mediaRecorder.stop();



        btn.style.backgroundColor = '#3498db';

        btn.innerText = '🎤 Clique e Segure para Gravar';



        status.innerText =

            'Status: ⏳ Processando gravação...';

    }

}





// ==========================================

// EVENTOS DO MOUSE

// ==========================================



btn.addEventListener('mousedown', function (evento) {



    evento.preventDefault();



    comecarGravacao();

});



btn.addEventListener('mouseup', function () {



    pararGravacao();

});



btn.addEventListener('mouseleave', function () {



    pararGravacao();

});





// ==========================================

// EVENTOS DE TOQUE - CELULAR

// ==========================================



btn.addEventListener('touchstart', function (evento) {



    evento.preventDefault();



    comecarGravacao();



}, { passive: false });





btn.addEventListener('touchend', function (evento) {



    evento.preventDefault();



    pararGravacao();



}, { passive: false });





btn.addEventListener('touchcancel', function () {



    pararGravacao();



});





// ==========================================

// GARANTE QUE O BOTÃO VOLTE AO NORMAL

// ==========================================



function resetarBotao() {



    btn.style.backgroundColor = '#3498db';

    btn.innerText = '🎤 Clique e Segure para Gravar';



}