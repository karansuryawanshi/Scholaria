import { MobileSidebar } from "./mobile-sidebar";
import { NavbarRoutes } from "@/components/navbar-routes";

export const Navbar = () => {
  return (
    <div className="p-4 border-b h-full flex items-center bg-white shadow-sm">
      {/* this is for hamburger  */}
      <MobileSidebar></MobileSidebar>
      {/* This is for user nutton on right */}
      <NavbarRoutes></NavbarRoutes>
    </div>
  );
};
