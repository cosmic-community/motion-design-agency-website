'use client'

import { motion } from 'framer-motion'
import { Project } from '@/types'
import ProjectCard from '@/components/ProjectCard'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface FeaturedProjectsProps {
  projects: Project[]
}

export default function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  const featuredProjects = projects.filter(project => project.metadata.featured)

  return (
    <section className="py-24 bg-secondary/50">
      <div className="section-padding container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our most impactful projects and the stories behind them
          </p>
        </motion.div>

        {featuredProjects.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {featuredProjects.slice(0, 6).map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-semibold transition-all duration-200 group"
              >
                View All Projects
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center py-16"
          >
            <h3 className="text-2xl font-semibold text-muted-foreground mb-4">
              No featured projects yet
            </h3>
            <p className="text-muted-foreground">
              Featured projects will appear here once they are marked as featured in your Cosmic bucket.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}