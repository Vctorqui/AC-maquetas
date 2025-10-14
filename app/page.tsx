
import PublicLayout from '@/layout/PublicLayout'
import HeroSection from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import ChooseUs from '@/components/sections/ChooseUs'
import Portfolio from '@/components/sections/Portfolio'
import HowWorks from '@/components/sections/HowWorks'
import Testimonials from '@/components/sections/Testimonials'
import Faq from '@/components/sections/Faq'
import Cta from '@/components/sections/Cta'

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
