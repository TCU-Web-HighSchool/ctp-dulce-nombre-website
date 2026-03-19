// ─── News / Blog Posts ─────────────────────────────────────────────
export interface NewsArticle {
  title: string;
  date: string;
  category: "Académico" | "Deportes" | "Cultural" | "General";
  image?: string;
  summary: string;
  body: string;
  isNew: boolean;
  isImportant: boolean;
  draft: boolean;
}

// ─── Job Board ─────────────────────────────────────────────────────
export interface JobListing {
  title: string;
  company: string;
  location: string;
  type: "Tiempo completo" | "Medio tiempo" | "Pasantía" | "Contrato";
  area:
    | "Informática"
    | "Electromecánica"
    | "Secretariado"
    | "Electrónica"
    | "Contabilidad"
    | "Turismo"
    | "General";
  description: string;
  tags: string[];
  logo?: string;
  applyUrl?: string;
  date: string;
  expiryDate?: string;
  active: boolean;
}

// ─── Academic Programs ─────────────────────────────────────────────
export interface AcademicProgram {
  title: string;
  icon: string;
  summary: string;
  body: string;
  duration: string;
  order: number;
  active: boolean;
}

// ─── FAQ ───────────────────────────────────────────────────────────
export interface FAQItem {
  question: string;
  answer: string;
  category: "Matrícula" | "Académico" | "Administrativo";
  order: number;
  active: boolean;
}

// ─── Site Settings ─────────────────────────────────────────────────
export interface GeneralSettings {
  schoolName: string;
  tagline: string;
  phone: string;
  email: string;
  address: string;
  facebookUrl?: string;
  instagramUrl?: string;
  linkedinUrl?: string;
}

export interface HeroSettings {
  headline: string;
  subheadline: string;
  badgeText: string;
  ctaPrimaryLabel: string;
  ctaSecondaryLabel: string;
  heroImage?: string;
}

// ─── About Page ────────────────────────────────────────────────────
export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  isHighlighted: boolean;
}

export interface MissionVision {
  icon: string;
  title: string;
  description: string;
}

export interface Facility {
  name: string;
  description: string;
  image: string;
}

export interface ServiceInfo {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export interface AboutSettings {
  heroImage: string;
  heroTitle: string;
  heroSubtitle: string;
  heroBadge: string;
  timeline: TimelineEvent[];
  mission: MissionVision;
  vision: MissionVision;
  facilities: Facility[];
  services: ServiceInfo[];
  anthemTitle: string;
  anthemVerses: string[];
}

// ─── Admissions Page ───────────────────────────────────────────────
export interface AdmissionStep {
  icon: string;
  title: string;
  description: string;
}

export interface DocumentCategory {
  category: string;
  items: { label: string; isChecked: boolean }[];
}

export interface AdmissionsSettings {
  heroImage: string;
  heroTitle: string;
  heroSubtitle: string;
  heroBadge: string;
  steps: AdmissionStep[];
  documents: DocumentCategory[];
  specialtyOptions: string[];
}

// ─── Contact Page ──────────────────────────────────────────────────
export interface OfficeHoursEntry {
  day: string;
  hours: string;
  isClosed: boolean;
}

export interface ContactDetail {
  icon: string;
  label: string;
  value: string;
  href?: string;
}

export interface ContactSettings {
  title: string;
  subtitle: string;
  officeHours: OfficeHoursEntry[];
  contactDetails: ContactDetail[];
  mapImage: string;
  address: string;
}

// ─── Home Page ─────────────────────────────────────────────────────
export interface StatItem {
  value: string;
  label: string;
}

export interface QuickAccessCard {
  img: string;
  alt: string;
  icon: string;
  title: string;
  desc: string;
  link: string;
  to: string;
}

export interface HomeSettings {
  heroBadge: string;
  heroTitle: string;
  heroDescription: string;
  heroCtaLabel: string;
  heroCtaLink: string;
  heroImage: string;
  heroBadgeValue: string;
  heroBadgeLabel: string;
  stats: StatItem[];
  quickAccessTitle: string;
  quickAccessCards: QuickAccessCard[];
}

// ─── Academic Page ─────────────────────────────────────────────────
export interface Specialty {
  title: string;
  icon: string;
  summary: string;
  duration: string;
  order: number;
  active: boolean;
}

export interface CalendarEvent {
  day: number;
  label: string;
  color: "primary" | "orange" | "red" | "green";
}

export interface EventLegendItem {
  color: "primary" | "orange" | "red" | "green";
  label: string;
}

export interface AcademicSettings {
  pageTitle: string;
  pageSubtitle: string;
  tabs: string[];
  specialties: Specialty[];
  calendarTitle: string;
  calendarSubtitle: string;
  calendarMonth: string;
  calendarEvents: CalendarEvent[];
  scholarshipTitle: string;
  scholarshipDescription: string;
  scholarshipBenefits: string[];
  sidebarImage: string;
  sidebarImageCaption: string;
  eventLegend: EventLegendItem[];
}

// ─── News Page Settings ────────────────────────────────────────────
export interface FilterCategory {
  label: string;
  icon: string;
}

export interface ArchiveYear {
  year: string;
  months: string[];
}

export interface NewsItem {
  id: number;
  category: string;
  isNew: boolean;
  isImportant: boolean;
  date: string;
  title: string;
  desc: string;
  img?: string;
}

export interface NewsSettings {
  pageTitle: string;
  filterCategories: FilterCategory[];
  archiveYears: ArchiveYear[];
  news: NewsItem[];
  subscribeTitle: string;
  subscribeDescription: string;
}

// ─── Job Board Page Settings ───────────────────────────────────────
export interface JobItem {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  area: string;
  description: string;
  tags: string[];
  logo?: string;
  date: string;
  active: boolean;
}

export interface JobBoardSettings {
  pageTitle: string;
  pageSubtitle: string;
  searchPlaceholder: string;
  areas: string[];
  jobs: JobItem[];
  employerCtaTitle: string;
  employerCtaDescription: string;
  employerCtaButton: string;
}

// ─── FAQ Page Settings ─────────────────────────────────────────────
export interface FAQEntry {
  q: string;
  a: string;
  category: "Matrícula" | "Académico" | "Administrativo";
}

export interface FAQSettings {
  heroTitle: string;
  heroSubtitle: string;
  searchPlaceholder: string;
  categories: string[];
  faqs: FAQEntry[];
  contactCtaTitle: string;
  contactCtaDescription: string;
  contactCtaButton: string;
}
