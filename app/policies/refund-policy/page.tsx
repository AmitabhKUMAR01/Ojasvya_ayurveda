import type { Metadata } from 'next'
import { siteConfig } from '@/lib/siteConfig'

export const metadata: Metadata = {
  title: `Refund & Return Policy | ${siteConfig.name}`,
}

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-ivory py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-3xl space-y-8">
        <div className="space-y-2 pb-6 border-b border-gold/15">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold font-sans">Guarantee & Terms</span>
          <h1 className="font-serif text-3xl md:text-5xl text-charcoal">Refund & Return Policy</h1>
          <p className="text-xs text-charcoal/50">Last updated: October 2026</p>
        </div>

        <div className="p-6 md:p-10 rounded-3xl bg-ivory border border-gold/15 shadow-xs space-y-6 text-xs md:text-sm text-charcoal/80 leading-relaxed">
          <section className="space-y-2">
            <h2 className="font-serif text-xl text-charcoal font-semibold">1. 7-Day Return Window</h2>
            <p>
              We want you to be completely confident in your purchase. You may request a return within <strong>7 calendar days</strong> of parcel delivery.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl text-charcoal font-semibold">2. Eligibility Conditions</h2>
            <p>
              Due to hygiene and the perishable nature of natural Ayurvedic formulations, herbs, oils, and churnas:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Items must be strictly <strong>unopened, sealed, and in their original packaging</strong>.</li>
              <li>Bottles with broken safety seals or opened powder jars cannot be returned for health safety reasons.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl text-charcoal font-semibold">3. Reverse Pickup & Restocking Fee</h2>
            <p>
              A nominal fee of <strong>₹{siteConfig.returnPolicy.fee}</strong> will be deducted from your refund amount to cover reverse courier logistics and warehouse inspection.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl text-charcoal font-semibold">4. Damaged or Incorrect Dispatches</h2>
            <p>
              If you received a damaged container, leaked bottle, or incorrect formulation, share an unboxing photo or video with our support team or Hakim Sahab within 48 hours of delivery for an immediate free replacement.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
