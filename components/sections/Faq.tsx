import { faqs } from '@/utils/faqs/faqs.const'
import { CompassDecoration } from '../shared/CustomIcons'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const Faq = () => {
  return (
    <section className='py-16 md:py-32 relative overflow-hidden bg-background'>
      <CompassDecoration className='absolute top-10 left-10 w-20 h-20 opacity-10 hidden lg:block' />

      <div className='container mx-auto px-4 relative z-10'>
        <div className='text-center mb-16 space-y-4'>
          <h2 className='text-4xl md:text-5xl font-black uppercase tracking-tighter text-primary'>
            DUDAS <span className='text-secondary'>FRECUENTES</span>
          </h2>
        </div>
        <div className='max-w-3xl mx-auto'>
          <Accordion type='single' collapsible className='w-full space-y-6'>
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className='border-4 border-primary bg-white shadow-[6px_6px_0px_var(--primary-side)] mb-4'
              >
                <AccordionTrigger
                  style={{ borderRadius: '0px' }}
                  className='hover:no-underline text-left font-black uppercase text-base py-6 px-6 tracking-tight group data-[state=open]:bg-primary data-[state=open]:text-white transition-colors'
                >
                  <div className='flex items-center gap-4'>
                    <div className='w-8 h-8 bg-secondary border-2 border-secondary-side flex items-center justify-center text-white text-xs font-black group-data-[state=open]:bg-white group-data-[state=open]:text-secondary'>
                      ?
                    </div>
                    {faq.question}
                  </div>
                </AccordionTrigger>
                <AccordionContent className='text-muted-foreground font-bold text-sm pb-8 px-10 leading-relaxed border-t-2 border-primary/10 pt-4'>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

export default Faq
