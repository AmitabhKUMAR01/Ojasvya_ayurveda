'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, ShoppingCart, Search, User, ChevronDown, Phone } from 'lucide-react'
import { siteConfig } from '@/lib/siteConfig'
import { useCartStore } from '@/store/cart'

const navLinks = [
  { href: '/', label: 'Home' },
  {
    href: '/collections/all', label: 'Products',
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
  const { openDrawer } = useCartStore()

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      setIsScrolled(y > 10)
      setIsVisible(y < lastScrollY || y < 80)
      setLastScrollY(y)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setOpenDropdown(null)
  }, [pathname])

  const isActive = (href: string) => pathname === href || (href !== '/' && pathname.startsWith(href))

  return (
    <header
      style={{ backgroundColor: isScrolled ? 'color-mix(in oklch, var(--color-ivory) 95%, transparent)' : 'var(--color-ivory)' }}
      className={`sticky top-0 z-50 w-full transition-all duration-300 border-b border-gold/10 ${isScrolled ? 'backdrop-blur-sm shadow-sm' : ''} ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
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
                <div key={link.href} className="relative"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors hover:text-forest hover:bg-sage/50 ${isActive(link.href) ? 'text-forest font-semibold' : 'text-charcoal/70'}`}
                    aria-expanded={openDropdown === link.label} aria-haspopup="true"
                  >
                    {link.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${openDropdown === link.label ? 'rotate-180' : ''}`} />
                  </button>
                  {openDropdown === link.label && (
                    <div className="absolute top-full left-0 pt-1 min-w-[220px]">
                      <div className="animate-dropdown bg-ivory border border-gold/20 rounded-lg shadow-lg py-1 overflow-hidden">
                        {link.children.map((child) => (
                          <Link key={child.href} href={child.href} className="block px-4 py-2.5 text-sm text-charcoal hover:bg-sage/60 hover:text-forest hover:pl-5 transition-all duration-200">
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href} href={link.href}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors hover:text-forest hover:bg-sage/50 ${isActive(link.href) ? 'text-forest font-semibold' : 'text-charcoal/70'}`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-1">
            <Link href="/search" className="p-2 rounded-md hover:bg-sage/50 transition-colors text-charcoal/70 hover:text-forest" aria-label="Search products">
              <Search className="w-5 h-5" />
            </Link>
            <Link href="/account" className="hidden sm:flex p-2 rounded-md hover:bg-sage/50 transition-colors text-charcoal/70 hover:text-forest" aria-label="My account">
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
              className="lg:hidden p-2 rounded-md hover:bg-sage/50 transition-colors"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="animate-dropdown lg:hidden fixed inset-0 top-16 bg-ivory z-40 overflow-y-auto" role="dialog" aria-label="Navigation menu">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-1">
            {navLinks.map((link) => (
              <React.Fragment key={link.href}>
                <Link href={link.href} className={`py-4 px-3 text-lg font-serif font-medium border-b border-gold/10 transition-colors ${isActive(link.href) ? 'text-forest' : 'text-charcoal hover:text-forest'}`}>
                  {link.label}
                </Link>
                {link.children && (
                  <div className="pl-4 flex flex-col gap-0.5 mb-2">
                    {link.children.map((child) => (
                      <Link key={child.href} href={child.href} className="py-2.5 px-3 text-sm text-charcoal/70 hover:text-forest transition-colors">
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </React.Fragment>
            ))}
            <div className="mt-8 pt-6 border-t border-gold/20">
              <p className="text-xs text-charcoal/50 uppercase tracking-wider mb-3 font-sans">Contact</p>
              {siteConfig.phones.map((phone) => (
                <a key={phone} href={`tel:${phone}`} className="flex items-center gap-2 py-2 text-sm text-charcoal/70 hover:text-forest transition-colors">
                  <Phone className="w-4 h-4" /> {phone}
                </a>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
