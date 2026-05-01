// Efeito simples de saudação no console para testar o ambiente
console.log("Landing Page Flora Gonçalves carregada com sucesso! By Dev Melgaço");

// Exemplo: Alerta ao clicar em um plano (pode ser trocado por um link de WhatsApp)
const cards = document.querySelectorAll('.plano-card');
cards.forEach(card => {
    card.addEventListener('click', () => {
        alert("Redirecionando para cotação deste plano...");
    });
});