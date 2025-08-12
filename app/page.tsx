import HeroSection from '@/components/HeroSection'
import FeaturedProjects from '@/components/FeaturedProjects'
import ServicesSection from '@/components/ServicesSection'
import TeamSection from '@/components/TeamSection'
import LatestPosts from '@/components/LatestPosts'
import ContactSection from '@/components/ContactSection'
import { getFeaturedProjects, getTeamMembers, getBlogPosts } from '@/lib/cosmic'

export default async function HomePage() {
  // Fetch data in parallel
  const [featuredProjects, teamMembers, blogPosts] = await Promise.all([
    getFeaturedProjects(),
    getTeamMembers(),
    getBlogPosts()
  ])

  return (
    <div className="space-y-0">
      <HeroSection />
      <FeaturedProjects projects={featuredProjects} />
      <ServicesSection />
      <TeamSection teamMembers={teamMembers} />
      <LatestPosts posts={blogPosts.slice(0, 3)} />
      <ContactSection />
    </div>
  )
}