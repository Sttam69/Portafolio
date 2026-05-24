export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  demoUrl?: string;
  category: 'all' | 'systems' | 'web' | 'cybersecurity' | 'gamedev';
  featured?: boolean;
}

export interface Skill {
  name: string;
  level: string; // E.g., "Junior", "Pleno", "Senior", "Avanzado"
  category: string;
}

export interface SkillGroup {
  categoryName: string;
  iconName: string;
  skills: Skill[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  description: string;
  highlights?: string[];
  isCurrent?: boolean;
}

export interface SocialLink {
  platform: 'github' | 'linkedin' | 'email' | 'twitter';
  url: string;
  label: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  highlights?: string[];
}
