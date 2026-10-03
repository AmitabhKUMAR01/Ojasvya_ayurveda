import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { getAllBlogPosts, getBlogPostBySlug } from '@/data/blogs'
import { siteConfig } from '@/lib/siteConfig'
import { Clock, Calendar, ArrowLeft, Share2, Tag, BookOpen } from 'lucide-react'

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts()
  return posts.map((p) => ({
    slug: p.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} | ${siteConfig.name} Blog`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | ${siteConfig.name}`,
      description: post.excerpt,
      images: [
        {
          url: post.coverImage.src,
          alt: post.coverImage.alt,
        },
      ],
    },
  }
}

export const revalidate = 1800

export default async function BlogPostDetailPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const allPosts = getAllBlogPosts()
  const recentPosts = allPosts.filter((p) => p.id !== post.id).slice(0, 3)

  return (
    <article className="min-h-screen bg-ivory py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-4xl space-y-8">
        {/* Back Link */}
        <div>
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-xs font-semibold text-forest hover:text-gold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to all articles
          </Link>
        </div>

        {/* Article Meta Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-forest/10 text-forest text-xs font-semibold uppercase tracking-wider">
              {post.category}
            </span>
            <span className="text-xs text-charcoal/50 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-gold" /> {post.readingTimeMinutes} min read
            </span>
            <span className="text-xs text-charcoal/50 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-gold" /> {post.publishedAt}
            </span>
          </div>

          <h1 className="font-serif text-3xl md:text-5xl text-charcoal leading-tight">
            {post.title}
          </h1>

          <p className="text-sm md:text-base text-charcoal/70 leading-relaxed italic border-l-2 border-gold pl-4 py-1">
            {post.excerpt}
          </p>
        </div>

        {/* Cover Image */}
        <div className="relative rounded-3xl overflow-hidden h-72 md:h-[450px] w-full border border-gold/15 shadow-md">
          <Image
            src={post.coverImage.src}
            alt={post.coverImage.alt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 896px"
            className="object-cover"
          />
        </div>

        {/* Article Body Content */}
        <div className="p-6 md:p-10 rounded-3xl bg-ivory border border-gold/15 shadow-xs space-y-6 text-charcoal/85 text-sm md:text-base leading-relaxed prose max-w-none">
          <div
            dangerouslySetInnerHTML={{ __html: post.content }}
            className="space-y-4 [&>h1]:font-serif [&>h1]:text-2xl [&>h1]:text-charcoal [&>h2]:font-serif [&>h2]:text-xl [&>h2]:text-forest [&>h2]:mt-6 [&>p]:leading-relaxed [&>ul]:space-y-2 [&>ul]:list-disc [&>ul]:pl-5 [&>em]:text-charcoal/60"
          />
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex items-center gap-2 flex-wrap pt-2">
            <Tag className="w-3.5 h-3.5 text-gold" />
            <span className="text-xs text-charcoal/50">Topics:</span>
            {post.tags.map((t) => (
              <span
                key={t}
                className="text-xs px-2.5 py-1 rounded-md bg-sage/30 text-charcoal/70 border border-gold/10"
              >
                #{t}
              </span>
            ))}
          </div>
        )}

        {/* Recent Articles Rail */}
        {recentPosts.length > 0 && (
          <div className="pt-12 border-t border-gold/15 space-y-6">
            <h2 className="font-serif text-2xl text-charcoal">More from the Herbal Apothecary</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recentPosts.map((p) => (
                <Link
                  key={p.id}
                  href={`/blogs/${p.slug}`}
                  className="p-4 rounded-2xl bg-sage/20 border border-gold/10 space-y-2 block group hover:bg-sage/30 transition-colors"
                >
                  <span className="text-[10px] font-bold text-forest uppercase tracking-wider">{p.category}</span>
                  <h3 className="font-serif text-base text-charcoal font-medium line-clamp-2 group-hover:text-forest transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-xs text-charcoal/60 line-clamp-2">{p.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  )
}
