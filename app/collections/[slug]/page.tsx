import { Suspense } from 'react'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getCollection, getProducts } from '@/lib/api/products'
import { collections } from '@/data/collections'
import { siteConfig } from '@/lib/siteConfig'
import CollectionHeader from '@/components/collection/CollectionHeader'
import CollectionCatalog from '@/components/collection/CollectionCatalog'

interface CollectionPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return collections.map((col) => ({
    slug: col.slug,
  }))
}

export async function generateMetadata({
  params,
}: CollectionPageProps): Promise<Metadata> {
  const { slug } = await params
  const collection = await getCollection(slug)

  if (!collection) {
    return {
      title: 'Collection Not Found',
    }
  }

  return {
    title: `${collection.title} | ${siteConfig.name}`,
    description: collection.description,
    openGraph: {
      title: `${collection.title} | ${siteConfig.name}`,
      description: collection.description,
      images: [
        {
          url: collection.image.src,
          alt: collection.image.alt,
        },
      ],
    },
  }
}

export const revalidate = 1800

export default async function CollectionDetailPage({
  params,
}: CollectionPageProps) {
  const { slug } = await params
  const collection = await getCollection(slug)

  if (!collection) {
    notFound()
  }

  const { products, total, maxPrice } = await getProducts({
    collection: slug,
    limit: 100,
  })

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Collections', href: '/collections/all' },
    { label: collection.title },
  ]

  return (
    <div className="min-h-screen">
      <CollectionHeader
        title={collection.title}
        description={collection.description}
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
