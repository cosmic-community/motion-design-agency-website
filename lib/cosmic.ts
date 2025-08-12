import { createBucketClient } from '@cosmicjs/sdk'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
  apiEnvironment: 'staging'
})

// Error handling helper for Cosmic SDK
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}

// Get all projects with error handling
export async function getProjects() {
  try {
    const response = await cosmic.objects.find({
      type: 'projects'
    }).props(['id', 'title', 'slug', 'metadata']).depth(1);
    
    return response.objects;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch projects');
  }
}

// Get featured projects
export async function getFeaturedProjects() {
  try {
    const response = await cosmic.objects.find({
      type: 'projects',
      'metadata.featured': true
    }).props(['id', 'title', 'slug', 'metadata']).depth(1);
    
    return response.objects;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch featured projects');
  }
}

// Get single project by slug
export async function getProject(slug: string) {
  try {
    const response = await cosmic.objects.findOne({
      type: 'projects',
      slug: slug
    }).props(['id', 'title', 'slug', 'metadata']).depth(1);
    
    return response.object;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw new Error(`Failed to fetch project: ${slug}`);
  }
}

// Get all team members
export async function getTeamMembers() {
  try {
    const response = await cosmic.objects.find({
      type: 'team-members'
    }).props(['id', 'title', 'slug', 'metadata']);
    
    return response.objects;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch team members');
  }
}

// Get all blog posts
export async function getBlogPosts() {
  try {
    const response = await cosmic.objects.find({
      type: 'blog-posts'
    }).props(['id', 'title', 'slug', 'metadata']).depth(1);
    
    return response.objects;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch blog posts');
  }
}

// Get single blog post by slug
export async function getBlogPost(slug: string) {
  try {
    const response = await cosmic.objects.findOne({
      type: 'blog-posts',
      slug: slug
    }).props(['id', 'title', 'slug', 'metadata']).depth(1);
    
    return response.object;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw new Error(`Failed to fetch blog post: ${slug}`);
  }
}

// Get blog posts by category
export async function getBlogPostsByCategory(category: string) {
  try {
    const response = await cosmic.objects.find({
      type: 'blog-posts',
      'metadata.category.key': category
    }).props(['id', 'title', 'slug', 'metadata']).depth(1);
    
    return response.objects;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error(`Failed to fetch blog posts for category: ${category}`);
  }
}