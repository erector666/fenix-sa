import { Service } from '@/types'

export const services: Service[] = [
  {
    id: 'interior-renovation',
    title: {
      fr: 'Rénovation intérieure',
      en: 'Interior Renovation',
    },
    description: {
      fr: "Transformez vos espaces intérieurs avec notre expertise en rénovation complète. Nous modernisons vos pièces tout en respectant l'architecture existante.",
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
        fr: "Quelle est la durée moyenne d'une rénovation intérieure ?",
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
      fr: "Améliorez l'aspect et la valeur de votre propriété avec nos travaux extérieurs. Toiture, façade, terrasse et plus encore.",
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
      fr: "Maîtrise technique dans l'application de plâtre, enduits et finitions de murs. Résultat lisse et durable.",
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
        fr: "Quelle est la meilleure solution pour une salle de bain ?",
        en: 'What is the best solution for a bathroom?',
      },
      {
        fr: 'Quels types de pose proposez-vous ?',
        en: 'What types of installation do you offer?',
      },
    ],
  },
  {
    id: 'insulation',
    title: {
      fr: 'Isolation thermique et phonique',
      en: 'Thermal and Acoustic Insulation',
    },
    description: {
      fr: "Améliorez le confort et la performance énergétique de votre bien avec nos solutions d'isolation.",
      en: 'Improve the comfort and energy performance of your property with our insulation solutions.',
    },
    features: {
      fr: [
        'Isolation des murs',
        'Isolation de toiture',
        'Double vitrage',
        'Isolation phonique',
      ],
      en: [
        'Wall insulation',
        'Roof insulation',
        'Double glazing',
        'Acoustic insulation',
      ],
    },
    faqs: [
      {
        fr: "Quelle est l'économie réalisable ?",
        en: 'What savings can be achieved?',
      },
      {
        fr: 'Quels matériaux utilisez-vous ?',
        en: 'What materials do you use?',
      },
    ],
  },
  {
    id: 'masonry',
    title: {
      fr: 'Maçonnerie',
      en: 'Masonry',
    },
    description: {
      fr: "Travaux de maçonnerie traditionnelle et moderne. Murs, cloisons, dallage et aménagements extérieurs.",
      en: 'Traditional and modern masonry work. Walls, partitions, flooring and exterior developments.',
    },
    features: {
      fr: [
        'Murs porteurs et cloisons',
        'Dallage béton',
        'Mur de soutènement',
        'Aménagement de jardin',
      ],
      en: [
        'Load-bearing walls and partitions',
        'Concrete flooring',
        'Retaining wall',
        'Garden development',
      ],
    },
    faqs: [
      {
        fr: 'Quelle est la différence entre maçonnerie traditionnelle et moderne ?',
        en: 'What is the difference between traditional and modern masonry?',
      },
      {
        fr: 'Fournissez-vous les matériaux ?',
        en: 'Do you provide materials?',
      },
    ],
  },
  {
    id: 'woodworking',
    title: {
      fr: 'Menuiserie',
      en: 'Woodworking',
    },
    description: {
      fr: "Fabrication et installation de menuiserie sur mesure. Portes, fenêtres, escaliers et aménagements intérieurs.",
      en: 'Custom fabrication and installation of woodwork. Doors, windows, stairs and interior developments.',
    },
    features: {
      fr: [
        'Portes et fenêtres',
        'Escaliers sur mesure',
        'Aménagements intérieurs',
        'Meubles intégrés',
      ],
      en: [
        'Doors and windows',
        'Custom stairs',
        'Interior developments',
        'Built-in furniture',
      ],
    },
    faqs: [
      {
        fr: 'Quels types de bois utilisez-vous ?',
        en: 'What types of wood do you use?',
      },
      {
        fr: 'Proposez-vous des finitions spéciales ?',
        en: 'Do you offer special finishes?',
      },
    ],
  },
  {
    id: 'lighting',
    title: {
      fr: 'Éclairage et électricité',
      en: 'Lighting and Electricity',
    },
    description: {
      fr: "Installation d'éclairage LED et rénovation électrique. Confort et sécurité.",
      en: 'LED lighting installation and electrical renovation. Comfort and safety.',
    },
    features: {
      fr: [
        'Éclairage LED',
        'Rénovation électrique',
        'Tableaux électriques',
        'Prises et interrupteurs',
      ],
      en: [
        'LED lighting',
        'Electrical renovation',
        'Electrical panels',
        'Outlets and switches',
      ],
    },
    faqs: [
      {
        fr: 'Quelle est la durée de garantie ?',
        en: 'What is the warranty period?',
      },
      {
        fr: 'Proposez-vous un plan de mise aux normes ?',
        en: 'Do you offer a compliance plan?',
      },
    ],
  },
  {
    id: 'roofing',
    title: {
      fr: 'Toiture',
      en: 'Roofing',
    },
    description: {
      fr: 'Rénovation et installation de toitures avec matériaux de qualité. Étanchéité garantie.',
      en: 'Roof renovation and installation with quality materials. Waterproofing guaranteed.',
    },
    features: {
      fr: [
        'Rénovation de toiture',
        'Ardoise naturelle',
        'Étanchéité',
        'Isolation de toiture',
      ],
      en: [
        'Roof renovation',
        'Natural slate',
        'Waterproofing',
        'Roof insulation',
      ],
    },
    faqs: [
      {
        fr: 'Quelle est la durée de vie d\'une toiture ?',
        en: 'What is the lifespan of a roof?',
      },
      {
        fr: 'Quels matériaux proposez-vous ?',
        en: 'What materials do you offer?',
      },
    ],
  },
  {
    id: 'facade',
    title: {
      fr: 'Façade',
      en: 'Facade',
    },
    description: {
      fr: 'Rénovation de façade avec isolation thermique. Application de chaux naturelle et peinture silicatée.',
      en: 'Facade renovation with thermal insulation. Application of natural lime and silicate paint.',
    },
    features: {
      fr: [
        'Isolation thermique',
        'Chaux naturelle',
        'Peinture silicatée',
        'Nettoyage haute pression',
      ],
      en: [
        'Thermal insulation',
        'Natural lime',
        'Silicate paint',
        'High-pressure cleaning',
      ],
    },
    faqs: [
      {
        fr: 'Quelle est la durée de vie de la chaux ?',
        en: 'What is the lifespan of lime?',
      },
      {
        fr: 'Quels sont les avantages de la peinture silicatée ?',
        en: 'What are the advantages of silicate paint?',
      },
    ],
  },
  {
    id: 'terrace',
    title: {
      fr: 'Terrasse',
      en: 'Terrace',
    },
    description: {
      fr: 'Aménagement de terrasses avec matériaux durables. Dalles en pierre naturelle et jardin vertical.',
      en: 'Terrace development with durable materials. Natural stone slabs and vertical garden.',
    },
    features: {
      fr: [
        'Dalles en pierre naturelle',
        'Jardin vertical',
        'Éclairage extérieur',
        'Mobilier de jardin',
      ],
      en: [
        'Natural stone slabs',
        'Vertical garden',
        'Outdoor lighting',
        'Garden furniture',
      ],
    },
    faqs: [
      {
        fr: 'Quels types de matériaux proposez-vous ?',
        en: 'What types of materials do you offer?',
      },
      {
        fr: 'Quelle est la durée d\'installation ?',
        en: 'What is the installation duration?',
      },
    ],
  },
  {
    id: 'basement',
    title: {
      fr: 'Cave',
      en: 'Cellar',
    },
    description: {
      fr: 'Aménagement de caves avec mur en pierre apparente. Éclairage d\'ambiance et rangements.',
      en: 'Cellar development with exposed stone walls. Ambient lighting and storage.',
    },
    features: {
      fr: [
        'Mur en pierre apparente',
        'Éclairage d\'ambiance',
        'Rangements intégrés',
        'Sol résine',
      ],
      en: [
        'Exposed stone walls',
        'Ambient lighting',
        'Integrated storage',
        'Resin flooring',
      ],
    },
    faqs: [
      {
        fr: 'Comment traitez-vous les murs en pierre ?',
        en: 'How do you treat stone walls?',
      },
      {
        fr: 'Quelle est la durée d\'aménagement ?',
        en: 'What is the development duration?',
      },
    ],
  },
  {
    id: 'garage',
    title: {
      fr: 'Garage',
      en: 'Garage',
    },
    description: {
      fr: 'Aménagement de garages avec rangements intégrés et sol résine. Espace optimisé.',
      en: 'Garage development with integrated storage and resin flooring. Optimized space.',
    },
    features: {
      fr: [
        'Rangements intégrés',
        'Sol résine',
        'Éclairage LED',
        'Porte de garage',
      ],
      en: [
        'Integrated storage',
        'Resin flooring',
        'LED lighting',
        'Garage door',
      ],
    },
    faqs: [
      {
        fr: 'Quelle est la durée de vie du sol résine ?',
        en: 'What is the lifespan of resin flooring?',
      },
      {
        fr: 'Quels sont les avantages des rangements intégrés ?',
        en: 'What are the advantages of integrated storage?',
      },
    ],
  },
  {
    id: 'attic',
    title: {
      fr: 'Combles',
      en: 'Attic',
    },
    description: {
      fr: 'Aménagement de combles habitables avec isolation thermique. Espace supplémentaire.',
      en: 'Attic development with thermal insulation. Additional space.',
    },
    features: {
      fr: [
        'Isolation thermique',
        'Fenêtres de toit',
        'Aménagement sur mesure',
        'Éclairage',
      ],
      en: [
        'Thermal insulation',
        'Roof windows',
        'Custom development',
        'Lighting',
      ],
    },
    faqs: [
      {
        fr: 'Quelle est la hauteur minimale requise ?',
        en: 'What is the minimum required height?',
      },
      {
        fr: 'Quels types d\'isolation proposez-vous ?',
        en: 'What types of insulation do you offer?',
      },
    ],
  },
  {
    id: 'waterproofing',
    title: {
      fr: 'Étanchéité',
      en: 'Waterproofing',
    },
    description: {
      fr: 'Rénovation d\'étanchéité avec matériaux durables. Garantie 10 ans.',
      en: 'Waterproofing renovation with durable materials. 10-year guarantee.',
    },
    features: {
      fr: [
        'Étanchéité toiture',
        'Étanchéité terrasse',
        'Étanchéité sous-sol',
        'Garantie 10 ans',
      ],
      en: [
        'Roof waterproofing',
        'Terrace waterproofing',
        'Basement waterproofing',
        '10-year guarantee',
      ],
    },
    faqs: [
      {
        fr: 'Quelle est la durée de garantie ?',
        en: 'What is the guarantee duration?',
      },
      {
        fr: 'Quels matériaux utilisez-vous ?',
        en: 'What materials do you use?',
      },
    ],
  },
  {
    id: 'safety',
    title: {
      fr: 'Sécurité',
      en: 'Safety',
    },
    description: {
      fr: 'Installation de serrures de sécurité et ferronnerie. Protection de votre bien.',
      en: 'Installation of security locks and ironwork. Protection of your property.',
    },
    features: {
      fr: [
        'Serrures de sécurité',
        'Ferronnerie',
        'Vitrages sécurisés',
        'Alarmes',
      ],
      en: [
        'Security locks',
        'Ironwork',
        'Security glazing',
        'Alarms',
      ],
    },
    faqs: [
      {
        fr: 'Quelles sont les normes de sécurité ?',
        en: 'What are the safety standards?',
      },
      {
        fr: 'Quels types de serrures proposez-vous ?',
        en: 'What types of locks do you offer?',
      },
    ],
  },
]
