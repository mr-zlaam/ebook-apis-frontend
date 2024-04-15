"use client";
import Logo from "@/_subComponents/logo";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import MobileNavItems from "./MobileNavItems";
import NavItems from "./NavItems";
import { cn } from "@/lib/utils";
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleShowNavBar = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <>
      <header className="flex justify-around items-center h-[70px]  sticky top-0 bg-background shadow">
        <div className="">
          {isMenuOpen && (
            <X
              className="absolute left-10 z-50 text-foreground"
              onClick={() => {
                setIsMenuOpen(false);
              }}
            />
          )}{" "}
          <Logo />
        </div>
        <nav className="hidden z-50 lg:flex lg:self-stretch  gap-10 items-center ">
          <NavItems />
        </nav>
        {!isMenuOpen && (
          <Menu className="inline lg:hidden" onClick={handleShowNavBar} />
        )}
        <MobileNavItems
          className={cn(
            !isMenuOpen
              ? "translate-y-[-120%] duration-300 "
              : "translate-y-0 duration-300"
          )}
        />
        {isMenuOpen && (
          <div
            onClick={() => setIsMenuOpen(false)}
            className="before:content[''] before:absolute before:top-0 before:left-0 before:h-screen before:w-full before:bg-black/30 before:backdrop-blur-sm"
          />
        )}
      </header>
    </>
  );
}

export default Header;
