// Defining routes to sidebar
"use client";

import { Layout, Compass } from "lucide-react";
import { SidebarItem } from "./sidebar-item";

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

export const SidebarRoutes = () => {
  const routes = guestRoutes;
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
