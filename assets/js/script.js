document.addEventListener('DOMContentLoaded', function() {
    
    // --- LÒGICA PER A L'EFECTE D'APARICIÓ AMB SCROLL ---
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
            revealOnScroll(); // Comprobación inicial
        }
    } catch (error) {
        console.error("Error en la función de scroll-reveal:", error);
    }

    // --- LÒGICA DEFINITIVA I ROBUSTA PER ACOLORIR NOMÉS SIGNES DE PUNTUACIÓ ---
    try {
        const colorizePunctuation = () => {
            const elementsToColorize = document.querySelectorAll('.colorize-accents');
            if (elementsToColorize.length === 0) return;

            // Expressió regular per trobar només els caràcters de puntuació especificats.
            const punctuationRegex = /['`,;:.·’]/g;

            elementsToColorize.forEach(element => {
                const childNodes = Array.from(element.childNodes);

                childNodes.forEach(child => {
                    if (child.nodeType === Node.TEXT_NODE && child.textContent.trim() !== '') {
                        const text = child.textContent;
                        
                        if (punctuationRegex.test(text)) {
                            const fragment = document.createDocumentFragment();
                            const parts = text.split(punctuationRegex);
                            const matches = text.match(punctuationRegex) || [];

                            parts.forEach((part, index) => {
                                if (part) {
                                    fragment.appendChild(document.createTextNode(part));
                                }
                                if (index < matches.length) {
                                    const span = document.createElement('span');
                                    span.className = 'neon-pink-text';
                                    span.textContent = matches[index];
                                    fragment.appendChild(span);
                                }
                            });
                            
                            // Comprobamos que el nodo padre todavía existe antes de reemplazar
                            if (child.parentNode) {
                                child.parentNode.replaceChild(fragment, child);
                            }
                        }
                    }
                });
            });
        };

        colorizePunctuation();

    } catch (error) {
        console.error("Error en la función colorizePunctuation:", error);
    }
});
