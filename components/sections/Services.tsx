'use client'


import { services } from '@/utils/services/services.const'
import { PencilDecoration, RulerDecoration } from '../shared/CustomIcons'
import { Card, CardContent } from '../ui/card'
import { Package } from 'lucide-react'
import { useState } from 'react'
import { ServiceGalleryModal } from '../shared/GalleryModal'
import { serviceGalleries } from '@/utils/gallery/gallery.const'

const Services = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null)

  return (
    <section className='py-16 md:py-24 relative'>
      <PencilDecoration className='absolute top-20 left-5 w-12 h-12 opacity-15 -rotate-12 hidden md:block' />
      <RulerDecoration className='absolute top-1/2 right-5 w-28 h-7 opacity-15 rotate-90 hidden md:block' />

      <div className='container mx-auto px-4 relative z-10'>
        <div className='text-center mb-12 space-y-4'>
          <h2 className='text-3xl md:text-4xl font-bold text-balance'>
            Nuestros Servicios
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto text-pretty'>
            Ofrecemos una amplia variedad de trabajos escolares personalizados
            para todos los niveles educativos
          </p>
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {services.map((service) => (
            <Card
              key={service.name}
              onClick={() => setSelectedService(service.name)}
              className='hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer group'
            >
              <CardContent className='p-6 space-y-3'>
                <div className='w-12 h-12 bg-accent rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors'>
                  <Package className='w-6 h-6 text-accent-foreground group-hover:text-primary-foreground' />
                </div>
                <h3 className='font-bold text-lg'>{service.name}</h3>
                <p className='text-sm text-muted-foreground text-pretty'>
                  {service.description}
                </p>
                <p className='text-xs text-primary font-medium'>
                  Click para ver galería →
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {selectedService && (
        <ServiceGalleryModal
          isOpen={!!selectedService}
          onClose={() => setSelectedService(null)}
          serviceName={selectedService}
          images={serviceGalleries[selectedService] || []}
        />
      )}
    </section>
  )
}

export default Services
