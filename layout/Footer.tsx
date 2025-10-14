import { Pencil } from 'lucide-react'
import { instagramAccount, whatsappNumber } from '@/utils/const'

const Footer = () => {
  return (
    <footer className=' border-t bg-card/50 py-8 relative'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
          <div className='flex items-center gap-2'>
            <div className='w-8 h-8 bg-primary rounded-lg flex items-center justify-center'>
              <Pencil className='w-4 h-4 text-primary-foreground' />
            </div>
            <div>
              <p className='font-semibold text-sm'>Trabajos Escolares</p>
              <p className='text-xs text-muted-foreground'>
                Excelencia y creatividad
              </p>
            </div>
          </div>
          <div className='flex items-center gap-6'>
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target='_blank'
              rel='noopener noreferrer'
              className='text-sm text-muted-foreground hover:text-foreground transition-colors'
            >
              (58) 412-0128332
            </a>
            <a
              href={`https://instagram.com/${instagramAccount}`}
              target='_blank'
              rel='noopener noreferrer'
              className='text-sm text-muted-foreground hover:text-foreground transition-colors'
            >
              @{instagramAccount}
            </a>
          </div>
        </div>
        <div className='mt-6 pt-6 border-t text-center'>
          <p className='text-xs text-muted-foreground'>
            © {new Date().getFullYear()} Trabajos Escolares. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
