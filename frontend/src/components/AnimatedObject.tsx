import React from 'react';
import { motion } from 'framer-motion';
import "../styles/styles.css"; // Ensure this file contains necessary styles

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: 'spring', duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 }
      }
    };
  }
};

const createShapes = (offsetX: number) => (
  <>
    <motion.circle
      cx={100 + offsetX}
      cy="100"
      r="80"
      stroke="#ff0055"
      variants={draw}
      custom={1}
    />
    <motion.line
      x1={220 + offsetX}
      y1="30"
      x2={360 + offsetX}
      y2="170"
      stroke="#00cc88"
      variants={draw}
      custom={2}
    />
    <motion.line
      x1={220 + offsetX}
      y1="170"
      x2={360 + offsetX}
      y2="30"
      stroke="#00cc88"
      variants={draw}
      custom={2.5}
    />
    <motion.rect
      width="140"
      height="140"
      x={410 + offsetX}
      y="30"
      rx="20"
      stroke="#0099ff"
      variants={draw}
      custom={3}
    />
    <motion.circle
      cx={100 + offsetX}
      cy="300"
      r="80"
      stroke="#0099ff"
      variants={draw}
      custom={2}
    />
    <motion.line
      x1={220 + offsetX}
      y1="230"
      x2={360 + offsetX}
      y2="370"
      stroke="#ff0055"
      custom={3}
      variants={draw}
    />
    <motion.line
      x1={220 + offsetX}
      y1="370"
      x2={360 + offsetX}
      y2="230"
      stroke="#ff0055"
      custom={3.5}
      variants={draw}
    />
    <motion.rect
      width="140"
      height="140"
      x={410 + offsetX}
      y="230"
      rx="20"
      stroke="#00cc88"
      custom={4}
      variants={draw}
    />
    <motion.circle
      cx={100 + offsetX}
      cy="500"
      r="80"
      stroke="#00cc88"
      variants={draw}
      custom={3}
    />
    <motion.line
      x1={220 + offsetX}
      y1="430"
      x2={360 + offsetX}
      y2="570"
      stroke="#0099ff"
      variants={draw}
      custom={4}
    />
    <motion.line
      x1={220 + offsetX}
      y1="570"
      x2={360 + offsetX}
      y2="430"
      stroke="#0099ff"
      variants={draw}
      custom={4.5}
    />
    <motion.rect
      width="140"
      height="140"
      x={410 + offsetX}
      y="430"
      rx="20"
      stroke="#ff0055"
      variants={draw}
      custom={5}
    />
  </>
);

const TicTacToeAnimation: React.FC = () => {
  return (
    <motion.svg
    width="100%" // Use percentage for responsive width
    height="auto" // Use auto for responsive height
    viewBox="0 0 1200 400" // Adjust viewBox to fit all shapes
    initial="hidden"
    animate="visible"
    variants={{
        visible: {
            transition: {
                staggerChildren: 0.5, // Adjust the delay between animations of individual elements
                repeat: Infinity,
                repeatType: 'loop'
            }
        }
    }}
>
      {/* Repeat the shapes with offset for each column */}
      {createShapes(0)}
      {createShapes(600)}
      {createShapes(1200)}
      {createShapes(1800)}
      {createShapes(2400)}
      {createShapes(3000)}
    </motion.svg>
  );
};

export default TicTacToeAnimation;
