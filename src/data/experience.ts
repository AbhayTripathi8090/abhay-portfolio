export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  location: string;
  type: string;
  description: string;
  points: string[];
  technologies: string[];
  current?: boolean;
}

export const experienceData: ExperienceItem[] = [
  {
    company: "Seventh Triangle",
    role: "Full Stack Developer Intern",
    duration: "Sep 2026 – Present",
    location: "India",
    type: "Internship",
    description:
      "Working as a full stack developer intern, contributing to frontend and backend development.",
    points: [
      "Developing and improving application features across the stack.",
      "Working with frontend components and backend APIs.",
      "Debugging issues and collaborating with the development team.",
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    current: true,
  },
  {
    company: "Codenia Technologies LLP",
    role: "Full Stack Developer Intern",
    duration: "6 months",
    location: "Noida, India",
    type: "Internship",
    description:
      "Worked on a multi-tenant HRMS application with frontend, backend, and database functionality.",
    points: [
      "Contributed to HRMS modules for managing companies, users, projects, and attendance.",
      "Worked with REST APIs and database-driven application features.",
      "Used React, Node.js, and related technologies to build and maintain application functionality.",
    ],
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
    ],
  },
];