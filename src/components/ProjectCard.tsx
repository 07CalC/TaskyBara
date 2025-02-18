import { Project, Task } from "@/types/types";
import Link from "next/link";

type props = {
  item: Project;
  index: number;
  getTasksForAProject: (projectId: number) => Task[];
};

export const ProjectCard = ({ item, index, getTasksForAProject }: props) => {
  return (
    <Link href={`/console/projects/${item.id}`}>
      <div
        key={index}
        className="cursor-pointer w-full flex flex-col gap-y-4 h-full bg-secondaryLight dark:bg-primaryDark p-4 rounded-xl justify-between"
      >
        <p className="text-lg font-bold text-black dark:text-white">
          {item.name}
        </p>
        <p className="text-md text-textLight dark:text-textDark">
          {item.description}
        </p>
        <p className="text-md text-center text-textLight dark:text-textDark">
          Tasks
        </p>
        <div className="w-full flex justify-start gap-x-3 items-center">
          <p className="text-sm py-1 px-2 rounded-2xl bg-textLight dark:bg-textDark text-black">
            total: {getTasksForAProject(item.id).length.toString()}
          </p>
          <p className="text-sm py-1 px-2 rounded-2xl bg-green-500 text-black">
            completed:{" "}
            {getTasksForAProject(item.id)
              .filter((task) => task.isCompleted)
              .length.toString()}
          </p>
          <p className="text-sm py-1 px-2 rounded-2xl bg-orange-500 text-black">
            Pending:{" "}
            {getTasksForAProject(item.id)
              .filter((task) => !task.isCompleted)
              .length.toString()}
          </p>
        </div>
      </div>
    </Link>
  );
};
