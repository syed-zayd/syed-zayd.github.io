import { FC } from "react";
import { Project } from "@/types";
import Image from "next/image";
import { motion } from "framer-motion";

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, scale: 0 },
        show: { opacity: 1, scale: 1 },
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
            }}
            whileHover={{
                scale: 1.01,
                boxShadow: "0 0 20px 1px rgba(255, 0, 0, 0.3)",
                transition: { type: "spring", stiffness: 300, damping: 20 },
            }}
            className="w-full border border-red-900 bg-black rounded-2xl p-6 flex flex-col"
        >
            {/* Image */}
            <Image
                src={`/${project.image}`}
                alt={project.title}
                width={800}
                height={450}
                className="h-64 rounded-xl object-cover overflow-hidden"
            />

            {/* Title */}
            <h3 className="text-xl font-semibold text-white mt-4">{project.title}</h3>

            {/* Description */}
            <p className="text-gray-300 text-sm my-2">{project.description}</p>

            {/* Skills */}
            <motion.div
                initial="hidden"
                whileInView="show"
                variants={container}
                viewport={{ once: false }}
                className="flex flex-wrap my-4 gap-2 text-xs text-gray-400"
            >
                {project.skills.map((skill, index) => (
                    <motion.span
                        key={index}
                        variants={item}
                        transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 20,
                        }}
                        className="border border-red-900 font-semibold px-2 py-1 rounded-full"
                    >
                        {skill}
                    </motion.span>
                ))}
            </motion.div>

            {/* Spacer for growing content, ensures links are at bottom */}
            <div className="flex-grow" />

            {/* Links */}
            <motion.div
                initial="hidden"
                whileInView="show"
                variants={container}
                viewport={{ once: false }}
                className="flex gap-4 mt-auto"
            >
                {project.links.map((link, index) => (
                    <motion.a
                        key={index}
                        variants={item}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-red-500"
                    >
                        <link.icon size={24} />
                    </motion.a>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default ProjectCard;
