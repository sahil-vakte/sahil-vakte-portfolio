export type ExperienceEntry = {
  id: string;
  company: string;
  title: string;
  start: string;
  end: string; // "Present" or a date
  location?: string;
  summary: string;
  highlights: string[];
  stack: string[];
};

export const experience: ExperienceEntry[] = [
  {
    id: "rite-clinic",
    company: "Rite Clinic Private Limited",
    title: "Software Engineer (Full Stack)",
    start: "June 2023",
    end: "Present",
    summary:
      "Owns frontend architecture and end-to-end delivery across multiple concurrent products — from requirements and user-flow design through React/React Native development, API and third-party integration, testing, deployment and production support.",
    highlights: [
      "Product ownership across multiple simultaneous products, from requirements through production",
      "Frontend and application architecture for React (web) and React Native (mobile) applications",
      "Requirements understanding, user-flow design and technical planning with cross-functional teams",
      "API integration across Django/DRF and Node.js backends",
      "Third-party service integration (payments, telehealth, communications, clinical systems)",
      "Testing, debugging, deployment and ongoing production support",
    ],
    stack: ["React", "React Native", "Django", "Django REST Framework", "Node.js", "MySQL", "MongoDB", "AWS"],
  },
  {
    id: "intemize",
    company: "Intemize",
    title: "Frontend React.js Developer",
    start: "October 2022",
    end: "June 2023",
    summary:
      "Built reusable, accessible React interfaces for pharmaceutical and supply-chain applications, integrating Django REST APIs and Redux state management.",
    highlights: [
      "React.js applications for pharmaceutical and supply-chain domains",
      "Reusable React component libraries with Redux state management",
      "REST API integration with Django backends",
      "Responsive, mobile-first, cross-browser and accessibility-oriented UI",
      "Frontend/backend integration and debugging",
    ],
    stack: ["React.js", "Redux", "HTML5", "CSS3", "Django REST Framework"],
  },
  {
    id: "shopisthan",
    company: "Shopisthan India Private Limited",
    title: "MERN Stack Intern",
    start: "June 2022",
    end: "October 2022",
    summary:
      "Contributed to e-commerce product, cart and checkout interfaces on the MERN stack in a collaborative development environment.",
    highlights: [
      "E-commerce product interfaces, cart and checkout flows",
      "API development and integration on the MERN stack",
      "Debugging and collaborative feature development",
    ],
    stack: ["MongoDB", "Express.js", "React.js", "Node.js"],
  },
];

export type EducationEntry = {
  id: string;
  degree: string;
  institution: string;
  start: string;
  end: string;
  detail?: string;
};

export const education: EducationEntry[] = [
  {
    id: "mca",
    degree: "MCA",
    institution: "Dr. D.Y. Patil University, Pune",
    start: "2022",
    end: "2024",
    detail: "SGPA: 6.90",
  },
  {
    id: "bsc",
    degree: "B.Sc. Computer Science",
    institution: "Savitribai Phule Pune University",
    start: "2019",
    end: "2022",
    detail: "SGPA: 9.36",
  },
];
