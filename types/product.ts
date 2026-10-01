export type Collection =
  | 'digestive-health-detox'
  | 'male-stamina-kits'
  | 'mens-vitamins-supplements'
  | 'womens-supplements'
  | 'combos'

export interface ProductImage {
  src: string
  alt: string
}

export interface ProductIngredient {
  name: string
  nameHindi?: string
  description: string
  image?: ProductImage
}

export interface ProductFAQ {
  question: string
  answer: string
}

export interface Product {
  id: string
  slug: string
  title: string
  shortTitle: string
  collections: Collection[]
  price: number
  compareAtPrice?: number
  images: ProductImage[]
  video?: string
  stock: number
  rating: number
  reviewCount: number
  tags: string[]
  benefits: string[]
  ingredients: ProductIngredient[]
  howToUse: string
  faq: ProductFAQ[]
  isCombo: boolean
  createdAt: string
  bestSellerRank?: number
  shortDescription: string
  fullDescription: string
}

export interface CollectionMeta {
  slug: Collection
  title: string
  description: string
  image: { src: string; alt: string }
}

export type SortOption =
  | 'featured'
  | 'most-relevant'
  | 'best-selling'
  | 'a-z'
  | 'z-a'
  | 'price-low-high'
  | 'price-high-low'
  | 'date-old-new'
  | 'date-new-old'
