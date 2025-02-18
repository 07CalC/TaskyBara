import { Task } from "@/types/types";
import toast from "react-hot-toast";
import { create } from "zustand";

type TaskStore = {
  localTasks: Task[];
  setLocalTasks: (tasks: Task[]) => void;
  checkTask: (taskId: number) => void;
};

export const useTaskStore = create<TaskStore>((set) => ({
  localTasks: [],
  setLocalTasks: (tasks: Task[]) => set({ localTasks: tasks }),
  checkTask: async (taskId: number) => {
    set((state) => {
      const updatedTasks = state.localTasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, isCompleted: !task.isCompleted };
        }
        return task;
      });
      return { localTasks: updatedTasks };
    });
    const svResponse = await fetch("/api/task/toggletask", {
      method: "POST",
      body: JSON.stringify({
        taskId: taskId,
      }),
    });
    if (svResponse.ok) {
      toast("toggled task");
    } else {
      toast("something went wrong");
    }
  },
}));
