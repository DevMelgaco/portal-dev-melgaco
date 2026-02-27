document.addEventListener('DOMContentLoaded', () => {
    console.log("Arquitetura Premium | Desenvolvido por Dev Melgaço");
    
    // Efeito suave de rolagem
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});