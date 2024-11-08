/**
 * Simples simulador de uma lampada
 * @author Vitor de Assis
 */

let quebrada = false;

function quebrar() {
    if (quebrada === false) {
        document.getElementById('lamp').src = "img/broken.jpg"
        //reproduzindo um arquivo de áudio no JS
        //Passo 1: copiar o arquivo de aúdio para o projeto
        //Passo 2: Usar a classe Audio(biblioteca interna do JS) 
        let som = new Audio()
        som.src = "sound/glassbreaking.wav"
        som.play()
        quebrada = true;
    }
}

function onoff() {
    let interruptor2 = document.getElementById('interruptor')

    if (quebrada === true) {
        if (quebrada === true && interruptor2.src === 'http://127.0.0.1:5500/img/swoff.png' ) {
            document.getElementById('interruptor').src = "img/swon.png"
        } else if( quebrada === true && interruptor2.src !== 'http://127.0.0.1:5500/img/swoff.png') {
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