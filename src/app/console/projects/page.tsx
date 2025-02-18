
import { auth } from "@/auth"
import { PageHeader } from "@/components/PageHeader"
import { ProjectCardGrid } from "@/components/ProjectCardGrid"
import { redirect } from "next/navigation"
import { Suspense } from "react"

export default async function Projects() {
    const session = await auth()
    if(!session) redirect('/login')
    return(
        <div className="w-full h-full flex flex-col p-4 gap-y-4">
            <PageHeader title="Projects" />
            <Suspense fallback={<div className="w-full h-full flex justify-center items-center text-3xl text-black dark:text-white">Loading...</div>}>
            <ProjectCardGrid />
            </Suspense>
        </div>
)
}