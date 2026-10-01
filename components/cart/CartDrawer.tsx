'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { X, Minus, Plus, ShoppingBag, ArrowRight, Package } from 'lucide-react'
import { useCartStore } from '@/store/cart'
import { formatPrice } from '@/lib/utils'

export default function CartDrawer() {
  const { items, isDrawerOpen, closeDrawer, removeItem, updateQuantity, getSubtotal } = useCartStore()
  const subtotal = getSubtotal()

  return (
    <>
      {/* Backdrop */}
      {isDrawerOpen && (
        <div className="fixed inset-0 bg-charcoal/40 z-50 backdrop-blur-sm" onClick={closeDrawer} aria-hidden="true" />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-ivory z-50 flex flex-col shadow-2xl transition-transform duration-300 ease-out ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog" aria-label="Shopping cart" aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gold/15">
          <h2 className="font-serif text-xl font-semibold text-charcoal">
            Your Cart
            {items.length > 0 && (
              <span className="ml-2 text-sm font-sans font-normal text-charcoal/50">
                ({items.reduce((s, i) => s + i.quantity, 0)} items)
              </span>
            )}
          </h2>
          <button onClick={closeDrawer} className="p-2 rounded-md hover:bg-sage/50 transition-colors" aria-label="Close cart">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 p-8 text-center">
              <ShoppingBag className="w-16 h-16 text-charcoal/20" />
              <div>
                <p className="font-serif text-xl text-charcoal/70">Your cart is empty</p>
                <p className="text-sm text-charcoal/50 mt-1">Discover our Ayurvedic wellness products</p>
              </div>
              <div className="flex flex-col gap-2 w-full mt-2">
                <Link href="/collections/all" onClick={closeDrawer} className="block w-full text-center bg-forest text-ivory py-3 px-4 rounded-lg text-sm font-medium hover:bg-forest/90 transition-colors">
                  Shop All Products
                </Link>
                <Link href="/collections/male-stamina-kits" onClick={closeDrawer} className="block w-full text-center border border-forest/30 text-forest py-3 px-4 rounded-lg text-sm font-medium hover:bg-sage/50 transition-colors">
                  Men&apos;s Stamina Kits
                </Link>
              </div>
            </div>
          ) : (
            <ul className="divide-y divide-gold/10 p-4 gap-4 flex flex-col">
              {items.map((item) => (
                <li key={item.productId} className="flex gap-3 py-2">
                  <div className="relative w-20 h-24 rounded-lg overflow-hidden bg-sage/30 shrink-0">
                    <Image src={item.image} alt={item.title} fill className="object-cover" sizes="80px" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <Link href={`/products/${item.slug}`} onClick={closeDrawer} className="font-sans text-sm font-medium text-charcoal line-clamp-2 hover:text-forest transition-colors">
                      {item.title}
                    </Link>
                    <p className="text-sm font-semibold text-forest mt-1">{formatPrice(item.price)}</p>
                    {item.compareAtPrice && (
                      <p className="text-xs text-charcoal/40 line-through">{formatPrice(item.compareAtPrice)}</p>
                    )}
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center border border-gold/20 rounded-md">
                        <button onClick={() => updateQuantity(item.productId, item.quantity - 1)} className="p-1.5 hover:bg-sage/50 transition-colors rounded-l-md" aria-label={`Decrease quantity of ${item.title}`}>
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-sm font-medium min-w-[2rem] text-center">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.productId, item.quantity + 1)} className="p-1.5 hover:bg-sage/50 transition-colors rounded-r-md" aria-label={`Increase quantity of ${item.title}`}>
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button onClick={() => removeItem(item.productId)} className="text-xs text-charcoal/40 hover:text-terracotta transition-colors" aria-label={`Remove ${item.title}`}>
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-gold/15 p-4 space-y-3 bg-ivory">
            <div className="flex items-center gap-2 text-sm text-forest">
              <Package className="w-4 h-4" />
              <span>Free shipping across India</span>
            </div>
            <div className="text-xs text-charcoal/60 bg-sage/40 rounded-lg px-3 py-2">
              💳 Cash on Delivery — Pay when your order arrives
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-charcoal/70">Subtotal</span>
              <span className="font-semibold text-charcoal text-lg">{formatPrice(subtotal)}</span>
            </div>
            <Link href="/checkout" onClick={closeDrawer} className="flex items-center justify-center gap-2 w-full bg-forest text-ivory py-3.5 px-4 rounded-xl font-medium text-sm hover:bg-forest/90 transition-colors">
              Proceed to COD Checkout <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </>
  )
}
