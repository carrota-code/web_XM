document.addEventListener('DOMContentLoaded', function() {

    // --- OBJECTE DE TRADUCCIONS ---
    const translations = {
        ca: {
            nav_manifesto: "Manifest",
            nav_collection: "Col·lecció",
            nav_contact: "Contacte",
            nav_craftsmanship: "Artesania",
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
            cart_title: "Compra", // Nuevo: Título para el modal de compra
            contact_name: "Nom",
            contact_email: "Email",
            contact_message: "Missatge",
            contact_send: "Enviar Missatge",
            faq_title: "Preguntes Freqüents",
            faq_content: "<strong>Quines són les opcions d'enviament?</strong><br>Oferim enviament estàndard i exprés a tot el món. Els costos i temps de lliurament es calculen a la pantalla de pagament.<br><br><strong>Puc retornar un producte?</strong><br>Sí, acceptem devolucions dins dels 14 dies posteriors a la recepció de la comanda. El producte ha d'estar en perfectes condicions i amb el seu embalatge original.",
            care_title: "Cura del Producte",
            care_content: "<p>Les nostres peces estan fetes amb materials de la més alta qualitat. Per mantenir la seva bellesa, evita l'exposició prolongada a la llum solar directa i a la humitat. Guarda el teu bolso a la seva bossa guardapols quan no l'utilitzes. Per a la neteja, consulta un especialista en tractament de pells.</p>",
            story_title: "La Nostra Història",
            story_content: "<p>X'M va néixer d'un desig: el de crear objectes que no només fossin bells, sinó que tinguessin una ànima. La marca busca desafiar la percepció tradicional del luxe, fusionant l'art conceptual amb l'artesania més meticulosa. Cada col·lecció és un capítol d'aquesta història, una exploració de formes, textures i emocions.</p>",
            sustainability_title: "Sostenibilitat",
            sustainability_content: "<p>Estem compromesos amb un luxe conscient. Treballem amb tallers locals per minimitzar la nostra petjada de carboni i garantir condicions laborals justes. Prioritzem l'ús de materials responsables i busquem constantment maneres d'innovar en sostenibilitat, des del nostre packaging reciclable fins a la selecció de pells de proveïdors certificats.</p>",
            press_title: "Premsa",
            press_content: "<p>Per a consultes de premsa, entrevistes o sol·licituds de material gràfic, si us plau, contacteu amb el nostre departament de comunicació a <a href='mailto:press@xm-brand.com' class='text-pink-500 hover:underline'>press@xm-brand.com</a>.</p>",
            cart_message: "Diga'ns quin és el teu desig i et direm com el podem fer realitat. Enviem a tot el mon."
        },
        es: {
            nav_manifesto: "Manifiesto",
            nav_collection: "Colección",
            nav_contact: "Contacto",
            nav_craftsmanship: "Artesanía",
            hero_slogan: "El arte de llevar un secreto.",
            manifesto_title: "Nuestro Manifiesto",
            manifesto_text: "X'M nace en la intersección de la artesanía y el concepto. Creemos en un lujo que no grita, sino que susurra. En piezas que no solo visten, sino que dialogan con quien las lleva. Cada diseño es una declaración de intenciones: una fusión de elegancia atemporal y una audacia que desafía el presente. No creamos accesorios, creamos secretos para compartir.",
            collection_title: "Colección Sphère",
            collection_subtitle: "Nuestra primera colección explora la forma perfecta: la esfera. Un universo cerrado que esconde una funcionalidad íntima y radical.",
            noir_desc: "Más que un bolso, una declaración. Revestido de la más suave piel de conejo negra, es una experiencia táctil inolvidable.",
            icon_desc: "Un diseño gráfico que reinterpreta un clásico universal bajo el prisma del lujo, alternando piel de napa blanca y ante negro.",
            lucid_desc: "Un ejercicio de honestidad radical. Una esfera de acrílico transparente para la mujer que no tiene nada que ocultar.",
            strike_desc: "Un guiño a la cultura pop. Piel de charol negro de alto brillo que evoca una bola de bolos de lujo.",
            niu_desc: "Un retorno a la esencia, envuelto en hilo de lana merino XXL. El lujo es calidez y confort.",
            craftsmanship_title: "El Alma de la Artesanía",
            craftsmanship_text: "Cada pieza X'M se construye con paciencia y precisión en talleres artesanos locales. Seleccionamos solo los mejores materiales: pieles de napa suave, acrílicos pulidos a mano y lanas puras. Nuestra cremallera, con su distintivo rosa neón, no es solo un cierre, es una joya diseñada a medida y bañada en oro para garantizar una durabilidad y un deslizamiento perfectos.",
            footer_mission: "Creando objetos de lujo con un alma inesperada. Diseño conceptual y artesanía para la mujer moderna.",
            footer_help: "Ayuda",
            footer_contact: "Contacto",
            footer_faq: "Preguntas Frecuentes (FAQ)",
            footer_care: "Cuidado del Producto",
            footer_company: "Empresa",
            footer_story: "Nuestra Historia",
            footer_sustainability: "Sostenibilidad",
            footer_press: "Prensa",
            footer_copyright: "© 2025 X'M. Todos los derechos reservados.",
            contact_title: "Contacto",
            cart_title: "Compra", // Nuevo: Título para el modal de compra
            contact_name: "Nombre",
            contact_email: "Email",
            contact_message: "Mensaje",
            contact_send: "Enviar Mensaje",
            faq_title: "Preguntas Frecuentes",
            faq_content: "<strong>¿Cuáles son las opciones de envío?</strong><br>Ofrecemos envío estándar y exprés a todo el mundo. Los costes y tiempos de entrega se calculan en la pantalla de pago.<br><br><strong>¿Puedo devolver un producto?</strong><br>Sí, aceptamos devoluciones dentro de los 14 días posteriores a la recepción del pedido. El producto debe estar en perfectas condiciones y con su embalaje original.",
            care_title: "Cuidado del Producto",
            care_content: "<p>Nuestras piezas están hechas con materiales de la más alta calidad. Para mantener su belleza, evita la exposición prolongada a la luz solar directa y a la humedad. Guarda tu bolso en su bolsa guardapolvo cuando no lo uses. Para la limpieza, consulta a un especialista en tratamiento de pieles.</p>",
            story_title: "Nuestra Historia",
            story_content: "<p>X'M nació de un deseo: el de crear objetos que no solo fueran bellos, sino que tuvieran un alma. La marca busca desafiar la percepción tradicional del lujo, fusionando el arte conceptual con el artesanía más meticulosa. Cada colección es un capítulo de esta historia, una exploración de formas, texturas y emociones.</p>",
            sustainability_title: "Sostenibilidad",
            sustainability_content: "<p>Estamos comprometidos con un lujo consciente. Trabajamos con talleres locales para minimizar nuestra huella de carbono y garantizar condiciones laborales justas. Priorizamos el uso de materiales responsables y buscamos constantemente maneras de innovar en sostenibilidad, desde nuestro packaging reciclable hasta la selección de pieles de proveedores certificados.</p>",
            press_title: "Prensa",
            press_content: "<p>Para consultas de prensa, entrevistas o solicitudes de material gráfico, por favor, contacten con nuestro departamento de comunicación en <a href='mailto:press@xm-brand.com' class='text-pink-500 hover:underline'>press@xm-brand.com</a>.</p>",
            cart_message: "Dinos cuál es tu deseo y te diremos cómo podemos hacerlo realidad. Enviamos a todo el mundo."
        },
        fr: {
            nav_manifesto: "Manifeste",
            nav_collection: "Collection",
            nav_contact: "Contact",
            nav_craftsmanship: "Artisanat",
            hero_slogan: "L'art de porter un secret.",
            manifesto_title: "Notre Manifeste",
            manifesto_text: "X'M naît à l'intersection de l'artisanat et du concept. Nous croyons en un luxe qui ne crie pas, mais qui murmure. En des pièces qui non seulement habillent, mais dialoguent avec celle qui les porte. Chaque design est une déclaration d'intentions : une fusion d'élégance intemporelle et d'une audace qui défie le présent. Nous ne créons pas d'accessoires, nous créons des secrets à partager.",
            collection_title: "Collection Sphère",
            collection_subtitle: "Notre première collection explore la forme parfaite : la sphère. Un univers clos qui cache une fonctionnalité intime et radicale.",
            noir_desc: "Plus qu'un sac, une déclaration. Recouvert de la plus douce fourrure de lapin noire, c'est une expérience tactile inoubliable.",
            icon_desc: "Un design graphique qui réinterprète un classique universel sous le prisme du luxe, alternant cuir nappa blanc et daim noir.",
            lucid_desc: "Un exercice d'honnêteté radicale. Une sphère en acrylique transparent pour la femme qui n'a rien à cacher.",
            strike_desc: "Un clin d'œil à la culture pop. Cuir verni noir brillant qui évoque une boule de bowling de luxe.",
            niu_desc: "Un retour à l'essence, enveloppé de fil de laine mérinos XXL. Le luxe est chaleur et confort.",
            craftsmanship_title: "L'Âme de l'Artisanat",
            craftsmanship_text: "Chaque pièce X'M est construite avec patience et précision dans des ateliers artisanaux locaux. Nous sélectionnons uniquement les meilleurs matériaux : cuirs nappa souples, acryliques polis à la main et laines pures. Notre fermeture éclair, avec son rose néon distinctif, n'est pas seulement une fermeture, c'est un bijou conçu sur mesure et plaqué or pour garantir une durabilité et une glisse parfaites.",
            footer_mission: "Créer des objets de luxe avec une âme inattendue. Design conceptuel et artisanat pour la femme moderne.",
            footer_help: "Aide",
            footer_contact: "Contact",
            footer_faq: "Questions Fréquentes (FAQ)",
            footer_care: "Entretien du Produit",
            footer_company: "Entreprise",
            footer_story: "Notre Histoire",
            footer_sustainability: "Durabilité",
            footer_press: "Presse",
            footer_copyright: "© 2025 X'M. Tous droits réservés.",
            contact_title: "Contact",
            cart_title: "Achat", // Nuevo: Título para el modal de compra
            contact_name: "Nom",
            contact_email: "Email",
            contact_message: "Message",
            contact_send: "Envoyer Message",
            faq_title: "Questions Fréquentes",
            faq_content: "<strong>Quelles sont les options d'expédition ?</strong><br>Nous offrons l'expédition standard et express dans le monde entier. Les frais et délais de livraison sont calculés à la caisse.<br><br><strong>Puis-je retourner un produit ?</strong><br>Oui, nous acceptons les retours dans les 14 jours suivant la réception de la commande. Le produit doit être en parfait état et dans son emballage d'origine.",
            care_title: "Entretien du Produit",
            care_content: "<p>Nos pièces sont fabriquées avec des matériaux de la plus haute qualité. Pour préserver leur beauté, évitez une exposition prolongée à la lumière directe du soleil et à l'humidité. Rangez votre sac dans sa housse anti-poussière lorsque vous ne l'utilisez pas. Pour le nettoyage, consultez un spécialiste du traitement du cuir.</p>",
            story_title: "Notre Histoire",
            story_content: "<p>X'M est née d'un désir : celui de créer des objets qui ne soient pas seulement beaux, mais qui aient une âme. La marque cherche à défier la perception traditionnelle du luxe, fusionnant l'art conceptuel avec l'artisanat le plus méticuleux. Chaque collection est un chapitre de cette histoire, une exploration des formes, des textures et des émotions.</p>",
            sustainability_title: "Durabilité",
            sustainability_content: "<p>Nous nous engageons pour un luxe conscient. Nous travaillons avec des ateliers locaux pour minimiser notre empreinte carbone et garantir des conditions de travail équitables. Nous priorisons l'utilisation de matériaux responsables et recherchons constamment des moyens d'innover en matière de durabilité, de notre emballage recyclable à la sélection de cuirs provenant de fournisseurs certifiés.</p>",
            press_title: "Presse",
            press_content: "<p>Pour toute demande de presse, d'entretiens ou de matériel graphique, veuillez contacter notre service de communication à <a href='mailto:press@xm-brand.com' class='text-pink-500 hover:underline'>press@xm-brand.com</a>.</p>",
            cart_message: "Dites-nous quel est votre désir et nous vous dirons comment nous pouvons le réaliser. Nous expédions partout dans le monde."
        },
        it: {
            nav_manifesto: "Manifesto",
            nav_collection: "Collezione",
            nav_contact: "Contatto",
            nav_craftsmanship: "Artigianato",
            hero_slogan: "L'arte di portare un segreto.",
            manifesto_title: "Il Nostro Manifesto",
            manifesto_text: "X'M nasce all'incrocio tra artigianato e concetto. Crediamo in un lusso che non grida, ma sussurra. In pezzi che non solo vestono, ma dialogano con chi li indossa. Ogni design è una dichiarazione di intenti: una fusione di eleganza senza tempo e un'audacia che sfida il presente. Non creiamo accessori, creiamo segreti da condividere.",
            collection_title: "Collezione Sphère",
            collection_subtitle: "La nostra prima collezione esplora la forma perfetta: la sfera. Un universo chiuso che nasconde una funzionalità intima e radicale.",
            noir_desc: "Più che una borsa, una dichiarazione. Rivestita della più morbida pelliccia di coniglio nera, è un'esperienza tattile indimenticabile.",
            icon_desc: "Un design grafico che reinterpreta un classico universale sotto il prisma del lusso, alternando pelle nappa bianca e camoscio nero.",
            lucid_desc: "Un esercizio di onestà radicale. Una sfera in acrilico trasparente per la donna che non ha nulla da nascondere.",
            strike_desc: "Un cenno alla cultura pop. Pelle verniciata nera ad alta lucentezza che evoca una palla da bowling di lusso.",
            niu_desc: "Un ritorno all'essenza, avvolta in filo di lana merino XXL. Il lusso è calore e comfort.",
            craftsmanship_title: "L'Anima dell'Artigianato",
            craftsmanship_text: "Ogni pezzo X'M è costruito con pazienza e precisione in laboratori artigianali locali. Selezioniamo solo i migliori materiali: pelli nappa morbide, acrilici lucidati a mano e lane pure. La nostra cerniera, con il suo distintivo rosa neon, non è solo una chiusura, è un gioiello progettato su misura e placcato in oro per garantire durata e scorrevolezza perfette.",
            footer_mission: "Creando oggetti di lusso con un'anima inaspettata. Design concettuale e artigianato per la donna moderna.",
            footer_help: "Aiuto",
            footer_contact: "Contatto",
            footer_faq: "Domande Frequenti (FAQ)",
            footer_care: "Cura del Prodotto",
            footer_company: "Azienda",
            footer_story: "La Nostra Storia",
            footer_sustainability: "Sostenibilità",
            footer_press: "Stampa",
            footer_copyright: "© 2025 X'M. Tutti i diritti riservati.",
            contact_title: "Contatto",
            cart_title: "Acquisto", // Nuevo: Título para el modal de compra
            contact_name: "Nome",
            contact_email: "Email",
            contact_message: "Messaggio",
            contact_send: "Invia Messaggio",
            faq_title: "Domande Frequenti",
            faq_content: "<strong>Quali sono le opzioni di spedizione?</strong><br>Offriamo spedizioni standard ed express in tutto il mondo. I costi e i tempi di consegna sono calcolati al momento del pagamento.<br><br><strong>Posso restituire un prodotto?</strong><br>Sì, accettiamo resi entro 14 giorni dalla ricezione dell'ordine. Il prodotto deve essere in perfette condizioni e con il suo imballaggio originale.",
            care_title: "Cura del Prodotto",
            care_content: "<p>I nostri articoli sono realizzati con materiali di altissima qualità. Per mantenerne la bellezza, evita l'esposizione prolungata alla luce solare diretta e all'umidità. Riponi la tua borsa nella sua sacca antipolvere quando non la usi. Per la pulizia, consulta uno specialista nel trattamento delle pelli.</p>",
            story_title: "La Nostra Storia",
            story_content: "<p>X'M è nata d'un desiderio: quello di creare oggetti che non fossero solo belli, ma che avessero un'anima. La marca busca desafiar la percepción tradicional del lujo, fusionando el arte conceptual con el artesanato más meticulosa. Cada collezione è un capitolo di questa storia, un'esplorazione di forme, texture ed emozioni.</p>",
            sustainability_title: "Sostenibilità",
            sustainability_content: "<p>Siamo impegnati in un lusso consapevole. Lavoriamo con laboratori locali per minimizzare la nostra impronta di carbonio e garantire condizioni di lavoro eque. Diamo priorità all'uso di materiali responsabili e cerchiamo costantemente modi per innovare in termini di sostenibilità, dal nostro packaging reciclabbile alla selezione di pelli provenienti da fornitori certificati.</p>",
            press_title: "Stampa",
            press_content: "<p>Per richieste di stampa, interviste o richieste di materiale grafico, si prega di contattare il nostro ufficio comunicazione all'indirizzo <a href='mailto:press@xm-brand.com' class='text-pink-500 hover:underline'>press@xm-brand.com</a>.</p>",
            cart_message: "Dicci qual è il tuo desiderio e ti diremo come possiamo realizzarlo. Spediamo in tutto il mondo."
        },
        en: {
            nav_manifesto: "Manifest",
            nav_collection: "Collection",
            nav_contact: "Contact",
            nav_craftsmanship: "Craftsmanship",
            hero_slogan: "The art of carrying a secret.",
            manifesto_title: "Our Manifesto",
            manifesto_text: "X'M is born at the intersection of craftsmanship and concept. We believe in a luxury that doesn't shout, but whispers. In pieces that not only dress, but dialogue with the wearer. Each design is a statement of intent: a fusion of timeless elegance and a boldness that challenges the present. We don't create accessories, we create secrets to share.",
            collection_title: "Sphère Collection",
            collection_subtitle: "Our first collection explores the perfect shape: the sphere. A closed universe that hides an intimate and radical functionality.",
            noir_desc: "More than a handbag, a statement. Lined with the softest black rabbit fur, it's an unforgettable tactile experience.",
            icon_desc: "A graphic design that reinterprets a universal classic through the prism of luxury, alternating white nappa leather and black suede.",
            lucid_desc: "An exercise in radical honesty. A transparent acrylic sphere for the woman who has nothing to hide.",
            strike_desc: "A nod to pop culture. High-gloss black patent leather that evokes a luxury bowling ball.",
            niu_desc: "A return to essence, wrapped in XXL merino wool yarn. Luxury is warmth and comfort.",
            craftsmanship_title: "The Soul of Craftsmanship",
            craftsmanship_text: "Each X'M piece is built with patience and precision in local artisan workshops. We select only the best materials: soft nappa leathers, hand-polished acrylics, and pure wools. Our zipper, with its distinctive neon pink, is not just a closure, it's a custom-designed, gold-plated jewel to ensure perfect durability and glide.",
            footer_mission: "Creating luxury objects with an unexpected soul. Conceptual design and craftsmanship for the modern woman.",
            footer_help: "Help",
            footer_contact: "Contact",
            footer_faq: "Frequently Asked Questions (FAQ)",
            footer_care: "Product Care",
            footer_company: "Company",
            footer_story: "Our Story",
            footer_sustainability: "Sustainability",
            footer_press: "Press",
            footer_copyright: "© 2025 X'M. All rights reserved.",
            contact_title: "Contact",
            cart_title: "Purchase", // Nuevo: Título para el modal de compra
            contact_name: "Name",
            contact_email: "Email",
            contact_message: "Message",
            contact_send: "Send Message",
            faq_title: "Frequently Asked Questions",
            faq_content: "<strong>What are the shipping options?</strong><br>We offer standard and express worldwide shipping. Costs and delivery times are calculated at checkout.<br><br><strong>Can I return a product?</strong><br>Yes, we accept returns within 14 days of receiving your order. The product must be in perfect condition and with its original packaging.",
            care_title: "Product Care",
            care_content: "<p>Our pieces are made with the highest quality materials. To maintain their beauty, avoid prolonged exposure to direct sunlight and moisture. Store your bag in its dust bag when not in use. For cleaning, consult a leather treatment specialist.</p>",
            story_title: "Our Story",
            story_content: "<p>X'M was born from a desire: to create objects that are not only beautiful, but have a soul. The brand seeks to challenge the traditional perception of luxury, merging conceptual art with the most meticulous craftsmanship. Each collection is a chapter of this story, an exploration of forms, textures, and emotions.</p>",
            sustainability_title: "Sustainability",
            sustainability_content: "<p>We are committed to conscious luxury. We work with local workshops to minimize our carbon footprint and ensure fair labor conditions. We prioritize the use of responsible materials and constantly seek ways to innovate in sustainability, from our recyclable packaging to the selection of leathers from certified suppliers.</p>",
            press_title: "Press",
            press_content: "<p>For press inquiries, interviews, or graphic material requests, please contact our communication department at <a href='mailto:press@xm-brand.com' class='text-pink-500 hover:underline'>press@xm-brand.com</a>.</p>",
            cart_message: "Tell us your desire and we'll tell you how we can make it a reality. We ship worldwide."
        }
    };

    // --- LÓGICA DEL SELECTOR DE IDIOMA ---
    const langSwitcher = document.getElementById('lang-switcher');
    const langButton = document.getElementById('lang-button');
    const langMenu = document.getElementById('lang-menu');
    const currentLangText = document.getElementById('current-lang-text');

    langButton.addEventListener('click', () => {
        langMenu.classList.toggle('hidden');
    });

    document.addEventListener('click', (e) => {
        if (!langSwitcher.contains(e.target)) {
            langMenu.classList.add('hidden');
        }
    });

    langMenu.addEventListener('click', (e) => {
        e.preventDefault();
        const selectedLangId = e.target.getAttribute('data-lang-id');
        if (selectedLangId) {
            setLanguage(selectedLangId);
            langMenu.classList.add('hidden');
        }
    });

    function setLanguage(lang) {
        document.documentElement.lang = lang;

        // Eliminar la clase neon-pink-text de cualquier idioma que la tenga actualmente
        currentLangText.classList.remove('neon-pink-text');
        currentLangText.textContent = lang.toUpperCase();
        currentLangText.classList.add('text-white'); // Añadir clase para color blanco

        const elements = document.querySelectorAll('[data-lang]');
        elements.forEach(el => {
            const key = el.getAttribute('data-lang');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            } else {
                console.warn(`Missing translation for language '${lang}' and key '${key}'`);
            }
        });
        
        // Actualizar el mensaje y el título del modal de contacto si está abierto y es el mensaje del carrito
        const contactModalMessage = document.getElementById('contact-modal-message');
        const contactModalTitle = document.querySelector('#contact-modal h2[data-lang="contact_title"]'); // Obtener el título
        const activeModal = document.querySelector('.modal-content.active');
        
        if (activeModal && activeModal.id === 'contact-modal') {
            if (contactModalMessage.dataset.currentSource === 'cart') {
                contactModalMessage.innerHTML = translations[lang].cart_message || '';
                if (contactModalTitle) {
                    contactModalTitle.textContent = translations[lang].cart_title || translations[lang].contact_title;
                }
            } else {
                // Si el modal está abierto pero no es el del carrito, asegurar el título original
                if (contactModalTitle) {
                    contactModalTitle.textContent = translations[lang].contact_title || '';
                }
            }
        }
    }

    // Inicializar el idioma al cargar la página
    setLanguage('ca');

    // --- LÓGICA PARA LAS VENTANAS MODALES ---
    const modalTriggers = document.querySelectorAll('.modal-trigger');
    const modalOverlay = document.getElementById('modal-overlay');
    const contactModalMessage = document.getElementById('contact-modal-message');
    const contactModalTitle = document.querySelector('#contact-modal h2[data-lang="contact_title"]'); // Referencia al título del modal de contacto

    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            const modalId = trigger.getAttribute('data-modal') + '-modal';
            const modal = document.getElementById(modalId);
            const cartMessageKey = trigger.getAttribute('data-cart-message-key');

            if (modalId === 'contact-modal') {
                if (cartMessageKey && translations[document.documentElement.lang][cartMessageKey]) {
                    contactModalMessage.innerHTML = translations[document.documentElement.lang][cartMessageKey];
                    contactModalMessage.style.display = 'block';
                    contactModalMessage.dataset.currentSource = 'cart'; // Marcar la fuente del mensaje
                    if (contactModalTitle) {
                        contactModalTitle.textContent = translations[document.documentElement.lang].cart_title || translations[document.documentElement.lang].contact_title;
                    }
                } else {
                    contactModalMessage.innerHTML = '';
                    contactModalMessage.style.display = 'none';
                    delete contactModalMessage.dataset.currentSource;
                    if (contactModalTitle) {
                        contactModalTitle.textContent = translations[document.documentElement.lang].contact_title || '';
                    }
                }
            } else {
                contactModalMessage.innerHTML = '';
                contactModalMessage.style.display = 'none';
                delete contactModalMessage.dataset.currentSource;
                // Asegurar que el título del modal de contacto vuelve a su valor original si se abre otro modal y luego el de contacto de forma normal
                if (contactModalTitle) {
                    contactModalTitle.textContent = translations[document.documentElement.lang].contact_title || '';
                }
            }
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
                // Al cerrar el modal de contacto, limpiar el mensaje personalizado y el título personalizado
                if (activeModal.id === 'contact-modal') {
                    const contactModalMessage = document.getElementById('contact-modal-message');
                    const contactModalTitle = document.querySelector('#contact-modal h2[data-lang="contact_title"]');
                    if (contactModalMessage) {
                        contactModalMessage.innerHTML = '';
                        contactModalMessage.style.display = 'none';
                        delete contactModalMessage.dataset.currentSource;
                    }
                    if (contactModalTitle) {
                        // Restablecer el título a "Contacte" al cerrar el modal
                        contactModalTitle.textContent = translations[document.documentElement.lang].contact_title || '';
                    }
                }
            }, 300);
        }
    }

    modalOverlay.addEventListener('click', closeModal);
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', closeModal);
    });

    // --- LÓGICA DEL FORMULARIO DE CONTACTO ---
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();

        const form = e.target;
        const data = new FormData(form);
        const url = "https://formspree.io/f/xnnvyzpb";

        try {
            const response = await fetch(url, {
                method: 'POST',
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                console.log("Formulario enviado con éxito a Formspree");
                form.reset();
                closeModal();
            } else {
                console.error("Error al enviar el formulario a Formspree:", response.statusText);
            }
        } catch (error) {
            console.error("Error de red al enviar el formulario:", error);
        }
    });

    // --- LÓGICA DE ANIMACIONES ---
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
