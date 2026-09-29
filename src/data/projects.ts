export interface Project {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export const projectsData: Project[] = [
  {
    title: "TogetherCode",
    category: "Real-time Collaboration",
    description:
      "A collaborative coding platform where users can work together in a shared coding environment, communicate through chat, and share files in real time.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "Monaco Editor",
    ],
    githubUrl: "https://github.com/AbhayTripathi8090/togetherCode",
    liveUrl: "https://togethercode.onrender.com",
    featured: true,
  },
  {
    title: "AI Real-time Chat App",
    category: "Real-time Application",
    description:
      "A real-time messaging application with user authentication, online/offline status, messaging, and an AI-powered chat feature.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "JWT",
    ],
    liveUrl: "https://ai-chat-powered-realtimechat.onrender.com",
    featured: true,
  },
  {
    title: "SupplyBase",
    category: "E-commerce",
    description:
      "An e-commerce platform with an admin application for managing store settings and content, including email notification functionality.",
    technologies: [
      "Next.js",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redux Toolkit",
    ],
    liveUrl: "https://supplybase.co.uk",
  },
  {
    title: "MyBildr",
    category: "HRMS / SaaS",
    description:
      "A multi-tenant HRMS platform with company, user, project, and attendance management, along with subscription and administration features.",
    technologies: [
      "React.js",
      "NestJS",
      "PostgreSQL",
      "TypeORM",
      "Socket.IO",
      "AWS",
    ],
  },
];