'use client'

import { motion } from 'framer-motion'
import { BlogPost } from '@/types'
import BlogPostCard from '@/components/BlogPostCard'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface LatestPostsProps {
  posts: BlogPost[]
}

export default function LatestPosts({ posts }: LatestPostsProps) {
  return (
    <section className="py-24 bg-background">
      <div className="section-padding container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Latest <span className="gradient-text">Insights</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest trends, tutorials, and industry insights from our team
          </p>
        </motion.div>

        {posts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {posts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <BlogPostCard post={post} />
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-semibold transition-all duration-200 group"
              >
                Read More Articles
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center py-16"
          >
            <h3 className="text-2xl font-semibold text-muted-foreground mb-4">
              No blog posts yet
            </h3>
            <p className="text-muted-foreground">
              Blog posts will appear here once they are added to your Cosmic bucket.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}