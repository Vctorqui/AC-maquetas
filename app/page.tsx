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
  return (
    <PublicLayout>
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
