/**
 * Simples simulador de uma lampada
 * @author Vitor de Assis
 */


// Variáveis de apoio a lógica
let quebrada = false;
let interruptor2 = document.getElementById('interruptor')

// Lanterna: pré carregamento
let stream, track
inicializarLanterna()

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

// Estudo de eventos relacionados a click do mouse (pressionado ou não pressionado) e telas touch
// Passo 1: Capturar os elementos do HTML (DOM)
const botao = document.getElementById('button')
const lampadaImg = document.getElementById('lamp')

// Passo 2: Manipular o evento 
// addEventListener ("Escuta de eventos em tempo real")
// mousedown (mouse pressionado constantemente)
// mouseup (soltar o botão do mouse)
// touchstart (tocar na tela e manter)
// touchend (deixar de pressionar a tela)


// Pressionar o botão do mouse e manter
botao.addEventListener('mousedown', (event) => {
    event.preventDefault() //Ignorar o comportamento padrão
    // console.log("Botão do mouse pressionado")

    if (quebrada === false && interruptor2.src === 'http://127.0.0.1:5500/img/swoff.png') {
        lampadaImg.src = "img/on.jpg" // trocar a imagem
    }
})

// Soltar o botão do mouse
botao.addEventListener('mouseup', (event) => {
    event.preventDefault() //Ignorar o comportamento padrão
    // console.log("Botão do mouse solto")

    if (quebrada === false && interruptor2.src === 'http://127.0.0.1:5500/img/swoff.png') {
        lampadaImg.src = "img/off.jpg" // trocar a imagem
    }
})

// Pressionar a tela touch e manter
botao.addEventListener('touchstart', (event) => {
    event.preventDefault() //Ignorar o comportamento padrão
    // console.log("Tela pressionada")

    if (quebrada === false && interruptor2.src === 'http://127.0.0.1:5500/img/swoff.png') {
        lampadaImg.src = "img/on.jpg" // trocar a imagem
    }
})

// Deixar de pressionar a tela touch
botao.addEventListener('touchend', (event) => {
    event.preventDefault() //Ignorar o comportamento padrão
    // console.log("A tela não está sendo pressionada")

    if (quebrada === false && interruptor2.src === 'http://127.0.0.1:5500/img/swoff.png') {
        lampadaImg.src = "img/off.jpg" // trocar a imagem
    }

})


// Lanterna(TORCH) async: faz com que a função rode e background
async function inicializarLanterna() {
    // try-catch (tratamento de exceções)
    try {
        // Solicita acesso à câmera traseira sem exibir o vídeo
        stream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: "environment" }
        })

        // Obtém o track do vídeo para controlar a lanterna
        track = stream.getVideoTracks()[0]

        // Verifica se o dispositivo suporta o uso da lanterna
        const capabilities = track.getCapabilities()
        if (!capabilities.torch) {
            console.log("Lanterna não suportada no dispositivo.")
            return
        }
    } catch (error) {
        console.error(`Erro ao inicializar a lanterna: ${error}`)
    }
}

async function ligar() {
    if (track) {
        try {
            await track.applyConstraints({ advanced: [{ torch: true }] })
        } catch (error) {
            console.error(`Erro ao inicializar a lanterna: ${error}`)
        }
    }
}

// Função para desligar a lanterna sem parar o stream
async function desligar() {
    if (track) {
        try {
            await track.applyConstraints({ advanced: [{ torch: false }] })
        } catch (error) {
            console.error(`Erro ao inicializar a lanterna: ${error}`)
        }
    }
}

async function desligar() {

}