document.addEventListener('DOMContentLoaded', () => {
    const portalCore = document.getElementById('portalCore');
    const orbitContainer = document.getElementById('orbitContainer');

    // Dados dos nichos da vitrine
    const showcaseItems = [
        { name: 'Advocacia', icon: 'fa-balance-scale', link: 'advocacia/' },
        { name: 'Restaurante', icon: 'fa-utensils', link: 'restaurante/' },
        { name: 'Dentista', icon: 'fa-tooth', link: 'dentista/' },
        { name: 'Pessoal', icon: 'fa-dumbbell', link: 'pessoal/' }, // Usando o link correto em português
        { name: 'Cuidador', icon: 'fa-heart-pulse', link: 'cuidador/' }
    ];

    let isExpanded = false;
    const orbitRadius = 250; // Raio da órbita em pixels

    // Função para criar os elementos orbitais
    function createOrbitItems() {
        showcaseItems.forEach((item, index) => {
            const orbitItem = document.createElement('a');
            orbitItem.href = item.link;
            orbitItem.className = 'orbit-item';
            orbitItem.innerHTML = `
                <i class="fas ${item.icon}"></i>
                <span>${item.name}</span>
            `;
            orbitContainer.appendChild(orbitItem);
        });
    }

    // Função para posicionar os itens na órbita
    function positionOrbitItems() {
        const items = document.querySelectorAll('.orbit-item');
        const totalItems = items.length;
        const angleStep = (2 * Math.PI) / totalItems; // Passo de ângulo em radianos

        items.forEach((item, index) => {
            const angle = index * angleStep;
            const x = Math.cos(angle) * orbitRadius;
            const y = Math.sin(angle) * orbitRadius;

            // Define a posição inicial (no centro, invisível)
            item.style.transform = `translate(0px, 0px) scale(0)`;
            item.style.opacity = '0';
            
            // Armazena a posição final para uso na animação
            item.dataset.finalX = x;
            item.dataset.finalY = y;
        });
    }

    // Função para animar a expansão/recolhimento
    function toggleVitrine() {
        const items = document.querySelectorAll('.orbit-item');
        isExpanded = !isExpanded;

        items.forEach((item, index) => {
            if (isExpanded) {
                // Expande para a posição orbital
                const x = item.dataset.finalX;
                const y = item.dataset.finalY;
                item.style.transform = `translate(${x}px, ${y}px) scale(1)`;
                item.style.opacity = '1';
                item.style.pointerEvents = 'auto'; // Ativa cliques
            } else {
                // Recolhe para o centro
                item.style.transform = `translate(0px, 0px) scale(0)`;
                item.style.opacity = '0';
                item.style.pointerEvents = 'none'; // Desativa cliques
            }
        });

        // Feedback visual no portal central
        portalCore.style.transform = isExpanded ? 'scale(0.9)' : 'scale(1)';
    }

    // Inicialização
    createOrbitItems();
    positionOrbitItems();

    // Evento de clique no portal central
    portalCore.addEventListener('click', toggleVitrine);
});