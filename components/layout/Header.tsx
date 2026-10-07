'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, ShoppingCart, Search, User, ChevronDown, Phone, MessageCircle, Package, ArrowRight } from 'lucide-react'
import { siteConfig } from '@/lib/siteConfig'
import { useCartStore } from '@/store/cart'
import { getWhatsAppUrl } from '@/lib/utils'

const navLinks = [
  { href: '/', label: 'Home' },
  {
    href: '/collections/all',
    label: 'Products',
    children: [
      { href: '/collections/all', label: 'All Products' },
      { href: '/collections/mens-vitamins-supplements', label: "Men's Supplements" },
      { href: '/collections/male-stamina-kits', label: "Men's Stamina Kits" },
      { href: '/collections/womens-supplements', label: "Women's Supplements" },
      { href: '/collections/digestive-health-detox', label: 'Digestive & Detox' },
      { href: '/collections/combos', label: 'Combo Kits' },
    ],
  },
  { href: '/about', label: 'About Us' },
  { href: '/blogs', label: 'Blogs' },
  { href: '/contact', label: 'Contact Us' },
]

function CartCount() {
  const totalItems = useCartStore((state) => state.getTotalItems())
  if (totalItems === 0) return null
  return (
    <span className="absolute -top-0.5 -right-0.5 bg-gold text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center leading-none" aria-hidden="true">
      {totalItems > 9 ? '9+' : totalItems}
    </span>
  )
}

export default function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(true)
  const { openDrawer } = useCartStore()

  const waUrl = getWhatsAppUrl(siteConfig.whatsappNumber, siteConfig.whatsappMessage)

  useEffect(() => {
    const handleScroll = () => {
      if (isMobileMenuOpen) return // Don't hide header if mobile menu is open
      const y = window.scrollY
      setIsScrolled(y > 10)
      setIsVisible(y < lastScrollY || y < 80)
      setLastScrollY(y)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY, isMobileMenuOpen])

  // Close mobile menu and dropdowns on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
    setOpenDropdown(null)
  }, [pathname])

  // Prevent background body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const isActive = (href: string) => pathname === href || (href !== '/' && pathname.startsWith(href))

  return (
    <header
      style={{ backgroundColor: isScrolled ? 'color-mix(in oklch, var(--color-ivory) 95%, transparent)' : 'var(--color-ivory)' }}
      className={`sticky top-0 z-50 w-full transition-all duration-300 border-b border-gold/10 ${isScrolled ? 'backdrop-blur-sm shadow-sm' : ''} ${isVisible || isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0" aria-label="Ojasvya Ayurveda — Home">
            <Image
              src={siteConfig.logo}
              alt="Ojasvya Ayurveda — Pure Herbs, Better Life"
              width={140}
              height={56}
              className="h-10 md:h-14 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors hover:text-forest hover:bg-sage/50 ${isActive(link.href) ? 'text-forest font-semibold' : 'text-charcoal/70'}`}
                    aria-expanded={openDropdown === link.label}
                    aria-haspopup="true"
                  >
                    {link.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === link.label ? 'rotate-180' : ''}`} />
                  </button>
                  {openDropdown === link.label && (
                    <div className="absolute top-full left-0 pt-1 min-w-[220px]">
                      <div className="animate-dropdown bg-ivory border border-gold/20 rounded-lg shadow-lg py-1 overflow-hidden">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm text-charcoal hover:bg-sage/60 hover:text-forest hover:pl-5 transition-all duration-200"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors hover:text-forest hover:bg-sage/50 ${isActive(link.href) ? 'text-forest font-semibold' : 'text-charcoal/70'}`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-1">
            <Link
              href="/search"
              className="p-2 rounded-md hover:bg-sage/50 transition-colors text-charcoal/70 hover:text-forest"
              aria-label="Search products"
            >
              <Search className="w-5 h-5" />
            </Link>
            <Link
              href="/account"
              className="hidden sm:flex p-2 rounded-md hover:bg-sage/50 transition-colors text-charcoal/70 hover:text-forest"
              aria-label="My account"
            >
              <User className="w-5 h-5" />
            </Link>
            <button
              onClick={openDrawer}
              className="relative p-2 rounded-md hover:bg-sage/50 transition-colors text-charcoal/70 hover:text-forest"
              aria-label="Shopping cart"
            >
              <ShoppingCart className="w-5 h-5" />
              <CartCount />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              className="lg:hidden p-2 rounded-md hover:bg-sage/50 transition-colors text-charcoal"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Full-Height Menu Drawer */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden absolute top-full left-0 right-0 w-full bg-ivory border-t border-gold/15 shadow-2xl overflow-y-auto z-50 flex flex-col"
          style={{ height: 'calc(100dvh - 64px)' }}
          role="dialog"
          aria-label="Navigation menu"
        >
          <nav className="container mx-auto px-5 py-6 flex flex-col flex-1 divide-y divide-gold/10">
            {/* Main Links */}
            <div className="flex flex-col pb-4 space-y-1">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`py-3 px-3 text-lg font-serif font-medium rounded-lg transition-colors ${isActive('/') && pathname === '/' ? 'bg-forest/10 text-forest font-semibold' : 'text-charcoal hover:bg-sage/30'}`}
              >
                Home
              </Link>

              {/* Products Accordion */}
              <div>
                <button
                  onClick={() => setIsMobileProductsOpen((prev) => !prev)}
                  className={`w-full flex items-center justify-between py-3 px-3 text-lg font-serif font-medium rounded-lg transition-colors ${isActive('/collections') ? 'text-forest' : 'text-charcoal hover:bg-sage/30'}`}
                  aria-expanded={isMobileProductsOpen}
                >
                  <span>Products</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-200 text-charcoal/60 ${isMobileProductsOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                {isMobileProductsOpen && (
                  <div className="pl-4 pr-2 py-1 space-y-1 bg-sage/20 rounded-xl my-1 border border-gold/10">
                    {navLinks
                      .find((l) => l.label === 'Products')
                      ?.children?.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`flex items-center justify-between py-2.5 px-3 text-sm rounded-md transition-colors ${pathname === child.href ? 'text-forest font-semibold bg-forest/10' : 'text-charcoal/80 hover:text-forest hover:bg-sage/40'}`}
                        >
                          <span>{child.label}</span>
                          <ArrowRight className="w-3.5 h-3.5 text-charcoal/40" />
                        </Link>
                      ))}
                  </div>
                )}
              </div>

              <Link
                href="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`py-3 px-3 text-lg font-serif font-medium rounded-lg transition-colors ${isActive('/about') ? 'bg-forest/10 text-forest font-semibold' : 'text-charcoal hover:bg-sage/30'}`}
              >
                About Us
              </Link>
              <Link
                href="/blogs"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`py-3 px-3 text-lg font-serif font-medium rounded-lg transition-colors ${isActive('/blogs') ? 'bg-forest/10 text-forest font-semibold' : 'text-charcoal hover:bg-sage/30'}`}
              >
                Blogs
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`py-3 px-3 text-lg font-serif font-medium rounded-lg transition-colors ${isActive('/contact') ? 'bg-forest/10 text-forest font-semibold' : 'text-charcoal hover:bg-sage/30'}`}
              >
                Contact Us
              </Link>
              <Link
                href="/track-order"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`py-3 px-3 text-lg font-serif font-medium rounded-lg transition-colors ${isActive('/track-order') ? 'bg-forest/10 text-forest font-semibold' : 'text-charcoal hover:bg-sage/30'}`}
              >
                Track Order
              </Link>
            </div>

            {/* Quick Actions & Help */}
            <div className="pt-6 pb-6 space-y-4">
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="flex items-center justify-center gap-2.5 w-full bg-[#25D366] text-white py-3.5 px-4 rounded-xl font-medium text-sm shadow-sm cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                Chat with Hakim Sahab
              </a>

              <div className="rounded-xl bg-sage/30 p-4 border border-gold/15 space-y-2 text-xs text-charcoal/80">
                <div className="flex items-center gap-2 text-forest font-semibold">
                  <Package className="w-4 h-4" />
                  <span>Free Shipping & Cash on Delivery Across India</span>
                </div>
                {siteConfig.phones.length > 0 && (
                  <>
                    <p className="text-charcoal/60">
                      Questions? Call us directly:
                    </p>
                    {siteConfig.phones.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone}`}
                        className="flex items-center gap-2 text-sm font-semibold text-forest hover:text-gold transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5" /> +91 {phone}
                      </a>
                    ))}
                  </>
                )}
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
