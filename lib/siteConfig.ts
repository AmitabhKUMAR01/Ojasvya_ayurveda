export const siteConfig = {
  name: 'Ojasvya Ayurveda',
  shortName: 'OA',
  tagline: 'आयुर्वेद की ताकत, आपकी सेहत',
  taglineEn: 'Pure Herbs. Better Life.',
  description:
    'Premium Ayurvedic and herbal wellness products by Ojasvya Ayurveda. Cash on delivery across India. Free shipping. Consult Hakim Sahab on WhatsApp.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://ojasvyaayurveda.com',
  email: 'ojasvyaayurveda@gmail.com',
  phones: [] as string[],
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '',
  whatsappMessage:
    'Namaste! Mujhe apne health concern ke liye sahi product choose karne mein madad chahiye.',
  social: {
    facebook: 'https://facebook.com/ojasvyaayurveda',
    instagram: 'https://instagram.com/ojasvyaayurveda',
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
  logo: '/images/ayurveda/freelance_logo.png',
} as const

export type SiteConfig = typeof siteConfig
