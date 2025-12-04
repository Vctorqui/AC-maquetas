import {
  Award,
  CheckCircle,
  Instagram,
  MessageCircle,
  Package,
  Pencil,
  Sparkles,
} from 'lucide-react'
import {
  CompassDecoration,
  PencilDecoration,
  RulerDecoration,
} from '../shared/CustomIcons'
import { Button } from '../ui/button'
import { features, instagramAccount, whatsappNumber } from '@/utils/const'

const HeroSection = () => {
  return (
    <section className='container mx-auto px-4 py-16 md:py-24 relative'>
      <PencilDecoration className='absolute top-10 right-10 w-16 h-16 opacity-20 rotate-45 hidden lg:block' />
      <RulerDecoration className='absolute bottom-20 left-10 w-32 h-8 opacity-20 -rotate-12 hidden lg:block' />
      <CompassDecoration className='absolute top-1/2 right-20 w-20 h-20 opacity-15 hidden xl:block' />

      <div className='grid lg:grid-cols-2 gap-12 items-center relative z-10'>
        <div className='space-y-6'>
          <div className='inline-flex items-center gap-2 bg-accent px-4 py-2 rounded-full text-sm font-medium'>
            <Sparkles className='w-4 h-4' />
            Trabajos Escolares Profesionales
          </div>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance'>
            Diseños y trabajos{' '}
            <span className='text-secondary'>personalizados</span> para este año
            académico
          </h1>
          <p className='text-lg text-muted-foreground text-pretty leading-relaxed'>
            La excelencia, creatividad y perfección nos caracteriza. Creamos
            maquetas, láminas, portadas y más para que destaques en tus
            proyectos escolares.
          </p>
          <div className='flex flex-col sm:flex-row gap-4'>
            <Button
              size='lg'
              className='gap-2 bg-secondary hover:bg-secondary/90 text-base'
              asChild
            >
              <a
                href={`https://wa.me/${whatsappNumber}?text=Hola! Me interesa solicitar un trabajo escolar`}
                target='_blank'
                rel='noopener noreferrer'
              >
                <MessageCircle className='w-5 h-5' />
                Solicitar Trabajo
              </a>
            </Button>
            <Button
              size='lg'
              variant='outline'
              className='gap-2 text-base bg-transparent'
              asChild
            >
              <a
                href={`https://instagram.com/${instagramAccount}`}
                target='_blank'
                rel='noopener noreferrer'
              >
                <Instagram className='w-5 h-5' />
                Ver Portfolio
              </a>
            </Button>
          </div>
          <div className='grid grid-cols-2 gap-4 pt-4'>
            {features.map((feature) => (
              <div key={feature} className='flex items-center gap-2'>
                <CheckCircle className='w-5 h-5 text-secondary flex-shrink-0' />
                <span className='text-sm font-medium'>{feature}</span>
              </div>
            ))}
          </div>
        </div>
        <div className='relative'>
          <div className='absolute inset-0 bg-primary/20 rounded-3xl blur-3xl' />
          <div className='relative bg-gradient-to-br from-primary via-accent to-primary/80 rounded-3xl p-8 md:p-12'>
            <div className='space-y-6'>
              <div className='flex items-center justify-center gap-4'>
                <Package className='w-16 h-16 text-primary-foreground/80' />
                <Pencil className='w-20 h-20 text-primary-foreground' />
                <Award className='w-16 h-16 text-primary-foreground/80' />
              </div>
              <div className='text-center space-y-2'>
                <p className='text-2xl md:text-3xl font-bold text-primary-foreground'>
                  +500
                </p>
                <p className='text-primary-foreground/90'>
                  Proyectos Completados
                </p>
              </div>
              <div className='grid grid-cols-3 gap-4 pt-4'>
                <div className='text-center'>
                  <p className='text-xl font-bold text-primary-foreground'>
                    100%
                  </p>
                  <p className='text-xs text-primary-foreground/80'>
                    Satisfacción
                  </p>
                </div>
                <div className='text-center'>
                  <p className='text-xl font-bold text-primary-foreground'>
                    5★
                  </p>
                  <p className='text-xs text-primary-foreground/80'>
                    Calificación
                  </p>
                </div>
                <div className='text-center'>
                  <p className='text-xl font-bold text-primary-foreground'>
                    2-5
                  </p>
                  <p className='text-xs text-primary-foreground/80'>Días</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
