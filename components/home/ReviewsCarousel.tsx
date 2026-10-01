'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star, BadgeCheck } from 'lucide-react'
import type { Review } from '@/types/review'
import Reveal from '@/components/ui/Reveal'

interface ReviewsCarouselProps {
  reviews: Review[]
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          className={`w-3.5 h-3.5 ${s <= rating ? 'text-gold fill-gold' : 'text-charcoal/20'}`}
        />
      ))}
    </div>
  )
}

function InitialsAvatar({ initials }: { initials: string }) {
  return (
    <div
      className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-sans font-semibold text-sm text-ivory"
      style={{ backgroundColor: 'var(--color-forest)' }}
      aria-hidden="true"
    >
      {initials}
    </div>
  )
}

export default function ReviewsCarousel({ reviews }: ReviewsCarouselProps) {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((i) => (i === 0 ? reviews.length - 1 : i - 1))
  const next = () => setCurrent((i) => (i === reviews.length - 1 ? 0 : i + 1))

  if (reviews.length === 0) return null

  const review = reviews[current]

  return (
    <section className="py-16 md:py-24 bg-sage/30" aria-labelledby="reviews-heading">
      <Reveal className="container mx-auto px-4">
        <div className="text-center mb-10">
          <p className="font-sans text-xs uppercase tracking-widest text-gold mb-2">Customer Reviews</p>
          <h2 id="reviews-heading" className="font-serif text-3xl md:text-4xl text-charcoal">
            What Our Customers Say
          </h2>
        </div>

        {/* Carousel */}
        <div className="max-w-2xl mx-auto">
          {/* Card */}
          <div className="bg-ivory rounded-2xl p-6 md:p-8 shadow-sm border border-gold/10 min-h-[220px] flex flex-col">
            {/* Stars + badge */}
            <div className="flex items-center gap-3 mb-4">
              <StarRating rating={review.rating} />
              {review.verifiedPurchase && (
                <span className="flex items-center gap-1 text-xs text-forest font-medium">
                  <BadgeCheck className="w-3.5 h-3.5" /> Verified Purchase
                </span>
              )}
            </div>

            {/* Title + body */}
            <h3 className="font-serif text-lg text-charcoal mb-2">{review.title}</h3>
            <p className="text-sm text-charcoal/65 leading-relaxed flex-1">{review.body}</p>

            {/* Reviewer */}
            <div className="flex items-center gap-3 mt-6 pt-4 border-t border-gold/10">
              <InitialsAvatar initials={review.reviewerInitials} />
              <div>
                <p className="font-sans text-sm font-medium text-charcoal">{review.reviewerName}</p>
                <p className="text-xs text-charcoal/50">{review.productTitle} · {review.createdAt}</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-6">
            <button
              onClick={prev}
              className="p-2.5 rounded-full border border-gold/20 text-charcoal/60 hover:text-forest hover:border-forest/30 transition-colors"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all ${i === current ? 'w-6 bg-forest' : 'w-1.5 bg-charcoal/20'}`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-2.5 rounded-full border border-gold/20 text-charcoal/60 hover:text-forest hover:border-forest/30 transition-colors"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
