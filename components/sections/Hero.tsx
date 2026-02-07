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
    <section className='relative overflow-hidden bg-iso-grid/5 py-16 md:py-32'>
      <div className='container mx-auto px-4 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          <div className='space-y-8'>
            <div className='inline-flex items-center gap-2 bg-white border-4 border-primary px-5 py-2 font-black uppercase text-xs tracking-tighter shadow-[6px_6px_0px_var(--primary-side)] translate-x-[-4px] translate-y-[-4px]'>
              <Sparkles className='w-4 h-4 text-primary' />
              Excelencia Académica 3D
            </div>

            <h1 className='text-5xl md:text-7xl font-black leading-[0.9] uppercase tracking-tighter text-primary'>
              TRABAJOS QUE <br />
              <span
                className='text-white'
                style={{
                  WebkitTextStroke: '3px var(--primary)',
                  textShadow: '6px 6px 0px var(--primary-side)',
                }}
              >
                DESTACAN
              </span>
            </h1>

            <p className='text-xl text-muted-foreground font-bold leading-tight max-w-xl'>
              Maquetas, láminas y proyectos escolares con profundidad real.{' '}
              <br />
              Diseño isométrico aplicado a tu éxito académico.
            </p>

            <div className='flex  flex-wrap gap-6'>
              <Button
                size='lg'
                className='h-16 px-10 bg-primary text-white font-black text-xl uppercase tracking-tighter shadow-[8px_8px_0px_var(--primary-side)] active:shadow-none active:translate-x-2 active:translate-y-2 transition-all rounded-none'
                asChild
              >
                <a
                  href={`https://wa.me/${whatsappNumber}?text=Hola! Quiero solicitar información sobre sus trabajos escolares`}
                  target='_blank'
                  rel='noopener noreferrer'
                  title='Solicitar información personalizada por WhatsApp'
                >
                  <MessageCircle className='w-6 h-6' />
                  Solicitar Ahora
                </a>
              </Button>

              <div className='flex items-center gap-4 bg-white border-4 border-primary p-2 shadow-[6px_6px_0px_var(--primary-side)]'>
                <div className='flex -space-x-2'>
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className='w-12 h-10 border-2 border-primary bg-accent flex items-center justify-center'
                    >
                      <CheckCircle className='w-6 h-6 text-primary' />
                    </div>
                  ))}
                </div>
                <div className='pr-4 text-xs font-black uppercase leading-tight'>
                  100% de clientes <br /> satisfechos
                </div>
              </div>
            </div>

            <div className='flex flex-wrap gap-8 pt-4'>
              {features.map((feature) => (
                <div key={feature} className='flex items-center gap-3 group'>
                  <div className='w-6 h-6 bg-secondary shadow-[3px_3px_0px_var(--secondary-side)] group-hover:translate-x-[-2px] group-hover:translate-y-[-2px] transition-transform' />
                  <span className='text-xs font-black uppercase tracking-widest'>
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className='perspective-container hidden lg:block'>
            <div className='isometric-view relative w-full h-[500px]'>
              {/* Main 3D Card */}
              <div className='absolute top-0 left-0 w-80 h-96 bg-white border-8 border-primary shadow-[20px_20px_0px_rgba(15,61,92,0.5)] p-10 flex flex-col justify-between overflow-hidden'>
                <div className='space-y-6'>
                  <div className='w-20 h-2 bg-primary' />
                  <div className='w-40 h-2 bg-primary/20' />
                  <div className='w-32 h-2 bg-primary/10' />
                </div>

                <div className='text-left'>
                  <p className='text-8xl font-black text-primary leading-none'>
                    100+
                  </p>
                  <p className='text-sm font-black uppercase tracking-widest text-muted-foreground'>
                    Proyectos
                  </p>
                </div>

                <div className='absolute -right-20 -bottom-20 w-48 h-48 bg-secondary rotate-12 opacity-10' />
              </div>

              {/* Secondary Floating 3D Cubes/Cards */}
              <div className='absolute -top-10 -right-20 w-48 h-48 bg-secondary border-8 border-secondary-side long-shadow-orange flex items-center justify-center translate-z-20'>
                <Pencil className='w-20 h-20 text-white opacity-20' />
              </div>

              <div className='absolute bottom-10 -left-20 w-32 h-32 bg-accent border-4 border-primary shadow-[10px_10px_0px_var(--primary-side)] flex items-center justify-center p-4 text-center text-[10px] font-black uppercase'>
                Compromiso <br /> Real
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
