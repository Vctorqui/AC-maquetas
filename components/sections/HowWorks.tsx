'use client'

import {
  DesignPencil,
  EraserDecoration,
  PackageCheck,
  PencilDecoration,
  PencilRuler,
  Smartphone,
} from '../shared/CustomIcons'
import { workProcess } from '@/utils/const'

const HowWorks = () => {
  return (
    <section className='py-20 md:py-32 relative bg-background'>
      {/* Decorative background elements */}
      <div className='absolute inset-0 opacity-5 pointer-events-none'>
        <div className='absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]' />
      </div>

      <div className='container mx-auto px-4 relative z-10'>
        {/* Header - Styled like a title plate on a board */}
        <div className='text-center mb-24 relative inline-block left-1/2 -translate-x-1/2'>
          <div className='bg-primary border-4 border-primary-side px-8 py-4 shadow-[8px_8px_0px_var(--primary-side)] -rotate-2'>
            <h2 className='text-4xl md:text-6xl font-black uppercase tracking-tighter text-white'>
              ¿CÓMO{' '}
              <span
                className='text-accent'
                style={{ WebkitTextStroke: '2px var(--primary-side)' }}
              >
                TRABAJAMOS?
              </span>
            </h2>
          </div>
          {/* Pushpin for the header */}
          <div className='absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-secondary rounded-full border-4 border-secondary-side shadow-[2px_4px_0px_rgba(0,0,0,0.3)] z-20' />
        </div>

        {/* The "Bulletin Board" Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8'>
          {workProcess.map((item, index) => {
            const rotations = ['-rotate-2', 'rotate-1', 'rotate-3', '-rotate-1']
            const rotation = rotations[index % rotations.length]

            return (
              <div
                key={item.step}
                className={`relative group ${rotation} hover:rotate-0 transition-transform duration-300 ease-out`}
              >
                {/* Pushpin */}
                <div className='absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-secondary border-4 border-secondary-side rounded-full shadow-[2px_2px_0px_rgba(0,0,0,0.2)] z-30 transition-transform group-hover:scale-110' />

                {/* Paper Block */}
                <div className='bg-white border-4 border-primary p-8 pt-10 min-h-[280px] flex flex-col items-center text-center relative shadow-[10px_10px_0px_var(--primary-side)] group-hover:shadow-[15px_15px_0px_var(--primary-side)] group-hover:-translate-y-2 transition-all'>
                  {/* Step Number Badge */}
                  <div className='absolute -top-6 -right-6 w-12 h-12 bg-accent border-4 border-primary flex items-center justify-center text-xl font-black text-primary shadow-[4px_4px_0px_var(--primary-side)] group-hover:scale-110 transition-transform'>
                    {item.step}
                  </div>

                  {/* Decorative notebook lines effect */}
                  <div className='absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(transparent_27px,#000_27px,#000_28px)] bg-[length:100%_28px]' />

                  <h3 className='font-black text-2xl uppercase tracking-tighter text-primary mb-6 relative z-10'>
                    {item.title}
                  </h3>

                  <div className='w-full h-1 bg-primary/10 mb-6' />

                  <p className='text-sm font-bold text-muted-foreground leading-relaxed relative z-10'>
                    {item.description}
                  </p>

                  {/* Decorative elements based on step */}
                  <div className='mt-auto pt-6'>
                    {index === 0 && (
                      <div className='text-4xl'>
                        <Smartphone className='w-12 h-12 text-primary' />
                      </div>
                    )}
                    {index === 1 && (
                      <div className='text-4xl'>
                        <DesignPencil className='w-12 h-12 text-primary' />
                      </div>
                    )}
                    {index === 2 && (
                      <div className='text-4xl'>
                        <PencilRuler className='w-12 h-12 text-primary' />
                      </div>
                    )}
                    {index === 3 && (
                      <div className='text-4xl'>
                        <PackageCheck className='w-12 h-12 text-primary' />
                      </div>
                    )}
                  </div>
                </div>

                {/* Decorative "Tape" effect for some items */}
                {index % 2 === 0 && (
                  <div className='absolute -top-4 -left-4 w-12 h-8 bg-primary/10 border-2 border-primary/20 backdrop-blur-[1px] rotate-[-45deg] z-20 opacity-50' />
                )}
              </div>
            )
          })}
        </div>

        {/* Bottom decorations */}
        <EraserDecoration className='absolute -bottom-10 left-10 w-20 h-16 opacity-10 rotate-12' />
        <PencilDecoration className='absolute top-40 right-10 w-16 h-16 opacity-10 rotate-[160deg]' />
      </div>

      {/* Chalkboard/Board Frame effect around section */}
      <div className='absolute top-0 left-0 w-full h-4 bg-primary-side/20' />
      <div className='absolute bottom-0 left-0 w-full h-4 bg-primary-side/20' />
    </section>
  )
}

export default HowWorks
