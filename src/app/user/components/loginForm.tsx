import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/lable";
import Link from "next/link";
import {} from "react";

function LoginForm() {
  return (
    <>
      <section className="relative top-20">
        <form>
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
            <div className="w-full bg-background rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-foreground md:text-2xl">
                  Sign in
                </h1>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input type="email" id="email" placeholder="john@mail.com" />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="password">Password</Label>
                  <Input type="password" id="password" placeholder="••••••••" />
                </div>
                <div>
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
                </div>
                <Button className="w-full bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  focus:ring-blue-800 text-white">
                  Sign in
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
