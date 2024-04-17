import { cn } from "@/lib/utils";
import React from "react";

function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <>
      <div
        className={cn("max-w-screen-2xl mx-auto px-2.5 md:px-20", className)}
      >
        {children}
      </div>
    </>
  );
}

export default Container;
