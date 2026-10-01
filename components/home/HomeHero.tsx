'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MessageCircle, Leaf } from 'lucide-react'
import { siteConfig } from '@/lib/siteConfig'
import { getWhatsAppUrl } from '@/lib/utils'
import { images } from '@/lib/images'

const fadeUp = (delay: number) => ({ animationDelay: `${delay}s`, opacity: 0, animationFillMode: 'forwards' as const })

export default function HomeHero() {
  const waUrl = getWhatsAppUrl(siteConfig.whatsappNumber, siteConfig.whatsappMessage)

  return (
    <section className="relative w-full overflow-hidden bg-charcoal" aria-label="Hero">
      <div className="relative flex min-h-[calc(100svh-7rem)] md:min-h-[min(90vh,56.25vw)] items-end md:items-center">
        {/* Art-directed images */}
        <div className="hidden md:block absolute inset-0 overflow-hidden">
          <Image
            src={images.hero.desktop}
            alt={images.hero.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover animate-ken-burns"
          />
        </div>
        <div className="block md:hidden absolute inset-0 overflow-hidden">
          <Image
            src={images.hero.mobile}
            alt={images.hero.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover animate-ken-burns"
          />
        </div>

        {/* Overlay gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/40 to-charcoal/10 md:bg-gradient-to-r md:from-charcoal/80 md:via-charcoal/40 md:to-transparent" />

        {/* Content */}
        <div className="relative w-full">
          <div className="container mx-auto px-4 pt-16 pb-14 md:py-24">
            <div className="max-w-xl">
              <p className="inline-flex items-center gap-2 font-devanagari text-gold text-base md:text-lg mb-4 animate-fade-up" style={fadeUp(0.15)}>
                <Leaf className="w-4 h-4" aria-hidden="true" />
                आयुर्वेद की ताकत
              </p>

              <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-semibold text-ivory leading-[1.05] mb-5 animate-fade-up" style={fadeUp(0.3)}>
                Premium Ayurvedic<br />
                <span className="italic text-shimmer-gold">Wellness,</span> Delivered
              </h1>

              <p className="text-ivory/80 text-sm md:text-lg mb-8 leading-relaxed max-w-md animate-fade-up" style={fadeUp(0.45)}>
                Classical herbs like Ashwagandha, Shilajit and Shatavari — free shipping across India, cash on delivery, and free consultation with Hakim Sahab.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 animate-fade-up" style={fadeUp(0.6)}>
                <Link
                  href="/collections/all"
                  className="group inline-flex items-center justify-center gap-2 bg-gold text-ivory px-7 py-4 rounded-xl font-medium text-sm shadow-lg shadow-gold/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-gold/30"
                >
                  Shop Now <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-ivory/10 backdrop-blur-md text-ivory border border-ivory/30 px-7 py-4 rounded-xl font-medium text-sm transition-all duration-300 hover:bg-ivory/20 hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-4 h-4" /> Talk to Hakim Sahab
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Floating trust badge (desktop) */}
        <div className="hidden lg:block absolute right-10 bottom-16 animate-fade-up" style={fadeUp(0.9)}>
          <div className="animate-float rounded-2xl border border-ivory/20 bg-charcoal/40 backdrop-blur-md px-5 py-4 text-ivory shadow-2xl">
            <p className="font-serif text-2xl leading-none text-gold">3,000+ yrs</p>
            <p className="mt-1 text-xs text-ivory/70 uppercase tracking-widest">of Ayurvedic wisdom</p>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-ivory/60" aria-hidden="true">
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <span className="relative h-9 w-5 rounded-full border border-ivory/40">
            <span className="absolute left-1/2 top-1.5 h-2 w-0.5 -translate-x-1/2 rounded-full bg-ivory/80 animate-scroll-cue" />
          </span>
        </div>
      </div>
    </section>
  )
}
