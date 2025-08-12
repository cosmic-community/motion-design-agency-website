// app/projects/[slug]/page.tsx
import { getProject } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import ProjectHero from '@/components/ProjectHero'
import ProjectContent from '@/components/ProjectContent'
import ProjectGallery from '@/components/ProjectGallery'
import type { Metadata } from 'next'

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = await getProject(slug)

  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: `${project.metadata.title} - Motion Design Agency`,
    description: project.metadata.brief_description,
    openGraph: {
      title: project.metadata.title,
      description: project.metadata.brief_description,
      images: [
        {
          url: `${project.metadata.featured_image.imgix_url}?w=1200&h=630&fit=crop&auto=format,compress`,
          width: 1200,
          height: 630,
          alt: project.metadata.title,
        },
      ],
    },
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = await getProject(slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen pt-24">
      <ProjectHero project={project} />
      <ProjectContent project={project} />
      {(project.metadata.gallery && project.metadata.gallery.length > 0) || project.metadata.featured_image ? (
        <ProjectGallery project={project} />
      ) : null}
    </div>
  )
}