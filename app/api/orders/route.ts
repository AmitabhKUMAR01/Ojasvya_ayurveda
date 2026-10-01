import { NextRequest, NextResponse } from 'next/server'
import { createOrderSchema } from '@/lib/schemas'
import { createOrder } from '@/lib/api/orders'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const parsed = createOrderSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid order data', details: parsed.error.flatten() }, { status: 400 })
    }
    const result = await createOrder(parsed.data)
    return NextResponse.json(result, { status: 201 })
  } catch (error) {
    console.error('[API/orders] Error:', error)
    return NextResponse.json({ error: 'Failed to place order. Please try again.' }, { status: 500 })
  }
}
