// Aquest script gestiona l'efecte d'aparició dels elements en fer scroll.

document.addEventListener('DOMContentLoaded', function() {
    
    // Selecciona tots els elements que tindran l'efecte
    const revealElements = document.querySelectorAll('.scroll-reveal');

    // Funció per comprovar si un element és visible a la pantalla
    const isElementInViewport = (el) => {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    };

    // Funció que afegeix la classe 'visible' quan l'element entra a la pantalla
    const revealOnScroll = () => {
        revealElements.forEach(el => {
            if (isElementInViewport(el)) {
                el.classList.add('visible');
            }
        });
    };

    // Executa la funció quan es carrega la pàgina i cada vegada que es fa scroll
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Comprovació inicial per si alguns elements ja són visibles
});
