import type React from 'react'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import { Suspense } from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: 'Trabajos Escolares - Maquetas, Láminas y Más',
  description:
    'Diseños y trabajos escolares personalizados. Maquetas, láminas, portadas, trípticos, dípticos, lapbooks, carteleras y birretes. Excelencia, creatividad y perfección.',
  openGraph: {
    title: 'Trabajos Escolares - Maquetas, Láminas y Más',
    description:
      'Diseños y trabajos escolares personalizados. Excelencia, creatividad y perfección.',
    type: 'website',
    locale: 'es_ES',
    url: 'https://ac-maquetas.vercel.app', // Fallback URL
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trabajos Escolares - Maquetas, Láminas y Más',
    description:
      'Diseños y trabajos escolares personalizados. Excelencia, creatividad y perfección.',
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
