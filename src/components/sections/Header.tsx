'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Waves } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

const navLinks = [
  { name: 'Modelos', href: '#modelos' },
  { name: 'Proceso', href: '#proceso' },
  { name: 'Nosotros', href: '#nosotros' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-2 text-white"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Waves className="h-6 w-6 sm:h-8 sm:w-8 text-cyan-400 flex-shrink-0" />
            <div className="flex flex-col min-w-0">
              <span className="text-sm xs:text-base sm:text-lg md:text-xl font-bold tracking-tight truncate" style={{ fontFamily: 'var(--font-display)' }}>
                <span className="hidden sm:inline">El Hogar de las Piscinas</span>
                <span className="sm:hidden">Piscinas VM</span>
              </span>
              <span className="text-[8px] sm:text-[10px] text-cyan-300 tracking-widest uppercase">
                Villa Mercedes
              </span>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <motion.ul
            className="hidden md:flex items-center gap-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {navLinks.map((link, index) => (
              <li key={link.name}>
                <button
                  onClick={() => scrollToSection(link.href)}
                  className="text-white/80 hover:text-cyan-400 transition-colors duration-300 text-sm font-medium tracking-wide hover:underline underline-offset-4 decoration-cyan-400/50"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </motion.ul>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:block"
          >
            <Button
              onClick={() => scrollToSection('#contacto')}
              className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-white px-6 py-2.5 rounded-full font-medium shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:shadow-cyan-500/40 hover:scale-105"
            >
              Solicitar Presupuesto
            </Button>
          </motion.div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="glass w-[280px] border-l border-white/10">
              <div className="flex flex-col h-full pt-12">
                <div className="flex items-center gap-2 mb-8">
                  <Waves className="h-7 w-7 text-cyan-400" />
                  <span className="text-lg font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
                    El Hogar de las Piscinas
                  </span>
                </div>
                
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link, index) => (
                    <motion.button
                      key={link.name}
                      onClick={() => scrollToSection(link.href)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="text-left text-white/80 hover:text-cyan-400 transition-colors py-3 border-b border-white/10 text-lg"
                    >
                      {link.name}
                    </motion.button>
                  ))}
                </nav>

                <div className="mt-auto pb-8">
                  <Button
                    onClick={() => scrollToSection('#contacto')}
                    className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-white py-6 rounded-full font-medium shadow-lg shadow-cyan-500/25"
                  >
                    Solicitar Presupuesto
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  )
}
