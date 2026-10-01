import { NextRequest, NextResponse } from 'next/server'
import { trackOrderSchema } from '@/lib/schemas'
import { trackOrder } from '@/lib/api/orders'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const parsed = trackOrderSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid data', details: parsed.error.flatten() }, { status: 400 })
    }
    const order = await trackOrder(parsed.data.orderId, parsed.data.mobile)
    if (!order) {
      return NextResponse.json({ error: 'Order not found. Please check your Order ID and mobile number.' }, { status: 404 })
    }
    return NextResponse.json(order, { status: 200 })
  } catch (error) {
    console.error('[API/track] Error:', error)
    return NextResponse.json({ error: 'Failed to track order. Please try again.' }, { status: 500 })
  }
}
