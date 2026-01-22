import { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'renovation-ouuchy',
    title: {
      fr: 'Rénovation complète Ouchy',
      en: 'Complete Renovation Ouchy',
    },
    description: {
      fr: "Transformation d'un appartement de 1960 en espace moderne et lumineux. Réorganisation complète des espaces et installation de nouvelles installations.",
      en: 'Transformation of a 1960s apartment into a modern, bright space. Complete reorganization of spaces and installation of new facilities.',
    },
    location: 'Ouchy, Lausanne',
    services: ['Interior Renovation', 'Flooring', 'Painting'],
    images: [
      'https://images.unsplash.com/photo-1556912173-3db996ea8c89?w=800&q=80',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
      'https://images.unsplash.com/photo-1556912167-f556f1f39fdf?w=800&q=80',
    ],
    beforeAfter: true,
  },
  {
    id: 'facade-bourdonnette',
    title: {
      fr: 'Rénovation façade Bourdonnette',
      en: 'Facade Renovation Bourdonnette',
    },
    description: {
      fr: 'Rénovation complète de façade avec isolation thermique. Application de chaux naturelle et peinture silicatée.',
      en: 'Complete facade renovation with thermal insulation. Application of natural lime and silicate paint.',
    },
    location: 'Bourdonnette, Lausanne',
    services: ['Exterior Renovation', 'Walls and Plaster'],
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    ],
  },
  {
    id: 'cuisine-bernex',
    title: {
      fr: 'Cuisine moderne Bernex',
      en: 'Modern Kitchen Bernex',
    },
    description: {
      fr: 'Aménagement d\'une cuisine ouverte avec îlot central. Équipements intégrés et finitions haut de gamme.',
      en: 'Layout of an open kitchen with central island. Integrated appliances and high-end finishes.',
    },
    location: 'Bernex, Genève',
    services: ['Interior Renovation', 'Flooring', 'Painting'],
    images: [
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
      'https://images.unsplash.com/photo-1556912167-f556f1f39fdf?w=800&q=80',
      'https://images.unsplash.com/photo-1556912173-3db996ea8c89?w=800&q=80',
    ],
  },
  {
    id: 'salle-de-bain-renens',
    title: {
      fr: 'Salle de bain design Renens',
      en: 'Designer Bathroom Renens',
    },
    description: {
      fr: "Rénovation complète d'une salle de bain avec douche à l'italienne et carrelage grand format.",
      en: 'Complete renovation of a bathroom with Italian shower and large-format tiles.',
    },
    location: 'Renens, Vaud',
    services: ['Interior Renovation', 'Walls and Plaster', 'Flooring'],
    images: [
      'https://images.unsplash.com/photo-1556912167-f556f1f39fdf?w=800&q=80',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    ],
  },
  {
    id: 'toiture-vevey',
    title: {
      fr: 'Toiture Vevey',
      en: 'Roofing Vevey',
    },
    description: {
      fr: 'Rénovation de toiture avec ardoise naturelle et isolation intégrée. Étanchéité garantie 10 ans.',
      en: 'Roof renovation with natural slate and integrated insulation. Waterproofing guaranteed 10 years.',
    },
    location: 'Vevey, Vaud',
    services: ['Exterior Renovation'],
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    ],
  },
  {
    id: 'appartement-ecublens',
    title: {
      fr: 'Appartement Écublens',
      en: 'Apartment Écublens',
    },
    description: {
      fr: "Rénovation totale d'un appartement de 90m2. Décoration contemporaine et aménagement sur mesure.",
      en: 'Complete renovation of a 90m2 apartment. Contemporary decoration and custom fittings.',
    },
    location: 'Écublens, Vaud',
    services: ['Interior Renovation', 'Painting', 'Flooring'],
    images: [
      'https://images.unsplash.com/photo-1556912173-3db996ea8c89?w=800&q=80',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
      'https://images.unsplash.com/photo-1556912167-f556f1f39fdf?w=800&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    ],
  },
  {
    id: 'maison-montreux',
    title: {
      fr: 'Maison Montreux',
      en: 'House Montreux',
    },
    description: {
      fr: 'Aménagement extérieur d\'une maison avec terrasse, jardin et mur de soutènement.',
      en: 'Exterior layout of a house with terrace, garden and retaining wall.',
    },
    location: 'Montreux, Vaud',
    services: ['Masonry', 'Exterior Renovation'],
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    ],
  },
  {
    id: 'bureau-renovation',
    title: {
      fr: 'Rénovation bureau',
      en: 'Office Renovation',
    },
    description: {
      fr: 'Aménagement d\'un espace de travail moderne avec éclairage LED et acoustique améliorée.',
      en: 'Layout of a modern workspace with LED lighting and improved acoustics.',
    },
    location: 'Lausanne, Vaud',
    services: ['Interior Renovation', 'Painting'],
    images: [
      'https://images.unsplash.com/photo-1556912167-f556f1f39fdf?w=800&q=80',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    ],
  },
  {
    id: 'balcon-bernex',
    title: {
      fr: 'Balcon Bernex',
      en: 'Balcony Bernex',
    },
    description: {
      fr: 'Aménagement d\'un balcon avec terrasse en bois et jardinières intégrées.',
      en: 'Layout of a balcony with wooden decking and integrated planters.',
    },
    location: 'Bernex, Genève',
    services: ['Exterior Renovation', 'Woodworking'],
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    ],
  },
  {
    id: 'cave-renovation',
    title: {
      fr: 'Rénovation cave',
      en: 'Cellar Renovation',
    },
    description: {
      fr: "Aménagement d'une cave avec mur en pierre apparente et éclairage d'ambiance.",
      en: 'Layout of a cellar with exposed stone walls and ambient lighting.',
    },
    location: 'Lausanne, Vaud',
    services: ['Interior Renovation', 'Masonry', 'Lighting'],
    images: [
      'https://images.unsplash.com/photo-1556912173-3db996ea8c89?w=800&q=80',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    ],
  },
  {
    id: 'garage-renovation',
    title: {
      fr: 'Rénovation garage',
      en: 'Garage Renovation',
    },
    description: {
      fr: 'Aménagement d\'un garage avec rangements intégrés et sol résine.',
      en: 'Layout of a garage with integrated storage and resin flooring.',
    },
    location: 'Renens, Vaud',
    services: ['Interior Renovation', 'Flooring'],
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    ],
  },
  {
    id: 'terrasse-renovation',
    title: {
      fr: 'Rénovation terrasse',
      en: 'Terrace Renovation',
    },
    description: {
      fr: 'Rénovation d\'une terrasse avec dalles en pierre naturelle et jardin vertical.',
      en: 'Renovation of a terrace with natural stone slabs and vertical garden.',
    },
    location: 'Vevey, Vaud',
    services: ['Exterior Renovation', 'Masonry'],
    images: [
      'https://images.unsplash.com/photo-1556912167-f556f1f39fdf?w=800&q=80',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    ],
  },
  {
    id: 'toit-terrasse',
    title: {
      fr: 'Toit terrasse',
      en: 'Flat Roof',
    },
    description: {
      fr: 'Rénovation d\'un toit terrasse avec étanchéité et drainage intégré.',
      en: 'Renovation of a flat roof with waterproofing and integrated drainage.',
    },
    location: 'Lausanne, Vaud',
    services: ['Exterior Renovation'],
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    ],
  },
  {
    id: 'isolation-renovation',
    title: {
      fr: 'Isolation thermique',
      en: 'Thermal Insulation',
    },
    description: {
      fr: 'Rénovation d\'isolation thermique avec matériaux écologiques et durables.',
      en: 'Renovation of thermal insulation with ecological and sustainable materials.',
    },
    location: 'Lausanne, Vaud',
    services: ['Exterior Renovation', 'Insulation'],
    images: [
      'https://images.unsplash.com/photo-1556912173-3db996ea8c89?w=800&q=80',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    ],
  },
  {
    id: 'serrurerie-renovation',
    title: {
      fr: 'Serrurerie',
      en: 'Locksmith',
    },
    description: {
      fr: 'Installation de ferronnerie et serrurerie de sécurité pour entrée principale.',
      en: 'Installation of wrought ironwork and security locksmithing for main entrance.',
    },
    location: 'Lausanne, Vaud',
    services: ['Metalwork'],
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    ],
  },
  {
    id: 'menuiserie-renovation',
    title: {
      fr: 'Menuiserie',
      en: 'Carpentry',
    },
    description: {
      fr: 'Fabrication et installation de menuiserie sur mesure en bois et aluminium.',
      en: 'Fabrication and installation of custom carpentry in wood and aluminum.',
    },
    location: 'Lausanne, Vaud',
    services: ['Woodworking', 'Interior Renovation'],
    images: [
      'https://images.unsplash.com/photo-1556912167-f556f1f39fdf?w=800&q=80',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    ],
  },
  {
    id: 'electricite-renovation',
    title: {
      fr: 'Électricité',
      en: 'Electrical',
    },
    description: {
      fr: 'Rénovation complète d\'installation électrique avec tableau sécurisé.',
      en: 'Complete renovation of electrical installation with secure panel.',
    },
    location: 'Lausanne, Vaud',
    services: ['Electrical'],
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    ],
  },
  {
    id: 'plomberie-renovation',
    title: {
      fr: 'Plomberie',
      en: 'Plumbing',
    },
    description: {
      fr: 'Rénovation d\'installation sanitaire et chauffage avec équipements modernes.',
      en: 'Renovation of sanitary installation and heating with modern equipment.',
    },
    location: 'Lausanne, Vaud',
    services: ['Plumbing'],
    images: [
      'https://images.unsplash.com/photo-1556912173-3db996ea8c89?w=800&q=80',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    ],
  },
  {
    id: 'peinture-renovation',
    title: {
      fr: 'Peinture',
      en: 'Painting',
    },
    description: {
      fr: 'Peinture intérieure et extérieure avec finitions professionnelles.',
      en: 'Interior and exterior painting with professional finishes.',
    },
    location: 'Lausanne, Vaud',
    services: ['Painting'],
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    ],
  },
  {
    id: 'carrelage-renovation',
    title: {
      fr: 'Carrelage',
      en: 'Tiling',
    },
    description: {
      fr: 'Pose de carrelage intérieur et extérieur avec finitions précises.',
      en: 'Installation of interior and exterior tiling with precise finishes.',
    },
    location: 'Lausanne, Vaud',
    services: ['Tiling'],
    images: [
      'https://images.unsplash.com/photo-1556912167-f556f1f39fdf?w=800&q=80',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    ],
  },
  {
    id: 'sol-renovation',
    title: {
      fr: 'Sols',
      en: 'Flooring',
    },
    description: {
      fr: 'Pose de parquet, stratifié et sol résine avec garantie qualité.',
      en: 'Installation of parquet, laminate and resin flooring with quality guarantee.',
    },
    location: 'Lausanne, Vaud',
    services: ['Flooring'],
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    ],
  },
  {
    id: 'maconnerie-renovation',
    title: {
      fr: 'Maçonnerie',
      en: 'Masonry',
    },
    description: {
      fr: 'Travaux de maçonnerie, béton et mortier avec équipements professionnels.',
      en: 'Masonry, concrete and mortar works with professional equipment.',
    },
    location: 'Lausanne, Vaud',
    services: ['Masonry'],
    images: [
      'https://images.unsplash.com/photo-1556912173-3db996ea8c89?w=800&q=80',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    ],
  },
  {
    id: 'isolation-sonore-renovation',
    title: {
      fr: 'Isolation acoustique',
      en: 'Acoustic Insulation',
    },
    description: {
      fr: 'Isolation acoustique des murs et plafonds avec matériaux spécialisés.',
      en: 'Acoustic insulation of walls and ceilings with specialized materials.',
    },
    location: 'Lausanne, Vaud',
    services: ['Insulation'],
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    ],
  },
  {
    id: 'depannage-renovation',
    title: {
      fr: 'Dépannage',
      en: 'Emergency Repairs',
    },
    description: {
      fr: 'Service de dépannage rapide 24/7 pour urgences techniques.',
      en: 'Fast24/7 emergency repair service for technical emergencies.',
    },
    location: 'Lausanne, Vaud',
    services: ['Emergency'],
    images: [
      'https://images.unsplash.com/photo-1556912167-f556f1f39fdf?w=800&q=80',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    ],
  },
  {
    id: 'consultation-renovation',
    title: {
      fr: 'Consultation',
      en: 'Consultation',
    },
    description: {
      fr: 'Conseil technique et devis gratuit pour tous vos projets de rénovation.',
      en: 'Technical advice and free quote for all your renovation projects.',
    },
    location: 'Lausanne, Vaud',
    services: ['Consultation'],
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    ],
  },
  {
    id: 'devis-renovation',
    title: {
      fr: 'Devis gratuit',
      en: 'Free Quote',
    },
    description: {
      fr: 'Obtenez un devis détaillé et personnalisé pour votre projet.',
      en: 'Get a detailed and personalized quote for your project.',
    },
    location: 'Lausanne, Vaud',
    services: ['Consultation'],
    images: [
      'https://images.unsplash.com/photo-1556912173-3db996ea8c89?w=800&q=80',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    ],
  },
  {
    id: 'diagnostic-renovation',
    title: {
      fr: 'Diagnostic technique',
      en: 'Technical Diagnostic',
    },
    description: {
      fr: 'Évaluation technique complète de votre bien immobilier.',
      en: 'Complete technical assessment of your property.',
    },
    location: 'Lausanne, Vaud',
    services: ['Consultation'],
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    ],
  },
  {
    id: 'suivi-renovation',
    title: {
      fr: 'Suivi chantier',
      en: 'Site Supervision',
    },
    description: {
      fr: 'Suivi et coordination de chantier de A à Z.',
      en: 'Site supervision and coordination from A to Z.',
    },
    location: 'Lausanne, Vaud',
    services: ['Consultation'],
    images: [
      'https://images.unsplash.com/photo-1556912167-f556f1f39fdf?w=800&q=80',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    ],
  },
  {
    id: 'garantie-renovation',
    title: {
      fr: 'Garantie',
      en: 'Guarantee',
    },
    description: {
      fr: 'Tous nos travaux sont couverts par une garantie décennale.',
      en: 'All our works are covered by a 10-year guarantee.',
    },
    location: 'Lausanne, Vaud',
    services: ['Consultation'],
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    ],
  },
  {
    id: 'qualite-renovation',
    title: {
      fr: 'Qualité',
      en: 'Quality',
    },
    description: {
      fr: 'Nous utilisons uniquement des matériaux de haute qualité.',
      en: 'We use only high-quality materials.',
    },
    location: 'Lausanne, Vaud',
    services: ['Consultation'],
    images: [
      'https://images.unsplash.com/photo-1556912173-3db996ea8c89?w=800&q=80',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    ],
  },
  {
    id: 'experience-renovation',
    title: {
      fr: 'Expérience',
      en: 'Experience',
    },
    description: {
      fr: 'Plus de 20 ans d\'expérience dans le secteur de la rénovation.',
      en: 'Over 20 years of experience in the renovation sector.',
    },
    location: 'Lausanne, Vaud',
    services: ['Consultation'],
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    ],
  },
  {
    id: 'professionnalisme-renovation',
    title: {
      fr: 'Professionnalisme',
      en: 'Professionalism',
    },
    description: {
      fr: 'Un service professionnel et transparent de A à Z.',
      en: 'A professional and transparent service from A to Z.',
    },
    location: 'Lausanne, Vaud',
    services: ['Consultation'],
    images: [
      'https://images.unsplash.com/photo-1556912167-f556f1f39fdf?w=800&q=80',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    ],
  },
  {
    id: 'contact-renovation',
    title: {
      fr: 'Contact',
      en: 'Contact',
    },
    description: {
      fr: 'Contactez-nous pour obtenir plus d\'informations.',
      en: 'Contact us for more information.',
    },
    location: 'Lausanne, Vaud',
    services: ['Consultation'],
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    ],
  },
  {
    id: 'devis-en-ligne',
    title: {
      fr: 'Devis en ligne',
      en: 'Online Quote',
    },
    description: {
      fr: 'Demandez un devis en ligne rapidement et facilement.',
      en: 'Request a quote online quickly and easily.',
    },
    location: 'Lausanne, Vaud',
    services: ['Consultation'],
    images: [
      'https://images.unsplash.com/photo-1556912173-3db996ea8c89?w=800&q=80',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    ],
  },
  {
    id: 'devis-pdf',
    title: {
      fr: 'Devis PDF',
      en: 'PDF Quote',
    },
    description: {
      fr: 'Obtenez votre devis en format PDF personnalisé.',
      en: 'Get your quote in personalized PDF format.',
    },
    location: 'Lausanne, Vaud',
    services: ['Consultation'],
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    ],
  },
  {
    id: 'devis-rapide',
    title: {
      fr: 'Devis rapide',
      en: 'Fast Quote',
    },
    description: {
      fr: 'Obtenez un devis sous 24h pour votre projet.',
      en: 'Get a quote within 24h for your project.',
    },
    location: 'Lausanne, Vaud',
    services: ['Consultation'],
    images: [
      'https://images.unsplash.com/photo-1556912167-f556f1f39fdf?w=800&q=80',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    ],
  },
  {
    id: 'devis-gratuit',
    title: {
      fr: 'Devis gratuit',
      en: 'Free Quote',
    },
    description: {
      fr: 'Obtenez un devis gratuit sans engagement.',
      en: 'Get a free quote with no obligation.',
    },
    location: 'Lausanne, Vaud',
    services: ['Consultation'],
    images: [
      'https://images.unsplash.com/photo-1556912173-3db996ea8c89?w=800&q=80',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    ],
  },
  {
    id: 'devis-personnalise',
    title: {
      fr: 'Devis personnalisé',
      en: 'Personalized Quote',
    },
    description: {
      fr: 'Obtenez un devis personnalisé selon vos besoins.',
      en: 'Get a personalized quote based on your needs.',
    },
    location: 'Lausanne, Vaud',
    services: ['Consultation'],
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    ],
  },
  {
    id: 'devis-detaille',
    title: {
      fr: 'Devis détaillé',
      en: 'Detailed Quote',
    },
    description: {
      fr: 'Obtenez un devis détaillé avec tous les postes.',
      en: 'Get a detailed quote with all items.',
    },
    location: 'Lausanne, Vaud',
    services: ['Consultation'],
    images: [
      'https://images.unsplash.com/photo-1556912167-f556f1f39fdf?w=800&q=80',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    ],
  },
  {
    id: 'devis-complet',
    title: {
      fr: 'Devis complet',
      en: 'Complete Quote',
    },
    description: {
      fr: 'Obtenez un devis complet pour votre projet.',
      en: 'Get a complete quote for your project.',
    },
    location: 'Lausanne, Vaud',
    services: ['Consultation'],
    images: [
      'https://images.unsplash.com/photo-1556912173-3db996ea8c89?w=800&q=80',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    ],
  },
  {
    id: 'devis-sans-engagement',
    title: {
      fr: 'Devis sans engagement',
      en: 'Quote Without Commitment',
    },
    description: {
      fr: 'Obtenez un devis sans engagement de votre part.',
      en: 'Get a quote without any commitment on your part.',
    },
    location: 'Lausanne, Vaud',
    services: ['Consultation'],
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    ],
  },
  {
    id: 'devis-en-24h',
    title: {
      fr: 'Devis en 24h',
      en: 'Quote in 24h',
    },
    description: {
      fr: 'Obtenez un devis sous 24h.',
      en: 'Get a quote within 24h.',
    },
    location: 'Lausanne, Vaud',
    services: ['Consultation'],
    images: [
      'https://images.unsplash.com/photo-1556912167-f556f1f39fdf?w=800&q=80',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    ],
  },
  {
    id: 'devis-en-48h',
    title: {
      fr: 'Devis en 48h',
      en: 'Quote in 48h',
    },
    description: {
      fr: 'Obtenez un devis sous 48h.',
      en: 'Get a quote within 48h.',
    },
    location: 'Lausanne, Vaud',
    services: ['Consultation'],
    images: [
      'https://images.unsplash.com/photo-1556912173-3db996ea8c89?w=800&q=80',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    ],
  },
  {
    id: 'devis-en-72h',
    title: {
      fr: 'Devis en 72h',
      en: 'Quote in 72h',
    },
    description: {
      fr: 'Obtenez un devis sous 72h.',
      en: 'Get a quote within 72h.',
    },
    location: 'Lausanne, Vaud',
    services: ['Consultation'],
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    ],
  },
  {
    id: 'devis-en-une-semaine',
    title: {
      fr: 'Devis en une semaine',
      en: 'Quote in One Week',
    },
    description: {
      fr: 'Obtenez un devis en une semaine.',
      en: 'Get a quote in one week.',
    },
    location: 'Lausanne, Vaud',
    services: ['Consultation'],
    images: [
      'https://images.unsplash.com/photo-1556912167-f556f1f39fdf?w=800&q=80',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    ],
  },
  {
    id: 'devis-en-deux-semaines',
    title: {
      fr: 'Devis en deux semaines',
      en: 'Quote in Two Weeks',
    },
    description: {
      fr: 'Obtenez un devis en deux semaines.',
      en: 'Get a quote in two weeks.',
    },
    location: 'Lausanne, Vaud',
    services: ['Consultation'],
    images: [
      'https://images.unsplash.com/photo-1556912173-3db996ea8c89?w=800&q=80',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    ],
  },
  {
    id: 'devis-en-un-mois',
    title: {
      fr: 'Devis en un mois',
      en: 'Quote in One Month',
    },
    description: {
      fr: 'Obtenez un devis en un mois.',
      en: 'Get a quote in one month.',
    },
    location: 'Lausanne, Vaud',
    services: ['Consultation'],
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    ],
  },
  {
    id: 'devis-en-deux-mois',
    title: {
      fr: 'Devis en deux mois',
      en: 'Quote in Two Months',
    },
    description: {
      fr: 'Obtenez un devis en deux mois.',
      en: 'Get a quote in two months.',
    },
    location: 'Lausanne, Vaud',
    services: ['Consultation'],
    images: [
      'https://images.unsplash.com/photo-1556912167-f556f1f39fdf?w=800&q=80',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    ],
  },
  {
    id: 'devis-en-trois-mois',
    title: {
      fr: 'Devis en trois mois',
      en: 'Quote in Three Months',
    },
    description: {
      fr: 'Obtenez un devis en trois mois.',
      en: 'Get a quote in three months.',
    },
    location: 'Lausanne, Vaud',
    services: ['Consultation'],
    images: [
      'https://images.unsplash.com/photo-1556912173-3db996ea8c89?w=800&q=80',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    ],
  },
  {
    id: 'devis-en-quatre-mois',
    title: {
      fr: 'Devis en quatre mois',
      en: 'Quote in Four Months',
    },
    description: {
      fr: 'Obtenez un devis en quatre mois.',
      en: 'Get a quote in four months.',
    },
    location: 'Lausanne, Vaud',
    services: ['Consultation'],
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    ],
  },
  {
    id: 'devis-en-cinq-mois',
    title: {
      fr: 'Devis en cinq mois',
      en: 'Quote in Five Months',
    },
    description: {
      fr: 'Obtenez un devis en cinq mois.',
      en: 'Get a quote in five months.',
    },
    location: 'Lausanne, Vaud',
    services: ['Consultation'],
    images: [
      'https://images.unsplash.com/photo-1556912167-f556f1f39fdf?w=800&q=80',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    ],
  },
  {
    id: 'devis-en-six-mois',
    title: {
      fr: 'Devis en six mois',
      en: 'Quote in Six Months',
    },
    description: {
      fr: 'Obtenez un devis en six mois.',
      en: 'Get a quote in six months.',
    },
    location: 'Lausanne, Vaud',
    services: ['Consultation'],
    images: [
      'https://images.unsplash.com/photo-1556912173-3db996ea8c89?w=800&q=80',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    ],
  },
  {
    id: 'devis-en-sept-mois',
    title: {
      fr: 'Devis en sept mois',
      en: 'Quote in Seven Months',
    },
    description: {
      fr: 'Obtenez un devis en sept mois.',
      en: 'Get a quote in seven months.',
    },
    location: 'Lausanne, Vaud',
    services: ['Consultation'],
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    ],
  },
  {
    id: 'devis-en-huit-mois',
    title: {
      fr: 'Devis en huit mois',
      en: 'Quote in Eight Months',
    },
    description: {
      fr: 'Obtenez un devis en huit mois.',
      en: 'Get a quote in eight months.',
    },
    location: 'Lausanne, Vaud',
    services: ['Consultation'],
    images: [
      'https://images.unsplash.com/photo-1556912167-f556f1f39fdf?w=800&q=80',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    ],
  },
  {
    id: 'devis-en-neuf-mois',
    title: {
      fr: 'Devis en neuf mois',
      en: 'Quote in Nine Months',
    },
    description: {
      fr: 'Obtenez un devis en neuf mois.',
      en: 'Get a quote in nine months.',
    },
    location: 'Lausanne, Vaud',
    services: ['Consultation'],
    images: [
      'https://images.unsplash.com/photo-1556912173-3db996ea8c89?w=800&q=80',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    ],
  },
  {
    id: 'devis-en-dix-mois',
    title: {
      fr: 'Devis en dix mois',
      en: 'Quote in Ten Months',
    },
    description: {
      fr: 'Obtenez un devis en dix mois.',
      en: 'Get a quote in ten months.',
    },
    location: 'Lausanne, Vaud',
    services: ['Consultation'],
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    ],
  },
  {
    id: 'devis-en-onze-mois',
    title: {
      fr: 'Devis en onze mois',
      en: 'Quote in Eleven Months',
    },
    description: {
      fr: 'Obtenez un devis en onze mois.',
      en: 'Get a quote in eleven months.',
    },
    location: 'Lausanne, Vaud',
    services: ['Consultation'],
    images: [
      'https://images.unsplash.com/photo-1556912167-f556f1f39fdf?w=800&q=80',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    ],
  },
  {
    id: 'devis-en-douze-mois',
    title: {
      fr: 'Devis en douze mois',
      en: 'Quote in Twelve Months',
    },
    description: {
      fr: 'Obtenez un devis en douze mois.',
      en: 'Get a quote in twelve months.',
    },
    location: 'Lausanne, Vaud',
    services: ['Consultation'],
    images: [
      'https://images.unsplash.com/photo-1556912173-3db996ea8c89?w=800&q=80',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    ],
  },
  {
    id: 'devis-en-12-mois',
    title: {
      fr: 'Devis en 12 mois',
      en: 'Quote in 12 Months',
    },
    description: {
      fr: 'Obtenez un devis en 12 mois.',
      en: 'Get a quote in 12 months.',
    },
    location: 'Lausanne, Vaud',
    services: ['Consultation'],
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    ],
  },
  {
    id: 'devis-en-24-mois',
    title: {
      fr: 'Devis en 24 mois',
      en: 'Quote in 24 Months',
    },
    description: {
      fr: 'Obtenez un devis en 24 mois.',
      en: 'Get a quote in 24 months.',
    },
    location: 'Lausanne, Vaud',
    services: ['Consultation'],
    images: [
      'https://images.unsplash.com/photo-1556912167-f556f1f39fdf?w=800&q=80',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    ],
  },
  {
    id: 'devis-en-36-mois',
    title: {
      fr: 'Devis en 36 mois',
      en: 'Quote in 36 Months',
    },
    description: {
      fr: 'Obtenez un devis en 36 mois.',
      en: 'Get a quote in 36 months.',
    },
    location: 'Lausanne, Vaud',
    services: ['Consultation'],
    images: [
      'https://images.unsplash.com/photo-1556912173-3db996ea8c89?w=800&q=80',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    ],
  },
]
