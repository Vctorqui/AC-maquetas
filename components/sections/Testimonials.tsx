import { testimonials } from '@/utils/const'
import { NotebookDecoration, RulerDecoration } from '../shared/CustomIcons'

const Testimonials = () => {
  return (
    <section className='bg-iso-grid/5 py-16 md:py-32 relative border-t-8 border-primary-side'>
      <NotebookDecoration className='absolute top-1/2 left-5 w-16 h-20 opacity-10 -rotate-6 hidden md:block' />
      <RulerDecoration className='absolute bottom-10 right-10 w-32 h-8 opacity-15 rotate-6 hidden lg:block' />

      <div className='container mx-auto px-4 relative z-10'>
        <div className='text-center mb-20 space-y-4'>
          <h2 className='text-4xl md:text-5xl font-black uppercase tracking-tighter text-primary'>
            TESTIMONIOS{' '}
            <span
              className='text-white'
              style={{
                WebkitTextStroke: '2px var(--primary)',
                textShadow: '4px 4px 0px var(--primary-side)',
              }}
            >
              100% REALES
            </span>
          </h2>
        </div>

        <div className='grid md:grid-cols-3 gap-10'>
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className='bg-white border-4 border-primary p-8 relative shadow-[8px_8px_0px_var(--primary-side)] group'
            >
              {/* Star Rating Block */}
              <div className='absolute -top-6 left-8 bg-primary border-4 border-primary-side px-3 py-1 flex gap-1 shadow-[4px_4px_0px_rgba(0,0,0,0.2)]'>
                {[...Array(5)].map((_, i) => (
                  <span key={i} className='text-accent text-sm'>
                    ★
                  </span>
                ))}
              </div>

              <p className='text-sm font-bold text-muted-foreground italic mb-6 pt-4'>
                "{testimonial.text}"
              </p>

              <div className='border-t-2 border-primary/20 pt-4'>
                <p className='font-black text-primary uppercase tracking-tighter'>
                  {testimonial.name}
                </p>
                <p className='text-[10px] font-bold text-muted-foreground uppercase tracking-widest'>
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
