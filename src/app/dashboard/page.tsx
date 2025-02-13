import { auth } from "@/auth";
import { MainSection } from "@/components/MainSection";
import { SideBar } from "@/components/SideBar";
import { Test } from "@/components/Test";
import { redirect } from "next/navigation";




export default async function Dashboard() {
    const session = await auth()
    if(!session) redirect('/login')
    return (
        <div className="w-screen h-full min-h-screen flex">
            <div className="fixed bg-secondaryLight dark:bg-primaryDark w-1/5 h-screen">
                <SideBar />
            </div>
            <div className="w-1/5 h-screen">
            </div>
            <div className="dark:bg-secondaryDark bg-primaryLight w-4/5">
                <MainSection />
            </div>
        </div>
    );
}

