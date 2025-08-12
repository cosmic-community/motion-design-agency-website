import { Project } from '@/types'

interface ProjectHeroProps {
  project: Project
}

export default function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Project Info */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              {project.metadata.project_type && (
                <span className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium">
                  {project.metadata.project_type.value}
                </span>
              )}
              {project.metadata.featured && (
                <span className="px-4 py-2 bg-purple-600 text-white rounded-full text-sm font-medium">
                  Featured Project
                </span>
              )}
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              {project.metadata.title}
            </h1>

            {project.metadata.client && (
              <p className="text-xl text-gray-300 mb-6">
                Client: <span className="text-white font-semibold">{project.metadata.client}</span>
              </p>
            )}

            {project.metadata.brief_description && (
              <p className="text-lg text-gray-200 leading-relaxed mb-8">
                {project.metadata.brief_description}
              </p>
            )}

            {/* Project Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {project.metadata.duration && (
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-1">
                    Duration
                  </h3>
                  <p className="text-lg text-white">{project.metadata.duration}</p>
                </div>
              )}

              {project.metadata.services && project.metadata.services.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-1">
                    Services
                  </h3>
                  <p className="text-lg text-white">
                    {project.metadata.services.slice(0, 2).join(', ')}
                    {project.metadata.services.length > 2 && ` +${project.metadata.services.length - 2} more`}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Featured Image */}
          {project.metadata.featured_image && (
            <div className="relative">
              <div className="aspect-w-16 aspect-h-12 rounded-lg overflow-hidden shadow-2xl">
                <img
                  src={`${project.metadata.featured_image.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
                  alt={project.metadata.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-600 opacity-20 rounded-full"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-600 opacity-20 rounded-full"></div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}