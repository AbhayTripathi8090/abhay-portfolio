export interface Project {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  liveUrl2?: string;
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
    title: "IdeaCraft",
    category: "E-commerce",
        description:
          "An e-commerce platform that allows users to browse and purchase products, manage their shopping cart, and complete transactions securely. It includes features for product listings, user authentication, and order management.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
    ],
    githubUrl: "https://github.com/AbhayTripathi8090/ecom",
    liveUrl: "https://ecom-phi-opal-61.vercel.app/",
    liveUrl2: "https://ecom-3j9p.vercel.app/",
    featured: true,
  },
  {
    title: "HeyChat",
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
    githubUrl: "https://github.com/AbhayTripathi8090/HeyChat",
    liveUrl: "https://ai-chat-powered-realtimechat.onrender.com",
    featured: true,
  },
  {
    title: "SupplyBase",
    category: "E-commerce",
    description:
      "A full-stack e-commerce platform for browsing products, managing a cart, and placing orders. It includes a dedicated admin dashboard for products, inventory, store content, customer orders, and email notifications.",
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
      "A multi-tenant HRMS application that helps companies manage employees, attendance, leave, projects, and team information from one workspace. It also includes role-based access, subscription management, and an admin panel for platform operations.",
    technologies: [
      "React.js",
      "NestJS",
      "PostgreSQL",
      "TypeORM",
      "Socket.IO",
      "AWS",
    ],
    liveUrl: "https://mybildr.com",
  },
  {
    title: "MeYou",
    category: "Mobile Application",
    description:
      "A mobile application designed to help users connect, share updates, and manage their everyday interactions in one place. This placeholder can be replaced with the app's exact purpose, key user flows, and the features you worked on.",
    technologies: [
      "React Native",
      "TypeScript",
      "Node.js",
      "REST APIs",
      "Firebase",
    ],
  },
];
