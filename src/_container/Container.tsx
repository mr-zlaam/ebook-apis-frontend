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
      <section
        className={cn("max-w-screen-xl mx-auto px-2.5 md:px-20", className)}
      >
        {children}
      </section>
    </>
  );
}

export default Container;
