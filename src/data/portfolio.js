/**
 * ============================================================
 *  PORTFOLIO CONFIGURATION FILE
 *  Edit this file to update your entire portfolio — no
 *  component files need to be touched.
 * ============================================================
 */

export const personal = {
  name: "Alexandra Whitmore",
  firstName: "Alexandra",
  profession: "Full-Stack Engineer & Creative Technologist",
  taglines: [
    "building elegant digital experiences",
    "crafting scalable web applications",
    "turning ideas into reality",
    "passionate about clean code",
    "designing with purpose",
  ],
  bio: `I'm a London-based software engineer with a love for building beautifully
  functional digital products. With a background in both design and engineering,
  I bridge the gap between aesthetics and technology — creating experiences that
  are as delightful to use as they are robust under the hood.`,
  bioExtended: `When I'm not writing code, you'll find me exploring design exhibitions,
  contributing to open-source projects, or enjoying a perfectly brewed cup of tea.
  I believe great software is built at the intersection of craft, curiosity, and care.`,

  // Profile image — replace with your own URL or import
  avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&q=80",

  // Location
  location: "London, United Kingdom",

  // Resume / CV link
  resumeUrl: "#",

  // Email
  email: "hello@alexandrawhitmore.dev",

  // Phone (optional — set to null to hide)
  phone: "+44 7700 900 123",
};

export const social = {
  github: "https://github.com/username",
  linkedin: "https://linkedin.com/in/username",
  instagram: "https://instagram.com/username",
  twitter: "https://twitter.com/username",
  // Add or remove as needed
};

// ── Skills ──────────────────────────────────────────────────
export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Framer Motion", level: 80 },
      { name: "Vue.js", level: 70 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js / Express", level: 90 },
      { name: "Python / FastAPI", level: 85 },
      { name: "PostgreSQL", level: 82 },
      { name: "MongoDB", level: 78 },
      { name: "GraphQL", level: 72 },
    ],
  },
  {
    category: "AI & ML",
    items: [
      { name: "LangChain / LangGraph", level: 80 },
      { name: "OpenAI / Claude APIs", level: 88 },
      { name: "Scikit-learn", level: 75 },
      { name: "TensorFlow", level: 65 },
      { name: "Streamlit", level: 85 },
    ],
  },
  {
    category: "Tools & DevOps",
    items: [
      { name: "Git / GitHub", level: 95 },
      { name: "Docker", level: 78 },
      { name: "AWS / Vercel", level: 80 },
      { name: "Figma", level: 82 },
      { name: "Linux / Bash", level: 75 },
    ],
  },
];

// ── Projects ─────────────────────────────────────────────────
export const projects = [
  {
    id: 1,
    title: "LifeSaver AI",
    subtitle: "AI-Powered Productivity Companion",
    description:
      "An intelligent productivity companion built with React and Google Gemini that helps users manage tasks, set priorities, and maintain focus throughout their day with AI-driven insights.",
    tags: ["React", "Google Gemini", "AI", "Productivity"],
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&q=80",
    github: "https://github.com/username/lifesaver-ai",
    live: "#",
    featured: true,
  },
  {
    id: 2,
    title: "RepoScout AI",
    subtitle: "GitHub Repository Explorer",
    description:
      "A Next.js TypeScript application with glassmorphism design that allows developers to intelligently search, filter, and explore GitHub repositories with AI-enhanced summaries.",
    tags: ["Next.js", "TypeScript", "GitHub API", "Glassmorphism"],
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=600&q=80",
    github: "https://github.com/username/reposcout-ai",
    live: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Lumina Research AI",
    subtitle: "Intelligent Research Assistant",
    description:
      "A Streamlit-based research assistant integrating EXA Search and Claude APIs to help researchers discover, synthesise, and organise academic information efficiently.",
    tags: ["Streamlit", "Python", "Claude API", "EXA Search"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80",
    github: "https://github.com/username/lumina-research",
    live: "#",
    featured: true,
  },
  {
    id: 4,
    title: "SBI LifePilot AI",
    subtitle: "Multi-Agent Banking Assistant",
    description:
      "A sophisticated multi-agent React banking assistant using Claude and LangGraph built for the SBI Innovate Hackathon, featuring intelligent financial guidance and digital engagement tools.",
    tags: ["React", "Claude", "LangGraph", "FinTech"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    github: "https://github.com/username/sbi-lifepilot",
    live: "#",
    featured: false,
  },
  {
    id: 5,
    title: "Fraud Detection System",
    subtitle: "ML-Powered Financial Security",
    description:
      "An end-to-end fraud detection system using SMOTE, XGBoost, and Random Forest with SHAP explainability, deployed via a Streamlit dashboard and FastAPI backend.",
    tags: ["Python", "XGBoost", "SHAP", "FastAPI", "Streamlit"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80",
    github: "https://github.com/username/fraud-detection",
    live: "#",
    featured: false,
  },
  {
    id: 6,
    title: "Heritage E-Commerce Platform",
    subtitle: "Luxury Brand Digital Presence",
    description:
      "A premium single-page heritage catering brand website with twelve sections, scroll animations, and a warm terracotta/gold design language celebrating Indian artisanal culture.",
    tags: ["HTML", "CSS", "JavaScript", "Animation"],
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
    github: "https://github.com/username/heritage-ecommerce",
    live: "#",
    featured: false,
  },
];

// ── Experience ───────────────────────────────────────────────
export const experience = [
  {
    id: 1,
    role: "Senior Full-Stack Engineer",
    company: "Meridian Digital Studio",
    location: "London, UK",
    duration: "Jan 2023 – Present",
    description:
      "Leading development of scalable SaaS products for fintech clients, architecting React frontends and Node.js microservices. Championed the adoption of AI-assisted features across the product suite.",
    highlights: [
      "Reduced page load times by 40% through code-splitting and lazy loading",
      "Mentored a team of 4 junior engineers",
      "Delivered 3 major product launches on schedule",
    ],
  },
  {
    id: 2,
    role: "Software Engineer",
    company: "Bloom Technology",
    location: "Remote",
    duration: "Jun 2021 – Dec 2022",
    description:
      "Built and maintained full-stack features for a B2B SaaS platform serving 10,000+ users. Focused on performance optimisation and accessible UI development.",
    highlights: [
      "Migrated legacy jQuery codebase to React 18",
      "Implemented real-time collaboration using WebSockets",
      "Improved test coverage from 42% to 87%",
    ],
  },
  {
    id: 3,
    role: "Frontend Developer Intern",
    company: "Clarity Agency",
    location: "Manchester, UK",
    duration: "Sep 2020 – May 2021",
    description:
      "Collaborated with designers to build responsive marketing websites and internal tooling. Gained strong foundations in React and design systems.",
    highlights: [
      "Built 8 client-facing landing pages",
      "Created a reusable component library adopted across 3 projects",
    ],
  },
];

// ── Education ────────────────────────────────────────────────
export const education = [
  {
    id: 1,
    degree: "BSc Computer Science",
    institution: "University of Edinburgh",
    location: "Edinburgh, UK",
    duration: "2017 – 2021",
    grade: "First Class Honours",
    description:
      "Specialised in Artificial Intelligence and Human-Computer Interaction. Dissertation on neural network optimisation for edge devices.",
  },
  {
    id: 2,
    degree: "A-Levels: Mathematics, Further Mathematics, Physics",
    institution: "St. Hilda's Sixth Form College",
    location: "Oxford, UK",
    duration: "2015 – 2017",
    grade: "A*A*A",
    description:
      "Developed a strong analytical foundation that underpins my engineering approach to problem-solving.",
  },
];

// ── Achievements ─────────────────────────────────────────────
export const achievements = [
  {
    id: 1,
    title: "VIBE2SHIP Hackathon Winner",
    organisation: "Coding Ninjas × Google for Developers",
    year: "2025",
    description: "First place for LifeSaver AI — an AI-powered productivity companion.",
    icon: "🏆",
  },
  {
    id: 2,
    title: "SBI Innovate 2025 Finalist",
    organisation: "State Bank of India",
    year: "2025",
    description: "Top-10 finalist for the Digital Engagement track with SBI LifePilot AI.",
    icon: "🥈",
  },
  {
    id: 3,
    title: "Google Developer Scholarship",
    organisation: "Google",
    year: "2023",
    description: "Awarded the Google Developer Scholarship for excellence in web technologies.",
    icon: "🎓",
  },
  {
    id: 4,
    title: "Open Source Contributor",
    organisation: "Various",
    year: "2022 – Present",
    description: "Active contributor to open-source projects with 300+ GitHub stars across repositories.",
    icon: "⭐",
  },
  {
    id: 5,
    title: "Tech Women Community Leader",
    organisation: "TechWomen UK",
    year: "2024",
    description:
      "Recognised for mentoring 20+ women transitioning into software engineering careers.",
    icon: "💜",
  },
  {
    id: 6,
    title: "Best Final Year Project",
    organisation: "University of Edinburgh",
    year: "2021",
    description:
      "Awarded best dissertation in the School of Informatics for neural network research.",
    icon: "📜",
  },
];

// ── Contact ──────────────────────────────────────────────────
export const contact = {
  heading: "Let's Create Something Beautiful",
  subheading:
    "Whether you have a project in mind, a question, or simply want to connect — I'd love to hear from you.",
  availability: "Currently open to freelance & full-time opportunities",
};
