export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "Frontend",
    description: "Building responsive and interactive user interfaces.",
    skills: [
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Redux Toolkit",
      "Tailwind CSS",
      "Material UI",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Backend",
    description: "Developing APIs and server-side application logic.",
    skills: [
      "Node.js",
      "Express.js",
      "NestJS",
      "REST APIs",
      "Socket.IO",
      "JWT Authentication",
    ],
  },
  {
    title: "Databases",
    description: "Working with structured and document-based data.",
    skills: ["MongoDB", "PostgreSQL", "Mongoose", "TypeORM"],
  },
  {
    title: "Tools & Technologies",
    description: "Tools for development, collaboration, and deployment.",
    skills: ["Git", "GitHub", "AWS", "Postman", "VS Code", "Vercel"],
  },
];