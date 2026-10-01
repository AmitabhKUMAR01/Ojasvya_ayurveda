import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/siteConfig'
import { getAllProducts } from '@/data/products'
import { getAllBlogPosts } from '@/data/blogs'
import { collections } from '@/data/collections'

export default function sitemap(): MetadataRoute.Sitemap {
  const products = getAllProducts()
  const blogs = getAllBlogPosts()
  const baseUrl = siteConfig.url

  const staticPages = [
    '', '/collections/all', '/about', '/contact', '/blogs', '/track-order', '/search',
    '/policies/privacy-policy', '/policies/refund-policy', '/policies/terms-of-service',
    '/policies/shipping-policy', '/policies/contact-information',
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.8,
  }))

  const collectionPages = collections.map((c) => ({
    url: `${baseUrl}/collections/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  const productPages = products.map((p) => ({
    url: `${baseUrl}/products/${p.slug}`,
    lastModified: new Date(p.createdAt),
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }))

  const blogPages = blogs.map((b) => ({
    url: `${baseUrl}/blogs/${b.slug}`,
    lastModified: new Date(b.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...collectionPages, ...productPages, ...blogPages]
}
