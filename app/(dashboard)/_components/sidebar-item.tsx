"use client";

import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";
// import { Compass } from "lucide-react";

interface SidebarItemProps {
  icon: React.ElementType;
  label: string;
  href: string;
  index: number;
}

export const SidebarItem = ({
  icon: Icon,
  label,
  href,
  index,
}: SidebarItemProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const [hovered, setHovered] = useState(false);

  const isActive =
    (pathname === "/" && href === "/") ||
    pathname === href ||
    pathname?.startsWith(`${href}/`);

  const onClick = () => {
    router.push(href);
  };

  return (
    <motion.button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "flex items-center gap-x-2 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600 cursor-pointer hover:bg-slate-300/20",
        isActive &&
          "text-sky-700 bg-sky-200/20 hover:bg-sky-200/20 hover:text-sky-700"
      )}
    >
      <motion.div
        className="flex items-center gap-x-2 py-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: index * 0.3, delay: index * 0.3 }}
        whileHover={{ scale: 1.09 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Render icon and pass hovered prop only to LayoutGrid */}
        {/* {Icon.name === "LayoutGrid" ? (
          <Icon
            hovered={hovered}
            className={cn(isActive ? "text-sky-700" : "text-slate-500")}
          />
        ) : (
          <Icon
            size={22}
            className={cn(isActive ? "text-sky-700" : "text-slate-500")}
          />
        )} */}
        {Icon.name === "LayoutGrid" ||
        Icon.name === "ChartColumn" ||
        Icon.name === "Compass" ? (
          <Icon
            hovered={hovered}
            className={cn(isActive ? "text-sky-700" : "text-slate-500")}
          />
        ) : (
          <Icon
            size={22}
            className={cn(isActive ? "text-sky-700" : "text-slate-500")}
          />
        )}
        {label}
      </motion.div>

      <div
        className={cn(
          "ml-auto opacity-0 border-2 border-sky-700 h-full transition-all",
          isActive && "opacity-100"
        )}
      />
    </motion.button>
  );
};
