'use client'
import { useThemeStore } from "@/store/themeStore"
import Image from "next/image"





export const Logo = () => {
    const theme = useThemeStore((state) => state.theme)
    return (
        <Image src={theme === "dark" ? "/taskybaralogo.png" : "/taskybaralogodark.png"} width={100} height={100}  alt="Logo" className="object-contain h-16 w-16" />

    )
}