'use client'

import { useState } from 'react'
import { MapPin, CheckCircle2, Clock, AlertCircle } from 'lucide-react'

export default function PincodeChecker() {
  const [pincode, setPincode] = useState('')
  const [status, setStatus] = useState<'idle' | 'checking' | 'available' | 'invalid'>('idle')

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault()
    const cleaned = pincode.trim()
    if (!/^\d{6}$/.test(cleaned)) {
      setStatus('invalid')
      return
    }

    setStatus('checking')
    setTimeout(() => {
      setStatus('available')
    }, 400)
  }

  return (
    <div className="p-4 rounded-xl bg-sage/20 border border-gold/15 space-y-3">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold">
        <MapPin className="w-3.5 h-3.5 text-forest" />
        <span>Check Delivery & COD Availability</span>
      </div>

      <form onSubmit={handleCheck} className="flex gap-2">
        <input
          type="text"
          maxLength={6}
          placeholder="Enter 6-digit Indian Pincode"
          value={pincode}
          onChange={(e) => {
            setPincode(e.target.value.replace(/\D/g, ''))
            if (status !== 'idle') setStatus('idle')
          }}
          className="flex-1 px-3 py-2 text-sm bg-ivory border border-gold/25 rounded-lg outline-none focus:border-forest text-charcoal"
        />
        <button
          type="submit"
          disabled={status === 'checking'}
          className="px-4 py-2 text-xs font-semibold bg-forest text-ivory rounded-lg hover:bg-forest/90 transition-colors shrink-0"
        >
          {status === 'checking' ? 'Checking...' : 'Check'}
        </button>
      </form>

      {status === 'available' && (
        <div className="space-y-1 text-xs animate-fade-up">
          <div className="flex items-center gap-1.5 text-forest font-medium">
            <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
            <span>Delivery available at <strong>{pincode}</strong>!</span>
          </div>
          <div className="flex items-center gap-1.5 text-charcoal/70">
            <Clock className="w-3.5 h-3.5 shrink-0 text-gold" />
            <span>Estimated delivery in 4–7 business days · <strong>Cash on Delivery Eligible</strong></span>
          </div>
        </div>
      )}

      {status === 'invalid' && (
        <div className="flex items-center gap-1.5 text-xs text-terracotta">
          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
          <span>Please enter a valid 6-digit postal pincode.</span>
        </div>
      )}
    </div>
  )
}
