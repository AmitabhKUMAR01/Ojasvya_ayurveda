import type { CollectionMeta } from '@/types/product'

const P = '/images/products'

export const collections: CollectionMeta[] = [
  {
    slug: 'digestive-health-detox',
    title: 'Digestive Health & Detox',
    description:
      'Livirex liver tonic, Madhurex blood-sugar support and Aloe Vera juice — formulated to support digestion, liver health and gentle detoxification.',
    image: {
      src: `${P}/livirex-ds-syrup-bottle-and-box-front.jpg`,
      alt: 'Livirex DX Syrup — liver support collection',
    },
  },
  {
    slug: 'male-stamina-kits',
    title: 'Energy & Vitality',
    description:
      'Daily nutrition and vitality support with nutrient-rich Moringa Powder — Nature\'s Daily Nutrition for sustained energy.',
    image: {
      src: `${P}/moringa-powder-jar-front.jpg`,
      alt: 'Ojasvya Moringa Powder — energy and vitality',
    },
  },
  {
    slug: 'mens-vitamins-supplements',
    title: "Men's Vitamins & Supplements",
    description:
      'Madhurex formulations and Moringa Powder — Ayurvedic support for metabolic wellness, immunity and everyday nutrition.',
    image: {
      src: `${P}/madhurex-capsules-bottle-and-capsules.jpg`,
      alt: 'Madhurex Capsules — men\'s wellness supplements',
    },
  },
  {
    slug: 'womens-supplements',
    title: "Women's Wellness",
    description:
      'Aloe Vera Juice and Moringa Powder for glowing skin, healthy hair, immunity and daily nourishment.',
    image: {
      src: `${P}/aloe-vera-juice-bottle-front.jpg`,
      alt: 'Ojasvya Aloe Vera Juice — women\'s wellness',
    },
  },
  {
    slug: 'combos',
    title: 'Combo Kits',
    description:
      'Value combo packs like Madhurex Capsules + Powder for comprehensive Ayurvedic wellness support.',
    image: {
      src: `${P}/madhurex-churna-product-benefits-collage.jpg`,
      alt: 'Madhurex Combo Pack — capsules and powder',
    },
  },
]

export function getCollectionBySlug(slug: string): CollectionMeta | undefined {
  return collections.find((c) => c.slug === slug)
}
