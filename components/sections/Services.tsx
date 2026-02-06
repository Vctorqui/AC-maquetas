'use client'

import { services } from '@/utils/services/services.const'
import { PencilDecoration, RulerDecoration } from '../shared/CustomIcons'
import { Package } from 'lucide-react'
import { useState } from 'react'
import { ServiceGalleryModal } from '../shared/GalleryModal'
import { serviceGalleries } from '@/utils/gallery/gallery.const'

const Services = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null)

  return (
    <section className='py-16 md:py-32 relative overflow-hidden bg-background'>
      <PencilDecoration className='absolute top-20 left-5 w-12 h-12 opacity-15 -rotate-12 hidden md:block' />
      <RulerDecoration className='absolute top-1/2 right-5 w-28 h-7 opacity-15 rotate-90 hidden md:block' />

      <div className='container mx-auto px-4 relative z-10'>
        <div className='text-center mb-20 space-y-4'>
          <h2 className='text-4xl md:text-5xl font-black uppercase tracking-tighter text-primary'>
            NUESTROS{' '}
            <span
              className='text-secondary'
              style={{ textShadow: '4px 4px 0px var(--secondary-side)' }}
            >
              SERVICIOS
            </span>
          </h2>
          <div className='w-24 h-2 bg-primary mx-auto' />
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 perspective-container'>
          {services.map((service) => (
            <div
              key={service.name}
              onClick={() => setSelectedService(service.name)}
              className='group relative bg-white border-4 border-primary p-8 pt-12 shadow-[8px_8px_0px_var(--primary-side)] hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[16px_16px_0px_var(--primary-side)] transition-all cursor-pointer'
            >
              {/* Box Lid Effect */}
              <div className='absolute top-0 left-0 w-full h-4 bg-primary-top opacity-50' />

              <div className='w-16 h-16 bg-secondary flex items-center justify-center mb-6 long-shadow-orange transform group-hover:scale-110 transition-transform'>
                <Package className='w-8 h-8 text-white' />
              </div>

              <h3 className='font-black text-xl uppercase tracking-tighter text-primary mb-3'>
                {service.name}
              </h3>

              <p className='text-sm font-bold text-muted-foreground leading-snug mb-6'>
                {service.description}
              </p>

              <div className='flex items-center gap-2 group/btn'>
                <div className='w-6 h-6 border-2 border-secondary bg-transparent flex items-center justify-center font-black text-secondary text-[10px]'>
                  →
                </div>
                <span className='text-[10px] font-black uppercase tracking-widest text-secondary group-hover/btn:underline'>
                  Ver Galería
                </span>
              </div>
            </div>
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
