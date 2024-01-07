import {
  AboutSectionType,
  ContactSectionType,
  ExperienceSectionType,
  FooterSectionType,
  HeroSectionType,
  NavbarSectionType,
  ProjectsSectionType,
  SkillsSectionType,
  SocialSectionType,
} from '../types/sections';
import { StringKeyValueType } from '../types';
import { resumeFileName } from './config';
import { getId } from './helper';
import { db } from '../config/firebase';
import { addDoc, collection } from 'firebase/firestore';

/*
 * =========================
 * AUTHOR INFO
 * =========================
 */

export const socialLinks: StringKeyValueType = {
  instagram: 'https://www.instagram.com/#',
  twitter: 'https://twitter.com/#',
  github: 'https://github.com/shubhamguptawb',
  linkedin: 'https://www.linkedin.com/in/shubhamguptawb/',
};

export const author = {
  name: 'Shubham Gupta',
  email: 'sgupta5411@gmail.com',
};

export const seoData = {
  title: 'Shubham Gupta | Full-Stack Developer',
  description:
    'Shubham Gupta is a full-stack developer who specializes in building (and occasionally designing) exceptional visual interfaces.',
  author: author.name,
  image:
    'https://user-images.githubusercontent.com/85820227/231264058-df236c47-a8d2-4077-9fa6-3577aa18e8ca.png',
  url: '',
  keywords: [
    'Shubham',
    'Shubham Gupta',
    '@Shubham Gupta',
    'Shubham Gupta',
    'Portfolio',
    'Shubham Portfolio ',
    'Shubham Gupta Portfolio',
  ],
};

/*
 * =========================
 * SECTIONS
 * =========================
 */

// Navbar Section

export const navbarSection: NavbarSectionType = {
  navLinks: [
    { name: 'about', url: '/#about' },
    { name: 'skills', url: '/#skills' },
    { name: 'experience', url: '/#experience' },
    { name: 'projects', url: '/#projects' },
    { name: 'contact', url: '/#contact' },
  ],
  cta: {
    title: 'resume',
    url: `/${resumeFileName}`,
  },
};

// * Hero Section

export const heroSection: HeroSectionType = {
  subtitle: "Hello friend 👋, I'm ",
  title: 'Shubham Gupta.',
  tagline: 'I create visually appealing interfaces on the web',
  description:
    "I'm a passionate Fullstack Web Developer having an experience of creating web applications using ReactJS & NextJS. ",
  specialText: 'Frontend Developer @Voyantt Consultancy- Kolkata',

  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};

// * About Section

export const aboutSection: AboutSectionType = {
  title: 'about me',
  list: {
    title: 'Here are a few technologies I’ve been working with recently:',
    items: [
      'Next JS',
      'React JS',
      'TailwindCSS',
      'JavaScript',
      'Typescript',
      'Node JS'
    ],
  },
  img: '/shubham-gupta.png',
};

// * Skills Section

export const skillsSection: SkillsSectionType = {
  title: 'what i do',
  skills: [
    {
      id: getId(),
      title: 'full stack development',
      // animation lottie file: https://lottiefiles.com/
      lottie: {
        light: '/lotties/frontend.json',
        dark: '/lotties/frontend-dark.json',
      },
      points: [
        'Building responsive static websites using Next.js',
        'Building responsive Single Page Apps in React.js',
        'Building RESTful APIs in Express',
      ],
      softwareSkills: [
        // iconify icons: https://icon-sets.iconify.design/
        { name: 'HTML5', icon: 'vscode-icons:file-type-html' },
        { name: 'CSS3', icon: 'vscode-icons:file-type-css' },
        { name: 'javaScript', icon: 'vscode-icons:file-type-js-official' },
        {
          name: 'typeScript',
          icon: 'vscode-icons:file-type-typescript-official',
        },
        { name: 'node.js', icon: 'logos:nodejs-icon' },
        { name: 'react.js', icon: 'logos:react' },
        { name: 'next.js', icon: 'logos:nextjs-icon' },
        { name: 'tailwind CSS', icon: 'logos:tailwindcss-icon' },
        { name: 'redux', icon: 'logos:redux' },
        { name: 'database', icon: 'vscode-icons:file-type-sql' },
      ],
    },
     
  ],
};

// * Experience Section

export const experienceSection: ExperienceSectionType = {
  title: 'My experience',
  experiences: [
    {
      company: 'Voyantt',
      companyUrl: 'https://voyantcs.com',
      role: 'Frontend Developer',
      started: 'Aug 2022',
      upto: 'Present',
      tasks: [
       "Design, develop and maintain complex web applications using Next JS.Integrate REST APIs with the app and manage data in using state management tools.",
        "Collaborate with cross-functional teams to ensure software quality and functionality with a clean, reusable and efficient code using custom Hooks and reusable components.",
        "Optimize applications for maximum speed and scalability.",
        "Implement responsive web design and accessibility best practices using CSS Frameworks like Tailwind CSS."
      ],
    },
    {
      company: 'Coding Ninjas',
      companyUrl: 'https://www.codingninjas.com/',
      role: 'Frontend Mentor',
      started: 'May 2022',
      upto: 'May 2023',
      tasks: [
        "Taking doubt sessions.",
        "Debugging codes.",
        "Helping students in their assignments & various projects."
        
      ],
    },
    {
      company: 'Qubit AI',
      companyUrl: '#',
      role: 'Frontend Developer',
      started: 'July 2021',
      upto: 'July 2022',
      tasks: [
        "Provide support in implementing user interfaces, adding new features, and fixing bugs.Implemented user interface designs created by UX/UI designers HTML, CSS, and JavaScript.", 
        "Ensure that the user interface is responsive, accessible, and meets the design requirements.",
        "Assist in developing new features for the application, following the specifications provided by the Project Manager. Write clean, well-organized code that adheres to best practices and is easy to understand and maintain."
      ],
    },
     
     
    // {
    //   company: '',
    //   companyUrl: '',
    //   role: '',
    //   started: '',
    //   upto: '',
    //   tasks: [

    //   ],
    // },
  ],
};



// * Contact Section

export const contactSection: ContactSectionType = {
  title: 'get in touch',
  subtitle: "what's next",
  paragraphs: [
    "I'm currently looking for a remote job or any new opportunities.",
    'Whether you have a project to discuss or just want to say hi, my inbox is open for all!',
  ],
  link: `mailto:${author.email}`,
};

// Social Links Section

export const socialSection: SocialSectionType = {
  socialLinks: [
    {
      icon: 'tabler:brand-github',
      url: socialLinks.github,
    },
    {
      icon: 'mdi:instagram',
      url: socialLinks.instagram,
    },
    {
      icon: 'lucide:twitter',
      url: socialLinks.twitter,
    },
    {
      icon: 'lucide:linkedin',
      url: socialLinks.linkedin,
    },
  ],
};

// Footer Section

export const footerSection: FooterSectionType = {
  title: '',
  link: '',
};



export const createSection = async ()=>{ 
  // for(let element of projectsSection.projects){
  //   const docRef = await addDoc(collection(db, "projects"),element);
  //   console.log("Document written with ID: ", docRef.id);
  // }
}