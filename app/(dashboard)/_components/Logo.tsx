// page for Logo
"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.2 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
    >
      <Image height={130} width={130} alt="logo" src="/Logo.svg" />
    </motion.div>
  );
};

export default Logo;
