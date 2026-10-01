import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import ProductCard from '@/components/product/ProductCard'
import type { Product } from '@/types/product'
import Reveal from '@/components/ui/Reveal'

interface FeaturedProductsProps {
  products: Product[]
}

export default function FeaturedProducts({ products }: FeaturedProductsProps) {
  return (
    <section className="py-16 md:py-24" aria-labelledby="featured-heading">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <Reveal className="flex items-end justify-between mb-8 md:mb-12">
          <div>
            <p className="font-sans text-xs uppercase tracking-widest text-gold mb-2">Best Sellers</p>
            <h2 id="featured-heading" className="font-serif text-3xl md:text-4xl text-charcoal">
              Our Most Trusted Products
            </h2>
          </div>
          <Link href="/collections/all" className="hidden md:flex items-center gap-1.5 text-sm text-forest font-medium hover:text-gold transition-colors shrink-0 ml-4">
            View all <ArrowRight className="w-4 h-4" />
          </Link>
        </Reveal>

        {/* Product grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product, i) => (
            <Reveal key={product.id} delay={(i % 4) * 90}>
              <ProductCard product={product} priority={i < 4} />
            </Reveal>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 text-center md:hidden">
          <Link
            href="/collections/all"
            className="inline-flex items-center gap-2 border border-forest/30 text-forest px-6 py-3 rounded-lg font-medium text-sm hover:bg-sage/50 transition-colors"
          >
            View all products <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
