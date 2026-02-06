import { whyChooseUs } from '@/utils/const'
import { EraserDecoration, NotebookDecoration } from '../shared/CustomIcons'

const ChooseUs = () => {
  return (
    <section className='bg-iso-grid/5 py-16 md:py-24 relative border-t-4 border-primary-side'>
      <NotebookDecoration className='absolute top-10 left-10 w-20 h-24 opacity-10 hidden lg:block' />
      <EraserDecoration className='absolute bottom-10 right-10 w-16 h-12 opacity-10 hidden lg:block' />

      <div className='container mx-auto px-4 relative z-10'>
        <div className='text-center mb-16 space-y-4'>
          <h2 className='text-4xl md:text-5xl font-black uppercase tracking-tighter text-primary'>
            ¿Por qué{' '}
            <span
              className='text-white'
              style={{
                WebkitTextStroke: '2px var(--primary)',
                textShadow: '4px 4px 0px var(--primary-side)',
              }}
            >
              elegirnos?
            </span>
          </h2>
          <p className='text-lg font-bold text-muted-foreground max-w-2xl mx-auto'>
            Excelencia isométrica en cada proyecto escolar.
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {whyChooseUs.map((item) => (
            <div
              key={item.title}
              className='bg-white border-4 border-primary p-8 space-y-4 shadow-[8px_8px_0px_var(--primary-side)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[12px_12px_0px_var(--primary-side)] transition-all cursor-default'
            >
              <div className='w-14 h-14 bg-primary flex items-center justify-center transform -rotate-12 shadow-[4px_4px_0px_var(--primary-side)]'>
                <item.icon className='w-7 h-7 text-white' />
              </div>
              <h3 className='font-black text-xl uppercase tracking-tighter text-primary'>
                {item.title}
              </h3>
              <p className='text-sm font-bold text-muted-foreground leading-tight'>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ChooseUs
