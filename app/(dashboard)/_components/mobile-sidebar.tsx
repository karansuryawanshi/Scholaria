// this is for hamburger for mobile devices

import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DialogTitle } from "@radix-ui/react-dialog";
import Sidebar from "./sidebar";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition">
        <Menu />
      </SheetTrigger>
      <VisuallyHidden>
        <DialogTitle />
      </VisuallyHidden>
      <SheetContent side="left" className="p-0 bg-white">
        <Sidebar></Sidebar>
      </SheetContent>
    </Sheet>
  );
};
