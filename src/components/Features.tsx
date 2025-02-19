import { MdTaskAlt } from "react-icons/md";
import { MdDashboard } from "react-icons/md";
import { MdCalendarToday } from "react-icons/md";

export const Features = () => {
    return (
        <div className="bg-primaryLight dark:bg-secondaryDark w-full gap-y-5 h-full items-center justify-center flex flex-col py-40">
            <p className="text-2xl sm:text-4xl px-4 font-bold text-black text-center dark:text-white">Powerful Features to Streamline Your Workflow</p>
            <div className="w-10/12 flex-col sm:flex-row flex justify-between gap-4 items-center">
                <div className="sm:w-1/4 flex border-4 rounded-xl p-5 border-borderLight dark:border-borderDark flex-col items-center justify-center gap-y-4">
                    <MdTaskAlt className="text-5xl text-black dark:text-white" />
                    <p className="text-2xl font-bold text-black dark:text-white">Task Management</p>
                    <p className="text-lg text-center text-textLight dark:text-textDark">Create, assign, and track tasks with ease.</p>
                </div>
                <div className="sm:w-1/4 flex border-4 rounded-xl p-5 border-borderLight dark:border-borderDark flex-col items-center justify-center gap-y-4">
                    <MdDashboard className="text-5xl text-black dark:text-white" />
                    <p className="text-2xl font-bold text-black dark:text-white">Intuitive Dashboard</p>
                    <p className="text-lg text-center text-textLight dark:text-textDark">Get a clear overview of your tasks, projects, and deadlines at a glance</p>
                </div>
                <div className="sm:w-1/4 flex border-4 rounded-xl p-5 border-borderLight dark:border-borderDark flex-col items-center justify-center gap-y-4">
                    <MdCalendarToday className="text-5xl text-black dark:text-white" />
                    <p className="text-2xl font-bold text-black dark:text-white">Calendar View</p>
                    <p className="text-lg text-center text-textLight dark:text-textDark">Visualize your schedule and manage your time effectively with our interactive calendar.</p>
                </div>
                <div className="sm:w-1/4 flex border-4 rounded-xl p-5 border-borderLight dark:border-borderDark flex-col items-center justify-center gap-y-4">
                    <MdCalendarToday className="text-5xl text-black dark:text-white" />
                    <p className="text-2xl font-bold text-black dark:text-white">Project Management</p>
                    <p className="text-lg text-center text-textLight dark:text-textDark">Create, manage, and track projects with ease.</p>
                </div>
                
            </div>
        </div>
    )
}