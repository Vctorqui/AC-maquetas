import { testimonials } from '@/utils/const'
import { Card, CardContent } from '../ui/card'
import { Quote } from 'lucide-react'

const Testimonials = () => {
  return (
    <section className='py-16 md:py-24 bg-muted/50 rounded-lg'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12 space-y-4'>
          <h2 className='text-3xl md:text-4xl font-bold text-balance'>
            Lo que dicen nuestros clientes
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto text-pretty'>
            Testimonios reales de estudiantes y padres que confían en nuestro trabajo
          </p>
        </div>
        
        <div className='grid md:grid-cols-3 gap-6'>
          {testimonials.map((testimonial, index) => (
            <Card key={index} className='relative overflow-hidden hover:shadow-lg transition-all'>
              <CardContent className='p-6'>
                <Quote className='w-8 h-8 text-primary/20 absolute top-4 right-4' />
                <p className='text-muted-foreground mb-4 text-pretty leading-relaxed italic'>
                  "{testimonial.text}"
                </p>
                <div className='space-y-1'>
                  <p className='font-semibold text-sm'>{testimonial.name}</p>
                  <p className='text-xs text-muted-foreground'>{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
