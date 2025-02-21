import { motion } from "framer-motion";

const Footer = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.03,
            },
        },
    };

    const letter = {
        hidden: { opacity: 0, x: -100 },
        show: { opacity: 1, x: 0 },
    };

    const scrollToTop = () => {
        const top = document.getElementById("top");
        top?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
        window.history.pushState(null, "", "/"); // Update the URL
    };

    return (
        <motion.footer
            className="text-center py-4 overflow-x-hidden"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
        >
            {/* Back to top */}
            <motion.button
                variants={container}
                initial="hidden"
                whileInView="show"
                whileHover={{ scale: 1.1 }}
                onClick={() => scrollToTop()}
                className="text-red-500"
            >
                {"Back to Top".split("").map((char, index) => (
                    <motion.span key={index} variants={letter}>
                        {char}
                    </motion.span>
                ))}
            </motion.button>

            {/* Last line */}
            <motion.p
                variants={container}
                initial="hidden"
                whileInView="show"
                whileHover={{ scale: 1.05, color: "#aaa" }}
                className="text-[#666]"
            >
                {"Made with ❤️ by Zayd Syed".split("").map((char, index) => (
                    <motion.span key={index} variants={letter}>
                        {char}
                    </motion.span>
                ))}

            </motion.p>
        </motion.footer>
    );
};

export default Footer;