import { testimonials } from "@/utils/const"
import { Card, CardContent } from "../ui/card"
import { NotebookDecoration, RulerDecoration } from "../shared/CustomIcons"

const Testimonials = () => {
  return (
    <section className='bg-muted/50 py-16 md:py-24 relative'>
      <NotebookDecoration className='absolute top-1/2 left-5 w-16 h-20 opacity-10 -rotate-6 hidden md:block' />
      <RulerDecoration className='absolute bottom-10 right-10 w-32 h-8 opacity-15 rotate-6 hidden lg:block' />

      <div className='container mx-auto px-4 relative z-10'>
        <div className='text-center mb-12 space-y-4'>
          <h2 className='text-3xl md:text-4xl font-bold text-balance'>
            Lo que dicen nuestros clientes
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto text-pretty'>
            La satisfacción de nuestros clientes es nuestra mejor carta de
            presentación
          </p>
        </div>
        <div className='grid md:grid-cols-3 gap-6'>
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.name}
              className='hover:shadow-lg transition-shadow'
            >
              <CardContent className='p-6 space-y-4'>
                <div className='flex gap-1'>
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className='text-secondary text-lg'>
                      ★
                    </span>
                  ))}
                </div>
                <p className='text-sm text-muted-foreground italic text-pretty'>
                  "{testimonial.text}"
                </p>
                <div>
                  <p className='font-semibold text-sm'>{testimonial.name}</p>
                  <p className='text-xs text-muted-foreground'>
                    {testimonial.role}
                  </p>
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
