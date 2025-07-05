// Aquest script només gestiona l'efecte d'aparició dels elements en fer scroll.
// S'ha eliminat la funció que donava problemes.

document.addEventListener('DOMContentLoaded', function() {
    
    try {
        const revealElements = document.querySelectorAll('.scroll-reveal');
        if (revealElements.length > 0) {
            const isElementInViewport = (el) => {
                const rect = el.getBoundingClientRect();
                return (
                    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
                    rect.bottom >= 0
                );
            };
            const revealOnScroll = () => {
                revealElements.forEach(el => {
                    if (isElementInViewport(el)) {
                        el.classList.add('visible');
                    }
                });
            };
            window.addEventListener('scroll', revealOnScroll);
            revealOnScroll(); // Comprovació inicial
        }
    } catch (error) {
        console.error("Error en la función de scroll-reveal:", error);
    }
});
