import { useEffect, useState } from "react";
import { contactData } from "@/data/data";
import { motion } from "framer-motion";

const sections = ["about", "projects", "skills", "contact"];

const Navbar = () => {
    const [activeSection, setActiveSection] = useState<string | null>(null);

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
        show: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                type: "tween",
                ease: "easeIn",
            },
        }
    };

    // Set active section based on scroll
    useEffect(() => {
        const handleScroll = () => {
            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i]);
                const top = section?.getBoundingClientRect().top;
                if (top !== undefined && top < 200) {
                    setActiveSection(sections[i]);
                    return;
                }
            }
            setActiveSection(null);
        };
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Handle scrolling to the section
    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
            window.history.pushState(null, "", `#${sectionId}`); // Update the URL
        }
    };

    return (
        <nav
            id="navbar"
            className="fixed top-0 left-0 w-full bg-opacity-50 backdrop-blur-sm px-8 py-4 flex justify-between items-center z-50"
        >
            {/* Logo / Name */}
            <motion.button
                initial={{ opacity: 0, y: -200 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.2, color: "#ef4444" }}
                type="button"
                onClick={() => scrollToSection("top")}
                className="text-2xl font-bold"
            >
                Zayd Syed
            </motion.button>

            {/* Navigation Links */}
            <motion.ul
                initial="hidden"
                animate="show"
                variants={container}
                className="flex gap-6"
            >
                {sections.map((section) => (
                    <motion.li
                        key={section}
                        variants={item}
                    >
                        <motion.button
                            whileHover={{ scale: 1.2 }}
                            type="button"
                            onClick={() => scrollToSection(section)}
                            className={`transition-colors ${activeSection === section
                                ? "text-red-500"
                                : "hover:text-red-500"
                                }`}
                        >
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                        </motion.button>
                    </motion.li>
                ))}
            </motion.ul>

            {/* Contact Links */}
            <motion.div
                initial="hidden"
                animate="show"
                variants={container}
                className="flex gap-4"
            >
                {contactData.map((contact, index) => (
                    <motion.button
                        variants={item}
                        key={index}
                        onClick={() => window.open(contact.url, '_blank')}
                        rel="noopener noreferrer"
                    >
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.2 }}
                        >
                            <contact.icon size={24} className="hover:text-red-500" />
                        </motion.div>
                    </motion.button>
                ))}
            </motion.div>
        </nav>
    );
};

export default Navbar;