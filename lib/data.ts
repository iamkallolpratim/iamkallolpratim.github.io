// All portfolio content lives here so it can be edited without touching layout code.

export const profile = {
  name: "Kallol Pratim Saikia",
  firstName: "Kallol",
  role: "Engineering Leader & Software Architect",
  company: "ThoughtWorks",
  years: 11,
  location: "Northeast India",
  tagline:
    "I design and ship AI-native systems — from governance engines to voice cloning — and lead the teams that build them.",
  about: [
    "Engineering leader with 11 years of experience in software architecture and team leadership. I've built large-scale AI-powered applications end to end, and I care as much about how a system is operated as how it is designed.",
    "An avid believer in open source with a keen interest in the evolving startup scene. Hailing from the north-eastern part of India, I'm a technology enthusiast learning something new every day.",
  ],
  avatar: "/img/dp.jpg",
};

export const socials = [
  { label: "GitHub", href: "https://github.com/iamkallolpratim", handle: "@iamkallolpratim" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/kallolpratim", handle: "in/kallolpratim" },
  { label: "X / Twitter", href: "https://twitter.com/KallolPratim", handle: "@KallolPratim" },
  { label: "Instagram", href: "https://instagram.com/therebelmonk", handle: "@therebelmonk" },
];

export type Experience = {
  period: string;
  company: string;
  role: string;
  current?: boolean;
  summary: string;
  tags: string[];
};

export const experience: Experience[] = [
  {
    period: "Present",
    company: "ThoughtWorks",
    role: "Engineering Leader",
    current: true,
    summary:
      "Leading engineering teams to design and deliver scalable, AI-powered software for global clients — bringing Generative AI into production systems with strong engineering practice behind it.",
    tags: ["Architecture", "GenAI", "Team Leadership", "Consulting"],
  },
  {
    period: "2015 — Before ThoughtWorks",
    company: "Product companies & startups",
    role: "Full-Stack Engineer → Engineering Lead",
    summary:
      "A decade of building products end to end: large-scale AI-powered applications, real-time platforms and mobile apps, growing from hands-on full-stack development to architecting systems and managing cross-functional teams.",
    tags: ["Full-Stack", "React / Next.js", "Python", "Node.js", "Cloud"],
  },
];

export type Project = {
  name: string;
  repo: string;
  headline: string;
  description: string;
  stack: string[];
  accent: string;
};

const gh = (repo: string) => `https://github.com/iamkallolpratim/${repo}`;

export const projects: Project[] = [
  {
    name: "ai-gov",
    repo: gh("ai-gov"),
    headline: "AI Governance Console",
    description:
      "Treats AI compliance as software. Inventories your AI systems, detects which regimes apply — EU AI Act, California ADMT, China GenAI, India DPDP — classifies risk, evaluates policies with OPA and generates audit-ready evidence packages behind an immutable trail.",
    stack: ["Python", "FastAPI", "OPA", "SQLAlchemy", "Next.js"],
    accent: "#7c5cff",
  },
  {
    name: "leak",
    repo: gh("leak"),
    headline: "Find the money leaking out",
    description:
      "A local-first AI agent that reads your email, bank statements and SMS alerts to surface forgotten subscriptions, price hikes, duplicates and forex fees — then drafts cancellation emails for you to approve. PII is redacted before any LLM sees it. Hand-built agent harness, no frameworks.",
    stack: ["Python", "Agents", "SQLite", "FastAPI", "Privacy-first"],
    accent: "#22d3ee",
  },
  {
    name: "video-rag",
    repo: gh("video-rag"),
    headline: "Chat with any video",
    description:
      "Paste a YouTube URL and get a summary, key takeaways, chapters and a timestamp-grounded chat. Audio is transcribed with Gemini, chunked with timestamps and indexed in ChromaDB, so every answer stays scoped to that one video.",
    stack: ["Python", "Gemini", "ChromaDB", "RAG", "Streamlit"],
    accent: "#f472b6",
  },
  {
    name: "fli-watchlist",
    repo: gh("fli-watchlist"),
    headline: "Flight price watchlist",
    description:
      "A FastAPI service wrapping the fli library to monitor flight routes, sweep dates, store price history and send email alerts when fares drop below your threshold — with a scheduler doing the watching for you.",
    stack: ["Python", "FastAPI", "APScheduler", "SQLAlchemy", "Resend"],
    accent: "#a3e635",
  },
  {
    name: "rtcc-openvoice",
    repo: gh("rtcc-openvoice"),
    headline: "Real-time voice cloner",
    description:
      "A fully local CLI for zero-shot voice cloning built on OpenVoice V2. Give it a 3–10 second reference clip to synthesise speech from text or convert any recording into the cloned voice, with streaming playback.",
    stack: ["Python", "OpenVoice", "PyTorch", "Audio", "Gradio"],
    accent: "#fb923c",
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Languages & Frameworks",
    items: ["TypeScript", "JavaScript", "Python", "Node.js", "React / React Native", "Next.js", "FastAPI", "Django", "Laravel", "PHP", "TailwindCSS"],
  },
  {
    group: "AI & ML",
    items: ["OpenAI", "Google Gemini", "RAG", "Agents", "ChromaDB", "Eleven Labs", "Voice AI"],
  },
  {
    group: "Data & Cloud",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Firebase", "Supabase", "AWS", "Google Cloud"],
  },
  {
    group: "Platform & Ops",
    items: ["Docker", "RabbitMQ", "Jenkins", "Git", "Sentry", "New Relic"],
  },
];
