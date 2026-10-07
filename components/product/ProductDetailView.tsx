'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Star, Minus, Plus, ShoppingCart, Truck, ShieldCheck, Package, Flame, MessageCircle, Check } from 'lucide-react'
import { useCartStore } from '@/store/cart'
import { formatPrice, calculateDiscount, getWhatsAppUrl } from '@/lib/utils'
import { siteConfig } from '@/lib/siteConfig'
import type { Product } from '@/types/product'
import { toast } from 'sonner'
import ProductGallery from '@/components/product/ProductGallery'
import PincodeChecker from '@/components/product/PincodeChecker'
import ProductAccordion from '@/components/product/ProductAccordion'
import MobileStickyBar from '@/components/product/MobileStickyBar'

interface ProductDetailViewProps {
  product: Product
}

export default function ProductDetailView({ product }: ProductDetailViewProps) {
  const router = useRouter()
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)
  const { addItem, openDrawer } = useCartStore()

  const discount = product.compareAtPrice
    ? calculateDiscount(product.price, product.compareAtPrice)
    : 0

  const isOutOfStock = product.stock === 0
  const isLowStock = product.stock > 0 && product.stock <= siteConfig.stockThreshold

  const waProductUrl = getWhatsAppUrl(
    siteConfig.whatsappNumber,
    `Namaste Hakim Sahab! Mujhe "${product.title}" ke bare mein salah chahiye.`
  )

  const handleAddToCart = () => {
    if (isOutOfStock) return

    for (let i = 0; i < quantity; i++) {
      addItem({
        productId: product.id,
        slug: product.slug,
        title: product.title,
        price: product.price,
        image: product.images[0]?.src || '',
        compareAtPrice: product.compareAtPrice,
      })
    }

    setAdded(true)
    toast.success(`${quantity} × ${product.shortTitle} added to cart`)
    openDrawer()
    setTimeout(() => setAdded(false), 2000)
  }

  const handleOrderNow = () => {
    if (isOutOfStock) return

    addItem({
      productId: product.id,
      slug: product.slug,
      title: product.title,
      price: product.price,
      image: product.images[0]?.src || '',
      compareAtPrice: product.compareAtPrice,
    })

    router.push('/checkout')
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Gallery - 7 cols on desktop */}
        <div className="lg:col-span-7">
          <ProductGallery images={product.images} title={product.title} />
        </div>

        {/* Product Purchase Info - 5 cols on desktop */}
        <div className="lg:col-span-5 space-y-6">
          {/* Rating & Review Count */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 text-gold">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating)
                      ? 'fill-gold text-gold'
                      : 'text-charcoal/20'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-charcoal/60 font-sans">
              {product.rating} ({product.reviewCount} customer reviews)
            </span>
          </div>

          {/* Title */}
          <div>
            <h1 className="font-serif text-2xl md:text-4xl text-charcoal leading-tight">
              {product.title}
            </h1>
            <p className="mt-2 text-sm text-charcoal/70 leading-relaxed font-sans">
              {product.shortDescription}
            </p>
          </div>

          {/* Price Block */}
          <div className="flex items-baseline gap-3 pt-2">
            <span className="text-2xl md:text-3xl font-serif font-bold text-forest">
              {formatPrice(product.price)}
            </span>
            {product.compareAtPrice && (
              <span className="text-sm md:text-base text-charcoal/40 line-through font-sans">
                {formatPrice(product.compareAtPrice)}
              </span>
            )}
            {discount > 0 && (
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-terracotta text-ivory">
                Save {discount}%
              </span>
            )}
          </div>

          {/* Real Stock Status (No Fake Urgency) */}
          {isOutOfStock ? (
            <div className="p-3 rounded-lg bg-charcoal/10 text-charcoal/80 text-xs font-medium">
              Currently Out of Stock. Tap below to notify Hakim Sahab on WhatsApp.
            </div>
          ) : isLowStock ? (
            <div className="flex items-center gap-2 text-xs font-medium text-terracotta">
              <Flame className="w-4 h-4" />
              <span>Only {product.stock} units left in this freshly prepared batch</span>
            </div>
          ) : (
            <div className="text-xs text-forest font-medium">
              ✓ In Stock — Ready to dispatch from our apothecary
            </div>
          )}

          {/* Quantity Stepper & CTAs */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-charcoal/70">Quantity:</span>
              <div className="flex items-center border border-gold/25 rounded-lg bg-ivory">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-2 text-charcoal hover:bg-sage/30 rounded-l-lg transition-colors"
                  aria-label="Decrease quantity"
                  disabled={isOutOfStock}
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="px-4 text-sm font-semibold text-charcoal min-w-[2.5rem] text-center">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.min(product.stock, q + 1))}
                  className="p-2 text-charcoal hover:bg-sage/30 rounded-r-lg transition-colors"
                  aria-label="Increase quantity"
                  disabled={isOutOfStock || quantity >= product.stock}
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <button
                type="button"
                onClick={handleAddToCart}
                disabled={isOutOfStock}
                className={`py-3.5 px-5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-200 border border-forest text-forest hover:bg-sage/30 active:scale-98 disabled:bg-sage/40 disabled:text-charcoal/40 disabled:border-gold/20 ${
                  added ? 'bg-forest/10' : 'bg-transparent'
                }`}
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4 text-forest" />
                    <span>Added to Cart!</span>
                  </>
                ) : (
                  <>
                    <ShoppingCart className="w-4 h-4" />
                    <span>Add to Cart</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleOrderNow}
                disabled={isOutOfStock}
                className="py-3.5 px-5 rounded-xl text-sm font-semibold bg-forest text-ivory hover:bg-forest/90 transition-all duration-200 shadow-md active:scale-98 disabled:bg-sage/50 disabled:text-charcoal/40"
              >
                Order Now (COD)
              </button>
            </div>

            {/* Direct Consultation Link */}
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="flex items-center justify-center gap-2 py-2.5 text-xs font-medium text-forest hover:text-gold transition-colors text-center cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              <span>Have doubts about this product? Chat with Hakim Sahab</span>
            </a>
          </div>

          {/* Highlights / Trust Strip */}
          <div className="grid grid-cols-3 gap-2 py-4 border-y border-gold/15 text-center text-xs text-charcoal/80">
            <div className="flex flex-col items-center gap-1.5 p-2">
              <Truck className="w-4 h-4 text-forest" />
              <span>Free Delivery Pan-India</span>
            </div>
            <div className="flex flex-col items-center gap-1.5 p-2">
              <ShieldCheck className="w-4 h-4 text-gold" />
              <span>Cash on Delivery</span>
            </div>
            <div className="flex flex-col items-center gap-1.5 p-2">
              <Package className="w-4 h-4 text-forest" />
              <span>Discreet Packaging</span>
            </div>
          </div>

          {/* Pincode Checker */}
          <PincodeChecker />

          {/* Accordion (Benefits, Ingredients, Timeline, Return Policy, FAQ) */}
          <ProductAccordion product={product} />
        </div>
      </div>

      {/* Mobile Sticky Bar */}
      <MobileStickyBar
        title={product.shortTitle}
        price={product.price}
        isOutOfStock={isOutOfStock}
        onAddToCart={handleAddToCart}
      />
    </div>
  )
}
