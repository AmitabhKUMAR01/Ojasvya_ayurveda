'use client'

import Link from 'next/link'
import { Package, MapPin, User, LogOut, ArrowRight, Clock, ShieldCheck } from 'lucide-react'
import { siteConfig } from '@/lib/siteConfig'

const mockRecentOrders = [
  {
    orderId: 'HHJ-M9K2-781A',
    date: '28 Sep 2026',
    status: 'Delivered',
    total: 3499,
    items: 'Alpha Strength Combo',
    paymentMode: 'Cash on Delivery',
  },
  {
    orderId: 'HHJ-L81A-492B',
    date: '12 Aug 2026',
    status: 'Delivered',
    total: 899,
    items: 'BIGG BULL Capsules (60 Caps)',
    paymentMode: 'Cash on Delivery',
  },
]

export default function AccountPage() {
  return (
    <div className="min-h-screen bg-ivory py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-5xl space-y-8">
        {/* Profile Header */}
        <div className="p-6 md:p-8 rounded-3xl bg-ivory border border-gold/15 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-forest text-ivory flex items-center justify-center font-serif text-xl font-bold">
              OA
            </div>
            <div>
              <h1 className="font-serif text-2xl text-charcoal">My Account</h1>
              <p className="text-xs text-charcoal/60">Registered Mobile: +91 9876543210</p>
            </div>
          </div>
          <Link
            href="/account/login"
            className="inline-flex items-center gap-2 text-xs font-semibold text-terracotta hover:underline self-start sm:self-center"
          >
            <LogOut className="w-3.5 h-3.5" /> Log Out
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Navigation Links - 4 cols */}
          <div className="md:col-span-4 space-y-2">
            <Link
              href="/account"
              className="flex items-center justify-between p-4 rounded-xl bg-forest text-ivory font-semibold text-xs shadow-xs"
            >
              <span className="flex items-center gap-2.5">
                <Package className="w-4 h-4" /> My Orders ({mockRecentOrders.length})
              </span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <Link
              href="/account/addresses"
              className="flex items-center justify-between p-4 rounded-xl bg-ivory border border-gold/15 text-charcoal hover:bg-sage/30 transition-colors font-medium text-xs"
            >
              <span className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-forest" /> Saved Delivery Addresses
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-charcoal/40" />
            </Link>

            <Link
              href="/track-order"
              className="flex items-center justify-between p-4 rounded-xl bg-ivory border border-gold/15 text-charcoal hover:bg-sage/30 transition-colors font-medium text-xs"
            >
              <span className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-gold" /> Live Order Tracking
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-charcoal/40" />
            </Link>
          </div>

          {/* Main Orders History - 8 cols */}
          <div className="md:col-span-8 p-6 md:p-8 rounded-3xl bg-ivory border border-gold/15 shadow-xs space-y-6">
            <h2 className="font-serif text-2xl text-charcoal font-medium pb-2 border-b border-gold/15">
              Order History
            </h2>

            <div className="space-y-4">
              {mockRecentOrders.map((ord) => (
                <div
                  key={ord.orderId}
                  className="p-5 rounded-2xl bg-sage/20 border border-gold/10 space-y-3"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-2 border-b border-gold/10">
                    <span className="font-mono text-xs font-bold text-forest">#{ord.orderId}</span>
                    <span className="text-xs text-charcoal/50">Placed on {ord.date}</span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <p className="font-serif text-base font-medium text-charcoal">{ord.items}</p>
                      <p className="text-xs text-charcoal/60 mt-0.5">{ord.paymentMode}</p>
                    </div>
                    <div className="text-left sm:text-right">
                      <span className="font-serif text-base font-bold text-forest">₹{ord.total}</span>
                      <span className="block text-[11px] font-semibold text-forest">✓ {ord.status}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-gold/10 flex items-center justify-between">
              <span className="text-xs text-charcoal/60">Need help with an existing order?</span>
              <Link
                href="/contact"
                className="text-xs font-semibold text-forest hover:underline"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
