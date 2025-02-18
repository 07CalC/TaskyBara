import { useProjectStore } from "@/store/projectStore";
import { useTaskStore } from "@/store/tasksStore";
import { Project, Task } from "@/types/types";

type props = {
  task: Task;
};

export const TaskCard = ({ task }: props) => {
  const localProjects: Project[] = useProjectStore((state) => state.localProjects);
  const checkTask = useTaskStore((state) => state.checkTask);

  const projectName = localProjects.find(
    (project) => project.id == task.projectId
  )?.name;
  return (
    <div
      key={task.id}
      className="w-full flex items-center justify-between border-t-2 hover:bg-secondaryLight hover:dark:bg-primaryDark border-borderLight dark:border-borderDark rounded p-4"
    >
      <div className="w-1/3 flex gap-x-2 items-center self-start">
        <input
          type="checkbox"
          defaultChecked={task.isCompleted}
          onChange={() => checkTask(task.id)}
        />
        <p
          className={`text-md sm:text-xl ${
            task.isCompleted ? "line-through" : ""
          } text-black dark:text-white`}
        >
          {task.title}
        </p>
      </div>
      <p
        className={`text-sm sm:text-md text-white ${
          task.isCompleted ? "bg-green-500" : "bg-red-800"
        } px-2 py-1 rounded-2xl`}
      >
        {task.isCompleted ? "Completed" : "Pending"}
      </p>
      <p
        className={`text-sm sm:text-md ${
          task.priority === "high"
            ? "bg-red-500"
            : task.priority === "medium"
            ? "bg-orange-500"
            : "bg-green-500"
        } px-2 py-1 rounded-2xl`}
      >
        {task.priority}
      </p>
      <p className="text-sm sm:text-md text-textLight dark:text-textDark ">
        {projectName}
      </p>
      <p className="text-sm sm:text-md text-textLight dark:text-textDark ">
        {new Date(task.dueDate).toLocaleDateString()}
      </p>
    </div>
  );
};
