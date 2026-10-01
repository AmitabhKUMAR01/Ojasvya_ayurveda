import { sleep } from '@/lib/utils'
import {
  getAllProducts, getProductBySlug, getProductsByCollection,
  getFeaturedProducts, getRelatedProducts, getComboProducts, getMaxPrice,
} from '@/data/products'
import { getCollectionBySlug } from '@/data/collections'
import type { Product, SortOption, CollectionMeta } from '@/types/product'

export interface GetProductsOptions {
  collection?: string
  sort?: SortOption
  minPrice?: number
  maxPrice?: number
  inStockOnly?: boolean
  page?: number
  limit?: number
  search?: string
}

function sortProducts(products: Product[], sort: SortOption): Product[] {
  const sorted = [...products]
  switch (sort) {
    case 'a-z': return sorted.sort((a, b) => a.title.localeCompare(b.title))
    case 'z-a': return sorted.sort((a, b) => b.title.localeCompare(a.title))
    case 'price-low-high': return sorted.sort((a, b) => a.price - b.price)
    case 'price-high-low': return sorted.sort((a, b) => b.price - a.price)
    case 'date-old-new': return sorted.sort((a, b) => a.createdAt.localeCompare(b.createdAt))
    case 'date-new-old': return sorted.sort((a, b) => b.createdAt.localeCompare(a.createdAt))
    case 'best-selling': return sorted.sort((a, b) => (a.bestSellerRank ?? 99) - (b.bestSellerRank ?? 99))
    default: return sorted.sort((a, b) => (a.bestSellerRank ?? 99) - (b.bestSellerRank ?? 99))
  }
}

export async function getProducts(options: GetProductsOptions = {}): Promise<{ products: Product[]; total: number; maxPrice: number }> {
  await sleep(150)
  let result = options.collection ? getProductsByCollection(options.collection) : getAllProducts()
  if (options.search) {
    const q = options.search.toLowerCase()
    result = result.filter((p) =>
      p.title.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q)) ||
      p.shortDescription.toLowerCase().includes(q)
    )
  }
  if (options.inStockOnly) result = result.filter((p) => p.stock > 0)
  if (options.minPrice !== undefined) result = result.filter((p) => p.price >= options.minPrice!)
  if (options.maxPrice !== undefined) result = result.filter((p) => p.price <= options.maxPrice!)
  if (options.sort) result = sortProducts(result, options.sort)
  const total = result.length
  const page = options.page ?? 1
  const limit = options.limit ?? 12
  const start = (page - 1) * limit
  return { products: result.slice(start, start + limit), total, maxPrice: getMaxPrice() }
}

export async function getProduct(slug: string): Promise<Product | null> {
  await sleep(100)
  return getProductBySlug(slug) ?? null
}
export async function getFeatured(limit = 8): Promise<Product[]> {
  await sleep(100)
  return getFeaturedProducts(limit)
}
export async function getRelated(product: Product, limit = 4): Promise<Product[]> {
  await sleep(100)
  return getRelatedProducts(product, limit)
}
export async function getCombos(limit = 4): Promise<Product[]> {
  await sleep(100)
  return getComboProducts(limit)
}
export async function getCollection(slug: string): Promise<CollectionMeta | null> {
  await sleep(50)
  return getCollectionBySlug(slug) ?? null
}
