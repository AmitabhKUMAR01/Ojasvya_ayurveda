import { Truck, Package, MessageCircle, Shield } from 'lucide-react'
import Reveal from '@/components/ui/Reveal'

const trustPoints = [
  {
    icon: Truck,
    title: 'Free Shipping',
    desc: 'Across India on all orders',
  },
  {
    icon: Package,
    title: 'Discreet Packaging',
    desc: 'Your privacy, always respected',
  },
  {
    icon: Shield,
    title: 'Cash on Delivery',
    desc: 'Pay only when you receive',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp Support',
    desc: 'Free advice from Hakim Sahab',
  },
]

export default function TrustStrip() {
  return (
    <section className="bg-sage/40 border-y border-gold/10 py-6" aria-label="Why trust us">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {trustPoints.map((point, i) => {
            const Icon = point.icon
            return (
              <Reveal key={point.title} delay={i * 100} className="group flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <div className="p-2.5 rounded-xl bg-forest/10 shrink-0 transition-all duration-300 group-hover:bg-forest group-hover:-rotate-6 group-hover:scale-110">
                  <Icon className="w-5 h-5 text-forest transition-colors duration-300 group-hover:text-ivory" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-sans font-semibold text-charcoal text-sm">{point.title}</p>
                  <p className="font-sans text-xs text-charcoal/60 mt-0.5">{point.desc}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
