import { faqs } from "@/utils/faqs/faqs.const"
import { CompassDecoration } from "../shared/CustomIcons"
import { Card, CardContent } from "../ui/card"

const Faq = () => {
  return (
    <section className='py-16 md:py-24 relative'>
      <CompassDecoration className='absolute top-10 left-10 w-20 h-20 opacity-10 hidden lg:block' />

      <div className='container mx-auto px-4 relative z-10'>
        <div className='text-center mb-12 space-y-4'>
          <h2 className='text-3xl md:text-4xl font-bold text-balance'>
            Preguntas Frecuentes
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto text-pretty'>
            Resolvemos tus dudas más comunes
          </p>
        </div>
        <div className='max-w-3xl mx-auto space-y-4'>
          {faqs.map((faq) => (
            <Card key={faq.question}>
              <CardContent className='p-6 space-y-2'>
                <h3 className='font-semibold text-lg'>{faq.question}</h3>
                <p className='text-muted-foreground text-pretty'>
                  {faq.answer}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Faq
