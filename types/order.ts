export type OrderStatus =
  | 'placed'
  | 'confirmed'
  | 'shipped'
  | 'out-for-delivery'
  | 'delivered'
  | 'cancelled'

export interface OrderTimeline {
  status: OrderStatus
  label: string
  timestamp: string | null
  completed: boolean
}

export interface OrderItem {
  productId: string
  slug: string
  title: string
  price: number
  quantity: number
  image: string
}

export interface Order {
  orderId: string
  status: OrderStatus
  items: OrderItem[]
  subtotal: number
  shippingCost: number
  total: number
  fullName: string
  mobile: string
  email?: string
  addressLine1: string
  addressLine2?: string
  landmark?: string
  pincode: string
  city: string
  state: string
  orderNotes?: string
  createdAt: string
  estimatedDelivery: string
  timeline: OrderTimeline[]
}
