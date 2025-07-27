// Defining routes to sidebar
"use client";

import { Layout, List, BarChart } from "lucide-react";
import { SidebarItem } from "./sidebar-item";
import { usePathname } from "next/navigation";
import { LayoutGrid } from "./DashboardLogo";
import { ChartColumn } from "./ChartColumn";
import { Compass } from "./Compass";

// createing array of objects
const guestRoutes = [
  {
    icon: LayoutGrid,
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
    icon: ChartColumn,
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
      {/* <LayoutGrid></LayoutGrid> */}
      {/* mapping array and passing to sidebar Item */}
      {routes.map((routes, index) => (
        <SidebarItem
          icon={routes.icon}
          label={routes.label}
          href={routes.href}
          key={routes.href}
          index={index}
        />
      ))}
    </div>
  );
};
