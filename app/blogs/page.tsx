import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { getAllBlogPosts } from '@/data/blogs'
import { siteConfig } from '@/lib/siteConfig'
import { Clock, Calendar, ArrowRight, BookOpen } from 'lucide-react'

export const metadata: Metadata = {
  title: `Ayurvedic Wellness Blog | ${siteConfig.name}`,
  description:
    'Read articles, herb spotlights, classical formulation guides, and daily Ayurvedic lifestyle tips curated by Ojasvya Ayurveda.',
}

export const revalidate = 1800

export default function BlogsPage() {
  const blogs = getAllBlogPosts()
  const featuredBlog = blogs.find((b) => b.featured) || blogs[0]
  const otherBlogs = blogs.filter((b) => b.id !== featuredBlog?.id)

  return (
    <div className="min-h-screen bg-ivory py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-6xl space-y-12">
        {/* Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <p className="font-sans text-xs uppercase tracking-widest text-gold font-semibold">Herbal Knowledge Hub</p>
          <h1 className="font-serif text-3xl md:text-5xl text-charcoal">Ayurvedic Articles & Insights</h1>
          <p className="text-sm text-charcoal/70">
            Ancient wisdom explained for modern living. Learn about herbs, Agni, stamina, and holistic wellness.
          </p>
        </div>

        {/* Featured Blog Hero Card */}
        {featuredBlog && (
          <div className="rounded-3xl overflow-hidden bg-ivory border border-gold/15 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7 relative h-72 lg:h-96 w-full">
              <Image
                src={featuredBlog.coverImage.src}
                alt={featuredBlog.coverImage.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
            </div>
            <div className="lg:col-span-5 p-6 lg:p-8 space-y-4">
              <div className="flex items-center gap-3 text-xs text-charcoal/60">
                <span className="px-3 py-1 rounded-full bg-forest/10 text-forest font-semibold uppercase tracking-wider text-[10px]">
                  {featuredBlog.category}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-gold" /> {featuredBlog.readingTimeMinutes} min read
                </span>
              </div>
              <h2 className="font-serif text-2xl lg:text-3xl text-charcoal leading-snug">
                <Link href={`/blogs/${featuredBlog.slug}`} className="hover:text-forest transition-colors">
                  {featuredBlog.title}
                </Link>
              </h2>
              <p className="text-xs md:text-sm text-charcoal/70 leading-relaxed line-clamp-3">
                {featuredBlog.excerpt}
              </p>
              <div className="pt-2">
                <Link
                  href={`/blogs/${featuredBlog.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-forest hover:text-gold transition-colors"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pt-6">
          {otherBlogs.map((post) => (
            <article
              key={post.id}
              className="rounded-2xl overflow-hidden bg-ivory border border-gold/15 shadow-xs flex flex-col group hover:shadow-md transition-shadow"
            >
              <Link href={`/blogs/${post.slug}`} className="relative h-52 w-full overflow-hidden bg-sage/20 block">
                <Image
                  src={post.coverImage.src}
                  alt={post.coverImage.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-ivory/90 backdrop-blur-xs text-forest text-[11px] font-semibold">
                  {post.category}
                </span>
              </Link>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-[11px] text-charcoal/50">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-gold" /> {post.publishedAt}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-gold" /> {post.readingTimeMinutes} min
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-medium text-charcoal leading-snug group-hover:text-forest transition-colors">
                    <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="text-xs text-charcoal/70 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-gold/10">
                  <Link
                    href={`/blogs/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-forest hover:text-gold transition-colors"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
