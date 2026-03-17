'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Phone, MapPin, Mail, Loader2, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const services = [
  'Piscina de Fibra',
  'Piscina de Hormigón',
  'Equipamiento',
  'Climatización',
  'Mantenimiento',
  'Otro',
]

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    zone: '',
    service: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section id="contacto" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/contact-bg.mp4" type="video/mp4" />
        </video>
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-deep-blue/60 sm:bg-deep-blue/50" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              ¿Listo para transformar
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-400">
                tu verano?
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto px-4"
            >
              Dejanos tus datos y un especialista de nuestro equipo se pondrá en contacto para armar un presupuesto a medida.
            </motion.p>
          </div>

          {/* Form Card with Animated Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            {/* Animated Border Glow */}
            <motion.div
              className="absolute -inset-1 rounded-3xl opacity-50"
              animate={{
                background: [
                  'linear-gradient(45deg, oklch(0.6 0.15 195) 0%, oklch(0.5 0.12 180) 50%, oklch(0.55 0.14 200) 100%)',
                  'linear-gradient(225deg, oklch(0.6 0.15 195) 0%, oklch(0.5 0.12 180) 50%, oklch(0.55 0.14 200) 100%)',
                  'linear-gradient(45deg, oklch(0.6 0.15 195) 0%, oklch(0.5 0.12 180) 50%, oklch(0.55 0.14 200) 100%)',
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{ filter: 'blur(8px)' }}
            />

            {/* Glass Card */}
            <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-12 shadow-2xl">
              {/* Water Ripple Animation */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute rounded-full border border-cyan-400/[0.05]"
                    style={{
                      width: '100%',
                      height: '100%',
                      left: '50%',
                      top: '50%',
                      transform: 'translate(-50%, -50%)',
                    }}
                    animate={{
                      scale: [0, 3],
                      opacity: [0.3, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: i * 0.8,
                      ease: 'easeOut',
                    }}
                  />
                ))}
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white/80 text-sm">
                        Nombre completo
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Tu nombre"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="h-14 bg-white/5 border-0 border-b-2 border-white/20 rounded-none px-0 text-white placeholder:text-white/40 focus:border-cyan-400 focus:ring-0 transition-colors"
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-white/80 text-sm">
                        Teléfono / WhatsApp
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Tu teléfono"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        className="h-14 bg-white/5 border-0 border-b-2 border-white/20 rounded-none px-0 text-white placeholder:text-white/40 focus:border-cyan-400 focus:ring-0 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Zone */}
                    <div className="space-y-2">
                      <Label htmlFor="zone" className="text-white/80 text-sm">
                        Zona / Barrio
                      </Label>
                      <Input
                        id="zone"
                        type="text"
                        placeholder="¿Dónde vivís?"
                        value={formData.zone}
                        onChange={(e) => setFormData({ ...formData, zone: e.target.value })}
                        required
                        className="h-14 bg-white/5 border-0 border-b-2 border-white/20 rounded-none px-0 text-white placeholder:text-white/40 focus:border-cyan-400 focus:ring-0 transition-colors"
                      />
                    </div>

                    {/* Service */}
                    <div className="space-y-2">
                      <Label htmlFor="service" className="text-white/80 text-sm">
                        ¿Qué estás buscando?
                      </Label>
                      <Select
                        value={formData.service}
                        onValueChange={(value) => setFormData({ ...formData, service: value })}
                      >
                        <SelectTrigger
                          id="service"
                          className="h-14 bg-white/5 border-0 border-b-2 border-white/20 rounded-none px-0 text-white focus:border-cyan-400 focus:ring-0 transition-colors [&>span]:text-white/40 data-[state=open]>[&>span]:text-white"
                        >
                          <SelectValue placeholder="Seleccioná una opción" />
                        </SelectTrigger>
                        <SelectContent className="bg-deep-blue border-white/10">
                          {services.map((service) => (
                            <SelectItem
                              key={service}
                              value={service}
                              className="text-white hover:bg-white/10 focus:bg-white/10"
                            >
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-16 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-white text-lg font-semibold rounded-full shadow-2xl shadow-cyan-500/30 transition-all duration-300 hover:shadow-cyan-400/40 hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Enviar Consulta
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 relative z-10"
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                    ¡Mensaje enviado!
                  </h3>
                  <p className="text-white/70">
                    Nos pondremos en contacto contigo muy pronto.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-12"
          >
            <a
              href="https://wa.me/5492657123456"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 sm:gap-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 hover:bg-white/10 transition-colors group"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="min-w-0">
                <p className="text-white/60 text-xs sm:text-sm">WhatsApp</p>
                <p className="text-white font-medium text-sm sm:text-base group-hover:text-cyan-400 transition-colors truncate">
                  +54 9 2657 12-3456
                </p>
              </div>
            </a>

            <div className="flex items-center gap-3 sm:gap-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="min-w-0">
                <p className="text-white/60 text-xs sm:text-sm">Dirección</p>
                <p className="text-white font-medium text-sm sm:text-base">
                  Villa Mercedes, San Luis
                </p>
              </div>
            </div>

            <a
              href="mailto:info@hogarpiscinas.com"
              className="flex items-center gap-3 sm:gap-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 hover:bg-white/10 transition-colors group sm:col-span-2 md:col-span-1"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-terracotta to-terracotta-light flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="min-w-0">
                <p className="text-white/60 text-xs sm:text-sm">Email</p>
                <p className="text-white font-medium text-sm sm:text-base group-hover:text-cyan-400 transition-colors truncate">
                  info@hogarpiscinas.com
                </p>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
