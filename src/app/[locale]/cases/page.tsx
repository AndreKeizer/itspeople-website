"use client";

import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { asset } from "@/lib/basePath";

const data = {
  nl: {
    tag: "Case Studies",
    heading1: "Bewezen",
    heading2: "resultaat",
    intro: "Van strategie tot realisatie, bekijk hoe wij organisaties hebben geholpen bij hun complexe transformaties.",
    caseItems: [
      {
        slug: "rvo-nglb-implementatie",
        sector: "Overheid / Landbouw",
        title: "RVO: implementatie van het nieuwe Gemeenschappelijk Landbouwbeleid (nGLB)",
        challenge: "Met het nieuwe Gemeenschappelijk Landbouwbeleid (GLB) van de Europese Unie is Nederland verplicht om een fundamenteel vernieuwde uitvoering van landbouwsubsidies, vergroening en plattelandsontwikkeling neer te zetten. Voor de Rijksdienst voor Ondernemend Nederland (RVO) betekent dit een meerjarige transformatie waarin juridische verplichtingen, nieuwe regelingen, verduurzaming van de sector en een volledige digitale uitvoering samen moeten komen. De complexiteit is aanzienlijk: het programma nGLB raakt een brede keten van partijen, waaronder het ministerie van Landbouw, Natuur en Voedselkwaliteit (LNV), de twaalf provincies, de waterschappen en de NVWA. Elke partij heeft eigen verantwoordelijkheden, eigen systemen en eigen belangen. Tegelijkertijd moeten tienduizenden agrarische ondernemers op tijd, uitlegbaar en rechtmatig worden bediend, binnen strikte Europese deadlines en onder toezicht van de Europese Commissie en nationale auditinstanties. Een kleine fout in de uitvoering of een gemiste ketenafhankelijkheid kan direct leiden tot vertraging van uitbetalingen, financiële correcties vanuit Brussel of juridische procedures van aanvragers.",
        approach: "ITsPeople ondersteunt RVO bij de sturing en oplevering van het programma nGLB. Vanuit het pyramide-principe hebben wij samen met de opdrachtgever de kernboodschap scherp geformuleerd: een tijdige, uitlegbare en controleerbare implementatie van het nieuwe GLB voor alle betrokken ketenpartners. Vanuit die kernboodschap hebben wij een gefaseerde aanpak opgezet waarin juridische verplichtingen, nieuwe regelingen, verduurzaming van de sector en de digitale uitvoering integraal samenkomen. Wij leverden programma- en projectmanagement, business analyse en control-expertise aan meerdere workstreams, bewaakten afhankelijkheden tussen RVO, LNV, de provincies, de waterschappen en de NVWA, en richtten een besturingsritme in waarin directie en stuurgroep op basis van feiten konden sturen op scope, planning, risico's en baten. Bijzondere aandacht ging uit naar ketenregie, datakwaliteit, auditbaarheid en de communicatie richting ketenpartners en eindbegunstigden. De eindpresentatie in het atrium van RVO markeerde een belangrijke mijlpaal in de oplevering van fase 2 (GLB 23-27) en bevestigde het beeld dat een complexe, multi-stakeholder transformatie daadwerkelijk tot resultaat kan worden gebracht.",
        results: [
          "Fase 2 GLB 23-27 succesvol opgeleverd en gepresenteerd",
          "Integrale ketenaanpak met LNV, provincies, waterschappen en NVWA geborgd",
          "Juridische verplichtingen, nieuwe regelingen en verduurzaming samengebracht in één uitvoering",
          "Gefaseerde, controleerbare implementatie op koers gehouden binnen Europese kaders",
          "Stuurgroep en directie in control op scope, planning, risico's en baten",
        ],
        image: asset("/images/cases/nglb-stage.jpg"),
        gallery: [
          { src: asset("/images/cases/nglb-audience.jpg"), alt: "Publiek tijdens de eindpresentatie van het programma nGLB in het RVO-atrium" },
          { src: asset("/images/cases/nglb-speaker-field.jpg"), alt: "Spreker licht gewasclassificatie en maaien/beweiden toe tijdens de nGLB-eindpresentatie" },
          { src: asset("/images/cases/nglb-speaker-scope.jpg"), alt: "Spreker presenteert doel en scope van fase 2 GLB 23-27" },
        ],
        testimonial: "De implementatie van het nieuwe GLB vraagt om strakke sturing, ketenregie en het vermogen om juridische, beleidsmatige en digitale sporen bij elkaar te houden. ITsPeople heeft daar wezenlijk aan bijgedragen.",
        testimonialAuthor: "Programmamanager nGLB",
        testimonialOrg: "Rijksdienst voor Ondernemend Nederland",
      },
      {
        slug: "amc-hackathon-data-feedback-ok",
        sector: "Zorg / Innovatie",
        title: "Amsterdam UMC (AMC): Hackathon 'Code to make a difference' in het skills lab",
        challenge: "In het opleidings- en skills lab van het Amsterdam UMC (AMC) komen chirurgen, opleiders en technologie samen om de kwaliteit van laparoscopische ingrepen verder te verbeteren. De vraag was concreet: kunnen we chirurgen tijdens het oefenen live en objectief feedback geven op basis van data uit de operatie, in plaats van achteraf op basis van subjectieve observaties? Een dergelijke oplossing moet in een medische setting vanaf de eerste seconde betrouwbaar, uitlegbaar en bruikbaar zijn: de informatie mag geen afleiding zijn voor de chirurg, moet passen in het klinische werkproces en moet aantoonbaar voldoende nauwkeurig zijn om op te kunnen sturen. Tegelijkertijd speelt een complex ecosysteem aan partijen: het ziekenhuis zelf, opleiders, medisch-technische leveranciers, dataplatformen en softwarepartners. Om dit soort innovaties snel te toetsen, zonder de reguliere zorg te verstoren, is een geconcentreerde, multidisciplinaire aanpak nodig, precies waar een hackathon zich voor leent.",
        approach: "Samen met het Amsterdam UMC en onze partners FormsVision, SOA en Gelre ziekenhuizen organiseerde ITsPeople een hackathon onder het motto 'Code to make a difference' in het skills lab van het AMC. Vanuit het pyramide-principe stelden we vooraf de kernboodschap vast: bewijzen dat data uit de operatiekamer omgezet kan worden in real-time, betrouwbare feedback voor de chirurg tijdens het oefenen. Binnen een strak tijdsvenster werden multidisciplinaire teams gevormd van chirurgen, data scientists, software engineers en business analisten. Wij leverden de programma- en projectregie, de facilitatie van de teams, de koppeling met de klinische use case en de bewaking van scope, governance en uitlegbaarheid. Tijdens de hackathon zijn live data vanuit de laparoscopische opstellingen ontsloten, verwerkt en terug-geleid in een feedbackloop richting de chirurg. Resultaten werden iteratief getoetst tegen de beoordeling van de ervaren opleiders in het skills lab, zodat we konden vaststellen hoe goed de data-gedreven feedback aansloot bij het oordeel van de mens. De aanpak liet zien hoe strategische innovatie, ketensamenwerking en hands-on uitvoering elkaar in één sessie kunnen versterken.",
        results: [
          "90% betrouwbare real-time feedback op basis van data uit de operatiekamer",
          "Chirurgen tijdens het oefenen live voorzien van objectieve feedback",
          "Bewezen use case voor data-gedreven skills training in het opleidings-/skills lab",
          "Succesvolle samenwerking tussen Amsterdam UMC, ITsPeople, FormsVision, SOA en Gelre ziekenhuizen",
          "Fundament gelegd voor verdere opschaling van AI- en datatoepassingen in de OK-omgeving",
        ],
        image: asset("/images/cases/amc-hackathon-team.jpg"),
        video: asset("/videos/amc-hackathon-patient-safety.mp4"),
        videoPoster: asset("/images/cases/amc-hackathon-team.jpg"),
        videoLabel: "Bekijk de video: Patient Safety Hackathon Amsterdam UMC",
        gallery: [
          { src: asset("/images/cases/amc-hackathon-skillslab.jpg"), alt: "Oefensessie in het skills lab van het Amsterdam UMC tijdens de hackathon" },
          { src: asset("/images/cases/amc-hackathon-banners.jpg"), alt: "Hackathon 'Code to make a difference' met banners van ITsPeople, Amsterdam UMC, FormsVision, SOA en Gelre ziekenhuizen" },
          { src: asset("/images/cases/amc-hackathon-laparoscopy.jpg"), alt: "Laparoscopische oefensessie met live beeld en data-feedback tijdens de hackathon" },
        ],
        testimonial: "Deze hackathon heeft laten zien dat data-gedreven, real-time feedback in de OK geen toekomstmuziek is. We konden chirurgen tijdens het oefenen al live voorzien van betrouwbare informatie.",
        testimonialAuthor: "Chirurg-opleider",
        testimonialOrg: "Amsterdam UMC",
      },
      {
        slug: "geldmaat-cash-infrastructuur",
        sector: "Financiële Sector",
        title: "Geldmaat: neerzetten van een landelijke cash-infrastructuur",
        challenge: "Geldmaat kreeg als opdracht van de drie Nederlandse grootbanken (ABN AMRO, ING en Rabobank) om een volledig nieuwe, neutrale cash-infrastructuur voor Nederland op te zetten. Duizenden geldautomaten, afstortkluizen en stortingsautomaten moesten worden overgedragen van de individuele banken, samengevoegd en geharmoniseerd onder één merk, één besturingsmodel en één technologiestack. Dit alles terwijl de chartale dienstverlening voor miljoenen Nederlandse consumenten, MKB-ondernemers en grootzakelijke klanten onverstoord door moest blijven draaien. De uitdaging was meerledig. Ten eerste diende de continuïteit van de chartale dienstverlening gegarandeerd te worden: elke uitval raakt direct de portemonnee van de Nederlandse burger en zet het vertrouwen in het betalingsverkeer onder druk. Ten tweede moest een fors kostenreductieprogramma worden gerealiseerd door het bundelen van automaten, het optimaliseren van locaties en het herinrichten van de waardeketen van cash. Ten derde speelde een complex stakeholderveld: DNB als toezichthouder, de drie uitrollende moederbanken als aandeelhouder en opdrachtgever, CIT-partijen voor waardetransport, gemeenten en bewonersorganisaties voor de fysieke locatie-afweging, en belangenorganisaties die de toegankelijkheid van cash voor kwetsbare groepen bewaakten vanuit het Convenant Contant Geld. Ten vierde moest Geldmaat als nieuwe organisatie zelf nog worden opgebouwd: processen, mensen, systemen en governance moesten parallel aan de uitrol op volwassenheid worden gebracht.",
        approach: "ITsPeople leverde een multidisciplinair team van programma-, project- en verandermanagers, business analisten en control-experts dat vanuit het Transition Support Office de regie voerde op de uitrol. Vanuit de pyramide-aanpak startten wij met het scherp stellen van de kernboodschap richting directie en aandeelhouders: één neutrale, betrouwbare en betaalbare cash-infrastructuur voor Nederland. Vanuit die kernboodschap ontwierpen wij het Target Operating Model voor de nieuwe cash-keten : van vulling, onderhoud en storingsafhandeling tot klantcontact en ketenrapportage, en vertaalden dit naar een gefaseerde migratieroadmap per regio en per bank. Een Business Control Framework gaf directie en stuurgroep real-time inzicht in voortgang, risico's, baten en kosten per tranche, zodat besluitvorming op feiten plaatsvond in plaats van op onderbuikgevoel. Wij coördineerden de samenwerking met CIT-partijen, locatie-eigenaren, gemeenten en belangenorganisaties, en zorgden voor strakke governance op het raakvlak met de drie uitrollende banken. Parallel begeleidden wij de inrichting van het 24/7 service-operations center, de SLA-huishouding met leveranciers en de compliance-borging richting DNB. Risicomanagement was continu, met scenarioplanning voor storingen, beveiligingsincidenten en politieke gevoeligheden. Change management en communicatie richting medewerkers, banken, ondernemers en consumenten waren integraal onderdeel van elke fase, net als kennisoverdracht naar de interne Geldmaat-organisatie zodat het eigenaarschap stap voor stap verschoof.",
        results: ["Landelijke uitrol binnen planning en binnen budget gerealiseerd", "Significante structurele kostenreductie op de cash-keten", "Continuïteit van dienstverlening geborgd tijdens de volledige migratie", "Voldoet aantoonbaar aan DNB-kaders en Convenant Contant Geld", "Eén neutrale, landelijke cash-infrastructuur operationeel", "Geldmaat-organisatie opgebouwd en in control"],
        image: asset("/images/team-discussion.jpg"),
        testimonial: "ITsPeople bracht de rust en de structuur die nodig waren om een operationeel en politiek gevoelig programma van deze omvang te laten slagen. Strategisch scherp, operationeel hands-on.",
        testimonialAuthor: "Programmadirecteur",
        testimonialOrg: "Geldmaat",
      },
      {
        slug: "geldmaat-it-transformatie",
        sector: "Financiële Sector",
        title: "Geldmaat: volledige IT-transformatie & IT-hosting",
        challenge: "Na de oprichting draaide Geldmaat grotendeels op IT-diensten die vanuit de moederbanken werden afgenomen, praktisch voor de start, maar niet houdbaar voor een zelfstandige onderneming die efficiënt, schaalbaar en onafhankelijk moet kunnen opereren. Om deze volwassenheidsslag te maken moest Geldmaat een volledig eigen IT-landschap neerzetten: van kernapplicaties voor monitoring, sturing en onderhoud van de ATM-vloot tot ERP, servicemanagement, identity & access management, datawarehouse en business intelligence, werkplek-IT, connectiviteit en een volledig nieuwe hostingomgeving. De transformatie moest gelijktijdig plaatsvinden met het operationeel houden van de bestaande dienstverlening, de facto een open-hart-operatie, onder strenge eisen rond informatiebeveiliging, BIO-aansluiting, DORA-weerbaarheid, auditbaarheid en strakke kostenbeheersing. Bovendien moest de afhankelijkheid van de moederbanken zorgvuldig worden afgebouwd, zonder verstoring van lopende SLA's en zonder dat kritische kennis verloren ging. Bijkomende complicatie: de leveranciersmarkt voor specialistische ATM-IT is beperkt, en elke wijziging raakte direct duizenden fysieke apparaten verspreid over het hele land.",
        approach: "ITsPeople fungeerde als strategisch partner van de CIO en leverde programma-, project-, architectuur- en control-capaciteit. Wij ontwierpen, volgens de pyramide-principe, allereerst een heldere IT-strategie en IT-operating model met één overkoepelende boodschap: een veilige, schaalbare en betaalbare IT-omgeving die Geldmaat in staat stelt om autonoom en wendbaar te werken. Hieronder definieerden wij de sourcingstrategie voor hosting, managed services en specialistische ATM-partners, inclusief make-or-buy-afwegingen per domein. Een meerjarig transformatieprogramma werd opgezet met duidelijk afgebakende workstreams: een nieuwe hostingomgeving (hybride cloud), migratie van kernsystemen, uitrol van een modern service management-platform, implementatie van identity & access management, opbouw van een data- en monitoringplatform voor de ATM-vloot, vernieuwing van de werkplek en versterking van de cybersecurity-stack. Vanuit het Transition Support Office bewaakten wij afhankelijkheden tussen de workstreams, leveranciers en de business. Wij stuurden op risico's via een Business Control Framework, coördineerden tenders en contractering met hostingpartners en begeleidden de migratie van applicaties met minimale verstoring van de operatie. Security-by-design, DORA-gereedheid, auditbaarheid en kostenbeheersing waren leidend in elk ontwerp. Tot slot ondersteunden wij de HR- en kennisborging: medewerkers werden actief meegenomen in de nieuwe werkwijze, en kritieke expertise werd overgedragen van de moederbanken naar Geldmaat via gestructureerde transitieplannen.",
        results: ["Eigenstandige, schaalbare IT-omgeving gerealiseerd", "Hosting succesvol overgedragen naar nieuwe partners zonder verstoring", "Structureel verlaagde total cost of ownership", "DORA-ready, BIO-aangesloten en auditbaar IT-landschap", "Afhankelijkheid van moederbanken succesvol afgebouwd", "Interne IT-organisatie opgebouwd en in control"],
        image: asset("/images/team-office.jpg"),
        testimonial: "Deze transformatie raakte elk onderdeel van onze IT. ITsPeople hielp ons niet alleen de strategie te bepalen, maar ook om elke dag daadwerkelijk vooruit te komen zonder de winkel te sluiten.",
        testimonialAuthor: "CIO",
        testimonialOrg: "Geldmaat",
      },
      {
        slug: "cak-financieel-systeem",
        sector: "Overheid / Zorg",
        title: "Het CAK: transformatie naar een nieuw financieel systeem",
        challenge: "Het CAK beheert grote publieke geldstromen, onder meer voor de Wet langdurige zorg (Wlz), de Wet maatschappelijke ondersteuning (Wmo) en de buitenlandregelingen. Het bestaande financiële kernsysteem was sterk verouderd, kostbaar in onderhoud, schaars in beschikbare kennis en sloot onvoldoende aan op moderne eisen rond rapportage, auditability, ketenintegratie en datagedreven sturing. Het CAK besloot daarom tot een volledige vervanging van het financiële kernsysteem, met impact op grootboek, inkoop, verplichtingen, debiteuren- en crediteurenadministratie, rapportage en de vele koppelingen met ketenpartners zoals het CJIB, het Zorginstituut Nederland en zorgaanbieders. De complexiteit zat in het combineren van een diepgaande functionele transformatie met harde continuïteit: betalingen aan zorgaanbieders, eigen bijdragen van burgers en vorderingen mochten geen dag stilstaan. Tegelijkertijd moest het systeem voldoen aan BIR/BIO, relevante publieke controleraamwerken en strenge accountantseisen, en moest de finance-organisatie zelf klaar worden gemaakt voor nieuwe processen, nieuwe rollen en een sterker grip op data. Elk onderdeel raakte direct kwetsbare burgers en politiek gevoelige dossiers, waardoor de foutmarge minimaal was en transparantie naar toezichthouders en Tweede Kamer cruciaal.",
        approach: "ITsPeople leverde programma- en projectmanagement, business analyse, architectuur en control-expertise. Vanuit de pyramide-aanpak formuleerden wij eerst de kernboodschap voor directie en bestuur: een toekomstvast financieel fundament dat continuïteit, rechtmatigheid en wendbaarheid combineert. Vervolgens voerden wij een grondige procesanalyse uit van de complete finance-keten: grootboek, inkoop, verplichtingen, AP/AR, vorderingen, rapportage en ketenkoppelingen, en vertaalden deze naar functionele en non-functionele requirements voor het nieuwe platform. Parallel stelden wij een Target Operating Model op voor de finance-organisatie, inclusief rollen, bevoegdheden, nieuwe werkwijzen en een dataverantwoordelijkheidsmodel. Een gefaseerde migratiestrategie werd ontworpen met duidelijke go/no-go-criteria per release, gebaseerd op risico, waarde en technische haalbaarheid. Wij richtten een Business Control Framework in waarmee stuurgroep en directie real-time grip hielden op scope, planning, budget, baten en risico's. Intensieve samenwerking met de interne CAK-teams, de leverancier van het nieuwe platform, de externe accountant en ketenpartners zorgde ervoor dat auditbaarheid, rechtmatigheid en compliance vanaf dag één in het ontwerp waren ingebouwd, niet achteraf gerepareerd. Change management, training en adoptie van gebruikers liepen als een rode draad door het programma: pas wanneer de mensen mee zijn, landt een systeem. Tot slot borgden wij kennis in de eigen CAK-organisatie via coaching, documentatie en parallel meedraaien.",
        results: ["Nieuw financieel kernsysteem succesvol in productie genomen", "Continuïteit van uitkeringen, vorderingen en betalingen volledig geborgd", "Sterk verbeterde rapportage-, stuur- en auditpositie", "Finance-organisatie klaar voor de volgende stap in digitalisering", "Auditbaarheid en rechtmatigheid by design ingebouwd", "Ketenkoppelingen gestandaardiseerd en robuuster"],
        image: asset("/images/team-meeting.jpg"),
        testimonial: "ITsPeople combineerde diepgaande finance-kennis met strakke programmasturing. Precies wat een publieke uitvoerder nodig heeft bij een transformatie van deze omvang.",
        testimonialAuthor: "Directeur Finance & Control",
        testimonialOrg: "Het CAK",
      },
      {
        slug: "tkp-wet-toekomst-pensioenen",
        sector: "Pensioenen",
        title: "TKP: voorbereiding op de Wet toekomst pensioenen",
        challenge: "Als pensioenuitvoerder voor meerdere grote pensioenfondsen staat TKP voor een van de grootste transities in de Nederlandse pensioensector: de overgang naar het nieuwe stelsel onder de Wet toekomst pensioenen (Wtp). Elk deelnemend fonds moet uiterlijk op het door het kabinet vastgestelde eindmoment zijn 'ingevaren' naar een nieuw contract, met een volledige herberekening en overdracht van aanspraken van miljoenen deelnemers. Voor TKP betekent dit dat processen, systemen, data, communicatie én governance gelijktijdig moeten worden aangepast, voor meerdere klanten met elk eigen keuzes rond contracttype, invaarmethodiek en compensatie, binnen een onverbiddelijke wettelijke deadline en onder nauwlettend toezicht van DNB en AFM. De uitdaging is niet alleen technisch (administratiesystemen, rekenmodellen, koppelingen met actuarissen, vermogensbeheerders en custodians) maar ook bestuurlijk en juridisch: fondsbesturen moeten onderbouwde, evenwichtige besluiten nemen, deelnemers moeten begrijpelijk worden geïnformeerd en toezichthouders moeten vertrouwen hebben in de beheersing. Eén fout in de datakwaliteit of een gemiste afhankelijkheid tussen workstreams kan leiden tot vertraging, reputatieschade of juridische procedures.",
        approach: "ITsPeople ondersteunt TKP in de strategische en operationele voorbereiding op de Wtp. Wij leveren programma- en projectmanagement, business analisten, datakwaliteitsexperts en change-specialisten aan de diverse workstreams: contract- en productontwerp, invaren en herberekening, datakwaliteit, systeemaanpassingen, deelnemerscommunicatie en governance. Conform het pyramide-principe is de kernboodschap continu leidend: op tijd, uitlegbaar en controleerbaar invaren voor élk klantfonds. Wij hielpen bij het opzetten van een integraal programmaplan met duidelijke mijlpalen per klantfonds en per workstream, inclusief kritieke pad-analyse en afhankelijkheden. Een Business Control Framework geeft directie, fondsbesturen en toezichthouders real-time zicht op voortgang, risico's, datakwaliteit en baten. Bijzondere aandacht ging uit naar datakwaliteit, de fundering onder elke correcte invaarberekening, and de ketenaanpak met actuarissen, vermogensbeheerders, custodians en administratiesystemen. Wij ondersteunen TKP daarnaast in de dialoog met fondsbesturen en toezichthouders, bij het opstellen van impactanalyses, besluitvormingsdocumenten en evenwichtigheidsanalyses, en in de deelnemerscommunicatie waarin complexe materie toegankelijk moet worden uitgelegd. Risicomanagement is continu en expliciet: scenario's voor vertraging, datafouten of juridische bezwaren worden vooraf gemodelleerd en gemitigeerd. Kennisborging binnen TKP staat bij elke stap centraal, zodat de eigen organisatie na de transitie zelfstandig verder kan in de nieuwe werkelijkheid van het nieuwe pensioenstelsel.",
        results: ["Integraal Wtp-programma ingericht en aantoonbaar op koers", "Fondsbesturen voorzien van bestuurlijk besluitvormings- en evenwichtigheidskader", "Datakwaliteit aantoonbaar verhoogd richting invaarmoment", "TKP-organisatie stap voor stap Wtp-ready", "Transparante rapportage richting DNB en AFM", "Deelnemerscommunicatie voorbereid en getest"],
        image: asset("/images/team-collab.jpg"),
        testimonial: "De Wtp raakt alles: onze processen, systemen, mensen en klanten. ITsPeople helpt ons om dat behapbaar, bestuurbaar en uitlegbaar te houden.",
        testimonialAuthor: "Programmamanager Wtp",
        testimonialOrg: "TKP",
      },
      {
        slug: "digitale-transformatie-verzekeraar",
        sector: "Financiële Sector",
        title: "Digitale transformatie bij een grote verzekeraar",
        challenge: "Een grote Nederlandse verzekeraar stond voor een ingrijpende digitale transformatie. Het programma van €20 miljoen liep tegen versnipperde processen aan, gebrek aan grip op voortgang en kosten, en onvoldoende aansluiting tussen strategie en uitvoering. Meerdere deelprogramma's hadden eigen rapportages, eigen prioriteiten en eigen stuurgroepen, waardoor de directie de samenhang uit het oog dreigde te verliezen. Er was behoefte aan een integraal besturingskader dat overzicht, voorspelbaarheid en strategische sturing mogelijk maakte, zonder de snelheid van de uitvoering te remmen.",
        approach: "ITsPeople ontwierp een Target Operating Model dat als kompas diende voor de gehele transformatie en dat de verbinding legde tussen strategie, klantreizen, processen, data en technologie. Parallel hebben wij een Business Control Framework ingericht dat financiële, operationele en risico-KPI's in één integraal dashboard samenbracht, zodat directie en stuurgroep op basis van actuele feiten konden sturen in plaats van op maandelijkse rapportages. Een Transition Support Office, bemand door ITsPeople-consultants, zorgde voor dagelijkse coördinatie, afhankelijkheden management tussen workstreams, strakke escalatielijnen en voorbereiding van besluitvorming. Onze consultants werkten hand in hand met de interne teams; kennisoverdracht, coaching van programmamanagers en borging van de nieuwe werkwijzen waren integraal onderdeel van de aanpak. Bijzondere aandacht ging uit naar change management, adoptie en het expliciet maken van baten per release.",
        results: ["40% snellere doorlooptijd", "98% compliance score", "€3.2M besparing gerealiseerd", "Volledige kennisoverdracht naar intern team"],
        image: asset("/images/team-discussion.jpg"),
        testimonial: "ITsPeople heeft ons geholpen om grip te krijgen op een complex transformatieprogramma. Hun combinatie van strategisch inzicht en hands-on mentaliteit is uniek.",
        testimonialAuthor: "Director Digital Transformation",
        testimonialOrg: "Grote financiële instelling",
      },
      {
        slug: "nis2-implementatie-overheid",
        sector: "Overheid",
        title: "NIS2-implementatie bij een uitvoeringsorganisatie",
        challenge: "Een grote uitvoeringsorganisatie van de overheid moest vóór de wettelijke deadline voldoen aan de NIS2-richtlijn. De complexiteit van de regelgeving, gecombineerd met een uitgebreid IT-landschap, tientallen ketenpartners en meerdere interne stakeholders, maakte dit tot een uitdaging van formaat. De organisatie wilde geen papieren compliance, maar een aanpak waarin NIS2-eisen daadwerkelijk worden vertaald naar werkbare processen, bestuurlijke verantwoordelijkheid en aantoonbare beheersing van leveranciers en supply chain.",
        approach: "Wij startten met een uitgebreide gap-analyse tegen de NIS2-bepalingen, waarin wij techniek, processen, governance, leveranciersketen en incidentafhandeling integraal tegen het licht hielden. Op basis hiervan ontwikkelden wij een compliance roadmap met duidelijke prioriteiten, mijlpalen en eigenaarschap. Processen werden herontworpen om te voldoen aan de NIS2-eisen, governance-structuren werden ingericht (waaronder een CISO-office met heldere mandaten), en de risicomanagement- en incidentresponse-capabilities werden versterkt. Bestuurlijke borging was een kernonderdeel van de aanpak: directie en bestuur werden meegenomen in hun persoonlijke aansprakelijkheid onder NIS2 en kregen een besluitvormingsritme en rapportagelijn die daarbij past. Tot slot begeleidden wij het awareness- en trainingsprogramma voor medewerkers en leveranciers, zodat compliance niet alleen op papier maar ook in gedrag geborgd werd.",
        results: ["100% NIS2 compliant", "Audit-ready in 4 maanden", "Bestuurlijke borging gerealiseerd", "Training voor 200+ medewerkers"],
        image: asset("/images/team-office.jpg"),
        testimonial: "De NIS2-implementatie leek een onmogelijke opgave. Het team van ITsPeople maakte het werkbaar, begrijpelijk en, het allerbelangrijkste, geborgd in onze organisatie.",
        testimonialAuthor: "CISO",
        testimonialOrg: "Uitvoeringsorganisatie overheid",
      },
      {
        slug: "security-governance-umc",
        sector: "Zorg",
        title: "Security governance voor een universitair medisch centrum",
        challenge: "Een universitair medisch centrum kampte met een informatiebeveiligingsbeleid dat niet aansloot bij de dagelijkse praktijk van zorgprofessionals. De BIO/NEN 7510 normen werden onvoldoende nageleefd, niet uit onwil maar omdat het beleid te abstract en te ver verwijderd was van de werkvloer. Audits legden herhaaldelijk dezelfde bevindingen bloot, medewerkers ervoeren security als een rem op de patiëntenzorg en incidenten werden onvoldoende gemeld. Er was behoefte aan een aanpak die security awareness combineerde met werkbare procedures én met aansluiting op de realiteit van een complexe, 24/7 zorgomgeving.",
        approach: "ITsPeople koos voor een mensgerichte aanpak. Wij combineerden BIO/NEN 7510 compliance met een uitgebreid security awareness programma, waarin gedrag en cultuur net zo veel gewicht kregen als beleid en techniek. Het beleid werd herschreven in begrijpelijke taal, procedures werden vereenvoudigd en gekoppeld aan concrete zorgscenario's. Per afdeling werden security champions aangesteld die als ambassadeur fungeerden tussen de werkvloer en de CISO-organisatie. Wij zetten workshops, e-learning modules en regelmatige phishing-simulaties op, en richtten een governance-ritme in waarin directie, RvB en afdelingshoofden structureel op security-KPI's stuurden. Het resultaat: security werd een gedeelde verantwoordelijkheid in plaats van een IT-aangelegenheid, en voldoen aan de norm werd een logisch gevolg van hoe er gewerkt werd, niet een losse exercitie.",
        results: ["90% awareness score", "ISO 27001 certificering", "Cultuurverandering gerealiseerd", "Security champions netwerk opgezet"],
        image: asset("/images/team-sept-1.jpg"),
        testimonial: "Wat ITsPeople onderscheidt is hun focus op de mens. Technisch waren we al ver, maar de adoptie bleef achter. Zij hebben dat opgelost.",
        testimonialAuthor: "CIO",
        testimonialOrg: "Universitair Medisch Centrum",
      },
    ],
    ctaHeading: "Herkenbaar? Laten we praten.",
    ctaSubheading: "Elke transformatie is uniek. Wij denken graag met u mee over de aanpak die past bij uw specifieke situatie.",
    ctaButton: "Neem contact op →",
    resultLabel: "Resultaten",
    challengeLabel: "De uitdaging",
    approachLabel: "Onze aanpak",
  },
  en: {
    tag: "Case Studies",
    heading1: "Proven",
    heading2: "results",
    intro: "From strategy to delivery, see how we have supported organisations through complex transformations.",
    caseItems: [
      {
        slug: "rvo-nglb-implementatie",
        sector: "Government / Agriculture",
        title: "RVO: implementing the new Common Agricultural Policy (nGLB)",
        challenge: "With the new Common Agricultural Policy (CAP) of the European Union, the Netherlands is required to deliver a fundamentally renewed execution of agricultural subsidies, greening and rural development. For the Netherlands Enterprise Agency (RVO) this means a multi-year transformation in which legal obligations, new regulations, sustainability of the sector and a fully digital execution must come together. The complexity is considerable: the nGLB programme touches a broad chain of parties, including the Ministry of Agriculture, Nature and Food Quality (LNV), the twelve provinces, the water boards and the NVWA. Each party has its own responsibilities, systems and interests. At the same time, tens of thousands of agricultural entrepreneurs must be served on time, transparently and lawfully, within strict European deadlines and under scrutiny of the European Commission and national audit institutions. A small execution error or a missed chain dependency can directly lead to delayed payments, financial corrections from Brussels or legal proceedings from applicants.",
        approach: "ITsPeople supports RVO in the governance and delivery of the nGLB programme. Following the pyramid principle, we crystallised the core message together with the client: a timely, transparent and controllable implementation of the new CAP for all chain partners involved. From this foundation we established a phased approach that integrates legal obligations, new regulations, sector sustainability and digital execution into one delivery. We provided programme and project management, business analysis and control expertise across multiple workstreams, monitored dependencies between RVO, LNV, the provinces, the water boards and the NVWA, and installed a governance rhythm enabling leadership and the steering committee to manage scope, schedule, risks and benefits based on facts. Particular attention went to chain orchestration, data quality, auditability and communication to chain partners and end beneficiaries. The final presentation in the RVO atrium marked an important milestone in the delivery of phase 2 (GLB 23-27) and confirmed that a complex, multi-stakeholder transformation can be turned into real results.",
        results: [
          "Phase 2 GLB 23-27 successfully delivered and presented",
          "Integrated chain approach with LNV, provinces, water boards and NVWA secured",
          "Legal obligations, new regulations and sustainability combined into one execution",
          "Phased, controllable implementation kept on track within European frameworks",
          "Steering committee and leadership in control of scope, schedule, risks and benefits",
        ],
        image: asset("/images/cases/nglb-stage.jpg"),
        gallery: [
          { src: asset("/images/cases/nglb-audience.jpg"), alt: "Audience during the final presentation of the nGLB programme in the RVO atrium" },
          { src: asset("/images/cases/nglb-speaker-field.jpg"), alt: "Speaker explains crop classification and mowing/grazing during the nGLB final presentation" },
          { src: asset("/images/cases/nglb-speaker-scope.jpg"), alt: "Speaker presents the objective and scope of phase 2 GLB 23-27" },
        ],
        testimonial: "Implementing the new CAP requires tight governance, chain orchestration and the ability to keep legal, policy and digital tracks aligned. ITsPeople has made a meaningful contribution to this.",
        testimonialAuthor: "Programme Manager nGLB",
        testimonialOrg: "Netherlands Enterprise Agency (RVO)",
      },
      {
        slug: "amc-hackathon-data-feedback-ok",
        sector: "Healthcare / Innovation",
        title: "Amsterdam UMC (AMC): Hackathon 'Code to make a difference' in the skills lab",
        challenge: "In the training and skills lab of Amsterdam UMC (AMC), surgeons, trainers and technology come together to further improve the quality of laparoscopic procedures. The question was concrete: can we give surgeons live and objective feedback during training based on data from the operation, instead of afterwards based on subjective observations? In a medical setting, any such solution must be reliable, explainable and usable from the very first second: the information must not distract the surgeon, must fit the clinical workflow and must be demonstrably accurate enough to act on. At the same time, a complex ecosystem of parties is involved: the hospital itself, trainers, medical-technical suppliers, data platforms and software partners. Validating this kind of innovation quickly, without disrupting regular care, requires a concentrated, multidisciplinary approach, exactly what a hackathon is designed for.",
        approach: "Together with Amsterdam UMC and our partners FormsVision, SOA and Gelre ziekenhuizen, ITsPeople organised a hackathon under the motto 'Code to make a difference' in the AMC skills lab. Following the pyramid principle, we set the core message upfront: prove that data from the operating theatre can be converted into real-time, reliable feedback for the surgeon during training. Within a tight timeframe, multidisciplinary teams were formed consisting of surgeons, data scientists, software engineers and business analysts. We provided the programme and project management, team facilitation, alignment with the clinical use case and oversight on scope, governance and explainability. During the hackathon, live data from the laparoscopic setups was captured, processed and fed back in a feedback loop towards the surgeon. Results were iteratively validated against the judgement of the experienced trainers in the skills lab, allowing us to establish how well data-driven feedback aligned with human expert assessment. The approach showed how strategic innovation, ecosystem collaboration and hands-on delivery can reinforce each other within a single session.",
        results: [
          "90% reliable real-time feedback based on data from the operating theatre",
          "Surgeons provided with objective live feedback during training",
          "Proven use case for data-driven skills training in the training/skills lab",
          "Successful collaboration between Amsterdam UMC, ITsPeople, FormsVision, SOA and Gelre ziekenhuizen",
          "Foundation laid for further scaling of AI and data applications in the OR environment",
        ],
        image: asset("/images/cases/amc-hackathon-team.jpg"),
        video: asset("/videos/amc-hackathon-patient-safety.mp4"),
        videoPoster: asset("/images/cases/amc-hackathon-team.jpg"),
        videoLabel: "Watch the video: Patient Safety Hackathon Amsterdam UMC",
        gallery: [
          { src: asset("/images/cases/amc-hackathon-skillslab.jpg"), alt: "Training session in the Amsterdam UMC skills lab during the hackathon" },
          { src: asset("/images/cases/amc-hackathon-banners.jpg"), alt: "Hackathon 'Code to make a difference' with banners from ITsPeople, Amsterdam UMC, FormsVision, SOA and Gelre ziekenhuizen" },
          { src: asset("/images/cases/amc-hackathon-laparoscopy.jpg"), alt: "Laparoscopic training session with live imaging and data feedback during the hackathon" },
        ],
        testimonial: "This hackathon has shown that data-driven, real-time feedback in the OR is no longer a future dream. We were already able to provide surgeons with reliable information live during training.",
        testimonialAuthor: "Surgeon-trainer",
        testimonialOrg: "Amsterdam UMC",
      },
      {
        slug: "geldmaat-cash-infrastructuur",
        sector: "Financial Services",
        title: "Geldmaat: establishing a national cash infrastructure",
        challenge: "Geldmaat was tasked by three major Dutch banks (ABN AMRO, ING and Rabobank) to establish a completely new, neutral cash infrastructure for the Netherlands. Thousands of ATMs, deposit safes and deposit machines had to be transferred from the individual banks, consolidated and harmonised under one brand, one governance model and one technology stack. All whilst maintaining uninterrupted cash services for millions of Dutch consumers, SMEs and corporate customers. The challenge was multifaceted. First, continuity of cash services had to be guaranteed: every outage directly impacts consumer confidence and trust in payments. Second, a significant cost reduction programme had to be realised through consolidating ATMs, optimising locations and restructuring the cash value chain. Third, a complex stakeholder ecosystem was involved: DNB as regulator, the three implementing parent banks as shareholders and client, cash-in-transit companies for secure transport, municipalities and resident organisations for physical location decisions, and advocacy groups protecting cash accessibility for vulnerable groups. Fourth, Geldmaat as a new organisation had to be built from scratch: processes, people, systems and governance had to reach maturity in parallel with the rollout.",
        approach: "ITsPeople provided a multidisciplinary team of programme, project and change managers, business analysts and control experts who orchestrated the rollout from the Transition Support Office. Using the pyramid principle, we started by crystallising the core message for management and shareholders: one neutral, reliable and affordable cash infrastructure for the Netherlands. From this foundation, we designed the Target Operating Model for the new cash chain: from filling, maintenance and incident handling to customer contact and chain reporting, and translated it into a phased migration roadmap by region and by bank. A Business Control Framework provided management and the steering committee with real-time visibility of progress, risks, benefits and costs per tranche, enabling decision-making based on facts rather than intuition. We coordinated collaboration with cash-in-transit companies, location owners, municipalities and advocacy groups, and ensured tight governance at the interface with the three implementing banks. In parallel, we guided the setup of the 24/7 service operations centre, SLA management with suppliers and compliance assurance to DNB. Risk management was continuous, with scenario planning for outages, security incidents and political sensitivities. Change management and communication to employees, banks, entrepreneurs and consumers were integral to each phase, as was knowledge transfer to the Geldmaat organisation so ownership gradually shifted.",
        results: ["National rollout delivered on schedule and within budget", "Significant structural cost reduction in the cash chain", "Service continuity secured throughout the complete migration", "Demonstrably compliant with DNB frameworks and Cash Covenant", "One neutral, national cash infrastructure operational", "Geldmaat organisation built and in control"],
        image: asset("/images/team-discussion.jpg"),
        testimonial: "ITsPeople brought the calm and structure needed to make a programme of this scale succeed operationally and politically. Strategically sharp, operationally hands-on.",
        testimonialAuthor: "Programme Director",
        testimonialOrg: "Geldmaat",
      },
      {
        slug: "geldmaat-it-transformatie",
        sector: "Financial Services",
        title: "Geldmaat: complete IT transformation & hosting",
        challenge: "Post-launch, Geldmaat largely relied on IT services from its parent banks, practical for the start, but unsustainable for an independent company needing to operate efficiently, scalably and autonomously. To make this maturity leap, Geldmaat had to establish a completely new IT landscape: from core applications for ATM fleet monitoring and management to ERP, service management, identity & access management, data warehouse and business intelligence, workplace IT, connectivity and a brand new hosting environment. The transformation had to happen whilst keeping existing services operational, in effect, open-heart surgery, under strict requirements for information security, financial regulatory compliance, operational resilience, auditability and tight cost control. Moreover, dependency on parent banks had to be carefully unwound without disrupting SLAs or losing critical expertise. An added complication: the specialised ATM IT supplier market is limited, and every change directly affected thousands of physical devices distributed across the country.",
        approach: "ITsPeople acted as strategic partner to the CIO, providing programme, project, architecture and control capacity. Following the pyramid principle, we first designed a clear IT strategy and IT operating model with one overarching message: a secure, scalable and affordable IT environment enabling Geldmaat to operate autonomously and agilely. We then defined the sourcing strategy for hosting, managed services and specialised ATM partners, including make-or-buy decisions per domain. A multi-year transformation programme was established with clearly delineated workstreams: a new hosting environment (hybrid cloud), core systems migration, modern service management platform rollout, identity & access management implementation, data and monitoring platform for the ATM fleet, workplace renewal and strengthened cybersecurity stack. From the Transition Support Office, we monitored dependencies between workstreams, suppliers and the business. We managed risks via a Business Control Framework, coordinated tenders and contracts with hosting partners, and guided application migration with minimal service disruption. Security-by-design, operational resilience readiness, auditability and cost control guided every design decision. Finally, we supported HR and knowledge preservation: employees were actively engaged in new ways of working, and critical expertise was transferred from parent banks to Geldmaat through structured transition plans.",
        results: ["Independent, scalable IT environment established", "Hosting successfully transferred to new partners without disruption", "Structural reduction in total cost of ownership", "Operationally resilient, compliant and auditable IT landscape", "Parent bank dependency successfully unwound", "Internal IT organisation built and in control"],
        image: asset("/images/team-office.jpg"),
        testimonial: "This transformation touched every part of our IT. ITsPeople not only helped us determine strategy, but ensured we made real progress every single day without closing the shop.",
        testimonialAuthor: "CIO",
        testimonialOrg: "Geldmaat",
      },
      {
        slug: "cak-financieel-systeem",
        sector: "Government / Healthcare",
        title: "CAK: transformation to a new financial system",
        challenge: "CAK manages substantial public funds, including for Long-Term Care (Wlz), Social Support (Wmo) and overseas schemes. The existing core financial system was severely outdated, expensive to maintain, staffed by scarce expertise and did not meet modern requirements for reporting, auditability, chain integration and data-driven governance. CAK therefore decided to completely replace the core financial system, with impact on general ledger, procurement, commitments, accounts receivable and payable, reporting and numerous interfaces with chain partners like the Criminal Enforcement Agency, the Healthcare Institute and care providers. The complexity lay in combining deep functional transformation with non-negotiable continuity: payments to care providers, patient co-payments and invoicing could not stop for a day. At the same time, the system had to comply with BIR/BIO, relevant public audit frameworks and stringent accounting requirements, and the finance organisation itself had to be prepared for new processes, new roles and stronger data governance. Every element directly affected vulnerable citizens and politically sensitive matters, leaving no room for error and making transparency to regulators and Parliament critical.",
        approach: "ITsPeople delivered programme and project management, business analysis, architecture and control expertise. Following the pyramid principle, we first formulated the core message for leadership and the board: a future-proof financial foundation combining continuity, legality and agility. We then conducted a thorough process analysis of the complete finance chain: general ledger, procurement, commitments, AR/AP, invoicing, reporting and chain interfaces, and translated this into functional and non-functional requirements for the new platform. In parallel, we developed a Target Operating Model for the finance organisation, including roles, authorities, new ways of working and data governance. A phased migration strategy was designed with clear go/no-go criteria per release, based on risk, value and technical feasibility. We established a Business Control Framework enabling the steering committee and leadership to maintain real-time grip on scope, schedule, budget, benefits and risks. Close collaboration with internal CAK teams, the platform vendor, the external auditor and chain partners ensured auditability, legality and compliance were built into the design from day one, not retrofitted. Change management, training and user adoption ran as a golden thread through the programme: systems only land when people are ready. Finally, we embedded knowledge in the CAK organisation through coaching, documentation and hands-on participation.",
        results: ["New core financial system successfully deployed into production", "Continuity of benefit payments, invoicing and cash flow fully secured", "Significantly improved reporting, control and audit position", "Finance organisation ready for the next stage of digitalisation", "Auditability and legality built in by design", "Chain interfaces standardised and more robust"],
        image: asset("/images/team-meeting.jpg"),
        testimonial: "ITsPeople combined deep financial expertise with tight programme governance. Exactly what a public agency needs for a transformation of this scale.",
        testimonialAuthor: "Director Finance & Control",
        testimonialOrg: "CAK",
      },
      {
        slug: "tkp-wet-toekomst-pensioenen",
        sector: "Pensions",
        title: "TKP: preparing for the Pensions (Future) Act",
        challenge: "As a pension administrator for several major pension funds, TKP faces one of the largest transitions in the Dutch pension sector: moving to the new system under the Pensions (Future) Act. Each participating fund must 'transition' to a new contract by the government-set deadline, with complete recalculation and transfer of entitlements for millions of beneficiaries. For TKP, this means processes, systems, data, communications and governance must all be adapted simultaneously, for multiple clients, each with their own choices on contract type, transition method and compensation, within an unforgiving legal deadline and under close supervision from DNB and AFM. The challenge is not just technical (administration systems, calculation models, interfaces with actuaries, asset managers and custodians) but also governance and legal: fund boards must make informed, balanced decisions; beneficiaries must be clearly informed; regulators must have confidence in control. One data quality error or missed dependency between workstreams could lead to delays, reputational damage or legal proceedings.",
        approach: "ITsPeople supports TKP in strategic and operational preparation for the Pensions Act. We provide programme and project management, business analysis, data quality experts and change specialists to various workstreams: contract and product design, transition and recalculation, data quality, system changes, beneficiary communication and governance. Aligned with the pyramid principle, the core message continuously guides: timely, transparent and controllable transition for every client fund. We helped establish a comprehensive programme plan with clear milestones per client fund and workstream, including critical path analysis and dependencies. A Business Control Framework gives leadership, fund boards and regulators real-time visibility of progress, risks, data quality and benefits. Particular attention went to data quality, the foundation for every correct transition calculation, and chain management with actuaries, asset managers, custodians and administration systems. We support TKP in dialogue with fund boards and regulators, developing impact analyses, decision documents and balance statements, and in beneficiary communications where complex matters must be made accessible. Risk management is continuous and explicit: scenarios for delays, data errors or legal objections are modelled and mitigated in advance. Knowledge preservation within TKP is central to every step, ensuring the organisation can independently navigate the new pension system reality post-transition.",
        results: ["Comprehensive Pensions Act programme established and demonstrably on track", "Fund boards provided with governance and balance framework for decision-making", "Data quality measurably improved towards transition point", "TKP organisation progressively Pensions Act-ready", "Transparent reporting to DNB and AFM", "Beneficiary communication prepared and tested"],
        image: asset("/images/team-collab.jpg"),
        testimonial: "The Pensions Act touches everything: our processes, systems, people and clients. ITsPeople helps us keep it manageable, governable and explicable.",
        testimonialAuthor: "Pensions Act Programme Manager",
        testimonialOrg: "TKP",
      },
      {
        slug: "digitale-transformatie-verzekeraar",
        sector: "Financial Services",
        title: "Digital transformation at a major insurance company",
        challenge: "A major Dutch insurance company faced a major digital transformation. The €20 million programme was hampered by fragmented processes, lack of visibility into progress and costs, and poor alignment between strategy and execution. Multiple sub-programmes had their own reporting, priorities and steering committees, causing leadership to lose sight of the big picture. There was a need for an integrated governance framework that provided visibility, predictability and strategic control, without hampering execution speed.",
        approach: "ITsPeople designed a Target Operating Model that served as a compass for the entire transformation, bridging strategy, customer journeys, processes, data and technology. In parallel, we established a Business Control Framework bringing together financial, operational and risk KPIs in one integrated dashboard, enabling leadership and the steering committee to manage based on current facts rather than monthly reports. A Transition Support Office, staffed by ITsPeople consultants, provided daily coordination, dependencies management across workstreams, escalation discipline and decision preparation. Our consultants worked hand-in-hand with internal teams; knowledge transfer, coaching of programme managers and anchoring of new ways of working were integral to the approach. Special attention went to change management, adoption and explicitly communicating benefits per release.",
        results: ["40% faster turnaround", "98% compliance score", "€3.2M savings realised", "Complete knowledge transfer to internal team"],
        image: asset("/images/team-discussion.jpg"),
        testimonial: "ITsPeople helped us gain control of a complex transformation programme. Their combination of strategic insight and hands-on mentality is unique.",
        testimonialAuthor: "Director Digital Transformation",
        testimonialOrg: "Major financial services company",
      },
      {
        slug: "nis2-implementatie-overheid",
        sector: "Government",
        title: "NIS2 implementation at a public sector organisation",
        challenge: "A major public sector organisation had to comply with the NIS2 Directive before the legal deadline. The complexity of the regulation, combined with an extensive IT landscape, dozens of chain partners and multiple internal stakeholders, made this a formidable challenge. The organisation wanted more than compliance on paper: they needed an approach that actually translated NIS2 requirements into workable processes, board-level accountability and demonstrable control of suppliers and supply chain.",
        approach: "We started with an extensive gap analysis against NIS2 requirements, comprehensively reviewing technology, processes, governance, supplier chain and incident handling. Based on this, we developed a compliance roadmap with clear priorities, milestones and ownership. Processes were redesigned to meet NIS2 requirements, governance structures were established (including a CISO office with clear mandates), and risk management and incident response capabilities were strengthened. Board assurance was central to our approach: leadership and the board were engaged in their personal accountability under NIS2 and given a decision-making cadence and reporting line that reflected this. Finally, we guided awareness and training programmes for employees and suppliers, so compliance was embedded in behaviour, not just on paper.",
        results: ["100% NIS2 compliant", "Audit-ready in 4 months", "Board-level assurance established", "Training for 200+ employees"],
        image: asset("/images/team-office.jpg"),
        testimonial: "NIS2 implementation seemed impossible. The ITsPeople team made it manageable, understandable and, most importantly, embedded in our organisation.",
        testimonialAuthor: "CISO",
        testimonialOrg: "Government public sector organisation",
      },
      {
        slug: "security-governance-umc",
        sector: "Healthcare",
        title: "Security governance at an academic medical centre",
        challenge: "An academic medical centre struggled with information security policy that did not align with healthcare professionals' daily practice. BIO/NEN 7510 standards were insufficiently followed, not from unwillingness but because policy was too abstract and disconnected from the shop floor. Audits repeatedly uncovered the same findings, staff experienced security as an impediment to patient care and incidents were underreported. A solution was needed that combined security awareness with workable procedures and alignment with the reality of a complex, 24/7 healthcare environment.",
        approach: "ITsPeople adopted a human-centred approach. We combined BIO/NEN 7510 compliance with a comprehensive security awareness programme where behaviour and culture received equal weight to policy and technology. Policy was rewritten in plain language, procedures were simplified and linked to concrete healthcare scenarios. Each department appointed security champions who acted as ambassadors between the shop floor and the CISO organisation. We developed workshops, e-learning modules and regular phishing simulations, and established a governance rhythm where leadership, the board and department heads regularly reviewed security KPIs. The result: security became a shared responsibility rather than an IT matter, and compliance became a natural consequence of how people worked, not a separate exercise.",
        results: ["90% awareness score", "ISO 27001 certification", "Cultural transformation achieved", "Security champions network established"],
        image: asset("/images/team-sept-1.jpg"),
        testimonial: "What sets ITsPeople apart is their focus on people. Technically we were advanced, but adoption was lagging. They solved that.",
        testimonialAuthor: "CIO",
        testimonialOrg: "Academic Medical Centre",
      },
    ],
    ctaHeading: "Recognise yourself? Let's talk.",
    ctaSubheading: "Every transformation is unique. We'd be happy to discuss the approach that fits your specific situation.",
    ctaButton: "Get in touch →",
    resultLabel: "Results",
    challengeLabel: "The challenge",
    approachLabel: "Our approach",
  },
};

export default function CasesPage() {
  const locale = useLocale() as "nl" | "en";
  const d = data[locale];

  return (
    <>
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-its-dark via-its-deep to-its-dark">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-its-green text-sm font-semibold tracking-wider uppercase">{d.tag}</span>
            <h1 className="text-4xl sm:text-6xl font-bold mt-4 mb-6 tracking-tight text-white">
              {d.heading1} <span className="gradient-text">{d.heading2}</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed max-w-2xl">
              {d.intro}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-its-warm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-20">
          {d.caseItems.map((c, i) => (
            <motion.div
              key={c.slug}
              id={c.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl overflow-hidden border border-its-gray-light/20 shadow-sm"
            >
              {/* Image header */}
              <div className="relative aspect-[21/9] overflow-hidden">
                <Image src={c.image} alt={c.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-its-dark/70 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <span className="px-3 py-1 rounded-full bg-its-green/90 text-xs font-semibold text-white">{c.sector}</span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mt-3">{c.title}</h2>
                </div>
              </div>

              {"video" in c && typeof (c as { video?: string }).video === "string" && (
                <div className="relative aspect-[16/9] bg-its-dark overflow-hidden">
                  {(c as { videoPoster?: string }).videoPoster && (
                    <Image src={(c as { videoPoster: string }).videoPoster} alt={(c as { videoLabel?: string }).videoLabel ?? ""} fill className="object-cover opacity-60" />
                  )}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3">
                      <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                    <p className="text-sm font-medium opacity-80">{locale === "nl" ? "Video binnenkort beschikbaar" : "Video coming soon"}</p>
                  </div>
                  {(c as { videoLabel?: string }).videoLabel && (
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 text-white text-xs font-medium backdrop-blur-sm">
                      {(c as { videoLabel: string }).videoLabel}
                    </div>
                  )}
                </div>
              )}

              {"gallery" in c && Array.isArray((c as { gallery?: { src: string; alt: string }[] }).gallery) && (
                <div className="grid grid-cols-3 gap-1 bg-its-gray-light/20">
                  {(c as { gallery: { src: string; alt: string }[] }).gallery.map((g) => (
                    <div key={g.src} className="relative aspect-[4/3] bg-its-warm">
                      <Image src={g.src} alt={g.alt} fill className="object-cover" />
                    </div>
                  ))}
                </div>
              )}

              <div className="p-8 lg:p-12">
                <div className="grid lg:grid-cols-3 gap-10">
                  <div className="lg:col-span-2 space-y-8">
                    <div>
                      <h3 className="text-sm font-bold text-its-green-dark uppercase tracking-wider mb-3">{d.challengeLabel}</h3>
                      <p className="text-its-gray-mid leading-relaxed">{c.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-its-green uppercase tracking-wider mb-3">{d.approachLabel}</h3>
                      <p className="text-its-gray-mid leading-relaxed">{c.approach}</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-its-charcoal uppercase tracking-wider mb-4">{d.resultLabel}</h3>
                    <div className="space-y-3 mb-8">
                      {c.results.map((r) => (
                        <div key={r} className="px-4 py-3 rounded-lg bg-its-green/5 border border-its-green/15 text-sm font-semibold text-its-green-dark">
                          {r}
                        </div>
                      ))}
                    </div>

                    <div className="p-5 rounded-xl bg-its-warm border-l-4 border-its-green">
                      <p className="text-its-charcoal italic text-sm leading-relaxed mb-3">
                        &ldquo;{c.testimonial}&rdquo;
                      </p>
                      <p className="text-its-gray-mid text-xs">
                        {c.testimonialAuthor}, {c.testimonialOrg}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-its-charcoal mb-6">{d.ctaHeading}</h2>
          <p className="text-its-gray-mid text-lg mb-8">
            {d.ctaSubheading}
          </p>
          <Link href={`/${locale}/contact`} className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-its-green hover:bg-its-green-dark text-white font-semibold transition-all duration-300">
            {d.ctaButton}
          </Link>
        </div>
      </section>
    </>
  );
}
