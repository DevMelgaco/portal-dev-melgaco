document.addEventListener('DOMContentLoaded', () => {
    // 1. Efeito de Revelação (Fade-in)
    // Faz o conteúdo centralizado aparecer suavemente ao carregar a página
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(20px)';
        heroContent.style.transition = 'opacity 1.2s ease-out, transform 1.2s ease-out';

        setTimeout(() => {
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 300);
    }

    // 2. Rolagem Suave (Smooth Scroll)
    // Faz a página deslizar macio quando clicar nos botões de âncora (#)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 3. Assinatura do Desenvolvedor no Console
    // Se alguém inspecionar o seu site, verá o seu crédito como programador
    console.log("%c Desenvolvido por Dev Melgaço ", "background: #000; color: #ccff00; font-weight: bold; border-radius: 5px; padding: 5px;");
});