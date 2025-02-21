import React, { useState, ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FormData {
    name: string;
    email: string;
    message: string;
}

const ContactForm = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [status, setStatus] = useState<string | null>(null);
    const [statusType, setStatusType] = useState<'good' | 'bad' | null>(null);

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, scale: 0 },
        show: {
            opacity: 1,
            scale: 1,
            transition: {
                scale: {
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                },
            },
        },
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus(null);
        setStatusType(null);

        setIsSubmitting(true);
        const data = new FormData();
        data.append("access_key", "c71d0e08-5cfa-4c68-b8e7-4ab8affe069e");
        data.append("name", formData.name);
        data.append("email", formData.email);
        data.append("message", formData.message);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: data,
            });
            const result = await response.json();

            if (result.success) {
                setStatus("Thank you for your message!");
                setStatusType("good");
            } else {
                setStatus("Something went wrong. Please try again.");
                setStatusType("bad");
            }
        } catch {
            setStatus("Error occurred. Please try again.");
            setStatusType("bad");
        } finally {
            setIsSubmitting(false);
            setFormData({ name: "", email: "", message: "" });
            setTimeout(() => {
                setStatus(null);
                setStatusType(null);
            }, 5000);
        }
    };

    return (
        <div className="my-6 flex w-full items-center justify-center">
            <motion.form
                initial="hidden"
                whileInView="show"
                onSubmit={handleSubmit}
                variants={container}
                viewport={{ once: false }}
                className="space-y-4 w-full max-w-lg p-6 rounded-lg"
            >
                {/* Name */}
                <motion.input
                    whileHover={{ scale: 1.05, borderColor: "#ef4444" }}
                    whileFocus={{ scale: 1.05, borderColor: "#ef4444" }}
                    variants={item}
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-black border-2 border-gray-900 rounded-lg p-3 focus:outline-none"
                    required
                />

                {/* Email */}
                <motion.input
                    whileHover={{ scale: 1.05, borderColor: "#ef4444" }}
                    whileFocus={{ scale: 1.05, borderColor: "#ef4444" }}
                    variants={item}
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-black border-2 border-gray-900 rounded-lg p-3 focus:outline-none"
                    required
                />

                {/* Message */}
                <motion.textarea
                    whileHover={{ scale: 1.05, borderColor: "#ef4444" }}
                    whileFocus={{ scale: 1.05, borderColor: "#ef4444" }}
                    variants={item}
                    name="message"
                    placeholder="Your Message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-black border-2 border-gray-900 rounded-lg p-3 focus:outline-none"
                    required
                />

                {/* Submit Button */}
                <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: "#ef4444" }}
                    variants={item}
                    type="submit"
                    className="w-full border-2 border-gray-900 bg-black rounded-lg p-3"
                >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                </motion.button>

                {/* Status Message (Success/Error) */}
                <div className="mt-4 h-8">
                    <AnimatePresence>
                        {status && (
                            <motion.div
                                className={`text-center ${statusType === 'good' ? 'text-green-500' : 'text-red-500'}`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                {status}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.form>
        </div>
    );
};

export default ContactForm;
