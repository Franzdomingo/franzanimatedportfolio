import {
    SiCplusplus,
    SiFramer,
    SiGithub, SiNeovim,
    SiNextdotjs,
    SiReact,
    SiRust,
    SiTailwindcss,
    SiTypescript,
    SiWebgl,
    SiZig
} from "react-icons/si";
import {IconType} from "react-icons";

export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: IconType[];
  techNames: string[];
  techLinks: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const projects = [
    {
        id: 0,
        name: "Sample Project One",
        description: "A sample project for demonstration purposes. Built with React and TypeScript.",
        technologies: [SiReact, SiTypescript],
        techNames: ["React", "TypeScript"],
        techLinks: ["https://reactjs.org/", "https://www.typescriptlang.org/"],
        github: "https://github.com/sample/sample-project-one",
        demo: "https://sampleprojectone.demo/",
        image: "/projects/eldoraui.png",
        available: true,
    },
    {
        id: 1,
        name: "Sample Project Two",
        description: "Another sample project. Features Next.js and Tailwind CSS.",
        technologies: [SiNextdotjs, SiTailwindcss],
        techNames: ["Next.js", "Tailwind CSS"],
        techLinks: ["https://nextjs.org/", "https://tailwindcss.com/"],
        github: "https://github.com/sample/sample-project-two",
        demo: "https://sampleprojecttwo.demo/",
        image: "/projects/vrmall.png",
        available: false,
    },
];
