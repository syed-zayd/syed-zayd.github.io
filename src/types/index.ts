import { IconType } from "react-icons";

export interface About {
    description: string;
    image: string; // image name found in public folder
}

export interface ContactLink {
    name: string; // ex: Github
    icon: IconType;
    url: string;
}

export interface Experience {
    position: string;
    company: string;
    date: string;
    description: string;
}

export interface Project {
    title: string;
    description: string;
    image: string; // image name found in public folder
    skills: string[];
    links: { icon: IconType, url: string }[];
}

export interface SkillCategory {
    name: string; // ex: Languages
    skills: { name: string, icon: IconType }[]; // ex: { Typescript, SiTypescript }
}