import { Instagram, Pencil } from 'lucide-react'
import { instagramAccount, whatsappNumber } from '@/utils/const'
import { ACLogo, WhatsAppDecoration } from '@/components/shared/CustomIcons'

const Footer = () => {
  return (
    <footer className='border-t-8 border-primary-side bg-background py-16 relative overflow-hidden'>
      <div className='absolute inset-0 bg-iso-grid opacity-5 pointer-events-none' />

      <div className='container mx-auto max-w-7xl px-4 relative z-10'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-10'>
          <div className='flex items-center gap-4'>
            <div className='w-12 h-12 bg-white flex items-center justify-center transform -rotate-12 long-shadow-blue'>
              <ACLogo className='w-12 h-12' />
            </div>
            <div>
              <p className='font-black text-lg uppercase tracking-tighter text-primary'>
                AC MAQUETAS
              </p>
              <p className='text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]'>
                Adnan Chleiwit
              </p>
            </div>
          </div>

          <div className='flex flex-wrap justify-center items-center gap-10'>
            <a
              href={`https://wa.me/${whatsappNumber}%20?text=Hola! Me interesa solicitar un trabajo escolar`}
              target='_blank'
              rel='noopener noreferrer'
              title='Escríbenos por WhatsApp'
              className='group flex items-center gap-2'
            >
              <div className='w-8 h-8 border-2 border-primary flex items-center justify-center font-black group-hover:bg-primary group-hover:text-white transition-colors'>
                <WhatsAppDecoration className='w-4 h-4' />
              </div>
              <span className='text-xs font-black uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors'>
                +58 416 465 9381
              </span>
            </a>

            <a
              href={`https://instagram.com/${instagramAccount}`}
              target='_blank'
              rel='noopener noreferrer'
              title='Síguenos en Instagram'
              className='group flex items-center gap-2'
            >
              <div className='w-8 h-8 border-2 border-secondary flex items-center justify-center font-black group-hover:bg-secondary group-hover:text-white transition-colors'>
                <Instagram className='w-4 h-4' />
              </div>
              <span className='text-xs font-black uppercase tracking-widest text-muted-foreground group-hover:text-secondary transition-colors'>
                @{instagramAccount}
              </span>
            </a>
          </div>
        </div>

        <div className='mt-16 pt-8 border-t-2 border-primary/10 flex flex-col md:flex-row justify-between items-center gap-4'>
          <div className='flex flex-col items-center md:items-start gap-1'>
            <p className='text-[10px] font-black uppercase tracking-widest text-muted-foreground'>
              © {new Date().getFullYear()} AC Maquetas. Todos los derechos
              reservados.
            </p>
            <p className='text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60 transition-colors hover:text-primary'>
              Desarrollado por{' '}
              <a
                href='https://victorqui.dev'
                target='_blank'
                rel='noopener noreferrer'
                className='underline decoration-primary/30 underline-offset-4 hover:decoration-primary transition-all'
                title='Visitar el sitio web de Victor Quiñones'
              >
                Victor Quiñones
              </a>
            </p>
          </div>
          <div className='flex gap-4'>
            <div className='w-4 h-4 bg-primary/20' />
            <div className='w-4 h-4 bg-secondary/20' />
            <div className='w-4 h-4 bg-accent/20' />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
