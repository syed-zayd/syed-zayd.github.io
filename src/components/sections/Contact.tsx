import { contactData } from "@/data/data";
import { motion } from "framer-motion";
import ContactForm from "../ui/ContactForm";

const Contact = () => {
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
        hidden: {
            opacity: 0,
            scale: 0,
        },
        show: {
            opacity: 1,
            scale: 1,
            transition: {
                scale: {
                    type: "spring",
                    stiffness: 500,
                    damping: 10,
                }
            }
        },
    };

    return (
        <section
            id="contact"
            className={`min-h-screen my-12 pt-16 flex items-center justify-center`}
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
                    Get in Touch
                </motion.h2>

                {/* Contact Links */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    variants={container}
                    viewport={{ once: false }}
                    className="flex justify-center gap-8"
                >
                    {contactData.map((contact, index) => (
                        <motion.a
                            key={index}
                            variants={item}
                            whileHover={{
                                color: "#ef4444",
                                scale: 1.5,
                                transition: {
                                    scale: {
                                        type: "spring",
                                        stiffness: 500,
                                        damping: 10,
                                    },
                                },

                            }}
                            href={contact.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <motion.div>
                                <contact.icon size={54} />
                            </motion.div>
                        </motion.a>
                    ))}
                </motion.div>

                {/* Contact Form */}
                <ContactForm />
            </div>
        </section>
    );
};

export default Contact;
