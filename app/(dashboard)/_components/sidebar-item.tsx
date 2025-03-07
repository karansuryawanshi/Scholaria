// this is for sidebar
"use client";

import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

// creating interface and defining the datatypes of props
interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
}

// acceptin props and mapping it wiyh interface (SidebarItemProps)
// Icon is a LucideIcon type
export const SidebarItem = ({ icon: Icon, label, href }: SidebarItemProps) => {
  console.log("icons", Icon);
  const pathname = usePathname();
  const router = useRouter();

  // if path is "/" then it will show active if path is other than "/" it will show inactive initially
  const isActive =
    (pathname === "/" && href == "/") ||
    pathname === href ||
    pathname?.startsWith(`${href}/`);

  // Function to navigate
  const onClick = () => {
    router.push(href);
  };

  return (
    // This button is basically for sidebar buttons to navigate on other url
    <motion.button
      type="button"
      onClick={onClick}
      className={cn(
        "flex items-center gap-x-2 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600 cursor-pointer hover:bg-slate-300/20",
        isActive &&
          "text-sky-700 bg-sky-200/20 hover:bg-sky-200/20 hover:text-sky-700"
      )}
    >
      <motion.div
        className="flex items-center gap-x-2 py-4"
        whileTap={{ scale: [0.9, 1] }}
        // whileHover={{ scale: [1, 1.2, 1.1], transition: { duration: 0.3 } }}
        animate={{ x: [50, -50, 0] }}
      >
        {/* To diaplay icons aside of text on sidebar */}
        <Icon
          size={22}
          className={cn("text-slate-500", isActive && "text-sky-700")}
        />
        {/* To diaplay name */}
        {label}
      </motion.div>
      {/* To display right line to show tab is active */}
      <div
        className={cn(
          "ml-auto opacity-0 border-2 border-sky-700 h-full transition-all",
          isActive && "opacity-100"
        )}
      />
    </motion.button>
  );
};
