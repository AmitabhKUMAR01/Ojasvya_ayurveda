'use client'

import { MessageCircle } from 'lucide-react'
import { siteConfig } from '@/lib/siteConfig'
import { getWhatsAppUrl } from '@/lib/utils'

export default function WhatsAppButton() {
  const url = getWhatsAppUrl(siteConfig.whatsappNumber, siteConfig.whatsappMessage)
  return (
    <a
      href="#"
      onClick={(e) => e.preventDefault()}
      className="fixed bottom-6 right-4 z-40 flex items-center bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 active:scale-95 group overflow-hidden cursor-pointer"
      aria-label="Chat with Hakim Sahab on WhatsApp"
    >
      <span className="max-w-0 group-hover:max-w-xs overflow-hidden transition-all duration-300 ease-out whitespace-nowrap text-sm font-medium pl-0 group-hover:pl-4 hidden sm:block">
        Chat with Hakim Sahab
      </span>
      <div className="p-3.5">
        <MessageCircle className="w-6 h-6 fill-white" />
      </div>
    </a>
  )
}
