"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { DeleteBiscuitCookie } from "@/hooks/useCookies";
import { useEffect, useState } from "react";

const linkClass: string =
  "select-none transition-opacity duration-300 hover:opacity-70";

///  NavItems here *****************
function NavItems({ handleCloseNavbar }: { handleCloseNavbar: () => void }) {
  const router = useRouter();
  const [isUserLogined, setIsUserLogined] = useState(false);

  const goToSignInPage = () => {
    router.push("/user/login");
    return handleCloseNavbar();
  };
  const handleLogout = async () => {
    await DeleteBiscuitCookie("accessToken");
    if (typeof window !== "undefined") {
      localStorage.setItem("isUserLogined", "false");
    }
    return goToSignInPage();
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      const value = localStorage.getItem("isUserLogined");
      if (value === "true") {
        setIsUserLogined(true);
      }
    }
  }, []);
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
      {!isUserLogined ? (
        <Button
          onClick={goToSignInPage}
          variant="default"
          className="select-none  py-2 text-sm text-white"
        >
          Sign In
        </Button>
      ) : (
        <Button
          onClick={handleLogout}
          variant="outline"
          className="select-none  py-2 text-sm text-foreground border-foreground"
        >
          Sign Out
        </Button>
      )}
    </>
  );
}

export default NavItems;
