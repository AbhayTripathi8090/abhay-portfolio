
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
    location: "Noida, India",
    type: "Internship",
    description:
      "Working as a full stack developer intern, contributing to frontend and backend development, building application features, and integrating REST APIs.",
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
    duration: "Mar 2026 – Jul 2026",
    location: "Noida, India",
    type: "Internship",
    description:
      "Contributed to multiple applications, including MyBildr HRMS, SupplyBase E-commerce, and Meyou Mobile Application, working on frontend development, backend APIs, database integration, and application functionality.",
    points: [
      "MyBildr HRMS: Worked on a multi-tenant HR management system featuring company management, employee management, attendance tracking, shift scheduling, subscription plans, and administrative dashboards.",
      "SupplyBase E-commerce: Contributed to an e-commerce platform and admin panel, working on product and category management, admin settings, email notifications, and REST API integration.",
      "Meyou Mobile Application: Contributed to mobile application development, focusing on frontend functionality, API integration, and user-facing features.",
      "Developed and maintained REST APIs, integrated databases, and worked on responsive user interfaces.",
      "Collaborated with the development team to debug issues, implement features, and improve application functionality.",
    ],
    technologies: [
      "React.js",
      "Next.js",
      "React Native",
      "Node.js",
      "Express.js",
      "NestJS",
      "PostgreSQL",
      "MongoDB",
      "TypeScript",
      "AWS S3",
      "Redux",
      "REST APIs",
    ],
  },
];