document.addEventListener('DOMContentLoaded', () => {
    // Efeito de entrada no Hero
    const hero = document.querySelector('.hero-content');
    hero.style.opacity = '0';
    hero.style.transform = 'scale(0.9)';
    
    setTimeout(() => {
        hero.style.transition = 'all 1s ease-out';
        hero.style.opacity = '1';
        hero.style.transform = 'scale(1)';
    }, 200);

    console.log("Landing Page montada por Dev Melgaço.");
});