import { FC } from "react";
import { Experience } from "@/types";
import { motion } from "framer-motion";

interface ExperienceCardProps {
    experience: Experience;
    align: "left" | "right";
}

const ExperienceCard: FC<ExperienceCardProps> = ({ experience, align }) => {
    return (
        <div className={`relative flex w-full ${align === "left" ? "justify-start" : "justify-end"}`}>
            {/* Experience Content */}
            <motion.div
                initial={{ scale: 0, opacity: 0, x: align === "left" ? 200 : -200 }}
                whileInView={{ scale: 1, opacity: 1, x: 0 }}
                transition={{ ease: "easeIn", duration: 0.5 }}
                className="w-5/12 border border-red-900 bg-black rounded-2xl p-6"
            >
                <h3 className="text-lg font-semibold text-white">{experience.position}</h3>
                <p className="text-gray-400">{experience.company}</p>
                <p className="text-gray-500 text-sm">{experience.date}</p>
                <p className="text-gray-300 text-sm mt-2">{experience.description}</p>
            </motion.div>

            {/* Timeline Dot */}
            <div
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-red-900 rounded-full"
            />


        </div>
    );
};

export default ExperienceCard;