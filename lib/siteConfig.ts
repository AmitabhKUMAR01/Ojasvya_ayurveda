export const siteConfig = {
  name: 'Herbal Hand Jadibooti',
  shortName: 'HHJ',
  tagline: 'आयुर्वेद की ताकत, आपकी सेहत',
  taglineEn: 'The Power of Ayurveda, Your Wellness',
  description:
    'Premium Ayurvedic and herbal wellness products. Cash on delivery across India. Free shipping. Consult Hakim Sahab on WhatsApp.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://herbalhandjadibooti.com',
  email: 'Herbalhandjadibooti@gmail.com',
  phones: ['6396549240', '9760690128', '9520590128'],
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '919760690128',
  whatsappMessage:
    'Namaste! Mujhe apne health concern ke liye sahi product choose karne mein madad chahiye.',
  social: {
    facebook: 'https://facebook.com/herbalhandjadibooti',
    instagram: 'https://instagram.com/herbalhandjadibooti',
  },
  disclaimer:
    'These statements have not been evaluated by any regulatory authority. These products are not intended to diagnose, treat, cure, or prevent any disease. Please consult a qualified Ayurvedic practitioner before use.',
  returnPolicy: {
    days: 7,
    fee: 100,
    conditions: 'Items must be sealed and unopened.',
  },
  shipping: {
    free: true,
    label: 'Free Shipping Across India',
  },
  cod: {
    available: true,
    label: 'Cash on Delivery',
  },
  stockThreshold: 10,
} as const

export type SiteConfig = typeof siteConfig
