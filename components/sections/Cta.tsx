import { instagramAccount, whatsappNumber } from '@/utils/const'
import { Instagram, MessageCircle } from 'lucide-react'
import { Button } from '../ui/button'
import { Card, CardContent } from '../ui/card'

const Cta = () => {
  return (
    <section className='py-16 md:py-24 relative'>
      <div className='container mx-auto px-4 relative z-10'>
        <Card className='bg-gradient-to-br from-primary via-accent to-primary/80 border-0 overflow-hidden relative'>
          <div className='absolute inset-0 bg-grid-pattern opacity-10' />
          <CardContent className='p-8 md:p-12 text-center relative z-10'>
            <div className='max-w-3xl mx-auto space-y-6'>
              <h2 className='text-3xl md:text-4xl font-bold text-primary-foreground text-balance'>
                ¿Listo para destacar en tus proyectos escolares?
              </h2>
              <p className='text-lg text-primary-foreground/90 text-pretty leading-relaxed'>
                Contáctanos ahora y recibe una cotización personalizada para tu
                trabajo escolar. Estamos aquí para ayudarte a alcanzar la
                excelencia.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center pt-4'>
                <Button
                  size='lg'
                  className='gap-2 bg-secondary hover:bg-secondary/90 text-white'
                  asChild
                >
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=Hola! Quiero solicitar información sobre sus trabajos escolares`}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <MessageCircle className='w-5 h-5' />
                    Contactar por WhatsApp
                  </a>
                </Button>
                <Button
                  size='lg'
                  variant='outline'
                  className='gap-2 bg-card hover:bg-card/90 text-base'
                  asChild
                >
                  <a
                    href={`https://instagram.com/${instagramAccount}`}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Instagram className='w-5 h-5' />
                    Síguenos en Instagram
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default Cta
