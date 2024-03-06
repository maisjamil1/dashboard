import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Menu from "@/assets/icons/menu";
import Sun from "@/assets/icons/sun";
import Moon from "@/assets/icons/moon";
import { FC } from "react";
import { useTheme } from "@/components/ui/theme-provider.tsx";
import BellIcon from "@/assets/icons/bell.tsx";
import CaptureIcon from "@/assets/icons/captureIcon.tsx";

const Header: FC = () => {
  const { theme, setTheme } = useTheme();
  return (
    <header className="sm:flex sm:justify-between py-1 px-4 border-b">
      <div className="mx-auto w-full max-w-7xl">
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-14 items-center justify-between w-full">
          <div className="flex items-center">
            <Sheet>
              <SheetTrigger>
                <Menu
                  className="h-6 md:hidden w-6"
                  fill={theme == "dark" ? "gray" : "black"}
                />
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4">
                  <NavLink
                    className="block px-2 py-1 text-lg"
                    to={"/dashboard"}
                  >
                    Dashboard
                  </NavLink>
                  <NavLink className="block px-2 py-1 text-lg" to={"/"}>
                    Map
                  </NavLink>
                </nav>
              </SheetContent>
            </Sheet>
            <a href="/" className="ml-4 lg:ml-0">
              <h1 className="text-xl font-bold text-red-600">Mays</h1>
            </a>
          </div>
          <div className="flex items-center">
            <Button variant="ghost" size="icon" className="">
              {" "}
              <BellIcon
                fill={theme == "dark" ? "white" : "black"}
                width={"20"}
                height={"20"}
              />
            </Button>
            <Button variant="ghost" size="icon" className="">
              {" "}
              <CaptureIcon
                fill={theme == "dark" ? "white" : "black"}
                width={"20"}
                height={"20"}
              />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle Theme"
              className="mr-6"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun
                className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                fill="#000"
              />
              <Moon
                className="absolute h-7 w-7 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                fill="#fff"
              />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
