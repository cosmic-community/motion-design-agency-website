// app/blog/[slug]/page.tsx
import { getBlogPost } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import BlogPostContent from '@/components/BlogPostContent'
import type { Metadata } from 'next'

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPost(slug)

  if (!post) {
    return {
      title: 'Blog Post Not Found',
    }
  }

  return {
    title: `${post.metadata.title} - Motion Design Agency Blog`,
    description: post.metadata.excerpt,
    openGraph: {
      title: post.metadata.title,
      description: post.metadata.excerpt,
      images: [
        {
          url: `${post.metadata.featured_image.imgix_url}?w=1200&h=630&fit=crop&auto=format,compress`,
          width: 1200,
          height: 630,
          alt: post.metadata.title,
        },
      ],
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await getBlogPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen pt-24">
      <BlogPostContent post={post} />
    </div>
  )
}