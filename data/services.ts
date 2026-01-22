import { Service } from '@/types'

export const services: Service[] = [
  {
    id: 'interior-renovation',
    title: {
      fr: 'Rénovation intérieure',
      en: 'Interior Renovation',
    },
    description: {
      fr: 'Transformez vos espaces intérieurs avec notre expertise en rénovation complète. Nous modernisons vos pièces tout en respectant l'architecture existante.',
      en: 'Transform your interior spaces with our complete renovation expertise. We modernize your rooms while respecting the existing architecture.',
    },
    features: {
      fr: [
        'Étude et conception personnalisée',
        'Rénovation de cuisine et salle de bain',
        'Aménagement de combles',
        'Décoration et finition',
      ],
      en: [
        'Custom study and design',
        'Kitchen and bathroom renovation',
        'Attic conversion',
        'Decoration and finishing',
      ],
    },
    faqs: [
      {
        fr: 'Quelle est la durée moyenne d'une rénovation intérieure ?',
        en: 'What is the average duration of an interior renovation?',
      },
      {
        fr: 'Fournissez-vous un plan de financement ?',
        en: 'Do you provide a financing plan?',
      },
    ],
  },
  {
    id: 'exterior-renovation',
    title: {
      fr: 'Rénovation extérieure',
      en: 'Exterior Renovation',
    },
    description: {
      fr: 'Améliorez l'aspect et la valeur de votre propriété avec nos travaux extérieurs. Toiture, façade, terrasse et plus encore.',
      en: 'Enhance the appearance and value of your property with our exterior works. Roofing, facade, terrace and more.',
    },
    features: {
      fr: [
        'Rénovation de toiture',
        'Isolation thermique',
        'Façades et peinture extérieure',
        'Aménagement de terrasses',
      ],
      en: [
        'Roof renovation',
        'Thermal insulation',
        'Facades and exterior painting',
        'Terrace development',
      ],
    },
    faqs: [
      {
        fr: 'Quels matériaux utilisez-vous ?',
        en: 'What materials do you use?',
      },
      {
        fr: 'Quelles sont les garanties offertes ?',
        en: 'What warranties are offered?',
      },
    ],
  },
  {
    id: 'walls-plaster',
    title: {
      fr: 'Murs et plâtre',
      en: 'Walls and Plaster',
    },
    description: {
      fr: 'Maîtrise technique dans l'application de plâtre, enduits et finitions de murs. Résultat lisse et durable.',
      en: 'Technical mastery in plaster application, rendering and wall finishes. Smooth and durable result.',
    },
    features: {
      fr: [
        'Plâtre traditionnel et moderne',
        'Enduits décoratifs',
        'Réparation de fissures',
        'Isolation phonique',
      ],
      en: [
        'Traditional and modern plaster',
        'Decorative renders',
        'Crack repair',
        'Sound insulation',
      ],
    },
    faqs: [
      {
        fr: 'Comment préparez-vous les surfaces ?',
        en: 'How do you prepare surfaces?',
      },
      {
        fr: 'Quels types de finitions proposez-vous ?',
        en: 'What types of finishes do you offer?',
      },
    ],
  },
  {
    id: 'painting',
    title: {
      fr: 'Peinture et finition',
      en: 'Painting and Finishing',
    },
    description: {
      fr: 'Peinture professionnelle intérieure et extérieure avec des produits de qualité. Attention aux détails et finitions parfaites.',
      en: 'Professional interior and exterior painting with quality products. Attention to detail and perfect finishes.',
    },
    features: {
      fr: [
        'Peinture intérieure',
        'Peinture extérieure',
        'Vernis et protections',
        'Préparation et ponçage',
      ],
      en: [
        'Interior painting',
        'Exterior painting',
        'Varnishes and protections',
        'Preparation and sanding',
      ],
    },
    faqs: [
      {
        fr: 'Quels types de peintures utilisez-vous ?',
        en: 'What types of paints do you use?',
      },
      {
        fr: 'Comment préparez-vous les surfaces ?',
        en: 'How do you prepare surfaces?',
      },
    ],
  },
  {
    id: 'flooring',
    title: {
      fr: 'Sols (parquet, carrelage, stratifié)',
      en: 'Flooring (Parquet, Tiles, Laminate)',
    },
    description: {
      fr: 'Installation et rénovation de tous types de sols. Du parquet traditionnel au carrelage moderne.',
      en: 'Installation and renovation of all flooring types. From traditional parquet to modern tiles.',
    },
    features: {
      fr: [
        'Parquet massif et contrecollé',
        'Carrelage et grès cérame',
        'Stratifié et PVC',
        'Dalle béton polie',
      ],
      en: [
        'Solid and engineered parquet',
        'Tiles and ceramic',
        'Laminate and PVC',
        'Polished concrete slabs',
      ],
    },
    faqs: [
      {
        fr: 'Quelle est la meilleure solution pour une salle de bain ?',
        en: 'What is the best solution for a bathroom?',
      },
      {
        fr: 'Quels entretiens recommandez-vous ?',
        en: 'What maintenance do you recommend?',
      },
    ],
  },
  {
    id: 'restoration',
    title: {
      fr: 'Restauration et réparations',
      en: 'Restoration and Repairs',
    },
    description: {
      fr: 'Restauration de bâtiments anciens avec respect du patrimoine. Réparations de qualité pour prolonger la vie de votre bien.',
      en: 'Restoration of old buildings with respect for heritage. Quality repairs to extend the life of your property.',
    },
    features: {
      fr: [
        'Restauration de façades anciennes',
        'Réparations structurelles',
        'Conservation du patrimoine',
        'Diagnostic et prévention',
      ],
      en: [
        'Restoration of old facades',
        'Structural repairs',
        'Heritage conservation',
        'Diagnosis and prevention',
      ],
    },
    faqs: [
      {
        fr: 'Travaillez-vous sur des bâtiments classés ?',
        en: 'Do you work on listed buildings?',
      },
      {
        fr: 'Quelles sont vos certifications ?',
        en: 'What are your certifications?',
      },
    ],
  },
  {
    id: 'masonry',
    title: {
      fr: 'Maçonnerie et petits ouvrages',
      en: 'Masonry and Small Works',
    },
    description: {
      fr: 'Travaux de maçonnerie générale et petits ouvrages de construction. Du mur porteur au petit aménagement.',
      en: 'General masonry works and small construction projects. From load-bearing walls to small fittings.',
    },
    features: {
      fr: [
        'Murs porteurs et cloisons',
        'Mur de soutènement',
        'Aménagement extérieur',
        'Petites constructions',
      ],
      en: [
        'Load-bearing walls and partitions',
        'Retaining walls',
        'Exterior fittings',
        'Small constructions',
      ],
    },
    faqs: [
      {
        fr: 'Comment obtenez-vous les autorisations ?',
        en: 'How do you obtain permits?',
      },
      {
        fr: 'Quelles sont les délais ?',
        en: 'What are the timelines?',
      },
    ],
  },
]