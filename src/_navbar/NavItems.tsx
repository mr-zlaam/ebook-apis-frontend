"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { DeleteBiscuitCookie } from "@/hooks/useCookies";
import { useEffect, useState } from "react";
import { getCookie, deleteCookie } from "cookies-next";

interface FetchUserResponseType {
  _id: string;
  username: string;
  displayName: string;
  email: string;
  createdAt: Date;
  updateddAt: Date;
}
const linkClass: string =
  "select-none transition-opacity duration-300 hover:opacity-70";

///  NavItems here *****************
function NavItems({ handleCloseNavbar }: { handleCloseNavbar: () => void }) {
  const router = useRouter();
  const [isUserLogined, setIsUserLogined] = useState("");
  const goToSignInPage = () => {
    router.push("/user/login");
    return handleCloseNavbar();
  };
  const handleLogout = async () => {
    await DeleteBiscuitCookie("accessToken");
    deleteCookie("uid");

    return goToSignInPage();
  };

  useEffect(() => {
    const uid = getCookie("uid") as string;
    console.log(uid);
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

      {true ? (
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
          className="select-none  py-2 text-sm border-foreground text-foreground"
        >
          Logout
        </Button>
      )}
    </>
  );
}

export default NavItems;
