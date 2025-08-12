'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Dribbble, Linkedin, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  const footerLinks = {
    Services: [
      { name: 'Brand Animation', href: '/services/brand-animation' },
      { name: 'Motion Graphics', href: '/services/motion-graphics' },
      { name: 'UI Animation', href: '/services/ui-animation' },
      { name: 'Commercial Production', href: '/services/commercial' },
    ],
    Company: [
      { name: 'About', href: '/about' },
      { name: 'Team', href: '/team' },
      { name: 'Projects', href: '/projects' },
      { name: 'Blog', href: '/blog' },
    ],
    Resources: [
      { name: 'Case Studies', href: '/blog?category=case_studies' },
      { name: 'Tutorials', href: '/blog?category=tutorials' },
      { name: 'Industry Insights', href: '/blog?category=industry_insights' },
      { name: 'Contact', href: '/#contact' },
    ],
  }

  const socialLinks = [
    { icon: Dribbble, href: 'https://dribbble.com', label: 'Dribbble' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  ]

  return (
    <footer className="bg-background border-t border-white/10">
      <div className="section-padding container-max py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link href="/" className="text-3xl font-bold gradient-text mb-4 inline-block">
                Motion
              </Link>
              <p className="text-muted-foreground mb-6 max-w-md">
                We create stunning motion graphics, brand animations, and visual experiences 
                that captivate audiences and elevate brands.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-200"
                      aria-label={social.label}
                    >
                      <IconComponent size={20} className="text-white" />
                    </a>
                  )
                })}
              </div>
            </motion.div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center"
        >
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Motion Design Agency. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <Link
              href="/privacy"
              className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
            >
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}