document.addEventListener('DOMContentLoaded', () => {
    // Efeito suave de entrada
    const hero = document.querySelector('.hero-content');
    hero.style.opacity = '0';
    hero.style.transform = 'translateY(30px)';
    
    setTimeout(() => {
        hero.style.transition = 'all 1.2s ease-out';
        hero.style.opacity = '1';
        hero.style.transform = 'translateY(0)';
    }, 300);

    console.log("Projeto Nutrição Finalizado por Dev Melgaço.");
});