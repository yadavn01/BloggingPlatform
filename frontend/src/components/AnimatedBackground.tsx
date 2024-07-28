// src/components/AnimatedBackground.tsx

import React from 'react';
import { motion } from 'framer-motion';

const circleVariants = {
    animate: {
        scale: [1, 1.5, 1],
        opacity: [0.5, 1, 0.5],
        transition: {
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut'
        }
    }
};

const AnimatedBackground: React.FC = () => {
    const circles = Array.from({ length: 15 });

    return (
        <div className="animated-background">
            {circles.map((_, index) => (
                <motion.div
                    key={index}
                    className="animated-object"
                    variants={circleVariants}
                    animate="animate"
                    style={{
                        position: 'absolute',
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        background: `rgba(255, 255, 255, 0.1)`,
                        width: `${Math.random() * 50 + 20}px`,
                        height: `${Math.random() * 50 + 20}px`,
                        borderRadius: '50%',
                    }}
                />
            ))}
        </div>
    );
};

export default AnimatedBackground;
