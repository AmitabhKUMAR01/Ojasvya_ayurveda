export interface Review {
  id: string
  productId: string
  productSlug: string
  productTitle: string
  reviewerInitials: string
  reviewerName: string // First name + last initial only, e.g. "Rajesh K."
  rating: number // 1-5
  title: string
  body: string
  createdAt: string
  verifiedPurchase: boolean // set by backend; UI shows badge when true
  helpfulCount?: number
}
