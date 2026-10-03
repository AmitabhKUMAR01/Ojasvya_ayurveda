'use client'

import { useState, useEffect, useMemo, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { getAllProducts } from '@/data/products'
import type { Product } from '@/types/product'
import ProductCard from '@/components/product/ProductCard'
import { Search, X, Sparkles, ArrowRight } from 'lucide-react'

const popularSearches = [
  'Ashwagandha',
  'Shilajit',
  'Safed Musli',
  'Digestive Churan',
  'Liver Detox',
  'Shatavari',
  'Stamina Combo',
  'Gold Capsules',
]

function SearchContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const queryParam = searchParams.get('q') || ''
  const [searchTerm, setSearchTerm] = useState(queryParam)

  useEffect(() => {
    setSearchTerm(queryParam)
  }, [queryParam])

  const allProducts = useMemo(() => getAllProducts(), [])

  const filteredProducts = useMemo(() => {
    const q = searchTerm.trim().toLowerCase()
    if (!q) return []
    return allProducts.filter((p) => {
      const matchTitle = p.title.toLowerCase().includes(q)
      const matchShort = p.shortDescription.toLowerCase().includes(q)
      const matchTags = p.tags.some((t) => t.toLowerCase().includes(q))
      const matchIngredients = p.ingredients.some(
        (ing) =>
          ing.name.toLowerCase().includes(q) ||
          (ing.nameHindi && ing.nameHindi.toLowerCase().includes(q))
      )
      return matchTitle || matchShort || matchTags || matchIngredients
    })
  }, [searchTerm, allProducts])

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const q = searchTerm.trim()
    if (q) {
      router.push(`/search?q=${encodeURIComponent(q)}`)
    } else {
      router.push('/search')
    }
  }

  const handleSelectPopular = (term: string) => {
    setSearchTerm(term)
    router.push(`/search?q=${encodeURIComponent(term)}`)
  }

  const handleClear = () => {
    setSearchTerm('')
    router.push('/search')
  }

  return (
    <div className="min-h-screen bg-ivory py-8 md:py-16">
      <div className="container mx-auto px-4">
        {/* Search Header */}
        <div className="max-w-2xl mx-auto text-center space-y-4 mb-10">
          <h1 className="font-serif text-3xl md:text-5xl text-charcoal">Search Formulations</h1>
          <p className="text-sm text-charcoal/70">
            Find classical Ayurvedic supplements, stamina kits, digestive teas, and herbal extracts.
          </p>

          {/* Search Input */}
          <form onSubmit={handleSearchSubmit} className="relative mt-4">
            <input
              type="text"
              placeholder="Search by herb, formulation, or wellness concern..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-12 py-3.5 bg-ivory border-2 border-gold/30 rounded-2xl outline-none focus:border-forest text-sm md:text-base text-charcoal shadow-sm"
              autoFocus
            />
            <Search className="w-5 h-5 text-charcoal/40 absolute left-4 top-1/2 -translate-y-1/2" />
            {searchTerm && (
              <button
                type="button"
                onClick={handleClear}
                className="p-1.5 rounded-full hover:bg-sage/40 text-charcoal/40 hover:text-charcoal absolute right-4 top-1/2 -translate-y-1/2"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </form>

          {/* Popular Tag Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            <span className="text-xs text-charcoal/50 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-gold" /> Popular:
            </span>
            {popularSearches.map((term) => (
              <button
                key={term}
                onClick={() => handleSelectPopular(term)}
                className="text-xs px-3 py-1 rounded-full bg-sage/30 text-charcoal/80 hover:bg-forest/10 hover:text-forest transition-colors border border-gold/10"
              >
                {term}
              </button>
            ))}
          </div>
        </div>

        {/* Results Area */}
        {searchTerm.trim() ? (
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-gold/15 mb-6">
              <h2 className="font-serif text-xl text-charcoal">
                Results for &ldquo;<span className="text-forest">{searchTerm}</span>&rdquo;
              </h2>
              <span className="text-xs text-charcoal/60">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
              </span>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-sage/20 rounded-2xl border border-gold/10 space-y-4 max-w-lg mx-auto">
                <p className="font-serif text-2xl text-charcoal">No formulations found</p>
                <p className="text-xs md:text-sm text-charcoal/60 px-4">
                  We couldn&apos;t find any products matching &ldquo;{searchTerm}&rdquo;. Try another herbal keyword or explore our full collection.
                </p>
                <div className="pt-2">
                  <Link
                    href="/collections/all"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-forest text-ivory rounded-xl text-xs font-semibold hover:bg-forest/90 transition-colors"
                  >
                    <span>Browse All Products</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-12 text-xs text-charcoal/50">
            Type above to search across our full catalog of 30+ Ayurvedic products.
          </div>
        )}
      </div>
    </div>
  )
}

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-forest/20 border-t-forest rounded-full animate-spin" />
        </div>
      }
    >
      <SearchContent />
    </Suspense>
  )
}
