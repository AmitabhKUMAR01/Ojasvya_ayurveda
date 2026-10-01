import type { CollectionMeta } from '@/types/product'
import { images } from '@/lib/images'

export const collections: CollectionMeta[] = [
  {
    slug: 'digestive-health-detox',
    title: 'Digestive Health & Detox',
    description:
      'Traditionally used Ayurvedic formulations to support healthy digestion, liver function, and gentle detoxification.',
    image: images.collections['digestive-health-detox'],
  },
  {
    slug: 'male-stamina-kits',
    title: "Men's Stamina Kits",
    description:
      "Curated Ayurvedic kits traditionally formulated to support men's vitality, stamina, and overall wellness.",
    image: images.collections['male-stamina-kits'],
  },
  {
    slug: 'mens-vitamins-supplements',
    title: "Men's Vitamins & Supplements",
    description:
      "Single-herb and multi-herb Ayurvedic formulations traditionally used to support men's health and vitality.",
    image: images.collections['mens-vitamins-supplements'],
  },
  {
    slug: 'womens-supplements',
    title: "Women's Supplements",
    description:
      "Gentle Ayurvedic formulations traditionally used to support women's reproductive health, hormonal balance, and overall vitality.",
    image: images.collections['womens-supplements'],
  },
  {
    slug: 'combos',
    title: 'Combo Kits',
    description:
      'Value-for-money curated combo kits bringing together synergistic Ayurvedic formulations for comprehensive wellness support.',
    image: images.collections['combos'],
  },
]

export function getCollectionBySlug(slug: string): CollectionMeta | undefined {
  return collections.find((c) => c.slug === slug)
}
