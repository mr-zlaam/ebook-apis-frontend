"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/lable";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {} from "react";

function BookUploadForm() {
  const handleUploadBook = async (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <section>
      <h1 className="text-center font-bold text-3xl my-3">Upload Book</h1>
      <form onSubmit={handleUploadBook}>
        <div className="flex flex-col items-center justify-center px-6 py-8  mx-auto lg:py-0">
          <div className="sm:w-full bg-background rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6  space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-foreground md:text-2xl">
                Create an Account
              </h1>
              <div className="grid w-full max-w-sm items-center">
                <Label className="mb-1" htmlFor="BookTitle">
                  Book Title
                </Label>
                <Input
                  type="text"
                  placeholder="e.g__48 laws of power..."
                  id="BookTitle"
                />
              </div>
              <Button
                className={cn(
                  "text-white w-full bg-blue-500 duration-200 transition-all hover:bg-blue-700"
                )}
              >
                Upload Book
              </Button>
            </div>
          </div>
        </div>
      </form>{" "}
    </section>
  );
}

export default BookUploadForm;
