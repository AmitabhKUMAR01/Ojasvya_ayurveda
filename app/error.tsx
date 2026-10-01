'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => { console.error(error) }, [error])
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-20 text-center">
      <h1 className="font-serif text-3xl text-charcoal mb-3">Something went wrong</h1>
      <p className="text-charcoal/60 max-w-sm mb-6">We encountered an unexpected error. Please try again or contact us if the problem persists.</p>
      <div className="flex flex-col sm:flex-row gap-3">
        <button onClick={reset} className="bg-forest text-ivory px-6 py-3 rounded-lg font-medium hover:bg-forest/90 transition-colors">
          Try Again
        </button>
        <Link href="/" className="border border-forest/30 text-forest px-6 py-3 rounded-lg font-medium hover:bg-sage/50 transition-colors">
          Back to Home
        </Link>
      </div>
    </div>
  )
}
