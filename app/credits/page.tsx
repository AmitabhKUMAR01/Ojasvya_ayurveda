import type { Metadata } from 'next'
import Image from 'next/image'
import { photos, type PhotoKey } from '@/lib/images'
import { imageCredits } from '@/lib/imageCredits'

export const metadata: Metadata = {
  title: 'Photo Credits',
  description: 'Attribution for the photographs used on this website.',
  robots: { index: false, follow: true },
}

export default function CreditsPage() {
  const keys = Object.keys(photos) as PhotoKey[]

  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <h1 className="font-serif text-3xl md:text-4xl text-charcoal mb-3">Photo Credits</h1>
      <p className="text-sm text-charcoal/60 max-w-2xl mb-10">
        Photographs on this site are sourced from Wikimedia Commons under Creative Commons licenses. Images may be resized or cropped.
      </p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {keys.map((key) => {
          const photo = photos[key]
          const credit = imageCredits[key]
          return (
            <li key={key} className="flex gap-4 items-start">
              <div className="relative w-20 h-20 shrink-0 overflow-hidden rounded-lg bg-sage/20">
                <Image src={photo.src} alt={photo.alt} fill sizes="80px" className="object-cover" />
              </div>
              <div className="text-xs leading-relaxed text-charcoal/70">
                <p className="text-charcoal font-medium mb-0.5">{photo.alt}</p>
                <p>
                  By {credit.author} ·{' '}
                  <a href={credit.licenseUrl} target="_blank" rel="noopener noreferrer license" className="underline hover:text-forest">
                    {credit.license}
                  </a>{' '}
                  ·{' '}
                  <a href={credit.source} target="_blank" rel="noopener noreferrer" className="underline hover:text-forest">
                    Source
                  </a>
                </p>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
