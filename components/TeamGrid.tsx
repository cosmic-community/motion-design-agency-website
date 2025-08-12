'use client'

import { motion } from 'framer-motion'
import { TeamMember } from '@/types'
import TeamMemberCard from '@/components/TeamMemberCard'

interface TeamGridProps {
  teamMembers: TeamMember[]
}

export default function TeamGrid({ teamMembers }: TeamGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {teamMembers.map((member, index) => (
        <motion.div
          key={member.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <TeamMemberCard member={member} />
        </motion.div>
      ))}
    </div>
  )
}