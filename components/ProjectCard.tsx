'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Project } from '@/types'
import { ExternalLink } from 'lucide-react'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-2xl bg-secondary/50 border border-white/10"
    >
      <Link href={`/projects/${project.slug}`}>
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={`${project.metadata.featured_image.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
            alt={project.metadata.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary transition-colors">
                {project.metadata.title}
              </h3>
              <p className="text-primary text-sm font-medium mb-1">
                {project.metadata.client}
              </p>
              <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full">
                {project.metadata.project_type.value}
              </span>
            </div>
            <ExternalLink 
              size={20} 
              className="text-muted-foreground group-hover:text-white transition-colors opacity-0 group-hover:opacity-100" 
            />
          </div>

          <p className="text-muted-foreground text-sm line-clamp-3">
            {project.metadata.brief_description}
          </p>

          {project.metadata.services && project.metadata.services.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {project.metadata.services.slice(0, 3).map((service) => (
                <span
                  key={service}
                  className="text-xs px-2 py-1 bg-white/5 text-white/70 rounded"
                >
                  {service}
                </span>
              ))}
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  )
}