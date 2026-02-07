import { MessageCircle, Instagram, Pencil } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { whatsappNumber, instagramAccount } from '@/utils/const'
import { ACLogo, WhatsAppDecoration } from '@/components/shared/CustomIcons'

const Header = () => {
  return (
    <header className='border-b-4 border-primary-side bg-background sticky top-0 z-50 py-2'>
      <div className='container mx-auto px-4 flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          {/* Geometric 3D Brand Block */}
          <div className='relative w-12 h-12 bg-white long-shadow-blue flex items-center justify-center transform hover:scale-105 transition-transform'>
            <ACLogo className='w-12 h-12' />
            <div className='absolute -right-2 top-0 w-2 h-full bg-primary-side origin-left transform skew-y-[45deg]'></div>
            <div className='absolute left-0 -bottom-2 w-full h-2 bg-primary-side origin-top transform skew-x-[45deg]'></div>
          </div>
          <div>
            <h1 className='font-black text-xl leading-tight text-primary tracking-tighter'>
              AC MAQUETAS
            </h1>
            <p className='text-[10px] font-bold text-muted-foreground uppercase tracking-widest leading-none'>
              Adnan Chleiwit
            </p>
          </div>
        </div>
        <div className='flex gap-3'>
          <Button
            variant='outline'
            size='sm'
            asChild
            className='border-2 border-primary text-primary font-black uppercase tracking-tight hover:bg-primary/5 rounded-none shadow-[4px_4px_0px_var(--primary-side)] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all'
          >
            <a
              href={`https://instagram.com/${instagramAccount}`}
              target='_blank'
              rel='noopener noreferrer'
              title='Ver nuestro portafolio en Instagram'
            >
              <Instagram className='w-4 h-4' />
              <span className='hidden sm:inline'>Portfolio</span>
            </a>
          </Button>
          <Button
            size='sm'
            className='bg-secondary hover:bg-secondary-side text-white font-black uppercase tracking-tight shadow-[4px_4px_0px_var(--secondary-side)] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all rounded-none px-6'
            asChild
          >
            <a
              href={`https://wa.me/${whatsappNumber}%20?text=Hola! Me interesa solicitar un trabajo escolar`}
              target='_blank'
              rel='noopener noreferrer'
              title='Contáctanos por WhatsApp'
            >
              <WhatsAppDecoration className='w-4 h-4' />
              <span className='hidden sm:inline'>Contacto</span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header
