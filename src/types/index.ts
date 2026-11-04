export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  liveUrl: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface ContactInfoItem {
  icon: React.ReactNode;
  title: string;
  value: string;
  link: string | null;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

