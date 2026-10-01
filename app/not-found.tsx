import Link from 'next/link'
import { ArrowLeft, Leaf } from 'lucide-react'

export const metadata = { title: '404 — Page Not Found' }

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-20 text-center">
      <Leaf className="w-16 h-16 text-forest/20 mx-auto mb-4" />
      <p className="font-serif text-gold text-6xl font-semibold mb-2">404</p>
      <h1 className="font-serif text-3xl text-charcoal mb-3">Page Not Found</h1>
      <p className="text-charcoal/60 max-w-sm mb-8">
        The page you are looking for seems to have taken a different path. Let us guide you back.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Link href="/" className="inline-flex items-center gap-2 bg-forest text-ivory px-6 py-3 rounded-lg font-medium hover:bg-forest/90 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <Link href="/collections/all" className="inline-flex items-center gap-2 border border-forest/30 text-forest px-6 py-3 rounded-lg font-medium hover:bg-sage/50 transition-colors">
          Browse Products
        </Link>
      </div>
    </div>
  )
}
