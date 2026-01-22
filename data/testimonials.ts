import { Testimonial } from '@/types'

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Marie L.',
    role: 'Propriétaire',
    location: 'Ouchy, Lausanne',
    text: {
      fr: 'FENIX PLUS SA a transformé notre appartement de 1960 en un espace moderne et fonctionnel. L'équipe est professionnelle, à l'écoute et respecte les délais. Je recommande vivement.',
      en: 'FENIX PLUS SA transformed our 1960s apartment into a modern, functional space. The team is professional, attentive, and respects deadlines. Highly recommended.',
    },
    rating: 5,
    date: 'Mars 2024',
  },
  {
    id: 't2',
    name: 'Pierre M.',
    role: 'Entrepreneur',
    location: 'Renens',
    text: {
      fr: 'Travaux de maçonnerie réalisés avec précision. Qualité des matériaux et finitions impeccables. Respect du budget initial.',
      en: 'Masonry work carried out with precision. Quality materials and impeccable finishes. Respected initial budget.',
    },
    rating: 5,
    date: 'Février 2024',
  },
  {
    id: 't3',
    name: 'Sophie et Marc D.',
    role: 'Propriétaires',
    location: 'Bourdonnette',
    text: {
      fr: 'Rénovation de façade réussie. Notre maison a retrouvé sa splendeur et son isolation thermique est excellente.',
      en: 'Successful facade renovation. Our house regained its splendor and its thermal insulation is excellent.',
    },
    rating: 5,
    date: 'Janvier 2024',
  },
  {
    id: 't4',
    name: 'Jean-Pierre B.',
    role: 'Commerçant',
    location: 'Lausanne Centre',
    text: {
      fr: 'Rénovation de mes bureaux terminée dans les temps. L'équipe a été très flexible avec nos horaires d'ouverture.',
      en: 'Office renovation completed on time. The team was very flexible with our opening hours.',
    },
    rating: 4,
    date: 'Décembre 2023',
  },
  {
    id: 't5',
    name: 'Claudine R.',
    role: 'Retraitée',
    location: 'Vevey',
    text: {
      fr: 'Très satisfait de la nouvelle toiture. Projet bien conduit, équipe compétente et sympathique.',
      en: 'Very satisfied with the new roof. Well-managed project, competent and friendly team.',
    },
    rating: 5,
    date: 'Novembre 2023',
  },
  {
    id: 't6',
    name: 'Antoine et Marie F.',
    role: 'Jeune couple',
    location: 'Écublens',
    text: {
      fr: 'Notre premier appartement a été rénové de A à Z. L'équipe a été très professionnelle et a su nous conseiller.',
      en: 'Our first apartment was renovated from A to Z. The team was very professional and knew how to advise us.',
    },
    rating: 5,
    date: 'Octobre 2023',
  },
]