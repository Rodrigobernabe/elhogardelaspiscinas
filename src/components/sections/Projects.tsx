'use client'

import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'

const projects = [
  {
    id: 1,
    image: '/images/pools/fiberglass-pool.png',
    title: 'Piscina de Fibra - Barrio Privado',
    location: 'Villa Mercedes',
    quote: 'Increíble trabajo. En menos de una semana teníamos nuestra piscina lista para disfrutar.',
    author: 'Familia Rodríguez',
    rating: 5,
  },
  {
    id: 2,
    image: '/images/pools/concrete-pool.png',
    title: 'Piscina de Hormigón - Casa Quinta',
    location: 'La Calera',
    quote: 'El diseño quedó exactamente como lo soñamos. Atención personalizada de principio a fin.',
    author: 'Gabriel Martínez',
    rating: 5,
  },
  {
    id: 3,
    image: '/images/pools/project-waterfall.png',
    title: 'Piscina con Cascada - Jardín',
    location: 'Villa Mercedes',
    quote: 'La cascada le dio un toque especial. Nuestros hijos pasan todo el verano en el agua.',
    author: 'Carolina López',
    rating: 5,
  },
  {
    id: 4,
    image: '/images/pools/project-night.png',
    title: 'Piscina con Iluminación LED',
    location: 'San Luis Capital',
    quote: 'Las noches de verano son mágicas con la iluminación LED. Muy recomendado.',
    author: 'Diego Fernández',
    rating: 5,
  },
  {
    id: 5,
    image: '/images/pools/intro-family.png',
    title: 'Piscina Familiar - Barrio Cerrado',
    location: 'Villa Mercedes',
    quote: 'Profesionales de principio a fin. Nos asesoraron en cada detalle y el resultado superó nuestras expectativas.',
    author: 'Familia Gutiérrez',
    rating: 5,
  },
  {
    id: 6,
    image: '/images/pools/hero-poster.png',
    title: 'Piscina Infinity - Residencia',
    location: 'Potrero de los Funes',
    quote: 'La pileta quedó espectacular. El equipo cumplió con los tiempos y el presupuesto acordado.',
    author: 'Roberto Sánchez',
    rating: 5,
  },
  {
    id: 7,
    image: '/images/pools/equipment.png',
    title: 'Renovación Completa',
    location: 'San Luis Capital',
    quote: 'Renovaron nuestra piscina de 20 años y quedó como nueva. Excelente servicio técnico.',
    author: 'María Elena Páez',
    rating: 5,
  },
]

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isInView, setIsInView] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  // Auto-play carousel - only when in view and not paused
  useEffect(() => {
    if (!isInView || isPaused) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [isInView, isPaused])

  // Scroll carousel internally without affecting page scroll
  useEffect(() => {
    if (!containerRef.current) return
    
    const container = containerRef.current
    const card = container.children[currentIndex] as HTMLElement
    
    if (card) {
      // Calculate scroll position to center the card
      const containerWidth = container.offsetWidth
      const cardLeft = card.offsetLeft
      const cardWidth = card.offsetWidth
      const scrollLeft = cardLeft - (containerWidth / 2) + (cardWidth / 2)
      
      container.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
      })
    }
  }, [currentIndex])

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-b from-background to-deep-blue/5 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        {/* Section Header */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onViewportEnter={() => setIsInView(true)}
            onViewportLeave={() => setIsInView(false)}
            className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-4"
          >
            <Star className="w-4 h-4 text-cyan-400 fill-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium">Proyectos Realizados</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Lo que dicen nuestros
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-500">
              clientes
            </span>
          </motion.h2>
        </div>
      </div>

      {/* Carousel */}
      <div 
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Navigation Buttons */}
        <div className="absolute left-2 sm:left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20">
          <Button
            variant="outline"
            size="icon"
            onClick={handlePrev}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-background/80 backdrop-blur-sm border-border hover:bg-cyan-500 hover:text-white hover:border-cyan-500 transition-all"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </Button>
        </div>
        <div className="absolute right-2 sm:right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20">
          <Button
            variant="outline"
            size="icon"
            onClick={handleNext}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-background/80 backdrop-blur-sm border-border hover:bg-cyan-500 hover:text-white hover:border-cyan-500 transition-all"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </Button>
        </div>

        {/* Cards Container */}
        <div
          ref={containerRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-4 sm:px-8 lg:px-16 py-4"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex-shrink-0 w-[85vw] xs:w-[82vw] sm:w-[75vw] md:w-[60vw] lg:w-[40vw] snap-center"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-deep-blue via-deep-blue/40 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 p-4 sm:p-6 lg:p-8 flex flex-col justify-end">
                  {/* Quote Icon */}
                  <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400/50 mb-2" />

                  {/* Testimonial */}
                  <blockquote className="text-white text-sm sm:text-lg lg:text-xl mb-3 sm:mb-4 italic line-clamp-2 sm:line-clamp-none">
                    &ldquo;{project.quote}&rdquo;
                  </blockquote>

                  {/* Rating */}
                  <div className="flex gap-1 mb-2 sm:mb-3">
                    {[...Array(project.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>

                  {/* Author */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-semibold text-sm sm:text-base">{project.author}</p>
                      <p className="text-white/60 text-xs sm:text-sm">{project.title}</p>
                    </div>
                    <span className="text-cyan-400 text-xs sm:text-sm">{project.location}</span>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-400/30 rounded-2xl transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? 'w-8 bg-cyan-500'
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-terracotta/5 rounded-full blur-3xl" />
    </section>
  )
}
