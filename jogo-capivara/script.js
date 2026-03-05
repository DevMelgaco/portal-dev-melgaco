const capivara = document.getElementById('capivara');
const jogoContainer = document.getElementById('jogo-container');
const placarElemento = document.getElementById('placar');
const telaInicio = document.getElementById('tela-inicio');
const btnIniciar = document.getElementById('btn-iniciar');

let pontos = 0;
let fase = 1;
let jogoAtivo = false;
let velocidadeQueda = 4; // Começa um pouco mais lento para ser justo
let frequenciaItens = 1200;

// Iniciar o jogo
btnIniciar.addEventListener('click', () => {
    telaInicio.style.display = 'none';
    jogoAtivo = true;
    pontos = 0;
    fase = 1;
    velocidadeQueda = 4;
    atualizarPlacar();
    loopCriacao();
});

// Movimentação Suave (Mouse e Touch)
function moverCapivara(clientX) {
    if (!jogoAtivo) return;
    let x = clientX - (capivara.offsetWidth / 2);
    // Impede a capivara de sair da tela
    if (x < 0) x = 0;
    if (x > window.innerWidth - 80) x = window.innerWidth - 80;
    capivara.style.left = x + 'px';
}

window.addEventListener('mousemove', (e) => moverCapivara(e.clientX));
window.addEventListener('touchmove', (e) => {
    moverCapivara(e.touches[0].clientX);
    e.preventDefault();
}, { passive: false });

function criarItem() {
    if (!jogoAtivo) return;

    const item = document.createElement('div');
    item.classList.add('item');
    
    const tipos = [
        { tipo: 'perigo', emoji: '👟', pontos: 0 },
        { tipo: 'perigo', emoji: '🩴', pontos: 0 },
        { tipo: 'fruta', emoji: '🍍', pontos: 30 },
        { tipo: 'fruta', emoji: '🍌', pontos: 10 },
        { tipo: 'fruta', emoji: '🍇', pontos: 20 }
    ];

    const sorteado = tipos[Math.floor(Math.random() * tipos.length)];
    item.innerHTML = sorteado.emoji;
    item.style.left = Math.random() * (window.innerWidth - 40) + 'px';
    item.style.top = '-50px';
    jogoContainer.appendChild(item);

    let posicaoTop = -50;

    function cair() {
        if (!jogoAtivo) {
            item.remove();
            return;
        }
        posicaoTop += velocidadeQueda;
        item.style.top = posicaoTop + 'px';

        const rectCapivara = capivara.getBoundingClientRect();
        const rectItem = item.getBoundingClientRect();

        // Colisão ajustada para ser mais generosa no celular
        if (
            rectItem.bottom > rectCapivara.top + 10 &&
            rectItem.top < rectCapivara.bottom - 10 &&
            rectItem.right > rectCapivara.left + 10 &&
            rectItem.left < rectCapivara.right - 10
        ) {
            if (sorteado.tipo === 'perigo') {
                gameOver();
            } else {
                pontos += sorteado.pontos;
                atualizarPlacar();
                item.remove();
                checarFase();
                return; // Para o requestAnimationFrame deste item
            }
        }

        if (posicaoTop > window.innerHeight) {
            item.remove();
        } else {
            requestAnimationFrame(cair);
        }
    }
    requestAnimationFrame(cair);
}

function loopCriacao() {
    if (jogoAtivo) {
        criarItem();
        setTimeout(loopCriacao, frequenciaItens / (fase * 0.8));
    }
}

function atualizarPlacar() {
    placarElemento.innerHTML = `Pontos: ${pontos} | Fase: ${fase}`;
}

function checarFase() {
    if (pontos > fase * 150) {
        fase++;
        velocidadeQueda += 0.8;
    }
}

function gameOver() {
    jogoAtivo = false;
    alert(`GAME OVER!\nPontos: ${pontos}\nFase: ${fase}`);
    location.reload();
}