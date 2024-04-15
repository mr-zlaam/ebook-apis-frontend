import {} from "react";
import NavItems from "./NavItems";
import { cn } from "@/lib/utils";

function MobileNavItems({ className }: { className?: string }) {
  return (
    <>
      <nav
        className={cn(
          "flex flex-col bg-background shadow-gray-900 shadow-lg h-[400px] items-center justify-around w-[250px] absolute z-50 right-2 top-2  rounded-lg md:w-[300px]",
          className
        )}
      >
        <NavItems />
      </nav>
    </>
  );
}

export default MobileNavItems;
