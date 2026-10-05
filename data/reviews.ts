// TODO: Replace with real reviews from backend API
import type { Review } from '@/types/review'

export const reviews: Review[] = [
  {
    id: 'rev_001', productId: 'prod_006', productSlug: 'bigg-bull-capsules',
    productTitle: 'BIGG BULL Capsules', reviewerInitials: 'RK', reviewerName: 'Rajesh K.',
    rating: 5, title: 'Bahut achha product hai',
    body: 'Maine 2 mahine se use kar raha hoon. Energy level kaafi better feel ho raha hai. Packaging bhi seedha aur discreet thi. COD ka option bhi bohot convenient tha.',
    createdAt: '2024-06-15', verifiedPurchase: true, helpfulCount: 24,
  },
  {
    id: 'rev_002', productId: 'prod_011', productSlug: 'alpha-performance-kit',
    productTitle: 'Alpha Performance Kit', reviewerInitials: 'AS', reviewerName: 'Amit S.',
    rating: 5, title: 'Worth every rupee',
    body: 'Hakim Sahab se WhatsApp par baat ki, unhone sahi product suggest kiya. 6 hafte mein fark dikhne laga. Delivery bhi fast thi aur packaging discreet thi.',
    createdAt: '2024-07-02', verifiedPurchase: true, helpfulCount: 31,
  },
  {
    id: 'rev_003', productId: 'prod_001', productSlug: 'agnimukh-churan',
    productTitle: 'Agnimukh Churan', reviewerInitials: 'MV', reviewerName: 'Mahesh V.',
    rating: 4, title: 'Good digestive support',
    body: 'Khaana khane ke baad jo heaviness feel hoti thi, usme kaafi relief mila. Natural ingredients hain. Consistent use karo tab fark dikhta hai.',
    createdAt: '2024-05-20', verifiedPurchase: true, helpfulCount: 18,
  },
  {
    id: 'rev_004', productId: 'prod_028', productSlug: 'shatavari-wellness',
    productTitle: 'Shatavari Wellness Capsules', reviewerInitials: 'PS', reviewerName: 'Priya S.',
    rating: 5, title: "Excellent women's supplement",
    body: 'I have been using this for 3 months and feel much better overall. The packaging is very discreet which I appreciate. Hakim Sahab was also very helpful in guiding me on the right products.',
    createdAt: '2024-07-18', verifiedPurchase: true, helpfulCount: 22,
  },
  {
    id: 'rev_005', productId: 'prod_030', productSlug: 'shilajit-pure-resin',
    productTitle: 'Shilajit Pure Resin', reviewerInitials: 'VT', reviewerName: 'Vikram T.',
    rating: 5, title: 'Genuine product, fast delivery',
    body: 'Pehle darr tha ki online genuine hoga ya nahi. But packaging aur product quality dekh ke satisfied hoon. Dissolves perfectly in warm water. Will reorder.',
    createdAt: '2024-08-01', verifiedPurchase: true, helpfulCount: 19,
  },
  {
    id: 'rev_006', productId: 'prod_017', productSlug: 'liver-kit',
    productTitle: 'Liver Kit', reviewerInitials: 'SK', reviewerName: 'Suresh K.',
    rating: 4, title: 'Good liver support combo',
    body: 'Doctor ne bola tha liver health pe dhyan do. Ojasvya Ayurveda ki Liver Kit try ki. 2 mahine baad feel much better. Natural approach pasand aaya.',
    createdAt: '2024-06-28', verifiedPurchase: true, helpfulCount: 15,
  },
  {
    id: 'rev_007', productId: 'prod_029', productSlug: 'ashwagandha-gold',
    productTitle: 'Ashwagandha Gold Capsules', reviewerInitials: 'NR', reviewerName: 'Neha R.',
    rating: 5, title: 'Best Ashwagandha I have tried',
    body: 'Quality is excellent. I feel more energetic and my sleep has improved too. COD was available so I tried it without hesitation. Will definitely order again.',
    createdAt: '2024-08-10', verifiedPurchase: true, helpfulCount: 27,
  },
  {
    id: 'rev_008', productId: 'prod_026', productSlug: 'ultimate-mens-wellness-kit',
    productTitle: "Ultimate Men's Wellness Kit", reviewerInitials: 'DM', reviewerName: 'Deepak M.',
    rating: 5, title: 'Life changing, highly recommend',
    body: 'Bahut soch samajh ke order kiya. WhatsApp pe Hakim Sahab se puri baat ki. Unhone jo recommend kiya, result aaya. 3 mahine ki journey rahi but fark clearly hai. COD bohot helpful tha.',
    createdAt: '2024-09-01', verifiedPurchase: true, helpfulCount: 42,
  },
]

export function getProductReviews(productId: string): Review[] {
  return reviews.filter((r) => r.productId === productId)
}
export function getFeaturedReviews(limit = 6): Review[] {
  return reviews
    .filter((r) => r.verifiedPurchase && r.rating >= 4)
    .sort((a, b) => (b.helpfulCount ?? 0) - (a.helpfulCount ?? 0))
    .slice(0, limit)
}
