document.addEventListener('DOMContentLoaded', function() {

    // --- OBJECTE DE TRADUCCIONS ---
    const translations = {
        ca: {
            nav_manifesto: "Manifest",
            nav_collection: "Col·lecció",
            nav_contact: "Contacte",
            nav_craftsmanship: "Artesania",
            collection_sphere: "Col·lecció Sphère",
            collection_manchon: "Manchon Connect",
            collection_disc: "Col·lecció DISC",
            hero_slogan: "L'art de portar un secret.",
            manifesto_title: "El Nostre Manifest",
            manifesto_text: "X'M neix a la intersecció de l'artesania i el concepte. Creiem en un luxe que no crida, sinó que xiuxiueja. En peces que no només vesteixen, sinó que dialoguen amb qui les porta. Cada disseny és una declaració d'intencions: una fusió d'elegància atemporal i una audàcia que desafia el present. No creem accessoris, creem secrets per compartir.",
            collection_title: "Col·lecció Sphère",
            collection_subtitle: "La nostra primera col·lecció explora la forma perfecta: l'esfera. Un univers tancat que amaga una funcionalitat íntima i radical.",
            noir_desc: "Més que un bolso, una declaració. Revestit de la més suau pell de conill negra, és una experiència tàctil inoblidable.",
            icon_desc: "Un disseny gràfic que reinterpreta un clàssic universal sota el prisma del luxe, alternant pell napa blanca i ant negre.",
            lucid_desc: "Un exercici d'honestedat radical. Una esfera d'acrílic transparent per a la dona que no té res a amagar.",
            strike_desc: "Una picada d'ullet a la cultura pop. Pell de xarol negre d'alta brillantor que evoca una bola de bitlles de luxe.",
            niu_desc: "Un retorn a l'essència, embolicat en fil de llana merino XXL. El luxe és calidesa i confort.",
            manchon_title: "Manchon Connect",
            manchon_subtitle: "La fusió perfecta entre calidesa, tecnologia i estil urbà.",
            manchon_desc: "La calidesa urbana es troba amb la connectivitat en el Manchon Connect. Aquest disseny reinventa el clàssic calentador de mans, oferint un refugi de suau pelo sintètic i un innovador butxaca exterior per mantenir el teu mòbil segur i sempre accessible.",
            disc_title: "Col·lecció DISC",
            disc_subtitle: "Geometria pura i disseny unisex per a l'explorador urbà.",
            disc_desc: "DISC és un exercici de minimalisme funcional. La seva forma de disc perfecte, realitzada en pell negra mat, ofereix una silueta neta i contundent. La corretja híbrida de pell i niló tècnic garanteix comoditat i durabilitat, mentre que el logo metàl·lic i la cremallera rosa neó aporten el segell inconfusible de X'M.",
            craftsmanship_title: "L'Ànima de l'Artesania",
            craftsmanship_text: "Cada peça X'M es construeix amb paciència i precisió en tallers artesans locals. Seleccionem només els millors materials: pells de napa suau, acrílics polits a mà i llanes pures. La nostra cremallera, amb el seu distintiu rosa neó, no és només un tancament, és una joia dissenyada a mida i banyada en or per garantir una durabilitat i un lliscar perfectes.",
            footer_mission: "Creant objectes de luxe amb una ànima inesperada. Disseny conceptual i artesania per a la dona moderna.",
            footer_help: "Ajuda",
            footer_contact: "Contacte",
            footer_faq: "Preguntes Freqüents (FAQ)",
            footer_care: "Cura del Producte",
            footer_company: "Empresa",
            footer_story: "La Nostra Història",
            footer_sustainability: "Sostenibilitat",
            footer_press: "Premsa",
            footer_copyright: "© 2025 X'M. Tots els drets reservats.",
            contact_title: "Contacte",
            cart_title: "Compra",
            contact_name: "Nom",
            contact_email: "Email",
            contact_message: "Missatge",
            contact_send: "Enviar Missatge",
            faq_title: "Preguntes Freqüents",
            faq_content: "<strong>Quines són les opcions d'enviament?</strong><br>Oferim enviament estàndard i exprés a tot el món. Els costos i temps de lliurament es calculen a la pantalla de pagament.<br><br><strong>Puc retornar un producte?</strong><br>Sí, acceptem devolucions dins dels 14 dies posteriors a la recepció de la comanda. El producte ha d'estar en perfectes condicions i amb el seu embalatge original.",
            care_title: "Cura del Producte",
            care_content: "<p>Les nostres peces estan fetes amb materials de la més alta qualitat. Per mantenir la seva bellesa, evita l'exposició prolongada a la llum solar directa i a la humitat. Guarda el teu bolso a la seva bossa guardapols quan no l'utilitzis. Per a la neteja, consulta un especialista en tractament de pells.</p>",
            story_title: "La Nostra Història",
            story_content: "<p>X'M va néixer d'un desig: el de crear objectes que no només fossin bells, sinó que tinguessin una ànima. La marca busca desafiar la percepció tradicional del luxe, fusionant l'art conceptual amb l'artesania més meticulosa. Cada col·lecció és un capítol d'aquesta història, una exploració de formes, textures i emocions.</p>",
            sustainability_title: "Sostenibilitat",
            sustainability_content: "<p>Estem compromesos amb un luxe conscient. Treballem amb tallers locals per minimitzar la nostra petjada de carboni i garantir condicions laborals justes. Prioritzem l'ús de materials responsables i busquem constantment maneres d'innovar en sostenibilitat, des del nostro packaging reciclable fins a la selecció de pells de proveïdors certificats.</p>",
            press_title: "Premsa",
            press_content: "<p>Per a consultes de premsa, entrevistes o sol·licituds de material gràfic, si us plau, contacteu amb el nostre departament de comunicació a <a href='mailto:press@xm-brand.com' class='text-pink-500 hover:underline'>press@xm-brand.com</a>.</p>",
            cart_message: "Diga'ns quin és el teu desig i et direm com el podem fer realitat. Enviem a tot el mon."
        },
        es: {
            nav_collection: "Colección",
            collection_sphere: "Colección Sphère",
            collection_manchon: "Manchon Connect",
            collection_disc: "Colección DISC",
            disc_title: "Colección DISC",
            disc_subtitle: "Geometría pura y diseño unisex para el explorador urbano.",
            disc_desc: "DISC es un ejercicio de minimalismo funcional. Su forma de disco perfecto, realizada en piel negra mate, ofrece una silueta limpia y contundente. La correa híbrida de piel y nailon técnico garantiza comodidad y durabilidad, mientras que el logo metálico y la cremallera rosa neón aportan el sello inconfundible de X'M.",
            // ...rest of Spanish translations
        },
        fr: {
            nav_collection: "Collection",
            collection_sphere: "Collection Sphère",
            collection_manchon: "Manchon Connect",
            collection_disc: "Collection DISC",
            disc_title: "Collection DISC",
            disc_subtitle: "Géométrie pure et design unisexe pour l'explorateur urbain.",
            disc_desc: "DISC est un exercice de minimalisme fonctionnel. Sa forme de disque parfait, en cuir noir mat, offre une silhouette nette et puissante. La sangle hybride en cuir et nylon technique assure confort et durabilité, tandis que le logo métallique et la fermeture éclair rose néon apportent le sceau inimitable de X'M.",
            // ...rest of French translations
        },
        it: {
            nav_collection: "Collezione",
            collection_sphere: "Collezione Sphère",
            collection_manchon: "Manchon Connect",
            collection_disc: "Collezione DISC",
            disc_title: "Collezione DISC",
            disc_subtitle: "Geometria pura e design unisex per l'esploratore urbano.",
            disc_desc: "DISC è un esercizio di minimalismo funzionale. La sua forma a disco perfetto, realizzata in pelle nera opaca, offre una silhouette pulita e decisa. La tracolla ibrida in pelle e nylon tecnico garantisce comfort e resistenza, mentre il logo metallico e la cerniera rosa neon aggiungono il sigillo inconfondibile di X'M.",
            // ...rest of Italian translations
        },
        en: {
            nav_collection: "Collection",
            collection_sphere: "Sphère Collection",
            collection_manchon: "Manchon Connect",
            collection_disc: "DISC Collection",
            disc_title: "DISC Collection",
            disc_subtitle: "Pure geometry and unisex design for the urban explorer.",
            disc_desc: "DISC is an exercise in functional minimalism. Its perfect disc shape, crafted from matte black leather, offers a clean and powerful silhouette. The hybrid leather and technical nylon strap ensures comfort and durability, while the metallic logo and neon pink zipper provide the unmistakable X'M seal.",
            // ...rest of English translations
        }
    };

    // --- LÓGICA DELS MENÚS DESPLEGABLES (IDIOMA I COL·LECCIONS) ---
    function setupDropdown(containerId, buttonId, menuId) {
        const container = document.getElementById(containerId);
        const button = document.getElementById(buttonId);
        const menu = document.getElementById(menuId);

        if (!container || !button || !menu) return;

        button.addEventListener('click', (e) => {
            e.stopPropagation();
            menu.classList.toggle('hidden');
        });

        menu.addEventListener('click', () => {
             menu.classList.add('hidden');
        });
    }

    setupDropdown('lang-switcher', 'lang-button', 'lang-menu');
    setupDropdown('collection-dropdown-container', 'collection-button', 'collection-menu');

    // Tancar menús si es fa clic fora
    document.addEventListener('click', (e) => {
        const langContainer = document.getElementById('lang-switcher');
        const collectionContainer = document.getElementById('collection-dropdown-container');
        if (langContainer && !langContainer.contains(e.target)) {
            document.getElementById('lang-menu').classList.add('hidden');
        }
        if (collectionContainer && !collectionContainer.contains(e.target)) {
            document.getElementById('collection-menu').classList.add('hidden');
        }
    });


    // --- LÒGICA PER CANVIAR D'IDIOMA ---
    const langMenuLinks = document.querySelectorAll('#lang-menu a');
    const currentLangText = document.getElementById('current-lang-text');

    langMenuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const selectedLangId = e.target.getAttribute('data-lang-id');
            if (selectedLangId) {
                setLanguage(selectedLangId);
            }
        });
    });

    function setLanguage(lang) {
        document.documentElement.lang = lang;
        currentLangText.textContent = lang.toUpperCase();

        const elements = document.querySelectorAll('[data-lang]');
        elements.forEach(el => {
            const key = el.getAttribute('data-lang');
            // Comprovem que existeix la traducció per a l'idioma i la clau
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            } else if (translations['ca'] && translations['ca'][key]) {
                // Fallback a català si no existeix la traducció
                el.innerHTML = translations['ca'][key];
            }
        });
    }

    // Inicialitzar l'idioma al carregar la pàgina
    setLanguage('ca');

    // --- LÒGICA PER A LES FINESTRES MODALS ---
    const modalTriggers = document.querySelectorAll('.modal-trigger');
    const modalOverlay = document.getElementById('modal-overlay');

    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            const modalId = trigger.getAttribute('data-modal') + '-modal';
            const modal = document.getElementById(modalId);
            openModal(modal);
        });
    });

    function openModal(modal) {
        if (!modal) return;
        modalOverlay.classList.remove('hidden');
        modal.classList.remove('hidden');
        setTimeout(() => modal.classList.add('active'), 10);
    }

    function closeModal() {
        const activeModal = document.querySelector('.modal-content.active');
        if (activeModal) {
            activeModal.classList.remove('active');
            setTimeout(() => {
                activeModal.classList.add('hidden');
                modalOverlay.classList.add('hidden');
            }, 300);
        }
    }

    modalOverlay.addEventListener('click', closeModal);
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', closeModal);
    });

    // --- LÒGICA DEL FORMULARI DE CONTACTE ---
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        const subject = `Missatge de contacte de ${name}`;
        const body = `Nom: ${name}\nEmail: ${email}\n\nMissatge:\n${message}`;
        window.location.href = `mailto:jordibabi@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        closeModal();
    });

    // --- LÒGICA DE ANIMACIONS ---
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

});

