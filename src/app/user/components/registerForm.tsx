"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/lable";
import Link from "next/link";
import { useState } from "react";

function RegisterForm() {
  const [formData, setFormData] = useState({
    username: "",
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { username, confirmPassword, email, fullname, password } = formData;
    try {
      if (!username || !confirmPassword || !password || !email || !fullname)
        return alert("all fields are required");
    } catch (error: any) {
      console.log(error.message);
    }
  };
  return (
    <>
      <section className="relative top-20">
        <form onSubmit={handleRegisterSubmit}>
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
            <div className="w-full bg-background rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-foreground md:text-2xl">
                  Create an Account
                </h1>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="john_doe"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="fullname">Full Name</Label>
                  <Input
                    type="text"
                    id="fullname"
                    name="fullname"
                    placeholder="John Doe"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="john@mail.com"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="confirm">Confirm Password</Label>
                  <Input
                    type="password"
                    name="confirmPassword"
                    id="confirm"
                    placeholder="••••••••"
                    onChange={(e) => handleChange(e)}
                  />
                </div>

                <p className="text-center text-sm ">
                  Already have an Account ?
                  <Link
                    href="/user/login"
                    className="text-blue-500 hover:underline"
                  >
                    {"  "}
                    Login
                  </Link>
                </p>
                <Button className="w-full bg-blue-500 duration-200 text-white transition-all hover:bg-blue-700 ">
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}

export default RegisterForm;
