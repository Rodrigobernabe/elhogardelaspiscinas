'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown, Droplets } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [titleVisible, setTitleVisible] = useState(false)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1])

  useEffect(() => {
    // Trigger title animation after component mounts
    const timer = setTimeout(() => setTitleVisible(true), 500)
    return () => clearTimeout(timer)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      ref={containerRef}
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* Video Background - Full Immersive */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ scale }}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          title="Fondo cinematográfico de agua cristalina en movimiento"
          aria-hidden="true"
        >
          <source src="https://videos.pexels.com/video-files/3573964/3573964-hd_1920_1080_30fps.mp4" type="video/mp4" />
        </video>
        
        {/* Cinematic Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-deep-blue/70 via-deep-blue/50 to-deep-blue/90" />
        
        {/* Cyan Water Tint Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/40 via-transparent to-cyan-800/30" />
        
        {/* Vignette Effect */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, oklch(0.12 0.02 240 / 0.6) 100%)'
        }} />
      </motion.div>

      {/* Animated Water Particles */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: 2 + Math.random() * 4,
              height: 2 + Math.random() * 4,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, oklch(0.7 0.15 195 / 0.6), transparent)`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Animated Light Rays */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-1/2 left-1/4 w-1/2 h-full"
          style={{
            background: 'linear-gradient(180deg, oklch(0.7 0.15 195 / 0.1) 0%, transparent 60%)',
            filter: 'blur(40px)',
          }}
          animate={{
            x: ['-25%', '25%', '-25%'],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-20 container mx-auto px-5 sm:px-6 text-center"
      >
        {/* Micro-copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-cyan-300 text-xs sm:text-sm md:text-base tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-4 sm:mb-6 font-medium px-4"
        >
          Diseño e Instalación en Villa Mercedes, San Luis
        </motion.p>

        {/* Main Headline with Split Text Reveal */}
        <h1 className="mb-6 sm:mb-8">
          <motion.span
            className="block text-[1.7rem] sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight drop-shadow-2xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            <motion.span
              className="inline-block overflow-hidden"
              initial={{ clipPath: 'inset(0 100% 0 0)' }}
              animate={titleVisible ? { clipPath: 'inset(0 0% 0 0)' } : {}}
              transition={{ duration: 1, ease: [0.77, 0, 0.175, 1], delay: 0.3 }}
            >
              Tu propio oasis,
            </motion.span>
          </motion.span>
          <motion.span
            className="block text-[1.7rem] sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-400 to-white leading-tight drop-shadow-2xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            <motion.span
              className="inline-block overflow-hidden"
              initial={{ clipPath: 'inset(0 100% 0 0)' }}
              animate={titleVisible ? { clipPath: 'inset(0 0% 0 0)' } : {}}
              transition={{ duration: 1, ease: [0.77, 0, 0.175, 1], delay: 0.6 }}
            >
              sin salir de casa.
            </motion.span>
          </motion.span>
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-white/90 text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed drop-shadow-lg px-4"
        >
          Diseñamos, instalamos y equipamos espacios de agua pensados para durar toda la vida.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
        >
          <Button
            onClick={() => scrollToSection('#modelos')}
            className="group relative bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-white px-6 sm:px-8 py-5 sm:py-6 rounded-full font-semibold text-base sm:text-lg shadow-2xl shadow-cyan-500/30 transition-all duration-300 hover:shadow-cyan-400/40 hover:scale-105 overflow-hidden w-full sm:w-auto"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <Droplets className="w-5 h-5" />
              Descubrir Modelos
            </span>
            {/* Liquid shine effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </Button>

          <Button
            onClick={() => scrollToSection('#proceso')}
            className="bg-white/10 backdrop-blur-md border-2 border-white/40 text-white hover:bg-white/20 hover:border-white/60 px-6 sm:px-8 py-5 sm:py-6 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 shadow-lg w-full sm:w-auto"
          >
            Cómo Trabajamos
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-white/60"
        >
          <span className="text-sm tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  )
}
