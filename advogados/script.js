// Rolagem suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mensagem no console para confirmar carregamento
console.log("Portfólio Jurídico carregado por Dev Melgaço.");