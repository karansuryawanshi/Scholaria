// Defining routes to sidebar
"use client";

import { Layout, Compass, List, BarChart } from "lucide-react";
import { SidebarItem } from "./sidebar-item";
import { usePathname } from "next/navigation";

// createing array of objects
const guestRoutes = [
  {
    icon: Layout,
    label: "Dashboard",
    href: "/",
  },
  {
    icon: Compass,
    label: "browse",
    href: "/search",
  },
];

const teacherRoutes = [
  {
    icon: List,
    label: "Courses",
    href: "/teacher/courses",
  },
  {
    icon: BarChart,
    label: "Analytics",
    href: "/teacher/analytics",
  },
];

export const SidebarRoutes = () => {
  // const routes = guestRoutes;

  const pathName = usePathname();
  const isteacherPage = pathName?.includes("/teacher");
  const routes = isteacherPage ? teacherRoutes : guestRoutes;

  return (
    <div className="flex flex-col w-full">
      {/* mapping array and passing to sidebar Item */}
      {routes.map((routes) => (
        <SidebarItem
          icon={routes.icon}
          label={routes.label}
          href={routes.href}
          key={routes.href}
        />
      ))}
    </div>
  );
};
