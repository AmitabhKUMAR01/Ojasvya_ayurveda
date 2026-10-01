import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { collections } from '@/data/collections'
import Reveal from '@/components/ui/Reveal'

export default function ShopByCollection() {
  const [first, second, third, fourth, fifth] = collections

  return (
    <section className="py-16 md:py-24" aria-labelledby="collections-heading">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <Reveal className="flex items-end justify-between mb-8 md:mb-12">
          <div>
            <p className="font-sans text-xs uppercase tracking-widest text-gold mb-2">Our Range</p>
            <h2 id="collections-heading" className="font-serif text-3xl md:text-4xl text-charcoal">
              Shop by Collection
            </h2>
          </div>
          <Link href="/collections/all" className="group hidden md:flex items-center gap-1.5 text-sm text-forest font-medium hover:text-gold transition-colors">
            <span className="link-underline">All Products</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>

        {/* Editorial asymmetric grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {third && (
            <Reveal variant="zoom" className="col-span-2 md:col-span-1 md:row-span-2">
              <CollectionTile col={third} className="h-full" tall />
            </Reveal>
          )}
          {[first, second, fourth, fifth].map((col, i) =>
            col ? (
              <Reveal key={col.slug} variant="zoom" delay={(i + 1) * 100}>
                <CollectionTile col={col} />
              </Reveal>
            ) : null
          )}
        </div>

        {/* Mobile all link */}
        <div className="mt-6 text-center md:hidden">
          <Link href="/collections/all" className="inline-flex items-center gap-1.5 text-sm text-forest font-medium hover:text-gold transition-colors">
            View all products <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function CollectionTile({
  col,
  className = '',
  tall = false,
}: {
  col: (typeof collections)[0]
  className?: string
  tall?: boolean
}) {
  return (
    <Link
      href={`/collections/${col.slug}`}
      className={`group relative block rounded-2xl overflow-hidden bg-sage/20 shadow-sm transition-shadow duration-500 hover:shadow-2xl ${className}`}
      style={{ aspectRatio: tall ? undefined : '4/5', minHeight: tall ? '300px' : undefined }}
      aria-label={`Shop ${col.title}`}
    >
      <Image
        src={col.image.src}
        alt={col.image.alt}
        fill
        sizes="(max-width: 640px) 50vw, 33vw"
        className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
      <div className="absolute inset-0 ring-1 ring-inset ring-ivory/0 rounded-2xl transition-all duration-500 group-hover:ring-ivory/30" />
      {/* Label */}
      <div className="absolute bottom-0 inset-x-0 p-4 md:p-5 transition-transform duration-500 group-hover:-translate-y-1">
        <h3 className="font-serif text-ivory text-lg md:text-2xl font-medium leading-tight">
          {col.title}
        </h3>
        <span className="inline-flex items-center gap-1 text-xs text-gold mt-1.5 opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
          Shop now <ArrowRight className="w-3 h-3" />
        </span>
      </div>
    </Link>
  )
}
