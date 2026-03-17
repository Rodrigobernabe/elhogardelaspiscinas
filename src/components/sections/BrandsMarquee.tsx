'use client'

import { motion } from 'framer-motion'

const brands = [
  { name: 'AstralPool', logo: 'AstralPool' },
  { name: 'Hayward', logo: 'Hayward' },
  { name: 'Pentair', logo: 'Pentair' },
  { name: 'Intex', logo: 'Intex' },
  { name: 'Bestway', logo: 'Bestway' },
  { name: 'Degaulle', logo: 'Degaulle' },
  { name: 'Piscinas Steel', logo: 'Piscinas Steel' },
  { name: 'Aqua', logo: 'Aqua' },
]

export default function BrandsMarquee() {
  return (
    <section className="relative py-12 bg-gradient-to-b from-background to-deep-blue/5 overflow-hidden">
      {/* Subtle top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      
      <div className="container mx-auto px-4 mb-6 sm:mb-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-muted-foreground text-xs sm:text-sm tracking-widest uppercase"
        >
          Trabajamos con las mejores marcas del mercado
        </motion.p>
      </div>

      {/* Marquee Container */}
      <div className="relative overflow-hidden">
        {/* Gradient Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-20" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-20" />

        {/* First Row */}
        <div className="flex overflow-hidden py-4">
          <motion.div 
            className="flex w-max"
            animate={{ x: [0, '-50%'] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {[...brands, ...brands, ...brands, ...brands].map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="flex-shrink-0 mx-4 sm:mx-8 lg:mx-12 group cursor-pointer"
              >
                <div className="relative px-4 sm:px-6 py-3 sm:py-4 rounded-lg transition-all duration-300 group-hover:bg-cyan-500/10">
                  <span
                    className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-wider text-muted-foreground/40 group-hover:text-cyan-400 transition-colors duration-300"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {brand.logo}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Second Row (Reverse) */}
        <div className="flex overflow-hidden py-4 mt-2">
          <motion.div 
            className="flex w-max"
            animate={{ x: ['-50%', 0] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 50,
                ease: "linear",
              },
            }}
          >
            {[...brands, ...brands, ...brands, ...brands].map((brand, index) => (
              <div
                key={`${brand.name}-reverse-${index}`}
                className="flex-shrink-0 mx-4 sm:mx-8 lg:mx-12 group cursor-pointer"
              >
                <div className="relative px-4 sm:px-6 py-3 sm:py-4 rounded-lg transition-all duration-300 group-hover:bg-cyan-500/10">
                  <span
                    className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-wider text-muted-foreground/30 group-hover:text-cyan-400 transition-colors duration-300"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {brand.logo}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Subtle bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
    </section>
  )
}
