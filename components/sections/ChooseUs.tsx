import { whyChooseUs } from '@/utils/const'
import { Card, CardContent } from '../ui/card'
import { EraserDecoration, NotebookDecoration } from '../shared/CustomIcons'

const ChooseUs = () => {
  return (
    <section className='bg-muted/50 py-16 md:py-24 relative'>
      <NotebookDecoration className='absolute top-10 left-10 w-20 h-24 opacity-10 hidden lg:block' />
      <EraserDecoration className='absolute bottom-10 right-10 w-16 h-12 opacity-10 hidden lg:block' />

      <div className='container mx-auto px-4 relative z-10'>
        <div className='text-center mb-12 space-y-4'>
          <h2 className='text-3xl md:text-4xl font-bold text-balance'>
            ¿Por qué elegirnos?
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto text-pretty'>
            Nos caracterizamos por nuestra dedicación y compromiso con cada
            proyecto
          </p>
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {whyChooseUs.map((item) => (
            <Card
              key={item.title}
              className='text-center hover:shadow-lg transition-shadow'
            >
              <CardContent className='p-6 space-y-4'>
                <div className='w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto'>
                  <item.icon className='w-6 h-6 text-primary-foreground' />
                </div>
                <h3 className='font-bold text-lg'>{item.title}</h3>
                <p className='text-sm text-muted-foreground text-pretty'>
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
    </section>
  )
}

export default ChooseUs
