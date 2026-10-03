'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ShieldCheck, ArrowRight, Loader2, KeyRound, Phone, CheckCircle2 } from 'lucide-react'
import { siteConfig } from '@/lib/siteConfig'

export default function LoginPage() {
  const router = useRouter()
  const [step, setStep] = useState<'phone' | 'otp'>('phone')
  const [mobile, setMobile] = useState('')
  const [otp, setOtp] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault()
    if (!/^[6-9]\d{9}$/.test(mobile.trim())) {
      setError('Please enter a valid 10-digit Indian mobile number.')
      return
    }

    setLoading(true)
    setError(null)
    setTimeout(() => {
      setLoading(false)
      setStep('otp')
    }, 600)
  }

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault()
    if (otp.length !== 4 && otp.length !== 6) {
      setError('Please enter a valid OTP code (e.g. 1234).')
      return
    }

    setLoading(true)
    setError(null)
    setTimeout(() => {
      setLoading(false)
      router.push('/account')
    }, 600)
  }

  return (
    <div className="min-h-screen bg-ivory py-16 md:py-24 flex items-center justify-center">
      <div className="container mx-auto px-4 max-w-md">
        <div className="p-6 md:p-8 rounded-3xl bg-ivory border border-gold/20 shadow-md space-y-6">
          <div className="text-center space-y-2">
            <h1 className="font-serif text-3xl text-charcoal">
              {step === 'phone' ? 'Customer Sign In' : 'Enter OTP'}
            </h1>
            <p className="text-xs text-charcoal/60">
              {step === 'phone'
                ? 'Sign in using your mobile number to view orders and saved addresses.'
                : `We sent an OTP code to +91 ${mobile}`}
            </p>
          </div>

          {error && (
            <div className="p-3 rounded-xl bg-terracotta/10 border border-terracotta/20 text-xs text-terracotta">
              {error}
            </div>
          )}

          {step === 'phone' ? (
            <form onSubmit={handleSendOtp} className="space-y-4">
              <div>
                <label htmlFor="mobile" className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-1">
                  Mobile Number
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-medium text-charcoal/50">+91</span>
                  <input
                    id="mobile"
                    type="tel"
                    maxLength={10}
                    placeholder="9876543210"
                    value={mobile}
                    onChange={(e) => {
                      setMobile(e.target.value.replace(/\D/g, ''))
                      if (error) setError(null)
                    }}
                    className="w-full pl-12 pr-4 py-3 bg-ivory border border-gold/30 rounded-xl outline-none focus:border-forest text-sm text-charcoal"
                    autoFocus
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading || mobile.length < 10}
                className="w-full py-3.5 px-6 bg-forest text-ivory rounded-xl text-xs font-semibold hover:bg-forest/90 transition-all flex items-center justify-center gap-2 shadow-sm disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending OTP...</span>
                  </>
                ) : (
                  <>
                    <span>Get One-Time Password</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          ) : (
            <form onSubmit={handleVerifyOtp} className="space-y-4">
              <div>
                <label htmlFor="otp" className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-1">
                  Verification Code (OTP)
                </label>
                <div className="relative">
                  <KeyRound className="w-4 h-4 text-charcoal/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    id="otp"
                    type="text"
                    maxLength={6}
                    placeholder="Enter any 4 or 6 digits"
                    value={otp}
                    onChange={(e) => {
                      setOtp(e.target.value.replace(/\D/g, ''))
                      if (error) setError(null)
                    }}
                    className="w-full pl-10 pr-4 py-3 bg-ivory border border-gold/30 rounded-xl outline-none focus:border-forest text-sm text-charcoal font-mono tracking-widest text-center"
                    autoFocus
                  />
                </div>
                <p className="text-[11px] text-charcoal/50 mt-1.5 text-center">
                  Tip: For mock testing, enter any code like <strong className="text-forest">1234</strong>.
                </p>
              </div>

              <button
                type="submit"
                disabled={loading || otp.length < 4}
                className="w-full py-3.5 px-6 bg-forest text-ivory rounded-xl text-xs font-semibold hover:bg-forest/90 transition-all flex items-center justify-center gap-2 shadow-sm disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Verifying...</span>
                  </>
                ) : (
                  <span>Verify & Access Account</span>
                )}
              </button>

              <button
                type="button"
                onClick={() => setStep('phone')}
                className="w-full text-center text-xs text-forest hover:underline font-medium pt-1"
              >
                Change mobile number
              </button>
            </form>
          )}

          <div className="pt-4 border-t border-gold/15 text-center text-xs text-charcoal/60">
            <Link href="/" className="hover:text-forest transition-colors">
              ← Return to Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
