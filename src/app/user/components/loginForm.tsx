"use client";
import ButtonLoader from "@/_subComponents/buttonLoader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/lable";
import { BiscuitCookie } from "@/hooks/useCookies";
import { useLoading } from "@/hooks/useLoading";
import { useMessage } from "@/hooks/useMessage";
import { cn } from "@/lib/utils";
import type { UserLoginTypes } from "@/types";
import { loginSchema } from "@/validation/postSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
function LoginForm() {
  const router = useRouter();
  const { errorMessage, successMessage } = useMessage();
  const { isLoading, startLoading, stopLoading } = useLoading();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserLoginTypes>({ resolver: zodResolver(loginSchema) });
  const handleLoginSubmit = async (data: UserLoginTypes) => {
    const { email, password } = data;
    try {
      startLoading();
      const response = await axios.post(
        `http://localhost:5173/api/users/login`,
        {
          email,
          password,
        },

        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data.message === "OK") {
        reset();
        successMessage("login successfully.");
      }
      await BiscuitCookie(response.data?.accessToken);
      setTimeout(() => {
        return router.push("/uploadBook");
      }, 3000);
      stopLoading();
    } catch (error: any) {
      stopLoading();
      errorMessage(error.response.data.message);
      return;
    }
  };
  return (
    <>
      <section className="relative top-24">
        <form onSubmit={handleSubmit(handleLoginSubmit)}>
          <div className="flex flex-col items-center justify-center  px-6 py-8 mx-auto lg:py-0">
            <div className="w-full bg-background rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-foreground md:text-2xl">
                  Sign in
                </h1>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    {...register("email")}
                    type="email"
                    id="email"
                    placeholder="john@mail.com"
                  />
                  {errors.email && (
                    <p className="text-xs select-none text-red-500  text-balance ml-2">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    {...register("password")}
                    type="password"
                    id="password"
                    placeholder="••••••••"
                  />
                  {errors.password && (
                    <p className="text-xs select-none text-red-500  text-balance ml-2">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                <p className="text-center text-sm ">
                  Don&apos;t have an Account ?
                  <Link
                    href="/user/register"
                    className="text-blue-500 hover:underline"
                  >
                    {"  "}
                    Register
                  </Link>
                </p>

                <Button
                  className={cn(
                    "text-white w-full bg-blue-500 duration-200 transition-all hover:bg-blue-700",
                    isLoading && "cursor-not-allowed"
                  )}
                >
                  {isLoading ? <ButtonLoader /> : <span>Sign in</span>}
                </Button>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}

export default LoginForm;
