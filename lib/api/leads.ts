import { sleep } from '@/lib/utils'
import type { LeadFormData } from '@/lib/schemas'

export async function submitLead(data: LeadFormData): Promise<{ success: boolean; message: string }> {
  await sleep(800)
  // TODO: Replace with real API call (CRM / email)
  console.log('[MOCK] Lead submitted:', data)
  return { success: true, message: 'Thank you! Hakim Sahab will reach out to you on WhatsApp within 24 hours.' }
}
