'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { BlogPost } from '@/types'
import { Clock, Calendar } from 'lucide-react'

interface BlogPostCardProps {
  post: BlogPost
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <motion.article
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-2xl bg-secondary/50 border border-white/10"
    >
      <Link href={`/blog/${post.slug}`}>
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={`${post.metadata.featured_image.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
            alt={post.metadata.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        <div className="p-6">
          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <time>{formatDate(post.created_at)}</time>
            </div>
            {post.metadata.reading_time && (
              <div className="flex items-center gap-1">
                <Clock size={14} />
                <span>{post.metadata.reading_time} min read</span>
              </div>
            )}
          </div>

          <div className="mb-3">
            <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full">
              {post.metadata.category.value}
            </span>
          </div>

          <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">
            {post.metadata.title}
          </h3>

          <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
            {post.metadata.excerpt}
          </p>

          {post.metadata.author && (
            <div className="flex items-center gap-3">
              <img
                src={`${post.metadata.author.metadata.photo.imgix_url}?w=40&h=40&fit=crop&auto=format,compress`}
                alt={post.metadata.author.metadata.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="text-white text-sm font-medium">
                  {post.metadata.author.metadata.name}
                </p>
                <p className="text-muted-foreground text-xs">
                  {post.metadata.author.metadata.position}
                </p>
              </div>
            </div>
          )}
        </div>
      </Link>
    </motion.article>
  )
}