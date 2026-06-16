// Define types for your data structures to catch errors early in your components
export type NavItem = "about" | "experience" | "projects" | "otherProjects" | "contact";

export interface Profile {
  name: string;
  title: string;
  intro: string;
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

export const nav: NavItem[] = ["about", "experience", "projects", "otherProjects", "contact"];

export const profile: Profile = {
  name: "John Doe",
  title: "FE",
  intro: "Building elegant digital experiences.",
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