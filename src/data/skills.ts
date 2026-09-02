export type SkillGroup = {
  id: string;
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    title: "Frontend",
    items: [
      "React.js",
      "React Native",
      "Next.js",
      "Vite.js",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Redux",
      "Responsive UI",
      "Reusable Components",
      "UI Architecture",
    ],
  },
  {
    id: "backend",
    title: "Backend",
    items: ["Python", "Django", "Django REST Framework", "Node.js", "Express.js", "REST APIs"],
  },
  {
    id: "mobile",
    title: "Mobile",
    items: ["React Native", "Cross-platform mobile UI", "Biometric auth", "Push notifications"],
  },
  {
    id: "database",
    title: "Database",
    items: ["MySQL", "MongoDB"],
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    items: ["AWS EC2", "AWS S3", "AWS SES", "Git", "GitHub", "GitLab", "CI/CD", "Postman", "Jira"],
  },
  {
    id: "integrations",
    title: "Integrations",
    items: [
      "OpenEMR",
      "Stripe",
      "Zoom SDK / API",
      "Uber Direct",
      "Socket.IO",
      "Graph API",
      "Lab APIs",
      "E-prescription APIs",
      "Weno Pharmacy",
    ],
  },
  {
    id: "ai",
    title: "AI / Computer Vision",
    items: ["OpenAI API", "AI Voice Agents", "TensorFlow.js", "MoveNet", "MediaPipe", "Computer Vision"],
  },
  {
    id: "engineering",
    title: "Engineering Practice",
    items: [
      "System Architecture",
      "Application Architecture",
      "User Flow Design",
      "API Integration",
      "Role-Based Access Control",
      "Product Development",
      "Technical Planning",
      "Project Management",
      "Production Support",
    ],
  },
];
