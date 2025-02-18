"use client";
import { AddProjectDialog } from "./AddProjectDialog";
import { AddTaskDialog } from "./AddTaskDialog";
import { IoMenu } from "react-icons/io5";
import { useRouteStore } from "@/store/routeStore";

type props = {
  title: string;
};

export const PageHeader = ({ title }: props) => {
  const setShowMenu = useRouteStore((state) => state.setShowMenu);
  return (
    <div className="w-full flex items-center justify-between py-2 px-4 bg-secondaryLight rounded-xl dark:bg-primaryDark">
      <div className="flex justify-between items-center gap-x-1">
        <IoMenu
          className="text-2xl sm:hidden flex cursor-pointer"
          onClick={setShowMenu}
        />
        <p className="text-2xl font-bold text-black dark:text-white">{title}</p>
      </div>
      <div className="flex gap-x-4">
        <AddTaskDialog />
        <AddProjectDialog />
      </div>
    </div>
  );
};
