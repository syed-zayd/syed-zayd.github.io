import { About, Project, Experience, SkillCategory, ContactLink } from "@/types";
import { BiLogoPostgresql, BiLogoSpringBoot } from "react-icons/bi";
import { FaAws, FaBitbucket, FaCss3, FaFigma, FaGit, FaGithub, FaGitlab, FaGlobe, FaHtml5, FaJava, FaJira, FaJs, FaLink, FaLinkedin, FaLinux, FaNode, FaPython, FaReact } from "react-icons/fa";
import { FiTerminal } from "react-icons/fi";
import { SiC, SiCplusplus, SiExpress, SiFastapi, SiFlask, SiGmail, SiMongodb, SiNextdotjs, SiNumpy, SiPandas, SiPycharm, SiPytorch, SiScikitlearn, SiTensorflow, SiTypescript, SiVercel, SiVite } from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";

export const aboutData: About = {
    description: "Hi, I'm Zayd, a first-year Software Engineering student at the University of Waterloo. I've always been interested and passionate about computers and technology, and programming has opened up a world of opportunities for me. I'm currently working on full-stack projects and expanding my knowledge in machine learning.",
    image: "profile.jpg",
};

export const projectsData: Project[] = [
    {
        title: "SignSense",
        description: "Built a real-time sign language recognition system using Raspberry Pi to predict ASL letters.",
        image: "signsense.png",
        skills: ["Python", "TensorFlow", "Flask", "NumPy", "OpenCV", "Raspberry Pi", "Mediapipe"],
        links: [
            { icon: FaGithub, url: "https://github.com/syed-zayd/SignSense/" },
        ],
    },
    {
        title: "Matchify",
        description: "Built a scalable full-stack platform for sports clubs to manage users, tournaments, and matchmaking.",
        image: "matchify.jpeg",
        skills: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Redis", "Vercel", "Vite", "Figma"],
        links: [
            { icon: FaLink, url: "https://matchify-ruby.vercel.app/" },
        ],
    },
    {
        title: "Road Eye",
        description: "Won 1st place at STEM Hacks 2023 by building a traffic sign detection system with a decision tree model in scikit-learn.",
        image: "roadeye.png",
        skills: ["Python", "scikit-learn"],
        links: [
            { icon: FaGithub, url: "https://github.com/syed-zayd/road-eye/" },
        ],
    },
    {
        title: "Shalderok",
        description: "Developed a procedurally generated dungeon crawler in Java Swing with A* pathfinding, custom physics, and a custom level editor.",
        image: "shalderok.jpg",
        skills: ["Java", "Swing", "HTML", "CSS", "JavaScript"],
        links: [
            { icon: FaLink, url: "https://github.com/syed-zayd/shalderok" },
        ],
    },
    {
        title: "Personal Portfolio",
        description: "The site you're currently on. Built with Next.js, TypeScript, and Tailwind CSS. Made animations using the framer-motion React library",
        image: "portfolio.jpeg",
        skills: ["Next.js", "React", "TypeScript", "HTML", "CSS", "Tailwind CSS"],
        links: [
            { icon: FaLink, url: "https://syed-zayd.github.io/" },
            { icon: FaGithub, url: "https://github.com/syed-zayd/syed-zayd.github.io" },
        ],
    },
    {
        title: "QuillAI",
        description: "[In Progress] Developing a full-stack note-taking app with an AI chatbot to answer questions based on notes.",
        image: "quillai.jpeg",
        skills: ["React", "TypeScript", "FastAPI", "OpenAI", "Gemini", "Pinecone", "MongoDB", "Firebase", "TailwindCSS"],
        links: [
        ],
    },
];

export const experienceData: Experience[] = [
    {
        position: "Software Development Intern",
        company: "Automation HQ",
        date: "June 2023 - August 2023",
        description: "Worked on backend features using Java Spring Boot, assisting in the implementation of RESTful APIs and automating regression test cases. Collaborated with the team using Jira and Bitbucket under Agile practices.",
    },
];

export const skillsData: SkillCategory[] = [
    {
        name: "Languages",
        skills: [
            { name: "Python", icon: FaPython },
            { name: "C", icon: SiC },
            { name: "C++", icon: SiCplusplus },
            { name: "Java", icon: FaJava },
            { name: "JavaScript", icon: FaJs },
            { name: "TypeScript", icon: SiTypescript },
            { name: "HTML", icon: FaHtml5 },
            { name: "CSS", icon: FaCss3 },
            { name: "SQL", icon: TbSql },
        ],
    },
    {
        name: "Libraries & Frameworks",
        skills: [
            { name: "React", icon: FaReact },
            { name: "Next.js", icon: SiNextdotjs },
            { name: "Vite", icon: SiVite },
            { name: "Express", icon: SiExpress },
            { name: "Spring Boot", icon: BiLogoSpringBoot },
            { name: "FastAPI", icon: SiFastapi },
            { name: "Flask", icon: SiFlask },
            { name: "TensorFlow", icon: SiTensorflow },
            { name: "PyTorch", icon: SiPytorch },
            { name: "scikit-learn", icon: SiScikitlearn },
            { name: "pandas", icon: SiPandas },
            { name: "numpy", icon: SiNumpy },
        ],
    },
    {
        name: "Technologies",
        skills: [
            { name: "MongoDB", icon: SiMongodb },
            { name: "PostgreSQL", icon: BiLogoPostgresql },
            { name: "Node.js", icon: FaNode },
            { name: "AWS", icon: FaAws },
            { name: "Vercel", icon: SiVercel },
        ],
    },
    {
        name: "Tools",
        skills: [
            { name: "Git", icon: FaGit },
            { name: "GitHub", icon: FaGithub },
            { name: "GitLab", icon: FaGitlab },
            { name: "BitBucket", icon: FaBitbucket },
            { name: "Jira", icon: FaJira },
            { name: "VS Code", icon: VscVscode },
            { name: "PyCharm", icon: SiPycharm },
            { name: "Figma", icon: FaFigma },
            { name: "Linux", icon: FaLinux },
            { name: "Unix", icon: FiTerminal },
        ],
    },
];

export const contactData: ContactLink[] = [
    {
        name: "Github",
        icon: FaGithub,
        url: "https://github.com/syed-zayd/",
    },
    {
        name: "LinkedIn",
        icon: FaLinkedin,
        url: "https://linkedin.com/in/zaydsyed/",
    },
    {
        name: "Email",
        icon: SiGmail,
        url: "mailto:z3syed@uwaterloo.ca",
    },
    {
        name: "Personal Site",
        icon: FaGlobe,
        url: "https://syed-zayd.github.io/",
    },
];