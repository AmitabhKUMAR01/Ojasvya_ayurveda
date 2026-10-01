import Image from 'next/image'
import { images } from '@/lib/images'
import Reveal from '@/components/ui/Reveal'

const ingredients = [
  {
    key: 'ashwagandha' as const,
    name: 'Ashwagandha',
    nameHindi: 'अश्वगंधा',
    tagline: 'The King of Adaptogens',
    desc: 'Traditionally used to support energy, resilience, and male vitality. A cornerstone of Ayurvedic Rasayana therapy for over 3,000 years.',
  },
  {
    key: 'shilajit' as const,
    name: 'Shilajit',
    nameHindi: 'शिलाजीत',
    tagline: 'Himalayan Mineral Resin',
    desc: 'Formed over centuries in mountain rock. Traditionally used in Ayurveda to support stamina, strength, and overall vitality.',
  },
  {
    key: 'safedMusli' as const,
    name: 'Safed Musli',
    nameHindi: 'सफेद मूसली',
    tagline: 'The White Gold of Ayurveda',
    desc: 'A rare classical herb traditionally used to support male vitality. Prized in Ayurvedic texts for its rejuvenating properties.',
  },
  {
    key: 'gokshura' as const,
    name: 'Gokshura',
    nameHindi: 'गोक्षुर',
    tagline: 'The Land Caltrops',
    desc: 'Traditionally used in Ayurveda to support urinary health and male reproductive wellness. A key ingredient in classical formulations.',
  },
  {
    key: 'kaunchBeej' as const,
    name: 'Kaunch Beej',
    nameHindi: 'कौंच बीज',
    tagline: 'Velvet Bean Seeds',
    desc: 'A classical Ayurvedic herb traditionally used to support male reproductive health and overall vitality. Rich in traditional wellness wisdom.',
  },
  {
    key: 'shatavari' as const,
    name: 'Shatavari',
    nameHindi: 'शतावरी',
    tagline: 'The Queen of Herbs',
    desc: "Ayurveda's most revered herb for women's wellness. Traditionally used to support hormonal balance, vitality, and overall female health.",
  },
]

// Botanical divider SVG
function BotanicalDivider() {
  return (
    <div className="flex items-center justify-center my-10 md:my-14" aria-hidden="true">
      <div className="h-px flex-1" style={{ background: 'linear-gradient(to right, transparent, color-mix(in oklch, var(--color-gold) 30%, transparent))' }} />
      <svg width="48" height="24" viewBox="0 0 48 24" fill="none" className="mx-4 shrink-0" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 12 C20 6, 12 4, 4 8" stroke="var(--color-gold)" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.6"/>
        <path d="M24 12 C28 6, 36 4, 44 8" stroke="var(--color-gold)" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.6"/>
        <path d="M24 12 C22 16, 20 20, 18 22" stroke="var(--color-gold)" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.6"/>
        <path d="M24 12 C26 16, 28 20, 30 22" stroke="var(--color-gold)" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.6"/>
        <circle cx="24" cy="12" r="2" fill="var(--color-gold)" opacity="0.5"/>
      </svg>
      <div className="h-px flex-1" style={{ background: 'linear-gradient(to left, transparent, color-mix(in oklch, var(--color-gold) 30%, transparent))' }} />
    </div>
  )
}

export default function IngredientStory() {
  return (
    <section className="py-16 md:py-24 paper-texture" style={{ backgroundColor: 'var(--color-ivory)' }} aria-labelledby="ingredients-heading">
      <div className="container mx-auto px-4">
        {/* Header */}
        <Reveal className="text-center mb-12 md:mb-16 max-w-2xl mx-auto">
          <p className="font-devanagari text-gold text-xl mb-2">आयुर्वेद की ताकत</p>
          <h2 id="ingredients-heading" className="font-serif text-3xl md:text-4xl text-charcoal mb-4">
            The Power of Our Ingredients
          </h2>
          <p className="text-charcoal/60 text-sm md:text-base leading-relaxed">
            Every product we make is rooted in classical Ayurvedic formulation. These herbs have been used for thousands of years — and we source them with the same care and reverence.
          </p>
        </Reveal>

        {/* Ingredient grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {ingredients.map((ing, i) => (
            <Reveal key={ing.key} delay={(i % 3) * 120} className="group flex flex-col gap-4">
              {/* Image */}
              <div
                className="relative w-full rounded-2xl overflow-hidden shadow-sm transition-shadow duration-500 group-hover:shadow-xl"
                style={{ aspectRatio: '4/3' }}
              >
                <Image
                  src={images.ingredients[ing.key].src}
                  alt={images.ingredients[ing.key].alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-30" />
                {/* Number overlay */}
                <span className="absolute top-3 right-3 font-serif text-ivory text-sm tabular-nums bg-charcoal/30 backdrop-blur-sm rounded-full px-2.5 py-0.5">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Text */}
              <div>
                <div className="flex items-baseline gap-2 mb-1">
                  <h3 className="font-serif text-xl text-charcoal font-medium">{ing.name}</h3>
                  <span className="font-devanagari text-sm text-gold">{ing.nameHindi}</span>
                </div>
                <p className="text-xs text-gold uppercase tracking-widest font-sans mb-2">{ing.tagline}</p>
                <span className="block h-px w-10 bg-gold/60 mb-3 transition-all duration-500 group-hover:w-20" aria-hidden="true" />
                <p className="text-sm text-charcoal/65 leading-relaxed">{ing.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <BotanicalDivider />

        {/* Disclaimer */}
        <p className="text-center text-xs text-charcoal/40 max-w-2xl mx-auto">
          These are traditional uses documented in classical Ayurvedic texts. These statements have not been evaluated by any regulatory authority. Not intended to diagnose, treat, cure, or prevent any disease.
        </p>
      </div>
    </section>
  )
}
