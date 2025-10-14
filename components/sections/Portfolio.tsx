import { instagramAccount, portfolio } from '@/utils/const'
import { Instagram } from 'lucide-react'
import { Card, CardContent } from '../ui/card'
import { Button } from '../ui/button'
import { CompassDecoration } from '../shared/CustomIcons'

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
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {portfolio.map((project, index) => (
            <Card key={index} className='overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 group cursor-pointer'>
              <CardContent className='p-0 h-full relative'>
                <div className='relative h-64 bg-muted'>
                  <img
                    src={project.image || '/placeholder.svg'}
                    alt={project.title}
                    className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90' />
                </div>
                <div className='absolute bottom-0 left-0 right-0 p-5 space-y-2'>
                  <div className='flex items-center gap-2 text-xs flex-wrap'>
                    <span className='bg-secondary text-secondary-foreground px-2 py-1 rounded-full font-medium'>
                      {project.category}
                    </span>
                    <span className='text-white/80'>{project.level}</span>
                    {project.subject && (
                      <>
                        <span className='text-white/60'>•</span>
                        <span className='text-white/80'>{project.subject}</span>
                      </>
                    )}
                  </div>
                  <h3 className='font-bold text-lg text-white'>
                    {project.title}
                  </h3>
                  {project.description && (
                    <p className='text-sm text-white/90 text-pretty leading-relaxed'>
                      {project.description}
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
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
