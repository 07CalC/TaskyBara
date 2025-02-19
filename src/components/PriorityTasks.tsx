import { db, projects, tasks } from "@/db/schema";
import { desc, eq } from "drizzle-orm";
import { NotFound } from "./NotFound";
import Link from "next/link";
import { auth } from "@/auth";
import { Task } from "@/types/types";

export const PriorityTasks = async () => {
  const session = await auth();
  const fetchedTasks: Task[] = await db
    .select()
    .from(tasks)
    .where(
      eq(tasks.priority, "high") &&
        eq(tasks.isCompleted, false) &&
        eq(tasks.userId, session?.user.id || "")
    )
    .orderBy(desc(tasks.createdAt));

  const getProjectName = async (projectId: number): Promise<{ name: string }> => {
    const result: {name: string}[] = await db
      .select({ name: projects.name })
      .from(projects)
      .where(eq(projects.id, projectId));
    return result[0];
  };

  return (
    <div className="w-full sm:w-1/2 sm:h-full bg-red-200 dark:bg-red-950 rounded-xl flex flex-col p-4 gap-y-4">
      <div className="w-full justify-between flex items-center">
        <p className="text-2xl font-bold text-black dark:text-white">
          Priority Tasks
        </p>
        <Link href="/console/tasks">
          <p className="text-md cursor-pointer text-blue-500">view all</p>
        </Link>
      </div>
      {fetchedTasks.length === 0 && <NotFound title="Nothing Found" />}
      {fetchedTasks.splice(0, 5).map((task, index) => (
        <div
          key={index}
          className="w-full p-2 gap-x-4 flex justify-between items-center"
        >
          <div className="flex flex-col ">
            <p className="text-xl text-black dark:text-white">{task.title}</p>
            <p className="text-sm text-textLight dark:text-textDark">
              {getProjectName(task.projectId).then((project) => project.name)}
            </p>
          </div>
          <p className="text-md text-textLight dark:text-textDark">
            {new Date(task.dueDate).toLocaleDateString()}
          </p>
        </div>
      ))}
    </div>
  );
};
