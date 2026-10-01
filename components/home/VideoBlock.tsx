'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { Play } from 'lucide-react'
import { images } from '@/lib/images'
import Reveal from '@/components/ui/Reveal'

// Set NEXT_PUBLIC_BRAND_VIDEO_URL to an .mp4 to enable playback; without it the block renders as a still story card.
const VIDEO_URL = process.env.NEXT_PUBLIC_BRAND_VIDEO_URL

export default function VideoBlock() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  function handlePlay() {
    if (!videoRef.current) return
    videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {})
  }

  return (
    <section className="py-12 md:py-16 bg-charcoal" aria-label="Brand story">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <p className="font-sans text-xs uppercase tracking-widest text-gold mb-4 text-center">
              Our Story
            </p>
            <h2 className="font-serif text-2xl md:text-3xl text-ivory text-center mb-8">
              Rooted in Tradition, Made for Today
            </h2>
          </Reveal>

          <Reveal delay={150}>
            <div className="group relative rounded-2xl overflow-hidden bg-charcoal shadow-2xl" style={{ aspectRatio: '16/9' }}>
              {!isPlaying && (
                <div className="absolute inset-0 z-10">
                  <Image
                    src={images.brand.story.src}
                    alt={images.brand.story.alt}
                    fill
                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 896px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-charcoal/10" />

                  {VIDEO_URL ? (
                    <button
                      onClick={handlePlay}
                      className="absolute inset-0 flex items-center justify-center"
                      aria-label="Play brand story video"
                    >
                      <span className="relative flex items-center justify-center">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-gold/60 animate-ping-slow" />
                        <span className="relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-gold flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-6 h-6 md:w-8 md:h-8 text-ivory fill-ivory ml-1" />
                        </span>
                      </span>
                    </button>
                  ) : (
                    <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
                      <p className="font-devanagari text-gold text-lg md:text-xl mb-2">कुण्डी सोटा</p>
                      <p className="font-serif text-ivory text-xl md:text-3xl max-w-xl leading-snug">
                        Every formulation begins the traditional way — hand-ground herbs, classical recipes, and patience.
                      </p>
                    </div>
                  )}
                </div>
              )}

              {VIDEO_URL && (
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  controls={isPlaying}
                  preload="none"
                  playsInline
                  onEnded={() => setIsPlaying(false)}
                >
                  <source src={VIDEO_URL} type="video/mp4" />
                  Your browser does not support video playback.
                </video>
              )}
            </div>
          </Reveal>

          {VIDEO_URL && (
            <p className="text-center text-xs text-ivory/30 mt-4">
              Tap to play · No audio plays automatically · Results vary by individual
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
