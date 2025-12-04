import { MessageCircle, Instagram, Pencil } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { whatsappNumber, instagramAccount } from '@/utils/const'

const Header = () => {
  return (
    <header className='border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50'>
      <div className='container mx-auto px-4 py-4 flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <div className='w-10 h-10 bg-primary rounded-lg flex items-center justify-center'>
            <Pencil className='w-5 h-5 text-primary-foreground' />
          </div>
          <div>
            <h1 className='font-bold text-lg leading-tight'>Trabajos</h1>
            <p className='text-xs text-muted-foreground leading-tight'>
              Escolares
            </p>
          </div>
        </div>
        <div className='flex gap-2'>
          <Button
            variant='outline'
            size='sm'
            asChild
            className='gap-2 bg-transparent'
          >
            <a
              href={`https://instagram.com/${instagramAccount}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              <Instagram className='w-4 h-4' />
              <span className='hidden sm:inline'>Instagram</span>
            </a>
          </Button>
          <Button
            size='sm'
            className='gap-2 bg-secondary hover:bg-secondary/90'
            asChild
          >
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              <MessageCircle className='w-4 h-4' />
              <span className='hidden sm:inline'>WhatsApp</span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header
