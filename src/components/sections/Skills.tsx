import { FC } from "react";
import { skillsData } from "@/data/data";
import { motion } from "framer-motion";

const Skills: FC = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, scale: 0 },
        show: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.2,
                type: "tween",
                ease: "easeIn",
            },
        },
    };

    const hoverText = {
        rest: {
            opacity: 0,
            scale: 0,
        },
        active: {
            opacity: 1,
            scale: 1,
        },
    };

    const icon = {
        rest: {
            scale: 1,
            color: "#666",
        },
        active: {
            scale: 1.2,
            rotate: 360,
            color: "#ef4444", // red-500
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 30,
            },
        },
    }

    const getClasses = () => {
        return `min-h-screen my-12 pt-16 flex items-center justify-center`;
    }

    return (
        <section
            id="skills"
            className={getClasses()}
        >
            <div className="min-w-full">
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
                    Skills
                </motion.h2>

                {/* Categories */}
                {skillsData.map((category, index) => (
                    <div key={index} className="my-12">
                        {/* Category Title */}
                        <motion.h3
                            initial={{ opacity: 0, x: -100, scale: 0 }}
                            whileInView={{ opacity: 1, x: 0, scale: 1 }}
                            transition={{
                                type: "spring",
                                stiffness: 200,
                                damping: 20,
                            }}
                            className="text-2xl font-semibold my-4"
                        >
                            {category.name}
                        </motion.h3>

                        {/* Skills List */}
                        <motion.div
                            initial="hidden"
                            whileInView="show"
                            variants={container}
                            viewport={{ once: false }}
                            className="flex flex-wrap my-4 gap-6 text-xs"
                        >
                            {category.skills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    variants={item}
                                    className="relative flex flex-col items-center justify-center group text-lg"
                                >
                                    {/* Skill */}
                                    <motion.div
                                        initial="rest"
                                        whileHover="active"
                                        whileTap="active"
                                        className="flex items-center justify-center"
                                    >
                                        {/* Icon */}
                                        <motion.span
                                            variants={icon}
                                        >
                                            <skill.icon className="w-16 h-16 rounded-xl" />
                                        </motion.span>

                                        {/* Hover Text */}
                                        <motion.span
                                            variants={hoverText}
                                            className="min-w-max absolute bottom-[-2rem]">
                                            {skill.name}
                                        </motion.span>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
