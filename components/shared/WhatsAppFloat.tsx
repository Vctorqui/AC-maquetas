'use client'
import { MessageCircle } from 'lucide-react'
import { whatsappNumber } from '@/utils/const'

const WhatsAppFloat = () => {
  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=Hola! Me interesa solicitar un trabajo escolar`}
      target='_blank'
      rel='noopener noreferrer'
      className='fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110 group'
      aria-label='Contactar por WhatsApp'
    >
      <MessageCircle className='w-7 h-7 group-hover:scale-110 transition-transform' />
      <span className='absolute -top-2 -left-2 w-3 h-3 bg-red-500 rounded-full animate-pulse' />
    </a>
  )
}

export default WhatsAppFloat

