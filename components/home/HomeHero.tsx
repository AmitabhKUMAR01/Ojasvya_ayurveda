'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MessageCircle, Leaf, ShieldCheck, Truck } from 'lucide-react'
import { siteConfig } from '@/lib/siteConfig'
import { getWhatsAppUrl } from '@/lib/utils'
import { images } from '@/lib/images'

const SLIDE_MS = 5500

export default function HomeHero() {
  const slides = images.hero.slides
  const [active, setActive] = useState(0)
  const [progress, setProgress] = useState(0)
  const waUrl = getWhatsAppUrl(siteConfig.whatsappNumber, siteConfig.whatsappMessage)

  useEffect(() => {
    if (slides.length < 2) return

    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return

    setProgress(0)
    const started = Date.now()
    const tick = window.setInterval(() => {
      const elapsed = Date.now() - started
      setProgress(Math.min(100, (elapsed / SLIDE_MS) * 100))
    }, 50)

    const next = window.setTimeout(() => {
      setActive((i) => (i + 1) % slides.length)
    }, SLIDE_MS)

    return () => {
      window.clearInterval(tick)
      window.clearTimeout(next)
    }
  }, [active, slides.length])

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-sage/60 via-ivory to-ivory"
      aria-label="Hero"
    >
      {/* Soft atmosphere */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 80% 50% at 50% -10%, color-mix(in oklch, var(--color-gold) 22%, transparent), transparent 70%)',
        }}
        aria-hidden
      />

      <div className="relative container mx-auto px-4 pt-8 pb-10 md:pt-12 md:pb-14">
        {/* Intro — logo-forward brand signal */}
        <div className="mx-auto max-w-3xl text-center mb-7 md:mb-10">
          <div className="flex justify-center mb-4 md:mb-5">
            <Image
              src={siteConfig.logo}
              alt="Ojasvya Ayurveda"
              width={220}
              height={200}
              priority
              className="h-24 w-auto sm:h-28 md:h-32 object-contain drop-shadow-md"
            />
          </div>
          <p className="inline-flex items-center gap-2 font-devanagari text-gold text-sm md:text-base mb-2">
            <Leaf className="w-4 h-4" aria-hidden />
            आयुर्वेद की ताकत
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-semibold text-forest leading-[1.1]">
            Ojasvya Ayurveda
          </h1>
          <p className="mt-3 text-sm md:text-base text-charcoal/65 max-w-xl mx-auto leading-relaxed">
            Premium herbal wellness — liver care, blood-sugar support, and daily nutrition.
            Free shipping across India, cash on delivery.
          </p>
        </div>

        {/* Campaign banner card — treats the creatives as featured ads, not cropped backgrounds */}
        <div className="mx-auto max-w-6xl">
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-forest/10 bg-[#e8f3df] shadow-[0_24px_60px_-28px_rgba(40,60,30,0.45)]">
            <div className="relative w-full">
              <Image
                src={slides[0].src}
                alt=""
                width={1672}
                height={941}
                priority
                sizes="(max-width: 1152px) 100vw, 1152px"
                className="w-full h-auto opacity-0 pointer-events-none select-none"
                aria-hidden
              />

              {slides.map((slide, index) => (
                <div
                  key={slide.src}
                  className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
                    index === active ? 'opacity-100' : 'opacity-0'
                  }`}
                  aria-hidden={index !== active}
                >
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 1152px) 100vw, 1152px"
                    className="object-contain object-center"
                  />
                </div>
              ))}
            </div>

            {/* Progress bar */}
            {slides.length > 1 && (
              <div className="absolute bottom-0 inset-x-0 h-1 bg-charcoal/10" aria-hidden>
                <div
                  className="h-full bg-gold transition-[width] duration-100 ease-linear"
                  style={{ width: `${progress}%` }}
                />
              </div>
            )}
          </div>

          {/* Controls + CTAs */}
          <div className="mt-5 md:mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center justify-center md:justify-start gap-2">
              {slides.map((slide, index) => (
                <button
                  key={slide.src}
                  type="button"
                  onClick={() => setActive(index)}
                  className={`h-2 rounded-full transition-all duration-400 ${
                    index === active
                      ? 'w-8 bg-forest'
                      : 'w-2 bg-forest/25 hover:bg-forest/45'
                  }`}
                  aria-label={`Show banner ${index + 1}`}
                  aria-current={index === active}
                />
              ))}
              <span className="ml-2 text-xs text-charcoal/45 tabular-nums">
                {active + 1} / {slides.length}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5">
              <Link
                href="/collections/combos"
                className="group inline-flex items-center justify-center gap-2 bg-forest text-ivory px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 hover:bg-forest/90 hover:-translate-y-0.5"
              >
                Shop Combo Kits
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-forest/20 bg-ivory text-forest px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 hover:bg-sage/50"
              >
                <MessageCircle className="w-4 h-4" />
                Chat with support
              </a>
            </div>
          </div>

          {/* Trust row */}
          <ul className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 text-center sm:text-left">
            {[
              { icon: Leaf, label: '100% natural herbal formulations' },
              { icon: Truck, label: 'Free shipping · Cash on delivery' },
              { icon: ShieldCheck, label: 'Guided support on WhatsApp' },
            ].map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center justify-center sm:justify-start gap-2.5 rounded-xl bg-ivory/80 border border-forest/8 px-4 py-3 text-sm text-charcoal/70"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sage/70 text-forest">
                  <Icon className="w-4 h-4" aria-hidden />
                </span>
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
