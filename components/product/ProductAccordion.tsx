'use client'

import { useState } from 'react'
import { ChevronDown, Sparkles, Leaf, BookOpen, Clock, ShieldCheck, HelpCircle } from 'lucide-react'
import type { Product } from '@/types/product'

interface ProductAccordionProps {
  product: Product
}

export default function ProductAccordion({ product }: ProductAccordionProps) {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    benefits: true,
    ingredients: true,
    howToUse: false,
    timeline: false,
    policy: false,
    faq: false,
  })

  const toggle = (section: string) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }))
  }

  return (
    <div className="space-y-3 pt-6 border-t border-gold/15">
      {/* 1. Key Benefits */}
      <div className="rounded-xl border border-gold/15 bg-ivory overflow-hidden">
        <button
          onClick={() => toggle('benefits')}
          className="w-full flex items-center justify-between p-4 text-left font-serif text-lg font-medium text-charcoal hover:bg-sage/20 transition-colors"
          aria-expanded={openSections.benefits}
        >
          <span className="flex items-center gap-2.5">
            <Sparkles className="w-4 h-4 text-gold" />
            Key Benefits
          </span>
          <ChevronDown
            className={`w-4 h-4 text-charcoal/50 transition-transform duration-200 ${
              openSections.benefits ? 'rotate-180' : ''
            }`}
          />
        </button>
        {openSections.benefits && (
          <div className="p-4 pt-0 text-sm text-charcoal/80 space-y-2 border-t border-gold/10">
            <ul className="space-y-2.5 mt-3">
              {product.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-forest mt-2 shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* 2. Key Ingredients */}
      <div className="rounded-xl border border-gold/15 bg-ivory overflow-hidden">
        <button
          onClick={() => toggle('ingredients')}
          className="w-full flex items-center justify-between p-4 text-left font-serif text-lg font-medium text-charcoal hover:bg-sage/20 transition-colors"
          aria-expanded={openSections.ingredients}
        >
          <span className="flex items-center gap-2.5">
            <Leaf className="w-4 h-4 text-forest" />
            Classical Ingredients ({product.ingredients.length})
          </span>
          <ChevronDown
            className={`w-4 h-4 text-charcoal/50 transition-transform duration-200 ${
              openSections.ingredients ? 'rotate-180' : ''
            }`}
          />
        </button>
        {openSections.ingredients && (
          <div className="p-4 pt-0 space-y-3 border-t border-gold/10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
              {product.ingredients.map((ing) => (
                <div
                  key={ing.name}
                  className="p-3 rounded-lg bg-sage/20 border border-gold/10 space-y-1"
                >
                  <div className="flex items-baseline justify-between">
                    <h4 className="font-serif text-base font-medium text-charcoal">{ing.name}</h4>
                    {ing.nameHindi && (
                      <span className="font-devanagari text-xs text-gold font-semibold">
                        {ing.nameHindi}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-charcoal/70 leading-relaxed">{ing.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 3. How to Use */}
      <div className="rounded-xl border border-gold/15 bg-ivory overflow-hidden">
        <button
          onClick={() => toggle('howToUse')}
          className="w-full flex items-center justify-between p-4 text-left font-serif text-lg font-medium text-charcoal hover:bg-sage/20 transition-colors"
          aria-expanded={openSections.howToUse}
        >
          <span className="flex items-center gap-2.5">
            <BookOpen className="w-4 h-4 text-gold" />
            How to Use & Suggested Dosage
          </span>
          <ChevronDown
            className={`w-4 h-4 text-charcoal/50 transition-transform duration-200 ${
              openSections.howToUse ? 'rotate-180' : ''
            }`}
          />
        </button>
        {openSections.howToUse && (
          <div className="p-4 pt-0 text-sm text-charcoal/80 space-y-3 border-t border-gold/10">
            <p className="mt-3 leading-relaxed">{product.howToUse}</p>
            <p className="text-xs text-charcoal/50 italic">
              Note: For personalized dosage tailored to your Prakriti and lifestyle, feel free to WhatsApp Hakim Sahab directly.
            </p>
          </div>
        )}
      </div>

      {/* 4. Wellness Progression Timeline */}
      <div className="rounded-xl border border-gold/15 bg-ivory overflow-hidden">
        <button
          onClick={() => toggle('timeline')}
          className="w-full flex items-center justify-between p-4 text-left font-serif text-lg font-medium text-charcoal hover:bg-sage/20 transition-colors"
          aria-expanded={openSections.timeline}
        >
          <span className="flex items-center gap-2.5">
            <Clock className="w-4 h-4 text-terracotta" />
            Ayurvedic Wellness Timeline
          </span>
          <ChevronDown
            className={`w-4 h-4 text-charcoal/50 transition-transform duration-200 ${
              openSections.timeline ? 'rotate-180' : ''
            }`}
          />
        </button>
        {openSections.timeline && (
          <div className="p-4 pt-0 space-y-3 border-t border-gold/10">
            <div className="space-y-3 mt-3 text-xs text-charcoal/80">
              <div className="flex gap-3">
                <span className="font-semibold text-forest shrink-0 w-20">Weeks 1–2:</span>
                <span>Initial absorption, gentle internal cleansing, and settling of digestive Agni.</span>
              </div>
              <div className="flex gap-3">
                <span className="font-semibold text-gold shrink-0 w-20">Weeks 3–4:</span>
                <span>Sustained cellular nourishment, steady improvement in daily stamina and energy.</span>
              </div>
              <div className="flex gap-3">
                <span className="font-semibold text-forest shrink-0 w-20">Weeks 8+:</span>
                <span>Deep tissue Rasayana rejuvenation and long-term vitality balance.</span>
              </div>
              <p className="text-[11px] text-charcoal/50 italic pt-1">
                *Results vary based on individual constitution (Prakriti), diet, and consistency.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 5. Return Policy & Guarantee */}
      <div className="rounded-xl border border-gold/15 bg-ivory overflow-hidden">
        <button
          onClick={() => toggle('policy')}
          className="w-full flex items-center justify-between p-4 text-left font-serif text-lg font-medium text-charcoal hover:bg-sage/20 transition-colors"
          aria-expanded={openSections.policy}
        >
          <span className="flex items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 text-forest" />
            7-Day Return Policy & COD Terms
          </span>
          <ChevronDown
            className={`w-4 h-4 text-charcoal/50 transition-transform duration-200 ${
              openSections.policy ? 'rotate-180' : ''
            }`}
          />
        </button>
        {openSections.policy && (
          <div className="p-4 pt-0 text-xs text-charcoal/80 space-y-2 border-t border-gold/10">
            <p className="mt-3 leading-relaxed">
              <strong>7-Day Returns:</strong> You can initiate a return within 7 calendar days of delivery. Items must be unopened, in their original sealed packaging.
            </p>
            <p className="leading-relaxed">
              <strong>Return Fee:</strong> A nominal ₹100 reverse pickup and restocking charge applies on returns.
            </p>
            <p className="leading-relaxed">
              <strong>Cash on Delivery:</strong> Pay securely in cash or via mobile scanner directly to the courier partner at your doorstep.
            </p>
          </div>
        )}
      </div>

      {/* 6. FAQs */}
      {product.faq && product.faq.length > 0 && (
        <div className="rounded-xl border border-gold/15 bg-ivory overflow-hidden">
          <button
            onClick={() => toggle('faq')}
            className="w-full flex items-center justify-between p-4 text-left font-serif text-lg font-medium text-charcoal hover:bg-sage/20 transition-colors"
            aria-expanded={openSections.faq}
          >
            <span className="flex items-center gap-2.5">
              <HelpCircle className="w-4 h-4 text-gold" />
              Frequently Asked Questions
            </span>
            <ChevronDown
              className={`w-4 h-4 text-charcoal/50 transition-transform duration-200 ${
                openSections.faq ? 'rotate-180' : ''
              }`}
            />
          </button>
          {openSections.faq && (
            <div className="p-4 pt-0 space-y-3 border-t border-gold/10">
              <div className="space-y-3 mt-3">
                {product.faq.map((f, idx) => (
                  <div key={idx} className="space-y-1">
                    <p className="text-sm font-semibold text-charcoal">{f.question}</p>
                    <p className="text-xs text-charcoal/70 leading-relaxed">{f.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
