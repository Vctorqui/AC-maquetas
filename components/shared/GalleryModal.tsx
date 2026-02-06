'use client'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ServiceGalleryModalProps {
  isOpen: boolean
  onClose: () => void
  serviceName: string
  images: string[]
}

export function ServiceGalleryModal({
  isOpen,
  onClose,
  serviceName,
  images,
}: ServiceGalleryModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className='max-w-4xl max-h-[90vh] overflow-y-auto bg-background border-8 border-primary-side rounded-none p-0'>
        <div className='p-6'>
          <DialogHeader className='flex flex-row items-center justify-between space-y-0 pb-6'>
            <DialogTitle className='text-4xl font-black uppercase tracking-tighter text-primary'>
              {serviceName}
            </DialogTitle>
            <Button
              variant='outline'
              size='icon'
              className='static border-4 border-primary-side bg-secondary text-white hover:bg-secondary-side active:translate-x-1 active:translate-y-1 rounded-none h-12 w-12'
              onClick={onClose}
            >
              <X className='h-6 w-6 stroke-[4px]' />
            </Button>
          </DialogHeader>
          <div className='grid md:grid-cols-2 gap-8 mt-4'>
            {images.map((image, index) => (
              <div
                key={index}
                className='relative aspect-[4/3] border-4 border-primary-side bg-white shadow-[8px_8px_0px_var(--primary-side)] group transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0px_var(--primary-side)]'
              >
                <img
                  src={image || '/placeholder.svg'}
                  alt={`${serviceName} ejemplo ${index + 1}`}
                  className='w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300'
                />
                <div className='absolute bottom-0 left-0 bg-primary text-white font-bold text-xs uppercase px-2 py-1'>
                  VISTA_{String(index + 1).padStart(2, '0')}
                </div>
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
