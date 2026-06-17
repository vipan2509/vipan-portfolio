// Define types for your data structures to catch errors early in your components
export type NavItem = "about" | "experience" | "work" | "projects" | "contact";

export interface Profile {
  name: string;
  title: string;
  intro: string;
  eyebrow: string;
}

export interface WorkExperience {
  period: string;
  role: string;
  company: string;
  desc: string;
}

export interface FeaturedProject {
  title: string;
  type: string;
  image: string;
  desc: string;
  tech: string[];
}

export interface OtherProject {
  title: string;
  desc: string;
  tech: string[];
  link: string;
}

// --- Data Exports ---

export const nav: NavItem[] = ["about", "experience", "work", "projects", "contact"];

export const profile: Profile = {
  eyebrow: "eyebrow",
  name: "Lorem Ipsum.",
  title: "Dummy text of the printing",
  intro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966",
};

export const aboutData = {
  paragraphs: [
    "Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!",
    "Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.",
    "I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.",
    "Here are a few technologies I’ve been working with recently:"
  ],

  skills: [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Eleventy",
    "Node.js",
    "WordPress"
  ]
};

export const experience: WorkExperience[] = [
  {
    period: "2024 — Present",
    role: "Senior Frontend Engineer",
    company: "Acme Labs",
    desc: "Leading frontend systems.",
  },
  {
    period: "2022 — 2024",
    role: "UI Engineer",
    company: "Pixel Studio",
    desc: "Designed scalable interfaces.",
  },
];

export const companies: WorkExperience[] = [
  {
    company: "Company 1",
    role: "Frontend Developer",
    period: "2024 — Present",
    desc: "Building modern UI and improving performance.",
  },
  {
    company: "Company 2",
    role: "UI Developer",
    period: "2022 — 2024",
    desc: "Worked on reusable components and accessibility.",
  },
  {
    company: "Company 3",
    role: "Web Developer",
    period: "2020 — 2022",
    desc: "Created responsive websites and landing pages.",
  },
];

export const projects: FeaturedProject[] = [
  {
    title: "Halcyon Theme",
    type: "Featured Project",
    image: "/projects/project-1.jpg",
    desc: "A minimal dark blue theme for VS Code, Sublime Text and more.",
    tech: ["React", "Next.js", "SCSS"],
  },
  {
    title: "Spotify Profile",
    type: "Featured Project",
    image: "/projects/project-2.jpg",
    desc: "Visualize personalized Spotify data and playlists.",
    tech: ["React", "Spotify API", "Express"],
  },
];

export const otherProjects: OtherProject[] = [
  {
    title: "Project One",
    desc: "Short description about project.",
    tech: ["React", "SCSS"],
    link: "https://github.com",
  },
  {
    title: "Project Two",
    desc: "Built with Next.js.",
    tech: ["Next.js", "TypeScript"],
    link: "https://vercel.com",
  },
  {
    title: "Project Three",
    desc: "Node API project.",
    tech: ["Node", "Express"],
    link: "https://nodejs.org",
  },
  {
    title: "Project Four",
    desc: "Firebase integration.",
    tech: ["Vue", "Firebase"],
    link: "https://firebase.google.com",
  },
  {
    title: "Project Five",
    desc: "Portfolio project.",
    tech: ["React", "API"],
    link: "https://github.com",
  },
  {
    title: "Project Six",
    desc: "Responsive website.",
    tech: ["JS", "SCSS"],
    link: "https://example.com",
  },
  {
    title: "Project Seven",
    desc: "Additional project.",
    tech: ["React"],
    link: "https://example.com",
  },
  {
    title: "Project Eight",
    desc: "Additional project.",
    tech: ["Next.js"],
    link: "https://example.com",
  },
  {
    title: "Project Nine",
    desc: "Additional project.",
    tech: ["MongoDB"],
    link: "https://example.com",
  },
];