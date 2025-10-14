import { EraserDecoration, PencilDecoration } from '../shared/CustomIcons'
import { Card, CardContent } from '../ui/card'
import { process } from '@/utils/const'

const HowWorks = () => {
  return (
    <section className='py-16 md:py-24 relative overflow-hidden'>
      <EraserDecoration className='absolute top-10 left-10 w-16 h-12 opacity-15 rotate-6 hidden lg:block' />
      <PencilDecoration className='absolute bottom-20 right-10 w-14 h-14 opacity-15 -rotate-45 hidden lg:block' />

      <div className='container mx-auto px-4 relative z-10'>
        <div className='text-center mb-16 space-y-4 pb-20'>
          <h2 className='text-3xl md:text-4xl font-bold text-balance'>
            ¿Cómo funciona?
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto text-pretty'>
            Cuatro pasos simples hacia la excelencia académica
          </p>
        </div>

        {/* Staircase design for desktop */}
        <div className='hidden lg:block relative'>
          <div className='relative h-[500px]'>
            {process.map((item, index) => (
              <div
                key={item.step}
                className='absolute transition-all duration-300 hover:scale-105'
                style={{
                  left: `${index * 22}%`,
                  bottom: `${index * 25}%`,
                  width: '24%',
                }}
              >
                <Card className='bg-gradient-to-br from-card to-accent/20 border-2 border-primary/20 shadow-lg hover:shadow-xl hover:border-primary/40'>
                  <CardContent className='p-6 space-y-4'>
                    <div className='flex items-center gap-3'>
                      <div className='w-14 h-14 bg-secondary text-secondary-foreground rounded-2xl flex items-center justify-center text-2xl font-bold shadow-md'>
                        {item.step}
                      </div>
                      <div className='w-8 h-0.5 bg-secondary/50' />
                    </div>
                    <h3 className='font-bold text-xl'>{item.title}</h3>
                    <p className='text-sm text-muted-foreground text-pretty leading-relaxed'>
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
                {/* Decorative step connector */}
                {index < process.length - 1 && (
                  <div className='absolute -right-8 top-1/2 w-12 h-0.5 bg-primary/30 transform -translate-y-1/2 rotate-45' />
                )}
              </div>
            ))}
            {/* Decorative ruler at the bottom */}
            <div className='absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-full' />
          </div>
        </div>

        {/* Mobile/Tablet view - vertical steps */}
        <div className='lg:hidden space-y-6'>
          {process.map((item, index) => (
            <div key={item.step} className='relative'>
              <Card className='bg-gradient-to-br from-card to-accent/20 border-2 border-primary/20 shadow-lg'>
                <CardContent className='p-6 space-y-4'>
                  <div className='flex items-center gap-3'>
                    <div className='w-12 h-12 bg-secondary text-secondary-foreground rounded-2xl flex items-center justify-center text-xl font-bold shadow-md'>
                      {item.step}
                    </div>
                    <h3 className='font-bold text-lg'>{item.title}</h3>
                  </div>
                  <p className='text-sm text-muted-foreground text-pretty leading-relaxed'>
                    {item.description}
                  </p>
                </CardContent>
              </Card>
              {index < process.length - 1 && (
                <div className='flex justify-center py-2'>
                  <div className='w-0.5 h-8 bg-primary/30' />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowWorks
