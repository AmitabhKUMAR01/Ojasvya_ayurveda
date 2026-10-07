import type { Metadata } from 'next'
import { siteConfig } from '@/lib/siteConfig'
import { ShieldCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: `Privacy Policy | ${siteConfig.name}`,
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-ivory py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-3xl space-y-8">
        <div className="space-y-2 pb-6 border-b border-gold/15">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold font-sans">Legal & Transparency</span>
          <h1 className="font-serif text-3xl md:text-5xl text-charcoal">Privacy Policy</h1>
          <p className="text-xs text-charcoal/50">Last updated: October 2026</p>
        </div>

        <div className="p-6 md:p-10 rounded-3xl bg-ivory border border-gold/15 shadow-xs space-y-6 text-xs md:text-sm text-charcoal/80 leading-relaxed">
          <section className="space-y-2">
            <h2 className="font-serif text-xl text-charcoal font-semibold">1. Information We Collect</h2>
            <p>
              When you place a Cash on Delivery (COD) order or request an Ayurvedic consultation with Hakim Sahab on WhatsApp, we collect personal information you provide to us, including your full name, 10-digit Indian mobile number, delivery address, city, state, postal pincode, and optional email address.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl text-charcoal font-semibold">2. Purpose of Collection</h2>
            <p>
              Your data is collected strictly for fulfilling your physical order, coordinating doorstep delivery with our courier partners, providing personalized dosage guidance via WhatsApp, and providing order tracking notifications.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl text-charcoal font-semibold">3. Confidentiality & Discreet Delivery</h2>
            <p>
              We honor your privacy with the utmost respect. We never sell, rent, or lease your personal information or health inquiries to third-party marketing companies. All parcels are packaged in plain, unmarked cardboard boxes without product descriptions printed on the outer label.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl text-charcoal font-semibold">4. Contacting Us</h2>
            <p>
              For any questions regarding your personal information or to request data deletion, contact us at <strong>{siteConfig.email}</strong>.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
