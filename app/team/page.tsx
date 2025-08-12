import TeamGrid from '@/components/TeamGrid'
import PageHeader from '@/components/PageHeader'
import { getTeamMembers } from '@/lib/cosmic'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Team - Motion Design Agency',
  description: 'Meet our talented team of motion designers, animators, and creative professionals.',
}

export default async function TeamPage() {
  const teamMembers = await getTeamMembers()

  return (
    <div className="min-h-screen pt-24 pb-16">
      <PageHeader
        title="Our Team"
        subtitle="Meet the talented creatives behind our award-winning work"
        gradient="from-accent to-primary"
      />
      
      <div className="section-padding container-max mt-16">
        {teamMembers.length > 0 ? (
          <TeamGrid teamMembers={teamMembers} />
        ) : (
          <div className="text-center py-16">
            <h3 className="text-2xl font-semibold text-muted-foreground mb-4">
              No team members found
            </h3>
            <p className="text-muted-foreground">
              Team members will appear here once they are added to your Cosmic bucket.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}