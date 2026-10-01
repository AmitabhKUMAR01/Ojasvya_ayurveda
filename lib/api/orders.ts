import { sleep, generateOrderId } from '@/lib/utils'
import type { CreateOrderData } from '@/lib/schemas'
import type { Order, OrderTimeline } from '@/types/order'

export interface OrderResponse {
  orderId: string
  status: 'confirmed' | 'failed'
  estimatedDelivery: string
  message: string
}

const mockOrders: Map<string, Order> = new Map()

function buildTimeline(status: Order['status']): OrderTimeline[] {
  const allStatuses: Order['status'][] = ['placed', 'confirmed', 'shipped', 'out-for-delivery', 'delivered']
  const currentIndex = allStatuses.indexOf(status)
  const now = new Date()
  const labels: Record<string, string> = {
    placed: 'Order Placed', confirmed: 'Order Confirmed',
    shipped: 'Shipped', 'out-for-delivery': 'Out for Delivery', delivered: 'Delivered',
  }
  return allStatuses.map((s, i) => ({
    status: s,
    label: labels[s],
    completed: i <= currentIndex,
    timestamp: i <= currentIndex
      ? new Date(now.getTime() - (currentIndex - i) * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
      : null,
  }))
}

export async function createOrder(data: CreateOrderData): Promise<OrderResponse> {
  await sleep(1200)
  const orderId = generateOrderId()
  const now = new Date()
  const deliveryDays = 5 + Math.floor(Math.random() * 3)
  const deliveryDate = new Date(now.getTime() + deliveryDays * 24 * 60 * 60 * 1000)
  const estimatedDelivery = deliveryDate.toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })

  const order: Order = {
    orderId, status: 'placed',
    items: data.items, subtotal: data.subtotal, shippingCost: 0, total: data.subtotal,
    fullName: data.fullName, mobile: data.mobile, email: data.email,
    addressLine1: data.addressLine1, addressLine2: data.addressLine2,
    landmark: data.landmark, pincode: data.pincode, city: data.city, state: data.state,
    orderNotes: data.orderNotes,
    createdAt: now.toISOString(), estimatedDelivery,
    timeline: buildTimeline('placed'),
  }
  mockOrders.set(orderId, order)
  return { orderId, status: 'confirmed', estimatedDelivery, message: `Your order ${orderId} has been placed successfully! Our team will confirm it shortly.` }
}

export async function trackOrder(orderId: string, mobile: string): Promise<Order | null> {
  await sleep(800)
  if (mockOrders.has(orderId)) {
    const order = mockOrders.get(orderId)!
    return order.mobile === mobile ? order : null
  }
  // Demo mode: return mock for any ID
  const now = new Date()
  return {
    orderId, status: 'shipped', items: [], subtotal: 899, shippingCost: 0, total: 899,
    fullName: 'Customer', mobile, addressLine1: '123, Demo Street', pincode: '110001', city: 'New Delhi', state: 'Delhi',
    createdAt: new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    estimatedDelivery: new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000).toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
    timeline: buildTimeline('shipped'),
  }
}
