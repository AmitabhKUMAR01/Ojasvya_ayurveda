import { Suspense } from 'react'
import type { Metadata } from 'next'
import { getProducts } from '@/lib/api/products'
import { siteConfig } from '@/lib/siteConfig'
import CollectionHeader from '@/components/collection/CollectionHeader'
import CollectionCatalog from '@/components/collection/CollectionCatalog'

export const metadata: Metadata = {
  title: 'All Ayurvedic Products',
  description:
    'Explore our complete range of classical Ayurvedic formulations, single herbs, stamina kits, and digestive wellness products. Cash on delivery available across India.',
  openGraph: {
    title: `All Products | ${siteConfig.name}`,
    description:
      'Complete range of classical Ayurvedic formulations. Free shipping & COD available.',
  },
}

export const revalidate = 1800

export default async function AllProductsPage() {
  const { products, total, maxPrice } = await getProducts({ limit: 100 })

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Collections', href: '/collections/all' },
    { label: 'All Products' },
  ]

  return (
    <div className="min-h-screen">
      <CollectionHeader
        title="All Ayurvedic Products"
        description="Classical Ayurvedic formulations prepared using time-tested herbs and traditional methods. Sourced and crafted with reverence for your holistic well-being."
        totalCount={total}
        breadcrumbs={breadcrumbs}
      />

      <Suspense
        fallback={
          <div className="container mx-auto px-4 py-16 flex justify-center items-center">
            <div className="w-8 h-8 border-2 border-forest/20 border-t-forest rounded-full animate-spin" />
          </div>
        }
      >
        <CollectionCatalog initialProducts={products} maxDataPrice={maxPrice} />
      </Suspense>
    </div>
  )
}
