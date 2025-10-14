import { ReactNode } from 'react'
import Footer from './Footer'
import Header from './Header'
import WhatsAppFloat from '@/components/shared/WhatsAppFloat'

const PublicLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='min-h-screen relative'>
      <div className='fixed inset-0 bg-grid-pattern opacity-30 pointer-events-none' />
      <Header />
      <div className='mx-auto max-w-7xl'>{children}</div>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

export default PublicLayout
