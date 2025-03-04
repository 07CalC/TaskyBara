import { useEffect } from "react";
import { useProjectStore } from "./projectStore";
import { useTaskStore } from "./tasksStore";
import { Project, Task } from "@/types/types";

export const useFetchAllData = () => {
  const setLocalProjects = useProjectStore((state) => state.setLocalProjects);
  const setLocalTasks = useTaskStore((state) => state.setLocalTasks);
  const fetchProjectsAndTasks = async () => {
    try {
      const projects = await fetch("/api/project/fetchProjects");
      const data: {fetchProjects: Project[]} = await projects.json();
      setLocalProjects(data.fetchProjects);
      const tasks = await fetch("/api/task/fetchtasks");
      const data2: {fetchTasks: Task[]} = await tasks.json();
      setLocalTasks(data2.fetchTasks);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProjectsAndTasks();
  });
};
