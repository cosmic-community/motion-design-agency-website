import BlogGrid from '@/components/BlogGrid'
import PageHeader from '@/components/PageHeader'
import { getBlogPosts } from '@/lib/cosmic'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog - Motion Design Agency',
  description: 'Latest insights, tutorials, and industry trends in motion design and animation.',
}

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <div className="min-h-screen pt-24 pb-16">
      <PageHeader
        title="Blog"
        subtitle="Insights, tutorials, and trends in motion design"
        gradient="from-primary via-accent to-pink-500"
      />
      
      <div className="section-padding container-max mt-16">
        {posts.length > 0 ? (
          <BlogGrid posts={posts} />
        ) : (
          <div className="text-center py-16">
            <h3 className="text-2xl font-semibold text-muted-foreground mb-4">
              No blog posts found
            </h3>
            <p className="text-muted-foreground">
              Blog posts will appear here once they are added to your Cosmic bucket.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}