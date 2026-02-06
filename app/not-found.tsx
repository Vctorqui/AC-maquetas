'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import PublicLayout from '@/layout/PublicLayout'
import { Button } from '@/components/ui/button'
import { Home } from 'lucide-react'
import {
  EraserDecoration,
  PencilDecoration,
  RulerDecoration,
} from '@/components/shared/CustomIcons'

export default function NotFound() {
  return (
    <PublicLayout>
      <div className='min-h-[70vh] flex items-center justify-center relative overflow-hidden py-20'>
        {/* Background decorations */}
        <div className='absolute inset-0 pointer-events-none opacity-5'>
          <div className='absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]' />
        </div>

        <PencilDecoration className='absolute top-20 right-[10%] w-24 h-24 opacity-20 -rotate-12 hidden md:block' />
        <EraserDecoration className='absolute bottom-20 left-[10%] w-24 h-20 opacity-20 rotate-12 hidden md:block' />
        <RulerDecoration className='absolute top-1/2 left-0 w-48 h-10 opacity-10 -rotate-90 hidden lg:block' />

        <div className='container mx-auto px-4 relative z-10 text-center'>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className='space-y-8'
          >
            {/* 404 visual */}
            <div className='relative inline-block'>
              <motion.h1
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className='text-9xl md:text-[12rem] font-black tracking-tighter text-primary'
                style={{
                  WebkitTextStroke: '4px var(--primary)',
                  color: 'transparent',
                  filter: 'drop-shadow(8px 8px 0px var(--primary-side))',
                }}
              >
                404
              </motion.h1>

              {/* Eraser mark effect */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 1, duration: 1.5 }}
                className='absolute top-1/2 left-0 h-8 md:h-12 bg-white/80 backdrop-blur-sm -rotate-2 origin-left border-y-2 border-primary/10'
              />
            </div>

            <div className='max-w-md mx-auto space-y-4'>
              <h2 className='text-3xl md:text-5xl font-black uppercase tracking-tighter text-primary'>
                ¡UPS! PÁGINA <br />
                <span className='text-accent'>NO ENTREGADA</span>
              </h2>
              <p className='text-lg font-bold text-muted-foreground'>
                Esta página se saltó la clase o fue borrada de la pizarra. No te
                preocupes, ¡podemos volver al salón principal!
              </p>
            </div>

            <div className='pt-8'>
              <Button
                size='lg'
                asChild
                className='h-16 px-10 bg-primary text-white font-black text-xl uppercase tracking-tighter shadow-[8px_8px_0px_var(--primary-side)] active:shadow-none active:translate-x-2 active:translate-y-2 transition-all rounded-none'
              >
                <Link href='/'>
                  <Home className='w-6 h-6 mr-2' />
                  Volver al Inicio
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </PublicLayout>
  )
}
