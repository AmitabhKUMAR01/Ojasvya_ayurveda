'use client'

import { formatPrice } from '@/lib/utils'
import { X, Check, RotateCcw } from 'lucide-react'

interface MobileFilterDrawerProps {
  isOpen: boolean
  onClose: () => void
  inStockOnly: boolean
  setInStockOnly: (val: boolean) => void
  priceRange: number
  setPriceRange: (val: number) => void
  maxPrice: number
  resultCount: number
  hasActiveFilters: boolean
  onClearAll: () => void
}

export default function MobileFilterDrawer({
  isOpen,
  onClose,
  inStockOnly,
  setInStockOnly,
  priceRange,
  setPriceRange,
  maxPrice,
  resultCount,
  hasActiveFilters,
  onClearAll,
}: MobileFilterDrawerProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex flex-col justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-charcoal/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Sheet Content */}
      <div className="relative bg-ivory rounded-t-2xl max-h-[85vh] flex flex-col shadow-2xl z-10 animate-fade-up">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gold/15">
          <div className="flex items-center gap-2">
            <h2 className="font-serif text-lg font-medium text-charcoal">Filters</h2>
            <span className="text-xs text-charcoal/60">({resultCount} results)</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-sage/40 text-charcoal/70"
            aria-label="Close filters"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 space-y-6 overflow-y-auto flex-1">
          {/* Availability Filter */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gold font-sans">
              Availability
            </h3>
            <label className="flex items-center gap-3 text-sm text-charcoal cursor-pointer">
              <div
                onClick={() => setInStockOnly(!inStockOnly)}
                className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${
                  inStockOnly
                    ? 'bg-forest border-forest text-ivory'
                    : 'border-gold/30 bg-ivory'
                }`}
              >
                {inStockOnly && <Check className="w-3.5 h-3.5 stroke-[3]" />}
              </div>
              <span className="font-medium">In Stock Only</span>
            </label>
          </div>

          {/* Price Range Slider */}
          <div className="space-y-3">
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
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-gold/15 bg-ivory flex gap-3">
          {hasActiveFilters && (
            <button
              onClick={onClearAll}
              className="flex-1 py-3 px-4 rounded-xl border border-gold/30 text-charcoal text-sm font-medium hover:bg-sage/30 flex items-center justify-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Clear All
            </button>
          )}
          <button
            onClick={onClose}
            className="flex-1 py-3 px-4 rounded-xl bg-forest text-ivory text-sm font-medium hover:bg-forest/90 shadow-md"
          >
            Show {resultCount} Results
          </button>
        </div>
      </div>
    </div>
  )
}
