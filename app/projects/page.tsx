import ProjectGrid from '@/components/ProjectGrid'
import PageHeader from '@/components/PageHeader'
import { getProjects } from '@/lib/cosmic'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects - Motion Design Agency',
  description: 'Explore our portfolio of motion design projects, brand animations, and creative solutions for top-tier clients.',
}

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <div className="min-h-screen pt-24 pb-16">
      <PageHeader
        title="Our Work"
        subtitle="Explore our portfolio of motion design projects and creative solutions"
        gradient="from-primary to-accent"
      />
      
      <div className="section-padding container-max mt-16">
        {projects.length > 0 ? (
          <ProjectGrid projects={projects} />
        ) : (
          <div className="text-center py-16">
            <h3 className="text-2xl font-semibold text-muted-foreground mb-4">
              No projects found
            </h3>
            <p className="text-muted-foreground">
              Projects will appear here once they are added to your Cosmic bucket.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}