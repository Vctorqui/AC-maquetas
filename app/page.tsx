import dynamic from 'next/dynamic'
import PublicLayout from '@/layout/PublicLayout'
import HeroSection from '@/components/sections/Hero'
import ChooseUs from '@/components/sections/ChooseUs'

const Services = dynamic(() => import('@/components/sections/Services'))
const Portfolio = dynamic(() => import('@/components/sections/Portfolio'))
const HowWorks = dynamic(() => import('@/components/sections/HowWorks'))
const Testimonials = dynamic(() => import('@/components/sections/Testimonials'))
const Faq = dynamic(() => import('@/components/sections/Faq'))
const Cta = dynamic(() => import('@/components/sections/Cta'))

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'AC Maquetas',
    image: 'https://acmaquetas.lat/og-image.jpg', // Replace with actual image if exists
    '@id': 'https://acmaquetas.lat',
    url: 'https://acmaquetas.lat',
    telephone: '', // Add if available in const.ts
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'VE',
      addressLocality: 'Venezuela',
    },
    areaServed: [
      {
        '@type': 'Country',
        name: 'Venezuela',
      },
    ],
    description:
      'Especialistas en la creación de maquetas, láminas y proyectos escolares personalizados en Venezuela.',
    offers: {
      '@type': 'Offer',
      itemOffered: [
        {
          '@type': 'Service',
          name: 'Maquetas Escolares',
        },
        {
          '@type': 'Service',
          name: 'Láminas Educativas',
        },
        {
          '@type': 'Service',
          name: 'Proyectos de Biología, Química e Historia',
        },
      ],
    },
  }

  return (
    <PublicLayout>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      {/* Why Choose Us Section */}
      <ChooseUs />
      <Services />
      <Portfolio />
      <HowWorks />
      <Testimonials />
      <Faq />
      <Cta />
    </PublicLayout>
  )
}
