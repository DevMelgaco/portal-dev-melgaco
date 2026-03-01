// Script simples para confirmação de carregamento
console.log("Landing Page Açougue carregada com sucesso.");

// Smooth scroll (rolagem suave) se houver links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});