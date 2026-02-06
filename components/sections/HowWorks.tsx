import { EraserDecoration, PencilDecoration } from '../shared/CustomIcons'
import { process } from '@/utils/const'

const HowWorks = () => {
  return (
    <section className='py-16 md:py-32 relative overflow-hidden bg-background'>
      <EraserDecoration className='absolute top-10 left-10 w-16 h-12 opacity-15 rotate-6 hidden lg:block' />
      <PencilDecoration className='absolute bottom-20 right-10 w-14 h-14 opacity-15 -rotate-45 hidden lg:block' />

      <div className='container mx-auto px-4 relative z-10'>
        <div className='text-center mb-20 space-y-4'>
          <h2 className='text-4xl md:text-5xl font-black uppercase tracking-tighter text-primary'>
            EL{' '}
            <span
              className='text-secondary'
              style={{ textShadow: '4px 4px 0px var(--secondary-side)' }}
            >
              PROCESO
            </span>
          </h2>
          <div className='w-24 h-2 bg-secondary mx-auto' />
        </div>

        {/* Staircase Isometric Design */}
        <div className='perspective-container hidden lg:block h-[600px] mt-10'>
          <div className='relative w-full h-full'>
            {process.map((item, index) => (
              <div
                key={item.step}
                className='absolute isometric-view group cursor-default'
                style={{
                  left: `${index * 20}%`,
                  bottom: `${index * 15}%`,
                  width: '300px',
                  zIndex: 4 - index,
                }}
              >
                {/* 3D Cube Body */}
                <div className='relative w-full h-48 bg-white border-4 border-primary shadow-[15px_15px_0px_var(--primary-side)] group-hover:translate-x-[-5px] group-hover:translate-y-[-5px] group-hover:shadow-[20px_20px_0px_var(--primary-side)] transition-all p-6 flex flex-col justify-end'>
                  {/* Step Number Tag */}
                  <div className='absolute -top-10 -left-6 w-16 h-16 bg-secondary border-4 border-secondary-side flex items-center justify-center text-3xl font-black text-white long-shadow-orange transform -rotate-12'>
                    {item.step}
                  </div>

                  <div className='space-y-2'>
                    <h3 className='font-black text-xl uppercase tracking-tighter text-primary'>
                      {item.title}
                    </h3>
                    <p className='text-xs font-bold text-muted-foreground leading-tight'>
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Guide line */}
            <div className='absolute bottom-0 left-0 w-full h-2 bg-primary/20 transform rotate-[-15deg] origin-left translate-y-20' />
          </div>
        </div>

        {/* Mobile/Tablet view - Stacked Blocks */}
        <div className='lg:hidden space-y-12'>
          {process.map((item) => (
            <div key={item.step} className='relative pl-10'>
              <div className='absolute left-0 top-0 w-12 h-12 bg-secondary border-4 border-secondary-side flex items-center justify-center text-xl font-black text-white long-shadow-orange transform -rotate-6 z-20'>
                {item.step}
              </div>
              <div className='bg-white border-4 border-primary p-8 shadow-[8px_8px_0px_var(--primary-side)]'>
                <h3 className='font-black text-xl uppercase tracking-tighter text-primary mb-2'>
                  {item.title}
                </h3>
                <p className='text-sm font-bold text-muted-foreground leading-tight'>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowWorks
