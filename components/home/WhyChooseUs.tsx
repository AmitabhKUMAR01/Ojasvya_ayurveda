import Reveal from '@/components/ui/Reveal'

const reasons = [
  {
    num: '01',
    title: 'Classical Formulations',
    desc: 'Every product draws from classical Ayurvedic texts — Charaka Samhita, Ashtanga Hridayam, Sushruta Samhita. Traditional wisdom, modern quality standards.',
  },
  {
    num: '02',
    title: 'Discreet & Respectful',
    desc: 'We understand privacy matters. All orders are shipped in plain, unmarked packaging. No product names, no logos on the outside.',
  },
  {
    num: '03',
    title: 'Cash on Delivery, No Risk',
    desc: 'Pay only when your order arrives at your door. No advance payment, no UPI, no card details. Zero financial risk for you.',
  },
  {
    num: '04',
    title: 'Human Support, Not Bots',
    desc: 'When you reach out, you speak to Hakim Sahab — a real person with genuine expertise in Ayurvedic formulations. Not an automated response.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 border-t border-gold/10" aria-labelledby="why-heading">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left */}
          <Reveal variant="left" className="lg:sticky lg:top-24">
            <p className="font-sans text-xs uppercase tracking-widest text-gold mb-3">Why Us</p>
            <h2 id="why-heading" className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal leading-tight">
              Why Ojasvya<br />
              <span className="italic text-forest">Ayurveda?</span>
            </h2>
            <p className="mt-4 text-charcoal/60 text-sm md:text-base leading-relaxed max-w-md">
              In a market full of shortcuts and claims, we do things the old way — with genuine care for your wellness and complete respect for Ayurvedic tradition.
            </p>
          </Reveal>

          {/* Right — reasons */}
          <div className="space-y-0">
            {reasons.map((r, i) => (
              <Reveal
                key={r.num}
                variant="right"
                delay={i * 120}
                className={`group py-8 ${i < reasons.length - 1 ? 'border-b border-gold/10' : ''}`}
              >
                <div className="flex items-start gap-5">
                  <span className="font-serif text-3xl text-gold/30 font-semibold leading-none shrink-0 mt-1 transition-all duration-500 group-hover:text-gold group-hover:-translate-y-1">
                    {r.num}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl text-charcoal mb-2 transition-colors duration-300 group-hover:text-forest">{r.title}</h3>
                    <p className="text-sm text-charcoal/60 leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
