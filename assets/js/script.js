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

    // --- NOVA LÒGICA (ROBUSTA) PER ACOLORIR CARÀCTERS ACCENTUATS SENCERS ---
    const colorizeAccents = () => {
        const elementsToColorize = document.querySelectorAll('.colorize-accents');

        // Expressió regular per trobar tots els caràcters que NO són lletres bàsiques (a-z),
        // números, o espais. Això inclou accents, apòstrofs, puntuació, etc.
        const accentRegex = /[^a-z0-9\s]/gi;

        elementsToColorize.forEach(element => {
            const childNodes = Array.from(element.childNodes);

            childNodes.forEach(child => {
                // Només processem nodes de text
                if (child.nodeType === Node.TEXT_NODE) {
                    const text = child.textContent;
                    
                    if (accentRegex.test(text)) {
                        // Reemplacem cada caràcter trobat per ell mateix embolicat en el nostre span de color.
                        const newHtml = text.replace(accentRegex, `<span class="neon-pink-text">$&</span>`);
                        
                        const tempWrapper = document.createElement('span');
                        tempWrapper.innerHTML = newHtml;
                        
                        element.replaceChild(tempWrapper, child);
                    }
                }
            });
        });
    };

    // Executem la funció per acolorir els accents
    colorizeAccents();
});
