"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

function NavItems({ handleCloseNavbar }: { handleCloseNavbar: () => void }) {
  const router = useRouter();
  const linkClass: string =
    "select-none transition-opacity duration-300 hover:opacity-70";
  const goToSignInPage = () => {
    router.push("/user/login");
    return handleCloseNavbar();
  };
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
        onClick={goToSignInPage}
        variant="default"
        className="select-none  py-2 text-sm text-white"
      >
        Sign In
      </Button>
    </>
  );
}

export default NavItems;
