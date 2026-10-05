'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { trackOrderSchema, type TrackOrderFormData } from '@/lib/schemas'
import type { Order } from '@/types/order'
import { Package, Search, CheckCircle2, Clock, Truck, ShieldCheck, AlertCircle, Loader2 } from 'lucide-react'
import { formatPrice } from '@/lib/utils'

export default function TrackOrderPage() {
  const [order, setOrder] = useState<Order | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isSearching, setIsSearching] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TrackOrderFormData>({
    resolver: zodResolver(trackOrderSchema),
  })

  const onSubmit = async (data: TrackOrderFormData) => {
    setIsSearching(true)
    setError(null)
    setOrder(null)

    try {
      const res = await fetch('/api/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const result = await res.json()

      if (!res.ok) {
        throw new Error(result.error || 'Could not find order. Please verify your Order ID and mobile number.')
      }

      setOrder(result)
    } catch (err: any) {
      setError(err.message || 'Error tracking order.')
    } finally {
      setIsSearching(false)
    }
  }

  return (
    <div className="min-h-screen bg-ivory py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center space-y-3 mb-10">
          <p className="font-sans text-xs uppercase tracking-widest text-gold font-semibold">Live Order Updates</p>
          <h1 className="font-serif text-3xl md:text-5xl text-charcoal">Track Your Order</h1>
          <p className="text-sm text-charcoal/70 max-w-md mx-auto">
            Enter your Order ID (from your confirmation message) and 10-digit registered mobile number.
          </p>
        </div>

        {/* Tracking Form */}
        <div className="p-6 md:p-8 rounded-2xl bg-ivory border border-gold/15 shadow-sm space-y-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="orderId" className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-1">
                  Order ID <span className="text-terracotta">*</span>
                </label>
                <input
                  id="orderId"
                  type="text"
                  placeholder="e.g. OA-123456"
                  {...register('orderId')}
                  className={`w-full px-3.5 py-2.5 text-sm bg-ivory border rounded-lg outline-none focus:border-forest text-charcoal ${
                    errors.orderId ? 'border-terracotta' : 'border-gold/25'
                  }`}
                />
                {errors.orderId && (
                  <p className="text-xs text-terracotta mt-1">{errors.orderId.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="mobile" className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-1">
                  Mobile Number <span className="text-terracotta">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-medium text-charcoal/50">+91</span>
                  <input
                    id="mobile"
                    type="tel"
                    maxLength={10}
                    placeholder="9876543210"
                    {...register('mobile')}
                    className={`w-full pl-11 pr-3 py-2.5 text-sm bg-ivory border rounded-lg outline-none focus:border-forest text-charcoal ${
                      errors.mobile ? 'border-terracotta' : 'border-gold/25'
                    }`}
                  />
                </div>
                {errors.mobile && (
                  <p className="text-xs text-terracotta mt-1">{errors.mobile.message}</p>
                )}
              </div>
            </div>

            <button
              type="submit"
              disabled={isSearching}
              className="w-full py-3.5 px-6 bg-forest text-ivory rounded-xl text-sm font-semibold hover:bg-forest/90 transition-all flex items-center justify-center gap-2 shadow-xs disabled:opacity-60"
            >
              {isSearching ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Searching Order Status...</span>
                </>
              ) : (
                <>
                  <Search className="w-4 h-4" />
                  <span>Track Status</span>
                </>
              )}
            </button>
          </form>

          {error && (
            <div className="p-4 rounded-xl bg-terracotta/10 border border-terracotta/20 text-xs text-terracotta flex items-start gap-2 animate-fade-up">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}
        </div>

        {/* Order Details & Timeline */}
        {order && (
          <div className="mt-8 p-6 md:p-8 rounded-2xl bg-ivory border border-gold/15 shadow-sm space-y-6 animate-fade-up">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-gold/15 gap-2">
              <div>
                <span className="text-xs text-charcoal/60">Order #{order.orderId}</span>
                <h2 className="font-serif text-2xl text-charcoal font-medium">Status: <span className="capitalize text-forest">{order.status.replace('-', ' ')}</span></h2>
              </div>
              <div className="text-xs sm:text-right text-charcoal/70">
                <p>Estimated Delivery:</p>
                <p className="font-semibold text-charcoal text-sm">{order.estimatedDelivery}</p>
              </div>
            </div>

            {/* Timeline progression */}
            <div className="space-y-4 pt-2">
              <h3 className="font-serif text-lg text-charcoal">Delivery Progress</h3>
              <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-gold/20">
                {order.timeline.map((item, idx) => (
                  <div key={idx} className="relative flex items-start gap-3">
                    <div
                      className={`absolute -left-6 top-0.5 w-4 h-4 rounded-full border-2 bg-ivory flex items-center justify-center ${
                        item.completed
                          ? 'border-forest bg-forest text-ivory'
                          : 'border-gold/30'
                      }`}
                    >
                      {item.completed && <span className="w-1.5 h-1.5 rounded-full bg-ivory" />}
                    </div>
                    <div>
                      <p className={`text-sm font-medium ${item.completed ? 'text-charcoal' : 'text-charcoal/40'}`}>
                        {item.label}
                      </p>
                      {item.timestamp && (
                        <p className="text-xs text-charcoal/50">{item.timestamp}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Address & Payment Info */}
            <div className="p-4 rounded-xl bg-sage/20 border border-gold/10 text-xs text-charcoal/80 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <strong className="block text-charcoal mb-1">Delivery Destination:</strong>
                <p>{order.fullName}</p>
                <p>{order.addressLine1}</p>
                <p>{order.city}, {order.state} - {order.pincode}</p>
              </div>
              <div>
                <strong className="block text-charcoal mb-1">Payment Method:</strong>
                <p className="font-semibold text-gold">Cash on Delivery</p>
                <p className="mt-1">Total Payable: <strong>{formatPrice(order.total)}</strong></p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
