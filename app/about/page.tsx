import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { siteConfig } from '@/lib/siteConfig'
import { Sparkles, ShieldCheck, HeartHandshake, Leaf, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: `About Us | ${siteConfig.name}`,
  description:
    'Discover the heritage and values behind Ojasvya Ayurveda. Authentic Ayurvedic formulations sourced directly from traditional herbal harvesters across India.',
}

const milestones = [
  {
    year: 'Roots in Tradition',
    title: 'Classical Texts & Herbal Wisdom',
    desc: 'Founded on classical Ayurvedic treatises including the Charaka Samhita and Ashtanga Hridayam. Our journey started with a commitment to pure, unadulterated Rasayana formulations.',
  },
  {
    year: 'Ethical Sourcing',
    title: 'Himalayan & Forest Foraged Herbs',
    desc: 'Partnering directly with traditional herbalists in the Himalayan valleys and tribal belts of Madhya Pradesh and Kerala for sustainable wild-harvested roots and resins.',
  },
  {
    year: 'Traditional Processing',
    title: 'Classical Paka & Shodhana Methods',
    desc: 'Every herb undergoes traditional purification (Shodhana) and slow decoction (Kwath) or herbal churning to preserve active bio-compounds without synthetic additives.',
  },
  {
    year: 'Modern Apothecary',
    title: 'Direct to Doorstep Across India',
    desc: 'Offering accessible, discreet, Cash on Delivery wellness formulations with free personal consultations from Hakim Sahab to thousands of households nationwide.',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-sage/20 border-b border-gold/15">
        <div className="container mx-auto px-4 max-w-4xl text-center space-y-4">
          <p className="font-devanagari text-gold text-lg md:text-xl font-semibold">
            {siteConfig.tagline}
          </p>
          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-charcoal">
            The Story Behind <span className="text-forest italic">{siteConfig.name}</span>
          </h1>
          <p className="text-sm md:text-base text-charcoal/70 max-w-2xl mx-auto leading-relaxed font-sans">
            We bridge ancient Ayurvedic apothecary heritage with modern accessibility. No shortcuts, no synthetic fillers — only pure, potent herbs crafted with respect.
          </p>
        </div>
      </section>

      {/* Heritage & Philosophy */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gold/15" style={{ aspectRatio: '4/5' }}>
              <Image
                src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&q=80"
                alt="Ayurvedic mortar and pestle with raw herbs"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="space-y-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-gold font-sans">
                Our Philosophy
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-charcoal leading-tight">
                Honoring the Ancient Science of Life
              </h2>
              <p className="text-sm text-charcoal/75 leading-relaxed">
                In classical Ayurveda, wellness is not merely the absence of disease — it is a harmonious balance of body, mind, and spirit (Doshas, Dhatus, and Agni).
              </p>
              <p className="text-sm text-charcoal/75 leading-relaxed">
                At <strong>{siteConfig.name}</strong>, we adhere strictly to classical manufacturing methodologies. From hand-selected Ashwagandha roots dried under natural sun to pure Himalayan Shilajit purified through traditional Shodhana, we never compromise on quality or integrity.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs text-charcoal font-medium">
                  <CheckCircle2 className="w-4 h-4 text-forest" />
                  <span>100% Herbal & Plant-Based Formulations</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-charcoal font-medium">
                  <CheckCircle2 className="w-4 h-4 text-forest" />
                  <span>Authentic Classical Preparation Standards</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-charcoal font-medium">
                  <CheckCircle2 className="w-4 h-4 text-forest" />
                  <span>Transparent Cash on Delivery Across India</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 md:py-24 bg-sage/15 border-y border-gold/15">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center space-y-3 mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold font-sans">
              Our Journey
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal">
              Preserving Heritage, Cultivating Purity
            </h2>
          </div>

          <div className="space-y-8 relative before:absolute before:left-4 md:before:left-1/2 before:top-2 before:bottom-2 before:w-0.5 before:bg-gold/25 before:-translate-x-1/2">
            {milestones.map((m, idx) => {
              const isEven = idx % 2 === 0
              return (
                <div key={idx} className={`relative flex flex-col md:flex-row items-start gap-8 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  {/* Center Node */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-2 w-4 h-4 rounded-full bg-forest border-4 border-ivory shadow-xs" />

                  {/* Card Content */}
                  <div className="pl-12 md:pl-0 md:w-1/2">
                    <div className="p-6 rounded-2xl bg-ivory border border-gold/15 shadow-xs space-y-2">
                      <span className="text-xs font-bold text-gold uppercase tracking-wider">{m.year}</span>
                      <h3 className="font-serif text-xl text-charcoal font-medium">{m.title}</h3>
                      <p className="text-xs text-charcoal/70 leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl text-center space-y-6">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">
            Ready to Begin Your Ayurvedic Regimen?
          </h2>
          <p className="text-sm text-charcoal/70 max-w-xl mx-auto">
            Discover our curated stamina kits, single herbs, and digestive wellness formulations delivered with free shipping & COD.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
            <Link
              href="/collections/all"
              className="px-8 py-3.5 bg-forest text-ivory rounded-xl text-sm font-semibold hover:bg-forest/90 transition-colors shadow-md"
            >
              Explore All Formulations
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3.5 border border-forest text-forest rounded-xl text-sm font-semibold hover:bg-sage/30 transition-colors"
            >
              Consult with Hakim Sahab
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
