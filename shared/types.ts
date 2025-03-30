export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  consent: boolean;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  categories: string[];
  tags: { name: string; color: string }[];
  githubUrl: string;
  demoUrl: string;
  featured?: boolean;
}

export interface Certification {
  id: number;
  title: string;
  level: string;
  description: string;
  issueDate: string;
  icon: string;
  iconColor: string;
  verifyUrl: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  url: string;
}

export interface Skill {
  name: string;
  icon: string;
  iconColor?: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export interface Tool {
  name: string;
  icon: string;
  iconColor?: string;
}
