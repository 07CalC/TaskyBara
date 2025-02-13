'use client'

import { useThemeStore } from "@/store/themeStore";
import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";
import { PiSignOutBold } from "react-icons/pi";


export const SignOutButton = () => {
    const theme = useThemeStore((state) => state.theme)
    return (
        <button title="sign out" onClick={ async() => {
            await signOut();
            redirect('/')
        }}>
            <PiSignOutBold className={`${theme === "light" ? "text-black" : "text-white"} text-2xl`} />
        </button>
    )
}