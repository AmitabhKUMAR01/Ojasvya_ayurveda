'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactFormSchema, type ContactFormData } from '@/lib/schemas'
import { siteConfig } from '@/lib/siteConfig'
import { getWhatsAppUrl } from '@/lib/utils'
import { Phone, Mail, MessageCircle, Clock, MapPin, CheckCircle2, Loader2, Send } from 'lucide-react'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const waUrl = getWhatsAppUrl(
    siteConfig.whatsappNumber,
    'Namaste Hakim Sahab! Mujhe Ayurvedic consult ke liye baat karni hai.'
  )

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    // Simulate sending message
    await new Promise((res) => setTimeout(res, 800))
    setSubmitted(true)
    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen bg-ivory py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center space-y-3 mb-12">
          <p className="font-sans text-xs uppercase tracking-widest text-gold font-semibold">Get in Touch</p>
          <h1 className="font-serif text-3xl md:text-5xl text-charcoal">Contact & Consultations</h1>
          <p className="text-sm text-charcoal/70 max-w-lg mx-auto">
            Have questions about a formulation, dosage, or your order? Connect directly with Hakim Sahab and our support team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Contact Details Cards - 5 cols */}
          <div className="lg:col-span-5 space-y-4">
            {/* WhatsApp Hero Card */}
            <div className="p-6 rounded-2xl bg-forest text-ivory space-y-4 shadow-md">
              <div className="flex items-center gap-2 text-gold font-semibold text-xs uppercase tracking-wider">
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Fastest Response</span>
              </div>
              <h3 className="font-serif text-ivory/80 text-2xl font-medium">Free WhatsApp Guidance</h3>
              <p className="text-xs text-ivory/80 leading-relaxed">
                Connect directly with Hakim Sahab on WhatsApp for 1-on-1 private guidance on choosing the right Ayurvedic regimen.
              </p>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="inline-flex items-center gap-2 w-full justify-center px-4 py-3 bg-[#25D366] text-white rounded-xl text-xs font-bold hover:bg-[#20c55e] transition-colors shadow-xs cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                Chat with Hakim Sahab
              </a>
            </div>

            {/* Direct Phone Numbers (if available) */}
            {siteConfig.phones.length > 0 && (
              <div className="p-6 rounded-2xl bg-ivory border border-gold/15 space-y-3 shadow-xs">
                <div className="flex items-center gap-2 text-gold text-xs font-semibold uppercase tracking-wider">
                  <Phone className="w-4 h-4 text-forest" />
                  <span>Phone Support</span>
                </div>
                <div className="space-y-2">
                  {siteConfig.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone}`}
                      className="block text-sm font-semibold text-charcoal hover:text-forest transition-colors"
                    >
                      +91 {phone}
                    </a>
                  ))}
                </div>
                <p className="text-[11px] text-charcoal/50">Available Monday to Saturday, 9:00 AM – 7:00 PM IST</p>
              </div>
            )}

            {/* Email & Location */}
            <div className="p-6 rounded-2xl bg-ivory border border-gold/15 space-y-3 shadow-xs">
              <div className="flex items-center gap-2 text-gold text-xs font-semibold uppercase tracking-wider">
                <Mail className="w-4 h-4 text-forest" />
                <span>Email Support</span>
              </div>
              <a
                href={`mailto:${siteConfig.email}`}
                className="block text-sm font-semibold text-charcoal hover:text-forest transition-colors break-all"
              >
                {siteConfig.email}
              </a>
              <div className="pt-2 border-t border-gold/10 flex items-start gap-2 text-xs text-charcoal/70">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>Dispatches made pan-India from our Ayurvedic Apothecary hub in Uttar Pradesh, India.</span>
              </div>
            </div>
          </div>

          {/* Contact Form - 7 cols */}
          <div className="lg:col-span-7 p-6 md:p-8 rounded-2xl bg-ivory border border-gold/15 shadow-sm space-y-6">
            <h2 className="font-serif text-2xl text-charcoal font-medium pb-2 border-b border-gold/15">
              Send us a Message
            </h2>

            {submitted ? (
              <div className="text-center py-12 space-y-3 animate-fade-up">
                <CheckCircle2 className="w-12 h-12 text-forest mx-auto" />
                <h3 className="font-serif text-2xl text-charcoal">Message Received!</h3>
                <p className="text-xs md:text-sm text-charcoal/70 max-w-sm mx-auto">
                  Thank you for reaching out. Our Ayurvedic support team will respond to your query within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 bg-forest text-ivory rounded-xl text-xs font-semibold hover:bg-forest/90 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-1">
                      Your Name <span className="text-terracotta">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="e.g. Anand Sharma"
                      {...register('name')}
                      className={`w-full px-3.5 py-2.5 text-sm bg-ivory border rounded-lg outline-none focus:border-forest text-charcoal ${
                        errors.name ? 'border-terracotta' : 'border-gold/25'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-terracotta mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-1">
                      Mobile Number <span className="text-terracotta">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-medium text-charcoal/50">+91</span>
                      <input
                        id="phone"
                        type="tel"
                        maxLength={10}
                        placeholder="9876543210"
                        {...register('phone')}
                        className={`w-full pl-11 pr-3 py-2.5 text-sm bg-ivory border rounded-lg outline-none focus:border-forest text-charcoal ${
                          errors.phone ? 'border-terracotta' : 'border-gold/25'
                        }`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-xs text-terracotta mt-1">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-1">
                    Email Address <span className="text-charcoal/40 text-[11px] font-normal">(Optional)</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="anand@example.com"
                    {...register('email')}
                    className="w-full px-3.5 py-2.5 text-sm bg-ivory border border-gold/25 rounded-lg outline-none focus:border-forest text-charcoal"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-1">
                    Your Message or Health Concern <span className="text-terracotta">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Describe your health question, product enquiry, or order concern in detail..."
                    {...register('message')}
                    className={`w-full px-3.5 py-2.5 text-sm bg-ivory border rounded-lg outline-none focus:border-forest text-charcoal resize-none ${
                      errors.message ? 'border-terracotta' : 'border-gold/25'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-terracotta mt-1">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 bg-forest text-ivory rounded-xl text-sm font-semibold hover:bg-forest/90 transition-all flex items-center justify-center gap-2 shadow-sm disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
