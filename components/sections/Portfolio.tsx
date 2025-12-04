import { instagramAccount } from '@/utils/const'
import { Instagram } from 'lucide-react'
import { Card, CardContent } from '../ui/card'
import { Button } from '../ui/button'
import { CompassDecoration } from '../shared/CustomIcons'
import { portfolio } from '@/utils/portfolio/portfolio.const'

const Portfolio = () => {
  return (
    <section className='bg-muted/50 py-16 md:py-24 relative overflow-hidden'>
      <div className='absolute inset-0 bg-notebook-lines opacity-20 pointer-events-none' />
      <CompassDecoration className='absolute top-10 right-10 w-24 h-24 opacity-10 rotate-12 hidden lg:block' />

      <div className='container mx-auto px-4 relative z-10'>
        <div className='text-center mb-12 space-y-4'>
          <h2 className='text-3xl md:text-4xl font-bold text-balance'>
            Nuestros Trabajos Destacados
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto text-pretty'>
            Proyectos reales que demuestran nuestra calidad y atención al
            detalle
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[280px]'>
          {/* Large featured item - spans 2 columns and 2 rows */}
          <Card className='col-span-1 md:col-span-2 row-span-2 overflow-hidden hover:shadow-xl transition-all group cursor-pointer'>
            <CardContent className='p-0 h-full relative'>
              <div className='absolute inset-0 bg-muted'>
                <img
                  src={portfolio[0].image || '/placeholder.svg'}
                  alt={portfolio[0].title}
                  className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                />
              </div>
              <div className='absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90' />
              <div className='absolute bottom-0 left-0 right-0 p-6 space-y-3'>
                <div className='flex items-center gap-2 text-xs'>
                  <span className='bg-secondary text-secondary-foreground px-2 py-1 rounded-full font-medium'>
                    {portfolio[0].category}
                  </span>
                  <span className='text-white/80'>{portfolio[0].level}</span>
                  <span className='text-white/60'>•</span>
                  <span className='text-white/80'>{portfolio[0].subject}</span>
                </div>
                <h3 className='font-bold text-xl text-white'>
                  {portfolio[0].title}
                </h3>
                <p className='text-sm text-white/90 text-pretty leading-relaxed'>
                  {portfolio[0].description}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Medium item - spans 2 columns and 1 row */}
          <Card className='col-span-1 md:col-span-2 row-span-1 overflow-hidden hover:shadow-xl transition-all group cursor-pointer'>
            <CardContent className='p-0 h-full relative'>
              <div className='absolute inset-0 bg-muted'>
                <img
                  src={portfolio[1].image || '/placeholder.svg'}
                  alt={portfolio[1].title}
                  className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                />
              </div>
              <div className='absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90' />
              <div className='absolute bottom-0 left-0 right-0 p-4 space-y-2'>
                <div className='flex items-center gap-2 text-xs'>
                  <span className='bg-secondary text-secondary-foreground px-2 py-1 rounded-full font-medium'>
                    {portfolio[1].category}
                  </span>
                  <span className='text-white/80'>{portfolio[1].level}</span>
                  <span className='text-white/60'>•</span>
                  <span className='text-white/80'>{portfolio[1].subject}</span>
                </div>
                <h3 className='font-bold text-lg text-white'>
                  {portfolio[1].title}
                </h3>
                <p className='text-xs text-white/90 text-pretty'>
                  {portfolio[1].description}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Small item - spans 1 column and 1 row */}
          <Card className='col-span-1 row-span-1 overflow-hidden hover:shadow-xl transition-all group cursor-pointer'>
            <CardContent className='p-0 h-full relative'>
              <div className='absolute inset-0 bg-muted'>
                <img
                  src={portfolio[2].image || '/placeholder.svg'}
                  alt={portfolio[2].title}
                  className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                />
              </div>
              <div className='absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90' />
              <div className='absolute bottom-0 left-0 right-0 p-3 space-y-1'>
                <div className='flex items-center gap-1 text-xs'>
                  <span className='bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full font-medium text-xs'>
                    {portfolio[2].category}
                  </span>
                </div>
                <h3 className='font-bold text-sm text-white'>
                  {portfolio[2].title}
                </h3>
                <p className='text-xs text-white/80'>{portfolio[2].level}</p>
              </div>
            </CardContent>
          </Card>

          {/* Small item - spans 1 column and 1 row */}
          <Card className='col-span-1 row-span-1 overflow-hidden hover:shadow-xl transition-all group cursor-pointer'>
            <CardContent className='p-0 h-full relative'>
              <div className='absolute inset-0 bg-muted'>
                <img
                  src={portfolio[3].image || '/placeholder.svg'}
                  alt={portfolio[3].title}
                  className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                />
              </div>
              <div className='absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90' />
              <div className='absolute bottom-0 left-0 right-0 p-3 space-y-1'>
                <div className='flex items-center gap-1 text-xs'>
                  <span className='bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full font-medium text-xs'>
                    {portfolio[3].category}
                  </span>
                </div>
                <h3 className='font-bold text-sm text-white'>
                  {portfolio[3].title}
                </h3>
                <p className='text-xs text-white/80'>{portfolio[3].level}</p>
              </div>
            </CardContent>
          </Card>

          {/* Medium vertical item - spans 1 column and 2 rows */}
          <Card className='col-span-1 row-span-2 overflow-hidden hover:shadow-xl transition-all group cursor-pointer'>
            <CardContent className='p-0 h-full relative'>
              <div className='absolute inset-0 bg-muted'>
                <img
                  src={portfolio[4].image || '/placeholder.svg'}
                  alt={portfolio[4].title}
                  className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                />
              </div>
              <div className='absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90' />
              <div className='absolute bottom-0 left-0 right-0 p-4 space-y-2'>
                <div className='flex items-center gap-2 text-xs'>
                  <span className='bg-secondary text-secondary-foreground px-2 py-1 rounded-full font-medium'>
                    {portfolio[4].category}
                  </span>
                  <span className='text-white/80'>{portfolio[4].level}</span>
                </div>
                <h3 className='font-bold text-base text-white'>
                  {portfolio[4].title}
                </h3>
                <p className='text-xs text-white/90 text-pretty'>
                  {portfolio[4].description}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Medium item - spans 1 column and 1 row */}
          <Card className='col-span-1 row-span-1 overflow-hidden hover:shadow-xl transition-all group cursor-pointer'>
            <CardContent className='p-0 h-full relative'>
              <div className='absolute inset-0 bg-muted'>
                <img
                  src={portfolio[5].image || '/placeholder.svg'}
                  alt={portfolio[5].title}
                  className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                />
              </div>
              <div className='absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90' />
              <div className='absolute bottom-0 left-0 right-0 p-3 space-y-1'>
                <div className='flex items-center gap-1 text-xs'>
                  <span className='bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full font-medium text-xs'>
                    {portfolio[5].category}
                  </span>
                </div>
                <h3 className='font-bold text-sm text-white'>
                  {portfolio[5].title}
                </h3>
                <p className='text-xs text-white/80'>{portfolio[5].level}</p>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className='text-center mt-8'>
          <Button
            variant='outline'
            size='lg'
            className='gap-2 bg-transparent'
            asChild
          >
            <a
              href={`https://instagram.com/${instagramAccount}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              <Instagram className='w-5 h-5' />
              Ver más en Instagram
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
