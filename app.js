/**
 * Simples simulador de uma lampada
 * @author Vitor de Assis
 */


// Variáveis de apoio a lógica
let quebrada = false;

// Pré carregamento do arquivo de áudio
let som = new Audio("sound/breaking-glass.mp3")
//som.src = "sound/glassbreaking.wav"

function quebrar() {
    // Verificar se a lampada está quebrada antes de "quebrar"
    if (quebrada === false) {
        document.getElementById('lamp').src = "img/broken.jpg"
        // Reproduzindo um arquivo de áudio no JS
        // Passo 1: copiar o arquivo de aúdio para o projeto
        // Passo 2: Usar a classe Audio(biblioteca interna do JS) 
        // Passo 3: Pré carregar o arquivo de áudio para sincronizar com a troca de imagem (UX)
        som.play()
        quebrada = true;
    }
}

function onoff() {
    let interruptor2 = document.getElementById('interruptor')

    if (quebrada === true) {
        if (quebrada === true && interruptor2.src === 'http://127.0.0.1:5500/img/swoff.png') {
            document.getElementById('interruptor').src = "img/swon.png"
        } else if (quebrada === true) {
            document.getElementById('interruptor').src = "img/swoff.png"
        }
    } else {
        if (interruptor2.src === 'http://127.0.0.1:5500/img/swoff.png') {
            document.getElementById('interruptor').src = "img/swon.png"
            document.getElementById('lamp').src = "img/on.jpg"
        } else {
            document.getElementById('interruptor').src = "img/swoff.png"
            document.getElementById('lamp').src = "img/off.jpg"
        }
    }
}