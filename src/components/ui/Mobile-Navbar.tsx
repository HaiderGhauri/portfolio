import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import NavbarRoutes from "./NavbarRoutes";

const MobileNavbar = () => {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger> <Menu /> </SheetTrigger>
        <SheetContent className="bg-slate-900/95 text-slate-100 pt-6 pl-0">
          <SheetHeader>
            <SheetTitle className="hidden">Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              <NavbarRoutes />
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNavbar;
