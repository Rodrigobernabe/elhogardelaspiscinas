'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Sparkles, Users, Clock } from 'lucide-react'

export default function Intro() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1.1, 1])

  const features = [
    { icon: Sparkles, text: 'Diseño personalizado' },
    { icon: Users, text: 'Equipo especializado' },
    { icon: Clock, text: 'Entrega en tiempo' },
  ]

  return (
    <section
      ref={containerRef}
      id="nosotros"
      className="relative py-20 lg:py-32 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-6"
            >
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              <span className="text-cyan-400 text-sm font-medium">Más de 15 años de experiencia</span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Más que agua.
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-cyan-400">
                El centro de tus mejores momentos.
              </span>
            </motion.h2>

            {/* Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed"
            >
              En <strong className="text-foreground">El Hogar de las Piscinas VM</strong> entendemos que tu patio es el punto de encuentro. Nos encargamos de todo el proceso para que tu única preocupación sea disfrutar del verano.
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              {features.map((feature, index) => (
                <div
                  key={feature.text}
                  className="flex items-center gap-2 bg-background/50 border border-border rounded-full px-4 py-2"
                >
                  <feature.icon className="w-4 h-4 text-cyan-500" />
                  <span className="text-sm text-foreground">{feature.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image with Parallax */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 relative"
          >
            <motion.div
              style={{ y, scale }}
              className="relative aspect-[3/4] lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl"
            >
              {/* Main Image */}
              <img
                src="/images/pools/intro-family.png"
                alt="Familia feliz disfrutando de una piscina de diseño en su patio en Villa Mercedes"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/60 via-transparent to-transparent" />
              
              {/* Water effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent" />
            </motion.div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-auto sm:-bottom-6 sm:-left-6 lg:-left-12 glass rounded-xl p-3 sm:p-4 shadow-xl w-[90%] sm:w-auto max-w-[280px] sm:max-w-[200px]"
            >
              <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl sm:text-2xl">🌊</span>
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-white font-bold text-base sm:text-lg">500+</p>
                  <p className="text-white/60 text-[10px] sm:text-xs">Piscinas instaladas</p>
                </div>
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-8 right-12 w-32 h-32 bg-terracotta/10 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl -translate-y-1/2" />
    </section>
  )
}
