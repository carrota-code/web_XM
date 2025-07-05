document.addEventListener('DOMContentLoaded', function() {
    
    // --- LÒGICA PER A L'EFECTE D'APARICIÓ AMB SCROLL ---
    // Aquesta part funciona correctament i la mantenim.
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

    // --- SCRIPT SIMPLIFICAT I ROBUST PER ACOLORIR NOMÉS APÒSTROFS ---
    // Tornem a una solució més simple i segura per evitar errors.
    try {
        const colorizeApostrophes = () => {
            const elementsToColorize = document.querySelectorAll('.colorize-accents');
            if (elementsToColorize.length === 0) return;

            // Expressió regular per trobar només l'apòstrof recte (') i l'arrissat (’).
            const apostropheRegex = /['’]/g;

            elementsToColorize.forEach(element => {
                // Treballem directament amb l'HTML intern. Per a aquest cas simple, és segur.
                // Reemplacem cada apòstrof trobat per ell mateix embolicat en un span de color.
                element.innerHTML = element.innerHTML.replace(apostropheRegex, `<span class="neon-pink-text">$&</span>`);
            });
        };

        colorizeApostrophes();

    } catch (error) {
        console.error("Error en la función colorizeApostrophes:", error);
    }
});
