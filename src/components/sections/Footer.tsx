'use client'

import { Waves, Instagram, Facebook, MapPin, Phone, Mail, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

const quickLinks = [
  { name: 'Modelos', href: '#modelos' },
  { name: 'Equipamiento', href: '#equipamiento' },
  { name: 'Proceso', href: '#proceso' },
  { name: 'Contacto', href: '#contacto' },
]

const services = [
  'Piscinas de Fibra',
  'Piscinas de Hormigón',
  'Equipamiento',
  'Climatización',
  'Mantenimiento',
]

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 pt-16 pb-8 overflow-hidden">
      {/* Top border with gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-600/40 to-transparent" />
      
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-amber-600/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <Waves className="h-7 w-7 sm:h-8 sm:w-8 text-cyan-500" />
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold text-slate-200 tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
                  El Hogar de las Piscinas
                </span>
                <span className="text-[9px] sm:text-[10px] text-cyan-500 tracking-widest uppercase">
                  Villa Mercedes
                </span>
              </div>
            </a>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Diseñamos, instalamos y equipamos espacios de agua pensados para durar toda la vida. Tu oasis en Villa Mercedes, San Luis.
            </p>

            {/* Social Links */}
            <div className="flex gap-2 sm:gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:bg-cyan-600 hover:text-white hover:border-cyan-600 transition-all"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:bg-cyan-600 hover:text-white hover:border-cyan-600 transition-all"
              >
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://wa.me/5492657123456"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-slate-200 font-semibold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Enlaces Rápidos
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-slate-200 font-semibold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Servicios
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-slate-400 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-slate-200 font-semibold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Contacto
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-400 text-sm">
                  Av. Principal 1234<br />
                  Villa Mercedes, San Luis
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                <a
                  href="tel:+5492657123456"
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  +54 9 2657 12-3456
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                <a
                  href="mailto:info@hogarpiscinas.com"
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  info@hogarpiscinas.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                <span className="text-slate-400 text-sm">
                  Lun - Sáb: 8:00 - 18:00
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* WhatsApp CTA */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-800/50 border border-slate-700 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <p className="text-slate-200 font-semibold mb-1 text-sm sm:text-base">
                ¿Tenés dudas? Chateá con nosotros
              </p>
              <p className="text-slate-400 text-xs sm:text-sm">
                Respondemos al instante por WhatsApp
              </p>
            </div>
            <Button
              asChild
              className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white rounded-full px-6 sm:px-8 shadow-lg shadow-emerald-600/20 w-full sm:w-auto"
            >
              <a
                href="https://wa.me/5492657123456"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                Escribinos por WhatsApp
              </a>
            </Button>
          </div>
        </div>

        <Separator className="bg-slate-800 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} El Hogar de las Piscinas VM. Todos los derechos reservados.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-slate-500 text-sm">
            <span>Villa Mercedes, San Luis, Argentina</span>
            <span className="hidden sm:inline">•</span>
            <a
              href="https://rbernabe.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors"
            >
              diseñado por <span className="font-medium">rbernabe.dev</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
