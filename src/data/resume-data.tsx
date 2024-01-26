import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Andreas Alkemade",
  initials: "AA",
  location: "Copenhagen, Denmark",
  locationLink: "https://www.google.com/maps/place/Copenhagen",
  about:
    "Social Data Scientist with a background in Political Science and a passion for data.",
  summary:
    "I like to do research; collecting and analyzing data, and communicating the results. Mostly in Pyhton. And mostly about politics, economics, and finance. I am currently working with reasearch at Newsec Advisory.",
  avatarUrl: "https://avatars.githubusercontent.com/u/1017620?v=4",
  personalWebsiteUrl: "https://alkemade.xyz",
  contact: {
    email: "andreas@alkemade.dk",
    tel: "+27582766",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/AndreasAlkemade",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/andreas-alkemade-1231b74b/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/AndreasAlkemade",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "University of Copenhagen",
      degree: "Master's Degree in Social Data Science", 
      start: "2023",
      end: "Present",
    },
    {
      school: "University of Copenhagen",
      degree: "Bachelor's Degree in Political Science", 
      start: "2020",
      end: "2023",
    },
    {
      school: "University of Aarhus & Luiss Guido Carli",
      degree: "Courses in Mathematics, Statistics, and Economics", 
      start: "2018",
      end: "2022",
    },
  ],
  work: [
    {
      company: "Newsec Advisory",
      link: "https://www.newsec.com",
      badges: ["Copenhagen"],
      title: "Student Analyst",
      logo: ParabolLogo,
      start: "2023",
      end: "Present",
      description:
        "Working with research and analysis of the Danish real estate market. Responsible for building and maintaining a large databases of real estate transactions, rates data, rental yields, and many other data series. Also helped model and forecast the Danish real estate market. Primarily using Python, but also SQL and a bit of R.",
    },
    {
      company: "Nic Group, Orkla",
      link: "https://www.orkla.com",
      badges: ["Vallensbæk"],
      title: "Trainee",
      logo: ClevertechLogo,
      start: "2020",
      end: "2022",
      description:
        "Worked as a project manager on a number of projects implementing new IT systems and processes across the group. Learned to execute on projects in a large organization, and to work with stakeholders across the organization.",
    },
  ],
  skills: [
    "Python",
    "Academic Writing",
    "Data Analysis",
    "Natural Language Processing",
  ],
  projects: [
    {
      title: "Consultly",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Monito",
      techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
      description:
        "Browser extension that records everything happening in a web application",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Jarocki.me",
      techStack: ["Side Project", "Next.js", "MDX"],
      description:
        "My personal website and blog. Built with Next.js and Notion API",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
  ],
} as const;
