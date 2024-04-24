"use client";
import { useTheme } from "next-themes";
import {} from "react";
import { Toaster as Toasting } from "sonner";
function Toaster() {
  const { theme } = useTheme();
  return (
    <div>
      <Toasting
        theme={theme === "dark" ? "dark" : "light"}
        className="border-white/50"
      />
    </div>
  );
}

export default Toaster;
