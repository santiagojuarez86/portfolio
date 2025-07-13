export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  repoUrl?: string;
  demoUrl?: string;
  imageUrl: string;
}

export interface NavLink {
  id: string;
  title: string;
}