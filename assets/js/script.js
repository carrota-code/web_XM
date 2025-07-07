document.addEventListener('DOMContentLoaded', function() {

    // ... (el teu objecte translations complet aquí)
    const translations = {
        ca: {
            nav_manifesto: "Manifest",
            nav_collection: "COL·LECCIÓ",
            nav_contact: "Contacte",
            nav_craftsmanship: "ARTESANIA",
            collection_sphere: "Col·lecció Sphère",
            collection_manchon: "Manchon Connect",
            collection_disc: "Col·lecció Disc",
            hero_slogan: "L'art de portar un secret.",
            manifesto_title: "El Nostre Manifest",
            manifesto_text: "X'M neix a la intersecció de l'artesania i el concepte. Creiem en un luxe que no crida, sinó que xiuxiueja. En peces que no només vesteixen, sinó que dialoguen amb qui les porta. Cada disseny és una declaració d'intencions: una fusió d'elegància atemporal i una audàcia que desafia el present. No creem accessoris, creem secrets per compartir.",
            collection_title: "Col·lecció Sphère",
            collection_subtitle: "La nostra primera col·lecció explora la forma perfecta: l'esfera. Un univers tancat que amaga una funcionalitat íntima i radical.",
            noir_title: "Sphère Noir",
            noir_desc: "Més que un bolso, una declaració. Revestit de la més suau pell de conill negra, és una experiència tàctil inoblidable.",
            icon_title: "Sphère Icon",
            icon_desc: "Un disseny gràfic que reinterpreta un clàssic universal sota el prisma del luxe, alternant pell napa blanca i ant negre.",
            lucid_title: "Sphère Lucid",
            lucid_desc: "Un exercici d'honestedat radical. Una esfera d'acrílic transparent per a la dona que no té res a amagar.",
            strike_title: "Sphère Strike",
            strike_desc: "Una picada d'ullet a la cultura pop. Pell de xarol negre d'alta brillantor que evoca una bola de bitlles de luxe.",
            niu_title: "Sphère Niu",
            niu_desc: "Un retorn a l'essència, embolicat en fil de llana merino XXL. El luxe és calidesa i confort.",
            manchon_title: "Manchon Connect",
            manchon_subtitle: "La fusió perfecta entre calidesa, tecnologia i estil urbà.",
            manchon_product_title: "Manchon Connect",
            manchon_desc: "La calidesa urbana es troba amb la connectivitat en el Manchon Connect. Aquest disseny reinventa el clàssic calentador de mans, oferint un refugi de suau pel sintètic i un innovador butxaca exterior per mantenir el teu mòbil segur i sempre accessible.",
            disc_title: "Col·lecció Disc",
            disc_subtitle: "Geometria pura i disseny unisex per a l'explorador urbà.",
            disc_product_title: "Disc",
            disc_desc: "Disc és un exercici de minimalisme funcional. La seva forma de disc perfecte, realitzada en pell negra mat, ofereix una silueta neta i contundent. La corretja híbrida de pell i niló tècnic garanteix comoditat i durabilitat, mentre que el logo en alt relleu i la cremallera rosa neó aporten el segell inconfusible de X'M.",
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
            contact_name: "Nom",
            contact_email: "Email",
            contact_message: "Missatge",
            contact_send: "Enviar Missatge",
            cart_title: "De compres...",
            cart_message: "Digues el teu desig i te'l farem realitat.",
            cart_product: "Producte d'interès",
            faq_title: "Preguntes Freqüents",
            faq_content: "<strong>Quines són les opcions d'enviament?</strong><br>Oferim enviament estàndard i exprés a tot el món. Els costos i temps de lliurament es calculen a la pantalla de pagament.<br><br><strong>Puc retornar un producte?</strong><br>Sí, acceptem devolucions dins dels 14 dies posteriors a la recepció de la comanda. El producte ha d'estar en perfectes condicions i amb el seu embalatge original.",
            care_title: "Cura del Producte",
            care_content: "<p>Les nostres peces estan fetes amb materials de la més alta qualitat. Per mantenir la seva bellesa, evita l'exposició prolongada a la llum solar directa i a la humitat. Guarda el teu bolso a la seva bossa guardapols quan no l'utilitzes. Per a la neteja, consulta un especialista en tractament de pells.</p>",
            story_title: "La Nostra Història",
            story_content: "<p>X'M va néixer d'un desig: el de crear objectes que no només fossin bells, sinó que tinguessin una ànima. La marca busca desafiar la percepció tradicional del luxe, fusionant l'art conceptual amb l'artesania més meticulosa. Cada col·lecció és un capítol d'aquesta història, una exploració de formes, textures i emocions.</p>",
            sustainability_title: "Sostenibilitat",
            sustainability_content: "<p>Estem compromesos amb un luxe conscient. Treballem amb tallers locals per minimitzar la nostra petjada de carboni i garantir condicions laborals justes. Prioritzem l'ús de materials responsables i busquem constantment maneres d'innovar en sostenibilitat, des del nostro packaging reciclable fins a la selecció de pells de proveïdors certificats.</p>",
            press_title: "Premsa",
            press_content: "<p>Per a consultes de premsa, entrevistes o sol·licituds de material gràfic, si us plau, contacteu amb el nostre departament de comunicació a <a href='mailto:press@xm-brand.com' class='text-pink-500 hover:underline'>press@xm-brand.com</a>.</p>"
        },
        es: {
            nav_manifesto: "Manifiesto",
            nav_collection: "COLECCIÓN",
            nav_contact: "Contacto",
            nav_craftsmanship: "ARTESANÍA",
            collection_sphere: "Colección Sphère",
            collection_manchon: "Manchon Connect",
            collection_disc: "Colección Disc",
            hero_slogan: "El arte de llevar un secreto.",
            manifesto_title: "Nuestro Manifiesto",
            manifesto_text: "X'M nace en la intersección de la artesanía y el concepto. Creemos en un lujo que no grita, sino que susurra. En piezas que no solo visten, sino que dialogan con quien las lleva. Cada diseño es una declaración de intenciones: una fusión de elegancia atemporal y una audacia que desafía el presente. No creamos accesorios, creamos secretos para compartir.",
            collection_title: "Colección Sphère",
            collection_subtitle: "Nuestra primera colección explora la forma perfecta: la esfera. Un universo cerrado que esconde una funcionalidad íntima y radical.",
            noir_title: "Sphère Noir",
            noir_desc: "Más que un bolso, una declaración. Revestido de la más suave piel de conejo negra, es una experiencia táctil inolvidable.",
            icon_title: "Sphère Icon",
            icon_desc: "Un diseño gráfico que reinterpreta un clásico universal bajo el prisma del lujo, alternando piel napa blanca y ante negro.",
            lucid_title: "Sphère Lucid",
            lucid_desc: "Un ejercicio de honestidad radical. Una esfera de acrílico transparente para la mujer que no tiene nada que esconder.",
            strike_title: "Sphère Strike",
            strike_desc: "Un guiño a la cultura pop. Piel de charol negro de alto brillo que evoca una bola de bolos de lujo.",
            niu_title: "Sphère Niu",
            niu_desc: "Un regreso a la esencia, envuelto en hilo de lana merino XXL. El lujo es calidez y confort.",
            manchon_title: "Manchon Connect",
            manchon_subtitle: "La fusión perfecta entre calidez, tecnología y estilo urbano.",
            manchon_product_title: "Manchon Connect",
            manchon_desc: "La calidez urbana se encuentra con la conectividad en el Manchon Connect. Este diseño reinventa el clásico calentador de manos, ofreciendo un refugio de suave pelo sintético y un innovador bolsillo exterior para mantener tu móvil seguro y siempre accesible.",
            disc_title: "Colección Disc",
            disc_subtitle: "Geometría pura y diseño unisex para el explorador urbano.",
            disc_product_title: "Disc",
            disc_desc: "Disc es un ejercicio de minimalismo funcional. Su forma de disco perfecto, realizada en piel negra mate, ofrece una silueta limpia y contundente. La correa híbrida de piel y nailon técnico garantiza comodidad y durabilidad, mientras que el logo en altorrelieve y la cremallera rosa neón aportan el sello inconfundible de X'M.",
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
            contact_name: "Nombre",
            contact_email: "Email",
            contact_message: "Mensaje",
            contact_send: "Enviar Mensaje",
            cart_title: "De compras...",
            cart_message: "Dinos tu deseo y lo haremos realidad.",
            cart_product: "Producto de interés",
            faq_title: "Preguntas Frecuentes",
            faq_content: "<strong>¿Cuáles son las opciones de envío?</strong><br>Ofrecemos envío estándar y exprés a todo el mundo. Los costos y tiempos de entrega se calculan en la pantalla de pago.<br><br><strong>¿Puedo devolver un producto?</strong><br>Sí, aceptamos devoluciones dentro de los 14 días posteriores a la recepción del pedido. El producto debe estar en perfectas condiciones y con su embalaje original.",
            care_title: "Cuidado del Producto",
            care_content: "<p>Nuestras piezas están hechas con materiales de la más alta calidad. Para mantener su belleza, evita la exposición prolongada a la luz solar directa y a la humedad. Guarda tu bolso en su bolsa guardapolvo cuando no lo utilices. Para la limpieza, consulta a un especialista en tratamiento de pieles.</p>",
            story_title: "Nuestra Historia",
            story_content: "<p>X'M nació de un deseo: el de crear objetos que no solo fueran bellos, sino que tuvieran un alma. La marca busca desafiar la percepción tradicional del lujo, fusionando el arte conceptual con la artesanía más meticulosa. Cada colección es un capítulo de esta historia, una exploración de formas, texturas y emociones.</p>",
            sustainability_title: "Sostenibilidad",
            sustainability_content: "<p>Estamos comprometidos con un lujo consciente. Trabajamos con talleres locales para minimizar nuestra huella de carbono y garantizar condiciones laborales justas. Priorizamos el uso de materiales responsables y buscamos constantemente maneras de innovar en sostenibilidad, desde nuestro packaging reciclable hasta la selección de pieles de proveedores certificados.</p>",
            press_title: "Prensa",
            press_content: "<p>Para consultas de prensa, entrevistas o solicitudes de material gráfico, por favor, contacta con nuestro departamento de comunicación en <a href='mailto:press@xm-brand.com' class='text-pink-500 hover:underline'>press@xm-brand.com</a>.</p>"
        },
        fr: {
            nav_manifesto: "Manifeste",
            nav_collection: "COLLECTION",
            nav_contact: "Contact",
            nav_craftsmanship: "ARTISANAT",
            collection_sphere: "Collection Sphère",
            collection_manchon: "Manchon Connect",
            collection_disc: "Collection Disc",
            hero_slogan: "L'art de porter un secret.",
            manifesto_title: "Notre Manifeste",
            manifesto_text: "X'M naît à l'intersection de l'artisanat et du concept. Nous croyons en un luxe qui ne crie pas, mais qui murmure. En des pièces qui ne font que vêtir, mais qui dialoguent avec celle qui les porte. Chaque design est une déclaration d'intentions : une fusion d'élégance intemporelle et une audace qui défie le présent. Nous ne créons pas d'accessoires, nous créons des secrets à partager.",
            collection_title: "Collection Sphère",
            collection_subtitle: "Notre première collection explore la forme parfaite : la sphère. Un univers clos qui cache une fonctionnalité intime et radicale.",
            noir_title: "Sphère Noir",
            noir_desc: "Plus qu'un sac, une déclaration. Recouvert de la plus douce fourrure de lapin noire, c'est une expérience tactile inoubliable.",
            icon_title: "Sphère Icon",
            icon_desc: "Un design graphique qui réinterprète un classique universel sous le prisme du luxe, alternant cuir nappa blanc et daim noir.",
            lucid_title: "Sphère Lucid",
            lucid_desc: "Un exercice d'honnêteté radicale. Une sphère en acrylique transparent pour la femme qui n'a rien à cacher.",
            strike_title: "Sphère Strike",
            strike_desc: "Un clin d'œil à la culture pop. Cuir verni noir très brillant évoquant une boule de bowling de luxe.",
            niu_title: "Sphère Niu",
            niu_desc: "Un retour à l'essence, enveloppé de fil de laine mérinos XXL. Le luxe est chaleur et confort.",
            manchon_title: "Manchon Connect",
            manchon_subtitle: "La fusió perfecta entre chaleur, technologie et style urbain.",
            manchon_product_title: "Manchon Connect",
            manchon_desc: "La chaleur urbaine rencontre la connectivité dans le Manchon Connect. Ce design réinvente le chauffe-mains classique, offrant un refuge en douce fourrure synthétique et une poche extérieure innovante pour garder votre téléphone en sécurité et toujours accessible.",
            disc_title: "Collection Disc",
            disc_subtitle: "Géométrie pure et design unisexe pour l'explorateur urbain.",
            disc_product_title: "Disc",
            disc_desc: "Disc est un exercice de minimalisme fonctionnel. Sa forme de disque parfait, en cuir noir mat, offre une silhouette nette et puissante. La sangle hybride en cuir et nylon technique assure confort et durabilité, tandis que le logo en relief et la fermeture éclair rose néon apportent le sceau inimitable de X'M.",
            craftsmanship_title: "L'Âme de l'Artisanat",
            craftsmanship_text: "Chaque pièce X'M est construite avec patience et précision dans des ateliers artisanaux locaux. Nous sélectionnons uniquement les meilleurs matériaux : cuirs nappa souples, acryliques polis à la main et laines pures. Notre fermeture éclair, avec son rose néon distinctif, n'est pas seulement une fermeture, c'est un bijou conçu sur mesure et plaqué or pour garantir une durabilité et un glissement parfaits.",
            footer_mission: "Créer des objets de luxe avec une âme inattendue. Design conceptuel et artisanat pour la femme moderne.",
            footer_help: "Aide",
            footer_contact: "Contact",
            footer_faq: "Foire aux Questions (FAQ)",
            footer_care: "Entretien du Produit",
            footer_company: "Entreprise",
            footer_story: "Notre Histoire",
            footer_sustainability: "Durabilité",
            footer_press: "Presse",
            footer_copyright: "© 2025 X'M. Tous droits réservés.",
            contact_title: "Contact",
            contact_name: "Nom",
            contact_email: "Email",
            contact_message: "Message",
            contact_send: "Envoyer le Message",
            cart_title: "Faire des achats...",
            cart_message: "Dis-nous ton souhait et nous le réaliserons.",
            cart_product: "Produit d'intérêt",
            faq_title: "Foire aux Questions",
            faq_content: "<strong>Quelles sont les options d'expédition ?</strong><br>Nous offrons l'expédition standard et express dans le monde entier. Les coûts et les délais de livraison sont calculés à la caisse.<br><br><strong>Puis-je retourner un produit ?</strong><br>Oui, nous acceptons les retours dans les 14 jours suivant la réception de la commande. Le produit doit être en parfait état et dans son emballage d'origine.",
            care_title: "Entretien du Produit",
            care_content: "<p>Nos pièces sont fabriquées avec des matériaux de la plus haute qualité. Pour maintenir leur beauté, évitez une exposition prolongée à la lumière directe du soleil et à l'humidité. Rangez votre sac dans sa housse de protection lorsque vous ne l'utilisez pas. Pour le nettoyage, consultez un spécialiste du traitement du cuir.</p>",
            story_title: "Notre Histoire",
            story_content: "<p>X'M est née d'un désir : celui de créer des objets qui ne soient pas seulement beaux, mais qui aient une âme. La marque cherche à défier la perception traditionnelle du luxe, en fusionnant l'art conceptuel avec l'artisanat le plus méticuleux. Chaque collection est un chapitre de cette histoire, une exploration de formes, de textures et d'émotions.</p>",
            sustainability_title: "Durabilité",
            sustainability_content: "<p>Nous nous engageons pour un luxe conscient. Nous travaillons avec des ateliers locaux pour minimiser notre empreinte carbone et garantir des conditions de travail équitables. Nous privilégions l'utilisation de matériaux responsables et cherchons constamment des moyens d'innover en matière de durabilité, de notre emballage recyclable à la sélection de cuirs de fournisseurs certifiés.</p>",
            press_title: "Presse",
            press_content: "<p>Pour les demandes de presse, interviews ou demandes de matériel graphique, veuillez contacter notre service de communication à <a href='mailto:press@xm-brand.com' class='text-pink-500 hover:underline'>press@xm-brand.com</a>.</p>"
        },
        it: {
            nav_manifesto: "Manifesto",
            nav_collection: "COLLEZIONE",
            nav_contact: "Contatto",
            nav_craftsmanship: "ARTIGIANATO",
            collection_sphere: "Collezione Sphère",
            collection_manchon: "Manchon Connect",
            collection_disc: "Collezione Disc",
            hero_slogan: "L'arte di portare un segreto.",
            manifesto_title: "Il Nostro Manifesto",
            manifesto_text: "X'M nasce all'intersezione tra artigianato e concetto. Crediamo in un lusso che non urla, ma sussurra. In pezzi che non solo vestono, ma dialogano con chi li indossa. Ogni design è una dichiarazione d'intenti: una fusione di eleganza senza tempo e un'audacia che sfida il presente. Non creiamo accessori, creiamo segreti da condividere.",
            collection_title: "Collezione Sphère",
            collection_subtitle: "La nostra prima collezione esplora la forma perfetta: la sfera. Un universo chiuso che nasconde una funzionalità intima e radicale.",
            noir_title: "Sphère Noir",
            noir_desc: "Più che una borsa, una dichiarazione. Rivestita della più morbida pelliccia di coniglio nera, è un'esperienza tattile indimenticabile.",
            icon_title: "Sphère Icon",
            icon_desc: "Un design grafico che reinterpreta un classico universale sotto el prisma del lusso, alternando pelle nappa bianca e camoscio nero.",
            lucid_title: "Sphère Lucid",
            lucid_desc: "Un esercizio di onestà radicale. Una sfera in acrilico trasparente per la donna che non ha nulla da nascondere.",
            strike_title: "Sphère Strike",
            strike_desc: "Un omaggio alla cultura pop. Pelle verniciata nera ad alta lucentezza che evoca una palla da bowling di lusso.",
            niu_title: "Sphère Niu",
            niu_desc: "Un ritorno all'essenza, avvolto in filato di lana merino XXL. Il lusso è calore e comfort.",
            manchon_title: "Manchon Connect",
            manchon_subtitle: "La fusione perfetta entre calore, tecnologia e stile urbano.",
            manchon_product_title: "Manchon Connect",
            manchon_desc: "Il calore urbano incontra la connettività nel Manchon Connect. Questo design reinventa el classico scaldamani, offrendo un rifugio di morbida pelliccia sintetica e un'innovativa tasca esterna per mantenere el tuo cellulare sicuro e sempre accessibile.",
            disc_title: "Collezione Disc",
            disc_subtitle: "Geometria pura e design unisex per l'esploratore urbano.",
            disc_product_title: "Disc",
            disc_desc: "Disc è un esercizio di minimalismo funzionale. La sua forma a disco perfetto, realizzata in pelle nera opaca, offre una silhouette pulita e decisa. La tracolla ibrida in pelle e nylon tecnico garantisce comfort e resistenza, mentre el logo in rilievo e la cerniera rosa neon aggiungono el sigillo inconfondibile di X'M.",
            craftsmanship_title: "L'Anima dell'Artigianato",
            craftsmanship_text: "Ogni pezzo X'M è costruito con pazienza e precisione in laboratori artigianali locali. Selezioniamo solo i migliori materiali: pelli nappa morbide, acrilici lucidati a mano e lane pure. La nostra cerniera, con el suo distintivo rosa neon, non è solo una chiusura, è un gioiello progettato su misura e placcato oro per garantire una durata e uno scorrimento perfetti.",
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
            contact_name: "Nome",
            contact_email: "Email",
            contact_message: "Messaggio",
            contact_send: "Invia Messaggio",
            cart_title: "Shopping...",
            cart_message: "Dicci el tuo desiderio e lo renderemo realtà.",
            cart_product: "Prodotto di interesse",
            faq_title: "Domande Frequenti",
            faq_content: "<strong>Quali sono le opzioni di spedizione?</strong><br>Offriamo spedizione standard ed espressa in tutto el mondo. I costi e i tempi di consegna vengono calcolati al momento del pagamento.<br><br><strong>Posso restituire un prodotto?</strong><br>Sí, acceptem devolucions dins dels 14 dies posteriors a la recepció de la comanda. El producte ha d'estar en perfectes condicions i amb el seu embalatge original.",
            care_title: "Cura del Prodotto",
            care_content: "<p>I nostri pezzi sono realizzati con materiali della più alta qualità. Per mantenere la sua bellezza, evita l'exposición prolongada a la llum solar directa i a la humitat. Guarda el tuo bolso a la seva bossa guardapols quan no l'utilitzes. Per a la neteja, consulta un especialista en tractament de pells.</p>",
            story_title: "La Nostra Storia",
            story_content: "<p>X'M va néixer d'un desig: el de crear objectes que no només fossin bells, sinó que tinguessin una ànima. La marca busca desafiar la percepció tradicional del luxe, fusionant l'artesanato concettuale con l'artigianato più meticoloso. Ogni collezione és un capítol de questa història, un'esplorazione de formes, texture ed emozioni.</p>",
            sustainability_title: "Sostenibilità",
            sustainability_content: "<p>Siamo impegnati in un lusso consapevole. Lavoriamo con laboratori locali per ridurre al minimo la nostra impronta di carbonio e garantire condizioni di lavoro eque. Diamo priorità all'uso di materiali responsabili e cerchiamo costantemente modi per innovare nella sostenibilità, dal nostro imballaggio riciclabile alla selezione di pelli da fornitori certificati.</p>",
            press_title: "Stampa",
            press_content: "<p>Per richieste stampa, interviste o richieste di materiale grafico, si prega di contactare el nostro ufficio comunicazione a <a href='mailto:press@xm-brand.com' class='text-pink-500 hover:underline'>press@xm-brand.com</a>.</p>"
        },
        en: {
            nav_manifesto: "Manifesto",
            nav_collection: "COLLECTION",
            nav_contact: "Contact",
            nav_craftsmanship: "CRAFTSMANSHIP",
            collection_sphere: "Sphère Collection",
            collection_manchon: "Manchon Connect",
            collection_disc: "Disc Collection",
            hero_slogan: "The art of carrying a secret.",
            manifesto_title: "Our Manifesto",
            manifesto_text: "X'M is born at the intersection of craftsmanship and concept. We believe in a luxury that doesn't shout, but whispers. In pieces that don't just dress, but dialogue with the wearer. Each design is a statement of intent: a fusion of timeless elegance and an audacity that challenges the present. We don't create accessories, we create secrets to share.",
            collection_title: "Sphère Collection",
            collection_subtitle: "Our first collection explores the perfect form: the sphere. A closed universe that hides an intimate and radical functionality.",
            noir_title: "Sphère Noir",
            noir_desc: "More than a handbag, a statement. Covered in the softest black rabbit fur, it's an unforgettable tactile experience.",
            icon_title: "Sphère Icon",
            icon_desc: "A graphic design that reinterprets a universal classic through the prism of luxury, alternating white nappa leather and black suede.",
            lucid_title: "Sphère Lucid",
            lucid_desc: "An exercise in radical honesty. A transparent acrylic sphere for the woman who has nothing to hide.",
            strike_title: "Sphère Strike",
            strike_desc: "A nod to pop culture. High-gloss black patent leather that evokes a luxurious bowling ball.",
            niu_title: "Sphère Niu",
            niu_desc: "A return to essence, wrapped in XXL merino wool yarn. Luxury is warmth and comfort.",
            manchon_title: "Manchon Connect",
            manchon_subtitle: "The perfect fusion of warmth, technology, and urban style.",
            manchon_product_title: "Manchon Connect",
            manchon_desc: "Urban warmth meets connectivity in the Manchon Connect. This design reinventsthe classic hand warmer, offering a sanctuary of soft synthetic fur and an innovative exterior pocket to keep your mobile safe and always accessible.",
            disc_title: "Disc Collection",
            disc_subtitle: "Pure geometry and unisex design for the urban explorer.",
            disc_product_title: "Disc",
            disc_desc: "Disc is an exercise in functional minimalism. Its perfect disc shape, crafted from matte black leather, offers a clean and powerful silhouette. The hybrid leather and technical nylon strap ensures comfort and durability, while the embossed logo and neon pink zipper provide the unmistakable X'M seal.",
            craftsmanship_title: "The Soul of Craftsmanship",
            craftsmanship_text: "Each X'M piece is built with patience and precision in local artisan workshops. We select only the finest materials: soft nappa leathers, hand-polished acrylics, and pure wools. Our zipper, with its distinctive neon pink, is not just a closure, it's a custom-designed, gold-plated jewel to ensure perfect durability and glide.",
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
            contact_name: "Name",
            contact_email: "Email",
            contact_message: "Message",
            contact_send: "Send Message",
            cart_title: "Shopping...",
            cart_message: "Tell us your desire and we'll make it a reality.",
            cart_product: "Product of interest",
            faq_title: "Frequently Asked Questions",
            faq_content: "<strong>What are the shipping options?</strong><br>We offer standard and express worldwide shipping. Costs and delivery times are calculated at checkout.<br><br><strong>Can I return a product?</strong><br>Yes, we accept returns within 14 days of receiving the order. The product must be in perfect condition and with its original packaging.",
            care_title: "Product Care",
            care_content: "<p>Our pieces are made with the highest quality materials. To maintain their beauty, avoid prolonged exposure to direct sunlight and humidity. Store your bag in its dust bag when not in use. For cleaning, consult a leather treatment specialist.</p>",
            story_title: "Our Story",
            story_content: "<p>X'M was born from a desire: to create objects that were not only beautiful, but had a soul. The brand seeks to challenge the traditional perception of luxury, fusing conceptual art with the most meticulous craftsmanship. Each collection is a chapter in this story, an exploration of forms, textures, and emotions.</p>",
            sustainability_title: "Sustainability",
            sustainability_content: "<p>We are committed to conscious luxury. We work with local workshops to minimize our carbon footprint and guarantee fair labor conditions. We prioritize the use of materials responsible and constantly seek ways to innovate in sustainability, from our recyclable packaging to the selection of leathers from certified suppliers.</p>",
            press_title: "Press",
            press_content: "<p>For press inquiries, interviews, or graphic material requests, please contact our communication department at <a href='mailto:press@xm-brand.com' class='text-pink-500 hover:underline'>press@xm-brand.com</a>.</p>"
        }
    };

    // --- VARIABLES GLOBALS PER ALS MODALS I ELEMENTS ---
    const cartProductDropdown = document.getElementById('cart-product');

    // --- FUNCIÓ PER OMPLIR EL DESPLEGABLE DE PRODUCTES ---
    function populateProductDropdown() {
        if (!cartProductDropdown) {
             console.warn("Element #cart-product no trobat. No es pot omplir el desplegable de productes.");
             return;
        }

        // Buidar les opcions existents
        cartProductDropdown.innerHTML = '<option value="" disabled selected>-- Selecciona un producte --</option>';

        const productTitles = document.querySelectorAll('[data-lang$="_title"]');
        const currentLang = document.documentElement.lang;

        const products = [];
        productTitles.forEach(el => {
            const key = el.getAttribute('data-lang');
            if (key.includes('_title') && !['manifesto_title', 'collection_title', 'manchon_title', 'disc_title', 'craftsmanship_title', 'faq_title', 'care_title', 'story_title', 'sustainability_title', 'press_title', 'contact_title', 'cart_title', 'hero_slogan'].includes(key)) {
                let productName = translations[currentLang]?.[key] || translations['ca'][key] || el.textContent;
                if (productName) {
                    products.push(productName);
                }
            }
        });

        const uniqueProducts = [...new Set(products)].sort();

        uniqueProducts.forEach(product => {
            const option = document.createElement('option');
            option.value = product;
            option.textContent = product;
            cartProductDropdown.appendChild(option);
        });
    }


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
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            } else if (translations['ca'] && translations['ca'][key]) {
                el.innerHTML = translations['ca'][key];
            }
        });
        populateProductDropdown();
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

    // --- LÒGICA DEL FORMULARI DE CONTACTE (ARA AMB FORMSPREE) ---
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            const form = e.target;
            const formData = new FormData(form);

            try {
                const response = await fetch(form.action, {
                    method: form.method,
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    },
                    redirect: 'manual' // <--- AFEGIM AQUESTA LÍNIA CLAU
                });

                // Amb redirect: 'manual', Formspree hauria de respondre amb status 200 (si no hi ha redireccions posteriors)
                // o 302 si redirigeix. Si és 302, response.ok serà false, però l'enviament haurà estat un èxit.
                // La forma més fiable és buscar el status 200 de la resposta JSON de Formspree.
                // En alguns casos, Formspree pot respondre amb 200 directament amb data-formspree="json"
                // sense una redirecció visible al fetch.
                if (response.status === 200) { // Canviat de response.ok && response.status === 200
                    alert('Missatge enviat correctament! Gràcies per contactar amb X\'M.');
                    form.reset();
                    closeModal();
                } else {
                    // Intentar obtenir un missatge d'error de la resposta JSON de Formspree
                    let errorDetails = 'Error desconegut.';
                    try {
                        const errorJson = await response.json();
                        if (errorJson && errorJson.errors) {
                            errorDetails = errorJson.errors.map(err => err.message).join(', ');
                        } else if (errorJson && errorJson.message) {
                            errorDetails = errorJson.message;
                        }
                    } catch (jsonError) {
                        // Si no es pot parsejar el JSON, potser és un error de xarxa o Formspree ha respost diferent.
                        console.error('No es pot parsejar la resposta d\'error com a JSON:', jsonError);
                        errorDetails = `Estat HTTPS: ${response.status} ${response.statusText}`;
                    }
                    console.error('Error al enviar el formulario (Formspree response):', response.status, errorDetails);
                    alert(`Hi ha hagut un error en enviar el missatge. Si us plau, torna a intentar-ho més tard. Detalls: ${errorDetails}`);
                }
            } catch (error) {
                console.error('Error en la connexió al enviar el formulario (catch):', error);
                alert('Hi ha hagut un error en la comunicació. Si us plau, comprova la teva connexió a internet i torna a intentar-ho.');
            }
        });
    }

    // --- LÒGICA DEL FORMULARI DEL CARRET (NOU I AMB FORMSPREE) ---
    const cartForm = document.getElementById('cart-form');

    // Event listener per al formulari del carret
    if (cartForm) {
        cartForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            const form = e.target;
            const formData = new FormData(form);

            try {
                const response = await fetch(form.action, {
                    method: form.method,
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    },
                    redirect: 'manual' // <--- AFEGIM AQUESTA LÍNIA CLAU
                });

                if (response.status === 200) { // Canviat de response.ok && response.status === 200
                    alert('La teva sol·licitud ha estat enviada! Aviat ens posarem en contacte amb tu per al teu desig.');
                    form.reset();
                    closeModal();
                } else {
                    let errorDetails = 'Error desconegut.';
                    try {
                        const errorJson = await response.json();
                        if (errorJson && errorJson.errors) {
                            errorDetails = errorJson.errors.map(err => err.message).join(', ');
                        } else if (errorJson && errorJson.message) {
                            errorDetails = errorJson.message;
                        }
                    } catch (jsonError) {
                        console.error('No es pot parsejar la resposta d\'error com a JSON (carret):', jsonError);
                        errorDetails = `Estat HTTPS: ${response.status} ${response.statusText}`;
                    }
                    console.error('Error al enviar la sol·licitud (Formspree response carret):', response.status, errorDetails);
                    alert(`Hi ha hagut un error en enviar la sol·licitud. Si us plau, torna a intentar-ho més tard. Detalls: ${errorDetails}`);
                }
            } catch (error) {
                console.error('Error en la connexió al enviar el formulario del carrito (catch):', error);
                alert('Hi ha hagut un error en la comunicació. Si us plau, comprova la teva connexió a internet i torna a intentar-ho.');
            }
        });
    }


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

    // --- INICIALITZACIÓ DEL CARRUSEL ---
    const swiperWrapper = document.querySelector('.product-carousel .swiper-wrapper');
    if (swiperWrapper) {
        const slidesData = [
            { src: 'assets/images/disc.png', alt: 'Bolso DISC' },
            { src: 'assets/images/sphere_icon.png', alt: 'Bolso Sphère Icon' },
            { src: 'assets/images/manchon_connect.png', alt: 'Bolso Manchon Connect' },
            { src: 'assets/images/sphere_noir.png', alt: 'Bolso Sphère Noir' },
            { src: 'assets/images/sphere_lucid.png', alt: 'Bolso Sphère Lucid' },
            { src: 'assets/images/sphere_strike.png', alt: 'Bolso Sphère Strike' },
            { src: 'assets/images/sphere_niu.png', alt: 'Bolso Sphère Niu' }
        ];

        // Aleatoritzar l'array de slides
        for (let i = slidesData.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [slidesData[i], slidesData[j]] = [slidesData[j], slidesData[i]];
        }

        // Buidar el contenidor i tornar a omplir amb l'ordre aleatori
        swiperWrapper.innerHTML = '';
        slidesData.forEach(data => {
            const newSlide = document.createElement('div');
            newSlide.className = 'swiper-slide';
            const img = document.createElement('img');
            img.src = data.src;
            img.alt = data.alt;
            newSlide.appendChild(img);
            swiperWrapper.appendChild(newSlide);
        });

        var swiper = new Swiper('.product-carousel', {
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 3,
            loop: true,
            speed: 500,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            coverflowEffect: {
                rotate: 0,
                stretch: 50,
                depth: 100,
                modifier: 1,
                slideShadows: false,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }

});
