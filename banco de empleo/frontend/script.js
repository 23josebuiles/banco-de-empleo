document.addEventListener('DOMContentLoaded', () => {
    // Efecto de resplandor al pasar el mouse
    const cyberLinks = document.querySelectorAll('.cyber-link');
    cyberLinks.forEach(link => {
        link.addEventListener('mousemove', (e) => {
            const rect = link.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            link.style.setProperty('--x', `${x}px`);
            link.style.setProperty('--y', `${y}px`);
        });
    });

    // Efecto de partículas en el fondo
    const hero = document.querySelector('.hero');
    for (let i = 0; i < 50; i++) {
        createParticle(hero);
    }
});

function createParticle(parent) {
    const particle = document.createElement('div');
    particle.className = 'cyber-particle';
    
    const size = Math.random() * 5 + 1;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    const startX = Math.random() * 100;
    const startY = Math.random() * 100;
    particle.style.left = `${startX}%`;
    particle.style.top = `${startY}%`;
    
    parent.appendChild(particle);
    
    animateParticle(particle);
}

function animateParticle(particle) {
    const animation = particle.animate([
        {
            transform: 'translate(0, 0)',
            opacity: Math.random()
        },
        {
            transform: `translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px)`,
            opacity: 0
        }
    ], {
        duration: Math.random() * 3000 + 2000,
        iterations: Infinity,
        direction: 'alternate',
        easing: 'ease-in-out'
    });
}