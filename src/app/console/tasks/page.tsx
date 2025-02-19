"use client"
import { NotFound } from "@/components/NotFound"
import { PageHeader } from "@/components/PageHeader"
import { TasksList } from "@/components/TaskList"
import { useTaskStore } from "@/store/tasksStore"
import { Task } from "@/types/types"
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"


export default function Dashboard() {
    const localTasks: Task[] = useTaskStore(state => state.localTasks)
    const session = useSession()
    if(!session) redirect('/login')
    return(
        <div className="w-full h-full flex flex-col p-4 gap-y-4 ">

            <PageHeader title="Tasks" />
            {localTasks === undefined || localTasks.length === 0 ? (
                <NotFound title="No Tasks Found" />
            ) : (localTasks.length !== 0 &&
                <TasksList />
            )
            }
        </div>
)
}