import { ThemeProvider } from "@/_themeProvider/theme-provider";
import Toaster from "@/_subComponents/Toaster";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter, Fugaz_One } from "next/font/google";
import "./globals.css";
import Header from "@/_navbar/Header";
const inter = Inter({ subsets: ["latin"] });
const Fugaz = Fugaz_One({
  subsets: ["latin"],
  variable: "--font-fugaz",
  weight: ["400"],
});
export const metadata: Metadata = {
  title: "EBook Store",
  description:
    "Ebook store is a plate form where you can find your favorite book for free and you can download them as well. On the other hand if you have good books you can also upload them for other users to read.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="text-[1rem] text-foreground bg-background">
      <body
        className={cn(
          "relative h-full font-sans antialiased",
          inter.className,
          Fugaz.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
          enableSystem
        >
          <main className=" relative flex flex-col min-h-screen ">
            <Header />
            <div className="flex-1 flex-grow px-2">
              {children}
              <Toaster />
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
