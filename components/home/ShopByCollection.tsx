import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { collections } from '@/data/collections'
import Reveal from '@/components/ui/Reveal'

export default function ShopByCollection() {
  const [featured, ...rest] = collections

  return (
    <section className="py-16 md:py-24" aria-labelledby="collections-heading">
      <div className="container mx-auto px-4">
        <Reveal className="flex items-end justify-between mb-8 md:mb-12">
          <div>
            <p className="font-sans text-xs uppercase tracking-widest text-gold mb-2">Our Range</p>
            <h2 id="collections-heading" className="font-serif text-3xl md:text-4xl text-charcoal">
              Shop by Collection
            </h2>
          </div>
          <Link
            href="/collections/combos"
            className="group hidden md:flex items-center gap-1.5 text-sm text-forest font-medium hover:text-gold transition-colors"
          >
            <span className="link-underline">Shop Combo Kits</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>

        {/* Combo Kits — wide banner so the full collage stays visible */}
        {featured && (
          <Reveal variant="zoom" className="mb-3 md:mb-4">
            <Link
              href={`/collections/${featured.slug}`}
              className="group grid md:grid-cols-[1.4fr_1fr] overflow-hidden rounded-2xl border border-forest/10 bg-ivory shadow-sm transition-shadow duration-500 hover:shadow-xl"
              aria-label={`Shop ${featured.title}`}
            >
              <div className="relative aspect-[16/10] md:aspect-auto md:min-h-[280px] bg-[#eef5e8]">
                <Image
                  src={featured.image.src}
                  alt={featured.image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-contain p-3 md:p-4 transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
              <div className="flex flex-col justify-center gap-3 p-5 md:p-8 bg-forest text-ivory">
                <p className="text-[11px] uppercase tracking-[0.2em] text-gold">Featured</p>
                <h3 className="font-serif text-2xl md:text-3xl font-medium leading-tight">
                  {featured.title}
                </h3>
                <p className="text-sm text-ivory/75 leading-relaxed line-clamp-3">
                  {featured.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-gold mt-1">
                  Shop now
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </Reveal>
        )}

        {/* Other collections — equal cards, full image visible */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {rest.map((col, i) => (
            <Reveal key={col.slug} variant="zoom" delay={(i + 1) * 80}>
              <Link
                href={`/collections/${col.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-forest/10 bg-ivory shadow-sm transition-shadow duration-500 hover:shadow-xl"
                aria-label={`Shop ${col.title}`}
              >
                <div className="relative aspect-square bg-ivory-dark/80">
                  <Image
                    src={col.image.src}
                    alt={col.image.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, 25vw"
                    className="object-contain p-3 transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-1 p-3.5 md:p-4 border-t border-forest/8">
                  <h3 className="font-serif text-base md:text-lg text-charcoal leading-snug">
                    {col.title}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-xs text-forest font-medium mt-auto pt-1 opacity-80 group-hover:opacity-100 transition-opacity">
                    Shop now <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 text-center md:hidden">
          <Link
            href="/collections/combos"
            className="inline-flex items-center gap-1.5 text-sm text-forest font-medium hover:text-gold transition-colors"
          >
            Shop Combo Kits <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
