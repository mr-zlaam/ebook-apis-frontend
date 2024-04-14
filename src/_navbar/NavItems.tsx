import { Button } from "@/components/ui/button";
import {} from "react";

function NavItems() {
  return (
    <>
      <a href="#" className="transition-opacity duration-300 hover:opacity-70">
        Home
      </a>
      <a href="#" className="transition-opacity duration-300 hover:opacity-70">
        Books
      </a>
      <a href="#" className="transition-opacity duration-300 hover:opacity-70">
        UploadBook
      </a>
      <a href="#" className="transition-opacity duration-300 hover:opacity-70">
        About
      </a>
      <Button variant="outline" className="py-2  text-sm text-muted-foreground">
        Sign In
      </Button>
    </>
  );
}

export default NavItems;
