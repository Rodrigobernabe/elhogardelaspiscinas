'use client'

import Header from '@/components/sections/Header'
import Hero from '@/components/sections/Hero'
import BrandsMarquee from '@/components/sections/BrandsMarquee'
import Intro from '@/components/sections/Intro'
import Products from '@/components/sections/Products'
import Process from '@/components/sections/Process'
import Projects from '@/components/sections/Projects'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Brands Marquee */}
      <BrandsMarquee />
      
      {/* Introduction */}
      <Intro />
      
      {/* Products/Models */}
      <Products />
      
      {/* Process Timeline */}
      <Process />
      
      {/* Projects/Testimonials */}
      <Projects />
      
      {/* Contact CTA */}
      <Contact />
      
      {/* Footer */}
      <Footer />
    </main>
  )
}
