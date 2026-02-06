export interface HeroContent {
  title: string;
  subtitle: string;
  backgroundImage: string;
  ctaPrimary: { text: string; href: string };
  ctaSecondary: { text: string; href: string };
}

export interface ChiSiamoContent {
  title: string;
  description: string;
  image: string;
}

export interface CosaFacciamoCard {
  icon: string;
  title: string;
  description: string;
}

export interface CosaFacciamoContent {
  title: string;
  subtitle: string;
  cards: CosaFacciamoCard[];
}

export interface Stat {
  value: string;
  label: string;
  description: string;
}

export interface ImpattoContent {
  title: string;
  subtitle: string;
  stats: Stat[];
}

export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
}

export interface TimelineContent {
  title: string;
  subtitle: string;
  events: TimelineEvent[];
}

export interface Step {
  title: string;
  description: string;
}

export interface ComeFunzionaContent {
  title: string;
  subtitle: string;
  steps: Step[];
}

export interface TrasparenzaHighlight {
  label: string;
  value: string;
  description: string;
}

export interface TrasparenzaContent {
  title: string;
  subtitle: string;
  highlights: TrasparenzaHighlight[];
  note: string;
}

export interface PartnerContent {
  title: string;
  subtitle: string;
  partners: string[];
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
}

export interface ContactBandContent {
  title: string;
  subtitle: string;
}

export interface AboutContent {
  title: string;
  mission: string;
  vision: string;
  history: string;
}

export interface FoundersContent {
  title: string;
  names: string[];
}

export interface BoardMember {
  name: string;
  role: string;
}

export interface BoardContent {
  title: string;
  members: BoardMember[];
}

export interface SupportPageContent {
  title: string;
  description: string;
  donateText: string;
  volunteerText: string;
  donateIban: string;
}

export interface NavbarContent {
  brandName: string;
}

export interface FooterContent {
  description: string;
}

export interface SiteContent {
  hero: HeroContent;
  chiSiamo: ChiSiamoContent;
  cosaFacciamo: CosaFacciamoContent;
  impatto: ImpattoContent;
  timeline: TimelineContent;
  comeFunziona: ComeFunzionaContent;
  trasparenza: TrasparenzaContent;
  partner: PartnerContent;
  contactBand: ContactBandContent;
  contact: ContactInfo;
  about: AboutContent;
  founders: FoundersContent;
  board: BoardContent;
  supportPage: SupportPageContent;
  navbar: NavbarContent;
  footer: FooterContent;
}
