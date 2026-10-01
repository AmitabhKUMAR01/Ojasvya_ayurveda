import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, DM_Sans, Noto_Serif_Devanagari } from 'next/font/google'
import { Toaster } from 'sonner'
import { siteConfig } from '@/lib/siteConfig'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import AnnouncementBar from '@/components/layout/AnnouncementBar'
import WhatsAppButton from '@/components/layout/WhatsAppButton'
import CartDrawer from '@/components/cart/CartDrawer'
import '@/app/globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
  preload: true,
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
  preload: true,
})

const notoSerifDev = Noto_Serif_Devanagari({
  subsets: ['devanagari'],
  weight: ['400', '600'],
  variable: '--font-noto-serif-dev',
  display: 'swap',
  preload: false,
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Premium Ayurvedic Wellness`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ['Ayurvedic products', 'herbal supplements', 'ashwagandha', 'shilajit', 'safed musli', 'Ayurveda India', 'COD ayurvedic', 'men wellness', 'women wellness', 'digestive health', 'Hakim Sahab'],
  openGraph: {
    type: 'website', locale: 'en_IN', url: siteConfig.url, siteName: siteConfig.name,
    title: `${siteConfig.name} — Premium Ayurvedic Wellness`,
    description: siteConfig.description,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} — Premium Ayurvedic Wellness`,
    description: siteConfig.description,
    images: ['/og-image.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#1F3D2B',
}

// Browser extensions (e.g. Bitdefender) stamp these attributes onto every element before React hydrates,
// which floods dev with hydration-mismatch warnings. Dev-only; production React doesn't report attribute mismatches.
const STRIP_EXTENSION_ATTRS = `(function(){var a=['bis_skin_checked','bis_register'];new MutationObserver(function(m){for(var i=0;i<m.length;i++){var t=m[i].target;if(t.hasAttribute&&t.hasAttribute(m[i].attributeName))t.removeAttribute(m[i].attributeName)}}).observe(document.documentElement,{attributes:true,subtree:true,attributeFilter:a})})()`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${cormorant.variable} ${dmSans.variable} ${notoSerifDev.variable}`} suppressHydrationWarning>
      {process.env.NODE_ENV !== 'production' && (
        <head>
          <script dangerouslySetInnerHTML={{ __html: STRIP_EXTENSION_ATTRS }} />
        </head>
      )}
      <body style={{ backgroundColor: 'var(--color-ivory)', color: 'var(--color-charcoal)' }} suppressHydrationWarning>
        <noscript>
          <style>{'[data-reveal]{opacity:1!important;transform:none!important}'}</style>
        </noscript>
        {/* Skip to content */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:rounded-md focus:px-4 focus:py-2 focus:text-sm focus:font-medium"
          style={{ backgroundColor: 'var(--color-forest)', color: 'var(--color-ivory)' }}
        >
          Skip to content
        </a>

        <AnnouncementBar />
        <Header />

        <main id="main-content">
          {children}
        </main>

        <Footer />
        <WhatsAppButton />
        <CartDrawer />

        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: 'var(--color-forest)',
              color: 'var(--color-ivory)',
              border: '1px solid color-mix(in oklch, var(--color-forest) 80%, white)',
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '0.875rem',
            },
          }}
        />
      </body>
    </html>
  )
}
