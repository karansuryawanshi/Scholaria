"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

interface ChartColumnProps extends React.SVGAttributes<SVGSVGElement> {
  hovered?: boolean;
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const ChartColumn = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "currentColor",
  hovered = false,
  ...props
}: ChartColumnProps) => {
  const controls = useAnimation();

  useEffect(() => {
    const animate = async () => {
      if (hovered) {
        await controls.start((i) => ({
          pathLength: 0,
          opacity: 0,
          transition: { delay: i * 0.1, duration: 0.2 },
        }));
        await controls.start((i) => ({
          pathLength: 1,
          opacity: 1,
          transition: { delay: i * 0.1, duration: 0.3 },
        }));
      } else {
        controls.start("visible");
      }
    };
    animate();
  }, [hovered, controls]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <motion.path
        initial="visible"
        animate={controls}
        custom={1}
        d="M13 17V9"
      />
      <motion.path
        initial="visible"
        animate={controls}
        custom={2}
        d="M18 17V5"
      />
      <motion.path animate={controls} d="M3 3v16a2 2 0 0 0 2 2h16" />
      <motion.path
        initial="visible"
        animate={controls}
        custom={0}
        d="M8 17v-3"
      />
    </svg>
  );
};

export { ChartColumn };
