import {} from "react";
import NavItems from "./NavItems";
import { cn } from "@/lib/utils";

function MobileNavItems({
  className,
  handleCloseNavbar,
}: {
  className?: string;
  handleCloseNavbar?: () => void;
}) {
  return (
    <>
      <nav
        className={cn(
          "flex flex-col bg-background shadow border h-[400px] items-center justify-around w-[250px] absolute z-50 right-2 top-2  rounded-lg md:w-[300px]",
          className
        )}
      >
        <NavItems handleCloseNavbar={handleCloseNavbar} />
      </nav>
    </>
  );
}

export default MobileNavItems;
