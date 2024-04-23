"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/lable";
import type { UserRegisterTypes } from "@/types";
import { registerSchema } from "@/validation/postSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UserRegisterTypes>({ resolver: zodResolver(registerSchema) });
  const handleRegisterSubmit = async (data: UserRegisterTypes) => {
    try {
    } catch (error: any) {
      console.log(error.message);
    }
  };
  return (
    <>
      <section className="relative top-20">
        <form onSubmit={handleSubmit(handleRegisterSubmit)}>
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
            <div className="w-full bg-background rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-foreground md:text-2xl">
                  Create an Account
                </h1>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    {...register("username")}
                    type="text"
                    placeholder="john_doe"
                  />
                  {errors.username && (
                    <span className="text-xs text-red-500">
                      {" "}
                      {errors.username.message}{" "}
                    </span>
                  )}
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="fullname">Full Name</Label>
                  <Input
                    {...register("fullname")}
                    type="text"
                    placeholder="John Doe"
                  />
                  {errors.fullname && (
                    <span className="text-xs text-red-500">
                      {" "}
                      {errors.fullname.message}{" "}
                    </span>
                  )}
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    {...register("email")}
                    type="email"
                    placeholder="john@mail.com"
                  />
                  {errors.email && (
                    <span className="text-xs text-red-500">
                      {" "}
                      {errors.email.message}{" "}
                    </span>
                  )}
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    {...register("password")}
                    type="password"
                    placeholder="••••••••"
                  />
                  {errors.password && (
                    <span className="text-xs text-red-500">
                      {" "}
                      {errors.password.message}{" "}
                    </span>
                  )}
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="confirm">Confirm Password</Label>
                  <Input
                    {...register("confirmPassword")}
                    type="password"
                    placeholder="••••••••"
                  />
                  {errors.confirmPassword && (
                    <span className="text-xs text-red-500">
                      {" "}
                      {errors.confirmPassword.message}{" "}
                    </span>
                  )}
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
