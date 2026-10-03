import type { Metadata } from 'next'
import { siteConfig } from '@/lib/siteConfig'

export const metadata: Metadata = {
  title: `Terms of Service | ${siteConfig.name}`,
}

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-ivory py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-3xl space-y-8">
        <div className="space-y-2 pb-6 border-b border-gold/15">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold font-sans">Legal</span>
          <h1 className="font-serif text-3xl md:text-5xl text-charcoal">Terms of Service</h1>
          <p className="text-xs text-charcoal/50">Last updated: October 2026</p>
        </div>

        <div className="p-6 md:p-10 rounded-3xl bg-ivory border border-gold/15 shadow-xs space-y-6 text-xs md:text-sm text-charcoal/80 leading-relaxed">
          <section className="space-y-2">
            <h2 className="font-serif text-xl text-charcoal font-semibold">1. Acceptance of Terms</h2>
            <p>
              By accessing and using this website, ordering products via Cash on Delivery, or initiating a consultation with Hakim Sahab, you agree to comply with and be bound by these Terms of Service.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl text-charcoal font-semibold">2. Ayurvedic & Health Disclaimer</h2>
            <p className="p-3 bg-sage/30 rounded-xl border border-gold/15 text-charcoal/90">
              {siteConfig.disclaimer}
            </p>
            <p>
              The product descriptions, blog articles, and ingredient information provided on this platform are based on classical Ayurvedic treatises (including Charaka Samhita and Ashtanga Hridayam) and traditional historical usage. They are intended for educational and wellness lifestyle purposes only.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl text-charcoal font-semibold">3. Cash on Delivery Terms</h2>
            <p>
              We provide Cash on Delivery across India in good faith without upfront payment charges. By placing a COD order, you agree to receive the package and pay the exact invoice amount to the delivery courier partner. Repeatedly rejecting genuine COD dispatches may result in address blacklisting.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl text-charcoal font-semibold">4. Governing Law</h2>
            <p>
              These terms are governed by and construed in accordance with the laws of India, under the jurisdiction of courts in Uttar Pradesh, India.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
