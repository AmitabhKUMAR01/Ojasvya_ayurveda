import type { Metadata } from 'next'
import { siteConfig } from '@/lib/siteConfig'
import { getFeatured } from '@/lib/api/products'
import { getFeaturedReviews } from '@/data/reviews'

// Home page sections
import HomeHero from '@/components/home/HomeHero'
import TrustStrip from '@/components/home/TrustStrip'
import ShopByCollection from '@/components/home/ShopByCollection'
import IngredientStory from '@/components/home/IngredientStory'
import FeaturedProducts from '@/components/home/FeaturedProducts'
import VideoBlock from '@/components/home/VideoBlock'
import ConsultationSection from '@/components/home/ConsultationSection'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import ReviewsCarousel from '@/components/home/ReviewsCarousel'
import LeadForm from '@/components/home/LeadForm'

export const metadata: Metadata = {
  title: `${siteConfig.name} — Premium Ayurvedic Wellness`,
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.name} — Premium Ayurvedic Wellness`,
    description: siteConfig.description,
    url: siteConfig.url,
  },
}

// Revalidate every 30 minutes
export const revalidate = 1800

export default async function HomePage() {
  const [featuredProducts, featuredReviews] = await Promise.all([
    getFeatured(8),
    Promise.resolve(getFeaturedReviews(8)),
  ])

  return (
    <>
      {/* 1. Hero — art-directed full-bleed */}
      <HomeHero />

      {/* 2. Trust strip */}
      <TrustStrip />

      {/* 3. Shop by collection — editorial tile grid */}
      <ShopByCollection />

      {/* 4. Ingredient story — Ayurveda Ki Taaqat */}
      <IngredientStory />

      {/* 5. Featured products */}
      <FeaturedProducts products={featuredProducts} />

      {/* 6. Brand video block */}
      <VideoBlock />

      {/* 7. Free consultation section */}
      <ConsultationSection />

      {/* 8. Why choose us */}
      <WhyChooseUs />

      {/* 9. Customer reviews carousel */}
      <ReviewsCarousel reviews={featuredReviews} />

      {/* 10. Lead form */}
      <LeadForm />
    </>
  )
}
