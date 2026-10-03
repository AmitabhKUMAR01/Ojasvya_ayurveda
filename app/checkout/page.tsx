'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { checkoutSchema, type CheckoutFormData } from '@/lib/schemas'
import { useCartStore } from '@/store/cart'
import { formatPrice } from '@/lib/utils'
import { ShieldCheck, Truck, Lock, Loader2, AlertCircle, ArrowLeft } from 'lucide-react'

const indianStates = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
  'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
  'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
  'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
  'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
  'Andaman and Nicobar Islands', 'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu',
  'Delhi (NCT)', 'Jammu and Kashmir', 'Ladakh', 'Lakshadweep', 'Puducherry'
]

export default function CheckoutPage() {
  const router = useRouter()
  const { items, getSubtotal, clearCart } = useCartStore()
  const subtotal = getSubtotal()
  const [serverError, setServerError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      agreeToTerms: true,
      state: 'Uttar Pradesh',
    },
  })

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center container mx-auto px-4 py-16 text-center space-y-4">
        <h1 className="font-serif text-3xl text-charcoal">Your Cart is Empty</h1>
        <p className="text-sm text-charcoal/60 max-w-sm">
          Please add items to your cart before proceeding to checkout.
        </p>
        <Link
          href="/collections/all"
          className="inline-flex items-center gap-2 px-6 py-3 bg-forest text-ivory rounded-xl text-sm font-semibold hover:bg-forest/90 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Browse Ayurvedic Products
        </Link>
      </div>
    )
  }

  const onSubmit = async (data: CheckoutFormData) => {
    if (isSubmitting) return
    setIsSubmitting(true)
    setServerError(null)

    try {
      const orderPayload = {
        ...data,
        items: items.map((item) => ({
          productId: item.productId,
          slug: item.slug,
          title: item.title,
          price: item.price,
          quantity: item.quantity,
          image: item.image,
        })),
        subtotal,
      }

      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderPayload),
      })

      const responseData = await res.json()

      if (!res.ok) {
        throw new Error(responseData.error || 'Failed to place order.')
      }

      // Order successfully created: clear cart and redirect
      clearCart()
      router.push(`/order-success/${responseData.orderId}`)
    } catch (err: any) {
      setServerError(err.message || 'Something went wrong while placing your order. Please try again.')
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-ivory">
      {/* Checkout Header */}
      <div className="border-b border-gold/15 bg-sage/20 py-6">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="font-serif text-2xl font-bold text-forest">
            Ojasvya Ayurveda
          </Link>
          <div className="flex items-center gap-2 text-xs font-semibold text-charcoal/70">
            <Lock className="w-3.5 h-3.5 text-forest" />
            <span>Secure Cash on Delivery Checkout</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12">
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Main Form Fields - 7 cols */}
          <div className="lg:col-span-7 space-y-8">
            {/* Customer Details */}
            <div className="p-6 rounded-2xl bg-ivory border border-gold/15 shadow-xs space-y-4">
              <h2 className="font-serif text-xl text-charcoal font-medium pb-2 border-b border-gold/10">
                1. Contact & Customer Details
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="fullName" className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-1">
                    Full Name <span className="text-terracotta">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    placeholder="e.g. Ramesh Chandra"
                    {...register('fullName')}
                    className={`w-full px-3.5 py-2.5 text-sm bg-ivory border rounded-lg outline-none focus:border-forest text-charcoal ${
                      errors.fullName ? 'border-terracotta' : 'border-gold/25'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-xs text-terracotta mt-1">{errors.fullName.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="mobile" className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-1">
                    Mobile Number (10 Digits) <span className="text-terracotta">*</span>
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

              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-1">
                  Email Address <span className="text-charcoal/40 text-[11px] font-normal">(Optional for order tracking updates)</span>
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="ramesh@example.com"
                  {...register('email')}
                  className="w-full px-3.5 py-2.5 text-sm bg-ivory border border-gold/25 rounded-lg outline-none focus:border-forest text-charcoal"
                />
              </div>
            </div>

            {/* Delivery Address */}
            <div className="p-6 rounded-2xl bg-ivory border border-gold/15 shadow-xs space-y-4">
              <h2 className="font-serif text-xl text-charcoal font-medium pb-2 border-b border-gold/10">
                2. Shipping & Delivery Address
              </h2>

              <div>
                <label htmlFor="addressLine1" className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-1">
                  House / Flat No. & Street Address <span className="text-terracotta">*</span>
                </label>
                <input
                  id="addressLine1"
                  type="text"
                  placeholder="e.g. Flat 402, Shanti Kunj, Station Road"
                  {...register('addressLine1')}
                  className={`w-full px-3.5 py-2.5 text-sm bg-ivory border rounded-lg outline-none focus:border-forest text-charcoal ${
                    errors.addressLine1 ? 'border-terracotta' : 'border-gold/25'
                  }`}
                />
                {errors.addressLine1 && (
                  <p className="text-xs text-terracotta mt-1">{errors.addressLine1.message}</p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="landmark" className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-1">
                    Landmark <span className="text-charcoal/40 text-[11px] font-normal">(Optional)</span>
                  </label>
                  <input
                    id="landmark"
                    type="text"
                    placeholder="e.g. Near Shiv Mandir"
                    {...register('landmark')}
                    className="w-full px-3.5 py-2.5 text-sm bg-ivory border border-gold/25 rounded-lg outline-none focus:border-forest text-charcoal"
                  />
                </div>

                <div>
                  <label htmlFor="pincode" className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-1">
                    6-Digit Pincode <span className="text-terracotta">*</span>
                  </label>
                  <input
                    id="pincode"
                    type="text"
                    maxLength={6}
                    placeholder="201301"
                    {...register('pincode')}
                    className={`w-full px-3.5 py-2.5 text-sm bg-ivory border rounded-lg outline-none focus:border-forest text-charcoal ${
                      errors.pincode ? 'border-terracotta' : 'border-gold/25'
                    }`}
                  />
                  {errors.pincode && (
                    <p className="text-xs text-terracotta mt-1">{errors.pincode.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="city" className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-1">
                    City / Town <span className="text-terracotta">*</span>
                  </label>
                  <input
                    id="city"
                    type="text"
                    placeholder="e.g. Lucknow"
                    {...register('city')}
                    className={`w-full px-3.5 py-2.5 text-sm bg-ivory border rounded-lg outline-none focus:border-forest text-charcoal ${
                      errors.city ? 'border-terracotta' : 'border-gold/25'
                    }`}
                  />
                  {errors.city && (
                    <p className="text-xs text-terracotta mt-1">{errors.city.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="state" className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-1">
                    State / UT <span className="text-terracotta">*</span>
                  </label>
                  <select
                    id="state"
                    {...register('state')}
                    className="w-full px-3.5 py-2.5 text-sm bg-ivory border border-gold/25 rounded-lg outline-none focus:border-forest text-charcoal cursor-pointer"
                  >
                    {indianStates.map((st) => (
                      <option key={st} value={st}>
                        {st}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="orderNotes" className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-1">
                  Delivery Instructions <span className="text-charcoal/40 text-[11px] font-normal">(Optional)</span>
                </label>
                <textarea
                  id="orderNotes"
                  rows={2}
                  placeholder="e.g. Call before delivery / deliver after 5 PM"
                  {...register('orderNotes')}
                  className="w-full px-3.5 py-2 text-sm bg-ivory border border-gold/25 rounded-lg outline-none focus:border-forest text-charcoal resize-none"
                />
              </div>
            </div>

            {/* Payment Method (COD ONLY) */}
            <div className="p-6 rounded-2xl bg-ivory border border-gold/15 shadow-xs space-y-3">
              <h2 className="font-serif text-xl text-charcoal font-medium pb-2 border-b border-gold/10">
                3. Payment Method
              </h2>

              <div className="p-4 rounded-xl border-2 border-forest bg-sage/20 flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-forest text-ivory flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                  ✓
                </div>
                <div>
                  <h3 className="text-sm font-bold text-charcoal">Cash on Delivery (COD)</h3>
                  <p className="text-xs text-charcoal/70 mt-0.5 leading-relaxed">
                    Pay with cash or UPI scanner directly to the courier partner when your parcel arrives at your doorstep. Zero advance payment required.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary Sidebar - 5 cols */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-sage/20 border border-gold/15 space-y-6 lg:sticky lg:top-24">
            <h2 className="font-serif text-xl font-medium text-charcoal pb-3 border-b border-gold/15">
              Order Items ({items.length})
            </h2>

            {/* Product items preview */}
            <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
              {items.map((item) => (
                <div key={item.productId} className="flex items-center gap-3 py-1">
                  <div className="relative w-14 h-16 rounded-lg overflow-hidden bg-sage/30 shrink-0 border border-gold/15">
                    <Image src={item.image} alt={item.title} fill sizes="56px" className="object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-serif font-medium text-charcoal line-clamp-1">{item.title}</p>
                    <p className="text-[11px] text-charcoal/60">Qty: {item.quantity}</p>
                  </div>
                  <span className="text-xs font-semibold text-forest font-serif">
                    {formatPrice(item.price * item.quantity)}
                  </span>
                </div>
              ))}
            </div>

            {/* Calculations */}
            <div className="space-y-2.5 pt-3 border-t border-gold/15 text-xs">
              <div className="flex justify-between text-charcoal/70">
                <span>Items Subtotal</span>
                <span className="font-semibold text-charcoal">{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between text-charcoal/70">
                <span>Shipping Across India</span>
                <span className="font-semibold text-forest">FREE</span>
              </div>
              <div className="flex justify-between text-charcoal/70">
                <span>COD Handling Fee</span>
                <span className="font-semibold text-forest">FREE</span>
              </div>
              <div className="pt-3 border-t border-gold/15 flex justify-between items-baseline text-base">
                <span className="font-serif font-bold text-charcoal">Total Amount to Pay</span>
                <span className="font-serif text-2xl font-bold text-forest">{formatPrice(subtotal)}</span>
              </div>
            </div>

            {/* Terms Checkbox */}
            <div className="space-y-1">
              <label className="flex items-start gap-2.5 text-xs text-charcoal/70 cursor-pointer">
                <input
                  type="checkbox"
                  {...register('agreeToTerms')}
                  className="w-4 h-4 rounded border-gold/30 text-forest accent-forest mt-0.5 shrink-0"
                />
                <span>
                  I agree to the <Link href="/policies/terms-of-service" className="underline hover:text-forest">Terms of Service</Link> and <Link href="/policies/refund-policy" className="underline hover:text-forest">Refund Policy</Link>.
                </span>
              </label>
              {errors.agreeToTerms && (
                <p className="text-xs text-terracotta">{errors.agreeToTerms.message}</p>
              )}
            </div>

            {serverError && (
              <div className="p-3 rounded-xl bg-terracotta/10 border border-terracotta/20 text-xs text-terracotta flex items-start gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{serverError}</span>
              </div>
            )}

            {/* Place Order Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 px-6 bg-forest text-ivory rounded-xl text-sm font-semibold hover:bg-forest/90 transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Placing Your Order...</span>
                </>
              ) : (
                <span>Place Cash on Delivery Order</span>
              )}
            </button>

            {/* Trust Points */}
            <div className="space-y-2 pt-2 text-[11px] text-charcoal/70 border-t border-gold/10">
              <div className="flex items-center gap-2">
                <Truck className="w-3.5 h-3.5 text-forest shrink-0" />
                <span>Discreet plain packaging guaranteed</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-gold shrink-0" />
                <span>Free consultation with Hakim Sahab anytime</span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
