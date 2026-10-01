export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string // HTML string
  coverImage: { src: string; alt: string }
  category: string
  tags: string[]
  readingTimeMinutes: number
  author: string
  publishedAt: string
  featured: boolean
}
