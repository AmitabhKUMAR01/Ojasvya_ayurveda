import type { Metadata } from 'next'
import { siteConfig } from '@/lib/siteConfig'
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react'
import { getWhatsAppUrl } from '@/lib/utils'

export const metadata: Metadata = {
  title: `Contact Information | ${siteConfig.name}`,
}

export default function ContactInformationPage() {
  const waUrl = getWhatsAppUrl(
    siteConfig.whatsappNumber,
    'Namaste Hakim Sahab! Mujhe contact information ke bare mein poochna hai.'
  )

  return (
    <div className="min-h-screen bg-ivory py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-3xl space-y-8">
        <div className="space-y-2 pb-6 border-b border-gold/15">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold font-sans">Legal & Support</span>
          <h1 className="font-serif text-3xl md:text-5xl text-charcoal">Contact Information</h1>
          <p className="text-xs text-charcoal/50">Official Merchant & Customer Support Details</p>
        </div>

        <div className="p-6 md:p-10 rounded-3xl bg-ivory border border-gold/15 shadow-xs space-y-8 text-xs md:text-sm text-charcoal/80 leading-relaxed">
          <div className="space-y-4">
            <h2 className="font-serif text-xl text-charcoal font-semibold">Business Operating Name</h2>
            <p className="font-medium text-base text-forest">{siteConfig.name}</p>
            <p className="text-xs text-charcoal/60">{siteConfig.description}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-gold/15">
            <div className="space-y-2">
              <span className="flex items-center gap-2 font-semibold text-charcoal text-xs uppercase tracking-wider">
                <Phone className="w-4 h-4 text-forest" />
                <span>Customer Helpline</span>
              </span>
              {siteConfig.phones.length > 0 ? (
                siteConfig.phones.map((phone) => (
                  <a key={phone} href={`tel:${phone}`} className="block text-sm font-semibold text-forest hover:text-gold transition-colors">
                    +91 {phone}
                  </a>
                ))
              ) : (
                <p className="text-xs text-charcoal/70">Available via online support & WhatsApp</p>
              )}
            </div>

            <div className="space-y-2">
              <span className="flex items-center gap-2 font-semibold text-charcoal text-xs uppercase tracking-wider">
                <Mail className="w-4 h-4 text-forest" />
                <span>Email Inquiries</span>
              </span>
              <a href={`mailto:${siteConfig.email}`} className="block text-sm font-semibold text-forest hover:text-gold transition-colors break-all">
                {siteConfig.email}
              </a>
            </div>

            <div className="space-y-2">
              <span className="flex items-center gap-2 font-semibold text-charcoal text-xs uppercase tracking-wider">
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp Consultations</span>
              </span>
              <a href="#" className="inline-flex items-center gap-1.5 text-xs font-bold text-forest underline hover:text-gold cursor-pointer">
                Chat with Hakim Sahab
              </a>
            </div>

            <div className="space-y-2">
              <span className="flex items-center gap-2 font-semibold text-charcoal text-xs uppercase tracking-wider">
                <Clock className="w-4 h-4 text-gold" />
                <span>Operating Hours</span>
              </span>
              <p className="text-xs text-charcoal/70">Monday – Saturday: 9:00 AM – 7:00 PM IST</p>
              <p className="text-xs text-charcoal/70">Sunday: Closed (Emergency WhatsApp queries only)</p>
            </div>
          </div>

          <div className="pt-4 border-t border-gold/15 space-y-2">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
              <div>
                <strong className="block text-charcoal mb-0.5">Apothecary & Dispatch Facility:</strong>
                <p className="text-xs text-charcoal/70">
                  Ojasvya Ayurveda Distribution Center, Uttar Pradesh, India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
