// Espera que tot el contingut de la pàgina s'hagi carregat
document.addEventListener('DOMContentLoaded', function() {
    
    // --- LÒGICA PER A L'EFECTE D'APARICIÓ AMB SCROLL ---
    const revealElements = document.querySelectorAll('.scroll-reveal');
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
    revealOnScroll();

    // --- NOVA LÒGICA PER ACOLORIR ACCENTS AUTOMÀTICAMENT ---
    const colorizeAccents = () => {
        // Selecciona tots els elements que tenen la classe 'colorize-accents'
        const elementsToColorize = document.querySelectorAll('.colorize-accents');

        // Expressió regular per trobar tots els caràcters que volem acolorir
        // Inclou apòstrofs, accents, punt volat, ce trencada, etc.
        const accentRegex = /([àèìòùáéíóúüïç·'´`¨^])/gi;

        elementsToColorize.forEach(element => {
            // Recorrem cada node fill de l'element. Això és important per no
            // malmetre les etiquetes HTML que ja hi pugui haver a dins.
            element.childNodes.forEach(child => {
                // Només processem els nodes de text
                if (child.nodeType === Node.TEXT_NODE) {
                    const text = child.textContent;
                    // Si el text conté algun dels caràcters buscats...
                    if (accentRegex.test(text)) {
                        // ...creem un nou contingut reemplaçant cada caràcter
                        // per ell mateix embolicat en el nostre span de color.
                        const newHtml = text.replace(accentRegex, `<span class="neon-pink-text">$1</span>`);
                        
                        // Creem un element temporal per contenir el nou HTML
                        const tempWrapper = document.createElement('span');
                        tempWrapper.innerHTML = newHtml;
                        
                        // Reemplacem el node de text original pels nous nodes (text + spans)
                        element.replaceChild(tempWrapper, child);
                    }
                }
            });
        });
    };

    // Executem la funció per acolorir els accents
    colorizeAccents();
});
