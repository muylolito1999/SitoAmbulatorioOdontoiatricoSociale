import type { SiteContent } from './types';

export const defaultContent: SiteContent = {
  hero: {
    title: 'Un sorriso per tutti',
    subtitle:
      'Cure dentali gratuite per chi non può permettersele. L\'Ambulatorio Odontoiatrico Solidale OdV di Bologna offre assistenza odontoiatrica a persone in situazione di fragilità.',
    backgroundImage: '',
    ctaPrimary: { text: 'Come funziona', href: '#come-funziona' },
    ctaSecondary: { text: 'Sostienici', href: '/support' },
  },

  chiSiamo: {
    title: 'Chi siamo',
    description:
      'L\'Ambulatorio Odontoiatrico Solidale OdV è un\'associazione di volontariato nata a Bologna con l\'obiettivo di garantire cure dentali gratuite a persone in condizioni di vulnerabilità sociale ed economica. Operiamo grazie a un team di odontoiatri, igienisti dentali e volontari che dedicano il proprio tempo e le proprie competenze a chi ha più bisogno. Il nostro ambulatorio è un luogo di accoglienza, dove ogni paziente viene trattato con dignità e professionalità.',
    image: '',
  },

  cosaFacciamo: {
    title: 'Cosa facciamo',
    subtitle: 'I nostri servizi per la comunità',
    cards: [
      {
        icon: '🦷',
        title: 'Cure Dentali',
        description:
          'Visite odontoiatriche, estrazioni, otturazioni, protesi e trattamenti conservativi completamente gratuiti.',
      },
      {
        icon: '🤝',
        title: 'Accoglienza',
        description:
          'Accogliamo i pazienti segnalati dai servizi sociali, da Caritas e da altre associazioni del territorio.',
      },
      {
        icon: '🛡️',
        title: 'Prevenzione',
        description:
          'Sedute di igiene orale, educazione alla salute dentale e programmi di prevenzione per adulti e minori.',
      },
      {
        icon: '💛',
        title: 'Volontariato',
        description:
          'Il nostro team è composto interamente da volontari: odontoiatri, igienisti, assistenti alla poltrona e operatori.',
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
    subtitle: 'Il percorso dell\'Ambulatorio dalla fondazione ad oggi',
    events: [
      {
        date: 'Settembre 2023',
        title: 'Apertura a Villa Pallavicini',
        description:
          'L\'ambulatorio apre le porte nella sede di Villa Pallavicini a Bologna, grazie alla collaborazione con il Quartiere Porto-Saragozza e al sostegno di numerosi donatori.',
      },
      {
        date: 'Dicembre 2023',
        title: 'Prime 50 persone assistite',
        description:
          'In pochi mesi raggiungiamo i primi 50 pazienti presi in carico, confermando il bisogno reale di cure odontoiatriche gratuite sul territorio.',
      },
      {
        date: 'Giugno 2024',
        title: '100 pazienti e oltre 500 prestazioni',
        description:
          'Il numero di pazienti e prestazioni cresce costantemente. L\'ambulatorio diventa un punto di riferimento per i servizi sociali del territorio.',
      },
      {
        date: 'Gennaio 2025',
        title: '200 pazienti raggiunti',
        description:
          'Superiamo la soglia dei 200 pazienti presi in carico, con oltre 1.000 prestazioni erogate gratuitamente.',
      },
      {
        date: 'Maggio 2025',
        title: 'Nuova sede in Via D\'Annunzio',
        description:
          'L\'ambulatorio si trasferisce nella nuova sede di Via Gabriele D\'Annunzio 19, più ampia e meglio attrezzata per rispondere alla crescente domanda.',
      },
    ],
  },

  comeFunziona: {
    title: 'Come funziona',
    subtitle: 'Il percorso di accesso alle cure',
    steps: [
      {
        title: 'Segnalazione',
        description:
          'Il paziente viene segnalato dai servizi sociali, da Caritas, da associazioni del territorio o può contattarci direttamente.',
      },
      {
        title: 'Contatto',
        description:
          'Il nostro team di accoglienza raccoglie le informazioni necessarie e valuta la situazione del paziente.',
      },
      {
        title: 'Prima visita',
        description:
          'Il paziente viene visitato dai nostri odontoiatri volontari per una valutazione completa dello stato di salute orale.',
      },
      {
        title: 'Piano di cura',
        description:
          'Viene elaborato un piano di trattamento personalizzato, interamente gratuito, con le cure necessarie.',
      },
      {
        title: 'Trattamento',
        description:
          'Il paziente riceve tutte le cure previste dal piano, con appuntamenti regolari presso il nostro ambulatorio.',
      },
    ],
  },

  trasparenza: {
    title: 'Trasparenza',
    subtitle: 'Come utilizziamo le risorse',
    highlights: [
      {
        label: 'Valore servizi erogati',
        value: '€80.463',
        description: 'Valore economico delle prestazioni odontoiatriche gratuite fornite ai pazienti',
      },
      {
        label: 'Costi sostenuti',
        value: '€87.453',
        description: 'Costi operativi per materiali, attrezzature e gestione dell\'ambulatorio',
      },
      {
        label: 'Fonti di finanziamento',
        value: '5x1000, donazioni, bandi',
        description: 'L\'ambulatorio si sostiene grazie al 5x1000, donazioni private e bandi di fondazioni',
      },
    ],
    note: 'Tutti i professionisti operano a titolo di volontariato. I fondi raccolti sono destinati esclusivamente a materiali di consumo, attrezzature e costi di gestione.',
  },

  partner: {
    title: 'I nostri sostenitori',
    subtitle: 'Grazie a chi rende possibile il nostro lavoro',
    partners: [
      'Fondazione AZIMUT',
      'Caritas Diocesana di Bologna',
      'Fondazione Cassa di Risparmio in Bologna',
      'Fondazione del Monte di Bologna e Ravenna',
      'UNICREDIT',
      'Quartiere Porto-Saragozza',
    ],
  },

  contactBand: {
    title: 'Hai bisogno di aiuto?',
    subtitle: 'Contattaci per informazioni sulle cure o per sapere come sostenerci',
  },

  contact: {
    email: 'ambulatoriosolidale.bologna@gmail.com',
    phone: '+39 375 531 1887',
    address: 'Via Gabriele D\'Annunzio 19, 40137 Bologna',
  },

  about: {
    title: 'La nostra missione',
    mission:
      'Garantire l\'accesso alle cure odontoiatriche a tutte le persone che, per ragioni economiche o sociali, non possono permettersi trattamenti dentali. Crediamo che la salute orale sia un diritto fondamentale e lavoriamo ogni giorno per renderlo accessibile a tutti.',
    vision:
      'Un mondo in cui nessuno debba rinunciare alla salute orale per mancanza di risorse. Lavoriamo per una società più giusta, dove la solidarietà e il volontariato colmano le lacune del sistema sanitario.',
    history:
      'L\'Ambulatorio Odontoiatrico Solidale nasce nel settembre 2023 a Bologna, dalla visione di un gruppo di odontoiatri e cittadini che hanno deciso di mettere le proprie competenze al servizio della comunità. In meno di due anni, l\'associazione ha preso in carico oltre 248 pazienti, erogando più di 1.180 prestazioni odontoiatriche gratuite. Nel maggio 2025, l\'ambulatorio si è trasferito nella nuova sede di Via D\'Annunzio, più ampia e attrezzata.',
  },

  founders: {
    title: 'I fondatori',
    names: [
      'Dott. Marco Bianchi',
      'Dott.ssa Laura Rossi',
      'Dott. Giuseppe Verdi',
      'Dott.ssa Anna Russo',
      'Sig. Paolo Colombo',
      'Sig.ra Maria Esposito',
    ],
  },

  board: {
    title: 'Il Consiglio Direttivo',
    members: [
      { name: 'Dott. Marco Bianchi', role: 'Presidente' },
      { name: 'Dott.ssa Laura Rossi', role: 'Vicepresidente' },
      { name: 'Dott. Giuseppe Verdi', role: 'Segretario' },
      { name: 'Sig. Paolo Colombo', role: 'Tesoriere' },
      { name: 'Dott.ssa Anna Russo', role: 'Consigliere' },
    ],
  },

  supportPage: {
    title: 'Sostieni il nostro progetto',
    description:
      'Il tuo contributo ci aiuta a garantire cure dentali gratuite a chi ne ha più bisogno. Ogni donazione, grande o piccola, fa la differenza.',
    donateText:
      'Puoi sostenere l\'Ambulatorio Odontoiatrico Solidale con una donazione tramite bonifico bancario o destinando il tuo 5x1000. Ogni euro raccolto viene utilizzato per acquistare materiali di consumo, attrezzature odontoiatriche e sostenere i costi di gestione dell\'ambulatorio.',
    volunteerText:
      'Cerchiamo odontoiatri, igienisti dentali, assistenti alla poltrona e volontari per l\'accoglienza e la segreteria. Se vuoi donare il tuo tempo e le tue competenze, contattaci!',
    donateIban: 'IT00 A000 0000 0000 0000 0000 000',
  },

  navbar: {
    brandName: 'Ambulatorio Solidale',
  },

  footer: {
    description:
      'Ambulatorio Odontoiatrico Solidale OdV — Associazione di Volontariato iscritta al RUNTS. Cure dentali gratuite per persone in difficoltà a Bologna.',
  },
};
