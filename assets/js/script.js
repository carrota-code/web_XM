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

    // --- NOVA LÒGICA (ROBUSTA) PER ACOLORIR NOMÉS SIGNES DE PUNTUACIÓ ---
    const colorizePunctuation = () => {
        const elementsToColorize = document.querySelectorAll('.colorize-accents');

        // Expressió regular per trobar només els caràcters de puntuació especificats.
        const punctuationRegex = /['`,;:.·’]/g;

        elementsToColorize.forEach(element => {
            // Utilitzem Array.from per crear una còpia estàtica, ja que modificarem els nodes fills.
            const childNodes = Array.from(element.childNodes);

            childNodes.forEach(child => {
                // Només processem nodes de text que no estiguin buits.
                if (child.nodeType === Node.TEXT_NODE && child.textContent.trim() !== '') {
                    const text = child.textContent;
                    
                    if (punctuationRegex.test(text)) {
                        // Creem un fragment de document per contenir els nous nodes. És més eficient.
                        const fragment = document.createDocumentFragment();
                        
                        // Dividim el text per la nostra expressió regular, mantenint els delimitadors.
                        const parts = text.split(punctuationRegex);
                        const matches = text.match(punctuationRegex) || [];

                        parts.forEach((part, index) => {
                            // Afegim la part de text normal.
                            if (part) {
                                fragment.appendChild(document.createTextNode(part));
                            }
                            // Afegim el signe de puntuació embolicat en un span.
                            if (index < matches.length) {
                                const span = document.createElement('span');
                                span.className = 'neon-pink-text';
                                span.textContent = matches[index];
                                fragment.appendChild(span);
                            }
                        });
                        
                        // Reemplacem el node de text original pel fragment amb els nous nodes.
                        element.replaceChild(fragment, child);
                    }
                }
            });
        });
    };

    // Executem la funció per acolorir la puntuació.
    colorizePunctuation();
});
