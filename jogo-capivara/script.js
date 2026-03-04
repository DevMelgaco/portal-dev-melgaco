const capivara = document.getElementById('capivara');
const jogoContainer = document.getElementById('jogo-container');
const placarElemento = document.getElementById('placar');

let pontos = 0;
let fase = 1;
let jogoAtivo = true;
let velocidadeQueda = 5;
let frequenciaItens = 1000;

// Movimento da Capivara com o Mouse ou Toque
window.addEventListener('mousemove', (e) => {
    if (jogoAtivo) {
        let x = e.clientX - 40;
        capivara.style.left = x + 'px';
    }
});

function criarItem() {
    if (!jogoAtivo) return;

    const item = document.createElement('div');
    item.classList.add('item');
    
    // Sorteio de qual item vai cair
    const tipos = [
        { tipo: 'perigo', emoji: '👟', pontos: 0 },    // Tênis
        { tipo: 'perigo', emoji: '🩴', pontos: 0 },    // Chinelo
        { tipo: 'perigo', emoji: '👡', pontos: 0 },    // Sandália
        { tipo: 'fruta', emoji: '🍍', pontos: 30 },   // Abacaxi
        { tipo: 'fruta', emoji: '🍌', pontos: 10 },   // Banana
        { tipo: 'fruta', emoji: '🍇', pontos: 20 }    // Uva
    ];

    const sorteado = tipos[Math.floor(Math.random() * tipos.length)];
    item.innerHTML = sorteado.emoji;
    item.style.left = Math.random() * (window.innerWidth - 40) + 'px';
    item.style.top = '-50px';
    jogoContainer.appendChild(item);

    let posicaoTop = -50;

    function cair() {
        if (!jogoAtivo) return;
        posicaoTop += velocidadeQueda;
        item.style.top = posicaoTop + 'px';

        // Checar colisão
        const rectCapivara = capivara.getBoundingClientRect();
        const rectItem = item.getBoundingClientRect();

        if (
            rectItem.bottom > rectCapivara.top &&
            rectItem.top < rectCapivara.bottom &&
            rectItem.right > rectCapivara.left &&
            rectItem.left < rectCapivara.right
        ) {
            if (sorteado.tipo === 'perigo') {
                gameOver();
            } else {
                pontos += sorteado.pontos;
                atualizarPlacar();
                item.remove();
                checarFase();
            }
        }

        // Remover item se sair da tela
        if (posicaoTop > window.innerHeight) {
            item.remove();
        } else {
            requestAnimationFrame(cair);
        }
    }
    requestAnimationFrame(cair);
}

function atualizarPlacar() {
    placarElemento.innerHTML = `Pontos: ${pontos} | Fase: ${fase}`;
}

function checarFase() {
    if (pontos > fase * 200) {
        fase++;
        velocidadeQueda += 1.5; // Aumenta a dificuldade
        console.log("Subiu de fase!");
    }
}

function gameOver() {
    jogoAtivo = false;
    alert(`FIM DE JOGO! A capivara foi atingida.\nPontos totais: ${pontos}\nFase alcançada: ${fase}`);
    location.reload(); // Reinicia o jogo
}

// Iniciar criação de itens
setInterval(criarItem, frequenciaItens);