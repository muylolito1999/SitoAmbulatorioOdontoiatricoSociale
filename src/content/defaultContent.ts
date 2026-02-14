import type { SiteContent } from './types';

export const defaultContent: SiteContent = {
  hero: {
    title: 'Ambulatorio Odontoiatrico Solidale',
    subtitle:
      'Fragilità sociale ed economica\nAmbulatorio Odontoiatrico Solidale dedicato alle persone emarginate e disagiate: cure odontoiatriche gratuite per chi non può permettersele, un sorriso per tutti.\nUn progetto da sostenere, un modello da riprodurre!',
    backgroundImage: '',
    ctaPrimary: { text: 'Come funziona', href: '#come-funziona' },
    ctaSecondary: { text: 'Sostienici', href: '/support' },
  },

  chiSiamo: {
    title: 'Chi siamo',
    description:
      'Le malattie del cavo orale colpiscono nel mondo oltre 3,5 miliardi di persone e rappresentano un grave problema di salute pubblica. In Italia, il Servizio Sanitario non sempre garantisce un adeguato livello di cure odontoiatriche alle persone in condizioni di vulnerabilità economica, sia in termini di qualità delle prestazioni sia di tempi di attesa. Le riabilitazioni protesiche sono una realtà di nicchia gestita in pochissime strutture pubbliche, e le persone senza permesso di soggiorno non hanno alcun accesso alle cure. L\'Ambulatorio Odontoiatrico Solidale OdV è nato per rispondere a queste necessità: un\'associazione di volontariato che eroga cure odontoiatriche gratuite a Bologna, grazie a odontoiatri e igienisti dentali di elevata professionalità che operano su base volontaria. Contrastiamo le disuguaglianze sociali offrendo cure odontoiatriche gratuite e di qualità alle persone in condizioni di fragilità economica e sociale a Bologna,migliorando salute, dignità e inclusione.',  
    image: '',
  },

  cosaFacciamo: {
    title: 'Cosa facciamo',
    subtitle: 'I nostri servizi per la comunità',
    cards: [
      {
        icon: '🤝',
        title: 'Accoglienza',
        description:
          'Accogliamo le persone in vulnerabilità socio-economica segnalate dai Servizi sociali del Comune di Bologna, da Caritas, da Associazioni di volontariato del territorio.',
      },
      {
        icon: '🦷',
        title: 'Cure Dentali',
        description:
          'Detartrasi, igiene orale professionale, terapie conservative, terapie endodontiche, terapie parodontali, estrazioni, terapie chirurgiche, riabilitazioni protesiche mobili, prestazioni di odontoiatria pediatrica, terapie ortopedico-ortodontiche, a titolo gratuito.',
      },
      {
        icon: '🛡️',
        title: 'Prevenzione',
        description:
          'Educazione a stili di salute orale (sana alimentazione, corretta igiene orale, utilizzo di fluoro, visite periodiche) attraverso programmi di prevenzione dedicati a bambini, adolescenti ed adulti.',
      },
      {
        icon: '❤️',
        title: 'Volontariato',
        description:
          'Il nostro team è composto interamente da volontari: odontoiatri, igienisti dentali, assistenti alla poltrona e operatori socio sanitari e amministrativi.',
      },
    ],
  },

  impatto: {
    title: 'Il nostro impatto',
    subtitle: 'I numeri del nostro lavoro dal 2023 ad oggi',
    stats: [
      {
        value: '248',
        label: 'Pazienti presi in carico',
        description: 'Persone che hanno ricevuto un piano di cura completo',
      },
      {
        value: '1.180',
        label: 'Prestazioni erogate',
        description: 'Trattamenti odontoiatrici completamente gratuiti',
      },
      {
        value: '€80.463',
        label: 'Valore dei servizi',
        description: 'Valore economico delle prestazioni offerte gratuitamente',
      },
      {
        value: '40+',
        label: 'Volontari attivi',
        description: 'Professionisti e operatori che donano il loro tempo',
      },
    ],
  },

  timeline: {
    title: 'La nostra storia',
    subtitle: 'Il percorso dell\'Ambulatorio Odontoiatrico Solidale dalla fondazione ad oggi',
    events: [
      {
        date: 'Giugno 2022',
        title: 'Concessione degli spazi',
        description:
          'Il Comune di Bologna concede in comodato d\'uso all\'OdV un locale di circa 200 mq, di proprietà ACER, nel quartiere Pilastro in via G. D\'Annunzio 17/a.',
      },
      {
        date: 'Settembre 2023',
        title: 'Apertura a Villa Pallavicini',
        description:
          'In attesa della ristrutturazione della sede definitiva, l\'ambulatorio apre all\'interno del complesso Villa Pallavicini, in locali della Fondazione Gesù Divino Operaio, allestiti con risorse dell\'OdV.',
      },
      {
        date: 'Febbraio 2024',
        title: 'Inizio lavori in Via D\'Annunzio',
        description:
          'Iniziano i lavori di ristrutturazione della sede di Via D\'Annunzio, su progetto dell\'architetto Mario Cucinella, con l\'obiettivo di creare spazi accoglienti per pazienti e operatori.',
      },
      {
        date: 'Aprile 2025',
        title: 'Completamento della ristrutturazione',
        description:
          'I lavori di ristrutturazione si concludono dopo oltre un anno, per un importo complessivo di oltre 170.000 €. La ditta CEFLA dona attrezzature per un valore di circa 300.000 €.',
      },
      {
        date: '6 Maggio 2025',
        title: 'Inaugurazione della nuova sede',
        description:
          'La sede di Via D\'Annunzio viene inaugurata con la partecipazione del Sindaco Matteo Lepore, del Vicario Mons. Stefano Ottani e del Magnifico Rettore Giovanni Molari, alla presenza di oltre 250 persone.',
      },
      {
        date: 'Novembre 2025',
        title: 'Autorizzazione sanitaria',
        description:
          'L\'ambulatorio ottiene l\'autorizzazione sanitaria con atto del Comune di Bologna, completando il percorso di accreditamento della nuova sede.',
      },
    ],
  },

  comeFunziona: {
    title: 'Come funziona',
    subtitle: 'Tutti i trattamenti sono eseguiti da professionisti qualificati e iscritti all\'albo, utilizzando materiali certificati e seguendo i più alti standard di sicurezza e igiene.',
    steps: [
      {
        title: 'Contatto Iniziale',
        description:
          'Telefonare o inviare email alla segreteria per richiedere informazioni.',
      },
      {
        title: 'Segnalazione',
        description:
          'I pazienti sono inviati dai Servizi Sociali del Comune di Bologna, dalla Caritas di Bologna, da Associazioni di volontariato del territorio, da privati che si fanno garanti della vulnerabilità socio-economica della persona.',
      },
      {
        title: 'Contatto',
        description:
          'La nostra segreteria raccoglie le informazioni necessarie (dati anagrafici, motivo della segnalazione per evidenziare situazioni di urgenza) e valuta il tempo di attesa per la prima visita.',
      },
      {
        title: 'Prima visita',
        description:
          'Il paziente viene visitato dai nostri odontoiatri volontari per una valutazione completa dello stato di salute orale, con eventuali esami radiografici.',
      },
      {
        title: 'Piano di cura',
        description:
          'L\'odontoiatra elabora un piano di trattamento personalizzato (che può comprendere igiene orale professionale, terapie conservative, endodontiche, chirurgiche, ortodontiche e riabilitazioni protesiche mobili), interamente gratuito, e individua il collega volontario con le competenze professionali idonee a soddisfare le necessità di cura del paziente.',
      },
      {
        title: 'Risoluzione del caso',
        description:
          'Il paziente presso il nostro ambulatorio riceve tutte le cure previste dal piano di trattamento, con appuntamenti regolari. Le prestazioni sono erogate da odontoiatri e igienisti dentali di elevata professionalità.',
      },
    ],
  },

  trasparenza: {
    title: 'Trasparenza',
    subtitle: 'Come utilizziamo le risorse',
    highlights: [
      {
        label: 'Valore prestazioni erogate',
        value: '€87.453',
        description: 'Valore economico delle terapie odontoiatriche erogate gratuitamente (settembre 2023 — dicembre 2024)',
      },
      {
        label: 'Attrezzature odontoiatriche donate da CEFLA',
        value: '~€300.000',
        description: '3 riuniti odontoiatrici, 2 radiografici endorali, un ortopantomografo di ultima generazione e la linea di sterilizzazione',
      },
      {
        label: 'Ristrutturazione sede',
        value: '€170.000+',
        description: 'Costo dei lavori di ristrutturazione della sede di Via D\'Annunzio, su progetto dell\'arch. Mario Cucinella',
      },
    ],
    note: 'Tutte le prestazioni odontoiatriche sono erogate da professionisti volontari di elevata qualificazione professionale, che operano a titolo gratuito. L\'OdV si sostiene grazie a bandi di fondazioni, a donazioni di associazioni e di privati, al 5x1000. Le attività amministrative, di segreteria sono svolte da volontari.',
  },

  partner: {
    title: 'I nostri sostenitori',
    subtitle: 'Grazie a chi rende possibile il nostro lavoro',
    partners: [
      'AZIMUT',
      'Caritas di Bologna',
      'CEFLA',
      'Comitato dividendi FAAC dell\'Arcidiocesi di Bologna',
      'Fondazione Cassa di Risparmio in Bologna',
      'Fondazione del Monte di Bologna e Ravenna',
      'Fondazione Marchesini',
      'UNICREDIT',
      'Alma Mater Studiorum — Università di Bologna',
      'Lions',
      'Rotary',
      'Teddy Group',
    ],
  },

  contactBand: {
    title: 'Hai bisogno di noi?',
    subtitle: 'Contattaci per informazioni sulle cure o per sapere come sostenerci',
  },

  contact: {
    email: 'ambulatoriosolidale.bologna@gmail.com',
    phone: '+39 375 531 1887',
    address: 'Via Gabriele D\'Annunzio 17/a, 40137 Bologna',
  },

  about: {
    title: 'La nostra missione',
    mission:
      'Creare ambulatori dedicati che accolgano i pazienti in un clima di serenità e di accudimento, presso i quali erogare terapie odontoiatriche e riabilitazioni protesiche a titolo gratuito. Creare un gruppo di odontoiatri e igienisti dentali che su base volontaria eroghi le necessarie terapie. Fornire ai pazienti in condizione di disagio sociale informazioni utili per prevenire le malattie del cavo orale attraverso l\'educazione all\'igiene orale domiciliare e alla sana alimentazione.',
    vision:
      'A titolo gratuito garantire le cure odontoiatriche e promuovere la salute orale in persone in condizione di disagio sociale e difficoltà economiche tali da impedire l\'accesso alle strutture odontoiatriche, anche presso il Servizio Sanitario.',
    history:
      'Nel 2022 il Comune di Bologna ha concesso in comodato d\'uso all\'OdV un locale di circa 200 mq nel quartiere Pilastro, in via G. D\'Annunzio 17/a. In attesa dei fondi per la ristrutturazione, nel settembre 2023 l\'ambulatorio ha aperto all\'interno del complesso Villa Pallavicini, in locali della Fondazione Gesù Divino Operaio, ristrutturati e allestiti con risorse dell\'OdV. I lavori di ristrutturazione della sede di Via D\'Annunzio, su progetto dell\'architetto Mario Cucinella, sono iniziati nel febbraio 2024 e terminati nell\'aprile 2025, per un importo di oltre 170.000 €. La ditta CEFLA ha donato 3 riuniti odontoiatrici, 2 radiografici per rx endorali, un ortopantomografo di ultima generazione e la linea di sterilizzazione, per un valore di circa 300.000 €. L\'inaugurazione si è svolta il 6 maggio 2025 con la partecipazione del Sindaco Matteo Lepore, del Vicario Mons. Stefano Ottani e del Magnifico Rettore Giovanni Molari. L\'ambulatorio ha ottenuto l\'autorizzazione sanitaria nel novembre 2025.',
  },

  founders: {
    title: 'I fondatori',
    names: [
      'Maria Giovanna Barboni',
      'Simone Bagattoni',
      'Francesco Basile',
      'Corrado Bondi',
      'Duccio Caccioni',
      'Claudio Carboni',
      'Gianalberto Cavazza',
      'Marco Cippone',
      'Mario Cucinella',
      'Luca De Poli',
      'Mirella Falconi',
      'Claudio Marchetti',
      'Annalisa Mazzoni',
      'Roberto Morgantini',
      'Marina Orlandi Biagi',
      'Gabriela Piana',
      'Massimo Ruggiano',
      'Martina Stefanini',
      'Teresa Tagariello',
      'Stefano Zanetti',
    ],
  },

  board: {
    title: 'Il Consiglio Direttivo',
    members: [
      { name: 'Gabriela Piana', role: 'Presidente' },
      { name: 'Claudio Carboni', role: 'Vicepresidente' },
      { name: 'Gianalberto Cavazza', role: 'Tesoriere' },
      { name: 'Martina Stefanini', role: 'Segretaria' },
      { name: 'Duccio Caccioni', role: 'Consigliere' },
      { name: 'Don Marco Cippone', role: 'Consigliere' },
      { name: 'Luca De Poli', role: 'Consigliere' },
      { name: 'Roberto Morgantini', role: 'Consigliere' },
      { name: 'Cesare Nucci', role: 'Consigliere' },
      { name: 'Marina Orlandi Biagi', role: 'Consigliere' },
      { name: 'Giulio Giuseppe Sangiorgio', role: 'Consigliere' },
    ],
  },

  supportPage: {
    title: 'Sostieni il nostro progetto',
    description:
      'Il tuo contributo ci aiuta a garantire cure dentali gratuite a chi ne ha più bisogno. Ogni donazione, grande o piccola, fa la differenza.',
    donateText:
      'L\'Ambulatorio Odontoiatrico Solidale opera esclusivamente grazie alle donazioni di privati cittadini, aziende e fondazioni. Il tuo contributo è fondamentale per continuare a garantire cure gratuite a chi ne ha bisogno.',
    donateIban: 'IT00 A000 0000 0000 0000 0000 000',
    donationCards: [
      {
        title: 'Donazione Economica',
        description: 'Anche un piccolo contributo ci permette di acquistare materiali, strumenti, manufatti protesici e ortodontici e mantenere la struttura efficiente.',
      },
      {
        title: 'Donazione di Materiali',
        description: 'Materiali odontoiatrici, strumenti professionali, attrezzature medicali sono sempre necessari.',
      },
      {
        title: 'Sostegno Aziendale',
        description: 'La tua azienda può sostenere le nostre attività attraverso donazioni, sponsorizzazioni, progetti di Corporate Social Responsibility (CSR).',
      },
    ],
    bankIntestatario: 'Ambulatorio Odontoiatrico Solidale OdV',
    bankCausale: 'Donazione liberale',
    taxNote: 'Tutte le donazioni sono fiscalmente deducibili. Conserva la ricevuta del bonifico per la dichiarazione dei redditi.',
    cinquePerMilleCF: 'XXXXXXXXXXXXXXXX',
    cinquePerMilleText: 'Puoi destinare il tuo 5x1000 all\'Ambulatorio Odontoiatrico Solidale OdV. È un gesto che non ti costa nulla ma fa una grande differenza!',
  },

  volunteerPage: {
    title: 'Diventa Volontario',
    description: 'L\'ambulatorio vive grazie al contributo di volontari che mettono a disposizione il loro tempo, le loro competenze e la loro passione per aiutare chi ha bisogno.',
    roles: [
      {
        title: 'Professionisti Sanitari',
        items: ['Odontoiatri', 'Igienisti dentali', 'Assistenti alla poltrona', 'Odontotecnici'],
      },
      {
        title: 'Supporto Organizzativo',
        items: ['Accoglienza pazienti', 'Gestione appuntamenti', 'Supporto amministrativo', 'Comunicazione e fundraising'],
      },
    ],
    benefits: [
      'Formazione continua e aggiornamento professionale a cadenza mensile',
      'Assicurazione per lo svolgimento dell\'attività',
      'Attestati di partecipazione e certificazioni',
    ],
    ctaText: 'Sei interessato? Contattaci per maggiori informazioni su come diventare volontario. Ogni contributo, anche di poche ore al mese, fa la differenza!',
  },

  navbar: {
    brandName: 'Ambulatorio Solidale',
  },

  footer: {
    description:
      'Ambulatorio Odontoiatrico Solidale OdV — Associazione di Volontariato iscritta al RUNTS. Cure dentali gratuite per persone in difficoltà a Bologna.',
  },
};
