"use client";

import { useTaskStore } from "@/store/tasksStore";
import { TaskCard } from "./TaskCard";
import { NotFound } from "@/components/NotFound";
import { Task } from "@/types/types";

type props = {
  projectId?: number;
};

export const TasksList = ({ projectId }: props) => {
  let fetchedTasks: Task[] = useTaskStore((state) => state.localTasks)
    .sort((a, b) => {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    })
    .sort((a, b) => {
      return (a.isCompleted ? 1 : 0) - (b.isCompleted ? 1 : 0);
    });
  if (projectId !== undefined) {
    fetchedTasks = fetchedTasks.filter((task) => task.projectId === projectId);
  }
  return (
    <div className="w-full flex-col overflow-x-auto flex  bg-primaryLight dark:bg-secondaryDark rounded-xl p-4">
      {fetchedTasks.length === 0 && <NotFound title="No Tasks Found" />}
      {fetchedTasks.length !== 0 && (
        <div className="min-w-max">
          <div className="w-full flex items-center justify-between p-4">
            <p className="text-md sm:text-xl sm:w-1/3 font-bold text-black dark:text-white">
              Task
            </p>
            <p className="text-md sm:text-xl font-bold text-black dark:text-white">
              Status
            </p>
            <p className="text-md sm:text-xl font-bold text-black dark:text-white">
              Priority
            </p>
            <p className="text-md sm:text-xl font-bold text-black dark:text-white">
              Project
            </p>
            <p className="text-md sm:text-xl font-bold text-black dark:text-white">
              Due Date
            </p>
          </div>
          {fetchedTasks.map((task, index) => (
            <TaskCard task={task} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};
