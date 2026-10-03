import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail } from 'lucide-react'
import { siteConfig } from '@/lib/siteConfig'

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"/>
    </svg>
  )
}


const footerNav = [
  {
    title: 'Products',
    links: [
      { href: '/collections/all', label: 'All Products' },
      { href: '/collections/mens-vitamins-supplements', label: "Men's Supplements" },
      { href: '/collections/male-stamina-kits', label: 'Stamina Kits' },
      { href: '/collections/womens-supplements', label: "Women's Supplements" },
      { href: '/collections/digestive-health-detox', label: 'Digestive & Detox' },
      { href: '/collections/combos', label: 'Combo Kits' },
    ],
  },
  {
    title: 'Company',
    links: [
      { href: '/about', label: 'About Us' },
      { href: '/blogs', label: 'Blog' },
      { href: '/contact', label: 'Contact Us' },
      { href: '/track-order', label: 'Track Order' },
      { href: '/account', label: 'My Account' },
    ],
  },
  {
    title: 'Policies',
    links: [
      { href: '/policies/privacy-policy', label: 'Privacy Policy' },
      { href: '/policies/refund-policy', label: 'Refund Policy' },
      { href: '/policies/terms-of-service', label: 'Terms of Service' },
      { href: '/policies/shipping-policy', label: 'Shipping Policy' },
      { href: '/policies/contact-information', label: 'Contact Information' },
    ],
  },
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-forest text-ivory">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4" aria-label="Ojasvya Ayurveda — Home">
              <Image
                src={siteConfig.logo}
                alt="Ojasvya Ayurveda"
                width={160}
                height={64}
                className="h-14 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="font-devanagari text-gold/80 text-sm mb-3">{siteConfig.tagline}</p>
            <p className="text-ivory/70 text-sm leading-relaxed max-w-xs mb-6">
              Premium Ayurvedic and herbal wellness products by Ojasvya Ayurveda. Free shipping across India. Cash on delivery. Free consultation with Hakim Sahab.
            </p>
            <div className="space-y-2">
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 text-sm text-ivory/70 hover:text-gold transition-colors">
                <Mail className="w-4 h-4 shrink-0" />{siteConfig.email}
              </a>
              {siteConfig.phones.map((phone) => (
                <a key={phone} href={`tel:${phone}`} className="flex items-center gap-2 text-sm text-ivory/70 hover:text-gold transition-colors">
                  <Phone className="w-4 h-4 shrink-0" />{phone}
                </a>
              ))}
            </div>
            <div className="flex gap-3 mt-5">
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="p-2 rounded-md bg-ivory/10 hover:bg-ivory/20 transition-colors" aria-label="Facebook">
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="p-2 rounded-md bg-ivory/10 hover:bg-ivory/20 transition-colors" aria-label="Instagram">
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Nav columns */}
          {footerNav.map((section) => (
            <div key={section.title}>
              <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-gold/70 mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-ivory/60 hover:text-gold transition-colors">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="container mx-auto px-4 py-6">
          <p className="text-xs text-ivory/40 leading-relaxed max-w-3xl mb-4">
            <strong className="text-ivory/60">Disclaimer:</strong> {siteConfig.disclaimer}
          </p>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-xs text-ivory/40">
            <p>© {year} {siteConfig.name}. All rights reserved.</p>
            <p>
              <Link href="/credits" className="hover:text-gold transition-colors">Photo credits</Link>
              <span className="mx-2">·</span>
              Made with care in India 🇮🇳
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
