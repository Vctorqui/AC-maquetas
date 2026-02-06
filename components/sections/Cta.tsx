import { instagramAccount, whatsappNumber } from '@/utils/const'
import { Instagram, MessageCircle } from 'lucide-react'
import { Button } from '../ui/button'

const Cta = () => {
  return (
    <section className='py-16 md:py-32 relative'>
      <div className='container mx-auto px-4 relative z-10'>
        <div className='bg-primary border-8 border-primary-side p-10 md:p-20 relative overflow-hidden shadow-[30px_30px_0px_rgba(27,90,142,0.3)]'>
          <div className='absolute inset-0 bg-iso-grid opacity-10' />

          <div className='max-w-3xl mx-auto text-center relative z-10 space-y-10'>
            <h2
              className='text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none'
              style={{ textShadow: '8px 8px 0px var(--primary-side)' }}
            >
              ¿LISTO PARA <br /> <span className='text-accent'>DESTACAR?</span>
            </h2>

            <p className='text-xl md:text-2xl font-bold text-white/90 leading-tight'>
              Contáctanos ahora y asegura la excelencia en tu próximo proyecto.{' '}
              <br />
              Diseño técnico. Precisión académica.
            </p>

            <div className='flex flex-col sm:flex-row gap-8 justify-center pt-6'>
              <Button
                size='lg'
                className='h-20 px-12 bg-secondary hover:bg-secondary-side text-white font-black text-xl uppercase tracking-tighter shadow-[10px_10px_0px_var(--secondary-side)] active:shadow-none active:translate-x-2 active:translate-y-2 transition-all rounded-none'
                asChild
              >
                <a
                  href={`https://wa.me/${whatsappNumber}?text=Hola! Quiero solicitar información sobre sus trabajos escolares`}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <MessageCircle className='w-7 h-7 mr-3' />
                  WhatsApp
                </a>
              </Button>

              <Button
                size='lg'
                variant='outline'
                className='h-20 px-12 bg-white border-4 border-primary-side text-primary font-black text-xl uppercase tracking-tighter shadow-[10px_10px_0px_rgba(0,0,0,0.1)] hover:bg-white/90 active:shadow-none active:translate-x-2 active:translate-y-2 transition-all rounded-none'
                asChild
              >
                <a
                  href={`https://instagram.com/${instagramAccount}`}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Instagram className='w-7 h-7 mr-3' />
                  Instagram
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cta
