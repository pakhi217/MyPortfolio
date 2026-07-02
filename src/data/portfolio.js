/**
 * ============================================================
 *  PORTFOLIO CONFIGURATION FILE — Pakhi Saxena
 *  Edit this file to update your entire portfolio.
 * ============================================================
 */

export const personal = {
  name: "Pakhi Saxena",
  firstName: "Pakhi",
  profession: "ECE Student | Software Developer | AI Enthusiast",
  taglines: [
    "B.Tech ECE • Class of 2029",
    "Software Developer",
    "AI & Machine Learning Enthusiast",
    "Building Real-World Projects",
    "Always Learning, Always Building",
  ],
  bio: `I'm an Electronics and Communication Engineering student with a passion for software development, artificial intelligence, and building impactful digital products. I enjoy transforming ideas into scalable applications while continuously learning new technologies and solving real-world problems.`,
  bioExtended: `Alongside my engineering studies, I actively build full-stack applications, AI-powered tools, and machine learning projects. My interests span software engineering, web development, artificial intelligence, open-source contribution, and modern development practices. I believe the best way to learn is by building — whether through hackathons, personal projects, or sharpening my DSA skills.`,

  // Profile image — replace with your own photo URL
  avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&q=80",

  location: "New Delhi, India",
  resumeUrl: "#",
  email: "pakhisaxena217@gmail.com",
  phone: null, // Add your phone number or keep null to hide
};

export const social = {
  github: "https://github.com/pakhi217",
  linkedin: "https://linkedin.com/in/pakhi-saxena-7a7665366",
  instagram: null,
  twitter: null,
};

// ── Skills ──────────────────────────────────────────────────
export const skills = [
  {
    category: "Programming Languages",
    items: [
      { name: "C++", level: 85 },
      { name: "Python", level: 88 },
      { name: "C", level: 80 },
      { name: "JavaScript", level: 78 },
    ],
  },
  {
    category: "AI & Machine Learning",
    items: [
      { name: "Scikit-learn", level: 82 },
      { name: "Pandas / NumPy", level: 88 },
      { name: "Streamlit", level: 85 },
      { name: "OpenAI / Claude APIs", level: 80 },
      { name: "TensorFlow", level: 65 },
    ],
  },
  {
    category: "Web Development",
    items: [
      { name: "HTML / CSS", level: 85 },
      { name: "React", level: 78 },
      { name: "FastAPI", level: 80 },
      { name: "REST APIs", level: 82 },
    ],
  },
  {
    category: "Tools & Technologies",
    items: [
      { name: "Git / GitHub", level: 90 },
      { name: "Vercel", level: 75 },
      { name: "Figma", level: 70 },
      { name: "Bash / Linux", level: 72 },
      { name: "KiCad", level: 60 },
    ],
  },
];

// ── Projects ─────────────────────────────────────────────────
export const projects = [
  {
    id: 1,
    title: "RepoScout AI",
    subtitle: "AI-Powered GitHub Explorer",
    description:
      "An AI-powered GitHub repository explorer that helps developers search, analyze, and understand repositories through intelligent summaries and insights.",
    tags: ["Next.js", "TypeScript", "GitHub API", "AI"],
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=600&q=80",
    github: "https://github.com/pakhi217",
    live: "#",
    featured: true,
  },
  {
    id: 2,
    title: "SBI LifePilot AI",
    subtitle: "Multi-Agent Banking Assistant",
    description:
      "A multi-agent AI banking assistant developed for the SBI Innovate Hackathon using Claude and LangGraph, designed to deliver intelligent financial guidance and digital engagement.",
    tags: ["React", "Claude API", "LangGraph", "FinTech"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    github: "https://github.com/pakhi217",
    live: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Fraud Detection System",
    subtitle: "ML-Powered Financial Security",
    description:
      "An end-to-end machine learning system that detects fraudulent financial transactions using XGBoost, Random Forest, SHAP explainability, FastAPI, and a Streamlit dashboard.",
    tags: ["Python", "XGBoost", "SHAP", "FastAPI", "Streamlit"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80",
    github: "https://github.com/pakhi217/Fraud-Detection-System",
    live: "#",
    featured: true,
  },
  {
    id: 4,
    title: "LifeSaver AI",
    subtitle: "AI Productivity Companion",
    description:
      "An AI-powered productivity companion that helps users organize tasks, prioritize work, and improve daily productivity using intelligent recommendations.",
    tags: ["React", "Google Gemini", "AI", "Productivity"],
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&q=80",
    github: "https://github.com/pakhi217",
    live: "#",
    featured: false,
  },
];

// ── Experience ───────────────────────────────────────────────
export const experience = [
  {
    id: 1,
    role: "Open Source Contributor",
    company: "GirlScript Summer of Code (GSSoC)",
    location: "Remote",
    duration: "2026",
    description:
      "Contributing to open-source projects as part of GSSoC 2026, collaborating with developers globally to improve codebases, fix bugs, and add meaningful features.",
    highlights: [
      "Contributing to real-world open-source repositories",
      "Collaborating with a global community of developers",
      "Improving code quality and documentation across projects",
    ],
  },
];

// ── Education ────────────────────────────────────────────────
export const education = [
  {
    id: 1,
    degree: "Bachelor of Technology — Electronics & Communication Engineering",
    institution: "Jaypee Institute of Information Technology (JIIT)",
    location: "Noida, India",
    duration: "2025 – 2029",
    grade: "B.Tech • Class of 2029",
    description:
      "Focused on software development, artificial intelligence, embedded systems, and innovative technology solutions while building strong problem-solving and programming skills.",
  },
  {
    id: 2,
    degree: "Senior Secondary Education (Class XII)",
    institution: "Cambridge School",
    location: "Noida, India",
    duration: "Completed 2025",
    grade: "91%",
    description:
      "Developed a strong academic foundation in mathematics, science, and analytical thinking that underpins my engineering approach to problem-solving.",
  },
  {
    id: 3,
    degree: "Secondary Education (Class X)",
    institution: "Cambridge School",
    location: "Noida, India",
    duration: "Completed 2023",
    grade: "97%",
    description:
      "Built early academic excellence with top performance across core subjects, establishing the discipline and curiosity that drives my learning today.",
  },
];

// ── Achievements ─────────────────────────────────────────────
export const achievements = [
  {
    id: 1,
    title: "GSSoC Open Source Contributor",
    organisation: "GirlScript Summer of Code",
    year: "2026",
    description:
      "Selected as an open-source contributor for GSSoC 2026, contributing to real-world projects alongside a global developer community.",
    icon: "🌟",
  },
  {
    id: 2,
    title: "SBI Innovate Hackathon",
    organisation: "State Bank of India",
    year: "2025",
    description:
      "Built SBI LifePilot AI — a multi-agent banking assistant — for the SBI Innovate Hackathon's Digital Engagement track.",
    icon: "🏦",
  },
  {
    id: 3,
    title: "Multiple AI-Powered Projects",
    organisation: "Personal Portfolio",
    year: "2024 – Present",
    description:
      "Built several production-grade AI and full-stack applications including RepoScout AI, LifeSaver AI, and a Fraud Detection System.",
    icon: "🚀",
  },
  {
    id: 4,
    title: "Class X — 97%",
    organisation: "Cambridge School, Noida",
    year: "2023",
    description:
      "Achieved 97% in Class X board examinations, demonstrating academic excellence and a strong foundation in science and mathematics.",
    icon: "🎓",
  },
  {
    id: 5,
    title: "Class XII — 91%",
    organisation: "Cambridge School, Noida",
    year: "2025",
    description:
      "Scored 91% in Class XII board examinations while simultaneously building software projects and preparing for engineering.",
    icon: "📜",
  },
  {
    id: 6,
    title: "DSA & Competitive Programming",
    organisation: "Self-Driven",
    year: "2024 – Present",
    description:
      "Continuously sharpening Data Structures & Algorithms skills through coding challenges, problem sets, and competitive programming platforms.",
    icon: "💻",
  },
];

// ── Contact ──────────────────────────────────────────────────
export const contact = {
  heading: "Let's Build Something Together",
  subheading:
    "Whether you have a project idea, collaboration opportunity, or just want to connect — I'd love to hear from you.",
  availability: "Open to internships, collaborations & open-source projects",
};
