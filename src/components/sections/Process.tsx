'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Home, Wrench, PartyPopper, CheckCircle2 } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Asesoramiento en tu domicilio',
    description: 'Medimos tu espacio y diseñamos juntos la piscina de tus sueños. Sin compromiso.',
    icon: Home,
    color: 'from-cyan-400 to-cyan-500',
  },
  {
    number: '02',
    title: 'Instalación Express',
    description: 'Nuestro equipo técnico especializado se encarga de todo. Rápido y prolijo.',
    icon: Wrench,
    color: 'from-terracotta to-terracotta-light',
  },
  {
    number: '03',
    title: 'Primer Chapuzón',
    description: 'Entrega llave en mano. Solo queda disfrutar de tu nuevo oasis.',
    icon: PartyPopper,
    color: 'from-deep-blue-light to-cyan-500',
  },
]

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section id="proceso" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-4"
          >
            <CheckCircle2 className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium">Proceso Simple</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            ¿Cómo trabajamos?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4"
          >
            Un proceso simple y transparente. Te acompañamos en cada paso.
          </motion.p>
        </div>

        {/* Timeline */}
        <div ref={containerRef} className="relative max-w-4xl mx-auto">
          {/* Vertical Line (Desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2">
            <div className="w-full h-full bg-border/50 rounded-full" />
            <motion.div
              style={{ height: lineHeight }}
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-cyan-400 to-cyan-600 rounded-full"
            />
          </div>

          {/* Steps */}
          <div className="space-y-12 lg:space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className={`bg-card border border-border rounded-2xl p-5 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow ${index % 2 === 0 ? 'lg:ml-auto lg:max-w-md' : 'lg:mr-auto lg:max-w-md'}`}>
                    <span
                      className="text-5xl sm:text-6xl lg:text-7xl font-bold text-cyan-500/20 mb-4 block"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {step.number}
                    </span>

                    <h3
                      className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-3"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {step.title}
                    </h3>

                    <p className="text-muted-foreground text-base sm:text-lg">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Center Icon */}
                <div className="relative z-10 flex-shrink-0">
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                    <step.icon className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
                  </div>
                  {/* Glow effect */}
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.color} blur-xl opacity-30 animate-pulse`} />
                </div>

                {/* Empty space for layout */}
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16 lg:mt-24"
        >
          <p className="text-muted-foreground mb-4">
            ¿Listo para empezar?
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 text-cyan-500 hover:text-cyan-400 font-medium transition-colors"
          >
            Solicitá tu presupuesto gratuito
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              →
            </motion.span>
          </a>
        </motion.div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-0 w-64 h-64 bg-terracotta/5 rounded-full blur-3xl" />
    </section>
  )
}
