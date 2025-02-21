import ExperienceCard from "@/components/ui/ExperienceCard";
import { experienceData } from "@/data/data";
import { motion } from "framer-motion";

const Experience = () => {
    return (
        <section
            id="experience"
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
                    Experience
                </motion.h2>

                {/* Timeline Container */}
                <div className="relative flex flex-col items-center max-w-4xl">
                    {/* Vertical Line */}
                    <div className="absolute top-0 bottom-0 w-1 bg-red-900"></div>

                    {/* Experience Cards (Reversed Order) */}
                    {experienceData
                        .slice()
                        .reverse()
                        .map((experience, index) => (
                            <ExperienceCard
                                key={index}
                                experience={experience}
                                align={index % 2 === 0 ? "left" : "right"}
                            />
                        ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;