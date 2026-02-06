'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function PencilDecoration({ className = '' }: { className?: string }) {
  return (
    <motion.svg
      viewBox='0 0 100 100'
      className={className}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      animate={{
        y: [0, -10, 0],
        rotate: [160, 165, 160],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <path
        d='M20 80L30 20L35 18L40 20L50 80L45 82L40 80L35 82L30 80L25 82L20 80Z'
        fill='oklch(0.85 0.12 85)'
        stroke='oklch(0.15 0.02 60)'
        strokeWidth='2'
      />
      <path
        d='M30 20L35 10L40 20'
        fill='oklch(0.95 0.15 45)'
        stroke='oklch(0.15 0.02 60)'
        strokeWidth='2'
      />
      <rect x='32' y='25' width='6' height='15' fill='oklch(0.45 0.08 280)' />
      <circle cx='35' cy='70' r='3' fill='oklch(0.15 0.02 60)' />
    </motion.svg>
  )
}

export function RulerDecoration({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox='0 0 200 40'
      className={className}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        x='5'
        y='5'
        width='190'
        height='30'
        fill='oklch(0.92 0.08 85)'
        stroke='oklch(0.15 0.02 60)'
        strokeWidth='2'
        rx='3'
      />
      {[...Array(19)].map((_, i) => (
        <line
          key={i}
          x1={15 + i * 10}
          y1={i % 5 === 0 ? 10 : 15}
          x2={15 + i * 10}
          y2='30'
          stroke='oklch(0.15 0.02 60)'
          strokeWidth='1.5'
        />
      ))}
    </svg>
  )
}

export function CompassDecoration({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox='0 0 100 100'
      className={className}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='50' cy='50' r='3' fill='oklch(0.45 0.08 280)' />
      <path
        d='M50 50L30 85'
        stroke='oklch(0.45 0.08 280)'
        strokeWidth='3'
        strokeLinecap='round'
      />
      <path
        d='M50 50L70 85'
        stroke='oklch(0.45 0.08 280)'
        strokeWidth='3'
        strokeLinecap='round'
      />
      <circle cx='30' cy='85' r='4' fill='oklch(0.15 0.02 60)' />
      <path
        d='M70 85L70 88'
        stroke='oklch(0.15 0.02 60)'
        strokeWidth='2'
        strokeLinecap='round'
      />
    </svg>
  )
}

export function NotebookDecoration({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox='0 0 100 120'
      className={className}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        x='15'
        y='10'
        width='70'
        height='100'
        fill='oklch(0.98 0.01 85)'
        stroke='oklch(0.15 0.02 60)'
        strokeWidth='2'
        rx='2'
      />
      <line
        x1='30'
        y1='10'
        x2='30'
        y2='110'
        stroke='oklch(0.75 0.08 280 / 0.3)'
        strokeWidth='2'
      />
      {[...Array(8)].map((_, i) => (
        <line
          key={i}
          x1='35'
          y1={25 + i * 12}
          x2='80'
          y2={25 + i * 12}
          stroke='oklch(0.75 0.08 280 / 0.2)'
          strokeWidth='1'
        />
      ))}
    </svg>
  )
}

export function EraserDecoration({ className = '' }: { className?: string }) {
  return (
    <motion.svg
      viewBox='0 0 80 60'
      className={className}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      animate={{
        x: [0, 15, 0],
        rotate: [12, 5, 12],
      }}
      transition={{
        duration: 7,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <rect
        x='10'
        y='20'
        width='60'
        height='25'
        fill='oklch(0.95 0.15 45)'
        stroke='oklch(0.15 0.02 60)'
        strokeWidth='2'
        rx='3'
      />
      <rect
        x='10'
        y='35'
        width='60'
        height='10'
        fill='oklch(0.45 0.08 280 / 0.3)'
      />
    </motion.svg>
  )
}

export function WhatsAppDecoration({
  className = '',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      className={className}
      color={color}
      viewBox='0 0 24 24'
    >
      <path
        d='M22 12c0 5.523-4.477 10-10 10a9.96 9.96 0 0 1-5-1.338L2 21.5l.832-5.5A10 10 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10'
        stroke={color}
      />
      <path
        d='m12.96 13.868 2.08-.406 1.96.753v1.823c0 .607-.522 1.07-1.11.94-1.523-.334-4.29-1.174-6.212-3.11-1.83-1.843-2.455-4.41-2.668-5.827C6.925 7.474 7.374 7 7.943 7h1.894l.735 1.969-.389 2.101'
        stroke={color}
      />
    </svg>
  )
}

export function ACLogo({ className = '' }: { className?: string }) {
  return (
    <Image
      src='/ac-logo.svg'
      alt='Logo'
      width={100}
      height={100}
      className={className}
    />
  )
}

export function PencilRuler({ className = '' }: { className?: string }) {
  return (
    <motion.svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      className={`lucide lucide-pencil-ruler-icon lucide-pencil-ruler ${className}`}
      viewBox='0 0 24 24'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
    >
      <motion.path
        d='M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13m1-7 2-2m8 12 2-2m-3-3 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497zM15 5l4 4'
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          visible: {
            pathLength: 1,
            opacity: 1,
            transition: { duration: 1.5, ease: 'easeInOut' },
          },
        }}
      />
    </motion.svg>
  )
}

export function PackageCheck({ className = '' }: { className?: string }) {
  return (
    <motion.svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={`lucide lucide-package-check-icon lucide-package-check ${className}`}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
    >
      <motion.path
        d='m16 16 2 2 4-4'
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          visible: {
            pathLength: 1,
            opacity: 1,
            transition: { duration: 0.5, delay: 1 },
          },
        }}
      />
      <motion.path
        d='M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14'
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          visible: {
            pathLength: 1,
            opacity: 1,
            transition: { duration: 1, ease: 'easeInOut' },
          },
        }}
      />
      <motion.path
        d='m7.5 4.27 9 5.15'
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          visible: {
            pathLength: 1,
            opacity: 1,
            transition: { duration: 0.5, delay: 0.5 },
          },
        }}
      />
      <motion.polyline
        points='3.29 7 12 12 20.71 7'
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          visible: {
            pathLength: 1,
            opacity: 1,
            transition: { duration: 0.8, delay: 0.3 },
          },
        }}
      />
      <motion.line
        x1='12'
        x2='12'
        y1='22'
        y2='12'
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          visible: {
            pathLength: 1,
            opacity: 1,
            transition: { duration: 0.5, delay: 0.8 },
          },
        }}
      />
    </motion.svg>
  )
}

export function DesignPencil({ className = '' }: { className?: string }) {
  return (
    <motion.svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={`lucide lucide-design-pencil-icon lucide-design-pencil ${className}`}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
    >
      <motion.path
        d='M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z'
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          visible: {
            pathLength: 1,
            opacity: 1,
            transition: { duration: 1.5, ease: 'easeInOut' },
          },
        }}
      />
      <motion.path
        d='M8 21.1679V14L12 7L16 14V21.1679'
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          visible: {
            pathLength: 1,
            opacity: 1,
            transition: { duration: 1, delay: 0.5 },
          },
        }}
      />
      <motion.path
        d='M8 14C8 14 9.12676 15 10 15C10.8732 15 12 14 12 14C12 14 13.1268 15 14 15C14.8732 15 16 14 16 14'
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          visible: {
            pathLength: 1,
            opacity: 1,
            transition: { duration: 0.8, delay: 1 },
          },
        }}
      />
    </motion.svg>
  )
}

export function Smartphone({ className = '' }: { className?: string }) {
  return (
    <motion.svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={`lucide lucide-smartphone-icon lucide-smartphone ${className}`}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
    >
      <motion.rect
        width='14'
        height='20'
        x='5'
        y='2'
        rx='2'
        ry='2'
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          visible: {
            pathLength: 1,
            opacity: 1,
            transition: { duration: 1.5, ease: 'easeInOut' },
          },
        }}
      />
      <motion.path
        d='M12 18h.01'
        variants={{
          hidden: { scale: 0, opacity: 0 },
          visible: {
            scale: 1,
            opacity: 1,
            transition: { delay: 1, duration: 0.3 },
          },
        }}
      />
    </motion.svg>
  )
}
