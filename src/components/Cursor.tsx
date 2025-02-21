import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    // Track the mouse position
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setCursorPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 w-full h-full pointer-events-none"
            style={{
                width: '100%',
                height: '100%',
                zIndex: -1,
            }}
        >
            {/* Cursor glow */}
            <motion.div
                className="absolute bg-gradient-to-r from-red-500 to-red-700 rounded-full"
                style={{
                    width: '500px',
                    height: '500px',
                    opacity: 0.2,
                    filter: 'blur(100px)',
                }}
                animate={{
                    x: cursorPosition.x - 250,
                    y: cursorPosition.y - 250,
                }}
                transition={{
                    type: 'tween',
                    ease: 'easeOut',
                    duration: 0.2,
                }}
            />
        </motion.div>
    );
};

export default Cursor;
