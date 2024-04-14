import Logo from "@/_subComponents/logo";
import {} from "react";
import NavItems from "./NavItems";
import { Menu } from "lucide-react";
//TODO: Make Responsive Navbar
function Header() {
  return (
    <>
      <header className="flex justify-around items-center h-[70px]  sticky top-0 bg-background shadow">
        <div>
          <Logo />
        </div>
        <nav className="hidden z-50 lg:flex lg:self-stretch  gap-10 items-center ">
          <NavItems />
        </nav>
        <Menu className="block lg:hidden" />
      </header>
    </>
  );
}

export default Header;
