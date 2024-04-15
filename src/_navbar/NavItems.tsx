"use client";
import { Button } from "@/components/ui/button";

function NavItems({ handleCloseNavbar }: { handleCloseNavbar?: () => void }) {
  const linkClass: string =
    "select-none transition-opacity duration-300 hover:opacity-70";
  return (
    <>
      <a onClick={handleCloseNavbar} href="#" className={linkClass}>
        Home
      </a>
      <a onClick={handleCloseNavbar} href="#" className={linkClass}>
        Books
      </a>
      <a onClick={handleCloseNavbar} href="#" className={linkClass}>
        UploadBook
      </a>
      <a onClick={handleCloseNavbar} href="#" className={linkClass}>
        About
      </a>
      <Button
        onClick={handleCloseNavbar}
        variant="outline"
        className="select-none  py-2 text-sm text-muted-foreground"
      >
        Sign In
      </Button>
    </>
  );
}

export default NavItems;
