import { motion } from "framer-motion";

const Hero = () => {
    const text = "Software Engineering @ University of Waterloo";

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.02,
                delayChildren: 1,
            },
        },
    };

    const letter = {
        hidden: { opacity: 0, x: -100 },
        show: { opacity: 1, x: 0 },
    };

    const nameVariants = {
        hidden: { opacity: 0, y: -100 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                type: "tween",
                duration: 1,
            },
        },
    };

    return (
        <section
            id="top"
            className="h-screen flex flex-col items-center justify-center relative"
        >
            {/* Name */}
            <motion.div className="text-center px-6">
                <motion.h1
                    variants={nameVariants}
                    initial="hidden"
                    animate="show"
                    className="text-5xl font-bold mb-4 leading-normal"
                >
                    Hi, I&apos;m <span className="bg-gradient-to-r from-[#e63946] to-[#d00000] bg-clip-text text-transparent">Zayd</span>
                </motion.h1>
            </motion.div>

            {/* Tag line */}
            <motion.div className="text-center">
                <motion.p
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="text-2xl text-gray-300 mb-6 leading-normal"
                >
                    {text.split("").map((char, index) => (
                        <motion.span key={index} variants={letter}>
                            {char}
                        </motion.span>
                    ))}
                </motion.p>
            </motion.div>
        </section>
    );
};

export default Hero;