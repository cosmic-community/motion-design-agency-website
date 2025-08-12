import { Project } from '@/types'

interface ProjectContentProps {
  project: Project
}

export default function ProjectContent({ project }: ProjectContentProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Case Study Content */}
      {project.metadata.case_study && (
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Case Study</h2>
          <div 
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 hover:prose-a:text-blue-500"
            dangerouslySetInnerHTML={{ __html: project.metadata.case_study }}
          />
        </div>
      )}

      {/* Project Video */}
      {project.metadata.project_video && (
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Project Video</h2>
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
            <video
              controls
              className="w-full h-full object-cover"
              poster={project.metadata.featured_image?.imgix_url ? `${project.metadata.featured_image.imgix_url}?w=1200&h=675&fit=crop&auto=format,compress` : undefined}
            >
              <source src={project.metadata.project_video.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}

      {/* Services Used */}
      {project.metadata.services && project.metadata.services.length > 0 && (
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Services Provided</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {project.metadata.services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-100 p-4 rounded-lg text-center"
              >
                <span className="text-gray-800 font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Client Testimonial */}
      {project.metadata.testimonial && (
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Client Feedback</h2>
          <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-blue-600">
            <blockquote className="text-lg text-gray-700 italic mb-4">
              "{project.metadata.testimonial}"
            </blockquote>
            {project.metadata.client && (
              <cite className="text-gray-600 font-medium">
                — {project.metadata.client}
              </cite>
            )}
          </div>
        </div>
      )}

      {/* Project Stats or Additional Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {project.metadata.project_type && (
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2">
              Project Type
            </h3>
            <p className="text-xl font-bold text-gray-900">
              {project.metadata.project_type.value}
            </p>
          </div>
        )}

        {project.metadata.duration && (
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2">
              Duration
            </h3>
            <p className="text-xl font-bold text-gray-900">
              {project.metadata.duration}
            </p>
          </div>
        )}

        {project.metadata.services && (
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2">
              Services Count
            </h3>
            <p className="text-xl font-bold text-gray-900">
              {project.metadata.services.length} Services
            </p>
          </div>
        )}
      </div>
    </div>
  )
}