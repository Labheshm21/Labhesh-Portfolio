export interface NavLink {
  name: string;
  url: string;
}

export interface Skill {
  name: string;
  percentage: number;
  category?: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  date: string;
  description: string[];
  skills?: string[];
  icon?: string;
}

export interface Education {
  school: string;
  degree: string;
  date: string;
  description?: string;
  icon?: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  link?: string;
  github?: string;
}

export interface Award {
  title: string;
  organization: string;
  date: string;
  description?: string;
}