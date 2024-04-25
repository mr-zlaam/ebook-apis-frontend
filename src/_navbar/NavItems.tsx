"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { DeleteBiscuitCookie } from "@/hooks/useCookies";
import { useEffect, useState } from "react";
import { getCookie } from "cookies-next";

import axios from "axios";
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
  const [currentUser, setCurrentUser] = useState<
    null | FetchUserResponseType[]
  >(null);
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
    const fetchUsers = async () => {
      try {
        const user = await axios.get(
          "http://localhost:5173/api/users/getUsers"
        );
        // console.log(user?.data?.data);
        setCurrentUser(user?.data?.data);
      } catch (error: any) {
        console.log(error.message);
      }
    };
    fetchUsers();
  }, []);
  const uid = getCookie("uid");
  // console.log(uid);
  const isCurrentUserLogin = currentUser?.map((user) => {
    return user?._id === uid;
  });
  console.log(isCurrentUserLogin);
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
