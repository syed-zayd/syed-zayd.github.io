import ProjectCard from "@/components/ui/ProjectCard";
import { projectsData } from "@/data/data";
import { motion } from "framer-motion";

const Projects = () => {
    return (
        <section
            id="projects"
            className={`min-h-screen my-12 pt-16 flex items-center justify-center`}
        >
            <div className="max-w-full">
                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 50, scale: 0 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 20,
                    }}
                    className="text-center text-4xl font-bold text-white my-12"
                >
                    Projects
                </motion.h2>

                {/* Projects */}
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>

        </section>
    );
};

export default Projects;
