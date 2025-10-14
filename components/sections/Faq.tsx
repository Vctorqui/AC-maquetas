'use client'
import { Card, CardContent } from '../ui/card'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: '¿Cuánto tiempo toma elaborar un trabajo?',
      answer:
        'El tiempo de elaboración varía según la complejidad del proyecto. Generalmente tomamos entre 2 a 5 días hábiles para completar tu trabajo escolar.',
    },
    {
      question: '¿Qué tipos de trabajos realizan?',
      answer:
        'Realizamos maquetas, láminas, portadas, proyectos de investigación, presentaciones visuales y cualquier tipo de trabajo escolar que necesites.',
    },
    {
      question: '¿Los precios incluyen materiales?',
      answer:
        'Sí, todos nuestros precios incluyen los materiales necesarios para la elaboración del trabajo. No hay costos adicionales ocultos.',
    },
    {
      question: '¿Hacen trabajos para universidad?',
      answer:
        'Por supuesto. Trabajamos con estudiantes de todos los niveles: primaria, secundaria y universidad. Adaptamos la complejidad según el nivel académico.',
    },
    {
      question: '¿Puedo ver el trabajo antes de la entrega?',
      answer:
        'Sí, te enviamos fotos del progreso del trabajo para que puedas revisar y sugerir ajustes si es necesario.',
    },
    {
      question: '¿Qué pasa si no estoy satisfecho con el trabajo?',
      answer:
        'Garantizamos tu satisfacción. Si no estás conforme con el resultado, hacemos las correcciones necesarias sin costo adicional.',
    },
  ]

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className='py-16 md:py-24'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12 space-y-4'>
          <h2 className='text-3xl md:text-4xl font-bold text-balance'>
            Preguntas Frecuentes
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto text-pretty'>
            Resolvemos las dudas más comunes sobre nuestros servicios
          </p>
        </div>

        <div className='max-w-3xl mx-auto space-y-4'>
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className='relative bg-gradient-to-br from-card to-accent/20 border-2 border-primary/20 shadow-lg hover:shadow-xl hover:border-primary/40'
            >
              <CardContent className='p-0'>
                <button
                  className='w-full p-6 text-left flex items-center justify-between'
                  onClick={() => toggleFaq(index)}
                >
                  <span className='font-semibold text-base'>
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className='px-6 pb-6'>
                    <p className='text-muted-foreground text-pretty leading-relaxed'>
                      {faq.answer}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Faq
