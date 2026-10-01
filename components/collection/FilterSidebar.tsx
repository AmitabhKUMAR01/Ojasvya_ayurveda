'use client'

import { formatPrice } from '@/lib/utils'
import { Check, RotateCcw } from 'lucide-react'

interface FilterSidebarProps {
  inStockOnly: boolean
  setInStockOnly: (val: boolean) => void
  priceRange: number
  setPriceRange: (val: number) => void
  maxPrice: number
  hasActiveFilters: boolean
  onClearAll: () => void
}

export default function FilterSidebar({
  inStockOnly,
  setInStockOnly,
  priceRange,
  setPriceRange,
  maxPrice,
  hasActiveFilters,
  onClearAll,
}: FilterSidebarProps) {
  return (
    <aside className="w-64 shrink-0 hidden lg:block sticky top-24 space-y-8 pr-6">
      <div className="flex items-center justify-between pb-4 border-b border-gold/15">
        <h2 className="font-serif text-lg font-medium text-charcoal">Filters</h2>
        {hasActiveFilters && (
          <button
            onClick={onClearAll}
            className="flex items-center gap-1 text-xs text-terracotta hover:underline font-sans"
          >
            <RotateCcw className="w-3 h-3" /> Clear all
          </button>
        )}
      </div>

      {/* Availability Filter */}
      <div className="space-y-3">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-gold font-sans">
          Availability
        </h3>
        <label className="flex items-center gap-3 text-sm text-charcoal cursor-pointer group">
          <div
            onClick={() => setInStockOnly(!inStockOnly)}
            className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
              inStockOnly
                ? 'bg-forest border-forest text-ivory'
                : 'border-gold/30 bg-ivory group-hover:border-forest'
            }`}
          >
            {inStockOnly && <Check className="w-3 h-3 stroke-[3]" />}
          </div>
          <span>In Stock Only</span>
        </label>
      </div>

      {/* Price Range Slider */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-gold font-sans">
            Max Price
          </h3>
          <span className="text-sm font-semibold text-forest">
            {formatPrice(priceRange)}
          </span>
        </div>
        <input
          type="range"
          min={0}
          max={maxPrice}
          step={50}
          value={priceRange}
          onChange={(e) => setPriceRange(Number(e.target.value))}
          className="w-full accent-forest cursor-pointer"
        />
        <div className="flex justify-between text-xs text-charcoal/50">
          <span>₹0</span>
          <span>{formatPrice(maxPrice)}</span>
        </div>
      </div>

      {/* Quick reassurance */}
      <div className="p-4 rounded-xl bg-sage/30 border border-gold/10 text-xs text-charcoal/70 space-y-2">
        <p className="font-medium text-charcoal">🚚 All orders ship Free</p>
        <p>Cash on Delivery across India. Discreet packaging guaranteed.</p>
      </div>
    </aside>
  )
}
