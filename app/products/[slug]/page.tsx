import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getAllProducts, getProductBySlug, getRelatedProducts, getComboProducts } from '@/data/products'
import { siteConfig } from '@/lib/siteConfig'
import ProductDetailView from '@/components/product/ProductDetailView'
import ProductCard from '@/components/product/ProductCard'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface ProductPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const products = getAllProducts()
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    return {
      title: 'Product Not Found',
    }
  }

  return {
    title: `${product.title} — Buy Online (Cash on Delivery)`,
    description: product.shortDescription,
    openGraph: {
      title: `${product.title} | ${siteConfig.name}`,
      description: product.shortDescription,
      images: [
        {
          url: product.images[0]?.src || '',
          alt: product.images[0]?.alt || product.title,
        },
      ],
    },
  }
}

export const revalidate = 1800

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  const relatedProducts = getRelatedProducts(product, 4)
  const comboProducts = getComboProducts(3)

  // JSON-LD Schema.org Structured Data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    image: product.images.map((img) => img.src),
    description: product.shortDescription,
    sku: product.id,
    brand: {
      '@type': 'Brand',
      name: siteConfig.name,
    },
    offers: {
      '@type': 'Offer',
      url: `${siteConfig.url}/products/${product.slug}`,
      priceCurrency: 'INR',
      price: product.price,
      availability: product.stock > 0 ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
      seller: {
        '@type': 'Organization',
        name: siteConfig.name,
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: product.rating,
      reviewCount: product.reviewCount,
    },
  }

  return (
    <div className="min-h-screen bg-ivory">
      {/* Schema Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Main Detail View */}
      <ProductDetailView product={product} />

      {/* You May Also Like Section */}
      {relatedProducts.length > 0 && (
        <section className="py-12 md:py-20 border-t border-gold/15 bg-sage/10">
          <div className="container mx-auto px-4">
            <div className="flex items-end justify-between mb-8">
              <div>
                <p className="text-xs uppercase tracking-widest text-gold font-sans font-semibold">Synergistic Pairings</p>
                <h2 className="font-serif text-2xl md:text-3xl text-charcoal">You May Also Like</h2>
              </div>
              <Link href="/collections/all" className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-forest hover:text-gold transition-colors">
                View All <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Synergistic Combo Kits Section */}
      {comboProducts.length > 0 && (
        <section className="py-12 md:py-16 border-t border-gold/15">
          <div className="container mx-auto px-4">
            <div className="flex items-end justify-between mb-8">
              <div>
                <p className="text-xs uppercase tracking-widest text-gold font-sans font-semibold">Value Combos</p>
                <h2 className="font-serif text-2xl md:text-3xl text-charcoal">Recommended Combo Kits</h2>
              </div>
              <Link href="/collections/combos" className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-forest hover:text-gold transition-colors">
                All Combos <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {comboProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
