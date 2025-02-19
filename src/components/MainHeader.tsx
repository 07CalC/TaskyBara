
import Link from "next/link"
import { Logo } from "./Logo"
import { ThemeToggleButton } from "./ThemeToggleButton"
import { auth } from "@/auth"






export const MainHeadder = async () => {
    const session = await auth()

    return(
        <div className="w-full flex items-center justify-between px-5 bg-primaryLight rounded-xl dark:bg-secondaryDark">
            <div className="flex items-center gap-x-4">
            <Logo />
            <p className="text-2xl font-bold text-black dark:text-white">TaskyBara</p>
            </div>
            <div className="flex gap-x-4">
                <ThemeToggleButton />
                {!session && <Link href={"/login"}>
                <button className="bg-blue-600 text-white rounded-xl px-4 py-2">Sign in</button>
                </Link>}
                {session && <Link href={"/console/dashboard"}>
                <button className="bg-secondaryLight dark:bg-primaryDark text-black dark:text-white rounded-xl px-4 py-2">Dashboard</button>
                </Link>}
            </div>
        </div>
    )
}