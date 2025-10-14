'use client'
import { Menu, X, Pencil } from 'lucide-react'
import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='mx-auto max-w-7xl px-4'>
        <div className='flex h-16 items-center justify-between'>
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Pencil className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-bold text-lg leading-tight">Trabajos</h1>
              <p className="text-xs text-muted-foreground leading-tight">Escolares</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex items-center space-x-6'>
            <a
              href='#inicio'
              className='text-sm font-medium transition-colors hover:text-primary'
            >
              Inicio
            </a>
            <a
              href='#servicios'
              className='text-sm font-medium transition-colors hover:text-primary'
            >
              Servicios
            </a>
            <a
              href='#precios'
              className='text-sm font-medium transition-colors hover:text-primary'
            >
              Precios
            </a>
            <a
              href='#contacto'
              className='text-sm font-medium transition-colors hover:text-primary'
            >
              Contacto
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className='md:hidden p-2'
            onClick={toggleMenu}
            aria-label='Toggle menu'
          >
            {isMenuOpen ? (
              <X className='h-6 w-6' />
            ) : (
              <Menu className='h-6 w-6' />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className='md:hidden border-t py-4'>
            <nav className='flex flex-col space-y-4'>
              <a
                href='#inicio'
                className='text-sm font-medium transition-colors hover:text-primary'
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </a>
              <a
                href='#servicios'
                className='text-sm font-medium transition-colors hover:text-primary'
                onClick={() => setIsMenuOpen(false)}
              >
                Servicios
              </a>
              <a
                href='#precios'
                className='text-sm font-medium transition-colors hover:text-primary'
                onClick={() => setIsMenuOpen(false)}
              >
                Precios
              </a>
              <a
                href='#contacto'
                className='text-sm font-medium transition-colors hover:text-primary'
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
