"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function NavItems({ handleCloseNavbar }: { handleCloseNavbar?: () => void }) {
  const linkClass: string =
    "select-none transition-opacity duration-300 hover:opacity-70";
  return (
    <>
      <Link onClick={handleCloseNavbar} href="/" className={linkClass}>
        Home
      </Link>
      <Link onClick={handleCloseNavbar} href="/books" className={linkClass}>
        Books
      </Link>
      <Link
        onClick={handleCloseNavbar}
        href="/uploadBook"
        className={linkClass}
      >
        UploadBook
      </Link>
      <Link onClick={handleCloseNavbar} href="/about" className={linkClass}>
        About
      </Link>
      <Button
        onClick={handleCloseNavbar}
        variant="default"
        className="select-none  py-2 text-sm text-white"
      >
        Sign In
      </Button>
    </>
  );
}

export default NavItems;
