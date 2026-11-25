'use client'

import { usePathname } from 'next/navigation'
import { ShoppingBag, ArrowRight } from 'lucide-react'
import { useCartStore } from '@/store/cart'
import { formatPrice } from '@/lib/utils'

const HIDDEN_PATHS = ['/checkout', '/cart', '/order-success']

export default function CartBar() {
  const pathname = usePathname()
  const items = useCartStore((s) => s.items)
  const openDrawer = useCartStore((s) => s.openDrawer)
  const totalItems = useCartStore((s) => s.getTotalItems())
  const subtotal = useCartStore((s) => s.getSubtotal())

  const hide =
    totalItems === 0 ||
    HIDDEN_PATHS.some((p) => pathname === p || pathname.startsWith(`${p}/`))

  if (hide) return null

  return (
    <div
      className="fixed bottom-0 inset-x-0 z-[45] pointer-events-none"
      role="region"
      aria-label="Cart summary"
    >
      <div className="pointer-events-auto mx-auto max-w-lg px-3 pb-3 md:pb-4">
        <button
          type="button"
          onClick={openDrawer}
          className="flex w-full items-center gap-3 rounded-2xl bg-forest text-ivory shadow-[0_12px_40px_-12px_rgba(0,0,0,0.45)] px-4 py-3 text-left transition-transform active:scale-[0.99] hover:bg-forest/95"
        >
          <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ivory/15">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-1.5 -right-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-gold text-charcoal text-[11px] font-bold px-1">
              {totalItems}
            </span>
          </span>

          <span className="min-w-0 flex-1">
            <span className="block text-sm font-semibold truncate">
              {totalItems} {totalItems === 1 ? 'item' : 'items'} · {formatPrice(subtotal)}
            </span>
            <span className="block text-xs text-ivory/75 truncate">
              {items[0]?.title}
              {items.length > 1 ? ` +${items.length - 1} more` : ''}
            </span>
          </span>

          <span className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-gold text-charcoal px-3.5 py-2.5 text-sm font-semibold">
            View Cart
            <ArrowRight className="w-4 h-4" />
          </span>
        </button>
      </div>
    </div>
  )
}
