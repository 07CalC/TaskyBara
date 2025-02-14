import { auth } from "@/auth";
import { MainSection } from "@/components/MainSection";
import { SideBar } from "@/components/SideBar";
import { Test } from "@/components/Test";
import { redirect } from "next/navigation";




export default async function Dashboard() {
    const session = await auth()
    if(!session) redirect('/login')
        redirect('/console/dashboard')
}

