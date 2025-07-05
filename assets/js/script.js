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

    // --- NOVA LÒGICA AVANÇADA PER ACOLORIR NOMÉS ELS DIACRÍTICS ---
    const colorizeDiacritics = () => {
        const elementsToColorize = document.querySelectorAll('.colorize-accents');

        elementsToColorize.forEach(element => {
            // Clonem els nodes fills per no interferir amb el bucle
            const childNodes = Array.from(element.childNodes);

            childNodes.forEach(child => {
                // Només processem nodes de text
                if (child.nodeType === Node.TEXT_NODE) {
                    const originalText = child.textContent;
                    
                    // Normalitzem el text per separar lletres de diacrítics (ex: "é" -> "e" + "´")
                    const decomposedText = originalText.normalize('NFD');
                    
                    let newHtml = '';
                    for (let i = 0; i < decomposedText.length; i++) {
                        const char = decomposedText[i];
                        // Els diacrítics combinats estan en un rang específic d'Unicode
                        if (char.charCodeAt(0) >= 0x0300 && char.charCodeAt(0) <= 0x036f) {
                            newHtml += `<span class="neon-pink-text">${char}</span>`;
                        } else if (char === "'" || char === "·" || char === "’") {
                            // Casos especials com l'apòstrof o el punt volat
                            newHtml += `<span class="neon-pink-text">${char}</span>`;
                        } else {
                            newHtml += char;
                        }
                    }
                    
                    // Si hem fet canvis, reemplacem el node de text original
                    if (newHtml !== originalText) {
                        const tempWrapper = document.createElement('span');
                        // Tornem a normalitzar el text per ajuntar lletra+accent visualment
                        tempWrapper.innerHTML = newHtml.normalize('NFC');
                        
                        // Reemplacem el node de text antic pels nous nodes generats
                        element.replaceChild(tempWrapper, child);
                    }
                }
            });
        });
    };

    // Executem la funció per acolorir els accents
    colorizeDiacritics();
});
