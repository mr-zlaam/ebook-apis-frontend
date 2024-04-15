"use client";
import Logo from "@/_subComponents/logo";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import MobileNavItems from "./MobileNavItems";
import NavItems from "./NavItems";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/_theme/Theme";
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleShowNavBar = () => {
    setIsMenuOpen((prev) => !prev);
  };
  const handleCloseNavbar = () => {
    setIsMenuOpen(false);
  };
  return (
    <>
      <header
        className={cn(
          "flex justify-around items-center h-[70px]  sticky top-0 bg-background shadow "
        )}
      >
        <div className="relative">
          <div className="absolute top-4 left-[-40px]">
            <ModeToggle />
          </div>
          {isMenuOpen && (
            <X
              className=" lg:hidden absolute top-5 right-25 z-50 text-foreground"
              onClick={() => {
                setIsMenuOpen(false);
              }}
            />
          )}
          <Logo />
        </div>
        <nav className="hidden z-50 lg:flex lg:self-stretch  gap-10 items-center ">
          <NavItems />
        </nav>
        {!isMenuOpen && (
          <Menu className="inline lg:hidden" onClick={handleShowNavBar} />
        )}
        <MobileNavItems
          handleCloseNavbar={handleCloseNavbar}
          className={cn(
            "lg:hidden",
            !isMenuOpen
              ? "translate-y-[-120%] duration-300 "
              : "translate-y-0 duration-300"
          )}
        />
        {isMenuOpen && (
          <div
            onClick={() => setIsMenuOpen(false)}
            className="lg:hidden before:content[''] before:absolute before:top-0 before:left-0 before:h-screen before:w-full before:bg-black/30 before:backdrop-blur-sm"
          />
        )}
      </header>
    </>
  );
}

export default Header;
