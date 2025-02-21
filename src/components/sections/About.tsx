import { motion } from "framer-motion";
import Image from "next/image";
import { aboutData } from "@/data/data";

const About = () => {
    return (
        <section
            id="about"
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
                    About Me
                </motion.h2>

                <div className="grid md:grid-cols-2">
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -100, scale: 0 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 20,
                        }}
                        className="flex justify-center"
                    >
                        <Image
                            src={`/${aboutData.image}`}
                            alt="Profile picture"
                            className="object-cover w-64 h-64 rounded-full overflow-hidden border-4 border-red-600"
                            width={256}
                            height={256}
                        />
                    </motion.div>

                    {/* Text */}
                    <motion.div
                        initial={{ opacity: 0, x: 100, scale: 0 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{
                            duration: 0.6,
                            type: "spring",
                            stiffness: 200,
                            damping: 25,
                        }}
                        className="text-lg text-gray-300 flex flex-col justify-center"
                    >
                        {aboutData.description}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;