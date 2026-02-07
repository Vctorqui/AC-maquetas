import type React from 'react'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import { Suspense } from 'react'
import './globals.css'

export const metadata: Metadata = {
  title:
    'AC Maquetas | Trabajos Escolares, Maquetas y Láminas Personalizadas en Venezuela',
  description:
    'Expertos en la creación de maquetas escolares, láminas educativas y proyectos estudiantiles en Venezuela. Creatividad, calidad y puntualidad para tus tareas escolares.',
  keywords: [
    'maquetas escolares venezuela',
    'trabajos escolares caracas',
    'proyectos escolares personalizados',
    'láminas educativas',
    'trípticos escolares',
    'birretes personalizados',
    'AC Maquetas',
    'diseño de tareas escolares',
  ],
  alternates: {
    canonical: 'https://acmaquetas.lat',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'AC Maquetas | Excelencia en Trabajos Escolares y Maquetas',
    description:
      'Diseños y trabajos escolares personalizados en Venezuela. Maquetas, láminas y proyectos con acabados profesionales.',
    type: 'website',
    locale: 'es_VE',
    url: 'https://acmaquetas.lat',
    siteName: 'AC Maquetas',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AC Maquetas | Maquetas y Trabajos Escolares',
    description:
      'Creatividad y perfección en cada proyecto escolar en Venezuela.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='es'>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense
          fallback={
            <div className='min-h-screen flex items-center justify-center bg-background'>
              Cargando...
            </div>
          }
        >
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
