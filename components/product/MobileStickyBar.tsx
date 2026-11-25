'use client'

import { formatPrice } from '@/lib/utils'
import { ShoppingCart, MessageCircle } from 'lucide-react'
import { siteConfig } from '@/lib/siteConfig'
import { getWhatsAppUrl } from '@/lib/utils'
import { useCartStore } from '@/store/cart'

interface MobileStickyBarProps {
  title: string
  price: number
  isOutOfStock: boolean
  onAddToCart: () => void
}

export default function MobileStickyBar({
  title,
  price,
  isOutOfStock,
  onAddToCart,
}: MobileStickyBarProps) {
  const cartCount = useCartStore((s) => s.getTotalItems())
  const waUrl = getWhatsAppUrl(
    siteConfig.whatsappNumber,
    `Hi! I have a question about "${title}".`
  )

  return (
    <div
      className={`fixed left-0 right-0 z-40 bg-ivory/95 backdrop-blur-md border-t border-gold/15 p-3 md:hidden flex items-center justify-between gap-3 shadow-lg transition-[bottom] duration-300 ${
        cartCount > 0 ? 'bottom-[4.75rem]' : 'bottom-0'
      }`}
    >
      <div className="flex flex-col min-w-0 flex-1">
        <span className="text-xs font-serif font-medium text-charcoal truncate">{title}</span>
        <span className="text-sm font-bold text-forest">{formatPrice(price)}</span>
      </div>

      <div className="flex items-center gap-2 shrink-0">
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-[#25D366] text-white rounded-xl shadow-xs"
          aria-label="Ask questions on WhatsApp"
        >
          <MessageCircle className="w-4 h-4" />
        </a>

        <button
          onClick={onAddToCart}
          disabled={isOutOfStock}
          className="px-5 py-3 bg-forest text-ivory rounded-xl text-xs font-semibold hover:bg-forest/90 transition-colors shadow-xs flex items-center gap-1.5 disabled:bg-sage/50 disabled:text-charcoal/40"
        >
          <ShoppingCart className="w-3.5 h-3.5" />
          {isOutOfStock ? 'Out of stock' : 'Add to Cart'}
        </button>
      </div>
    </div>
  )
}
