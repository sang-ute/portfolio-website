export interface Project {
  title: string;
  tagline: string;
  description: string;
  category: "all" | "web" | "cloud" | "mobile" | "systems";
  categoryLabel: string;
  technologies: string[];
  githubUrl?: string;
  secondaryUrl?: string;
  secondaryLabel?: string;
  highlights: string[];
  badge?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  skills: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  gpa: string;
  classGroup: string;
  details: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  badge: string;
  type: string;
}

const basePath = process.env.NODE_ENV === "production" ? "/portfolio-website" : "";

export const PERSONAL_INFO = {
  name: "Nguyen Quang Sang",
  vietnameseName: "Nguyễn Quang Sáng",
  role: "Software Engineer Intern",
  company: "Money Forward Vietnam (MFi)",
  email: "nqs28012004@gmail.com",
  phone: "0938 963 667",
  location: "Ho Chi Minh City, Vietnam",
  github: "https://github.com/sang-ute",
  linkedin: "https://www.linkedin.com/in/sang-n-9946b6200/",
  portrait: {
    jpg: `${basePath}/assets/sang-portrait.jpg`,
    webp: `${basePath}/assets/sang-portrait.webp`,
    width: 960,
    height: 1200,
    alt: "Nguyen Quang Sang, Software Engineer Intern at Money Forward Vietnam, smiling with arms crossed",
  },
  resumePdf: `${basePath}/assets/cv.pdf`,
  englishLevel: "IELTS 7.5 (Fluent)",
  summary:
    "Final-year Software Engineering student at HCMUTE with practical expertise in backend engineering, cloud architecture on AWS, and scalable microservices. Currently contributing to global SaaS platform Admina at Money Forward Vietnam.",
};

export const METRICS = [
  { label: "HCMUTE Software Eng", value: "Class of 2026", sub: "Class of 2027 Track" },
  { label: "Cumulative GPA", value: "3.2 / 4.0", sub: "Academic Standing" },
  { label: "Public Repos & Labs", value: "14+", sub: "GitHub Activity" },
  { label: "English Proficiency", value: "IELTS 7.5", sub: "International Certified" },
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Money Forward Vietnam (MFi)",
    role: "Software Engineer Intern",
    period: "2026 - Present",
    location: "Ho Chi Minh City, Vietnam",
    type: "Internship",
    description:
      "Working on Admina — Money Forward's global SaaS management platform — alongside the Data Aggregation Platform and Web teams.",
    responsibilities: [
      "Write clean, maintainable, and scalable backend code using TypeScript and Node.js (NestJS).",
      "Participate actively in sprint planning, architectural design discussions, and rigorous code reviews.",
      "Support data aggregation pipelines, REST APIs, and microservices integrations.",
      "Collaborate across international frontend, infrastructure, and product teams.",
    ],
    skills: ["TypeScript", "NestJS", "Node.js", "MySQL", "Docker", "AWS", "GitHub Actions"],
  },
  {
    company: "AWS Study Group",
    role: "Cloud Engineering Trainee",
    period: "04/2025 - 07/2025",
    location: "Ho Chi Minh City, Vietnam",
    type: "Hybrid • Full-time",
    description:
      "Completed an intensive cloud engineering training program focused on real-world cloud architectures, AWS networking, and security best practices.",
    responsibilities: [
      "Designed and deployed scalable cloud infrastructure using EC2, S3, VPC, IAM, and Route 53.",
      "Implemented secure IAM configurations strictly adhering to least-privilege principles.",
      "Applied serverless architecture concepts using AWS Lambda and event-driven patterns.",
      "Configured VPC subnets, route tables, internet gateways, and security group isolation.",
    ],
    skills: ["AWS EC2", "AWS S3", "AWS Lambda", "VPC", "IAM", "Route 53", "Serverless"],
  },
];

export const PROJECTS: Project[] = [
  {
    title: "Vinabooking Platform",
    tagline: "High-Concurrency Booking & Microservices",
    description:
      "Enterprise-grade hospitality and booking ecosystem powered by microservices architecture. Features distributed authentication with OTP, review processing, transactional booking pipelines, and inter-service communication via high-speed gRPC.",
    category: "web",
    categoryLabel: "Microservices & Web",
    technologies: ["React", "TypeScript", "Node.js", "MySQL", "gRPC", "Docker"],
    githubUrl: "https://github.com/HLoc26/Vinabooking-New",
    secondaryUrl: "https://github.com/HLoc26/VinaBooking",
    secondaryLabel: "Legacy Repo",
    highlights: [
      "Built booking, authentication, and review features",
      "Connected services with gRPC and an API gateway",
      "Containerized services with Docker and MySQL",
    ],
    badge: "Flagship",
  },
  {
    title: "AWS Rekognition Face System",
    tagline: "Cloud Attendance & Face Indexing",
    description:
      "Full-stack automated attendance tracking and face recognition platform built natively on AWS cloud services. Automatically processes image uploads to S3, indexes faces with AWS Rekognition, and persists attendance logs in DynamoDB.",
    category: "cloud",
    categoryLabel: "AWS Cloud",
    technologies: ["React", "AWS Rekognition", "AWS S3", "DynamoDB", "AWS Lambda", "Amplify", "Node.js"],
    githubUrl: "https://github.com/sang-ute/rekognition-project",
    highlights: [
      "Facial image indexing and similarity matching using AWS Rekognition",
      "Serverless event-driven pipeline: S3 Upload → Lambda → DynamoDB record",
      "User-friendly web dashboard powered by React and AWS Amplify",
    ],
    badge: "AWS Cloud",
  },
  {
    title: "Music Streaming Web Application",
    tagline: "Audio Streaming & Artist Catalog",
    description:
      "Interactive audio streaming platform featuring artist profiles, track uploads, playlists, audio playback controls, and authentication. Implemented complete frontend/backend workflows and audio player integration.",
    category: "web",
    categoryLabel: "Full-Stack Web",
    technologies: ["JavaScript", "Node.js", "Express", "Web Audio API", "MongoDB", "CSS3"],
    githubUrl: "https://github.com/HLoc26/PROJECT_IT_1",
    highlights: [
      "Custom audio playback controller with playlist queue management",
      "Artist catalog, album navigation, and upload workflow",
    ],
  },
  {
    title: "Kotlin Android Practice Lab",
    tagline: "Native Mobile Suite",
    description:
      "Collection of native Android applications focusing on real-world mobile patterns: WeatherProject (REST API & notification engine), Image Loader (async fetching & disk cache), Alarm & To-Do app, and Advanced Android Testing.",
    category: "mobile",
    categoryLabel: "Android Kotlin",
    technologies: ["Kotlin", "Android SDK", "Coroutines", "Retrofit", "Room DB", "Robolectric"],
    githubUrl: "https://github.com/sang-ute/WeatherProject",
    secondaryUrl: "https://github.com/sang-ute/Mobile_Programming_To_do_list",
    secondaryLabel: "To-Do Repo",
    highlights: [
      "WeatherProject with live background notification service and REST sync",
      "Unit and integration testing suites with Robolectric and Mockito",
    ],
  },
  {
    title: "Battleship AI Strategy Engine",
    tagline: "Intelligent Game Simulation",
    description:
      "Artificial Intelligence course project: Battleship strategy game with heuristic search algorithms, probability density targeting, and parity search to minimize moves to victory.",
    category: "systems",
    categoryLabel: "AI & Heuristics",
    technologies: ["Python", "Search Algorithms", "Heuristics", "Game Theory"],
    githubUrl: "https://github.com/HLoc26/battleshipAI",
    highlights: [
      "Probability density mapping and heuristic torpedo targeting",
      "Autonomous decision-tree simulation in Python",
    ],
  },
  {
    title: "Bookstore DBMS & Windows Suite",
    tagline: "Enterprise Database & C# GUI",
    description:
      "Relational bookstore database management system engineered with complex T-SQL stored procedures, triggers, ACID transactions, and index optimizations, coupled with a C# Windows .NET administration application.",
    category: "systems",
    categoryLabel: "Desktop & DBMS",
    technologies: ["C# .NET", "T-SQL", "Microsoft SQL Server", "Transactions"],
    githubUrl: "https://github.com/HLoc26/PROJECT-DBMS",
    secondaryUrl: "https://github.com/sang-ute/Windows-Programming",
    secondaryLabel: "WinForms Repo",
    highlights: [
      "High-performance stored procedures, audit triggers, and database indexing",
      "Windows Forms desktop GUI for comprehensive bookstore management",
    ],
  },
];

export const SKILL_CATEGORIES = [
  {
    name: "Programming Languages",
    icon: "code",
    skills: ["TypeScript", "JavaScript (ES6+)", "Node.js", "Python", "Kotlin", "SQL", "C#", "C / C++"],
  },
  {
    name: "Frameworks & Web",
    icon: "layers",
    skills: ["NestJS", "Express.js", "React", "Next.js", "Vite", "FastAPI", "Django", "Tailwind CSS"],
  },
  {
    name: "Cloud & DevOps",
    icon: "cloud",
    skills: ["AWS EC2", "AWS S3", "AWS Lambda", "VPC & IAM", "Route 53", "Docker", "gRPC", "API Gateway"],
  },
  {
    name: "Databases & ORMs",
    icon: "database",
    skills: ["MySQL", "Prisma ORM", "MongoDB", "Redis", "DynamoDB", "Microsoft SQL Server"],
  },
  {
    name: "Tools & Methodologies",
    icon: "wrench",
    skills: ["Git & GitHub", "Postman", "Jira", "Agile / Scrum", "RESTful APIs", "CI/CD Workflows"],
  },
  {
    name: "Soft Skills & Languages",
    icon: "users",
    skills: ["Team Collaboration", "Problem Solving", "English (IELTS 7.5)", "Vietnamese (Native)", "Fast Learner"],
  },
];

export const EDUCATIONS: Education[] = [
  {
    institution: "HCMC University of Technology and Engineering (HCMUTE)",
    degree: "Bachelor of Engineering in Software Engineering",
    period: "2022 - 05/2026",
    gpa: "3.2 / 4.0",
    classGroup: "Class of 2026 / 2027",
    details: [
      "Specialized in Software Engineering, microservices, cloud computing, and databases.",
      "Completed hands-on projects across cloud architecture, distributed systems, and web applications.",
    ],
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "AWS Academy Cloud Developing",
    issuer: "Amazon Web Services (AWS)",
    badge: "AWS",
    type: "Cloud Computing",
  },
  {
    name: "SDWS Training (Agile / Scrum)",
    issuer: "Axon Active Vietnam",
    badge: "Agile",
    type: "Software Methodology",
  },
  {
    name: "IELTS Academic 7.5",
    issuer: "International English Language Testing System",
    badge: "IELTS",
    type: "English Proficiency (Fluent)",
  },
];
