import { auth } from "@/auth"
import { PageHeader } from "@/components/PageHeader"
import { redirect } from "next/navigation"


const mockData = [
    {
        title: 'task 1',
        project: 'taskybara',
        priority: 'high',
        dueDate: '2023-01-01',
        isCompleted: false
    },
    {
        title: 'task 2',
        project: 'taskybara',
        priority: 'high',
        dueDate: '2023-01-01',
        isCompleted: false
    },
    {
        title: 'task 3',
        project: 'taskybara',
        priority: 'high',
        dueDate: '2023-01-01',
        isCompleted: false
    }

]


export default async function Dashboard() {
    const session = await auth()
    if(!session) redirect('/login')
    return(
        <div className="w-full flex flex-col p-4 gap-y-4">
            <PageHeader title="Tasks" />
            <div className="w-full flex gap-x-4">
                <div className="w-1/3 flex flex-col gap-y-4 h-full bg-[#fee2e2] border border-[#df3737] p-4 rounded-xl">
                    <p className="text-lg font-bold text-[#df3737]">High Priority</p>
                    {mockData.map((item, index) => (
                        <div key={index} className="w-full flex p-2 items-center justify-between border border-[#df3737] rounded-lg bg-secondaryLight dark:bg-primaryDark gap-y-2">
                            <div className="flex flex-col">
                            <p className="text-md font-bold text-black dark:text-white">{item.title}</p>
                            <p className="text-sm text-textLight dark:text-textDark">{item.project}</p>
                            </div>
                            <p className="text-sm text-textLight dark:text-textDark">{item.dueDate}</p>
                            <input type="checkbox"/>
                        </div>
                    ))}
                </div>
                <div className="w-1/3 h-full bg-[#fef9c3] p-4 rounded-xl">
                    
                </div>
                <div className="w-1/3 h-full bg-[#dcfce7] p-4 rounded-xl">
                    
                </div>
            </div>
        </div>
)
}