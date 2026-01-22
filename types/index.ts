export type Locale = 'fr' | 'en'

export interface Service {
  id: string
  title: { fr: string; en: string }
  description: { fr: string; en: string }
  icon?: string
  features: { fr: string[]; en: string[] }
  faqs: { fr: string; en: string }[]
}

export interface Project {
  id: string
  title: { fr: string; en: string }
  description: { fr: string; en: string }
  location: string
  services: string[]
  images: string[]
  beforeAfter?: boolean
}

export interface Testimonial {
  id: string
  name: string
  role?: string
  location?: string
  text: { fr: string; en: string }
  rating: number
  date?: string
}

export interface QuoteFormData {
  fullName: string
  phone: string
  email: string
  city: string
  workType: string
  budgetRange: string
  startDate: string
  message: string
  photos?: string
  consent: boolean
}

export interface Translation {
  [key: string]: {
    fr: string
    en: string
  }
}