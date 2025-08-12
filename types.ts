// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
  status?: string;
  published_at?: string;
}

// Project object type
export interface Project extends CosmicObject {
  type: 'projects';
  metadata: {
    title: string;
    client: string;
    project_type: {
      key: string;
      value: string;
    };
    featured_image: {
      url: string;
      imgix_url: string;
    };
    project_video?: {
      url: string;
      imgix_url: string;
    };
    gallery?: Array<{
      url: string;
      imgix_url: string;
    }>;
    brief_description: string;
    case_study?: string;
    services?: string[];
    testimonial?: string;
    duration?: string;
    featured?: boolean;
  };
}

// Team member object type
export interface TeamMember extends CosmicObject {
  type: 'team-members';
  metadata: {
    name: string;
    position: string;
    photo: {
      url: string;
      imgix_url: string;
    };
    bio?: string;
    specialties?: string[];
    experience_years?: number;
    social_links?: {
      dribbble?: string;
      behance?: string;
      linkedin?: string;
      instagram?: string;
      twitter?: string;
    };
  };
}

// Blog post object type
export interface BlogPost extends CosmicObject {
  type: 'blog-posts';
  metadata: {
    title: string;
    featured_image: {
      url: string;
      imgix_url: string;
    };
    excerpt: string;
    content: string;
    author: TeamMember;
    category: {
      key: string;
      value: string;
    };
    tags?: string;
    reading_time?: number;
  };
}

// Type literals for categories
export type ProjectType = 'brand_animation' | 'motion_graphics' | 'ui_animation' | 'commercial' | 'explainer_video';
export type BlogCategory = 'tutorials' | 'industry_insights' | 'case_studies' | 'behind_the_scenes' | 'trends';

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit?: number;
  skip?: number;
}

// Type guards
export function isProject(obj: CosmicObject): obj is Project {
  return obj.type === 'projects';
}

export function isTeamMember(obj: CosmicObject): obj is TeamMember {
  return obj.type === 'team-members';
}

export function isBlogPost(obj: CosmicObject): obj is BlogPost {
  return obj.type === 'blog-posts';
}

// Utility types
export type CreateProjectData = Omit<Project, 'id' | 'created_at' | 'modified_at'>;
export type UpdateProjectData = Partial<CreateProjectData>;