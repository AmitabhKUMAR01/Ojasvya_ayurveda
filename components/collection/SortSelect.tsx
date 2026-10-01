'use client'

import type { SortOption } from '@/types/product'
import { ChevronDown } from 'lucide-react'

interface SortSelectProps {
  value: SortOption
  onChange: (val: SortOption) => void
}

const sortOptions: { value: SortOption; label: string }[] = [
  { value: 'featured', label: 'Featured' },
  { value: 'most-relevant', label: 'Most Relevant' },
  { value: 'best-selling', label: 'Best Selling' },
  { value: 'a-z', label: 'Alphabetically, A-Z' },
  { value: 'z-a', label: 'Alphabetically, Z-A' },
  { value: 'price-low-high', label: 'Price, low to high' },
  { value: 'price-high-low', label: 'Price, high to low' },
  { value: 'date-old-new', label: 'Date, old to new' },
  { value: 'date-new-old', label: 'Date, new to old' },
]

export default function SortSelect({ value, onChange }: SortSelectProps) {
  return (
    <div className="relative inline-block">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as SortOption)}
        className="appearance-none bg-ivory border border-gold/20 rounded-lg pl-3 pr-8 py-2 text-xs md:text-sm font-medium text-charcoal outline-none focus:border-forest focus:ring-1 focus:ring-forest cursor-pointer"
        aria-label="Sort products by"
      >
        {sortOptions.map((opt) => (
          <option key={opt.value} value={opt.value}>
            Sort: {opt.label}
          </option>
        ))}
      </select>
      <ChevronDown className="w-3.5 h-3.5 text-charcoal/50 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
    </div>
  )
}
