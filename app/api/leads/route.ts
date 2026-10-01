import { NextRequest, NextResponse } from 'next/server'
import { leadFormSchema } from '@/lib/schemas'
import { submitLead } from '@/lib/api/leads'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const parsed = leadFormSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid data', details: parsed.error.flatten() }, { status: 400 })
    }
    const result = await submitLead(parsed.data)
    return NextResponse.json(result, { status: 200 })
  } catch (error) {
    console.error('[API/leads] Error:', error)
    return NextResponse.json({ error: 'Failed to submit. Please try again.' }, { status: 500 })
  }
}
