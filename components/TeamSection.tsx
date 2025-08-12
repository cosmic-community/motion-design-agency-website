'use client'

import { motion } from 'framer-motion'
import { TeamMember } from '@/types'
import TeamMemberCard from '@/components/TeamMemberCard'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface TeamSectionProps {
  teamMembers: TeamMember[]
}

export default function TeamSection({ teamMembers }: TeamSectionProps) {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="section-padding container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Meet Our <span className="gradient-text">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Talented creatives and technical experts passionate about bringing your vision to life
          </p>
        </motion.div>

        {teamMembers.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {teamMembers.slice(0, 6).map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <TeamMemberCard member={member} />
                </motion.div>
              ))}
            </div>

            {teamMembers.length > 6 && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Link
                  href="/team"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-semibold transition-all duration-200 group"
                >
                  Meet Everyone
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            )}
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
              No team members yet
            </h3>
            <p className="text-muted-foreground">
              Team members will appear here once they are added to your Cosmic bucket.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}