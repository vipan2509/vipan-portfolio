import { StaticImageData } from "next/image";

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
  desc: string[];
  listing: string[];
  companyUrl?: string;
}

export interface FeaturedProject {
  title: string;
  type: string;
  image: StaticImageData;
  desc: string;
  tech: string[];
}

export interface OtherProject {
  title: string;
  desc: string;
  tech: string[];
  link: string;
  github: string;
}

// --- Data Exports ---

export const nav: NavItem[] = ["about", "experience", "work", "projects", "contact"];

export const profile: Profile = {
  eyebrow: "Hi, my name is",
  name: "Vipan K.",
  title: "I build things for the web.",
  intro: "Senior Frontend Developer | React.js | Next.js | Vue.js | JavaScript",
};

export const aboutData = {
  paragraphs: [
    "Senior Frontend Developer with 10+ years of experience designing and delivering scalable, high-performance web applications and responsive HTML email solutions. Experienced in developing modern frontend applications using React.js, Next.js, Vue.js, JavaScript (ES6+), TypeScript, HTML5, CSS3, SCSS, Tailwind CSS, and Redux Toolkit.",
    "Strong expertise in translating Figma designs into pixel-perfect, responsive, and accessible user interfaces while ensuring cross-browser compatibility, SEO optimization, and exceptional performance. Experienced working in Agile environments, integrating REST APIs, developing reusable UI components, and collaborating with cross-functional teams to deliver enterprise-grade digital solutions.",
    "Passionate about writing clean, maintainable code and creating intuitive user experiences that balance performance, accessibility, and visual excellence.",
  ],

  skills: [
    "JavaScript (ES6+)",
    "Vue.js",
    "React",
    "GSAP",
    "HTML / LESS / SCSS",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Redux Toolkit",
    "REST APIs",
    "Responsive Design",
    "SEO Optimization",
    "Cross-Browser Compatibility",
    "Email Development (Acid / Litmus)",
    "Git",
    "GitHub",
    "Bitbucket",
    "Jira",
    "Postman"
  ]
};

export const companies: WorkExperience[] = [
  {
    company: "TMotions Global Limited",
    companyUrl: "https://www.tmotions.com/",
    role: "Senior Frontend Developer",
    period: "Jun 2019 — Present",
    desc: [
      "Develop web applications using React.js and Vue.js.",
      "Build responsive HTML email templates and test them using Litmus and Email on Acid.",
      "Create animated banners using HTML, SCSS, CSS, and JavaScript.",
      "Convert Figma designs into responsive, pixel-perfect web pages.",
      "Work closely with designers, QA, and developers to deliver high-quality projects.",
      "Fix bugs, improve website performance, and ensure cross-browser compatibility.",
      "Successfully delivered 500+ projects, including websites, landing pages, HTML emails, and digital marketing assets for healthcare and pharmaceutical clients."
    ],
    listing : ["React.js", "Vue.js", "SCSS", "JavaScript", "HTML", "CSS"],
  },
  {
    company: "Cardant Holdings Ltd.",
    companyUrl: "http://www.cardant.com/",
    role: "UI Developer | Frontend Developer",
    period: "Sep 2018 — Jun 2019",
    desc: [
      "Built responsive and user-friendly interfaces based on UI/UX designs.", 
      "Collaborated with backend developers to integrate RESTful APIs.",
      "Participated in code reviews and contributed to team knowledge sharing.",
      "Developed and maintained reusable UI components and libraries.",
      "Optimized web applications for maximum speed and scalability.",
      "Ensured cross-browser compatibility and adherence to web standards.",
      "Worked in an Agile environment, attending daily stand-ups and sprint planning meetings."
    ],
    listing : ["HTML", "CSS", "JavaScript", "Vue.js"],
  },
  {
    company: "Hash Software, Mohali",
    companyUrl: "https://www.hashsoftware.com/",
    role: "Sr. Web Developer | Designer",
    period: "Mar 2015 — Sep 2018",
    desc: [
      "Designed website mockups in Adobe Photoshop, Figma, XD based on client requirements.",
      "Presented designs to clients and made changes based on their feedback until final approval.",
      "Converted approved Photoshop designs into responsive websites using HTML, CSS, JavaScript, and jQuery.",
      "Built pixel-perfect, mobile-friendly web pages with cross-browser compatibility.",
      "Worked closely with clients and the development team to deliver projects on time.",
      "Maintained and updated existing websites based on client requirements."
    ],
    listing : ["Adobe Photoshop", "Figma", "Adobe XD", "HTML", "CSS", "JavaScript", "jQuery"],
  },
   {
    company: "cWebConsultants now webgarh",
    companyUrl: "https://webgarh.com/",
    role: "Web Developer",
    period: "2013 — 2015",
    desc: [
      "Designed website mockups in Adobe Photoshop based on client requirements.",
      "Presented designs to clients, gathered feedback, and updated designs until final approval.",
      "Converted approved Photoshop designs into responsive websites using HTML, CSS, JavaScript, and jQuery.",
      "Built pixel-perfect, mobile-friendly websites with cross-browser compatibility.",
      "Maintained and updated client websites based on business requirements.",
      "Worked closely with clients and the development team to deliver projects on time."
    ],
    listing : ["HTML", "CSS", "JavaScript"],
  },
   {
    company: "IQGQ Coachimgs",
    companyUrl: "#",
    role: "Graphic Design Intern",
    period: "2011 — 2013",
    desc: [
      "Designed banners, brochures, flyers, and promotional materials.",
      "Created print and digital advertisements using Adobe Photoshop and CorelDRAW.",
      "Assisted in designing marketing materials for online and offline campaigns.",
      "Updated designs based on feedback from the team.",
      "Learned graphic design principles and delivered creative assets within deadlines."
    ],
    listing : ["Adobe Photoshop", "Adobe Illustrator", "InDesign"],
  },
];

import oneImage from "../assets/one.jpg";
import twoImage from "../assets/two.jpg";
import threeImage from "../assets/three.jpg";

export const projects: FeaturedProject[] = [
  {
    title: "Halcyon Theme",
    type: "Featured Project",
    image: oneImage,
    desc: "A minimal dark blue theme for VS Code, Sublime Text and more.",
    tech: ["React", "Next.js", "SCSS"],
  },
  {
    title: "Spotify Profile",
    type: "Featured Project",
    image: twoImage,
    desc: "Visualize personalized Spotify data and playlists.",
    tech: ["React", "Spotify API", "Express"],
  },
];

export const otherProjects: OtherProject[] = [
  {
    title: "K9 Cover",
    desc: "Designed and developed a responsive website for a dog insurance company.",
    tech: ["Figma", "HTML", "CSS", "JavaScript"],
    link: "https://new.k9cover.com/",
    github: "https://github.com",
  },
  {
    title: "Just BE | Real Estate",
    desc: "Built with .net core responsive website for real estate company.",
    tech: ["Figma", "HTML", "CSS", "JavaScript", ".NET Core"],
    link: "https://www.justbere.com/",
    github: "https://github.com",
  },
  {
    title: "Top Dog Cover",
    desc: "Designed and developed a responsive website for a dog insurance company.",
    tech: ["Figma", "HTML", "CSS", "JavaScript"],
    link: "https://topdogcover.com/",
    github: "https://github.com", 
  },
  
];