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

    // --- NOVA LÒGICA PER ACOLORIR NOMÉS SIGNES DE PUNTUACIÓ ---
    const colorizePunctuation = () => {
        const elementsToColorize = document.querySelectorAll('.colorize-accents');

        // Expressió regular per trobar només els caràcters de puntuació especificats.
        // Inclou: ' , ; : . · i l'apòstrof arrissat ’
        const punctuationRegex = /['`,;:.·’]/g;

        elementsToColorize.forEach(element => {
            const childNodes = Array.from(element.childNodes);

            childNodes.forEach(child => {
                // Només processem nodes de text
                if (child.nodeType === Node.TEXT_NODE) {
                    const text = child.textContent;
                    
                    if (punctuationRegex.test(text)) {
                        // Reemplacem cada caràcter de puntuació trobat
                        // per ell mateix embolicat en el nostre span de color.
                        const newHtml = text.replace(punctuationRegex, `<span class="neon-pink-text">$&</span>`);
                        
                        const tempWrapper = document.createElement('span');
                        tempWrapper.innerHTML = newHtml;
                        
                        // Reemplacem el node de text antic pels nous nodes generats
                        element.replaceChild(tempWrapper, child);
                    }
                }
            });
        });
    };

    // Executem la funció per acolorir la puntuació
    colorizePunctuation();
});
