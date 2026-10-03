import Link from 'next/link'
import { CheckCircle2, MessageCircle, Package, Truck, ShieldCheck, ArrowRight } from 'lucide-react'
import { siteConfig } from '@/lib/siteConfig'
import { getWhatsAppUrl } from '@/lib/utils'

interface OrderSuccessPageProps {
  params: Promise<{
    orderId: string
  }>
}

export default async function OrderSuccessPage({ params }: OrderSuccessPageProps) {
  const { orderId } = await params

  const waUrl = getWhatsAppUrl(
    siteConfig.whatsappNumber,
    `Namaste Hakim Sahab! Maine naya order place kiya hai (Order ID: ${orderId}). Mujhe iske bare mein salah chahiye.`
  )

  return (
    <div className="min-h-screen bg-ivory py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="p-6 md:p-10 rounded-2xl bg-ivory border border-gold/20 shadow-md text-center space-y-6">
          {/* Success Icon */}
          <div className="w-16 h-16 rounded-full bg-forest/10 text-forest flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-gold font-sans">
              Cash on Delivery Order Confirmed
            </span>
            <h1 className="font-serif text-3xl md:text-4xl text-charcoal mt-1">
              Thank You for Your Order!
            </h1>
            <p className="text-sm text-charcoal/70 mt-2">
              Your Ayurvedic formulation order has been received and is being prepared for dispatch.
            </p>
          </div>

          {/* Order ID & Estimated Delivery Box */}
          <div className="p-4 rounded-xl bg-sage/25 border border-gold/15 space-y-2 text-sm text-left">
            <div className="flex justify-between items-center pb-2 border-b border-gold/10">
              <span className="text-charcoal/60">Order Reference:</span>
              <strong className="font-mono text-forest font-semibold">{orderId}</strong>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-gold/10">
              <span className="text-charcoal/60">Payment Mode:</span>
              <span className="font-medium text-gold">Cash on Delivery (COD)</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-charcoal/60">Estimated Delivery:</span>
              <span className="font-medium text-charcoal">4–7 Business Days</span>
            </div>
          </div>

          {/* Important COD Note */}
          <div className="p-4 rounded-xl bg-gold/10 border border-gold/20 text-xs text-charcoal/80 text-left space-y-1">
            <p className="font-semibold text-charcoal">📦 COD Delivery Notice:</p>
            <p>
              Please keep the exact cash amount or your UPI payment app ready when our courier executive arrives with your sealed discreet package.
            </p>
          </div>

          {/* Hakim Sahab WhatsApp CTA */}
          <div className="p-5 rounded-xl bg-forest text-ivory space-y-3">
            <div className="flex items-center justify-center gap-2 font-serif text-lg font-medium">
              <MessageCircle className="w-5 h-5 text-gold" />
              <span>Connect with Hakim Sahab</span>
            </div>
            <p className="text-xs text-ivory/80 max-w-md mx-auto leading-relaxed">
              Have questions regarding dosage, timing, diet guidelines, or wellness routines? Message us directly on WhatsApp with your Order ID for free guidance.
            </p>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-xl text-xs font-bold hover:bg-[#20c55e] transition-colors shadow-xs"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp ({orderId})
            </a>
          </div>

          {/* Action Links */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              href="/track-order"
              className="w-full sm:w-auto px-6 py-3 border border-forest text-forest rounded-xl text-xs font-semibold hover:bg-sage/30 transition-colors"
            >
              Track Order Status
            </Link>
            <Link
              href="/collections/all"
              className="w-full sm:w-auto px-6 py-3 bg-forest text-ivory rounded-xl text-xs font-semibold hover:bg-forest/90 transition-colors flex items-center justify-center gap-1.5"
            >
              <span>Continue Shopping</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
