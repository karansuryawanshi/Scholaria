"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import type { Variants } from "framer-motion";

const boxVariants: Variants = {
  normal: (i: number) => ({
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25,
    },
  }),
  animate: (i: number) => {
    const positions = [
      { x: 11, y: 0 },
      { x: 0, y: 11 },
      { x: -11, y: 0 },
      { x: 0, y: -11 },
    ];
    return {
      ...positions[i],
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
      },
    };
  },
};

interface LayoutGridProps extends React.SVGAttributes<SVGSVGElement> {
  hovered?: boolean;
  width?: number;
  height?: number;
  strokeWidth?: number;
}

export const LayoutGrid = ({
  hovered = false,
  width = 28,
  height = 28,
  strokeWidth = 2,
  className,
  ...props
}: LayoutGridProps) => {
  const controls = useAnimation();

  useEffect(() => {
    if (hovered) {
      controls.start("animate");
    } else {
      controls.start("normal");
    }
  }, [hovered, controls]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <motion.rect
        width="7"
        height="7"
        x="3"
        y="3"
        rx="1"
        variants={boxVariants}
        animate={controls}
        initial="normal"
        custom={0}
      />
      <motion.rect
        width="7"
        height="7"
        x="14"
        y="3"
        rx="1"
        variants={boxVariants}
        animate={controls}
        initial="normal"
        custom={1}
      />
      <motion.rect
        width="7"
        height="7"
        x="14"
        y="14"
        rx="1"
        variants={boxVariants}
        animate={controls}
        initial="normal"
        custom={2}
      />
      <motion.rect
        width="7"
        height="7"
        x="3"
        y="14"
        rx="1"
        variants={boxVariants}
        animate={controls}
        initial="normal"
        custom={3}
      />
    </svg>
  );
};
