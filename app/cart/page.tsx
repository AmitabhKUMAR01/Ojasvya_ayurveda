'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useCartStore } from '@/store/cart'
import { formatPrice } from '@/lib/utils'
import { Minus, Plus, Trash2, ArrowRight, ShieldCheck, Truck, PackageOpen } from 'lucide-react'

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart, getSubtotal } = useCartStore()
  const subtotal = getSubtotal()

  if (items.length === 0) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center container mx-auto px-4 py-16">
        <div className="max-w-md w-full text-center space-y-4 bg-sage/20 p-8 md:p-12 rounded-2xl border border-gold/15">
          <PackageOpen className="w-16 h-16 text-charcoal/30 mx-auto" />
          <h1 className="font-serif text-3xl text-charcoal">Your Cart is Empty</h1>
          <p className="text-sm text-charcoal/70">
            Explore our range of classical herbal formulations, vitality kits, and pure single herbs.
          </p>
          <div className="pt-2">
            <Link
              href="/collections/all"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-forest text-ivory rounded-xl text-sm font-semibold hover:bg-forest/90 transition-colors shadow-xs"
            >
              Shop All Products <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen container mx-auto px-4 py-8 md:py-16">
      <div className="flex items-center justify-between pb-6 border-b border-gold/15 mb-8">
        <div>
          <h1 className="font-serif text-3xl md:text-4xl text-charcoal">Shopping Cart</h1>
          <p className="text-xs md:text-sm text-charcoal/60 mt-1">
            {items.reduce((sum, i) => sum + i.quantity, 0)} items in your basket
          </p>
        </div>
        <button
          onClick={clearCart}
          className="text-xs text-terracotta hover:underline font-medium"
        >
          Clear cart
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Cart Items List - 8 cols */}
        <div className="lg:col-span-8 space-y-4">
          <div className="divide-y divide-gold/15 border border-gold/15 rounded-2xl bg-ivory overflow-hidden">
            {items.map((item) => (
              <div key={item.productId} className="p-4 sm:p-6 flex flex-col sm:flex-row gap-4 sm:items-center">
                {/* Product Thumbnail */}
                <div className="relative w-20 h-24 sm:w-24 sm:h-28 rounded-xl overflow-hidden bg-sage/20 shrink-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                </div>

                {/* Title & Price */}
                <div className="flex-1 min-w-0 space-y-1">
                  <Link
                    href={`/products/${item.slug}`}
                    className="font-serif text-lg text-charcoal hover:text-forest transition-colors font-medium line-clamp-1"
                  >
                    {item.title}
                  </Link>
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm font-semibold text-forest font-sans">
                      {formatPrice(item.price)}
                    </span>
                    {item.compareAtPrice && (
                      <span className="text-xs text-charcoal/40 line-through">
                        {formatPrice(item.compareAtPrice)}
                      </span>
                    )}
                  </div>
                </div>

                {/* Quantity Stepper & Remove Button */}
                <div className="flex items-center justify-between sm:justify-end gap-4">
                  <div className="flex items-center border border-gold/25 rounded-lg bg-ivory">
                    <button
                      onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                      className="p-1.5 text-charcoal hover:bg-sage/30 rounded-l-lg transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="px-3 text-xs font-semibold text-charcoal min-w-[2rem] text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                      className="p-1.5 text-charcoal hover:bg-sage/30 rounded-r-lg transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <span className="text-sm font-bold text-charcoal sm:min-w-[5rem] text-right font-serif">
                    {formatPrice(item.price * item.quantity)}
                  </span>

                  <button
                    onClick={() => removeItem(item.productId)}
                    className="p-2 text-charcoal/40 hover:text-terracotta transition-colors"
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between pt-2">
            <Link
              href="/collections/all"
              className="text-xs font-semibold text-forest hover:text-gold transition-colors flex items-center gap-1.5"
            >
              ← Continue Shopping
            </Link>
          </div>
        </div>

        {/* Order Summary Sidebar - 4 cols */}
        <div className="lg:col-span-4 p-6 rounded-2xl bg-sage/20 border border-gold/15 space-y-6">
          <h2 className="font-serif text-xl font-medium text-charcoal pb-3 border-b border-gold/15">
            Order Summary
          </h2>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between text-charcoal/70">
              <span>Subtotal</span>
              <span className="font-semibold text-charcoal">{formatPrice(subtotal)}</span>
            </div>
            <div className="flex justify-between text-charcoal/70">
              <span>Delivery Charges</span>
              <span className="font-semibold text-forest">FREE</span>
            </div>
            <div className="flex justify-between text-charcoal/70">
              <span>Payment Mode</span>
              <span className="font-semibold text-gold font-sans">Cash on Delivery</span>
            </div>
            <div className="pt-3 border-t border-gold/15 flex justify-between items-baseline">
              <span className="font-serif text-lg font-semibold text-charcoal">Total Amount</span>
              <span className="font-serif text-2xl font-bold text-forest">{formatPrice(subtotal)}</span>
            </div>
          </div>

          <Link
            href="/checkout"
            className="w-full py-4 px-6 bg-forest text-ivory rounded-xl text-sm font-semibold hover:bg-forest/90 transition-all flex items-center justify-center gap-2 shadow-md"
          >
            <span>Proceed to COD Checkout</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <div className="pt-2 space-y-2.5 text-xs text-charcoal/70 border-t border-gold/10">
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-forest shrink-0" />
              <span>Free Delivery pan-India (4–7 business days)</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-gold shrink-0" />
              <span>100% Cash on Delivery — Pay at your doorstep</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
