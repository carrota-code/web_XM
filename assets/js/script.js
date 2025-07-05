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

    // --- NOVA LÒGICA AVANÇADA PER ACOLORIR DIACRÍTICS I PUNTS ---
    const colorizeAccents = () => {
        const elementsToColorize = document.querySelectorAll('.colorize-accents');

        elementsToColorize.forEach(element => {
            const childNodes = Array.from(element.childNodes);

            childNodes.forEach(child => {
                if (child.nodeType === Node.TEXT_NODE) {
                    const originalText = child.textContent;
                    let newHtml = '';

                    for (let i = 0; i < originalText.length; i++) {
                        const char = originalText[i];
                        const normalized = char.normalize('NFD');

                        // Cas 1: Lletres 'i' i 'j'
                        if (char.toLowerCase() === 'i') {
                            // Substituïm 'i' per 'ı' (i sense punt) i un punt separat
                            newHtml += `<span class="letter-wrapper">ı<span class="dot neon-pink-text">˙</span></span>`;
                        } else if (char.toLowerCase() === 'j') {
                            // Substituïm 'j' per 'ȷ' (j sense punt) i un punt separat
                            newHtml += `<span class="letter-wrapper">ȷ<span class="dot neon-pink-text">˙</span></span>`;
                        }
                        // Cas 2: Altres lletres amb accents
                        else if (normalized.length > 1 && char.toLowerCase() !== 'i' && char.toLowerCase() !== 'j') {
                            const baseChar = normalized.charAt(0);
                            const accent = normalized.substring(1);
                            newHtml += `${baseChar}<span class="neon-pink-text">${accent}</span>`;
                        } 
                        // Cas 3: Apòstrofs i altres caràcters especials
                        else if (char === "'" || char === "·" || char === "’") {
                            newHtml += `<span class="neon-pink-text">${char}</span>`;
                        } 
                        // Cas 4: La resta de caràcters
                        else {
                            newHtml += char;
                        }
                    }
                    
                    if (newHtml !== originalText) {
                        const tempWrapper = document.createElement('span');
                        tempWrapper.innerHTML = newHtml.normalize('NFC');
                        element.replaceChild(tempWrapper, child);
                    }
                }
            });
        });
    };

    colorizeAccents();
});
