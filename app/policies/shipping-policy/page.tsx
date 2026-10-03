import type { Metadata } from 'next'
import { siteConfig } from '@/lib/siteConfig'
import { Truck, ShieldCheck, Clock, Package } from 'lucide-react'

export const metadata: Metadata = {
  title: `Shipping & Delivery Policy | ${siteConfig.name}`,
}

export default function ShippingPolicyPage() {
  return (
    <div className="min-h-screen bg-ivory py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-3xl space-y-8">
        <div className="space-y-2 pb-6 border-b border-gold/15">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold font-sans">Pan-India Logistics</span>
          <h1 className="font-serif text-3xl md:text-5xl text-charcoal">Shipping & Delivery Policy</h1>
          <p className="text-xs text-charcoal/50">Last updated: October 2026</p>
        </div>

        <div className="p-6 md:p-10 rounded-3xl bg-ivory border border-gold/15 shadow-xs space-y-6 text-xs md:text-sm text-charcoal/80 leading-relaxed">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4">
            <div className="p-4 rounded-xl bg-sage/20 border border-gold/10 space-y-1">
              <div className="flex items-center gap-2 text-forest font-semibold">
                <Truck className="w-4 h-4" />
                <span>Free Shipping</span>
              </div>
              <p className="text-xs text-charcoal/70">₹0 shipping fee across all valid Indian postal pincodes.</p>
            </div>
            <div className="p-4 rounded-xl bg-sage/20 border border-gold/10 space-y-1">
              <div className="flex items-center gap-2 text-forest font-semibold">
                <Package className="w-4 h-4" />
                <span>Discreet Box</span>
              </div>
              <p className="text-xs text-charcoal/70">Plain packaging with no product names on the outside.</p>
            </div>
          </div>

          <section className="space-y-2">
            <h2 className="font-serif text-xl text-charcoal font-semibold">1. Processing & Dispatch Timeline</h2>
            <p>
              All orders placed before 3:00 PM IST on business days are prepared, quality inspected, and handed over to our courier partner within 24 to 48 hours. Orders placed on Sundays or national holidays are dispatched on the next business day.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl text-charcoal font-semibold">2. Delivery Timeframes</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Metro & Tier 1 Cities:</strong> 3 to 5 business days.</li>
              <li><strong>Tier 2, Tier 3 & Rural Pincodes:</strong> 4 to 7 business days.</li>
              <li><strong>North-East & Island Territories:</strong> 6 to 9 business days.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl text-charcoal font-semibold">3. Cash on Delivery (COD) Procedure</h2>
            <p>
              When your order arrives, the courier delivery executive will collect the cash amount indicated on the package or present an official mobile scanner for instant UPI transfer. No advance online payment is requested before delivery.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl text-charcoal font-semibold">4. Live Tracking Updates</h2>
            <p>
              Once your parcel is dispatched, you will receive an SMS and WhatsApp tracking update. You can also track your parcel anytime on our <a href="/track-order" className="underline text-forest font-medium">Track Order page</a> using your Order ID.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
