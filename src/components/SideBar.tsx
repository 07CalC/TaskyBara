"use client";
import { ThemeToggleButton } from "./ThemeToggleButton";
import { SideBarRoutes } from "./SideBarRoutes";
import { Logo } from "./Logo";
import { Suspense } from "react";
import { useRouteStore } from "@/store/routeStore";
import { IoCloseSharp } from "react-icons/io5";
import { SideBarBottom } from "./SideBarBottom";

export const SideBar = () => {
  const showMenu = useRouteStore((state) => state.showMenu);
  const setShowMenu = useRouteStore((state) => state.setShowMenu);
  return (
    <div
      className={`sm:w-full z-10 w-screen ${
        showMenu ? "flex flex-col" : "hidden"
      } bg-secondaryLight dark:bg-primaryDark relative h-screen sm:flex sm:flex-col items-center`}
    >
      <div className="py-4 flex items-center w-full justify-between gapy-x-4 px-2">
        <Logo />
        <p className="text-2xl dark:text-white text-black font-bold">
          TaskyBara
        </p>
        <ThemeToggleButton />
        <IoCloseSharp
          className="text-2xl cursor-pointer sm:hidden"
          onClick={setShowMenu}
        />
      </div>
      <div className="w-full">
        <SideBarRoutes />
      </div>
      <Suspense fallback={<p>loading...</p>}>
        <SideBarBottom />
      </Suspense>
    </div>
  );
};
