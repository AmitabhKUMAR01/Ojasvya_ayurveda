'use client'

import { useState } from 'react'
import Image from 'next/image'
import type { ProductImage } from '@/types/product'

interface ProductGalleryProps {
  images: ProductImage[]
  title: string
}

export default function ProductGallery({ images, title }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)

  if (!images || images.length === 0) return null

  const activeImage = images[selectedIndex] || images[0]

  return (
    <div className="space-y-4">
      {/* Main Image Display */}
      <div
        className="relative w-full overflow-hidden rounded-2xl bg-sage/20 border border-gold/10 group cursor-crosshair"
        style={{ aspectRatio: '4/5' }}
      >
        <Image
          src={activeImage.src}
          alt={activeImage.alt || title}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {images.length > 1 && (
          <div className="absolute bottom-3 right-3 bg-charcoal/70 text-ivory text-xs px-2.5 py-1 rounded-full backdrop-blur-xs font-sans">
            {selectedIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Thumbnails Row */}
      {images.length > 1 && (
        <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
          {images.map((img, idx) => (
            <button
              key={img.src + idx}
              onClick={() => setSelectedIndex(idx)}
              className={`relative w-20 h-20 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                selectedIndex === idx
                  ? 'border-forest ring-2 ring-forest/20'
                  : 'border-gold/15 opacity-70 hover:opacity-100'
              }`}
              aria-label={`View image ${idx + 1} of ${title}`}
            >
              <Image
                src={img.src}
                alt={img.alt || `${title} thumbnail ${idx + 1}`}
                fill
                sizes="80px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
