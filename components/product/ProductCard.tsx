'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCart, Check } from 'lucide-react'
import { useCartStore } from '@/store/cart'
import { formatPrice, calculateDiscount } from '@/lib/utils'
import type { Product } from '@/types/product'
import { toast } from 'sonner'

interface ProductCardProps {
  product: Product
  priority?: boolean
}

export default function ProductCard({ product, priority = false }: ProductCardProps) {
  const [hovered, setHovered] = useState(false)
  const [added, setAdded] = useState(false)
  const { addItem, openDrawer } = useCartStore()

  const discount = product.compareAtPrice
    ? calculateDiscount(product.price, product.compareAtPrice)
    : 0

  const isOutOfStock = product.stock === 0
  const hasSecondImage = product.images.length > 1

  function handleAddToCart(e: React.MouseEvent) {
    e.preventDefault()
    if (isOutOfStock || added) return

    addItem({
      productId: product.id,
      slug: product.slug,
      title: product.title,
      price: product.price,
      image: product.images[0].src,
      compareAtPrice: product.compareAtPrice,
    })

    setAdded(true)
    toast.success(`${product.shortTitle} added to cart`)
    openDrawer()
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="group flex flex-col rounded-2xl p-2 -m-2 transition-all duration-500 hover:bg-ivory-dark/60 hover:shadow-[0_18px_40px_-20px_color-mix(in_oklch,var(--color-forest)_45%,transparent)]">
      {/* Image */}
      <Link
        href={`/products/${product.slug}`}
        className="block relative overflow-hidden rounded-xl bg-sage/20"
        style={{ aspectRatio: '4/5' }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-label={`View ${product.title}`}
      >
        <Image
          src={product.images[0].src}
          alt={product.images[0].alt}
          fill
          priority={priority}
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className={`object-cover transition-all duration-700 ease-out ${hovered ? 'scale-110' : 'scale-100'} ${hovered && hasSecondImage ? 'opacity-0' : 'opacity-100'}`}
        />
        {hasSecondImage && (
          <Image
            src={product.images[1].src}
            alt=""
            aria-hidden="true"
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className={`object-cover transition-all duration-700 ease-out ${hovered ? 'opacity-100 scale-105' : 'opacity-0 scale-100'}`}
          />
        )}
        <span className="absolute inset-x-3 bottom-3 translate-y-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 rounded-lg bg-ivory/90 backdrop-blur-sm py-2 text-center text-xs font-medium text-forest">
          View details
        </span>

        {/* Badges */}
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1.5">
          {discount > 0 && (
            <span className="bg-terracotta text-ivory text-[11px] font-semibold px-2 py-0.5 rounded-md shadow-sm">
              {discount}% off
            </span>
          )}
          {isOutOfStock && (
            <span className="bg-charcoal/70 text-ivory text-[11px] font-semibold px-2 py-0.5 rounded-md">
              Out of stock
            </span>
          )}
        </div>
      </Link>

      {/* Info */}
      <div className="mt-3 flex flex-col gap-1.5">
        <Link href={`/products/${product.slug}`}>
          <h3 className="font-sans text-sm font-medium text-charcoal line-clamp-2 hover:text-forest transition-colors leading-snug">
            {product.title}
          </h3>
        </Link>

        {/* Price */}
        <div className="flex items-baseline gap-2">
          <span className="text-sm font-semibold text-forest">{formatPrice(product.price)}</span>
          {product.compareAtPrice && (
            <span className="text-xs text-charcoal/40 line-through">{formatPrice(product.compareAtPrice)}</span>
          )}
        </div>

        {/* Add to cart */}
        <button
          onClick={handleAddToCart}
          disabled={isOutOfStock}
          className={`mt-1 w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-sm font-medium transition-all duration-200
            ${isOutOfStock
              ? 'bg-sage/50 text-charcoal/40 cursor-not-allowed'
              : added
                ? 'bg-forest/10 text-forest border border-forest/30'
                : 'bg-forest text-ivory hover:bg-forest-light hover:shadow-md active:scale-95'
            }`}
          aria-label={isOutOfStock ? 'Out of stock' : `Add ${product.title} to cart`}
        >
          {isOutOfStock ? (
            'Out of stock'
          ) : added ? (
            <><Check className="w-3.5 h-3.5" /> Added!</>
          ) : (
            <><ShoppingCart className="w-3.5 h-3.5" /> Add to Cart</>
          )}
        </button>
      </div>
    </div>
  )
}
