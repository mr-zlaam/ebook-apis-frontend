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
    formState: { errors },
  } = useForm<UserRegisterTypes>({ resolver: zodResolver(registerSchema) });
  const handleRegisterSubmit = async (data: UserRegisterTypes) => {
    try {
    } catch (error: any) {
      console.log(error.message);
    }
  };
  return (
    <>
      <section className="relative top-8">
        <form onSubmit={handleSubmit(handleRegisterSubmit)}>
          <div className="flex flex-col items-center justify-center px-6 py-8  mx-auto lg:py-0">
            <div className="w-full bg-background rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
              <div className="p-6  space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-foreground md:text-2xl">
                  Create an Account
                </h1>
                <div className="grid w-full max-w-sm items-center">
                  <Label className="mb-1" htmlFor="username">
                    Username
                  </Label>
                  <Input
                    autoCapitalize="off"
                    {...register("username")}
                    type="text"
                    placeholder="john_doe"
                    id="username"
                  />
                  <p className="h-[15px]">
                    {errors.username && (
                      <span className="text-xs select-none text-red-500 h-[15px] text-balance ml-2">
                        {errors.username.message}
                      </span>
                    )}
                  </p>
                </div>
                <div className="grid w-full max-w-sm items-center">
                  <Label className="mb-1" htmlFor="fullname">
                    Full Name
                  </Label>
                  <Input
                    {...register("fullname")}
                    type="text"
                    placeholder="John Doe"
                    id="fullname"
                  />
                  <p className="h-[15px]">
                    {errors.fullname && (
                      <span className="text-xs select-none text-red-500 h-[15px] text-balance ml-2">
                        {errors.fullname.message}
                      </span>
                    )}
                  </p>
                </div>
                <div className="grid w-full max-w-sm items-center">
                  <Label className="mb-1" htmlFor="email">
                    Email
                  </Label>
                  <Input
                    {...register("email")}
                    type="email"
                    placeholder="john@mail.com"
                    id="email"
                  />
                  <p className="h-[15px]">
                    {errors.email && (
                      <span className="text-xs select-none text-red-500 h-[15px] text-balance ml-2">
                        {errors.email.message}
                      </span>
                    )}
                  </p>
                </div>
                <div className="grid w-full max-w-sm items-center">
                  <Label className="mb-1" htmlFor="password">
                    Password
                  </Label>
                  <Input
                    {...register("password")}
                    type="password"
                    placeholder="••••••••"
                    id="password"
                  />
                  <p className="h-[15px]">
                    {errors.password && (
                      <span className="text-xs select-none text-red-500 h-[15px] text-balance ml-2">
                        {errors.password.message}
                      </span>
                    )}
                  </p>
                </div>
                <div className="grid w-full max-w-sm items-center">
                  <Label className="mb-1" htmlFor="confirm">
                    Confirm Password
                  </Label>
                  <Input
                    {...register("confirmPassword")}
                    type="password"
                    placeholder="••••••••"
                    id="confirm"
                  />
                  <p className="h-[15px]">
                    {errors.confirmPassword && (
                      <span className="text-xs select-none text-red-500 h-[15px] text-balance ml-2">
                        {errors.confirmPassword.message}
                      </span>
                    )}
                  </p>
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
                <Button className="w-full  duration-200 text-white transition-all hover:bg-blue-700 ">
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
