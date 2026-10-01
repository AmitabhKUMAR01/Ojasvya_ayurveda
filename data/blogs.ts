import type { BlogPost } from '@/types/blog'
import { photos } from '@/lib/images'

export const blogPosts: BlogPost[] = [
  {
    id: 'blog_001',
    slug: 'ashwagandha-benefits-men',
    title: 'Ashwagandha for Men: Traditional Ayurvedic Wisdom for Modern Life',
    excerpt: 'Discover how this ancient Ayurvedic herb has been traditionally used to support male vitality and energy for thousands of years.',
    content: `<h1>Ashwagandha for Men: Traditional Ayurvedic Wisdom for Modern Life</h1>
<p>Ashwagandha (Withania somnifera) — known as the "king of Ayurvedic herbs" — has been a cornerstone of traditional Indian medicine for over 3,000 years.</p>
<h2>What the Texts Say</h2>
<p>Classical Ayurvedic texts like the Charaka Samhita and Ashtanga Hridayam mention Ashwagandha extensively as a Rasayana — a rejuvenating herb for overall wellness and longevity. It is classified as a Balya (strength-promoting) and Vrishya (vitality-supporting) herb.</p>
<h2>Traditional Uses</h2>
<p>In classical Ayurveda, Ashwagandha has been traditionally used to support energy and physical endurance, healthy stress responses, overall male vitality, sleep quality, and healthy weight management.</p>
<p><em>Disclaimer: These statements have not been evaluated by any regulatory authority. This herb is not intended to diagnose, treat, cure, or prevent any disease.</em></p>
<h2>How It Has Been Used Traditionally</h2>
<p>The most common traditional preparation involves taking Ashwagandha root powder with warm milk. This combination — called Ksheerapaka in Ayurveda — is thought to enhance the herb's beneficial properties.</p>
<h2>A Word of Caution</h2>
<p>While Ashwagandha has a long history of traditional use, it is not suitable for everyone. Those with thyroid conditions, autoimmune disorders, or those taking certain medications should consult a qualified practitioner before use.</p>`,
    coverImage: photos.ashwagandhaRoot,
    category: 'Ingredients', tags: ['ashwagandha', 'mens-health', 'adaptogens', 'ayurveda'],
    readingTimeMinutes: 6, author: 'Herbal Hand Team', publishedAt: '2024-05-15', featured: true,
  },
  {
    id: 'blog_002',
    slug: 'digestive-health-ayurveda',
    title: 'Digestion According to Ayurveda: Understanding Your Agni',
    excerpt: 'In Ayurveda, a healthy digestive fire (Agni) is considered the cornerstone of good health. Here is what the classical texts tell us.',
    content: `<h1>Digestion According to Ayurveda: Understanding Your Agni</h1>
<p>In classical Ayurveda, Agni — the digestive and metabolic fire — is considered the most important factor in maintaining good health. Charaka, the father of Ayurvedic medicine, famously stated: <em>"The root cause of all diseases is weak Agni."</em></p>
<h2>What is Agni?</h2>
<p>Agni in Ayurveda refers not just to the digestive fire in the stomach, but to all metabolic processes at every level of the body. There are 13 types of Agni described in classical Ayurvedic texts.</p>
<h2>Signs of Healthy vs. Imbalanced Agni</h2>
<p>Signs of healthy Agni include regular comfortable elimination, genuine hunger at meal times, good energy levels after eating, and a clear mind. Signs of imbalanced Agni include post-meal heaviness, irregular elimination, and fatigue after eating.</p>
<p><em>Always consult a qualified Ayurvedic practitioner before starting any herbal regimen.</em></p>`,
    coverImage: photos.fennel,
    category: 'Wellness', tags: ['digestion', 'agni', 'ayurveda', 'gut-health'],
    readingTimeMinutes: 5, author: 'Herbal Hand Team', publishedAt: '2024-06-01', featured: true,
  },
  {
    id: 'blog_003',
    slug: 'shilajit-the-destroyer-of-weakness',
    title: "Shilajit: Ayurveda's 'Destroyer of Weakness'",
    excerpt: "The name Shilajit translates to 'destroyer of weakness' in Sanskrit. This ancient mineral-rich substance has a fascinating story.",
    content: `<h1>Shilajit: Ayurveda's 'Destroyer of Weakness'</h1>
<p>Shilajit — derived from the Sanskrit words <em>Shila</em> (rock) and <em>Jit</em> (conqueror) — is sometimes translated as "conqueror of mountains" or "destroyer of weakness." This dark, tar-like substance exudes from high-altitude rocks, primarily in the Himalayas, during the warmer months.</p>
<h2>Formation and Sourcing</h2>
<p>Shilajit forms over centuries from the slow decomposition of plant matter compressed between mountain rocks. The resulting substance is rich in fulvic acid, minerals, and other bioactive compounds.</p>
<h2>Traditional Ayurvedic Use</h2>
<p>In classical Ayurveda, Shilajit is classified as a Rasayana — a class of substances used to support rejuvenation and longevity.</p>
<p><em>Disclaimer: These are traditional uses documented in Ayurvedic texts. Modern clinical evidence is limited. Consult a practitioner before use.</em></p>`,
    coverImage: photos.shilajit,
    category: 'Ingredients', tags: ['shilajit', 'rasayana', 'minerals', 'mens-health'],
    readingTimeMinutes: 7, author: 'Herbal Hand Team', publishedAt: '2024-06-20', featured: false,
  },
  {
    id: 'blog_004',
    slug: 'shatavari-womens-wellness',
    title: "Shatavari: The Queen of Ayurvedic Herbs for Women's Wellness",
    excerpt: "Shatavari has been called the 'Queen of Herbs' in Ayurveda. Learn about its traditional role in women's health.",
    content: `<h1>Shatavari: The Queen of Ayurvedic Herbs for Women's Wellness</h1>
<p>Shatavari (Asparagus racemosus) — often called the "Queen of Herbs" in Ayurveda — has been a cornerstone of women's wellness in traditional Indian medicine for thousands of years.</p>
<h2>Classical Ayurvedic Classification</h2>
<p>In classical Ayurvedic texts, Shatavari is classified as a Rasayana (rejuvenating herb), Vrishya (vitality-supporting herb), and Stanya (traditionally associated with lactation support).</p>
<h2>Traditional Uses</h2>
<p>Classical Ayurvedic texts mention Shatavari for supporting overall female vitality and energy, healthy hormonal balance, digestive comfort, and general wellness and longevity.</p>
<p><em>Disclaimer: These are traditional uses. Individual results vary. Consult a practitioner.</em></p>`,
    coverImage: photos.shatavariFlowers,
    category: "Women's Wellness", tags: ['shatavari', 'womens-health', 'hormonal', 'ayurveda'],
    readingTimeMinutes: 6, author: 'Herbal Hand Team', publishedAt: '2024-07-05', featured: false,
  },
]

export function getBlogPostBySlug(slug: string): BlogPost | undefined { return blogPosts.find((b) => b.slug === slug) }
export function getFeaturedBlogPosts(limit = 3): BlogPost[] { return blogPosts.filter((b) => b.featured).slice(0, limit) }
export function getAllBlogPosts(): BlogPost[] { return blogPosts }
export function getBlogPostsByCategory(category: string): BlogPost[] { return blogPosts.filter((b) => b.category === category) }
