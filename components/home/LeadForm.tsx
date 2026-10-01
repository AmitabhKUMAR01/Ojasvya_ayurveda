'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CheckCircle, Loader2, ChevronDown } from 'lucide-react'
import { leadFormSchema, type LeadFormData } from '@/lib/schemas'
import Reveal from '@/components/ui/Reveal'

const concerns = [
  'Male Vitality & Stamina',
  "Men's Reproductive Wellness",
  'Energy & Fatigue',
  'Digestive Health',
  'Liver & Detox',
  "Women's Wellness",
  'Hormonal Balance',
  'Joint & Muscle Comfort',
  'General Wellness',
  'Other',
]

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadFormSchema),
  })

  async function onSubmit(data: LeadFormData) {
    setServerError(null)
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Submission failed')
      setSubmitted(true)
    } catch {
      setServerError('Something went wrong. Please try again or WhatsApp us directly.')
    }
  }

  return (
    <section className="py-16 md:py-24 border-t border-gold/10" aria-labelledby="lead-form-heading">
      <div className="container mx-auto px-4">
        <Reveal className="max-w-xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-8">
            <p className="font-sans text-xs uppercase tracking-widest text-gold mb-2">Free Advice</p>
            <h2 id="lead-form-heading" className="font-serif text-3xl md:text-4xl text-charcoal mb-3">
              Get Personalized Advice
            </h2>
            <p className="text-sm text-charcoal/60">
              Share your concern and Hakim Sahab will personally recommend the right Ayurvedic approach for you.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-12">
              <CheckCircle className="w-12 h-12 text-forest mx-auto mb-4" />
              <h3 className="font-serif text-2xl text-charcoal mb-2">Request Received!</h3>
              <p className="text-charcoal/60 text-sm">
                Hakim Sahab will reach out to you on WhatsApp within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1.5">
                  Your Name <span className="text-terracotta">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  autoComplete="name"
                  placeholder="e.g. Rajesh Kumar"
                  {...register('name')}
                  className={`w-full px-4 py-3 rounded-lg border text-sm bg-ivory text-charcoal placeholder:text-charcoal/30 outline-none transition-colors focus:ring-2 focus:ring-forest/30 focus:border-forest ${errors.name ? 'border-terracotta' : 'border-gold/20'}`}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-xs text-terracotta" role="alert">{errors.name.message}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-1.5">
                  Mobile Number <span className="text-terracotta">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-charcoal/50 font-medium">+91</span>
                  <input
                    id="phone"
                    type="tel"
                    autoComplete="tel"
                    maxLength={10}
                    placeholder="9876543210"
                    {...register('phone')}
                    className={`w-full pl-12 pr-4 py-3 rounded-lg border text-sm bg-ivory text-charcoal placeholder:text-charcoal/30 outline-none transition-colors focus:ring-2 focus:ring-forest/30 focus:border-forest ${errors.phone ? 'border-terracotta' : 'border-gold/20'}`}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                  />
                </div>
                {errors.phone && (
                  <p id="phone-error" className="mt-1 text-xs text-terracotta" role="alert">{errors.phone.message}</p>
                )}
              </div>

              {/* Concern */}
              <div>
                <label htmlFor="concern" className="block text-sm font-medium text-charcoal mb-1.5">
                  Your Health Concern <span className="text-terracotta">*</span>
                </label>
                <div className="relative">
                  <select
                    id="concern"
                    {...register('concern')}
                    className={`w-full appearance-none px-4 py-3 rounded-lg border text-sm bg-ivory text-charcoal outline-none transition-colors focus:ring-2 focus:ring-forest/30 focus:border-forest ${errors.concern ? 'border-terracotta' : 'border-gold/20'}`}
                    aria-describedby={errors.concern ? 'concern-error' : undefined}
                    defaultValue=""
                  >
                    <option value="" disabled>Select your concern</option>
                    {concerns.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal/40 pointer-events-none" />
                </div>
                {errors.concern && (
                  <p id="concern-error" className="mt-1 text-xs text-terracotta" role="alert">{errors.concern.message}</p>
                )}
              </div>

              {/* Consent */}
              <div className="flex items-start gap-3">
                <input
                  id="consent"
                  type="checkbox"
                  {...register('consent')}
                  className="mt-1 w-4 h-4 rounded border-gold/30 text-forest accent-forest shrink-0"
                  aria-describedby={errors.consent ? 'consent-error' : undefined}
                />
                <label htmlFor="consent" className="text-xs text-charcoal/60 leading-relaxed cursor-pointer">
                  I agree to be contacted by Herbal Hand Jadibooti on WhatsApp with personalized product recommendations. My information will not be shared with third parties.
                </label>
              </div>
              {errors.consent && (
                <p id="consent-error" className="text-xs text-terracotta -mt-2" role="alert">{errors.consent.message}</p>
              )}

              {/* Server error */}
              {serverError && (
                <p className="text-xs text-terracotta bg-terracotta/10 rounded-lg px-3 py-2" role="alert">{serverError}</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 bg-forest text-ivory py-3.5 px-6 rounded-xl font-medium text-sm hover:bg-forest/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
                ) : (
                  'Get Personalized Advice'
                )}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
