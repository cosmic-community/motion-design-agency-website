'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current || !imageRef.current) return

      const scrollY = window.scrollY
      const heroHeight = heroRef.current.offsetHeight
      const scrollPercent = Math.min(scrollY / heroHeight, 1)

      // 3D flattening effect
      const rotateX = scrollPercent * 45 // Rotate up to 45 degrees
      const translateZ = scrollPercent * -100 // Move back in 3D space
      const scale = 1 - scrollPercent * 0.3 // Scale down slightly

      imageRef.current.style.transform = `
        perspective(1000px) 
        rotateX(${rotateX}deg) 
        translateZ(${translateZ}px) 
        scale(${scale})
      `
      imageRef.current.style.opacity = `${1 - scrollPercent * 0.5}`
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with 3D Effect */}
      <div
        ref={imageRef}
        className="absolute inset-0 hero-3d-effect"
        style={{
          backgroundImage: 'url(https://imgix.cosmicjs.com/daf85240-77ad-11f0-a051-23c10f41277a-photo-1611224923853-80b023f02d71-1755024903291.jpg?w=1920&h=1080&fit=crop&auto=format,compress)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center section-padding container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="gradient-text">Motion</span>
            <br />
            <span className="text-white">That Moves</span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto text-balance"
          >
            We create stunning motion graphics, brand animations, and visual experiences 
            that captivate audiences and elevate brands to new heights.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-semibold transition-all duration-200 flex items-center gap-2 group">
              Start Your Project
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="glass-effect text-white px-8 py-4 rounded-full font-semibold transition-all duration-200 flex items-center gap-2 hover:bg-white/10">
              <Play size={20} />
              Watch Reel
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  )
}