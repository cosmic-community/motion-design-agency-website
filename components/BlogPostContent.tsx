import { BlogPost } from '@/types'

interface BlogPostContentProps {
  post: BlogPost
}

export default function BlogPostContent({ post }: BlogPostContentProps) {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Featured Image */}
      {post.metadata.featured_image && (
        <div className="mb-8">
          <img
            src={`${post.metadata.featured_image.imgix_url}?w=1200&h=600&fit=crop&auto=format,compress`}
            alt={post.metadata.title}
            className="w-full h-[400px] object-cover rounded-lg"
          />
        </div>
      )}

      {/* Article Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {post.metadata.title}
        </h1>
        
        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
          {post.metadata.author && (
            <div className="flex items-center">
              {post.metadata.author.metadata.photo && (
                <img
                  src={`${post.metadata.author.metadata.photo.imgix_url}?w=40&h=40&fit=crop&auto=format,compress`}
                  alt={post.metadata.author.metadata.name}
                  className="w-8 h-8 rounded-full mr-2"
                />
              )}
              <span>By {post.metadata.author.metadata.name}</span>
            </div>
          )}
          
          {post.metadata.category && (
            <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-md text-xs">
              {post.metadata.category.value}
            </span>
          )}
          
          {post.metadata.reading_time && (
            <span>{post.metadata.reading_time} min read</span>
          )}
        </div>

        {/* Excerpt */}
        {post.metadata.excerpt && (
          <p className="text-xl text-gray-600 leading-relaxed">
            {post.metadata.excerpt}
          </p>
        )}
      </header>

      {/* Article Content */}
      <div 
        className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 hover:prose-a:text-blue-500"
        dangerouslySetInnerHTML={{ __html: post.metadata.content }}
      />

      {/* Tags */}
      {post.metadata.tags && (
        <div className="mt-8 pt-8 border-t border-gray-200">
          <h3 className="text-sm font-semibold text-gray-900 mb-2">Tags:</h3>
          <div className="flex flex-wrap gap-2">
            {post.metadata.tags.split(',').map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-sm"
              >
                {tag.trim()}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Author Bio */}
      {post.metadata.author && post.metadata.author.metadata.bio && (
        <div className="mt-12 p-6 bg-gray-50 rounded-lg">
          <div className="flex items-start">
            {post.metadata.author.metadata.photo && (
              <img
                src={`${post.metadata.author.metadata.photo.imgix_url}?w=80&h=80&fit=crop&auto=format,compress`}
                alt={post.metadata.author.metadata.name}
                className="w-16 h-16 rounded-full mr-4 flex-shrink-0"
              />
            )}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {post.metadata.author.metadata.name}
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                {post.metadata.author.metadata.position}
              </p>
              <div 
                className="prose prose-sm text-gray-700"
                dangerouslySetInnerHTML={{ __html: post.metadata.author.metadata.bio }}
              />
              
              {/* Social Links */}
              {post.metadata.author.metadata.social_links && (
                <div className="flex gap-4 mt-3">
                  {Object.entries(post.metadata.author.metadata.social_links as Record<string, string>).map(([platform, url]) => (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-500 text-sm capitalize"
                    >
                      {platform}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </article>
  )
}