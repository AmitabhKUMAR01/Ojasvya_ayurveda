'use client'

import { MessageCircle, UserCheck, Lock, Zap } from 'lucide-react'
import { siteConfig } from '@/lib/siteConfig'
import { getWhatsAppUrl } from '@/lib/utils'
import Reveal from '@/components/ui/Reveal'

const benefits = [
  {
    icon: UserCheck,
    title: 'Personalized Advice',
    desc: 'Hakim Sahab reviews your specific concern and suggests the right formulation for you.',
  },
  {
    icon: Lock,
    title: '100% Private',
    desc: 'Your health concern stays between you and Hakim Sahab. Complete confidentiality.',
  },
  {
    icon: Zap,
    title: 'Quick WhatsApp Support',
    desc: 'Get a response within 24 hours. No appointments, no waiting rooms.',
  },
]

export default function ConsultationSection() {
  const waUrl = getWhatsAppUrl(siteConfig.whatsappNumber, siteConfig.whatsappMessage)

  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-forest" aria-labelledby="consult-heading">
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl animate-float" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-sage/10 blur-3xl animate-float" style={{ animationDelay: '3s' }} aria-hidden="true" />
      <div className="relative container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
          {/* Hindi accent */}
          <p className="font-devanagari text-gold text-lg mb-3">सही प्रोडक्ट चुनने में मदद</p>
          <h2 id="consult-heading" className="font-serif text-3xl md:text-4xl text-ivory mb-4">
            Sahi Product Choose Karne<br className="hidden md:block" /> Mein Madad Chahiye?
          </h2>
          <p className="text-ivory/70 text-sm md:text-base mb-10 max-w-xl mx-auto">
            Not sure which product is right for your concern? Get free, personalized guidance from Hakim Sahab — directly on WhatsApp.
          </p>
          </Reveal>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {benefits.map((b, i) => {
              const Icon = b.icon
              return (
                <Reveal key={b.title} delay={i * 120} className="group flex flex-col items-center text-center gap-3 rounded-2xl p-4 transition-colors duration-300 hover:bg-ivory/5">
                  <div className="w-12 h-12 rounded-xl bg-ivory/10 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                    <Icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="font-sans font-semibold text-ivory text-sm mb-1">{b.title}</p>
                    <p className="text-ivory/55 text-xs leading-relaxed">{b.desc}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>

          {/* CTA */}
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="inline-flex items-center gap-2.5 bg-[#25D366] text-white px-8 py-4 rounded-xl font-semibold text-sm hover:bg-[#20c55e] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-8px_rgba(37,211,102,0.6)] cursor-pointer"
          >
            <MessageCircle className="w-5 h-5" />
            Chat with Hakim Sahab on WhatsApp
          </a>
          <p className="text-ivory/30 text-xs mt-3">Free. No registration. Reply within 24 hours.</p>
        </div>
      </div>
    </section>
  )
}
