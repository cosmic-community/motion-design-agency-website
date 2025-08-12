'use client'

import { motion } from 'framer-motion'

interface PageHeaderProps {
  title: string
  subtitle?: string
  gradient?: string
}

export default function PageHeader({ title, subtitle, gradient = 'from-primary to-accent' }: PageHeaderProps) {
  return (
    <div className="relative overflow-hidden py-20 bg-secondary/30">
      <div className="absolute inset-0">
        <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-20`} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
      </div>
      
      <div className="relative section-padding container-max text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-white mb-4"
        >
          {title}
        </motion.h1>
        
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </div>
  )
}