'use client'

import { useState, useMemo, useEffect, useRef, useTransition } from 'react'
import { useSearchParams, useRouter, usePathname } from 'next/navigation'
import type { Product, SortOption } from '@/types/product'
import ProductCard from '@/components/product/ProductCard'
import FilterSidebar from '@/components/collection/FilterSidebar'
import MobileFilterDrawer from '@/components/collection/MobileFilterDrawer'
import SortSelect from '@/components/collection/SortSelect'
import GridDensityToggle, { type DesktopDensity, type MobileDensity } from '@/components/collection/GridDensityToggle'
import { SlidersHorizontal, PackageSearch, RotateCcw } from 'lucide-react'

interface CollectionCatalogProps {
  initialProducts: Product[]
  maxDataPrice: number
}

const ITEMS_PER_PAGE = 12

export default function CollectionCatalog({
  initialProducts,
  maxDataPrice,
}: CollectionCatalogProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [isPending, startTransition] = useTransition()

  // Read URL params
  const paramSort = (searchParams.get('sort') as SortOption) || 'featured'
  const paramInStock = searchParams.get('inStock') === 'true'
  const paramMaxPrice = searchParams.get('maxPrice')
    ? Number(searchParams.get('maxPrice'))
    : maxDataPrice

  // Local state initialized from URL
  const [sort, setSort] = useState<SortOption>(paramSort)
  const [inStockOnly, setInStockOnly] = useState<boolean>(paramInStock)
  const [priceRange, setPriceRange] = useState<number>(paramMaxPrice)
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false)
  const [desktopDensity, setDesktopDensity] = useState<DesktopDensity>(3)
  const [mobileDensity, setMobileDensity] = useState<MobileDensity>(2)
  const [visibleCount, setVisibleCount] = useState<number>(ITEMS_PER_PAGE)

  // Sync state with URL changes (e.g. Back/Forward navigation)
  useEffect(() => {
    setSort((searchParams.get('sort') as SortOption) || 'featured')
    setInStockOnly(searchParams.get('inStock') === 'true')
    setPriceRange(
      searchParams.get('maxPrice')
        ? Number(searchParams.get('maxPrice'))
        : maxDataPrice
    )
  }, [searchParams, maxDataPrice])

  // Update URL params
  const updateUrl = (newSort: SortOption, newInStock: boolean, newPrice: number) => {
    const params = new URLSearchParams()
    if (newSort !== 'featured') params.set('sort', newSort)
    if (newInStock) params.set('inStock', 'true')
    if (newPrice < maxDataPrice) params.set('maxPrice', String(newPrice))

    startTransition(() => {
      const query = params.toString() ? `?${params.toString()}` : ''
      router.replace(`${pathname}${query}`, { scroll: false })
    })
  }

  const handleSortChange = (newSort: SortOption) => {
    setSort(newSort)
    updateUrl(newSort, inStockOnly, priceRange)
  }

  const handleInStockChange = (val: boolean) => {
    setInStockOnly(val)
    updateUrl(sort, val, priceRange)
  }

  // Filtering is client-side, so only the URL sync is debounced — otherwise every slider tick triggers a server request.
  const priceUrlTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  useEffect(() => () => { if (priceUrlTimer.current) clearTimeout(priceUrlTimer.current) }, [])

  const handlePriceChange = (val: number) => {
    setPriceRange(val)
    if (priceUrlTimer.current) clearTimeout(priceUrlTimer.current)
    priceUrlTimer.current = setTimeout(() => updateUrl(sort, inStockOnly, val), 400)
  }

  const handleClearAll = () => {
    if (priceUrlTimer.current) clearTimeout(priceUrlTimer.current)
    setInStockOnly(false)
    setPriceRange(maxDataPrice)
    setSort('featured')
    startTransition(() => {
      router.replace(pathname, { scroll: false })
    })
  }

  const hasActiveFilters = inStockOnly || priceRange < maxDataPrice

  // Filter & Sort products
  const filteredProducts = useMemo(() => {
    let result = [...initialProducts]

    // Availability
    if (inStockOnly) {
      result = result.filter((p) => p.stock > 0)
    }

    // Price range
    result = result.filter((p) => p.price <= priceRange)

    // Sort
    switch (sort) {
      case 'a-z':
        result.sort((a, b) => a.title.localeCompare(b.title))
        break
      case 'z-a':
        result.sort((a, b) => b.title.localeCompare(a.title))
        break
      case 'price-low-high':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-high-low':
        result.sort((a, b) => b.price - a.price)
        break
      case 'date-old-new':
        result.sort((a, b) => a.createdAt.localeCompare(b.createdAt))
        break
      case 'date-new-old':
        result.sort((a, b) => b.createdAt.localeCompare(a.createdAt))
        break
      case 'best-selling':
      case 'featured':
      case 'most-relevant':
      default:
        result.sort((a, b) => (a.bestSellerRank ?? 99) - (b.bestSellerRank ?? 99))
        break
    }

    return result
  }, [initialProducts, inStockOnly, priceRange, sort])

  // Paginated slice
  const displayedProducts = filteredProducts.slice(0, visibleCount)
  const hasMore = visibleCount < filteredProducts.length

  // Desktop grid columns class
  const desktopColsClass = {
    2: 'lg:grid-cols-2',
    3: 'lg:grid-cols-3',
    4: 'lg:grid-cols-4',
  }[desktopDensity]

  // Mobile grid columns class
  const mobileColsClass = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
  }[mobileDensity]

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="flex gap-8 items-start">
        {/* Desktop Sticky Filter Sidebar */}
        <FilterSidebar
          inStockOnly={inStockOnly}
          setInStockOnly={handleInStockChange}
          priceRange={priceRange}
          setPriceRange={handlePriceChange}
          maxPrice={maxDataPrice}
          hasActiveFilters={hasActiveFilters}
          onClearAll={handleClearAll}
        />

        {/* Main Products Area */}
        <div className="flex-1 w-full">
          {/* Controls Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-gold/15 mb-6">
            <div className="flex items-center gap-3">
              {/* Mobile Filter Button */}
              <button
                onClick={() => setIsMobileFilterOpen(true)}
                className="lg:hidden flex items-center gap-2 px-3 py-2 border border-gold/20 rounded-lg text-xs md:text-sm font-medium text-charcoal bg-ivory hover:bg-sage/30"
              >
                <SlidersHorizontal className="w-4 h-4 text-forest" />
                <span>Filters</span>
                {hasActiveFilters && (
                  <span className="w-2 h-2 rounded-full bg-forest" />
                )}
              </button>

              <span className="text-xs md:text-sm text-charcoal/60">
                Showing {displayedProducts.length} of {filteredProducts.length} products
              </span>
            </div>

            <div className="flex items-center gap-3">
              {/* Grid Density Toggle */}
              <GridDensityToggle
                desktopDensity={desktopDensity}
                setDesktopDensity={setDesktopDensity}
                mobileDensity={mobileDensity}
                setMobileDensity={setMobileDensity}
              />

              {/* Sort Select */}
              <SortSelect value={sort} onChange={handleSortChange} />
            </div>
          </div>

          {/* Active Filter Pills (Optional clean view) */}
          {hasActiveFilters && (
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="text-xs text-charcoal/50">Active filters:</span>
              {inStockOnly && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs bg-forest/10 text-forest border border-forest/20">
                  In Stock Only
                  <button
                    onClick={() => handleInStockChange(false)}
                    className="hover:text-terracotta"
                    aria-label="Remove in stock filter"
                  >
                    ×
                  </button>
                </span>
              )}
              {priceRange < maxDataPrice && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs bg-forest/10 text-forest border border-forest/20">
                  Up to ₹{priceRange}
                  <button
                    onClick={() => handlePriceChange(maxDataPrice)}
                    className="hover:text-terracotta"
                    aria-label="Remove price filter"
                  >
                    ×
                  </button>
                </span>
              )}
              <button
                onClick={handleClearAll}
                className="text-xs text-terracotta hover:underline ml-1"
              >
                Clear all
              </button>
            </div>
          )}

          {/* Product Grid or Empty State */}
          {displayedProducts.length > 0 ? (
            <>
              <div
                className={`grid ${mobileColsClass} md:grid-cols-2 ${desktopColsClass} gap-4 md:gap-6 transition-opacity ${
                  isPending ? 'opacity-60' : 'opacity-100'
                }`}
              >
                {displayedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              {/* Load More Button */}
              {hasMore && (
                <div className="mt-12 text-center">
                  <button
                    onClick={() => setVisibleCount((prev) => prev + ITEMS_PER_PAGE)}
                    className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl border border-forest text-forest font-medium text-sm hover:bg-forest hover:text-ivory transition-colors shadow-xs"
                  >
                    Load More Products
                  </button>
                  <p className="mt-2 text-xs text-charcoal/50">
                    Showing {displayedProducts.length} of {filteredProducts.length} products
                  </p>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-20 px-4 bg-sage/20 rounded-2xl border border-gold/10">
              <PackageSearch className="w-12 h-12 text-charcoal/30 mx-auto mb-3" />
              <h3 className="font-serif text-2xl text-charcoal mb-2">
                No products match your filters
              </h3>
              <p className="text-sm text-charcoal/60 max-w-sm mx-auto mb-6">
                Try loosening your price filter or removing the in-stock restriction to view our full Ayurvedic range.
              </p>
              <button
                onClick={handleClearAll}
                className="inline-flex items-center gap-2 bg-forest text-ivory px-6 py-3 rounded-xl text-sm font-medium hover:bg-forest/90 transition-colors"
              >
                <RotateCcw className="w-4 h-4" /> Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Drawer */}
      <MobileFilterDrawer
        isOpen={isMobileFilterOpen}
        onClose={() => setIsMobileFilterOpen(false)}
        inStockOnly={inStockOnly}
        setInStockOnly={handleInStockChange}
        priceRange={priceRange}
        setPriceRange={handlePriceChange}
        maxPrice={maxDataPrice}
        resultCount={filteredProducts.length}
        hasActiveFilters={hasActiveFilters}
        onClearAll={handleClearAll}
      />
    </div>
  )
}
