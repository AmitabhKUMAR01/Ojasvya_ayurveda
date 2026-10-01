'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { X, MessageCircle, Truck, Package } from 'lucide-react'
import { siteConfig } from '@/lib/siteConfig'
import { getWhatsAppUrl } from '@/lib/utils'

const announcements = [
  { icon: Truck, text: 'Free Shipping Across India on All Orders', href: '/policies/shipping-policy', external: false },
  { icon: Package, text: 'Cash on Delivery Available — Pay When You Receive', href: '/policies/shipping-policy', external: false },
  { icon: MessageCircle, text: 'Talk to Hakim Sahab — Free Consultation on WhatsApp', href: getWhatsAppUrl(siteConfig.whatsappNumber, siteConfig.whatsappMessage), external: true },
]

export default function AnnouncementBar() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % announcements.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  if (dismissed) return null

  const current = announcements[currentIndex]
  const Icon = current.icon

  return (
    <div style={{ backgroundColor: 'var(--color-forest)', color: 'var(--color-ivory)' }} className="relative text-xs sm:text-sm">
      <div className="container mx-auto px-4 py-2 flex items-center justify-center gap-2 text-center relative">
        <div className="flex items-center gap-2">
          <Icon className="w-3.5 h-3.5 shrink-0 text-gold" aria-hidden="true" />
          {current.external ? (
            <a href={current.href} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
              {current.text}
            </a>
          ) : (
            <Link href={current.href} className="hover:text-gold transition-colors">{current.text}</Link>
          )}
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:text-gold transition-colors rounded md:hidden"
          aria-label="Dismiss announcement"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
      <div className="flex justify-center gap-1 pb-1.5">
        {announcements.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-1 rounded-full transition-all ${i === currentIndex ? 'w-3 bg-gold' : 'w-1 bg-ivory/40'}`}
            aria-label={`View announcement ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
