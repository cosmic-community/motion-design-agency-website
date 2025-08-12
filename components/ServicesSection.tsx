'use client'

import { motion } from 'framer-motion'
import { Palette, Zap, Video, Smartphone, Monitor, Sparkles } from 'lucide-react'

const services = [
  {
    icon: Palette,
    title: 'Brand Animation',
    description: 'Bring your brand identity to life with dynamic animations that tell your story and connect with audiences.',
  },
  {
    icon: Video,
    title: 'Motion Graphics',
    description: 'Create compelling visual narratives through sophisticated motion design and graphic animation.',
  },
  {
    icon: Smartphone,
    title: 'UI Animation',
    description: 'Enhance user experiences with smooth, intuitive micro-interactions and interface animations.',
  },
  {
    icon: Monitor,
    title: 'Commercial Production',
    description: 'From concept to final delivery, we produce high-impact commercials that drive results.',
  },
  {
    icon: Sparkles,
    title: 'Visual Effects',
    description: 'Add cinematic quality to your projects with cutting-edge VFX and post-production services.',
  },
  {
    icon: Zap,
    title: 'Creative Direction',
    description: 'Strategic creative guidance to ensure every project aligns with your brand vision and goals.',
  },
]

export default function ServicesSection() {
  return (
    <section className="py-24 bg-background">
      <div className="section-padding container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive motion design services to elevate your brand and captivate your audience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative p-8 rounded-2xl glass-effect hover:bg-white/10 transition-all duration-300"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent size={28} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}