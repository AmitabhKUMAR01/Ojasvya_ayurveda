'use client'

import Link from 'next/link'
import { MapPin, Plus, ArrowLeft, CheckCircle2 } from 'lucide-react'

const mockAddresses = [
  {
    id: 'addr_1',
    name: 'Ramesh Chandra (Home)',
    addressLine1: 'Flat 402, Shanti Kunj, Station Road',
    city: 'Lucknow',
    state: 'Uttar Pradesh',
    pincode: '226001',
    mobile: '+91 9876543210',
    isDefault: true,
  },
  {
    id: 'addr_2',
    name: 'Ramesh Chandra (Work)',
    addressLine1: 'Office 12B, Cyber Tower, Gomti Nagar',
    city: 'Lucknow',
    state: 'Uttar Pradesh',
    pincode: '226010',
    mobile: '+91 9876543210',
    isDefault: false,
  },
]

export default function AddressesPage() {
  return (
    <div className="min-h-screen bg-ivory py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-4xl space-y-8">
        <div>
          <Link
            href="/account"
            className="inline-flex items-center gap-2 text-xs font-semibold text-forest hover:text-gold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Account
          </Link>
        </div>

        <div className="flex items-center justify-between pb-4 border-b border-gold/15">
          <div>
            <h1 className="font-serif text-3xl text-charcoal">Saved Delivery Addresses</h1>
            <p className="text-xs text-charcoal/60 mt-1">Manage addresses used for Cash on Delivery checkout.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {mockAddresses.map((addr) => (
            <div
              key={addr.id}
              className={`p-6 rounded-2xl bg-ivory border transition-all space-y-3 relative ${
                addr.isDefault ? 'border-forest ring-1 ring-forest/20' : 'border-gold/20'
              }`}
            >
              {addr.isDefault && (
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-forest bg-forest/10 px-2.5 py-0.5 rounded-full">
                  <CheckCircle2 className="w-3 h-3" /> Default COD Address
                </span>
              )}

              <h2 className="font-serif text-lg text-charcoal font-medium">{addr.name}</h2>
              <div className="text-xs text-charcoal/70 leading-relaxed space-y-0.5">
                <p>{addr.addressLine1}</p>
                <p>{addr.city}, {addr.state} - {addr.pincode}</p>
                <p className="pt-1 text-charcoal font-medium">Phone: {addr.mobile}</p>
              </div>

              <div className="pt-3 border-t border-gold/10 flex gap-3 text-xs">
                <button className="text-forest font-semibold hover:underline">Edit</button>
                <button className="text-charcoal/40 hover:text-terracotta">Remove</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
