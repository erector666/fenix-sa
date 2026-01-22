import { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'renovation-ouuchy',
    title: {
      fr: 'Rénovation complète Ouchy',
      en: 'Complete Renovation Ouchy',
    },
    description: {
      fr: 'Transformation d'un appartement de 1960 en espace moderne et lumineux. Réorganisation complète des espaces et installation de nouvelles installations.',
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
      fr: 'Aménagement d'une cuisine ouverte avec îlot central. Équipements intégrés et finitions haut de gamme.',
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
      fr: 'Rénovation complète d'une salle de bain avec douche à l'italienne et carrelage grand format.',
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
      fr: 'Rénovation totale d'un appartement de 90m2. Décoration contemporaine et aménagement sur mesure.',
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
      fr: 'Aménagement extérieur d'une maison avec terrasse, jardin et mur de soutènement.',
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
      fr: 'Bureau rénovation',
      en: 'Office Renovation',
    },
    description: {
      fr: 'Modernisation d'espaces de travail avec partition modulaire et éclairage LED.',
      en: 'Modernization of workspaces with modular partitions and LED lighting.',
    },
    location: 'Lausanne Centre',
    services: ['Interior Renovation', 'Painting', 'Walls and Plaster'],
    images: [
      'https://images.unsplash.com/photo-1556912173-3db996ea8c89?w=800&q=80',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    ],
  },
  {
    id: 'terrasse-lutry',
    title: {
      fr: 'Terrasse Lutry',
      en: 'Terrace Lutry',
    },
    description: {
      fr: 'Création d'une terrasse en bois exotique avec vue sur le lac. Aménagement paysager.',
      en: 'Creation of a tropical wood terrace with lake view. Landscaping.',
    },
    location: 'Lutry, Vaud',
    services: ['Exterior Renovation', 'Masonry'],
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
 ],
  },
]