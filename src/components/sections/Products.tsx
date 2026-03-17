'use client'

import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowRight, Droplets, Flame, Settings, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

const products = [
  {
    id: 1,
    title: 'Piscinas de Fibra de Vidrio',
    description: 'Instalación rápida, diseño moderno y mínimo mantenimiento. La opción perfecta para empezar a disfrutar.',
    image: '/images/pools/fiberglass-pool.png',
    icon: Droplets,
    color: 'from-cyan-500 to-cyan-600',
    features: ['Instalación en 7 días', 'Garantía 10 años', 'Bajo mantenimiento'],
  },
  {
    id: 2,
    title: 'Piscinas de Hormigón',
    description: 'Personalización total en forma y tamaño. Tu diseño único hecho realidad con los mejores materiales.',
    image: '/images/pools/concrete-pool.png',
    icon: Sparkles,
    color: 'from-terracotta to-terracotta-light',
    features: ['Diseño a medida', 'Durabilidad superior', 'Acabados premium'],
  },
  {
    id: 3,
    title: 'Equipamiento y Climatización',
    description: 'Bombas, filtros, iluminación LED, cascadas y sistemas de calefacción para una experiencia completa.',
    image: '/images/pools/equipment.png',
    icon: Flame,
    color: 'from-deep-blue-light to-deep-blue',
    features: ['Marcas líderes', 'Ahorro energético', 'Soporte técnico'],
  },
]

function WaterEffectCard({ product }: { product: typeof products[0] }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7.5deg', '-7.5deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7.5deg', '7.5deg'])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    
    const rect = cardRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className="relative group cursor-pointer"
    >
      <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-b from-background to-deep-blue/20 border border-border/50 shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-cyan-500/10">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={product.image}
            alt={`${product.title} - Instalación profesional en San Luis`}
            className={`w-full h-full object-cover transition-all duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
            loading="lazy"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-deep-blue via-deep-blue/60 to-transparent" />
        </div>

        {/* Water Ripple Effect on Hover */}
        {isHovered && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, opacity: 0.5 }}
                animate={{ scale: 4, opacity: 0 }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.5 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border border-cyan-400/30"
              />
            ))}
          </div>
        )}

        {/* Content */}
        <div className="absolute inset-0 p-6 flex flex-col justify-end" style={{ transform: 'translateZ(50px)' }}>
          {/* Icon Badge */}
          <div className={`absolute top-6 right-6 w-12 h-12 rounded-full bg-gradient-to-br ${product.color} flex items-center justify-center shadow-lg`}>
            <product.icon className="w-6 h-6 text-white" />
          </div>

          {/* Title */}
          <h3
            className="text-2xl lg:text-3xl font-bold text-white mb-3 text-center lg:text-left"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {product.title}
          </h3>

          {/* Description */}
          <p className="text-white/70 text-sm lg:text-base mb-4 line-clamp-2 text-center lg:text-left">
            {product.description}
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-4">
            {product.features.map((feature) => (
              <span
                key={feature}
                className="text-xs bg-white/10 backdrop-blur-sm text-white/80 px-3 py-1 rounded-full"
              >
                {feature}
              </span>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
            transition={{ duration: 0.3 }}
          >
            <Button
              className={`w-full bg-gradient-to-r ${product.color} hover:opacity-90 text-white rounded-full group/btn`}
            >
              Ver Modelos
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
            </Button>
          </motion.div>
        </div>

        {/* Shine Effect */}
        <motion.div
          initial={{ x: '-100%', opacity: 0 }}
          animate={{ x: isHovered ? '100%' : '-100%', opacity: isHovered ? 0.3 : 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"
        />
      </div>
    </motion.div>
  )
}

export default function Products() {
  return (
    <section id="modelos" className="relative py-20 lg:py-32 bg-gradient-to-b from-background via-deep-blue/5 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-4"
          >
            <Settings className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium">Nuestras Colecciones</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Explora nuestros
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-500">
              modelos
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4"
          >
            Desde piscinas de fibra hasta proyectos a medida, tenemos la solución perfecta para tu espacio.
          </motion.p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 max-w-sm sm:max-w-none mx-auto">
          {products.map((product) => (
            <WaterEffectCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-terracotta/5 rounded-full blur-3xl" />
    </section>
  )
}
