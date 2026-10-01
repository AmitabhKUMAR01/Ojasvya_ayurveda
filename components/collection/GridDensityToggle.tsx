'use client'

import { LayoutGrid, Grid2X2, Grid3X3 } from 'lucide-react'

export type DesktopDensity = 2 | 3 | 4
export type MobileDensity = 1 | 2

interface GridDensityToggleProps {
  desktopDensity: DesktopDensity
  setDesktopDensity: (cols: DesktopDensity) => void
  mobileDensity: MobileDensity
  setMobileDensity: (cols: MobileDensity) => void
}

export default function GridDensityToggle({
  desktopDensity,
  setDesktopDensity,
  mobileDensity,
  setMobileDensity,
}: GridDensityToggleProps) {
  return (
    <div className="flex items-center gap-1.5">
      {/* Mobile Toggles */}
      <div className="flex items-center border border-gold/20 rounded-lg p-0.5 md:hidden">
        <button
          onClick={() => setMobileDensity(1)}
          className={`p-1.5 rounded transition-colors ${
            mobileDensity === 1 ? 'bg-forest text-ivory' : 'text-charcoal/50 hover:text-charcoal'
          }`}
          aria-label="Single column view"
        >
          <div className="w-3.5 h-3.5 border-2 border-current rounded-xs" />
        </button>
        <button
          onClick={() => setMobileDensity(2)}
          className={`p-1.5 rounded transition-colors ${
            mobileDensity === 2 ? 'bg-forest text-ivory' : 'text-charcoal/50 hover:text-charcoal'
          }`}
          aria-label="Two column view"
        >
          <Grid2X2 className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Desktop Toggles */}
      <div className="hidden md:flex items-center border border-gold/20 rounded-lg p-0.5">
        <button
          onClick={() => setDesktopDensity(2)}
          className={`px-2 py-1 text-xs font-medium rounded transition-colors ${
            desktopDensity === 2 ? 'bg-forest text-ivory' : 'text-charcoal/60 hover:text-charcoal'
          }`}
          aria-label="2 columns grid"
        >
          2
        </button>
        <button
          onClick={() => setDesktopDensity(3)}
          className={`px-2 py-1 text-xs font-medium rounded transition-colors ${
            desktopDensity === 3 ? 'bg-forest text-ivory' : 'text-charcoal/60 hover:text-charcoal'
          }`}
          aria-label="3 columns grid"
        >
          3
        </button>
        <button
          onClick={() => setDesktopDensity(4)}
          className={`px-2 py-1 text-xs font-medium rounded transition-colors ${
            desktopDensity === 4 ? 'bg-forest text-ivory' : 'text-charcoal/60 hover:text-charcoal'
          }`}
          aria-label="4 columns grid"
        >
          4
        </button>
      </div>
    </div>
  )
}
