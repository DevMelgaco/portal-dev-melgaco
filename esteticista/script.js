document.addEventListener('DOMContentLoaded', () => {
    console.log("Estética Premium | Desenvolvido por Dev Melgaço");
    
    // Revelação suave do conteúdo
    const hero = document.querySelector('.hero-content');
    hero.style.opacity = '0';
    hero.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        hero.style.transition = 'all 1s ease-out';
        hero.style.opacity = '1';
        hero.style.transform = 'translateY(0)';
    }, 300);
});