document.addEventListener('DOMContentLoaded', function() {
    
    // --- OBJECTE DE TRADUCCIONS ---
    const translations = {
        ca: {
            nav_manifesto: "Manifest",
            nav_collection: "Col·lecció",
            nav_designer: "Creador",
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
            designer_title: "La Visió d'una Creadora",
            designer_quote1: "\"Sempre m'ha obsessionat la relació entre el cos i l'objecte. Un bolso no és només un contenidor, és un company. Amb Sphère, volia explorar una connexió més profunda, gairebé simbiòtica.\"",
            designer_quote2: "Per a mi, el disseny ha de provocar una emoció, ha de ser una peça de conversa. X'M és el resultat d'aquesta cerca: objectes bells amb una ànima inesperada.",
            craftsmanship_title: "L'Ànima de l'Artesania",
            craftsmanship_text: "Cada peça X'M es construeix amb paciència i precisió en tallers artesans locals. Seleccionem només els millors materials: pells de napa suau, acrílics polits a mà i llanes pures. La nostra cremallera, amb el seu distintiu rosa neó, no és només un tancament, és una joia dissenyada a mida i banyada en or per garantir una durabilitat i un lliscar perfectes.",
            footer_mission: "Creant objectes de luxe amb una ànima inesperada. Disseny conceptual i artesania per a la dona moderna.",
            footer_help: "Ajuda",
            footer_contact: "Contacte",
            footer_faq: "Preguntes Freqüents (FAQ)",
            footer_shipping: "Enviaments i Devolucions",
            footer_care: "Cura del Producte",
            footer_company: "Empresa",
            footer_story: "La Nostra Història",
            footer_sustainability: "Sostenibilitat",
            footer_press: "Premsa",
            footer_copyright: "© 2025 X'M. Tots els drets reservats.",
            contact_title: "Contacte",
            contact_name: "Nom",
            contact_email: "Email",
            contact_message: "Missatge",
            contact_send: "Enviar Missatge",
            faq_title: "Preguntes Freqüents",
            faq_content: "<strong>Quines són les opcions d'enviament?</strong><br>Oferim enviament estàndard i exprés a tot el món. Els costos i temps de lliurament es calculen a la pantalla de pagament.<br><br><strong>Puc retornar un producte?</strong><br>Sí, acceptem devolucions dins dels 14 dies posteriors a la recepció de la comanda. El producte ha d'estar en perfectes condicions i amb el seu embalatge original.",
            shipping_title: "Enviaments i Devolucions",
            shipping_content: "<p>Totes les comandes es processen en un termini de 2 dies laborables. Els enviaments estàndard triguen entre 5-7 dies laborables, i els exprés entre 1-3 dies. Rebràs un número de seguiment un cop la teva comanda hagi estat enviada. Per a devolucions, si us plau, contacta'ns a través del nostre formulari de contacte per iniciar el procés.</p>",
            care_title: "Cura del Producte",
            care_content: "<p>Les nostres peces estan fetes amb materials de la més alta qualitat. Per mantenir la seva bellesa, evita l'exposició prolongada a la llum solar directa i a la humitat. Guarda el teu bolso a la seva bossa guardapols quan no l'utilitzis. Per a la neteja, consulta un especialista en tractament de pells.</p>",
            story_title: "La Nostra Història",
            story_content: "<p>X'M va néixer d'un desig: el de crear objectes que no només fossin bells, sinó que tinguessin una ànima. Fundada per Gemma Juan Garcia, la marca busca desafiar la percepció tradicional del luxe, fusionant l'art conceptual amb l'artesania més meticulosa. Cada col·lecció és un capítol d'aquesta història, una exploració de formes, textures i emocions.</p>",
            sustainability_title: "Sostenibilitat",
            sustainability_content: "<p>Estem compromesos amb un luxe conscient. Treballem amb tallers locals per minimitzar la nostra petjada de carboni i garantir condicions laborals justes. Prioritzem l'ús de materials responsables i busquem constantment maneres d'innovar en sostenibilitat, des del nostre packaging reciclable fins a la selecció de pells de proveïdors certificats.</p>",
            press_title: "Premsa",
            press_content: "<p>Per a consultes de premsa, entrevistes o sol·licituds de material gràfic, si us plau, contacteu amb el nostre departament de comunicació a <a href='mailto:press@xm-brand.com' class='text-pink-500 hover:underline'>press@xm-brand.com</a>.</p>"
        },
        es: {
            nav_manifesto: "Manifiesto",
            nav_collection: "Colección",
            nav_designer: "Creador",
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
            designer_title: "La Visión de una Creadora",
            designer_quote1: "\"Siempre me ha obsesionado la relación entre el cuerpo y el objeto. Un bolso no es solo un contenedor, es un compañero. Con Sphère, quería explorar una conexión más profunda, casi simbiótica.\"",
            designer_quote2: "Para mí, el diseño debe provocar una emoción, debe ser una pieza de conversación. X'M es el resultado de esta búsqueda: objetos bellos con un alma inesperada.",
            craftsmanship_title: "El Alma de la Artesanía",
            craftsmanship_text: "Cada pieza X'M se construye con paciencia y precisión en talleres artesanos locales. Seleccionamos solo los mejores materiales: pieles de napa suave, acrílicos pulidos a mano y lanas puras. Nuestra cremallera, con su distintivo rosa neón, no es solo un cierre, es una joya diseñada a medida y bañada en oro para garantizar una durabilidad y un deslizamiento perfectos.",
            footer_mission: "Creando objetos de lujo con un alma inesperada. Diseño conceptual y artesanía para la mujer moderna.",
            footer_help: "Ayuda",
            footer_contact: "Contacto",
            footer_faq: "Preguntas Frecuentes (FAQ)",
            footer_shipping: "Envíos y Devoluciones",
            footer_care: "Cuidado del Producto",
            footer_company: "Empresa",
            footer_story: "Nuestra Historia",
            footer_sustainability: "Sostenibilidad",
            footer_press: "Prensa",
            footer_copyright: "© 2025 X'M. Todos los derechos reservados.",
            contact_title: "Contacto",
            contact_name: "Nombre",
            contact_email: "Email",
            contact_message: "Mensaje",
            contact_send: "Enviar Mensaje",
            faq_title: "Preguntas Frecuentes",
            faq_content: "<strong>¿Cuáles son las opciones de envío?</strong><br>Ofrecemos envío estándar y exprés a todo el mundo. Los costes y tiempos de entrega se calculan en la pantalla de pago.<br><br><strong>¿Puedo devolver un producto?</strong><br>Sí, aceptamos devoluciones dentro de los 14 días posteriores a la recepción del pedido. El producto debe estar en perfectas condiciones y con su embalaje original.",
            shipping_title: "Envíos y Devoluciones",
            shipping_content: "<p>Todos los pedidos se procesan en un plazo de 2 días laborables. Los envíos estándar tardan entre 5-7 días laborables, y los exprés entre 1-3 días. Recibirás un número de seguimiento una vez que tu pedido haya sido enviado. Para devoluciones, por favor, contáctanos a través de nuestro formulario de contacto para iniciar el proceso.</p>",
            care_title: "Cuidado del Producto",
            care_content: "<p>Nuestras piezas están hechas con materiales de la más alta calidad. Para mantener su belleza, evita la exposición prolongada a la luz solar directa y a la humedad. Guarda tu bolso en su bolsa guardapolvo cuando no lo uses. Para la limpieza, consulta a un especialista en tratamiento de pieles.</p>",
            story_title: "Nuestra Historia",
            story_content: "<p>X'M nació de un deseo: el de crear objetos que no solo fueran bellos, sino que tuvieran un alma. Fundada por Gemma Juan Garcia, la marca busca desafiar la percepción tradicional del lujo, fusionando el arte conceptual con la artesanía más meticulosa. Cada colección es un capítulo de esta historia, una exploración de formas, texturas y emociones.</p>",
            sustainability_title: "Sostenibilidad",
            sustainability_content: "<p>Estamos comprometidos con un lujo consciente. Trabajamos con talleres locales para minimizar nuestra huella de carbono y garantizar condiciones laborales justas. Priorizamos el uso de materiales responsables y buscamos constantemente maneras de innovar en sostenibilidad, desde nuestro packaging reciclable hasta la selección de pieles de proveedores certificados.</p>",
            press_title: "Prensa",
            press_content: "<p>Para consultas de prensa, entrevistas o solicitudes de material gráfico, por favor, contacten con nuestro departamento de comunicación en <a href='mailto:press@xm-brand.com' class='text-pink-500 hover:underline'>press@xm-brand.com</a>.</p>"
        },
        // Afegeix aquí les traduccions per a fr, it, en...
        fr: { /* ... */ },
        it: { /* ... */ },
        en: { /* ... */ }
    };

    // --- LÒGICA PER CANVIAR D'IDIOMA ---
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
        currentLangText.textContent = lang.toUpperCase();
        const elements = document.querySelectorAll('[data-lang]');
        elements.forEach(el => {
            const key = el.getAttribute('data-lang');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
    }

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
        setTimeout(() => modal.classList.add('active'), 10); // Per a la transició
    }

    function closeModal() {
        const activeModal = document.querySelector('.modal-content.active');
        if (activeModal) {
            activeModal.classList.remove('active');
            setTimeout(() => {
                activeModal.classList.add('hidden');
                modalOverlay.classList.add('hidden');
            }, 300); // Temps de la transició
        }
    }

    modalOverlay.addEventListener('click', closeModal);
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', closeModal);
    });
    // --- LÒGICA DEL FORMULARI DE CONTACTE ---
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', async function(e) { // Usar async para await fetch
        e.preventDefault();
        
        const formData = new FormData(contactForm); // Recoge los datos del formulario

        try {
            const response = await fetch("https://formspree.io/f/xnnvyzpb", { // URL de Formspree
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                alert("Missatge enviat amb èxit!"); // Mensaje de éxito
                contactForm.reset(); // Limpia el formulario
                closeModal();
            } else {
                const data = await response.json();
                if (data.errors) {
                    alert(data.errors.map(error => error.message).join(", "));
                } else {
                    alert("Hi ha hagut un error en enviar el missatge.");
                }
            }
        } catch (error) {
            alert("Hi ha hagut un error de xarxa en enviar el missatge.");
        }
    });
    // --- LÒGICA D'ANIMACIONS ---
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
