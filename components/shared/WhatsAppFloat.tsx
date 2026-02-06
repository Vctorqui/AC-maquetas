'use client'
import { WhatsAppDecoration } from '@/components/shared/CustomIcons'
import { whatsappNumber } from '@/utils/const'

const WhatsAppFloat = () => {
  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=Hola! Me interesa solicitar un trabajo escolar`}
      target='_blank'
      rel='noopener noreferrer'
      className='fixed bottom-8 right-8 z-50 group'
      aria-label='Contactar por WhatsApp'
    >
      <div className='relative w-16 h-16 bg-[#25D366] border-4 border-[#128C7E] flex items-center justify-center transition-all duration-200 shadow-[6px_6px_0px_#128C7E] group-hover:shadow-[2px_2px_0px_#128C7E] group-hover:translate-x-1 group-hover:translate-y-1 group-active:translate-x-1.5 group-active:translate-y-1.5 group-active:shadow-none'>
        <WhatsAppDecoration className='w-8 h-8 text-white transition-transform' />

        {/* Geometric sides for 3D effect on hover/active could be complex here, 
            simulated with the shadow transition above */}

        {/* Animated indicator block */}
        <div className='absolute -top-3 -left-3 w-5 h-5 bg-red-600 border-2 border-primary-side animate-bounce flex items-center justify-center'>
          <span className='w-2 h-2 bg-white' />
        </div>
      </div>

      {/* Tooltip technical block */}
      <span className='absolute bottom-full right-0 mb-4 bg-primary text-white text-[10px] font-black uppercase px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border-b-2 border-r-2 border-primary shadow-[2px_2px_0px_var(--secondary)]'>
        CONEXIÓN_DIRECTA
      </span>
    </a>
  )
}

export default WhatsAppFloat
