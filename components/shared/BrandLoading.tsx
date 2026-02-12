'use client'

import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { PencilDecoration, RulerDecoration } from './CustomIcons'

export default function BrandLoading() {
  return (
    <div className='min-h-screen w-full flex flex-col items-center justify-center bg-background relative overflow-hidden'>
      <div className='absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none' />
      <div className='absolute inset-0 bg-notebook-lines opacity-10 pointer-events-none' />

      <div className='relative z-10 flex flex-col items-center gap-8'>
        <div className='relative w-48 h-48 perspective-container'>
          <motion.div
            className='absolute inset-0 flex items-center justify-center'
            animate={{
              y: [0, -15, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <div className='w-24 h-24 bg-white border-4 border-primary shadow-[10px_10px_0px_var(--primary-side)] relative overflow-hidden flex items-center justify-center'>
              <Sparkles className='w-10 h-10 text-primary animate-pulse' />
              <div className='absolute -right-6 -bottom-6 w-12 h-12 bg-secondary rotate-12 opacity-20' />
            </div>
          </motion.div>

          <div className='absolute -top-4 -right-4 w-16 h-16'>
            <PencilDecoration className='w-full h-full' />
          </div>

          <div className='absolute -bottom-8 -left-8 w-40 h-10'>
            <RulerDecoration className='w-full h-full opacity-60' />
          </div>
        </div>

        <div className='flex flex-col items-center gap-4'>
          <div className='flex items-center gap-3'>
            <div className='w-3 h-3 bg-primary animate-bounce' />
            <div className='w-3 h-3 bg-secondary animate-bounce [animation-delay:0.2s]' />
            <div className='w-3 h-3 bg-accent animate-bounce [animation-delay:0.4s]' />
          </div>

          <h2 className='text-2xl font-black uppercase tracking-tighter text-primary flex items-center gap-2'>
            Maquetando <span className='text-secondary'>ideas</span>
          </h2>

          <div className='w-48 h-2 bg-muted overflow-hidden border-2 border-primary'>
            <motion.div
              className='h-full bg-primary'
              animate={{
                x: ['-100%', '200%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </div>

          <p className='text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground'>
            AC Maquetas
          </p>
        </div>
      </div>

      <div className='absolute top-10 left-10 w-20 h-2 bg-primary/20 -rotate-45' />
      <div className='absolute bottom-10 right-10 w-20 h-2 bg-secondary/20 -rotate-45' />
    </div>
  )
}
