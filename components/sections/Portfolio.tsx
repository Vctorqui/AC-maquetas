import { instagramAccount } from '@/utils/const'
import { Instagram } from 'lucide-react'
import { Button } from '../ui/button'
import { CompassDecoration } from '../shared/CustomIcons'
import { portfolio } from '@/utils/portfolio/portfolio.const'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface PortfolioCardProps {
  item: (typeof portfolio)[0]
  className?: string
  priority?: boolean
}

const PortfolioCard = ({
  item,
  className,
  priority = false,
}: PortfolioCardProps) => (
  <div
    className={cn(
      'relative overflow-hidden border-8 border-primary shadow-[10px_10px_0px_rgba(27,90,142,0.5)] group cursor-pointer h-full',
      className,
    )}
  >
    <div className='absolute inset-0 bg-muted'>
      <Image
        src={item.image || '/placeholder.svg'}
        alt={item.title}
        fill
        className='object-cover group-hover:scale-110 transition-transform duration-700'
        priority={priority}
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
      />
    </div>

    {/* Geometric Overlay */}
    <div className='absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500' />

    <div className='absolute bottom-0 left-0 right-0 p-6 bg-primary/90 text-white transform translate-y-[85%] group-hover:translate-y-0 transition-transform duration-500'>
      <div className='flex items-center gap-3 mb-3'>
        <span className='bg-secondary text-white px-3 py-1 text-[10px] font-black uppercase tracking-tighter'>
          {item.category}
        </span>
        <span className='text-[10px] font-bold uppercase tracking-widest text-white/70'>
          {item.level}
        </span>
      </div>
      <h3 className='font-black text-2xl uppercase tracking-tighter leading-none mb-2'>
        {item.title}
      </h3>
      <p className='text-xs font-bold leading-tight line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity delay-200'>
        {item.description}
      </p>
    </div>
  </div>
)

const Portfolio = () => {
  return (
    <section className='bg-iso-grid/5 py-16 md:py-32 relative overflow-hidden border-t-8 border-primary-side'>
      <div className='absolute inset-0 bg-notebook-lines opacity-10 pointer-events-none' />
      <CompassDecoration className='absolute top-10 right-10 w-24 h-24 opacity-10 rotate-12 hidden lg:block' />

      <div className='container mx-auto px-4 relative z-10'>
        <div className='text-center mb-20 space-y-4'>
          <h2 className='text-5xl md:text-7xl font-black uppercase tracking-tighter text-primary'>
            TRABAJOS <br />
            <span
              className='text-white'
              style={{
                WebkitTextStroke: '2px var(--primary)',
                textShadow: '6px 6px 0px var(--primary-side)',
              }}
            >
              DE IMPACTO
            </span>
          </h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 auto-rows-[320px]'>
          <PortfolioCard
            item={portfolio[0]}
            className='col-span-1 md:col-span-2 row-span-2'
            priority
          />
          <PortfolioCard
            item={portfolio[1]}
            className='col-span-1 md:col-span-2 row-span-1'
          />
          <PortfolioCard
            item={portfolio[2]}
            className='col-span-1 row-span-1'
          />
          <PortfolioCard
            item={portfolio[3]}
            className='col-span-1 row-span-1'
          />
        </div>

        <div className='text-center mt-16'>
          <Button
            size='lg'
            className='bg-secondary hover:bg-secondary-side text-white font-black uppercase tracking-widest shadow-[8px_8px_0px_var(--secondary-side)] active:shadow-none active:translate-x-2 active:translate-y-2 transition-all rounded-none h-16 px-12'
            asChild
          >
            <a
              href={`https://instagram.com/${instagramAccount}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              <Instagram className='w-6 h-6 mr-3' />
              Ver más en Instagram
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
