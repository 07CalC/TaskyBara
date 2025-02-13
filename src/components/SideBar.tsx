import Image from "next/image"
import { ThemeToggleButton } from "./ThemeToggleButton"
import { auth } from "@/auth"
import { SignOutButton } from "./SignOutButton"
import { SideBarRoutes } from "./SideBarRoutes"
import { Logo } from "./Logo"


export const SideBar = async () => {

    const session = await auth()
    return (
        <div className="w-full h-full flex flex-col items-center">
            <div className="py-4 flex items-center w-full justify-between gapy-x-4 px-2">
                <Logo />
                <p className="text-2xl dark:text-white text-black font-bold">TaskyBara</p>
                <ThemeToggleButton/>
            </div>
            <div className="w-full">
                <SideBarRoutes/>
            </div>
            <div className="flex justify-between rounded-xl absolute bottom-3 w-11/12 items-center p-3 bg-primaryLight dark:bg-secondaryDark">
                <div className="flex items-center gap-2">
                <img src={session?.user?.image!} alt="Profile" width={100} height={100} className="object-contain h-12 w-12 rounded-full"/>
                <p className="text-md dark:text-white text-black font-bold">{session?.user?.name}</p>
                </div>
                <SignOutButton/>
            </div>
        </div>
    )
}