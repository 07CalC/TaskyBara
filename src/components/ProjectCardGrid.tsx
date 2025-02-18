"use client";
import { ProjectCard } from "./ProjectCard";
import { Task } from "@/types/types";
import { useProjectStore } from "@/store/projectStore";
import { useTaskStore } from "@/store/tasksStore";
import { NotFound } from "./NotFound";

export const ProjectCardGrid = () => {
  const localProjects = useProjectStore((state) => state.localProjects);
  const localTasks = useTaskStore((state) => state.localTasks);
  const getTasksForAProject = (projectId: number): Task[] => {
    const filteredTasks: Task[] = localTasks.filter(
      (task) => task.projectId === projectId
    );
    return filteredTasks;
  };
  return (
    <>
      {localProjects.length === 0 && <NotFound title="No Projects Found" />}
      {localProjects.length !== 0 && (
        <div className=" grid grid-cols-1 sm:grid-cols-3 gap-4">
          {localProjects.map((item, index) => (
            <ProjectCard
              key={index}
              item={item}
              index={index}
              getTasksForAProject={getTasksForAProject}
            />
          ))}
        </div>
      )}
    </>
  );
};
