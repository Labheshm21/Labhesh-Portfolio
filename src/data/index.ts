import { NavLink, Skill, Experience, Education, Project, Award } from '../types';

export const navLinks: NavLink[] = [
  { name: 'Home', url: '#home' },
  { name: 'About', url: '#about' },
  { name: 'Experience', url: '#experience' },
  { name: 'Projects', url: '#projects' },
  { name: 'Education', url: '#education' },
  { name: 'Contact', url: '#contact' },
];

export const skills: Skill[] = [
  // Programming Languages
  { name: 'JavaScript', percentage: 90, category: 'Language' },
  { name: 'Python', percentage: 85, category: 'Language' },
  { name: 'Java', percentage: 80, category: 'Language' },
  { name: 'C++', percentage: 75, category: 'Language' },
  { name: 'SQL', percentage: 85, category: 'Language' },
  { name: 'TypeScript', percentage: 85, category: 'Language' },
  { name: 'HTML/CSS', percentage: 90, category: 'Language' },
  { name: 'R', percentage: 70, category: 'Language' },
  
  // Frameworks
  { name: 'React', percentage: 90, category: 'Framework' },
  { name: 'Node.js', percentage: 85, category: 'Framework' },
  { name: 'Flask', percentage: 80, category: 'Framework' },
  { name: 'Django', percentage: 75, category: 'Framework' },
  { name: 'TensorFlow', percentage: 70, category: 'Framework' },
  { name: 'PyTorch', percentage: 65, category: 'Framework' },
  { name: 'Angular', percentage: 70, category: 'Framework' },
  { name: 'Vue.js', percentage: 65, category: 'Framework' },
  
  // Tools
  { name: 'Git & GitHub', percentage: 90, category: 'Tool' },
  { name: 'Docker', percentage: 80, category: 'Tool' },
  { name: 'Jenkins', percentage: 75, category: 'Tool' },
  { name: 'JIRA', percentage: 85, category: 'Tool' },
  { name: 'MongoDB', percentage: 80, category: 'Tool' },
  { name: 'PostgreSQL', percentage: 85, category: 'Tool' },
  { name: 'Firebase', percentage: 80, category: 'Tool' },
  { name: 'AWS', percentage: 75, category: 'Tool' }
];

export const experiences: Experience[] = [
  {
    title: 'Graduate Assistant',
    company: 'Worcester Polytechnic Institute',
    location: 'Worcester, MA',
    date: 'Feb 2025 - Present',
    description: [
      'Developing and maintaining an online exam system using Java and Next.js, aiming to reduce manual grading time by 40% and enhance exam accessibility for 1000+ students.',
      'Designing secure, high-performance APIs with role-based access control (RBAC), ensuring system security and 99.9% uptime during peak exam periods.',
      'Leading efforts to optimize the platform\'s scalability, improving exam completion rates by 30% through a streamlined user interface and efficient backend architecture.'
    ],
    skills: ['Java', 'Next.js', 'API Design', 'RBAC', 'UI/UX'],
    icon: 'BriefcaseBusiness'
  },
  {
    title: 'Educator',
    company: 'Blink Skills',
    location: 'India',
    date: 'Jan 2024 - Apr 2024',
    description: [
      'Delivered 20+ comprehensive lessons on machine learning algorithms such as K-Nearest Neighbors (KNN), XGBoost, Linear Regression, and Logistic Regression, tailored to the needs of 50+ engineering students.',
      'Guided students through Fraud Detection Transaction project, ensuring the real-world application of machine learning.',
      'Integrated tools like Scikit-learn, TensorFlow, and Python libraries to facilitate the development and deployment of 5+ efficient machine learning models, achieving an average accuracy improvement of 15%.'
    ],
    skills: ['Machine Learning', 'Python', 'Scikit-learn', 'TensorFlow'],
    icon: 'GraduationCap'
  },
  {
    title: 'Educator',
    company: 'Coding Junior',
    location: 'India',
    date: 'Dec 2022 - Apr 2023',
    description: [
      'Delivered 40+ engaging lessons to 30+ CBSE 7th-grade students, fostering an interactive and practical learning environment.',
      'Managed 20 lesson plans with an average student satisfaction of 90%.',
      'Reorganised an ICT curriculum and created 10+ quizzes and 5+ practice tests to enhance students\' understanding of Python programming and web development, achieving a 20% improvement in student test scores.'
    ],
    skills: ['Python', 'Web Development', 'Teaching', 'Curriculum Design'],
    icon: 'GraduationCap'
  }
];

export const education: Education[] = [
  {
    school: 'Worcester Polytechnic Institute',
    degree: 'Master of Science in Computer Science — Concentration: Software Engineering',
    date: 'Aug 2024 - May 2026',
    icon: 'GraduationCap'
  },
  {
    school: 'MCT\'s Rajiv Gandhi Institute of Technology, Mumbai University',
    degree: 'Bachelor of Engineering in Computer Engineering',
    date: 'Aug 2020 - May 2024',
    icon: 'GraduationCap'
  }
];

export const projects: Project[] = [
  {
    title: 'ClosetMate App: Swipe, try and buy',
    description: 'Currently developing ClosetMate, a dynamic swipe shopping app inspired by Tinder, using Python and FastAPI to build a robust backend that efficiently handles real-time interactions and complex data flows. Engineered a highly responsive and intuitive mobile frontend using Flutter.',
    tags: ['Python', 'FastAPI', 'Flutter', 'AWS', 'Docker', 'Kubernetes'],
    link: 'https://symptriage.vercel.app/',
    github: 'https://github.com/Labheshm21/closetmate'
  },
  {
    title: 'WhisperWave: A realtime chat application',
    description: 'Designed a real-time chat application using React.js for an engaging frontend and Flask for a robust backend, enabling seamless communication for 500+ concurrent users. Implemented live user features, delivering 100% real-time updates for display names.',
    tags: ['React.js', 'Flask', 'WebSockets', 'API'],
    link: 'https://whisperwave-ud41.onrender.com/',
    github: '#'
  },
  {
    title: 'Symptriage: Medicine Recommendation and Disease Prediction',
    description: 'Created a web application for disease prediction and personalized medicine recommendations using XGBoost, KNN, MLP, and Random Forest, increasing accuracy by 85%. Architected an intuitive interface and scalable backend to securely process patient data.',
    tags: ['Machine Learning', 'XGBoost', 'KNN', 'Python', 'Web Development'],
    link: 'https://symptriage.vercel.app/',
    github: '#'
  }
];

export const awards: Award[] = [
  {
    title: '3rd Position',
    organization: 'Colibre Hackathon by Worcester Polytechnic Institute',
    date: 'Nov 2024',
    description: 'Showcasing innovative technical solutions'
  },
  {
    title: '2nd Position',
    organization: 'National-level Ideathon by Girlscript Kolkata',
    date: 'Mar 2021',
    description: 'Highlighting creative action oriented skills'
  }
];