# Motion Design Agency Website

![Motion Design Agency Preview](https://imgix.cosmicjs.com/daf85240-77ad-11f0-a051-23c10f41277a-photo-1611224923853-80b023f02d71-1755024903291.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A premium motion design agency website template featuring stunning 3D effects, smooth animations, and seamless content management through Cosmic CMS. Built with Next.js 15 and designed to showcase creative work with sophistication.

## Features

- **3D Hero Section** with scroll-based flattening effect
- **Dynamic Project Portfolio** with case studies and client testimonials
- **Team Member Profiles** with specialties and social links
- **Blog System** with categorization and reading time estimates
- **Responsive Design** optimized for all screen sizes
- **Smooth Animations** and micro-interactions throughout
- **SEO Optimized** with proper meta tags and structured data
- **Fast Performance** with Next.js 15 and image optimization

## Clone this Bucket and Code Repository

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Bucket and Code Repository](https://img.shields.io/badge/Clone%20this%20Bucket-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmic-staging.com/projects/new?clone_bucket=689b8d3d18f624aec24def3a&clone_repository=689b8f7818f624aec24def50)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a High-end motion website to be used as a template for a web agency."

### Code Generation Prompt

> Build a high end motion website for an agency template. cloned after https://fullagencytempalte.lovable.app/ including the hero image to have a 3d flattening effect as you scroll down the page.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Cosmic CMS** - Headless content management
- **Framer Motion** - Advanced animation library
- **React Hook Form** - Form handling
- **Lucide React** - Icon library

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account and bucket

### Installation

1. Clone this repository
2. Install dependencies:
   ```bash
   bun install
   ```

3. Set up your environment variables:
   ```env
   COSMIC_BUCKET_SLUG=your-bucket-slug
   COSMIC_READ_KEY=your-read-key
   COSMIC_WRITE_KEY=your-write-key
   ```

4. Run the development server:
   ```bash
   bun run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view the website

## Cosmic SDK Examples

### Fetching Projects
```typescript
import { cosmic } from '@/lib/cosmic'

const response = await cosmic.objects.find({
  type: 'projects'
}).props(['title', 'slug', 'metadata']).depth(1)

const projects = response.objects
```

### Fetching Team Members
```typescript
const response = await cosmic.objects.find({
  type: 'team-members'
}).props(['title', 'slug', 'metadata'])

const teamMembers = response.objects
```

### Fetching Blog Posts
```typescript
const response = await cosmic.objects.find({
  type: 'blog-posts'
}).props(['title', 'slug', 'metadata']).depth(1)

const posts = response.objects
```

## Cosmic CMS Integration

This template integrates with three main content types:

- **Projects**: Showcase your agency's work with detailed case studies
- **Team Members**: Display your team with photos, bios, and specialties  
- **Blog Posts**: Share insights and thought leadership content

All content is dynamically rendered with proper TypeScript types and error handling.

## Deployment

Deploy to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

Or deploy to Netlify:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

Remember to add your environment variables in your hosting platform's settings.
<!-- README_END -->