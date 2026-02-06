'use client'

import { testimonials } from '@/utils/const'
import { NotebookDecoration, RulerDecoration } from '../shared/CustomIcons'
import { useCarousel } from '@/hooks/useCarousel'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Testimonials = () => {
  const { index, handleNext, handlePrev, goToIndex, pause, resume } =
    useCarousel({
      length: testimonials.length,
      interval: 5000,
      autoSlide: true,
    })

  return (
    <section className='bg-iso-grid/5 py-16 md:py-32 relative border-t-8 border-primary-side overflow-hidden'>
      <NotebookDecoration className='absolute top-1/2 left-5 w-16 h-20 opacity-10 -rotate-6 hidden md:block' />
      <RulerDecoration className='absolute bottom-10 right-10 w-32 h-8 opacity-15 rotate-6 hidden lg:block' />

      <div className='container mx-auto px-4 relative z-10'>
        <div className='text-center mb-16 space-y-4'>
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

        <div
          className='relative max-w-4xl mx-auto'
          onMouseEnter={pause}
          onMouseLeave={resume}
        >
          {/* Main Carousel Viewport */}
          <div className='overflow-hidden p-4 md:p-8'>
            <div
              className='flex transition-transform duration-500 ease-out'
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {testimonials.map((testimonial, i) => (
                <div
                  key={testimonial.id + '/' + i}
                  className='w-full flex-shrink-0 px-4'
                >
                  <div className='bg-white border-4 border-primary p-8 md:p-12 relative shadow-[12px_12px_0px_var(--primary-side)] group'>
                    {/* Star Rating Block */}
                    <div className='absolute -top-6 left-8 bg-primary border-4 border-primary-side px-4 py-2 flex gap-1 shadow-[4px_4px_0px_rgba(0,0,0,0.2)]'>
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className='text-accent text-lg leading-none'
                        >
                          ★
                        </span>
                      ))}
                    </div>

                    <p className='text-xl md:text-2xl font-bold text-muted-foreground italic mb-10 pt-4 leading-relaxed'>
                      "{testimonial.text}"
                    </p>

                    <div className='border-t-4 border-primary/20 pt-8 flex items-center gap-4'>
                      <div className='w-12 h-12 bg-primary/10 border-2 border-primary rounded-full flex items-center justify-center font-black text-primary'>
                        {testimonial.name[0]}
                      </div>
                      <div>
                        <p className='font-black text-xl text-primary uppercase tracking-tighter'>
                          {testimonial.name}
                        </p>
                        <p className='text-xs font-bold text-muted-foreground uppercase tracking-widest'>
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className='absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 bg-white border-4 border-primary p-2 shadow-[4px_4px_0px_var(--primary-side)]  hover:shadow-[6px_6px_0px_var(--primary-side)] transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none z-20'
            aria-label='Anterior'
          >
            <ChevronLeft className='w-6 h-6 text-primary' />
          </button>
          <button
            onClick={handleNext}
            className='absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 bg-white border-4 border-primary p-2 shadow-[4px_4px_0px_var(--primary-side)] hover:translate-x-[2px] hover:shadow-[6px_6px_0px_var(--primary-side)] transition-all active:translate-x-[-2px] active:translate-y-[-2px] active:shadow-none z-20'
            aria-label='Siguiente'
          >
            <ChevronRight className='w-6 h-6 text-primary' />
          </button>

          {/* Pagination Indicators */}
          <div className='flex justify-center gap-4 mt-12'>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goToIndex(i)}
                className={`h-4 w-4 border-2 border-primary transition-all ${
                  index === i
                    ? 'bg-primary scale-125 shadow-[2px_2px_0px_var(--primary-side)]'
                    : 'bg-white hover:bg-primary/20'
                }`}
                aria-label={`Ir al testimonio ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
