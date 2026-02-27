document.addEventListener('DOMContentLoaded', () => {
    // 1. Efeito de Revelação (Fade-in) no Título do Hero
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

    // 2. Rolagem Suave (Smooth Scroll) para links internos
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

    // 3. Lógica do Carrossel de Imagens
    const carouselSlide = document.querySelector('.carousel-slide');
    const carouselImages = document.querySelectorAll('.carousel-slide img');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');

    if (carouselSlide && carouselImages.length > 0) {
        let counter = 0;
        const size = carouselImages[0].clientWidth; // Largura de uma imagem

        // Função para mover o carrossel
        function slideImage() {
            carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        }

        // Botão PRÓXIMO
        nextBtn.addEventListener('click', () => {
            if (counter >= carouselImages.length - 1) return; // Se for a última imagem, não faz nada
            counter++;
            slideImage();
        });

        // Botão ANTERIOR
        prevBtn.addEventListener('click', () => {
            if (counter <= 0) return; // Se for a primeira imagem, não faz nada
            counter--;
            slideImage();
        });

        // Opcional: Auto-slide (comente se não quiser automático)
        // setInterval(() => {
        //     if (counter >= carouselImages.length - 1) {
        //         counter = -1; // Volta para o início para ciclo infinito
        //     }
        //     counter++;
        //     slideImage();
        // }, 4000); // Muda a cada 4 segundos
    }

    // 4. Log de Identificação no Console
    console.log("%c Projeto Fotografia por Dev Melgaço ", "background: #c5a059; color: #1a1a1a; font-weight: bold; border-radius: 5px; padding: 5px;");
});