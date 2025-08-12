'use client'

import { motion } from 'framer-motion'
import { TeamMember } from '@/types'
import { Dribbble, Linkedin, Instagram } from 'lucide-react'

interface TeamMemberCardProps {
  member: TeamMember
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'dribbble':
        return Dribbble
      case 'linkedin':
        return Linkedin
      case 'instagram':
        return Instagram
      default:
        return null
    }
  }

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-2xl bg-secondary/50 border border-white/10"
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={`${member.metadata.photo.imgix_url}?w=400&h=400&fit=crop&auto=format,compress`}
          alt={member.metadata.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-1">
          {member.metadata.name}
        </h3>
        <p className="text-primary text-sm font-medium mb-4">
          {member.metadata.position}
        </p>

        {member.metadata.bio && (
          <div 
            className="text-muted-foreground text-sm mb-4 line-clamp-3"
            dangerouslySetInnerHTML={{ __html: member.metadata.bio }}
          />
        )}

        {member.metadata.specialties && member.metadata.specialties.length > 0 && (
          <div className="mb-4">
            <h4 className="text-xs font-semibold text-white/70 mb-2">SPECIALTIES</h4>
            <div className="flex flex-wrap gap-2">
              {member.metadata.specialties.slice(0, 3).map((specialty) => (
                <span
                  key={specialty}
                  className="text-xs px-2 py-1 bg-primary/20 text-primary rounded"
                >
                  {specialty}
                </span>
              ))}
            </div>
          </div>
        )}

        {member.metadata.social_links && (
          <div className="flex gap-3">
            {Object.entries(member.metadata.social_links).map(([platform, url]) => {
              const IconComponent = getSocialIcon(platform)
              if (!IconComponent || !url) return null

              return (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors duration-200"
                >
                  <IconComponent size={16} className="text-white" />
                </a>
              )
            })}
          </div>
        )}
      </div>
    </motion.div>
  )
}