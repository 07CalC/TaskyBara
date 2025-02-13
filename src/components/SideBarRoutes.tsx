'use client'

import { useRouteStore } from "@/store/routeStore"


export const SideBarRoutes = () => {
    const route = useRouteStore((state) => state.path)
    const setRoute = useRouteStore((state) => state.setPath)
    return (
        <div className="w-full flex flex-col px-5">
            <div className="self-start text-start w-full flex flex-col gap-y-4 ">
                <div className={`cursor-pointer ${route === "dashboard" ? "bg-primaryLight dark:bg-secondaryDark" : ""} text-xl font-bold p-5 rounded-xl text-black dark:text-white flex gap-x-2`} onClick={() => setRoute("dashboard")}>
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                    </svg>
                    <p className={``}>Dashboard</p>
                </div>
                <div className={`cursor-pointer ${route === "projects" ? "bg-primaryLight dark:bg-secondaryDark" : ""}  text-xl font-bold p-5 rounded-xl text-black dark:text-white flex gap-x-2 `} onClick={() => setRoute("projects")}>
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                    </svg>
                    <p className=''>Projects</p>
                </div>
                <div className={`cursor-pointer ${route === "tasks" ? "bg-primaryLight dark:bg-secondaryDark" : ""} text-xl font-bold p-5 rounded-xl text-black dark:text-white flex gap-x-2`} onClick={() => setRoute("tasks")}>
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
                    </svg>
                    <p className=''>Tasks</p>
                </div>
                <div className={`cursor-pointer items-center ${route === "calendar" ? "bg-primaryLight dark:bg-secondaryDark" : ""} text-xl font-bold p-5 rounded-xl text-black dark:text-white flex gap-x-2`} onClick={() => setRoute("calendar")}>
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <p className=''>Calendar</p>
                </div>
            </div>
        </div>
    )
}