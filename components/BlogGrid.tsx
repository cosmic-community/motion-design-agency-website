'use client'

import { motion } from 'framer-motion'
import { BlogPost } from '@/types'
import BlogPostCard from '@/components/BlogPostCard'

interface BlogGridProps {
  posts: BlogPost[]
}

export default function BlogGrid({ posts }: BlogGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post, index) => (
        <motion.div
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <BlogPostCard post={post} />
        </motion.div>
      ))}
    </div>
  )
}